-- =====================================================================
-- SGLK - Estrutura inicial do banco de dados (Supabase)
--
-- Aplicada em 2026-09-25 no projeto vqqgbbnxomqkqytgcbsb como a migracao
-- 20260925231838 "estrutura_inicial_sglk" (Database > Migrations).
-- Este arquivo e a copia versionada dela. Ver memoria.md.
--
-- Quem pode o que:
--   visitante (sem login) -> ve os anuncios e as fotos
--   locatario             -> tudo do visitante + ve o WhatsApp dos anuncios
--   locador               -> tudo do locatario + cadastra, edita e apaga
--                            as proprias kitnets, fotos e WhatsApp
--
-- O tipo de conta e escolhido no cadastro e nao muda depois.
-- As 3 kitnets de demonstracao continuam so em site/js/dados-demo.js.
-- =====================================================================


-- ---------------------------------------------------------------------
-- Esquema interno: funcoes e dados que nunca ficam expostos na Data API
-- ---------------------------------------------------------------------

create schema if not exists privado;
revoke all on schema privado from public, anon, authenticated;


-- ---------------------------------------------------------------------
-- Funcoes auxiliares
-- ---------------------------------------------------------------------

-- Digitos verificadores do CPF (mesmo algoritmo de site/js/site.js).
-- Confere so se o numero e bem formado; nao confirma a identidade de ninguem.
create or replace function privado.cpf_valido(p_cpf text)
returns boolean
language plpgsql
immutable
set search_path = ''
as $$
declare
  soma integer;
  resto integer;
begin
  if p_cpf is null or p_cpf !~ '^[0-9]{11}$' or p_cpf ~ '^([0-9])\1{10}$' then
    return false;
  end if;

  soma := 0;
  for i in 1..9 loop
    soma := soma + substr(p_cpf, i, 1)::integer * (11 - i);
  end loop;
  resto := (soma * 10) % 11;
  if resto = 10 then resto := 0; end if;
  if resto <> substr(p_cpf, 10, 1)::integer then
    return false;
  end if;

  soma := 0;
  for i in 1..10 loop
    soma := soma + substr(p_cpf, i, 1)::integer * (12 - i);
  end loop;
  resto := (soma * 10) % 11;
  if resto = 10 then resto := 0; end if;
  return resto = substr(p_cpf, 11, 1)::integer;
end;
$$;

-- Mantem a coluna atualizado_em em dia.
create or replace function privado.definir_atualizado_em()
returns trigger
language plpgsql
set search_path = ''
as $$
begin
  new.atualizado_em := now();
  return new;
end;
$$;


-- ---------------------------------------------------------------------
-- Tabelas
-- ---------------------------------------------------------------------

-- Perfil publico-para-si-mesmo de cada conta. Criado automaticamente
-- no cadastro (trigger em auth.users, mais abaixo).
create table public.perfis (
  id uuid primary key
    references auth.users (id) on delete cascade
    deferrable initially deferred,
  tipo text not null check (tipo in ('locatario', 'locador')),
  nome text not null check (char_length(nome) between 2 and 120),
  ocupacao text check (ocupacao is null or char_length(ocupacao) between 2 and 80),
  criado_em timestamptz not null default now(),
  atualizado_em timestamptz not null default now(),
  -- Decisao de 2026-09-22: a ocupacao e pedida so de quem quer alugar.
  constraint perfis_locatario_tem_ocupacao check (tipo <> 'locatario' or ocupacao is not null)
);

-- CPF: fica no esquema privado, fora da Data API. Ninguem le pela
-- internet, nem o proprio dono. So um CPF por conta.
create table privado.documentos (
  usuario_id uuid primary key
    references auth.users (id) on delete cascade
    deferrable initially deferred,
  cpf text not null unique check (privado.cpf_valido(cpf)),
  criado_em timestamptz not null default now()
);

