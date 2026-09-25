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
- **2026-09-22 · Início da implementação:** site real em `site/`, HTML5 + CSS3 + JavaScript puro, 5 páginas separadas com cabeçalho e rodapé duplicados (sem servidor para incluir parciais). Imagens da Home mapeadas conforme `imagens.md`.
- **2026-09-22 · Logo extraído:** `sglk-logo-horizontal.png` e `sglk-simbolo.png` recortados de `sglk-identidade-visual.png`, com o fundo tornado transparente (sem redesenhar nem recolorir o traço do logo). Usados no cabeçalho, no menu do celular e nos favicons.
- **2026-09-22 · Logo no rodapé:** o logo colorido não tem contraste sobre `--marinho-900` (verificado visualmente). Como criar uma versão para fundo escuro seria "recolorir" o logo — proibido sem aprovação —, o rodapé usa por enquanto só o texto "SGLK" em branco, peso 800.
- **2026-09-22 · Imagens otimizadas:** as 37 imagens de `imagens - site/` foram redimensionadas para o tamanho real de uso e exportadas em JPG qualidade 80 (não WebP, por não haver codificador disponível sem instalar nada novo; `site.md` permite "WebP ou JPG comprimido"). Redução de 65,6MB para 3,0MB (95%), maior arquivo com 178KB.
- **2026-09-22 · Fonte auto-hospedada:** baixado de fonts.gstatic.com o arquivo variável `Plus Jakarta Sans` (pesos 400–800, só o subconjunto "latin", que cobre todos os acentos do português), 26,7KB, com a licença OFL.txt. Isso é a busca do ativo já autorizado pelo `design.md`, não uma dependência nova em tempo de execução.
- **2026-09-22 · Ícones:** conjunto próprio, desenhado à mão em SVG (16 ícones + o símbolo do WhatsApp), traço de 2px com pontas arredondadas, embutido inline em cada página — sem depender de nenhuma biblioteca externa.
- **2026-09-22 · Botão de WhatsApp nos anúncios de demonstração:** fica desabilitado (`aria-disabled`, com aviso ao clicar), porque as 3 kitnets ilustrativas não têm um número real por trás. Evita abrir uma conversa falsa.
- **2026-09-22 · Formulário de contato:** valida os campos, mas não envia a lugar nenhum de verdade (não há backend nem endereço de contato definido). Ao enviar, mostra uma mensagem honesta avisando que o canal de contato ainda não foi conectado, em vez de fingir que a mensagem chegou a alguém.
- **2026-09-22 · Servidor local para testes:** criado `.claude/launch.json` rodando `python -m http.server` (Python já instalado na máquina, nenhuma instalação nova) servindo a pasta `site/`. Testar por `file://` direto não fingia carregar scripts nem confirmava eventos com segurança.

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

**Críticas para publicar**
- Corrigir os 2 defeitos de texto encontrados nas imagens (regenerar ou editar): `01-hero-sglk-desktop` mostra "Kitnet mobierna" em vez de "Kitnet moderna"; `17-compartilhamento-og` mostra "Disponivel" sem acento.
- Revisar as 29 imagens do site que ainda não passaram pela lista de aprovação do `imagens.md` (só 8 foram checadas visualmente nesta sessão).
- Decidir o canal real do formulário de Contato (e-mail, número de WhatsApp institucional ou outro) — hoje ele só valida e mostra um aviso honesto, sem enviar a lugar nenhum.
- Confirmar onde e como o site será publicado, para decidir o que fica público (o repositório inteiro tem `CLAUDE.md`, `memoria.md`, `meus - produtos/` etc., que não deveriam ser servidos junto com `site/`).
- Enviar para o GitHub os arquivos criados depois do commit `a2cd817` (nada desta sessão foi enviado ainda).

