-- =====================================================================
-- SGLK - Moderacao (Supabase)
--
-- Aplicada em 2026-09-29 no projeto vqqgbbnxomqkqytgcbsb como a migracao
-- 20260929144034 "moderacao", depois de "estrutura_inicial_sglk" e "telefone_no_perfil".
-- Ver memoria.md.
--
-- Decisoes de 2026-09-29 (documento da disciplina: UC-06, HU-06, RN-02):
--   - administrador: conta com app_metadata.papel = 'admin' (so o banco
--     altera app_metadata; o usuario nao consegue pelo site);
--   - locador novo fica "pendente": os anuncios dele so aparecem para o
--     publico depois que a moderacao aprova o cadastro;
--   - moderacao inativa e reativa anuncios (com motivo, que o dono ve) e
--     edita qualquer anuncio;
--   - quem tem conta pode denunciar um anuncio (uma denuncia aberta por
--     pessoa e anuncio);
--   - conta suspensa: continua entrando e vendo os proprios dados e o
--     motivo, mas nao ve contatos, nao publica, nao edita e nao denuncia;
--     os anuncios dela saem do ar. Pode apagar os proprios anuncios.
-- =====================================================================


-- ---------------------------------------------------------------------
-- Quem e administrador
-- ---------------------------------------------------------------------

create or replace function public.eh_admin()
returns boolean
language sql
stable
set search_path = ''
as $$
  select coalesce((select auth.jwt()) -> 'app_metadata' ->> 'papel', '') = 'admin';
$$;
revoke all on function public.eh_admin() from public;
grant execute on function public.eh_admin() to anon, authenticated;


-- ---------------------------------------------------------------------
-- Perfis: situacao da conta e aprovacao do locador
-- ---------------------------------------------------------------------

alter table public.perfis
  add column situacao text not null default 'ativa'
    check (situacao in ('ativa', 'suspensa')),
  add column motivo_suspensao text
    check (motivo_suspensao is null or char_length(motivo_suspensao) between 3 and 500),
  add column suspensa_em timestamptz,
  add column aprovacao text
    check (aprovacao in ('pendente', 'aprovado')),
  add column aprovado_em timestamptz,
  add constraint perfis_suspensa_tem_motivo
    check (situacao = 'ativa' or motivo_suspensao is not null),
  add constraint perfis_aprovacao_so_de_locador
    check ((tipo = 'locador') = (aprovacao is not null));

-- So a moderacao muda situacao e aprovacao; as datas se ajustam sozinhas.
create or replace function privado.proteger_perfil()
returns trigger
language plpgsql
set search_path = ''
as $$
begin
  if (new.situacao, new.motivo_suspensao, new.aprovacao)
       is distinct from (old.situacao, old.motivo_suspensao, old.aprovacao)
     and not public.eh_admin() then
    raise exception 'SGLK: so a moderacao altera a situacao da conta'
      using errcode = 'insufficient_privilege';
  end if;
  if new.situacao is distinct from old.situacao then
    new.suspensa_em := case when new.situacao = 'suspensa' then now() end;
    if new.situacao = 'ativa' then
      new.motivo_suspensao := null;
    end if;
  end if;
  if new.aprovacao is distinct from old.aprovacao then
    new.aprovado_em := case when new.aprovacao = 'aprovado' then now() end;
  end if;
  return new;
end;
$$;

create trigger perfis_proteger before update on public.perfis
  for each row execute function privado.proteger_perfil();

grant update (situacao, motivo_suspensao, aprovacao) on public.perfis to authenticated;

drop policy "Cada pessoa ve o proprio perfil" on public.perfis;
drop policy "Cada pessoa edita o proprio perfil" on public.perfis;

create policy "Cada pessoa ve o proprio perfil e a moderacao ve todos"
  on public.perfis for select to authenticated
  using ((select auth.uid()) = id or (select public.eh_admin()));

