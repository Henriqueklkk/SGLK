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

## Decisão aprovada (25/09 — Supabase)

- **2026-09-25 · Backend com Supabase:** o usuário autorizou adotar o Supabase como banco de dados e autenticação, para guardar os dados de forma correta (contas, CPF, imóveis) no lugar do `localStorage`. Isso substitui, quando implementado, a decisão de não persistir dados de conta e a sessão simulada `sglk_sessao_v1`. A autenticação **só começa quando o usuário mandar**.
- **Projeto Supabase:** `vqqgbbnxomqkqytgcbsb` (`https://vqqgbbnxomqkqytgcbsb.supabase.co`). Chave publicável conferida pelo conector do Supabase em 2026-09-25: é a chave `default`, ativa. O banco estava vazio (nenhuma tabela em `public`).

## Alterações realizadas (25/09 — preparação do Supabase)

- **Pacotes npm, a pedido do usuário:** `npm install @supabase/supabase-js @supabase/ssr` (versões 2.117.2 e 0.12.7) criou `package.json` e `package-lock.json` na raiz. `node_modules/` ficou fora do Git.
- **Skills do Supabase para o Claude Code:** `npx skills add supabase/agent-skills` instalou `supabase` e `supabase-postgres-best-practices` em `.claude/skills/` (cópia, só para este projeto), com o registro em `skills-lock.json`. Ficam no repositório, mas não entram no site publicado (a Vercel só publica `site/`).
- **`.env` na raiz:** `NEXT_PUBLIC_SUPABASE_URL` e `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY`, com os valores fornecidos pelo usuário. `.env` e `.env.*` ficaram fora do Git.

## Problemas encontrados (25/09 — Supabase)

- **Pacotes e `.env` pensados para Next.js, mas o site é estático:** o prefixo `NEXT_PUBLIC_` só é lido pelo Next.js na hora do build, e `@supabase/ssr` serve para frameworks com servidor (cookies no servidor). O SGLK não tem framework nem build (`vercel.json` com `buildCommand: null`), então o navegador não lê o `.env` nem importa nada de `node_modules/`. Tudo foi instalado como pedido, mas ainda falta decidir como o site vai carregar o Supabase (ver Pendências).
- **A Vercel vai rodar `npm install`:** com `installCommand: null` e um `package.json` na raiz, a Vercel instala as dependências no deploy. Não quebra nada (não há script de build), só deixa o deploy um pouco mais lento.

## Pendências (25/09 — Supabase)

- **Decidir como o site carrega o Supabase**, antes de começar a autenticação:
  - (A) manter o site estático: copiar o arquivo pronto para navegador de `@supabase/supabase-js` (`dist/umd/`) para `site/js/`, servido pelo próprio site, e pôr a URL e a chave publicável num arquivo de configuração em `site/js/`. A chave publicável é feita para ficar exposta no navegador; quem protege os dados são as políticas de RLS. Nesse caminho, `@supabase/ssr` e o `.env` não são usados pelo site.
  - (B) migrar o site para Next.js, que usa o `.env` com `NEXT_PUBLIC_` e o `@supabase/ssr` como estão. Isso reescreve as 8 páginas e muda a stack aprovada.
- Ao criar as tabelas: RLS ligado em todas, CPF protegido (nunca exposto a outros usuários) e política de privacidade antes de coletar CPF de pessoas reais.

## Decisões aprovadas (25/09 — banco no Supabase)

- **2026-09-25 · Endereços:** produção em `https://www.sglk.site` (Vercel, já integrada ao Supabase pelo usuário); testes locais em `http://localhost:8000`.
- **2026-09-25 · Plano de tabelas aprovado**, com liberdade para deixar "um pouco mais complexo caso precise".
- **2026-09-25 · Papéis:** conta de **locador** cadastra kitnets **e também pode alugar** (ver o WhatsApp e contatar outros locadores); conta de **locatário** só aluga e entra em contato. O tipo é escolhido no cadastro e não muda depois. Substitui a limitação da sessão simulada (um papel por vez).
- **2026-09-25 · Objetivo do site com login (resposta à escolha A/B):** site responsivo em que locatários logados contatam locadores e locadores logados publicam suas kitnets. O usuário não escolheu entre (A) manter o site estático e (B) migrar para Next.js; tratado como (A), que atende a tudo isso sem mudar a stack. Confirmar ao começar a integração no site.
- **2026-09-25 · E-mails:** o usuário ainda está decidindo (SMTP próprio × desligar a confirmação).

## Alterações realizadas (25/09 — banco no Supabase)

- **Migração `20260925231838 estrutura_inicial_sglk` aplicada** no projeto `vqqgbbnxomqkqytgcbsb`, com cópia versionada em `supabase/esquema-inicial.sql`:
  - `public.perfis` (tipo, nome, ocupação; criado sozinho no cadastro por um gatilho em `auth.users`, com `tipo` e `nome` obrigatórios e ocupação obrigatória só para locatário);
  - `privado.documentos` (CPF único e validado pelo dígito verificador no próprio banco). **Mudança em relação ao plano apresentado:** o plano dizia "só o dono lê"; o CPF foi para um esquema que a Data API não expõe, então ninguém lê pela internet, nem o dono. O site nunca precisa mostrar o CPF;
  - `public.kitnets` (colunas com os mesmos nomes do objeto usado em `site/js`), `public.kitnets_contato` (WhatsApp separado, só para quem tem conta) e `public.kitnet_fotos` (caminho no Storage, ordem e texto alternativo);
  - bucket `fotos-kitnets` no Storage: público para leitura pelo link, até 2 MB por arquivo, só JPEG/PNG/WebP, cada locador envia e apaga só na própria pasta (`<id do usuário>/...`);
  - RLS ligado em todas as tabelas, permissões mínimas por coluna (ninguém troca o próprio `tipo` nem o dono de uma kitnet), gatilho que atualiza `atualizado_em`.