**Decisões que ainda dependem do usuário**
- Login do botão de WhatsApp: `specs/site.md` exige login, mas a stack não tem servidor. O site implementado usa a variante "livre" (sem login) e, como as 3 kitnets são só demonstração, os botões ficam desabilitados com um aviso ao clicar — sem simular nem exigir login de verdade. Decisão final continua em aberto.
- Logo para fundo escuro: ainda não existe (recolorir o logo é proibido sem aprovação). O rodapé usa por enquanto só o texto "SGLK" em branco.
- Autorizar ou não o ajuste do texto "landing page" no `CLAUDE.md`/`AGENTS.md` e da hierarquia dos CTAs no `specs/site.md`.

**Dependem de conteúdo real (site funciona, mas com dados de demonstração)**
- Bairros, preços e comodidades reais: hoje os filtros só conhecem os 3 bairros e as comodidades das kitnets ilustrativas.
- Contatos institucionais reais (telefone, e-mail, endereço) para o rodapé e a página Contato.
- Fotos reais de kitnets e anúncios reais, para substituir as 3 kitnets de demonstração no catálogo.
- Textos finais do FAQ (perguntas além das 6 já escritas) e dos passos do Como Funciona (nomes ainda tratados como provisórios pelo `imagens.md`).

## Alterações realizadas (continuação)

- **2026-09-22:** site funcional construído em `site/` — 5 páginas HTML, `css/tokens.css`, `css/estilo.css`, `css/paginas.css`, `js/dados-demo.js`, `js/site.js`, ícones SVG próprios, logo e favicons extraídos de `meus - produtos/sglk-identidade-visual.png`, 37 imagens otimizadas em JPG e a fonte Plus Jakarta Sans auto-hospedada.
- **2026-09-22:** testado localmente via `python -m http.server` (configurado em `.claude/launch.json`): sem erros no console em nenhuma das 5 páginas, sem nenhum recurso quebrado (73 referências checadas), menu do celular, acordeão do FAQ, abas do Como Funciona, filtros e painel de detalhes de Imóveis e validação do formulário de Contato testados e funcionando em desktop e celular.

## Problemas encontrados (continuação)

- **2026-09-22:** ao testar via `file://` direto (sem servidor), o navegador tratava a página como instantâneo estático e os scripts não rodavam de verdade — por isso a necessidade do servidor local.
- **2026-09-22:** a regra CSS `.grade-contato` estava com `flex-direction: column-reverse`, o que inverteria a ordem no celular e mostraria as informações antes do formulário, contra o `specs/design.md` ("Celular: formulário primeiro"). Corrigido para `column` antes de escrever a página.
- **2026-09-22 · Bug real encontrado pelo usuário:** na página Imóveis, "Nenhuma kitnet encontrada" aparecia junto com os 3 cards, mesmo com resultados. Causa: 5 classes CSS (`.grade-kitnets`, `.menu-movel`, `.mensagem-erro`, `.mensagem-sucesso`, `.estado-vazio`) fixavam `display` sem condição, e uma regra de autor com a mesma especificidade do `[hidden]` do navegador sempre vence — então o atributo `hidden` parava de funcionar nesses 5 componentes (não só no que apareceu na tela).

## Soluções aplicadas (continuação)

- **2026-09-22 · Bug do `hidden`:** as 5 classes agora usam o seletor `.classe:not([hidden])`, para o `display` só se aplicar quando o elemento não estiver oculto.
- **2026-09-22 · Página exclusiva por kitnet:** criada `imovel.html?id=<id>`, com galeria, informações completas e o botão "Falar no WhatsApp". Os cards da grade (Home e Imóveis) agora sempre mostram só "Ver detalhes" e levam para essa página — o botão de contato não aparece mais na listagem, só dentro do anúncio. O painel de detalhes que antes ficava embutido em `imoveis.html` foi removido de lá.

## Alterações realizadas (22/09, continuação — cadastro funcional)

