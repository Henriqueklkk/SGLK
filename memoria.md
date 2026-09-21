# memoria.md - Histórico do Projeto SGLK

Histórico vivo das decisões e aprendizados do projeto. Registrar só o que ajuda na continuidade, sem copiar conversas. Datas no formato AAAA-MM-DD.

---

## Decisões aprovadas

- **2026-09-13 · Referências:** páginas do Airbnb (anfitriões e login), Zap Imóveis e Temporada Livre, salvas em `referencias - site/` como links `.url` e prints de página inteira. Servem só como direção de estrutura e atmosfera.
- **2026-09-13 · Repositório:** GitHub público `Henriqueklkk/SGLK`, branch `main`. Os prints de referência fazem parte do repositório.
- **2026-09-13 · Autoria dos commits:** e-mail privado do GitHub, configurado só neste projeto.
- **2026-09-15 · Marca:** a identidade visual é só do SGLK.
- **2026-09-15 · Formato:** site com 5 páginas (Home, Imóveis, Como Funciona, FAQ e Contato), como no `specs/site.md`.
- **2026-09-15 · Objetivo da Home:** levar o locatário a encontrar uma kitnet. "Encontrar minha kitnet" é a ação principal, "Anunciar minha kitnet" tem menos peso e "Saiba como funciona" é secundária.
- **2026-09-15 · Base do site.md confirmada:** português (BR); público principal de estudantes e trabalhadores temporários em Tucuruí e secundário de pequenos proprietários; stack HTML5, CSS3 e JavaScript puro, sem frameworks.
- **2026-09-15 · Tipografia:** Plus Jakarta Sans, com arquivos WOFF2 no próprio site.
- **2026-09-15 · Paleta:** azul-petróleo como principal e âmbar como secundária, com contraste verificado. *Substituída em 2026-09-21 pela identidade de `meus - produtos/`.*
- **2026-09-21 · Identidade:** a identidade de `meus - produtos/` (logo, azul-marinho, verde-sálvia, cinza-claro e off-white) substitui a paleta azul-petróleo + âmbar. Tons medidos nos arquivos e contraste recalculado no `specs/design.md` v1.1.
- **2026-09-21 · Imagens por IA:** permitidas só como ilustração da landing (topo, benefícios, estilo de vida, telas do sistema e kitnets de demonstração). Anúncios publicados usam só fotos reais enviadas pelos locadores.
- **2026-09-21 · Dados de demonstração:** as 3 kitnets dos mockups são ilustrativas e se repetem em todas as imagens: Kitnet mobiliada (Centro, R$ 1.200/mês, 25 m², Disponível), Kitnet moderna (Vila Nova, R$ 950/mês, 20 m², Disponível) e Kitnet aconchegante (Jardim Paulista, R$ 1.100/mês, 22 m², Alugado). O site avisa que as imagens são ilustrativas.
- **2026-09-21 · Nomes em `meus - produtos/`:** arquivos com nomes descritivos, no padrão `sglk-...png`.
- **2026-09-21 · Informações do produto:** status "Disponível" e "Alugado"; preço mensal. O locatário filtra por preço, bairro e comodidades, vê fotos, preço, localização, características e disponibilidade e fala com o locador. O locador cadastra imóveis (fotos, descrição, preço e comodidades), gerencia os anúncios, atualiza a disponibilidade e recebe contatos. O contato final é sempre pelo WhatsApp, sem chat interno.

## Decisões rejeitadas