-- Anuncios. Os nomes das colunas seguem o objeto usado em site/js.
create table public.kitnets (
  id uuid primary key default gen_random_uuid(),
  locador_id uuid not null default auth.uid()
    references public.perfis (id) on delete cascade,
  nome text not null check (char_length(btrim(nome)) between 1 and 100),
  descricao text not null check (char_length(btrim(descricao)) between 1 and 2000),
  bairro text not null check (char_length(btrim(bairro)) between 1 and 80),
  preco integer not null check (preco between 1 and 100000),
  area integer not null check (area between 1 and 1000),
  quartos smallint not null default 1 check (quartos between 1 and 20),
  banheiros smallint not null default 1 check (banheiros between 1 and 20),
  comodidades text[] not null default '{}' check (cardinality(comodidades) <= 20),
  status text not null default 'disponivel' check (status in ('disponivel', 'alugado')),
  criado_em timestamptz not null default now(),
  atualizado_em timestamptz not null default now()
);
create index kitnets_locador_id_idx on public.kitnets (locador_id);

-- WhatsApp separado do anuncio: so quem esta logado consegue ler.
-- E isso que torna real a exigencia de login para o contato (specs/site.md).
create table public.kitnets_contato (
  kitnet_id uuid primary key references public.kitnets (id) on delete cascade,
  whatsapp text not null check (whatsapp ~ '^[0-9]{10,15}$'),
  atualizado_em timestamptz not null default now()
);

-- Fotos: o arquivo fica no Storage (bucket fotos-kitnets); aqui fica o
-- caminho, a ordem e o texto alternativo.
create table public.kitnet_fotos (
  id uuid primary key default gen_random_uuid(),
  kitnet_id uuid not null references public.kitnets (id) on delete cascade,
  caminho text not null unique check (char_length(caminho) between 1 and 300),
  texto_alternativo text not null default 'Foto enviada pelo anunciante.'
    check (char_length(texto_alternativo) between 1 and 200),
  ordem smallint not null default 0 check (ordem between 0 and 19),
  criado_em timestamptz not null default now()
);
create index kitnet_fotos_kitnet_id_ordem_idx on public.kitnet_fotos (kitnet_id, ordem);

create trigger perfis_atualizado_em before update on public.perfis
  for each row execute function privado.definir_atualizado_em();
create trigger kitnets_atualizado_em before update on public.kitnets
  for each row execute function privado.definir_atualizado_em();
create trigger kitnets_contato_atualizado_em before update on public.kitnets_contato
  for each row execute function privado.definir_atualizado_em();


-- ---------------------------------------------------------------------
-- Cadastro: cria o perfil e guarda o CPF quando a conta nasce
-- ---------------------------------------------------------------------
-- O site envia tipo, nome, ocupacao e cpf em options.data do signUp.
-- Esses metadados sao editaveis pelo usuario e vao dentro do token de
-- acesso, entao: (1) a autorizacao usa so public.perfis, nunca os
-- metadados; (2) o CPF e retirado dos metadados antes de ser gravado.

create or replace function privado.criar_perfil_novo_usuario()
returns trigger
language plpgsql
security definer
set search_path = ''
as $$
declare
  v_tipo text := new.raw_user_meta_data ->> 'tipo';
  v_nome text := btrim(coalesce(new.raw_user_meta_data ->> 'nome', ''));
  v_ocupacao text := nullif(btrim(coalesce(new.raw_user_meta_data ->> 'ocupacao', '')), '');
  v_cpf text := regexp_replace(coalesce(new.raw_user_meta_data ->> 'cpf', ''), '[^0-9]', '', 'g');