- **Aviso de IA por card, não mais um aviso geral da página:** as 3 kitnets de `dados-demo.js` ganharam `origem: "ia"`. Cards e a página do imóvel só mostram o selo "Imagem por IA" nelas — os banners genéricos "Anúncios ilustrativos, apenas para demonstração" foram removidos de `index.html`, `imoveis.html` e `imovel.html`. O rodapé de todas as páginas passou a nomear especificamente as 3 kitnets de exemplo, em vez de uma frase que ficaria falsa com anúncios reais.
- **Cadastro de verdade:** nova página `anunciar.html`, com formulário completo (fotos, título, descrição, bairro, preço, área, quartos, banheiros, comodidades, status, WhatsApp). As fotos são comprimidas no próprio navegador (`<canvas>`, até 900px de largura, JPEG) antes de salvar.
- **Persistência sem banco de dados:** novo `js/armazenamento.js`, guardando os imóveis cadastrados no `localStorage` (chave `sglk_kitnets_usuario_v1`). Isso é uma ponte deliberada até existir um banco de dados de verdade (o usuário já sinalizou que isso vem depois) — funcional e testado, mas os dados ficam só no navegador de quem cadastrou; a página avisa isso com todas as letras.
- **"Meus imóveis cadastrados":** lista na própria página `anunciar.html`, com botão para alternar Disponível/Alugado e para excluir (com confirmação).
- **WhatsApp real nos anúncios cadastrados:** kitnets com `origem: "usuario"` e status disponível mostram um link de verdade (`https://wa.me/<número>?text=<mensagem>`) na página do imóvel — só as 3 de demonstração continuam com o botão desabilitado.
- **Bairros dinâmicos:** os `<select>` de bairro (Home, Imóveis desktop e celular) não são mais uma lista fixa de 3 opções — são gerados a partir de todos os imóveis existentes (demonstração + cadastrados).
- **Links de "Anunciar minha kitnet"** em todas as páginas (cabeçalho, menu do celular, Home, Como Funciona) agora apontam direto para `anunciar.html`.

## Problemas encontrados (22/09, continuação)

- O usuário encontrou visualmente um bug que eu não tinha pego: "Nenhuma kitnet encontrada" aparecia junto com os 3 cards. Ao investigar, achei que o mesmo tipo de bug ([hidden] perdendo para uma regra de classe com display fixo) se repetia em mais 2 lugares que eu tinha acabado de criar (`.selo` e o novo selo de aviso de IA) — corrigido antes de ir para produção.
- Os chips de comodidade (em Imóveis e agora em Anunciar) nunca mudavam de cor ao serem marcados: a regra CSS existia só para um padrão antigo de botão (`[aria-pressed]`), não para o checkbox real usado no HTML. Corrigido com `.chip:has(input:checked)`.

## Pendências (revisão 22/09)

- Corrigir os 2 defeitos de texto nas imagens (`01-hero-sglk-desktop`, `17-compartilhamento-og`) e revisar as demais 29 com a lista de aprovação do `imagens.md`.
- Decidir o canal real do formulário de Contato (institucional) e confirmar a hospedagem do site.
- Enviar o site para o GitHub.
- Produzir a versão do logo para fundo escuro, quando aprovada.
- Decidir o tratamento definitivo do login do botão de WhatsApp (o cadastro real já não passa por login nenhum hoje).
- Quando o banco de dados de verdade existir: migrar os imóveis do `localStorage` para lá, e o cadastro passa a ficar visível para todo mundo, não só em quem cadastrou.

## Alterações realizadas (22/09, continuação — página Entrar)