- **2026-09-13 · Prints fora do repositório:** os prints foram versionados.
- **2026-09-13 · Gmail pessoal nos commits:** trocado pelo e-mail privado do GitHub, porque o repositório é público.
- **2026-09-15 · Identidade "Anel X":** o nome veio de um modelo de pedido e não se aplica ao projeto.
- **2026-09-15 · Landing page única, ou landing page com página de Imóveis separada:** vale o site de 5 páginas.
- **2026-09-15 · CTAs com o mesmo peso, ou prioridade para "Anunciar minha kitnet":** a prioridade é do locatário.
- **2026-09-15 · Nunito Sans e fontes do aparelho:** escolhida a Plus Jakarta Sans.
- **2026-09-15 · Paletas terracota + azul-noite e verde-mata + coral:** escolhida petróleo + âmbar. A verde-mata ainda poderia ser confundida com o botão do WhatsApp.
- **2026-09-21 · Manter a paleta azul-petróleo + âmbar:** a identidade de `meus - produtos/` passou a valer.
- **2026-09-21 · Imagens por IA também no catálogo publicado:** o catálogo publicado usa só fotos reais.

## Alterações realizadas

- **2026-09-13:** criados `CLAUDE.md` e `specs/site.md` com o conteúdo fornecido, e um `.gitignore` para arquivos do sistema e configurações pessoais do Claude Code.
- **2026-09-13:** commit `a2cd817` ("Estrutura inicial do projeto SGLK") enviado ao GitHub.
- **2026-09-15:** criados `specs/design.md` (fonte de verdade visual) e este `memoria.md`.
- **2026-09-21:** renomeados os 5 arquivos de `meus - produtos/`: `Logo principal.png` → `sglk-identidade-visual.png`; `dash.png` → `sglk-hero-desktop.png`; `layout.png` → `sglk-busca-kitnets-desktop.png`; `layout2.png` → `sglk-mobile-busca.png`; `ex.png` → `sglk-lifestyle-kitnet-busca.png`.
- **2026-09-21:** `specs/design.md` atualizado para a v1.1: identidade de `meus - produtos/`, cards no padrão dos mockups, regras de imagens por IA e dados de demonstração.
- **2026-09-21:** criado o `imagens.md`, plano de produção visual com 37 imagens ilustrativas e 8 ativos vetoriais.

## Problemas encontrados

- **2026-09-13:** o `specs/site.md` exige login para o botão de WhatsApp, mas a stack não tem servidor para guardar contas.
- **2026-09-13:** o Git não guarda pastas vazias, então `imagens - site/` não aparece no GitHub.
- **2026-09-15:** o `CLAUDE.md` chama o projeto de "landing page", mas o `specs/site.md` define 5 páginas.
- **2026-09-15:** o `specs/site.md` lista "Encontrar minha kitnet" e "Anunciar minha kitnet" como CTAs primários, mas a decisão do dia dá menos peso ao segundo.
- **2026-09-15:** o pedido de criação do design citava "Anel X" em vez de SGLK.
- **2026-09-15:** os prints de página inteira (até 10.570px de altura) ficam ilegíveis quando abertos inteiros.
- **2026-09-15:** na rodada de perguntas, "Nada real ainda" foi marcado junto com "Fotos reais de kitnets" e "Dados reais de anúncios", e nenhum desses materiais está no projeto.
- **2026-09-15:** âmbar sobre branco e texto branco sobre o verde do WhatsApp reprovaram no contraste (1,98:1).
- **2026-09-21:** o pedido descrevia a identidade como azul-marinho + verde-sálvia, mas o `specs/design.md` aprovado usava azul-petróleo + âmbar.
- **2026-09-21:** os mockups mostram coração de favoritos, mapa, item "Sobre" e botões "Entrar" e "Cadastrar", fora do `specs/site.md` ou pendentes.
- **2026-09-21:** nos mockups, o texto branco reprova no contraste: selo "Disponível" 2,78:1, selo "Alugado" 2,70:1 e botão do WhatsApp 3,01:1.
- **2026-09-21:** os mockups usam "Alugada" e "Alugado" para o mesmo status, e a kitnet alugada muda de uma imagem para outra.
- **2026-09-21:** os mockups usam maiúsculas espaçadas e fonte manuscrita, contra a tipografia aprovada.
- **2026-09-21:** o logo só existe como imagem dentro de um quadro de 1448 × 1086px, sem arquivo vetorial nem versão para fundo escuro.
- **2026-09-21:** o `AGENTS.md`, criado em 2026-09-16, é uma cópia do `CLAUDE.md`.