create policy "Cada pessoa edita o proprio perfil e a moderacao edita todos"
  on public.perfis for update to authenticated
  using ((select auth.uid()) = id or (select public.eh_admin()))
  with check ((select auth.uid()) = id or (select public.eh_admin()));

-- Cadastro: locador nasce "pendente". O resto da funcao e igual a da
-- migracao telefone_no_perfil.
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
  v_telefone text := regexp_replace(coalesce(new.raw_user_meta_data ->> 'telefone', ''), '[^0-9]', '', 'g');
begin
  if v_tipo is null or v_tipo not in ('locatario', 'locador') then
    raise exception 'SGLK: tipo de conta invalido' using errcode = 'check_violation';
  end if;
  if not privado.cpf_valido(v_cpf) then
    raise exception 'SGLK: CPF invalido' using errcode = 'check_violation';
  end if;
  if char_length(v_telefone) in (12, 13) and left(v_telefone, 2) = '55' then
    v_telefone := substr(v_telefone, 3);
  end if;
  if v_telefone !~ '^[1-9]{2}(9[0-9]{8}|[2-8][0-9]{7})$' then
    raise exception 'SGLK: telefone invalido' using errcode = 'check_violation';
  end if;
  if v_tipo = 'locador' then
    v_ocupacao := null;
  end if;

  insert into public.perfis (id, tipo, nome, ocupacao, telefone, aprovacao)
  values (new.id, v_tipo, v_nome, v_ocupacao, v_telefone,
          case when v_tipo = 'locador' then 'pendente' end);

  insert into privado.documentos (usuario_id, cpf)
  values (new.id, v_cpf);

  new.raw_user_meta_data := new.raw_user_meta_data - 'cpf' - 'telefone';
  return new;
end;
$$;


-- ---------------------------------------------------------------------
-- Anuncio publico = anuncio ativo de locador aprovado e com conta ativa
-- ---------------------------------------------------------------------
-- Visitantes nao leem perfis, entao a regra precisa de uma funcao que
-- consulte o perfil por eles. Ela so responde sim/nao e fica no esquema
-- privado (fora da Data API; nao da para chama-la pela internet).

create or replace function privado.locador_liberado(p_locador uuid)
returns boolean
language sql
stable
security definer
set search_path = ''
as $$
  select exists (
    select 1 from public.perfis p
    where p.id = p_locador
      and p.tipo = 'locador'
      and p.aprovacao = 'aprovado'
      and p.situacao = 'ativa'
  );
$$;
revoke all on function privado.locador_liberado(uuid) from public;
grant usage on schema privado to anon, authenticated;
grant execute on function privado.locador_liberado(uuid) to anon, authenticated;


-- ---------------------------------------------------------------------
-- Kitnets: inativacao pela moderacao
-- ---------------------------------------------------------------------

alter table public.kitnets
  add column moderacao text not null default 'ativo'
    check (moderacao in ('ativo', 'inativo')),
  add column motivo_moderacao text
    check (motivo_moderacao is null or char_length(motivo_moderacao) between 3 and 500),
  add column moderado_em timestamptz,
  add constraint kitnets_inativo_tem_motivo
    check (moderacao = 'ativo' or motivo_moderacao is not null);

create or replace function privado.proteger_moderacao_kitnet()
returns trigger
language plpgsql
set search_path = ''
as $$
begin
  if (new.moderacao, new.motivo_moderacao) is distinct from (old.moderacao, old.motivo_moderacao)
     and not public.eh_admin() then
    raise exception 'SGLK: so a moderacao ativa ou inativa anuncios'
      using errcode = 'insufficient_privilege';
  end if;
  if new.moderacao is distinct from old.moderacao then
    new.moderado_em := now();
    if new.moderacao = 'ativo' then
      new.motivo_moderacao := null;
    end if;
  end if;
  return new;
end;
$$;

create trigger kitnets_proteger_moderacao before update on public.kitnets
  for each row execute function privado.proteger_moderacao_kitnet();