- **Nova página `entrar.html`:** ponto único de cadastro e login, com duas abas de tipo de conta ("Quero alugar" / "Quero anunciar") que trocam título, subtítulo e texto do botão. Adaptação do componente de Dialog (React/shadcn) fornecido pelo usuário como referência visual — recriado só com a stack do projeto (HTML/CSS/JS puro), sem instalar React, TypeScript, Tailwind ou qualquer dependência nova. O ícone de porta, o círculo de fundo sálvia, os campos e o botão primário seguem os tokens do `specs/design.md`; a animação de entrada do cartão usa `@keyframes` com `prefers-reduced-motion` respeitado (mesmo padrão já usado no site).
- **Campo CPF (locatário e locador):** máscara automática (`000.000.000-00`) e validação real do dígito verificador (algoritmo público de módulo 11), com aviso explícito de que isso confirma só o formato do número, não a identidade da pessoa — para não prometer mais segurança contra fraude do que o site realmente oferece.
- **Campo Ocupação (só locatário):** aparece e se torna obrigatório apenas na aba "Quero alugar"; fica oculto (`hidden`) e não-obrigatório na aba "Quero anunciar". *Corrigido em 2026-09-22 (revisão): a primeira versão colocava a Ocupação só no locador, seguindo ao pé da letra o pedido original ("para parte do locador coloque sua ocupação"). O usuário revisou visualmente e pediu o oposto — Ocupação para quem quer alugar —, então a regra foi invertida nesta revisão.*
- **Decisão deliberada de não persistir dados de conta:** diferente das kitnets cadastradas (que ficam no `localStorage`), nome, e-mail, CPF e senha do cadastro/login **não são salvos em lugar nenhum** — nem `localStorage`, nem envio de rede. O site ainda não tem backend nem forma segura de guardar senha ou CPF (dado sensível pela LGPD), então cadastrar e logar aqui são simulações honestas: validam, mostram uma mensagem de sucesso explicando que os dados não foram guardados, e nada mais. Confirmado por teste: depois de cadastrar e entrar, `Object.keys(localStorage)` só tinha a chave das kitnets (`sglk_kitnets_usuario_v1`).
- **Botão do Google e link de Termos de uso omitidos:** o componente de referência tinha um botão "Continuar com Google" e um link de Termos. Nenhum dos dois entrou — login social exigiria um provedor/backend real (que não existe) e um link de Termos de uso apontaria para um documento que não existe e que eu não posso inventar.
- **Esta página ainda não é uma trava de acesso de verdade:** nenhum outro botão do site (WhatsApp, Anunciar) foi alterado para exigir login. A pendência do `specs/site.md` sobre "login para o botão de WhatsApp" continua em aberto — `entrar.html` é a peça visual/funcional isolada, não uma integração.

## Problemas encontrados (22/09, continuação — página Entrar)

- **Bug do `hidden` (7ª a 10ª ocorrência):** o mesmo problema de especificidade CSS ([hidden] perdendo para uma classe com `display` fixo) apareceu de novo em `.cartao-auth` (visto ao vivo logo após escrever o CSS: o bloco "Entrar" aparecia ao lado do "Cadastro" mesmo com `hidden`). Isso motivou uma auditoria sistemática (busca por toda classe usada junto de `hidden` no HTML, cruzada com toda regra `display:` no CSS), que encontrou mais 3 casos reais: `.lista-meus-imoveis`, `.form-auth` e, mais importante, **`.form-auth` só foi a 9ª — a 10ª foi `.form-contato`**, um bug que existia silenciosamente desde a primeira versão da página Contato (nunca tinha sido percebido porque a verificação anterior só checava a propriedade `hidden`, não o `display` calculado). Todos corrigidos com o mesmo padrão `.classe:not([hidden])`. Dois casos investigados não eram bugs (`.cartao-auth-icone` e `.cartao-passo-numero` usam só `aria-hidden`, que não afeta `display`).

## Soluções aplicadas (22/09, continuação — página Entrar)

- **Verificação reforçada:** a partir desta rodada, toda conferência de elemento oculto passou a checar `getComputedStyle(elemento).display` de verdade (não só a propriedade booleana `hidden`), além de uma varredura via `fetch` + `DOMParser` em todas as páginas para listar todo elemento com `hidden` estático e cruzar com o CSS.
- **Teste completo do CPF:** CPF válido (`111.444.777-35`) aceito com máscara e sucesso; CPF inválido com dígitos repetidos (`11111111111`) rejeitado, formulário permanece visível com o campo marcado em erro.

## Pendências (revisão 22/09, após página Entrar)