## Soluções aplicadas

- **2026-09-15 · Landing page × 5 páginas:** confirmado o site de 5 páginas. O texto do `CLAUDE.md` continua dizendo "landing page" até haver autorização para ajustar.
- **2026-09-15 · Hierarquia dos CTAs:** o `specs/design.md` aplica a decisão (estilo primário para "Encontrar minha kitnet" e secundário para "Anunciar minha kitnet" na Home) sem alterar o `specs/site.md`.
- **2026-09-15 · "Anel X":** confirmado que a identidade é do SGLK.
- **2026-09-15 · Prints longos:** analisados em fatias temporárias fora do projeto, sem alterar os originais.
- **2026-09-15 · Contraste:** âmbar só como fundo com texto escuro ou como detalhe sobre fundo escuro. *Válido até a troca de paleta de 2026-09-21.*
- **2026-09-15 · Login do WhatsApp:** o design prevê o botão com e sem login até a decisão.
- **2026-09-21 · Contraste da nova paleta:** selo "Disponível" em `#45695F`, selo "Alugado" em `#636E7B` e botão do WhatsApp em `#15803D`, todos com texto branco e contraste acima de 4,5:1.
- **2026-09-21 · Status canônico das kitnets de demonstração:** kitnets 01 e 02 "Disponível", kitnet 03 "Alugado", sempre com a palavra "Alugado".
- **2026-09-21 · Elementos fora do escopo:** favoritos, mapa, "Sobre", "Entrar" e "Cadastrar" ficam fora das imagens planejadas.
- **2026-09-21 · Logo nas imagens:** nunca gerado por IA. Nas telas geradas, o logo segue a referência e é conferido; se sair diferente, é trocado pelo arquivo oficial na edição.
- **2026-09-21 · AGENTS.md:** manter igual ao `CLAUDE.md` sempre que um dos dois mudar.

## Pendências

- Decidir como tratar o login do botão de WhatsApp: simular, tirar a exigência (muda o `specs/site.md`) ou adicionar servidor (muda a stack). Em 2026-09-15 ficou para depois.
- Vetorizar o logo e produzir as versões principal, horizontal, símbolo e para fundo escuro, além dos favicons.
- Recortar dos mockups as fotos das 3 kitnets de demonstração, para servir de referência (ordem de produção do `imagens.md`).
- Produzir e aprovar as imagens do `imagens.md`.
- Confirmar, no plano de implementação, a divisão da Home em seções proposta no `imagens.md`.
- Decidir se o site vai usar as maiúsculas espaçadas e a fonte manuscrita dos mockups, hoje vetadas pela tipografia aprovada.
- Decidir se mapa e favoritos entram no produto (hoje fora do `specs/site.md`).
- Confirmar quais fotos reais de kitnets e dados reais de anúncios já existem e colocá-los no projeto.
- Levantar os dados reais que o site precisa: bairros atendidos, faixas de preço, comodidades usadas nos filtros, contatos oficiais e textos do FAQ e do Como Funciona.
- Revisar e aprovar o restante do `specs/design.md`: conceito "porta aberta", raios, botões, cards, fotos, movimento e regras por tela.
- Escolher o conjunto de ícones em SVG (licença aberta, arquivos no próprio site).
- Autorizar ou não o ajuste do texto "landing page" no `CLAUDE.md` (e no `AGENTS.md`) e da hierarquia dos CTAs no `specs/site.md`.
- Enviar ao GitHub os arquivos criados depois do commit `a2cd817`.

## Próximos passos

1. Revisar o `imagens.md` e o `specs/design.md` v1.1.
2. Vetorizar o logo e recortar as referências das kitnets.
3. Produzir as imagens na ordem do `imagens.md`, começando pelas fotos das kitnets.
4. Decidir o tratamento do login do botão de WhatsApp.
5. Apresentar um plano resumido de implementação antes de começar a programar.
6. Implementar primeiro a base visual (cores, tipografia e espaçamentos) e depois a Home, começando pelo celular.