- **O CPF não fica nos metadados da conta:** o site vai enviá-lo no cadastro, mas o gatilho o grava em `privado.documentos` e o apaga dos metadados antes de salvar (os metadados vão dentro do token de acesso e o próprio usuário pode editá-los). Um segundo gatilho apaga o CPF se ele voltar aos metadados por outro caminho.
- **Testes (com usuários simulados, tudo desfeito ao final):** as 27 verificações passaram. Entre elas: CPF válido aceito, repetido e inválido barrados; tipo "admin" barrado; locatário sem ocupação barrado; CPF fora dos metadados; locador cadastra kitnet, WhatsApp e foto e envia arquivo na própria pasta; foto e arquivo em pasta alheia barrados; locatário não cadastra kitnet, não altera nem apaga anúncio alheio, vê o WhatsApp, vê só o próprio perfil e não troca o próprio tipo; visitante vê anúncios e fotos, mas não o WhatsApp nem perfis; CPF inacessível para qualquer usuário do site. Depois dos testes: histórico só com a migração real e banco vazio (0 usuários, 0 kitnets, 0 arquivos).
- **Painéis do Supabase:** segurança só com 1 aviso informativo esperado (`privado.documentos` sem política, de propósito); desempenho só com "índices não usados", porque o banco está vazio.

## Problemas encontrados (25/09 — banco no Supabase)

- A ferramenta `execute_sql` do conector do Supabase roda com um usuário só de leitura (`supabase_read_only_user`); por isso os testes de permissão foram feitos com `apply_migration` terminando num erro proposital (nada gravado, conferido no histórico de migrações).
- No primeiro teste, a checagem da ocupação usou um CPF inválido e a data de atualização não podia mudar dentro de uma única transação; os dois pontos foram refeitos e passaram.

## Pendências (25/09 — banco no Supabase)

- **Painel do Supabase (só o usuário pode fazer):** em Authentication → URL Configuration, Site URL `https://www.sglk.site` e Redirect URLs `https://www.sglk.site/**`, `https://sglk.site/**`, `http://localhost:8000/**` e `http://127.0.0.1:8000/**`.
- **E-mails:** o serviço padrão do Supabase só envia para membros da equipe do projeto e com limite por hora; para o público, configurar SMTP próprio ou desligar a confirmação de e-mail.
- **Criar usuário pelo painel do Supabase ("Add user") vai falhar:** o gatilho exige tipo, nome e CPF válido em toda conta nova. Contas devem ser criadas pelo site.
- **Ao apagar uma conta,** perfil, CPF, kitnets, WhatsApp e registros de fotos são apagados juntos, mas os arquivos no Storage ficam; o site precisa apagá-los antes (ou fazer limpeza depois).
- **Política de privacidade** antes de coletar CPF de pessoas reais (LGPD).
- **Integração no site** (supabase-js no navegador, cadastro/login reais, anúncios e fotos no banco, trava real do WhatsApp): aguardando o usuário mandar começar.

## Problemas encontrados (29/09 — documento da disciplina × site)

- **Documento analisado:** "Documentação do Sistema de Gerenciamento e Locação de Kitnets" (Engenharia de Software I, IFPA Tucuruí, Prof. Douglas Bechara), versão 0.8, 40 páginas; seções 14 a 18 ainda em branco. Arquivo fora do projeto (`Downloads`).
- **O site atende:** escopo e itens fora do escopo, público, busca por bairro/preço máximo/comodidades sem login (UC-03), status "Disponível"/"Alugado" (RF-04), WhatsApp por `wa.me` com mensagem pronta em nova aba (RF-05), aviso contra golpes (ELI-03), responsividade (RNF-01).
- **Divergências que contradizem decisões registradas (aguardando o usuário):**
  1. Documento: kitnet "Alugado" **some** da busca pública (RF-04, HU-03, HU-04, UC-02, UC-04). Site e `specs/design.md` §9.1/§11: alugadas continuam no catálogo com selo e "Ver detalhes" (e a kitnet de demonstração 03 é "Alugado").
  2. Documento: ator **Administrador** (UC-06, HU-06, RN-02, validar locadores, inativar anúncios). Não existe no `specs/site.md`, no site nem no banco.
  3. Documento: UC-05 e o diagrama só ligam o **locatário** ao contato; decisão de 25/09: locador também pode contatar.
  4. Documento: botão "Entrar em Contato"; `specs/design.md` §8: "Falar no WhatsApp".
  5. Documento: **telefone** no cadastro (UC-01) e `telefone_whats` em locador e locatário; site e banco: WhatsApp por anúncio, sem telefone no cadastro.