- Corrigir os 2 defeitos de texto nas imagens (`01-hero-sglk-desktop`, `17-compartilhamento-og`) e revisar as demais 29 com a lista de aprovação do `imagens.md`.
- Decidir o canal real do formulário de Contato (institucional) e confirmar a hospedagem do site.
- Enviar o site para o GitHub (nada desta sessão de trabalho foi enviado ainda, incluindo todo o site construído).
- Produzir a versão do logo para fundo escuro, quando aprovada.
- Decidir o tratamento definitivo do login do botão de WhatsApp e se/como `entrar.html` vai virar uma trava de acesso de verdade.
- Planejar um backend real: hoje não existe nenhum lugar seguro para guardar CPF e senha (por isso a decisão de não persistir nada); quando houver banco de dados, também dá para migrar os imóveis do `localStorage` para lá e tornar os cadastros visíveis para todo mundo.

## Alterações realizadas (22/09, continuação — travas de login)

- **Anunciar exige entrar como locador; falar no WhatsApp exige entrar como locatário.** Pedido original do usuário tinha os dois papéis trocados ("login na parte de anunciar para o locatário... para o locador exigir login para contatar"); confirmado com o usuário antes de implementar, porque invertia o que o resto do site já usa (anunciar é ação do locador, contato é ação do locatário — ver decisão de 2026-09-21 sobre informações do produto). Implementado do jeito confirmado. O resto do site (navegar, buscar, ver anúncios, FAQ, Como Funciona, Contato) continua livre, sem login.
- **`anunciar.html`:** um script embutido (não adiado, roda antes do resto da página) confere a sessão simulada logo no início do `<body>` e redireciona para `entrar.html?papel=locador&redirecionar=anunciar.html` se não houver sessão de locador — isso evita que o formulário pisque na tela por um instante antes do redirecionamento.
- **Botão "Falar no WhatsApp" (`imovel.html`), anúncios reais (`origem: "usuario"`):** sem sessão de locatário, o botão segue o que o `specs/design.md` (seção 8) já previa para este caso — mostra um ícone de cadeado à direita do texto, leva para `entrar.html?papel=locatario&redirecionar=imovel.html?id=...` e uma frase curta abaixo explica por quê. Com sessão de locatário, mostra o link de WhatsApp real, como antes. As 3 kitnets de demonstração continuam com o botão desabilitado por falta de número real, independente de login.
- **`entrar.html` ganhou:** um aviso no topo explicando por que a pessoa foi enviada para lá (só aparece quando chega de uma trava, via `?papel=`); ao validar cadastro ou login, a página grava a sessão simulada (só o tipo de conta, nunca os dados digitados) e mostra um botão "Continuar" que leva de volta para onde a pessoa queria ir (`?redirecionar=`, restrito a `anunciar.html` ou `imovel.html?id=...` — nunca um endereço externo vindo da URL).
- **Sessão simulada (`sglk_sessao_v1` no `localStorage`):** guarda só `{ tipo: "locador" | "locatario" }`. Continua valendo a decisão de não guardar nome, e-mail, CPF ou senha em lugar nenhum — só o papel escolhido, para a trava funcionar entre páginas.
- **Indicador "Conta de locador/locatário" + botão "Sair"** apareceram no cabeçalho (a partir de 1024px) e no menu do celular, injetados por `js/site.js` só quando existe uma sessão simulada — sem isso não daria para trocar de papel para testar as duas travas sem abrir o DevTools. "Sair" limpa a sessão e volta para a Home.
- **`.aviso-cpf` renomeada para `.aviso-caixa`** em `css/paginas.css` (mesmo estilo, agora reaproveitado também no aviso de redirecionamento e na explicação do botão de WhatsApp travado).
- **Isto NÃO é segurança de verdade — é importante deixar registrado:** o SGLK não tem backend, então "entrar" só valida o formato dos campos e grava um papel no navegador. Qualquer pessoa consegue "entrar" preenchendo qualquer CPF que passe no dígito verificador, ou abrindo o DevTools e definindo a sessão diretamente. As duas travas simulam o fluxo pedido (e cumprem a exigência do `specs/site.md` de login para o contato), mas não impedem acesso de verdade.

## Problemas encontrados (22/09, continuação — travas de login)