grant update (moderacao, motivo_moderacao) on public.kitnets to authenticated;

drop policy "Todos veem os anuncios" on public.kitnets;
drop policy "Locadores cadastram kitnets em seu nome" on public.kitnets;
drop policy "Locadores editam as proprias kitnets" on public.kitnets;
drop policy "Locadores apagam as proprias kitnets" on public.kitnets;

create policy "Visitantes veem os anuncios liberados"
  on public.kitnets for select to anon
  using (moderacao = 'ativo' and privado.locador_liberado(locador_id));

create policy "Quem tem conta ve os liberados, os proprios e a moderacao ve todos"
  on public.kitnets for select to authenticated
  using (
    locador_id = (select auth.uid())
    or (select public.eh_admin())
    or (moderacao = 'ativo' and privado.locador_liberado(locador_id))
  );

create policy "Locadores com conta ativa cadastram kitnets em seu nome"
  on public.kitnets for insert to authenticated
  with check (
    locador_id = (select auth.uid())
    and exists (
      select 1 from public.perfis p
      where p.id = (select auth.uid()) and p.tipo = 'locador' and p.situacao = 'ativa'
    )
  );

create policy "Donos com conta ativa e a moderacao editam kitnets"
  on public.kitnets for update to authenticated
  using (
    (select public.eh_admin())
    or (
      locador_id = (select auth.uid())
      and exists (select 1 from public.perfis p where p.id = (select auth.uid()) and p.situacao = 'ativa')
    )
  )
  with check (
    (select public.eh_admin())
    or (
      locador_id = (select auth.uid())
      and exists (select 1 from public.perfis p where p.id = (select auth.uid()) and p.situacao = 'ativa')
    )
  );

-- O dono apaga os proprios anuncios mesmo com a conta suspensa.
create policy "Donos apagam as proprias kitnets"
  on public.kitnets for delete to authenticated
  using (locador_id = (select auth.uid()));


-- ---------------------------------------------------------------------
-- WhatsApp e fotos seguem a visibilidade do anuncio
-- ---------------------------------------------------------------------
-- Os "exists (select ... from public.kitnets ...)" abaixo passam pelo RLS
-- de kitnets: so enxergam anuncios que a propria pessoa pode ver.

drop policy "Quem tem conta ve o WhatsApp dos anuncios" on public.kitnets_contato;
drop policy "Locadores cadastram o WhatsApp das proprias kitnets" on public.kitnets_contato;
drop policy "Locadores editam o WhatsApp das proprias kitnets" on public.kitnets_contato;
drop policy "Locadores apagam o WhatsApp das proprias kitnets" on public.kitnets_contato;

create policy "Contas ativas veem o WhatsApp dos anuncios que podem ver"
  on public.kitnets_contato for select to authenticated
  using (
    exists (select 1 from public.perfis p where p.id = (select auth.uid()) and p.situacao = 'ativa')
    and exists (select 1 from public.kitnets k where k.id = kitnet_id)
  );

create policy "Donos com conta ativa cadastram o WhatsApp"
  on public.kitnets_contato for insert to authenticated
  with check (
    exists (select 1 from public.kitnets k where k.id = kitnet_id and k.locador_id = (select auth.uid()))
    and exists (select 1 from public.perfis p where p.id = (select auth.uid()) and p.situacao = 'ativa')
  );

create policy "Donos com conta ativa e a moderacao editam o WhatsApp"
  on public.kitnets_contato for update to authenticated
  using (
    (select public.eh_admin())
    or (
      exists (select 1 from public.kitnets k where k.id = kitnet_id and k.locador_id = (select auth.uid()))
      and exists (select 1 from public.perfis p where p.id = (select auth.uid()) and p.situacao = 'ativa')
    )
  )
  with check (
    (select public.eh_admin())
    or (
      exists (select 1 from public.kitnets k where k.id = kitnet_id and k.locador_id = (select auth.uid()))
      and exists (select 1 from public.perfis p where p.id = (select auth.uid()) and p.situacao = 'ativa')
    )
  );