- **Faltas no site (sem conflito, só não implementadas):** editar anúncio (RF-02); confirmação antes de marcar como alugado (UC-04); 1 a 5 fotos (site aceita até 4); campo de regras de convivência (1.3); endereço citado em UC-02 FA-01; cadastro/login/anúncios reais (dependem da integração com o Supabase); redirecionar para a Home logado após o cadastro (UC-01).
- **Documento × arquitetura atual (seções 11 a 14):** o documento prevê servidor próprio com API REST (Java/Python), `KitnetController`/`KitnetRepository`, MySQL com `tb_locador`/`tb_locatario`/`tb_kitnet`, IDs inteiros e valor `DECIMAL(10,2)`. O projeto real é site estático (HTML/CSS/JS) na Vercel + Supabase (PostgreSQL, API REST pronta, regras em RLS), com `perfis`, `privado.documentos`, `kitnets`, `kitnets_contato` e `kitnet_fotos`, IDs UUID e preço inteiro. O documento não modela fotos, e-mail/senha nem área/quartos/banheiros.
- **Inconsistências internas do documento:** status com quatro nomes ("Indisponível", "desalugado", "Alugada", "Alugado"); versão 0.8 no cabeçalho com histórico até 1.0; cronograma com números de seção que não batem com o sumário; relação "Locador busca e visualiza Kitnet" no diagrama de classes (seria "cadastra"); `tb_locatario` sem nome e CPF no DER, embora a classe tenha; front-end listado como "Java/Python/Html/Css".

## Decisões aprovadas (29/09 — respostas à análise do documento)

- **2026-09-29 · Kitnets alugadas:** continuam na busca e nos destaques da Home, mas **sempre depois das disponíveis**. Mantém o `specs/design.md` (alugadas visíveis com "Ver detalhes") e diverge do documento da disciplina, que as esconde.
- **2026-09-29 · Administração:** o usuário quer uma área de administração (UC-06, HU-06, RN-02 do documento). Plano apresentado, aguardando respostas (ver Pendências).
- **2026-09-29 · Contato pelo locador:** fica como está no site (decisão de 25/09: locador também pode contatar); o usuário vai ajustar o UC-05 no documento.
- **2026-09-29 · Botão de contato:** passa a ser "Entrar em contato", como no documento, em vez de "Falar no WhatsApp". Substitui o texto fixado no `specs/design.md` §8.
- **2026-09-29 · Telefone:** cadastro de telefone com DDD no site e no banco, para locatário e locador. Isso atende o UC-01 e as classes do documento; o alerta sobre coletar só o necessário (LGPD) foi dado, e a decisão é do usuário.
- **2026-09-29 · Seções 11 a 14 do documento:** o usuário pediu para não atualizar nada sobre elas.

## Alterações realizadas (29/09)

- **Ordem do catálogo:** `obterTodasKitnets()` (`js/armazenamento.js`) passou a ordenar as disponíveis primeiro, mantendo a ordem original dentro de cada grupo; vale para Imóveis, filtros e destaques da Home.
- **Botão "Entrar em contato":** nos três estados do botão em `imovel.html` (com login, travado com cadeado e desabilitado nas kitnets de demonstração), com "pelo WhatsApp" escondido na tela e lido pelos leitores de tela, já que o ícone não tem texto. Texto também trocado em `contato.html` e no `specs/design.md` (§3.4, §8, §9.1).
- **`specs/design.md` v1.2:** o botão novo e a ordem das kitnets alugadas (§11).
- **Telefone no site:** campo "Telefone com DDD" em `entrar.html`, obrigatório nas duas abas, com máscara `(00) 00000-0000` e validação (DDD + celular com 9 e mais 8 dígitos, ou fixo de 8 dígitos começando de 2 a 8). Como o resto do cadastro simulado, não é guardado em lugar nenhum.
- **Telefone no banco:** migração `20260929140423 telefone_no_perfil` (cópia em `supabase/telefone-no-perfil.sql`): coluna `perfis.telefone` obrigatória, com a mesma regra de formato; o gatilho de cadastro lê o telefone (aceita máscara e o 55 na frente, grava só DDD + número) e o tira dos metadados da conta, junto com o CPF. Cada pessoa vê e edita só o próprio telefone.
- **Testes do banco (usuários simulados, tudo desfeito):** 9 de 9 passaram: celular com máscara e fixo com 55 gravados certos, cadastro sem telefone e celular sem o 9 barrados, telefone fora dos metadados, dono edita o próprio telefone, telefone inválido barrado na edição, locatário não vê o telefone do locador, visitante não vê telefones. Histórico com só as 2 migrações reais; banco vazio.
- **Testes do site (servidor local):** catálogo e Home na ordem 01, 02, disponível de teste, 03 (alugada) e alugada de teste; botão travado com o texto novo e o nome acessível completo; máscara do telefone (celular, fixo, parcial e excesso de dígitos); telefone inválido barrado com foco no campo; telefone válido aceito e sessão com só o tipo de conta; sem rolagem lateral em 375px; console sem erros. Dados de teste removidos do navegador.

## Problemas encontrados (29/09)

- **O texto "Falar no WhatsApp" está desenhado dentro das imagens ilustrativas geradas por IA** (16 menções no `imagens.md`, por exemplo `09-contato-whatsapp`, `02-busca`, `04-kitnet-destaque-01`). O site agora diz "Entrar em contato", mas as imagens continuam com o texto antigo até serem geradas de novo.
- O painel de segurança do Supabase respondeu 503 duas vezes depois da migração do telefone; na terceira tentativa voltou e mostrou só o aviso informativo esperado (`privado.documentos` sem política, de propósito).
- O painel do navegador de testes estava com 280px de largura (abaixo do mínimo de 360px do `design.md`), o que mostra rolagem lateral em `entrar.html`; em 375px não há rolagem. Não é defeito do site.