- O botão "Sair", criado com a classe `botao--link` sozinha (sem a classe base `botao`), ficou com a borda padrão do navegador visível — porque `botao--link` nunca tinha sido usada sozinha num `<button>` antes (os usos existentes sempre combinavam `class="botao botao--link"`, e é a classe `botao` que zera a borda). Corrigido adicionando a classe `botao` junto, seguindo o mesmo padrão já usado em "Excluir" e "Limpar".

## Pendências (revisão 22/09, após travas de login)

- Corrigir os 2 defeitos de texto nas imagens (`01-hero-sglk-desktop`, `17-compartilhamento-og`) e revisar as demais 29 com a lista de aprovação do `imagens.md`.
- Decidir o canal real do formulário de Contato (institucional) e confirmar a hospedagem do site.
- Enviar o site para o GitHub (nada desta sessão de trabalho foi enviado ainda).
- Produzir a versão do logo para fundo escuro, quando aprovada.
- Planejar um backend real: hoje não existe nenhum lugar seguro para guardar CPF e senha (por isso a decisão de não persistir nada) nem uma sessão de verdade (por isso qualquer um pode "entrar"). Quando houver banco de dados, dá para migrar os imóveis do `localStorage`, ter contas de verdade e tornar as duas travas reais.
- A sessão simulada guarda só um papel por vez (locador OU locatário) — entrar com o outro papel troca a sessão inteira. Isso é uma limitação aceita da simulação, não um bug: um sistema de contas de verdade permitiria manter os dois papéis ou trocar de conta.

## Alterações realizadas (22/09, continuação — imagem retrato em Como Funciona)

- **Bug real encontrado pelo usuário num navegador externo:** a imagem `09-contato-whatsapp.jpg` (retrato, passo 3 da trilha do locatário em `como-funciona.html`) tinha `max-width:420px` aplicado só na `<img>`, mas a moldura arredondada com sombra ao redor (`.bloco-como-funciona-imagem`) ficava na largura total da coluna — sobrava uma faixa vazia ao redor da imagem em telas largas (o problema não aparecia no celular, porque lá a coluna já é mais estreita que 420px). Corrigido movendo o limite de largura para a própria moldura, com uma nova classe `.bloco-como-funciona-imagem--retrato` em `css/paginas.css`, para a moldura acompanhar exatamente o tamanho da imagem em qualquer resolução. A outra imagem da página (`07-cadastro-imovel-desktop.jpg`, paisagem, trilha do locador) não usava essa restrição e não foi afetada.

## Alterações realizadas (24/09 — imagens esmagadas)

