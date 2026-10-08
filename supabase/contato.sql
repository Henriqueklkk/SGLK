-- =====================================================================
-- SGLK - Mensagens do formulario de Contato (contato.html)
-- Migracao "mensagens_contato", aplicada em 2026-10-08.
--
-- Qualquer visitante, com ou sem conta, envia uma mensagem. So a
-- moderacao (public.eh_admin(), em moderacao.sql) le, marca como
-- respondida, arquiva e apaga. A resposta sai do e-mail de quem modera,
-- porque sglk.site nao recebe e-mails.
-- =====================================================================

create table public.mensagens_contato (
  id uuid primary key default gen_random_uuid(),
  nome text not null check (char_length(nome) between 2 and 120),
  email text not null
    check (char_length(email) <= 254 and email ~ '^[^@[:space:]]+@[^@[:space:]]+\.[^@[:space:]]+$'),
  mensagem text not null check (char_length(mensagem) between 10 and 2000),
  -- Conta de quem enviou, quando a pessoa estava conectada.
  autor_id uuid default auth.uid() references public.perfis (id) on delete set null,
  situacao text not null default 'nova'
    check (situacao in ('nova', 'respondida', 'arquivada')),
  criado_em timestamptz not null default now(),
  analisada_em timestamptz,
  analisada_por uuid references public.perfis (id) on delete set null
);
create index mensagens_contato_criado_em_idx on public.mensagens_contato (criado_em desc);
create index mensagens_contato_email_criado_em_idx on public.mensagens_contato (email, criado_em);
create index mensagens_contato_autor_id_idx on public.mensagens_contato (autor_id);
create index mensagens_contato_analisada_por_idx on public.mensagens_contato (analisada_por);

-- Limpa os campos e segura envios em massa: no maximo 3 mensagens por
-- e-mail e 60 no total por hora. Roda como dono da tabela porque o
-- visitante nao pode ler as mensagens para contar.
create or replace function privado.preparar_mensagem_contato()
returns trigger
language plpgsql
security definer
set search_path = ''
as $$
begin
  new.nome := btrim(new.nome);
  new.email := lower(btrim(new.email));
  new.mensagem := btrim(new.mensagem);
  if (select count(*) from public.mensagens_contato m
      where m.email = new.email and m.criado_em > now() - interval '1 hour') >= 3
     or (select count(*) from public.mensagens_contato m
      where m.criado_em > now() - interval '1 hour') >= 60 then
    raise exception 'Muitas mensagens em pouco tempo. Tente de novo daqui a uma hora.'
      using hint = 'limite_contato';
  end if;
  return new;
end;
$$;
revoke all on function privado.preparar_mensagem_contato() from public;

create trigger mensagens_contato_preparar before insert on public.mensagens_contato
  for each row execute function privado.preparar_mensagem_contato();

create or replace function privado.registrar_analise_mensagem()
returns trigger
language plpgsql
set search_path = ''
as $$
begin
  if new.situacao is distinct from old.situacao then
    new.analisada_em := case when new.situacao = 'nova' then null else now() end;
    new.analisada_por := case when new.situacao = 'nova' then null else (select auth.uid()) end;
  end if;
  return new;
end;
$$;

create trigger mensagens_contato_registrar_analise before update on public.mensagens_contato
  for each row execute function privado.registrar_analise_mensagem();

alter table public.mensagens_contato enable row level security;
revoke all on table public.mensagens_contato from anon, authenticated;
grant insert (nome, email, mensagem) on public.mensagens_contato to anon, authenticated;
grant select, delete on public.mensagens_contato to authenticated;
grant update (situacao) on public.mensagens_contato to authenticated;

create policy "Qualquer pessoa envia mensagem pelo formulario de contato"
  on public.mensagens_contato for insert to anon, authenticated
  with check (situacao = 'nova' and autor_id is not distinct from (select auth.uid()));

create policy "So a moderacao le as mensagens de contato"
  on public.mensagens_contato for select to authenticated
  using ((select public.eh_admin()));

create policy "So a moderacao marca as mensagens de contato"
  on public.mensagens_contato for update to authenticated
  using ((select public.eh_admin()))
  with check ((select public.eh_admin()));

create policy "So a moderacao apaga as mensagens de contato"
  on public.mensagens_contato for delete to authenticated
  using ((select public.eh_admin()));
