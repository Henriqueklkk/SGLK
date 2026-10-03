-- =====================================================================
-- SGLK - Catalogo publico (Supabase)
--
-- Aplicada em 2026-09-29 no projeto vqqgbbnxomqkqytgcbsb como a migracao
-- 20260929144339 "catalogo_publico", depois de "moderacao". Ver memoria.md.
--
-- O RLS de kitnets deixa o dono ver os proprios anuncios (mesmo pendentes
-- ou inativos) e a moderacao ver todos. A busca e a Home precisam so do
-- que e publico, para qualquer pessoa: anuncio ativo de locador aprovado e
-- com conta ativa. A vista usa security_invoker, entao continua passando
-- pelo RLS de quem consulta; ela so filtra.
-- =====================================================================

create view public.kitnets_publicas
with (security_invoker = true) as
select k.id, k.locador_id, k.nome, k.descricao, k.bairro, k.preco, k.area,
       k.quartos, k.banheiros, k.comodidades, k.status, k.criado_em, k.atualizado_em
from public.kitnets k
where k.moderacao = 'ativo'
  and privado.locador_liberado(k.locador_id);

revoke all on public.kitnets_publicas from anon, authenticated;
grant select on public.kitnets_publicas to anon, authenticated;