## Pendências (29/09 — área de administração)

- **Depende da integração do site com o Supabase:** sem login real, uma área de administração não protege nada. A integração continua esperando a ordem do usuário.
- **Perguntas em aberto:** o que "validar locador" significa na prática (aprovar antes de os anúncios aparecerem ou só moderar depois); se entra o botão "Denunciar anúncio" (UC-06 e HU-06 falam em anúncio "denunciado" ou "reportado"); o que uma conta suspensa perde.
- Regerar ou editar as imagens que mostram "Falar no WhatsApp", junto com os 2 defeitos de texto já conhecidos.

## Decisões aprovadas (29/09 — integração com o Supabase e moderação)

- **2026-09-29 · Começar a integração:** o usuário mandou ligar o site ao Supabase. Feito pelo caminho (A): site continua estático (HTML/CSS/JS puro), com a biblioteca `supabase-js` servida pelo próprio site. `@supabase/ssr` e o `.env` continuam sem uso pelo site.
- **2026-09-29 · Validação de locador = (a):** os anúncios de um locador novo só aparecem no catálogo depois que a moderação aprova o cadastro. O locador já pode cadastrar imóveis enquanto espera.
- **2026-09-29 · Denúncia:** botão para denunciar anúncio "caso haja fraude", para quem tem conta.
- **2026-09-29 · Conta suspensa (o usuário deixou a critério):** continua entrando e vê os próprios dados e o motivo; não vê contatos, não publica, não edita e não denuncia; os anúncios dela saem do ar; pode apagar os próprios anúncios. Só a moderação reativa.
- **2026-09-29 · Moderador:** conta com `app_metadata.papel = "admin"`, que só o banco altera. A conta do usuário vira moderadora depois que ele criar a conta pelo site e avisar.

## Alterações realizadas (29/09 — integração e moderação)

- **Banco (Supabase):** migração `20260929144034 moderacao` (`supabase/moderacao.sql`): situação da conta e aprovação do locador em `perfis`; inativação com motivo em `kitnets`; tabela `denuncias` (uma denúncia aberta por pessoa e anúncio); função `public.eh_admin()`; função `public.moderacao_listar_contas()` (e-mail e CPF, só para a moderação); gatilhos que impedem qualquer pessoa, exceto a moderação, de mudar aprovação, suspensão ou moderação; todas as regras de acesso refeitas para esconder anúncios de locador pendente ou suspenso e bloquear conta suspensa. Migração `20260929144339 catalogo_publico` (`supabase/catalogo-publico.sql`): vista `kitnets_publicas`, o catálogo igual para todo mundo (sem ela, o dono veria os próprios anúncios pendentes na busca e a moderação veria tudo).
- **Site:** `js/vendor/supabase.js` (supabase-js 2.117.2, licença MIT em `js/vendor/supabase-js-LICENSE.txt`) e `js/supabase-config.js` em todas as páginas; `js/armazenamento.js` reescrito (catálogo, conta, anúncios, fotos no Storage, WhatsApp, denúncias, moderação) e as chaves antigas do `localStorage` (`sglk_kitnets_usuario_v1`, `sglk_sessao_v1`) são apagadas na primeira visita; `js/site.js` reescrito nas partes de conta, catálogo, imóvel, anunciar e entrar.
- **`entrar.html`:** cadastro e login reais. Com a confirmação de e-mail ligada, mostra "enviamos um link"; e-mail repetido mostra "E-mail já cadastrado. Deseja fazer login?" (UC-01 FA-01) com o botão "Entrar com este e-mail"; depois de entrar, volta para a Home ou para onde a trava mandou (HU-01); quem já está conectado vê "Você já entrou" com "Continuar" e "Sair". Texto do CPF atualizado (fica numa área protegida; só a moderação vê).
- **Cabeçalho:** quem entrou vê "Olá, primeiro nome", "Moderação" (só a moderação) e "Sair".
- **`anunciar.html`:** trava pela sessão real; avisos de cadastro em análise, conta suspensa e edição pela moderação; modo edição (`anunciar.html?editar=<id>`) para o dono e a moderação (que só remove fotos, não envia); WhatsApp com máscara, preenchido com o telefone da conta; fotos comprimidas no navegador e enviadas ao Storage; "Meus imóveis" do banco, com Editar, confirmação antes de mudar o status (UC-04) e Excluir.
- **`imovel.html`:** anúncio do banco; contato real para qualquer conta ativa; "Este anúncio é seu" para o dono; aviso de anúncio fora do ar para dono e moderação; link "Denunciar anúncio" com formulário (motivo e texto), abaixo dos detalhes.
- **Nova página `moderacao.html` + `js/moderacao.js`:** abas Cadastros (aprovar ou suspender locadores pendentes, com e-mail, telefone e CPF), Denúncias (inativar o anúncio já resolvendo a denúncia, marcar como resolvida ou descartar), Anúncios (ver, editar, inativar e reativar) e Contas (suspender e reativar). Janela de confirmação com `<dialog>` e motivo obrigatório para o que tira algo do ar, recriando o componente de Dialog de referência. Fora do menu, com `noindex`.
- **FAQ:** respostas de contato (precisa de conta), anunciar (aprovação da moderação) e segurança (denúncia) atualizadas.
- **`specs/design.md` v1.3:** estados do botão de contato, conta no cabeçalho, moderação, denúncia e janela de confirmação.