begin
  if v_tipo is null or v_tipo not in ('locatario', 'locador') then
    raise exception 'SGLK: tipo de conta invalido' using errcode = 'check_violation';
  end if;
  if not privado.cpf_valido(v_cpf) then
    raise exception 'SGLK: CPF invalido' using errcode = 'check_violation';
  end if;
  if v_tipo = 'locador' then
    v_ocupacao := null;
  end if;

  insert into public.perfis (id, tipo, nome, ocupacao)
  values (new.id, v_tipo, v_nome, v_ocupacao);

  insert into privado.documentos (usuario_id, cpf)
  values (new.id, v_cpf);

  new.raw_user_meta_data := new.raw_user_meta_data - 'cpf';
  return new;
end;
$$;

-- Se o CPF voltar aos metadados por outro caminho (novo signUp de conta
-- ainda nao confirmada, updateUser), ele e descartado.
create or replace function privado.remover_cpf_dos_metadados()
returns trigger
language plpgsql
security definer
set search_path = ''
as $$
begin
  new.raw_user_meta_data := new.raw_user_meta_data - 'cpf';
  return new;
end;
$$;

revoke all on function privado.cpf_valido(text) from public, anon, authenticated;
revoke all on function privado.definir_atualizado_em() from public, anon, authenticated;
revoke all on function privado.criar_perfil_novo_usuario() from public, anon, authenticated;
revoke all on function privado.remover_cpf_dos_metadados() from public, anon, authenticated;

create trigger sglk_criar_perfil
  before insert on auth.users
  for each row execute function privado.criar_perfil_novo_usuario();

create trigger sglk_remover_cpf_dos_metadados
  before update of raw_user_meta_data on auth.users
  for each row execute function privado.remover_cpf_dos_metadados();


-- ---------------------------------------------------------------------
-- Permissoes (so o necessario) e RLS
-- ---------------------------------------------------------------------

alter table public.perfis enable row level security;
alter table privado.documentos enable row level security;
alter table public.kitnets enable row level security;
alter table public.kitnets_contato enable row level security;
alter table public.kitnet_fotos enable row level security;

revoke all on table public.perfis, public.kitnets, public.kitnets_contato, public.kitnet_fotos
  from anon, authenticated;
revoke all on table privado.documentos from public, anon, authenticated;

grant select on public.perfis to authenticated;
grant update (nome, ocupacao) on public.perfis to authenticated;

grant select on public.kitnets to anon, authenticated;
grant insert (nome, descricao, bairro, preco, area, quartos, banheiros, comodidades, status)
  on public.kitnets to authenticated;
grant update (nome, descricao, bairro, preco, area, quartos, banheiros, comodidades, status)
  on public.kitnets to authenticated;
grant delete on public.kitnets to authenticated;

grant select, delete on public.kitnets_contato to authenticated;
grant insert (kitnet_id, whatsapp) on public.kitnets_contato to authenticated;
grant update (whatsapp) on public.kitnets_contato to authenticated;

grant select on public.kitnet_fotos to anon, authenticated;
grant insert (kitnet_id, caminho, texto_alternativo, ordem) on public.kitnet_fotos to authenticated;
grant update (texto_alternativo, ordem) on public.kitnet_fotos to authenticated;
grant delete on public.kitnet_fotos to authenticated;

-- perfis
create policy "Cada pessoa ve o proprio perfil"
  on public.perfis for select to authenticated
  using ((select auth.uid()) = id);

create policy "Cada pessoa edita o proprio perfil"
  on public.perfis for update to authenticated
  using ((select auth.uid()) = id)
  with check ((select auth.uid()) = id);

-- kitnets
create policy "Todos veem os anuncios"
  on public.kitnets for select to anon, authenticated
  using (true);

create policy "Locadores cadastram kitnets em seu nome"
  on public.kitnets for insert to authenticated
  with check (
    (select auth.uid()) = locador_id
    and exists (
      select 1 from public.perfis p
      where p.id = (select auth.uid()) and p.tipo = 'locador'
    )
  );

create policy "Locadores editam as proprias kitnets"
  on public.kitnets for update to authenticated
  using ((select auth.uid()) = locador_id)
  with check ((select auth.uid()) = locador_id);