create policy "Donos apagam o WhatsApp das proprias kitnets"
  on public.kitnets_contato for delete to authenticated
  using (exists (select 1 from public.kitnets k where k.id = kitnet_id and k.locador_id = (select auth.uid())));

drop policy "Todos veem as fotos dos anuncios" on public.kitnet_fotos;
drop policy "Locadores registram fotos das proprias kitnets" on public.kitnet_fotos;
drop policy "Locadores editam fotos das proprias kitnets" on public.kitnet_fotos;
drop policy "Locadores apagam fotos das proprias kitnets" on public.kitnet_fotos;

create policy "Fotos seguem a visibilidade do anuncio"
  on public.kitnet_fotos for select to anon, authenticated
  using (exists (select 1 from public.kitnets k where k.id = kitnet_id));

create policy "Donos com conta ativa registram fotos"
  on public.kitnet_fotos for insert to authenticated
  with check (
    caminho like (select auth.uid())::text || '/%'
    and exists (select 1 from public.kitnets k where k.id = kitnet_id and k.locador_id = (select auth.uid()))
    and exists (select 1 from public.perfis p where p.id = (select auth.uid()) and p.situacao = 'ativa')
  );

create policy "Donos com conta ativa e a moderacao editam fotos"
  on public.kitnet_fotos for update to authenticated
  using (
    (select public.eh_admin())
    or (
      exists (select 1 from public.kitnets k where k.id = kitnet_id and k.locador_id = (select auth.uid()))
      and exists (select 1 from public.perfis p where p.id = (select auth.uid()) and p.situacao = 'ativa')
    )
  )
  with check (
    (select public.eh_admin())
    or (
      exists (select 1 from public.kitnets k where k.id = kitnet_id and k.locador_id = (select auth.uid()))
      and exists (select 1 from public.perfis p where p.id = (select auth.uid()) and p.situacao = 'ativa')
    )
  );

create policy "Donos e a moderacao apagam fotos"
  on public.kitnet_fotos for delete to authenticated
  using (
    (select public.eh_admin())
    or exists (select 1 from public.kitnets k where k.id = kitnet_id and k.locador_id = (select auth.uid()))
  );

drop policy "Locadores enviam fotos para a propria pasta" on storage.objects;
drop policy "Locadores veem os arquivos da propria pasta" on storage.objects;
drop policy "Locadores apagam fotos da propria pasta" on storage.objects;

create policy "Locadores com conta ativa enviam fotos para a propria pasta"
  on storage.objects for insert to authenticated
  with check (
    bucket_id = 'fotos-kitnets'
    and (storage.foldername(name))[1] = (select auth.uid())::text
    and exists (
      select 1 from public.perfis p
      where p.id = (select auth.uid()) and p.tipo = 'locador' and p.situacao = 'ativa'
    )
  );

create policy "Donos e a moderacao veem os arquivos de fotos"
  on storage.objects for select to authenticated
  using (
    bucket_id = 'fotos-kitnets'
    and ((storage.foldername(name))[1] = (select auth.uid())::text or (select public.eh_admin()))
  );

create policy "Donos e a moderacao apagam arquivos de fotos"
  on storage.objects for delete to authenticated
  using (
    bucket_id = 'fotos-kitnets'
    and ((storage.foldername(name))[1] = (select auth.uid())::text or (select public.eh_admin()))
  );


-- ---------------------------------------------------------------------
-- Denuncias
-- ---------------------------------------------------------------------