## Problemas encontrados (29/09 — integração e moderação)

- **Bug do `hidden`, 11º a 13º casos, e correção definitiva:** `.aviso-caixa`, `.aviso-armazenamento-local` e `.entrada-fotos` fixavam `display`; o aviso de redirecionamento de `entrar.html` já aparecia como uma caixa amarela vazia quando a página era aberta sem `?papel=` (no ar desde 22/09). E `.botao` também fixa `display`, então nenhum botão com `hidden` sumia. Correção: regra global `[hidden] { display: none !important; }` em `css/estilo.css`, que resolve o defeito para qualquer classe.
- **Contraste reprovado no ar desde 22/09:** a correção antiga `.selo:not([hidden])` ficou mais específica que as variantes e forçava texto branco em todas; o selo "Imagem por IA" e o aviso "Este imóvel já foi alugado" tinham texto branco sobre `--aviso-fundo` (cerca de 1,1:1). Com a regra global, `.selo` voltou a ser classe simples; medido depois: todos os selos entre 5,19:1 e 9,84:1, iguais ao `design.md`.
- **Regra `.cartao-kitnet-sem-foto` sem uso e com texto em `--salvia-500`** (proibido): trocada por `.sem-foto` (ícone sálvia, texto `--texto-suave`), agora usada nos cards, na galeria e em "Meus imóveis" quando um anúncio fica sem foto.
- **Cartão de contato fixo cobrindo a denúncia:** o cartão usa `position: sticky`; com a denúncia dentro da mesma coluna, ele ficava por cima do formulário ao rolar. A denúncia foi para baixo da grade de detalhes; medido sem sobreposição em 375px e 1280px.
- **Não é possível testar cadastro e login reais sem digitar senhas**, que iriam para o servidor do Supabase: essa parte fica para o usuário. As telas de quem está logado foram testadas com páginas temporárias que trocavam só as funções de dados por respostas simuladas (apagadas depois).
- O navegador de testes guardava versões antigas de CSS/JS/HTML (o `python -m http.server` não manda `Cache-Control`); resolvido com `fetch(arquivo, {cache: "reload"})` antes de cada teste.

## Verificação (29/09 — integração e moderação)

- **Banco:** 32 verificações da moderação (usuários simulados, tudo desfeito), mais o teste da vista do catálogo (visitante, locador pendente e moderação veem só o anúncio público). Histórico só com as 4 migrações reais; banco vazio. Painel de segurança: só o aviso esperado de `privado.documentos` e o de `moderacao_listar_contas` executável por quem tem conta (intencional: a função recusa quem não é moderação, confirmado no teste 13).
- **Site, pela API real, sem conta:** catálogo carrega do banco (vista com fotos), visitante barrado em WhatsApp, perfis, denúncias e lista de contas; travas de Anunciar e Moderação levam para entrar; nenhum elemento com `hidden` visível em 10 páginas; console sem erros numa aba limpa.
- **Telas de quem está logado (dados simulados):** 8 cenários da página do imóvel (visitante, locatário, já denunciou, dono, conta suspensa, moderação, locador pendente, anúncio inativado); formulário de denúncia (vazio, texto curto, envio); 8 cenários de Anunciar; cadastro completo (sem foto, arquivo que não é imagem, WhatsApp inválido e válido); status, exclusão e edição com troca de foto; moderação (painéis, aprovar, suspender com motivo obrigatório, inativar a partir de denúncia, Esc devolvendo o foco, bloqueio para quem não é moderação). Sem rolagem lateral em 375px.

## Pendências (29/09 — depois da integração)

- **Painel do Supabase:** conferir Authentication → URL Configuration (Site URL `https://www.sglk.site`; Redirect URLs `https://www.sglk.site/**`, `https://sglk.site/**`, `http://localhost:8000/**`, `http://127.0.0.1:8000/**`). Sem isso, o link de confirmação do e-mail aponta para o endereço errado.
- **Tornar a conta do usuário moderadora:** ele cria a conta pelo site, confirma o e-mail e avisa; aí uma migração define `app_metadata.papel = "admin"`. Depois disso, sair e entrar de novo.
- **E-mails:** com o SMTP padrão, só os membros do projeto recebem a confirmação. Para o público: SMTP próprio ou desligar a confirmação.
- **Sem "Esqueci minha senha"** (depende de e-mail funcionando).
- **Sem link "Entrar" no menu:** o `design.md` §1.1 tira "Entrar" do menu; hoje só se chega a `entrar.html` pelas travas (Anunciar, contato, denúncia, moderação) ou digitando o endereço. Decidir se entra no cabeçalho.
- **Locatário que quer anunciar:** o tipo de conta não muda e o CPF só abre uma conta, então hoje não há caminho. Decidir (por exemplo, a moderação trocar o tipo).
- **Apagar conta:** perfil, CPF, anúncios e denúncias somem juntos, mas as fotos ficam no Storage.
- **Política de privacidade** antes de receber CPF e telefone de pessoas reais (LGPD).
- **Commit e push** de tudo desde `d35a9a6` (nada desta integração foi enviado).

## Decisões aprovadas (03/10)

