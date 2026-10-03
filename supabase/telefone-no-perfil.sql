-- =====================================================================
-- SGLK - Telefone no perfil (Supabase)
--
-- Aplicada em 2026-09-29 no projeto vqqgbbnxomqkqytgcbsb como a migracao
-- 20260929140423 "telefone_no_perfil", depois de "estrutura_inicial_sglk"
-- (supabase/esquema-inicial.sql). Ver memoria.md.
--
-- Decisao de 2026-09-29: locatario e locador informam um telefone com DDD
-- no cadastro. Fica so no proprio perfil (cada pessoa ve e edita o seu),
-- sem o codigo do pais: DDD + celular (9 + 8 digitos) ou fixo (8 digitos
-- comecando de 2 a 8). Mesma regra de telefoneValido() em site/js/site.js.
-- O WhatsApp de cada anuncio continua separado, em kitnets_contato.
-- =====================================================================

-- A tabela estava vazia (nenhuma conta criada), entao a coluna ja nasce
-- obrigatoria.
alter table public.perfis
  add column telefone text not null
  constraint perfis_telefone_formato
    check (telefone ~ '^[1-9]{2}(9[0-9]{8}|[2-8][0-9]{7})$');

grant update (telefone) on public.perfis to authenticated;

-- Cadastro: agora tambem le e valida o telefone. Aceita com mascara e com
-- o 55 na frente; grava so DDD + numero.
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

  insert into public.perfis (id, tipo, nome, ocupacao, telefone)
  values (new.id, v_tipo, v_nome, v_ocupacao, v_telefone);

  insert into privado.documentos (usuario_id, cpf)
  values (new.id, v_cpf);

  -- CPF e telefone nao ficam nos metadados (vao dentro do token de acesso).
  new.raw_user_meta_data := new.raw_user_meta_data - 'cpf' - 'telefone';
  return new;
end;
$$;

create or replace function privado.remover_cpf_dos_metadados()
returns trigger
language plpgsql
security definer
set search_path = ''
as $$
begin
  new.raw_user_meta_data := new.raw_user_meta_data - 'cpf' - 'telefone';
  return new;
end;
$$;

revoke all on function privado.criar_perfil_novo_usuario() from public, anon, authenticated;
revoke all on function privado.remover_cpf_dos_metadados() from public, anon, authenticated;