- **2026-09-24 · GitHub:** o site foi enviado para `Henriqueklkk/SGLK` (commit `24b674a`, 64 arquivos: `site/` completo, `memoria.md`, os dois logos extraídos e `.claude/launch.json`). As pendências "enviar para o GitHub" das seções anteriores estão cumpridas até esse commit; as correções desta seção vieram depois e ainda não foram enviadas.
- **Bug real encontrado pelo usuário (imagem "Como funciona" da Home) e que era bem mais amplo:** o HTML das imagens traz `width`/`height` (para reservar espaço), mas o CSS só limitava a largura (`img { max-width: 100% }`) e faltava `height: auto`; quando a largura encolhia para caber na coluna, o atributo `height` mantinha a altura fixa e a imagem saía esmagada. Na Home a 12-como-funciona (quadrada, 1:1) saía 480×760. Uma varredura medindo caixa renderizada × tamanho original em 8 páginas e 5 larguras (375, 768, 1024, 1280, 1440; 130 imagens) achou 12 imagens distorcidas, de −22% a −64%: as 5 seções "divididas" da Home (`02-busca`, `14-mobile`, `11-lifestyle`, `10-seguranca`, `06-painel-locador`, nas variantes mobile e desktop) e as duas imagens de abertura do Como funciona (`15-estudante-celular`, `16-locador-gestao`). Nenhuma foi notada nos testes anteriores, que só conferiram o DOM e capturas por cima.
- **Causas e correções (`css/paginas.css`):** (1) `.secao-dividida-imagem` é usada direto na `<img>`, mas o `height: auto` estava numa regra de descendente (`.secao-dividida-imagem img`) que nunca casava com nada — agora `height: auto` fica na própria classe e a regra morta saiu; (2) `.como-funciona-intro img` ganhou `height: auto`; (3) a imagem 12 da Home passou a usar a moldura padrão `.bloco-como-funciona-imagem` (cantos de 24px + sombra, a mesma da página Como funciona) com o novo modificador `--quadrada` (máx. 480px, centralizada), no lugar do estilo inline.
- **Efeito colateral encontrado e corrigido na hora:** com `height: auto`, uma imagem que é item flex (`flex: 1`) deixa de encolher abaixo da largura natural e passa a espremer o texto; foi preciso `min-width: 0` em `.secao-dividida-imagem` (a partir de 1024px). O mesmo defeito já existia sem ninguém ver em `.como-funciona-intro img` no desktop (a imagem ocupava 900px e o texto ficava com 147–204px de largura); corrigido com o mesmo `min-width: 0`, e as duas colunas agora dividem a linha ao meio.
- **Qualidade da imagem 12:** gerada a versão `12-como-funciona-1120.jpg` (1120×1120, 112 KB, a partir do original de 1254px em `imagens - site/`, dentro da meta de 250 KB do `design.md`), e a `<img>` da Home usa `srcset` (760w e 1120w) com `sizes`, para ficar nítida em telas de alta densidade sem pesar no celular.
- **Verificação:** depois das correções, 0 imagens distorcidas nas 130 medições; 96 das 130 ficaram com a mesma caixa de antes e as 34 que mudaram foram só as esperadas (alturas passaram a seguir a proporção original, larguras das colunas no desktop inalteradas). Sem erros de console em janela limpa.
- **Aprendizado de verificação:** o painel do navegador guarda em cache HTML/CSS antigos (o servidor `python -m http.server` não envia `Cache-Control`); para conferir uma mudança recém-editada, buscar a página com `fetch(..., {cache: 'no-store'})` e reescrevê-la com `?b=<timestamp>` nos `href`/`src` de CSS/JS. Reescrever o documento na mesma janela redeclara as `const` do site e gera um erro de console falso; para ler o console, usar uma aba nova.
- **Observação, não alterada:** em tablets (768–1023px) a Home ainda usa as variantes verticais 4:5 das seções divididas em largura total (~705×881), decisão anterior do `imagens.md`/`design.md` (troca mobile→desktop em 1024px). Está proporcional, mas grande; se quiser, dá para limitar a largura dessas imagens nesse intervalo.

## Alterações realizadas (24/09 — preparação para publicar na Vercel)