- **2026-10-03 · Commit:** o usuário pediu o commit de tudo o que estava só no computador desde `d35a9a6` (integração com o Supabase, moderação, telefone, ordem do catálogo, botão "Entrar em contato", link "Entrar"). Pediu só o commit, não o envio ao GitHub.
- **2026-10-03 · Link "Entrar":** entra no cabeçalho e no menu do celular. Substitui a regra do `specs/design.md` §1.1, que deixava "Entrar" fora do menu.
- **2026-10-03 · Conta de locatário:** continua limitada (busca e contato, sem anunciar); "talvez haja atualização depois". Fica registrado como decisão, não como pendência.
- **2026-10-03 · Conta de administrador para o usuário:** pedida. Criar a conta exige definir uma senha, o que fica com o usuário; o banco a transforma em moderadora assim que ela existir (ver Pendências de 03/10).

## Alterações realizadas (03/10)

- **Link "Entrar"** (`data-link-entrar`) nas 9 páginas: no cabeçalho a partir de 1024px, como link à esquerda de "Anunciar minha kitnet"; no menu do celular, botão secundário abaixo de "Anunciar". Leva a `entrar.html?modo=entrar`, que abre direto no formulário de login, com `redirecionar` para a página atual (Home, Imóveis, uma kitnet, Como funciona, FAQ, Contato e Moderação entraram na lista de destinos aceitos de `destinoAutenticadoSeguro`). Some para quem já entrou: na hora, se há sessão guardada no navegador, e de novo quando a conta termina de carregar.
- **Cabeçalho de quem entrou entre 1024px e 1199px:** com "Moderação" e "Sair", a navegação ficava espremida (o último link encostava em "Anunciar" e o texto quebrava de linha), um aperto que já existia desde 29/09. A saudação "Olá, nome" agora só aparece no cabeçalho a partir de 1200px (no menu do celular, sempre).
- **`specs/design.md` v1.4:** link "Entrar" (§1.1 e §13) e a regra da saudação.
- **Comentário antigo** do CSS da sessão ("sessão simulada") atualizado.

## Verificação (03/10)

- Link "Entrar" medido em 7 páginas: visível no cabeçalho em 1280px e 1024px e escondido nele em 375px (só no menu); destino de volta certo (inclusive `imovel.html?id=...`; em `imoveis.html?bairro=...` volta para `imoveis.html`); `entrar.html?modo=entrar` abre o login e `entrar.html` sem `modo` continua no cadastro; com uma sessão inválida guardada, o link volta a aparecer depois que a conta carrega.
- Cabeçalho com conta de moderação simulada: em 1024px, 30px entre a navegação e "Anunciar", sem quebra de linha; em 1200px, saudação visível e 64px de folga; sem rolagem lateral nas duas larguras.
- Dados de teste (sessão falsa no navegador) removidos.

## Pendências (03/10)

- **Envio ao GitHub (`git push`):** só com autorização; até lá, www.sglk.site continua com a versão de `d35a9a6` (sem Supabase).
- **Conta de administrador:** o usuário cria a conta pelo site (com o e-mail da conta dele no Supabase, que é o único que recebe a confirmação enquanto não houver SMTP próprio), confirma o e-mail e avisa; uma migração define `app_metadata.papel = "admin"`. O e-mail dele não deve ir para nenhum arquivo do repositório, que é público.
- As pendências de 29/09 continuam, menos "link Entrar" (feito), "locatário que quer anunciar" (decidido: fica limitado) e "commit" (feito).

## Alterações realizadas (06/10)

- **2026-10-06 · Envio ao GitHub autorizado e feito:** `git push` de `dae20e4` para `main` (`d35a9a6..dae20e4`). A Vercel publica a partir daí.
- **Passos 1 a 4 do Supabase feitos pelo usuário:** os registros de autenticação mostram as mudanças de configuração entre 22h54 e 23h01 UTC de 06/10.

## Problemas encontrados (06/10)

- **A conta do usuário não chegou ao banco:** `auth.users` vazio e nenhuma tentativa de cadastro nos registros do Supabase. Causa provável: o cadastro foi feito em www.sglk.site, que até o envio de 06/10 ainda rodava a versão antiga, com cadastro simulado que não guarda nada.
- **Pedido de "criar a conta no banco":** criar a conta exige definir a senha da pessoa, então o usuário cria a conta pelo site; a promoção para moderação (`app_metadata.papel = "admin"`) é feita no banco logo depois. O e-mail dele não vai para nenhum arquivo do repositório.

## Alterações realizadas (06/10, continuação — conta de moderação e e-mails)