create policy "Locadores apagam as proprias kitnets"
  on public.kitnets for delete to authenticated
  using ((select auth.uid()) = locador_id);

-- kitnets_contato
create policy "Quem tem conta ve o WhatsApp dos anuncios"
  on public.kitnets_contato for select to authenticated
  using (exists (select 1 from public.perfis p where p.id = (select auth.uid())));

create policy "Locadores cadastram o WhatsApp das proprias kitnets"
  on public.kitnets_contato for insert to authenticated
  with check (exists (
    select 1 from public.kitnets k
    where k.id = kitnet_id and k.locador_id = (select auth.uid())
  ));

create policy "Locadores editam o WhatsApp das proprias kitnets"
  on public.kitnets_contato for update to authenticated
  using (exists (
    select 1 from public.kitnets k
    where k.id = kitnet_id and k.locador_id = (select auth.uid())
  ))
  with check (exists (
    select 1 from public.kitnets k
    where k.id = kitnet_id and k.locador_id = (select auth.uid())
  ));

create policy "Locadores apagam o WhatsApp das proprias kitnets"
  on public.kitnets_contato for delete to authenticated
  using (exists (
    select 1 from public.kitnets k
    where k.id = kitnet_id and k.locador_id = (select auth.uid())
  ));

-- kitnet_fotos
create policy "Todos veem as fotos dos anuncios"
  on public.kitnet_fotos for select to anon, authenticated
  using (true);

create policy "Locadores registram fotos das proprias kitnets"
  on public.kitnet_fotos for insert to authenticated
  with check (
    caminho like (select auth.uid())::text || '/%'
    and exists (
      select 1 from public.kitnets k
      where k.id = kitnet_id and k.locador_id = (select auth.uid())
    )
  );

create policy "Locadores editam fotos das proprias kitnets"
  on public.kitnet_fotos for update to authenticated
  using (exists (
    select 1 from public.kitnets k
    where k.id = kitnet_id and k.locador_id = (select auth.uid())
  ))
  with check (exists (
    select 1 from public.kitnets k
    where k.id = kitnet_id and k.locador_id = (select auth.uid())
  ));

create policy "Locadores apagam fotos das proprias kitnets"
  on public.kitnet_fotos for delete to authenticated
  using (exists (
    select 1 from public.kitnets k
    where k.id = kitnet_id and k.locador_id = (select auth.uid())
  ));


-- ---------------------------------------------------------------------
-- Storage: arquivos das fotos
-- ---------------------------------------------------------------------
-- Bucket publico (qualquer pessoa abre a foto pelo link), ate 2 MB por
-- arquivo e so imagens. Cada locador so envia e apaga na propria pasta
-- (<id do usuario>/...). Sem politica de leitura para visitantes: o link
-- publico funciona, mas ninguem lista os arquivos de outra pessoa.

insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values ('fotos-kitnets', 'fotos-kitnets', true, 2097152,
        array['image/jpeg', 'image/png', 'image/webp'])
on conflict (id) do nothing;

create policy "Locadores enviam fotos para a propria pasta"
  on storage.objects for insert to authenticated
  with check (
    bucket_id = 'fotos-kitnets'
    and (storage.foldername(name))[1] = (select auth.uid())::text
    and exists (
      select 1 from public.perfis p
      where p.id = (select auth.uid()) and p.tipo = 'locador'
    )
  );

create policy "Locadores veem os arquivos da propria pasta"
  on storage.objects for select to authenticated
  using (
    bucket_id = 'fotos-kitnets'
    and (storage.foldername(name))[1] = (select auth.uid())::text
  );

create policy "Locadores apagam fotos da propria pasta"
  on storage.objects for delete to authenticated
  using (
    bucket_id = 'fotos-kitnets'
    and (storage.foldername(name))[1] = (select auth.uid())::text
  );