create table public.denuncias (
  id uuid primary key default gen_random_uuid(),
  kitnet_id uuid not null references public.kitnets (id) on delete cascade,
  autor_id uuid not null default auth.uid()
    references public.perfis (id) on delete cascade,
  motivo text not null
    check (motivo in ('golpe', 'informacoes_falsas', 'fotos_falsas', 'outro')),
  detalhes text not null check (char_length(btrim(detalhes)) between 10 and 1000),
  situacao text not null default 'aberta'
    check (situacao in ('aberta', 'resolvida', 'descartada')),
  criado_em timestamptz not null default now(),
  analisada_em timestamptz,
  analisada_por uuid references public.perfis (id) on delete set null
);
create index denuncias_kitnet_id_idx on public.denuncias (kitnet_id);
create index denuncias_autor_id_idx on public.denuncias (autor_id);
create index denuncias_analisada_por_idx on public.denuncias (analisada_por);
create unique index denuncias_uma_aberta_por_pessoa
  on public.denuncias (kitnet_id, autor_id) where situacao = 'aberta';

create or replace function privado.registrar_analise_denuncia()
returns trigger
language plpgsql
set search_path = ''
as $$
begin
  if new.situacao is distinct from old.situacao then
    new.analisada_em := case when new.situacao = 'aberta' then null else now() end;
    new.analisada_por := case when new.situacao = 'aberta' then null else (select auth.uid()) end;
  end if;
  return new;
end;
$$;

create trigger denuncias_registrar_analise before update on public.denuncias
  for each row execute function privado.registrar_analise_denuncia();

alter table public.denuncias enable row level security;
revoke all on table public.denuncias from anon, authenticated;
grant select on public.denuncias to authenticated;
grant insert (kitnet_id, motivo, detalhes) on public.denuncias to authenticated;
grant update (situacao) on public.denuncias to authenticated;

create policy "Contas ativas denunciam anuncios de outras pessoas"
  on public.denuncias for insert to authenticated
  with check (
    autor_id = (select auth.uid())
    and exists (select 1 from public.perfis p where p.id = (select auth.uid()) and p.situacao = 'ativa')
    and exists (
      select 1 from public.kitnets k
      where k.id = kitnet_id and k.locador_id <> (select auth.uid())
    )
  );

create policy "Cada pessoa ve as proprias denuncias e a moderacao ve todas"
  on public.denuncias for select to authenticated
  using (autor_id = (select auth.uid()) or (select public.eh_admin()));

create policy "So a moderacao analisa denuncias"
  on public.denuncias for update to authenticated
  using ((select public.eh_admin()))
  with check ((select public.eh_admin()));


-- ---------------------------------------------------------------------
-- Lista de contas para a moderacao (com e-mail e CPF)
-- ---------------------------------------------------------------------
-- E-mail fica em auth.users e CPF em privado.documentos, que a Data API
-- nao alcanca. Esta funcao so responde para administradores.

create or replace function public.moderacao_listar_contas()
returns table (
  id uuid, tipo text, nome text, email text, telefone text, cpf text,
  ocupacao text, situacao text, motivo_suspensao text, aprovacao text,
  criado_em timestamptz, administrador boolean
)
language plpgsql
stable
security definer
set search_path = ''
as $$
#variable_conflict use_column
begin
  if not public.eh_admin() then
    raise exception 'SGLK: acesso restrito a moderacao'
      using errcode = 'insufficient_privilege';
  end if;
  return query
    select p.id, p.tipo, p.nome, u.email::text, p.telefone, d.cpf,
           p.ocupacao, p.situacao, p.motivo_suspensao, p.aprovacao,
           p.criado_em, coalesce(u.raw_app_meta_data ->> 'papel', '') = 'admin'
    from public.perfis p
    join auth.users u on u.id = p.id
    left join privado.documentos d on d.usuario_id = p.id
    order by p.criado_em desc;
end;
$$;
revoke all on function public.moderacao_listar_contas() from public, anon;
grant execute on function public.moderacao_listar_contas() to authenticated;

revoke all on function privado.proteger_perfil() from public, anon, authenticated;
revoke all on function privado.proteger_moderacao_kitnet() from public, anon, authenticated;
revoke all on function privado.registrar_analise_denuncia() from public, anon, authenticated;
revoke all on function privado.criar_perfil_novo_usuario() from public, anon, authenticated;