- **Conta do usuário criada pelo site atualizado:** uma conta de locador, com e-mail confirmado e primeiro login feito. Primeira verificação com dados reais do gatilho de cadastro: perfil criado, CPF guardado em `privado.documentos` e CPF e telefone fora dos metadados da conta. O cadastro de locador está "pendente", para o próprio usuário aprovar pela página Moderação (primeiro teste real da moderação).
- **Conta promovida a moderação:** migração `promover_moderador_inicial` (só no histórico do Supabase, não no repositório), que define `app_metadata.papel = "admin"`; conferido no banco. O usuário precisa sair e entrar de novo para o papel valer no site.
- **Decisão do usuário: e-mails pela Brevo** (SMTP próprio), para quem não é membro do projeto receber a confirmação de cadastro.
- **DNS do `sglk.site` fica na Hostinger** (servidores `dns-parking.com`); os registros de autenticação da Brevo vão lá. O domínio não tem registro MX, então não recebe e-mails; o remetente `nao-responda@sglk.site` só envia.
- **Domínio `sglk.site` autenticado na Brevo (06/10):** conferido por consulta DNS pública: TXT `brevo-code` na raiz, DKIM `brevo1._domainkey` e `brevo2._domainkey` (CNAME para `b1`/`b2.sglk-site.dkim.brevo.com`) e DMARC `v=DMARC1; p=none; rua=mailto:rua@dmarc.brevo.com`. No caminho, o assistente de configuração automática da Brevo (Entri) abriu uma tela da IONOS oferecendo comprar um domínio; não era necessário, e o usuário seguiu sem comprar.
- **Brevo, ajustes de 06/10:** bloqueio de IPs não autorizados desativado só para as chaves SMTP (o Supabase não tem IP fixo de envio; as chaves de API continuam como estavam). Chave SMTP "Supabase SGLK" (variante padrão, 64 caracteres) com validade de 1 ano, até 06/10/2027; a Brevo também a expira depois de **90 dias sem uso**. Se a chave expirar, os e-mails de confirmação param de chegar: gerar outra na Brevo e trocar a senha em Supabase → Authentication → SMTP Settings.
- **Dados da Brevo conferidos na documentação oficial:** servidor `smtp-relay.brevo.com`, porta 587; usuário e senha em "SMTP and API settings" (aba SMTP), usando uma **chave SMTP**, não uma chave de API.

- **SMTP próprio funcionando (06/10, 21h03 em Brasília):** Supabase ligado à Brevo (`smtp-relay.brevo.com`, porta 587, remetente `SGLK <nao-responda@sglk.site>`, intervalo mínimo de 60 s por usuário; o Supabase subiu o limite de envio de 2 para 30 e-mails por hora ao ligar o SMTP próprio). Teste pelo painel com "Send password recovery": o pedido voltou 200 nos registros e o e-mail chegou ao Gmail do usuário com o remetente certo.
- **Os e-mails ainda saem em inglês** ("Reset your password", e a confirmação de cadastro também): são os modelos padrão do Supabase, em Authentication → Emails.

## Decisões aprovadas (06/10 — senha e e-mails)

- **2026-10-06 · E-mails em português e com o visual do site** ("deixe bonito os emails mandados"): confirmação de cadastro, redefinição de senha e aviso de senha alterada.
- **2026-10-06 · "Esqueci minha senha"** no site, com a tela para escolher a senha nova.
- **2026-10-06 · "Mostrar senha":** caixa de seleção abaixo do campo de senha no cadastro e no login, a partir de uma imagem de exemplo do usuário (campo "Digite sua senha" com a caixa "Mostrar senha" embaixo). Também entrou na tela de senha nova.

## Alterações realizadas (06/10 — senha e e-mails)

- **`entrar.html`:** "Mostrar senha" no cadastro e no login, e "Mostrar senhas" (uma caixa para os dois campos) na senha nova; "Esqueci minha senha" na linha do "Mostrar senha" do login; novos blocos "Recuperar senha" (e-mail e "Enviar link", com mensagem que não revela se a conta existe) e "Escolha uma senha nova" (senha, repetição, sucesso e aviso de link expirado com "Pedir um link novo").
- **`js/armazenamento.js`:** `pedirLinkRecuperacao` (o Supabase manda o e-mail com volta para `entrar.html?modo=nova-senha`) e `definirNovaSenha`; mensagens em português para "senha igual à atual" e "link expirado".
- **`js/supabase-config.js`:** `LINK_DO_EMAIL_COM_ERRO`, lido antes de a biblioteca limpar o endereço, para reconhecer link de e-mail expirado ou já usado (recuperação e confirmação de cadastro).
- **`js/site.js`:** `iniciarMostrarSenha()` em todas as páginas; modos `?modo=recuperar` (usado pelo e-mail de senha alterada) e `?modo=nova-senha`; link de confirmação de cadastro expirado mostra "O link do e-mail expirou ou já foi usado…" e abre o login.
- **`supabase/emails/`:** os 3 modelos em HTML (tabelas e estilos embutidos, como os programas de e-mail exigem) e um `LEIA-ME.md` com onde colar cada um e os assuntos: "Confirme seu e-mail no SGLK", "Redefina sua senha do SGLK" e "Sua senha do SGLK foi alterada". O logo dos e-mails vem de `https://www.sglk.site/img/sglk-logo-horizontal.png`.
- **`specs/design.md` v1.5:** "Mostrar senha" (§9.4) e recuperação de senha e e-mails (§9.7).

## Problemas encontrados (06/10 — senha e e-mails)

- **Senha curta aceita em alguns casos, no ar desde 29/09:** a validação usava `checkValidity()`, e o navegador só aplica o `minlength` ao que a pessoa digita; uma senha preenchida por script ou por alguns gerenciadores de senha passava com menos de 8 caracteres (o Supabase aceita a partir de 6). `validarCampoAuth` agora confere o tamanho de forma explícita, o que vale para cadastro e senha nova.
- "Esqueci minha senha" saía com 16px mesmo com `texto-pequeno`, porque `.botao` define o tamanho; corrigido para 14px.
- O Supabase não avisa quando o endereço de volta não está nas Redirect URLs: manda para a Site URL sem erro. Conferido nos registros que `entrar.html?confirmado=1` foi aceito na confirmação do cadastro do usuário, então `entrar.html?modo=nova-senha` também casa com `https://www.sglk.site/**`.
- As anotações "07/10" desta seção vinham do horário UTC dos registros; no horário de Brasília tudo foi em 06/10, e as datas foram padronizadas.