- **Decisão do usuário:** publicar o site na Vercel, importando o repositório do GitHub. Sem framework, build ou dependência nova: a stack continua HTML/CSS/JS puro; só entrou configuração de hospedagem.
- **`vercel.json` na raiz:** `outputDirectory: "site"`, sem framework, sem build e sem instalação. Motivo: o site fica na subpasta `site/` e a raiz tem material que não deve ficar público (`CLAUDE.md`, `memoria.md`, `imagens - site/` com 66 MB, `referencias - site/`, `meus - produtos/`). Sem esse arquivo a Vercel serviria a raiz: a Home daria 404 (não há `index.html` lá) e esses arquivos ficariam expostos. Resolve a pendência "confirmar onde e como o site será publicado". Na importação, deixar o Root Directory como `./`: se for trocado para `site`, o `vercel.json` da raiz deixa de valer.
- **Cabeçalhos no `vercel.json`:** `X-Content-Type-Options: nosniff`, `Referrer-Policy: strict-origin-when-cross-origin`, `X-Frame-Options: DENY` e um CSP parcial (`frame-ancestors 'none'; base-uri 'self'; object-src 'none'; form-action 'self'`), que de propósito não restringe script, estilo nem imagem por causa dos `style` inline e do script embutido de `anunciar.html`. Cache de 1 ano (`immutable`) só em `/fonts/*`; HTML, CSS, JS e imagens ficam no padrão da Vercel (revalidar sempre), porque imagens são trocadas mantendo o nome (há 2 para corrigir).
- **`rewrite` de `/favicon.ico` para `/img/favicon-32.png`:** os navegadores pedem `/favicon.ico` sozinhos e na Vercel isso seria um 404 real em cada página.
- **`.vercelignore`** com as pastas de trabalho (~100 MB, para não estourar o limite de upload num deploy pela CLI) e `.vercel` no `.gitignore` (vínculo local da CLI).
- **Correção pequena:** `como-funciona.html` tinha dois atributos `class` no mesmo elemento (`#painel-alugar`) e o navegador ignorava o segundo. Unificados, sem mudança visual.
- **Verificação:** (1) as 391 referências a arquivos do `site/` conferidas com diferenciação exata de maiúsculas e minúsculas (a Vercel roda em Linux e o Windows esconde esse erro), contra o disco e contra o índice do Git: nenhum problema; (2) `vercel.json` validado contra o schema oficial (`openapi.vercel.sh/vercel.json`); (3) um servidor de teste que imita a Vercel (pasta `site/` na raiz, nomes com caixa exata, cabeçalhos e rewrite do `vercel.json`) percorreu Home, Imóveis, uma kitnet, Como funciona (as duas trilhas), FAQ, Contato e o redirecionamento de Anunciar para Entrar: só respostas 200 e nenhum erro de console depois do rewrite do favicon (antes, só o `/favicon.ico` dava 404); a busca da Home continua funcionando com `form-action 'self'`.
- **Ainda só no computador (não enviado ao GitHub):** `vercel.json`, `.vercelignore`, `.gitignore`, as correções de imagens de 24/09 e `site/img/12-como-funciona-1120.jpg`. Essa imagem nem está no Git ainda: sem ela, telas de alta densidade recebem uma imagem quebrada na Home. A Vercel só enxerga o que estiver no GitHub (ou na pasta local, num deploy pela CLI). O último commit enviado continua sendo `24b674a`. O usuário não respondeu à pergunta sobre fazer o commit e o push agora, então nada foi enviado.

## Pendências para publicar (24/09)

- Commit e push dos arquivos acima, quando o usuário autorizar.
- **Metadados que dependem do endereço final:** todas as páginas usam `og:image` com caminho relativo (`img/17-compartilhamento-og.jpg`) e faltam `og:url` e `canonical`. Para a prévia de compartilhamento (WhatsApp, Facebook) o ideal é URL absoluta. Quando o endereço existir (`*.vercel.app` ou domínio próprio), ajustar nas 8 páginas.
- Os 2 defeitos de texto nas imagens ficam públicos com o site: "Kitnet mobierna" no cartão de trás da imagem do topo da Home no desktop (aparece já na primeira tela) e "Disponivel" sem acento na imagem de compartilhamento.
- **O que a publicação não muda:** os imóveis cadastrados em `anunciar.html` ficam só no navegador de quem cadastrou (`localStorage`), então os visitantes veem apenas as 3 kitnets de demonstração; o login é simulado e não protege nada de verdade; o formulário de contato não envia a lugar nenhum. Já estão nas pendências anteriores e nos avisos do próprio site.

## Próximos passos

1. Fazer o commit e o push da configuração da Vercel e das correções de 24/09; depois importar o repositório na Vercel (Framework Preset "Other", Root Directory `./`, sem mexer no resto).
2. Com o endereço final em mãos, ajustar `og:image`, `og:url` e `canonical` nas 8 páginas.
3. Corrigir os 2 defeitos de texto nas imagens e revisar as demais 29 com a lista de aprovação do `imagens.md`.
4. Decidir o canal real do formulário de Contato.
5. Planejar backend/banco de dados real, para ter contas e travas de verdade, guardar CPF/senha com segurança e migrar os imóveis do `localStorage`.
6. Produzir a versão do logo para fundo escuro, quando aprovada.