## Verificação (06/10 — senha e e-mails)

- **E-mails:** prévias dos 3 modelos no navegador em 375px e 640px (páginas temporárias, apagadas): botão de 293 × 48px no celular, sem rolagem lateral e com o logo carregado.
- **`entrar.html` no servidor local:** "Mostrar senha" alterna o campo entre senha e texto nas 3 telas (também clicando no texto); "Esqueci minha senha" copia o e-mail do login, recusa e-mail inválido e, com um endereço sem conta (`.invalid`), chega ao Supabase (`POST /recover` 200 nos registros, nenhum e-mail enviado) e mostra a mensagem neutra; `?modo=recuperar` abre a tela de recuperação; `?modo=nova-senha` sem sessão e um link com `#error=…&error_code=otp_expired` mostram os avisos certos; o formulário de senha nova, com uma sessão simulada (página temporária, apagada), recusa senha curta e senhas diferentes, mostra a mensagem traduzida para senha igual à atual e, no sucesso, limpa o endereço. Nenhum elemento `hidden` visível, sem rolagem lateral em 375px e console sem erros numa aba limpa.
- **Não testado de ponta a ponta:** receber o e-mail de recuperação e trocar a senha de verdade, que exige uma conta real e digitar a senha. Fica para o usuário, depois do envio ao GitHub.

## Modelos de e-mail no painel do Supabase (06/10)

- **Colados pelo usuário e conferidos pelo Claude in Chrome:** o corpo dos 3 modelos no painel é idêntico aos arquivos de `supabase/emails/` (SHA-256 do texto, sem diferença de quebra de linha). Assuntos: "Confirme seu e-mail no SGLK", "Redefina sua senha do SGLK" e "Sua senha do SGLK foi alterada"; os dois últimos estavam com dois-pontos no fim, vindos da cópia, e foram corrigidos.
- **"Password changed" ligado:** a chave "Enable notification" fica num quadro "Configuration" da página do modelo e tem um botão **Save changes** próprio, separado do botão que salva assunto e corpo; sem ele, a chave volta a ficar desligada (foi o que aconteceu na primeira tentativa do usuário).
- **Problemas no caminho:** (1) da primeira vez, o corpo do "Reset password" foi salvo com o texto do comando `powershell … | Set-Clipboard` que eu tinha sugerido para copiar o arquivo, e os e-mails de teste das 22h39, 22h42 e 22h46 saíram com esse texto (o das 22h39 caiu no spam). Para colar modelos, copiar direto do arquivo (Bloco de Notas ou área de transferência preenchida pelo Claude), não por comando. (2) O Claude in Chrome não funciona no Opera (falha ao criar o grupo de abas, "No group with id"); funcionou no Google Chrome.
- **E-mail de recuperação conferido pelo usuário** depois da correção: chegou em português, com o visual do site. Pedidos de teste feitos pela versão local (`POST /recover` 200 às 22h39, 22h42, 22h46 e 22h50), para o link voltar a `localhost:8000/entrar.html?modo=nova-senha`, que já tem a tela nova.

## Pendências (06/10 — senha e e-mails)

- **Testar o aviso de senha alterada:** só sai quando a senha muda de verdade. O usuário precisa abrir o último e-mail de recuperação neste computador (o link volta para `localhost:8000`), escolher a senha nova e conferir se chega "Sua senha do SGLK foi alterada".
- **Commit e envio ao GitHub:** só com autorização. O link de recuperação leva a `entrar.html?modo=nova-senha`, que só existe em www.sglk.site depois do envio; até lá, quem pedir recuperação cai no `entrar.html` publicado, que só faz a pessoa entrar, sem trocar a senha.
- `.agents/` (outra cópia das skills do Supabase, criada em 29/09) continua fora do Git, como no commit anterior.

## Próximos passos

1. "Mostrar senha", "Esqueci minha senha" e os e-mails em português feitos em 06/10, ainda só no computador. Falta: commit e envio (com autorização), o usuário colar os modelos no Supabase e testar a recuperação com a própria conta.
2. Com o endereço final em mãos, ajustar `og:image`, `og:url` e `canonical` nas 8 páginas.
3. Corrigir os 2 defeitos de texto nas imagens e revisar as demais 29 com a lista de aprovação do `imagens.md`.
4. Decidir o canal real do formulário de Contato.
5. Integração com o Supabase e moderação: feitas em 29/09 e testadas com a conta do usuário. Em 2026-10-07 ele aprovou o próprio cadastro de locador pela página Moderação (primeiro uso real; conferido no banco: locador, aprovado, ativa). Banco nesse dia: 1 conta, 0 anúncios reais, 0 fotos, 0 denúncias; o catálogo público só mostra as 3 kitnets de demonstração.
7. **Para apresentar o MVP** (lista passada ao usuário em 2026-10-07): envio ao GitHub; pelo menos um anúncio real com fotos reais; ensaio completo em www.sglk.site com uma segunda conta (locatário, outro e-mail e outro CPF); cuidado com a pausa automática do plano gratuito do Supabase (7 dias com pouca atividade); metadados de compartilhamento com `https://www.sglk.site`; canal do formulário de Contato; política de privacidade (LGPD); tamanho mínimo de senha 8 também no Supabase; imagens com texto errado. A proteção contra senhas vazadas (aviso do painel de segurança) só existe no plano Pro.
6. Produzir a versão do logo para fundo escuro, quando aprovada.
