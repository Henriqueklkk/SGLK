# imagens.md - Plano de Produção Visual do SGLK

Plano completo das imagens do site do SGLK: inventário, lista de cenas, direção de arte, guia de consistência, guia fotográfico, guia de interface, guia de geração por IA e guia de exportação. Nenhuma imagem foi gerada nesta etapa.

- **Versão:** 1.0, de 2026-09-21
- **Base:** `specs/design.md` (v1.1), `specs/site.md`, `meus - produtos/`, `referencias - site/` e `memoria.md`
- **Prioridade em caso de conflito:** 1. `specs/design.md` · 2. `specs/site.md` · 3. `meus - produtos/` · 4. `referencias - site/` · 5. `memoria.md`. Se algo não estiver definido, não inventar função; escolher a solução mais coerente com a identidade existente.
- **Total:** 37 imagens ilustrativas geradas por IA e 8 ativos vetoriais produzidos à mão (seção 11).

---

## PROMPT-BASE DE CONSISTÊNCIA

Use este bloco no início de todos os prompts. Os prompts das fichas (seção 12) já trazem o bloco completo, prontos para copiar e colar.

### BRAND
- SGLK — Sistema de Gerenciamento e Locação de Kitnets.
- Modern Brazilian web platform connecting people searching for compact housing with small property owners.
- Users search with filters (neighborhood, price, amenities), see clear listings with photos, price, neighborhood, size and availability ("Disponível" or "Alugado"), and contact the owner directly through WhatsApp.

### VISUAL IDENTITY
- Minimal, clean, modern, trustworthy and approachable.
- Premium digital-product aesthetic without looking luxurious.
- Generous negative space.
- Soft off-white and white backgrounds.
- Deep navy as the primary structural color.
- Muted sage green as the main accent.
- Light gray for secondary surfaces and borders.
- Green indicates available properties.
- Signature elements: large soft pale-sage circles, very thin arc lines and softly blurred tropical leaves at the edges.

### UI DIRECTION
- Clean responsive web interface.
- Floating interface without any device frame.
- Rounded cards (16 px radius) and panels (24 px radius); rectangular buttons with 12 px radius, not pill-shaped; pill-shaped status tags and filter chips.
- Subtle 1 px light-gray borders and very soft navy-tinted shadows.
- Simple rounded line icons.
- Clear visual hierarchy and minimal interface density.
- Geometric sans-serif typography similar to Plus Jakarta Sans, in sentence case.
- All interface text in Brazilian Portuguese, exactly as quoted in the prompt, and no other text.

### PHOTOGRAPHIC DIRECTION
- Realistic Brazilian compact apartments and kitnets in a warm tropical city.
- Bright but natural daylight.
- Clean, tidy interiors and plausible small spaces.
- Neutral materials: warm white walls, light beige porcelain floor tiles, light wood, white cabinets.
- Warm wood and subtle greenery.
- Eye-level camera, straight verticals, no ultra-wide distortion.
- No luxury penthouses and no oversized apartments.

### LIGHTING
- Soft natural daylight.
- Diffused shadows.
- Bright but not overexposed.
- Comfortable residential feeling.

### REALISM
- Photorealistic architectural photography when showing properties.
- High-end product visualization when showing the interface.
- UI elements crisp, intentional and professionally designed.

### COLOR PALETTE
Exact colors from `specs/design.md`:
- Deep navy `#0B2841`: logo, headings and text.
- Interface navy `#0C3E66`: primary buttons and selected chips.
- Muted sage green `#648B81`: accents and graphic details.
- Dark sage `#45695F`: "Disponível" tag, with white text.
- Slate gray `#636E7B`: "Alugado" tag, with white text.
- Light cool gray `#D7D8DC`: borders.
- Off-white `#FBFAF8`: backgrounds.
- Warm light gray `#F2F1EF`: secondary surfaces.
- White `#FFFFFF`: cards.
- WhatsApp button green `#15803D`, with white text.

### GENERAL CONSISTENCY RULE
"Follow the supplied SGLK references exactly. Preserve the same logo, visual identity, color palette, interface language, rounded geometry, typography style and overall product character."

### PROPERTY CONSISTENCY RULE
When property references are supplied: "Follow the supplied property references exactly. Preserve the same architecture, furniture layout, materials, colors, proportions and interior details."

### RESTRICTIONS
- Never add unsupported functionality.
- Do not show: in-platform payments; checkout; credit cards; rent payment dashboards; digital contracts; electronic signatures; credit scores; internal chat systems; video calls; financial analytics; banking interfaces; luxury real-estate brokerage features.
- No favorite or heart icons, no maps, no app-store badges, no verification seals.
- Do not change the SGLK logo. Do not invent another logo.
- Do not change the brand colors arbitrarily.
- Do not overcrowd the composition.
- Do not use excessive gradients.
- Do not use cartoon illustration.
- Do not generate generic corporate stock photography.
- Do not generate unrealistic luxury apartments.
- Do not add random decorative UI that has no function.
- No watermarks; no slogans or headlines outside the interface.

### Versão para colar

O mesmo conteúdo acima, em um bloco só:

```text
SGLK BASE PROMPT. BRAND: SGLK (Sistema de Gerenciamento e Locação de Kitnets), a modern Brazilian web platform connecting people searching for compact housing (kitnets, 20-25 m² studios) with small property owners. Users search with filters (neighborhood, price, amenities), see clear listings with photos, price, neighborhood, size and availability ("Disponível" or "Alugado"), and contact the owner directly through WhatsApp. VISUAL IDENTITY: minimal, clean, modern, trustworthy and approachable; premium digital-product aesthetic without looking luxurious; generous negative space; soft off-white and white backgrounds; deep navy as the primary structural color; muted sage green as the main accent; light gray for secondary surfaces and borders; green indicates available properties; signature elements: large soft pale-sage circles, very thin arc lines and softly blurred tropical leaves at the edges. UI DIRECTION: clean responsive web interface floating without any device frame; rounded cards (16 px radius) and panels (24 px radius); rectangular buttons with 12 px radius, not pill-shaped; pill-shaped status tags and filter chips; subtle 1 px light-gray borders; very soft navy-tinted shadows; simple rounded line icons; clear visual hierarchy; minimal interface density; geometric sans-serif typography similar to Plus Jakarta Sans, in sentence case; all interface text in Brazilian Portuguese exactly as quoted in this prompt, and no other text. PHOTOGRAPHIC DIRECTION: realistic Brazilian compact apartments and kitnets in a warm tropical city; plausible small spaces; clean, tidy interiors; neutral materials (warm white walls, light beige porcelain floor tiles, light wood, white cabinets); warm wood and subtle greenery; eye-level camera, straight verticals, no ultra-wide distortion; no luxury penthouses or oversized apartments. LIGHTING: soft natural daylight, diffused shadows, bright but not overexposed, comfortable residential feeling. REALISM: photorealistic architectural photography when showing properties; high-end product visualization when showing the interface; UI elements crisp, intentional and professionally designed. COLOR PALETTE: deep navy #0B2841 (logo, headings, text), interface navy #0C3E66 (primary buttons, selected chips), muted sage green #648B81 (accents), dark sage #45695F ("Disponível" tag with white text), slate gray #636E7B ("Alugado" tag with white text), light cool gray #D7D8DC (borders), off-white #FBFAF8 (backgrounds), warm light gray #F2F1EF (secondary surfaces), white #FFFFFF (cards), WhatsApp button green #15803D with white text. GENERAL CONSISTENCY RULE: Follow the supplied SGLK references exactly. Preserve the same logo, visual identity, color palette, interface language, rounded geometry, typography style and overall product character. PROPERTY CONSISTENCY RULE (when property references are supplied): Follow the supplied property references exactly. Preserve the same architecture, furniture layout, materials, colors, proportions and interior details. RESTRICTIONS: never add unsupported functionality; do not show in-platform payments, checkout, credit cards, rent payment dashboards, digital contracts, electronic signatures, credit scores, internal chat systems, video calls, financial analytics, banking interfaces or luxury real-estate brokerage features; no favorite or heart icons, no maps, no app-store badges, no verification seals; do not change the SGLK logo and do not invent another logo; do not change the brand colors; do not overcrowd the composition; no excessive gradients; no cartoon illustration; no generic corporate stock photography; no unrealistic luxury apartments; no random decorative UI without function; no watermarks; no slogans or headlines outside the interface.
```

---

## 1. Como usar este arquivo

1. Leia as decisões (seção 2) e o prompt-base (acima).
2. Separe as referências da seção 3 e siga a ordem de produção (seção 9).
3. Para cada imagem, copie o prompt da ficha (seção 12) e anexe as referências indicadas.
4. Confira a imagem com a lista de aprovação (seção 10) antes de exportar.
5. Exporte conforme a seção 8 e salve nas pastas indicadas.

## 2. Decisões que orientam o plano

- **Identidade:** azul-marinho, verde-sálvia, cinza-claro e off-white, do quadro `sglk-identidade-visual.png` (decisão de 2026-09-21). Tons exatos no `specs/design.md`.
- **Imagens por IA:** só como ilustração da landing. Anúncios publicados no catálogo usam apenas fotos reais enviadas pelos locadores.
- **Kitnets de demonstração:** as 3 kitnets dos mockups são ilustrativas e aparecem sempre com os mesmos dados (seção 6). Onde elas aparecem, o site mostra o aviso "Imagens ilustrativas".
- **Contato:** sempre por um botão que leva ao WhatsApp, com mensagem pronta. Nunca chat interno.
- **Fora das imagens:** favoritos, mapa, pagamentos, contratos, crédito, videochamada, chat interno e selos de verificação.
- **Logo:** nunca gerado por IA. Nas telas, ele segue a referência e é conferido; se sair diferente, é trocado pelo arquivo oficial na edição.
- **Texto nas imagens:** só os textos de interface definidos em cada prompt. Títulos, frases e botões do site ficam no HTML, sobre as áreas livres previstas.
- **Botões e selos:** texto branco só sobre `#45695F`, `#636E7B`, `#15803D` e os azuis-marinhos. Os verdes e cinzas claros dos mockups reprovam no contraste.
- **Menu nas telas:** "Imóveis", "Como funciona", "FAQ", "Contato" e o botão "Anunciar minha kitnet", como no `specs/design.md`. Sem "Sobre", "Entrar" ou "Cadastrar".

## 3. Referências disponíveis

| Arquivo | O que é | Usar para | Anexar à ferramenta |
|---|---|---|---|
| `meus - produtos/sglk-identidade-visual.png` | Quadro da identidade | Logo, símbolo, paleta e estilo dos ícones | Sim, em todas as imagens com interface |
| `meus - produtos/sglk-hero-desktop.png` | Composição de topo | Fachada, círculo sálvia, interface flutuante e atmosfera | Sim: 01, 13 e 17 |
| `meus - produtos/sglk-busca-kitnets-desktop.png` | Tela de busca desktop | Cabeçalho, busca, filtros e cards | Sim: 02, 03, 06, 07, 10, 12 e 14 |
| `meus - produtos/sglk-mobile-busca.png` | Busca no celular | Tela vertical, chips e cards verticais | Sim: versões de celular, 04, 08, 09 e 14 |
| `meus - produtos/sglk-lifestyle-kitnet-busca.png` | Interior com a lista flutuando | Kitnet 04 (estilo de vida) | Sim: 11, 13 e 15-jovem |
| `meus - produtos/ref-kitnet-01-mockup.png` a `ref-kitnet-03-mockup.png` | Recortes das fotos dos cards (a produzir, seção 9) | Aparência das kitnets 01 a 03 | Sim: série 05 |
| Imagens aprovadas da série 05 | Fotos das kitnets de demonstração | Consistência das kitnets nas telas | Sim, conforme cada ficha |
| `referencias - site/*` | Prints de outros sites | Só leitura de atmosfera | Não anexar |

## 4. Análise visual

1. **Imagens existentes do SGLK:** 5 arquivos em `meus - produtos/`, de 1122 a 1672px de largura. São composições de apresentação com textos, logo e frases embutidos. Servem de referência de estilo; nenhuma vai direto para o site.
2. **Artes comerciais:** `sglk-hero-desktop.png`, `sglk-busca-kitnets-desktop.png`, `sglk-mobile-busca.png` e `sglk-lifestyle-kitnet-busca.png`. Definem a atmosfera: fundo claro, interface flutuante levemente inclinada, círculo sálvia, arcos finos, folhagem desfocada nas bordas e fachada branca com árvores.
3. **Telas e mockups:** existem busca desktop (menu, busca, filtros e cards), busca no celular e lista sobre um interior. Não existem painel do locador, cadastro, detalhes do imóvel nem fluxo de contato: essas telas são criadas neste plano.
4. **Identidade:** azul-marinho `#0B2841`, verde-sálvia `#648B81`, cinza-claro `#D7D8DC` e off-white `#FBFAF8`; sans geométrica; ícones de linha; muito respiro.
5. **Logo e símbolo:** casa hexagonal em azul-marinho, porta aberta em sálvia e ponta de balão de conversa. Versões vertical (com o nome completo), horizontal ("Locação de kitnets") e símbolo isolado. Só existem dentro do quadro de identidade, sem vetor e sem versão para fundo escuro.
6. **Fotos de kitnets:** só as miniaturas das 3 kitnets dos cards e o interior do arquivo de estilo de vida. Não há fotos reais. O plano cria um banco ilustrativo coerente com essas miniaturas (seção 6).
7. **Sites de referência:** Airbnb (uma ideia por seção, FAQ e confiança), Zap Imóveis (busca no topo e cards claros) e Temporada Livre (filtros e FAQ direto). Servem só de atmosfera e não são anexados às ferramentas de geração.
8. **Estrutura planejada:** as 5 páginas do `specs/site.md`. A divisão da Home em seções (seção 5) é uma proposta deste plano e deve ser confirmada no plano de implementação.
9. **Função de cada seção:** descrita no mapa da seção 5.
10. **Fluxo do locatário:** busca por bairro, preço e comodidades → compara cards (foto, preço, bairro, área e status) → fala com o locador pelo WhatsApp, com mensagem pronta.
11. **Fluxo do locador:** cadastra o imóvel (fotos, título, descrição, bairro, preço, comodidades e status) → atualiza a disponibilidade ("Disponível" ou "Alugado") → gerencia os anúncios e recebe contatos pelo WhatsApp.
12. **Experiência desktop:** seções em duas colunas, cards em 3 colunas, composições horizontais (16:9 e 3:2) e topo com área livre à esquerda.
13. **Experiência mobile:** uma coluna, imagem depois do texto, composições verticais (4:5) e interface legível em telas de 360px. Imagens com interface ganham versão própria para celular.
14. **Componentes recorrentes:** card de kitnet, selo de status, chips de filtro, botão do WhatsApp, painel de busca e cabeçalho. São definidos uma vez na seção 7 e repetidos iguais em todas as imagens.
15. **Imagens necessárias:** 37 ilustrativas e 8 ativos vetoriais (seção 11).
16. **Reuso:** várias imagens da Home voltam no Como Funciona e no Contato (seção 13).
17. **Versões desktop e celular:** topo, busca, painel, cadastro, estilo de vida, chamada final e telas do celular têm composições separadas. As demais funcionam nas duas telas.

---

## 5. Mapa do site e das imagens

Versão desktop a partir de 1024px; versão de celular abaixo disso. No tablet (768px a 1023px), as imagens verticais ficam centralizadas com no máximo 560px de largura.

### Home

| Ordem | Seção | Função | Desktop | Celular e tablet |
|---|---|---|---|---|
| 1 | Topo | Apresentar o SGLK e começar a busca | `01-hero-sglk-desktop`, como fundo, com área livre à esquerda | `01-hero-sglk-mobile`, depois do painel de busca |
| 2 | Diferenciais | Busca com filtros, segurança contra golpes e contato direto | Ícones SVG | Ícones SVG |
| 3 | Kitnets em destaque | Mostrar o produto com cards em HTML e o aviso de demonstração | Capas `05-kitnet-01-quarto`, `05-kitnet-02-cozinha` e `05-kitnet-03-quarto` | As mesmas capas, em 400px |
| 4 | Busca rápida | Explicar os filtros | `02-busca-kitnets-desktop` | `02-busca-kitnets-mobile` |
| 5 | No celular | Mostrar que o site funciona no navegador do celular | `14-mobile-telas-desktop` | `14-mobile-detalhes` |
| 6 | Novos começos | Emoção e público (estudantes e trabalhadores) | `11-lifestyle-novo-comeco-desktop` com `15-jovem-estudando` | `11-lifestyle-novo-comeco-mobile` |
| 7 | Como funciona (resumo) | Os 3 passos do locatário | `12-como-funciona` | `12-como-funciona` |
| 8 | Segurança e confiança | Informação clara em cada anúncio | `10-seguranca-confianca` | `10-seguranca-confianca` |
| 9 | Para quem anuncia | Apresentar a gestão ao locador | `06-painel-locador-desktop` | `06-painel-locador-mobile` |
| 10 | Chamada final | Levar à busca | `13-cta-final-desktop` | `13-cta-final-mobile` |
| 11 | Rodapé | Marca e aviso de imagens ilustrativas | `sglk-logo-negativo.svg` | O mesmo |

### Imóveis

| Seção | Função | Imagens |
|---|---|---|
| Busca e filtros | Filtrar por bairro, preço e comodidades | Nenhuma (HTML) |
| Resultados | Cards de kitnet | Capas da série 05 (demonstração) ou fotos reais (anúncios publicados) |
| Detalhes do imóvel | Galeria e informações do anúncio | As 4 fotos de cada kitnet da série 05 |
| Nenhum resultado | Orientar a mudar os filtros | `sglk-estado-vazio.svg` |

### Como Funciona

Os nomes dos passos são provisórios; os textos finais ainda serão definidos.

| Aba e passo | Desktop | Celular |
|---|---|---|
| Quem procura: abertura | `15-estudante-celular` | `15-estudante-celular` |
| Passo 1: Busque | `02-busca-kitnets-desktop` (reuso) | `14-mobile-filtros` |
| Passo 2: Compare | `03-catalogo-kitnets-desktop` | `04-kitnet-destaque-01` |
| Passo 3: Entre em contato | `09-contato-whatsapp` | `09-contato-whatsapp` |
| Quem anuncia: abertura | `16-locador-gestao` | `16-locador-gestao` |
| Passo 1: Cadastre | `07-cadastro-imovel-desktop` | `07-cadastro-imovel-mobile` |
| Passo 2: Atualize o status | `08-status-disponibilidade` | `08-status-disponibilidade` |
| Passo 3: Gerencie e receba contatos | `06-painel-locador-desktop` (reuso) | `06-painel-locador-mobile` (reuso) |

### FAQ

Sem imagens. A página é só texto, e uma imagem sem função pesaria no carregamento.

### Contato

Desktop: `09-contato-whatsapp` (reuso) na coluna de informações. Celular: sem imagem, para o formulário vir primeiro.

### Compartilhamento

`17-compartilhamento-og` nas tags de compartilhamento (Open Graph) de todas as páginas, usado quando o link é enviado pelo WhatsApp ou redes sociais.

---

## 6. Banco de kitnets ilustrativas

Dados fixos das kitnets de demonstração. As comodidades foram definidas neste plano, também como dado ilustrativo.

| Kitnet | Nome no card | Bairro | Preço | Área | Quartos | Banheiros | Status | Comodidades | Foto de capa |
|---|---|---|---|---|---|---|---|---|---|
| 01 | Kitnet mobiliada | Centro | R$ 1.200/mês | 25 m² | 1 | 1 | Disponível | Mobiliada, Wi-Fi, Ar-condicionado | `05-kitnet-01-quarto` |
| 02 | Kitnet moderna | Vila Nova | R$ 950/mês | 20 m² | 1 | 1 | Disponível | Mobiliada, Cozinha equipada, Wi-Fi | `05-kitnet-02-cozinha` |
| 03 | Kitnet aconchegante | Jardim Paulista | R$ 1.100/mês | 22 m² | 1 | 1 | Alugado | Mobiliada, Wi-Fi, Área de estudo | `05-kitnet-03-quarto` |
| 04 | Sem anúncio | Nenhum | Nenhum | Nenhuma | Nenhum | Nenhum | Nenhum | Nenhuma | Só estilo de vida |

As descrições abaixo, em inglês, entram nos prompts. Elas seguem as miniaturas dos mockups e não podem mudar entre imagens.

**Kitnet 01 (Kitnet mobiliada)**
> Kitnet 01: furnished studio of 25 m² in a city-center building; one rectangular room plus a small bathroom. Warm white walls, light beige 60 x 60 cm porcelain floor tiles, white ceiling with a round flush LED light. Sleeping side: double bed against the back wall with a low dark-gray upholstered headboard, white duvet and a folded mid-gray throw at the foot; small black bedside table with a white ceramic lamp on the left; tall fiddle-leaf fig in a light terracotta pot next to it; two small black-framed botanical prints above the bed; window on the right wall with a white sheer curtain and a white split air conditioner above it; white two-door wardrobe near the entrance. Kitchen side, on the opposite wall: straight 1.6 m kitchenette with white cabinets, light-gray countertop, small stainless-steel sink, black two-burner electric cooktop, compact white fridge and one open light-wood shelf with mugs and a small plant. Bathroom: white 30 x 60 cm wall tiles, beige floor tiles, white sink on a small light-wood cabinet, round mirror with a thin black frame, clear glass shower screen, chrome fixtures. Building: small two-story residential building on a city-center street, light-gray and white painted walls, external concrete staircase with a black metal handrail, white doors along an open upper corridor, dark-gray metal gate at street level.

**Kitnet 02 (Kitnet moderna)**
> Kitnet 02: modern studio of 20 m²; one compact room with a kitchenette wall and a sleeping corner, plus a small bathroom. Warm white walls, light beige porcelain floor. Kitchenette: tall white freestanding fridge on the left, matte charcoal lower and upper cabinets, white countertop, stainless-steel sink under a black-framed window with two small potted herbs, built-in stainless oven with a four-burner cooktop, small square light-wood dining table with two light-wood chairs and a potted plant. Sleeping corner: double bed with light-gray bedding and a charcoal throw, black metal clothes rail with a few plain hangers and no clothes, small black side table, window with a white roller blind. Bathroom: light-gray large-format porcelain tiles, black-framed glass shower, floating white sink with a matte black faucet, simple rectangular mirror with a thin black frame. Building: modern three-story residential building with white and light-gray render, black window frames, small balconies with thin black metal railings, tropical trees in front, low front wall with a black metal gate.

**Kitnet 03 (Kitnet aconchegante)**
> Kitnet 03: cozy studio of 22 m²; one room with a sleeping area, a study corner and a kitchenette, plus a small bathroom. Warm white walls, light beige porcelain floor, round jute rug. Sleeping area: double bed with white linen and a beige knitted throw; light-wood open shelving unit on the right wall with books, woven baskets and small plants; tall potted plant on the floor at left; window with a white sheer curtain. Study corner: small light-wood desk with a simple chair near the window. Kitchenette: light-wood lower cabinets, white countertop, white subway-tile backsplash, small stainless-steel sink, two-burner cooktop, compact white fridge, a wall shelf with glass jars. Bathroom: cream 30 x 60 cm tiles, light-wood-look vanity with a white basin, round mirror with a light-wood frame, clear glass shower screen, small plant, beige towel. Building: single-story row of four kitnets in a small gated lot, cream painted walls, light-wood front doors, small windows with white frames, covered walkway with a ceramic tile roof, concrete path with grass and tropical plants, low wall with a white gate.

**Kitnet 04 (estilo de vida, sem anúncio)**
> Kitnet 04: bright studio used only for lifestyle scenes, with no listing data. Double bed with a light-wood headboard, beige linen bedding, sage-green pillows and a sage-green knitted throw; floor-to-ceiling glass balcony door with a black frame and a white sheer curtain; kitchenette with sage-green lower cabinets, white countertop, black faucet, open light-wood shelves with plants and jars, compact fridge; round light-wood table with a sage-green upholstered chair; vertical light-wood slat panel on one wall; framed abstract line-art posters without any text; several green plants; light porcelain floor; jute rug.

---

## 7. Interface canônica

### 7.1 Textos exatos

| Elemento | Texto |
|---|---|
| Menu | "Imóveis", "Como funciona", "FAQ", "Contato" |
| Botão do cabeçalho | "Anunciar minha kitnet" |
| Campo de busca | "Busque por bairro..." |
| Botão de busca (catálogo) | "Buscar" |
| Filtros | "Bairro" ("Todos os bairros"), "Faixa de preço" ("Até R$ 1.500"), "Comodidades" ("Mobiliada") |
| Resultado | "3 kitnets encontradas" |
| Selos | "Disponível", "Alugado" |
| Ações do card | "Falar no WhatsApp", "Ver detalhes" |
| Mensagem pronta | "Olá! Vi a Kitnet mobiliada no Centro pelo SGLK e gostaria de mais informações." |
| Painel do locador | "Meus imóveis", "Imóveis cadastrados", "Disponíveis", "Alugados", "Cadastrar imóvel", "Editar" |
| Cadastro | "Cadastrar imóvel", "Fotos do imóvel", "Adicionar fotos", "Título do anúncio", "Descrição", "Bairro", "Preço mensal", "Área", "Quartos", "Banheiros", "Comodidades", "Status", "Salvar anúncio" |
| Filtros no celular | "Filtros", "Limpar", "Aplicar filtros" |

### 7.2 Descrições para os prompts

Trechos em inglês que se repetem nas fichas. Não altere entre imagens.

- **Header:** SGLK horizontal logo on the left exactly as in the supplied identity reference (navy hexagonal house outline with a sage-green open door and a speech-bubble tail, bold navy "SGLK" wordmark); navigation links "Imóveis", "Como funciona", "FAQ" and "Contato" in navy; on the right, an outlined navy button "Anunciar minha kitnet".
- **Listing card:** white card, 16 px radius, 1 px light-gray border, very soft shadow; photo inset 8 px from the card edges with 12 px radius; pill status tag on the photo's top-left corner; below the photo, in this order: listing name in semibold navy, a location-pin icon with the neighborhood in slate gray, the monthly price in bold navy, a row of three line icons with values (bed, shower, area), and the action button.
- **Card 01:** tag "Disponível" (dark sage #45695F, white text); name "Kitnet mobiliada"; neighborhood "Centro"; price "R$ 1.200/mês"; icons "1", "1", "25 m²"; green button "Falar no WhatsApp" (#15803D, white text, white WhatsApp glyph); photo: the Kitnet 01 bedroom.
- **Card 02:** tag "Disponível"; name "Kitnet moderna"; neighborhood "Vila Nova"; price "R$ 950/mês"; icons "1", "1", "20 m²"; green button "Falar no WhatsApp"; photo: the Kitnet 02 kitchenette.
- **Card 03:** tag "Alugado" (slate gray #636E7B, white text); name "Kitnet aconchegante"; neighborhood "Jardim Paulista"; price "R$ 1.100/mês"; icons "1", "1", "22 m²"; button "Ver detalhes" (pale blue-gray #EEF2F6 background, navy text); photo: the Kitnet 03 bedroom.
- **Filter chips:** unselected chips are white pills with a gray outline and navy text; selected chips are solid interface navy (#0C3E66) with white text and a small check mark.

---

## 8. Regras gerais de produção

### 8.1 Proporções e resoluções

| Tipo | Proporção | Master (geração) | Exportação web | Peso máximo |
|---|---|---|---|---|
| Topo desktop | 16:9 | 2400 × 1350 px | 1920 × 1080 e 1440 × 810 | 250 KB |
| Topo celular | 4:5 | 1440 × 1800 px | 1080 × 1350 e 720 × 900 | 200 KB |
| Seção horizontal | 3:2 | 2400 × 1600 px | 1600 × 1067 e 800 × 533 | 250 KB |
| Seção panorâmica | 16:9 | 2400 × 1350 px | 1600 × 900 e 1024 × 576 | 250 KB |
| Seção vertical | 4:5 | 1440 × 1800 px | 1080 × 1350 e 720 × 900 | 200 KB |
| Editorial | 4:3 | 2000 × 1500 px | 1600 × 1200 e 800 × 600 | 250 KB |
| Quadrada | 1:1 | 1600 × 1600 px | 1200 × 1200 e 800 × 800 | 200 KB |
| Fotos das kitnets | 4:3 | 1600 × 1200 px | 1200 × 900 (galeria), 800 × 600 e 400 × 300 (cards) | 200 KB na galeria, 120 KB nos cards |
| Chamada final desktop | 21:9 | 2560 × 1097 px | 1920 × 823 e 1440 × 617 | 250 KB |
| Compartilhamento | 1,91:1 | 2400 × 1260 px | 1200 × 630 | Sem limite do site (JPG) |

Se a ferramenta gerar num tamanho menor que o master, ampliar com um ampliador de qualidade antes de exportar. Nunca exportar maior que o master.

### 8.2 Exportação

- Formato principal WebP; JPG comprimido como reserva, se necessário (`specs/site.md`).
- Perfil de cor sRGB, sem metadados.
- Nome de exportação: `NN-nome-LARGURA.webp`, como `01-hero-sglk-desktop-1920.webp`.
- Todas as imagens abaixo da primeira tela carregam sob demanda (`loading="lazy"`). Só as imagens do topo carregam logo.
- O texto alternativo de cada imagem está na ficha.

### 8.3 Área livre para texto

- **Esquerda livre:** usada no topo desktop e na chamada final desktop. A área fica lisa, com pouco detalhe, num tom próximo de `#FBFAF8`, para o texto do site ficar por cima.
- **Topo livre:** usada na chamada final do celular.
- **Sem área livre:** as demais imagens ficam ao lado ou abaixo do texto, nunca por baixo dele.
- Nunca escurecer a imagem para o texto aparecer. Na edição, uniformizar a área livre e conferir o contraste do texto (mínimo 4,5:1).
- No topo desktop, a área livre deve se fundir sem emenda com o fundo `--off-white` do site: na edição, aplicar uma transição suave de 150 a 200px na borda.

### 8.4 Aviso de imagens ilustrativas

- Toda imagem que mostra as kitnets de demonstração (preço, bairro ou foto de kitnet) leva, logo abaixo ou no início da seção, o aviso "Imagens ilustrativas" em texto pequeno `--texto-suave`.
- Os cards de demonstração em HTML ("Kitnets em destaque" e página Imóveis) levam o aviso "Anúncios ilustrativos, apenas para demonstração." no início da seção.
- O rodapé repete o aviso para todo o site.

### 8.5 Nomenclatura e pastas

| O quê | Onde | Nome |
|---|---|---|
| Master gerado | `imagens - site/originais/` | Nome da ficha, como `01-hero-sglk-desktop.png` |
| Exportação web | `imagens - site/` | `NN-nome-LARGURA.webp` |
| Recortes de referência das kitnets | `meus - produtos/` | `ref-kitnet-01-mockup.png` a `ref-kitnet-03-mockup.png` |
| Imagens aprovadas que viram referência | `meus - produtos/` (cópia) | Tabela abaixo |

Cópias para `meus - produtos/` depois da aprovação, para servir de referência às próximas gerações:

| Imagem aprovada | Cópia em `meus - produtos/` |
|---|---|
| `05-kitnet-01-quarto.png` (e as demais da série 05) | `kitnet-01-quarto.png` (mesmo padrão para todas) |
| `04-kitnet-destaque-01.png` | `sglk-card-imovel.png` |
| `02-busca-kitnets-desktop.png` | `sglk-busca-kitnets.png` |
| `06-painel-locador-desktop.png` | `sglk-painel-locador.png` |
| `07-cadastro-imovel-desktop.png` | `sglk-cadastro-imovel.png` |
| `09-contato-whatsapp.png` | `sglk-contato-locador.png` |
| `14-mobile-detalhes.png` | `sglk-mobile-detalhes.png` |

### 8.6 Ferramentas

- Os prompts funcionam melhor em ferramentas que aceitam imagens de referência. Anexe sempre as referências da ficha.
- Numa ferramenta sem referências, o prompt continua completo, mas a consistência cai: a aprovação deve ser mais rigorosa.
- Gere de 2 a 4 variações por ficha e escolha a mais fiel às referências, não a mais bonita.

---

## 9. Ordem de produção

A ordem garante que cada imagem tenha as referências de que precisa.

1. **Marca (à mão):** vetorizar o logo a partir de `sglk-identidade-visual.png` e produzir `sglk-logo-principal.svg`, `sglk-logo-horizontal.svg`, `sglk-simbolo.svg`, `sglk-logo-negativo.svg` e os favicons.
2. **Recortes de referência:** recortar de `sglk-busca-kitnets-desktop.png` as fotos dos 3 cards e salvar como `ref-kitnet-01-mockup.png`, `ref-kitnet-02-mockup.png` e `ref-kitnet-03-mockup.png`.
3. **Capas das kitnets:** gerar `05-kitnet-01-quarto`, `05-kitnet-02-cozinha` e `05-kitnet-03-quarto` a partir dos recortes. Aprovar antes de seguir.
4. **Demais fotos das kitnets:** gerar cozinha, banheiro, quarto e fachada de cada kitnet, sempre com a capa aprovada anexada.
5. **Card isolado:** gerar `04-kitnet-destaque-01`. Ele vira a referência de card para as telas.
6. **Telas:** `02`, `03`, `14`, `09`, `06`, `07`, `08`, `12` e `10`, nessa ordem.
7. **Topo:** `01-hero-sglk-desktop` e `01-hero-sglk-mobile`, com a fachada da kitnet 02 e os cards aprovados.
8. **Estilo de vida e pessoas:** `11`, `15-jovem-estudando`, `15-estudante-celular` e `16-locador-gestao`.
9. **Chamada final:** `13-cta-final-desktop` e `13-cta-final-mobile`.
10. **Compartilhamento:** `17-compartilhamento-og`, com o logo oficial aplicado na edição.
11. **Revisão final:** conferir todas as imagens juntas, lado a lado, com a lista da seção 10.

## 10. Lista de aprovação

Cada imagem só é aprovada se passar em todos os itens:

- [ ] Logo idêntico ao oficial (ou ausente, quando a ficha pede).
- [ ] Cores dentro da paleta: azul-marinho, verde-sálvia, cinzas e off-white, sem cor nova.
- [ ] Textos de interface exatamente iguais aos da seção 7.1, com acentos corretos.
- [ ] Dados das kitnets iguais aos da seção 6 (nome, bairro, preço, área e status).
- [ ] Selo "Disponível" em sálvia escuro e "Alugado" em cinza-azulado, com texto branco.
- [ ] Botão do WhatsApp em `#15803D` com texto branco; sem reprodução da tela do aplicativo WhatsApp.
- [ ] Sem coração, mapa, pagamento, contrato, crédito, chat interno, selo de verificação ou selo de loja de aplicativos.
- [ ] Mesma kitnet com a mesma arquitetura, móveis, cores e materiais em todas as imagens.
- [ ] Espaço compacto e plausível, sem ar de luxo.
- [ ] Área livre limpa e no lugar certo, quando a ficha pede.
- [ ] Sem marca-d'água, texto aleatório, pôster com letras ou placa legível.
- [ ] Pessoas naturais, sem pose publicitária e sem mãos ou rostos deformados.
- [ ] Tamanho e peso de exportação dentro da seção 8.1.

---

## 11. Inventário

### 11.1 Imagens ilustrativas (geradas por IA)

| Nº | Arquivo | Categoria | Uso principal | Dispositivo | Proporção |
|---|---|---|---|---|---|
| 01 | `01-hero-sglk-desktop.png` | Topo | Home > Topo | Desktop | 16:9 |
| 01 | `01-hero-sglk-mobile.png` | Topo | Home > Topo | Celular | 4:5 |
| 02 | `02-busca-kitnets-desktop.png` | Busca | Home > Busca rápida; Como Funciona > Passo 1 | Desktop | 3:2 |
| 02 | `02-busca-kitnets-mobile.png` | Busca | Home > Busca rápida | Celular | 4:5 |
| 03 | `03-catalogo-kitnets-desktop.png` | Catálogo | Como Funciona > Passo 2 | Desktop | 16:9 |
| 04 | `04-kitnet-destaque-01.png` | Card em destaque | Como Funciona > Passo 2; compartilhamento | Celular | 4:5 |
| 05 | `05-kitnet-01-quarto.png` | Foto de kitnet | Capa da kitnet 01; galeria | Ambos | 4:3 |
| 05 | `05-kitnet-01-cozinha.png` | Foto de kitnet | Galeria da kitnet 01 | Ambos | 4:3 |
| 05 | `05-kitnet-01-banheiro.png` | Foto de kitnet | Galeria da kitnet 01 | Ambos | 4:3 |
| 05 | `05-kitnet-01-fachada.png` | Foto de kitnet | Galeria da kitnet 01; referência da 10 | Ambos | 4:3 |
| 05 | `05-kitnet-02-cozinha.png` | Foto de kitnet | Capa da kitnet 02; galeria | Ambos | 4:3 |
| 05 | `05-kitnet-02-quarto.png` | Foto de kitnet | Galeria da kitnet 02 | Ambos | 4:3 |
| 05 | `05-kitnet-02-banheiro.png` | Foto de kitnet | Galeria da kitnet 02 | Ambos | 4:3 |
| 05 | `05-kitnet-02-fachada.png` | Foto de kitnet | Galeria da kitnet 02; referência do topo | Ambos | 4:3 |
| 05 | `05-kitnet-03-quarto.png` | Foto de kitnet | Capa da kitnet 03; galeria | Ambos | 4:3 |
| 05 | `05-kitnet-03-cozinha.png` | Foto de kitnet | Galeria da kitnet 03 | Ambos | 4:3 |
| 05 | `05-kitnet-03-banheiro.png` | Foto de kitnet | Galeria da kitnet 03 | Ambos | 4:3 |
| 05 | `05-kitnet-03-fachada.png` | Foto de kitnet | Galeria da kitnet 03; referência da 16 | Ambos | 4:3 |
| 06 | `06-painel-locador-desktop.png` | Painel do locador | Home > Para quem anuncia; Como Funciona > Passo 3 | Desktop | 3:2 |
| 06 | `06-painel-locador-mobile.png` | Painel do locador | As mesmas seções | Celular | 4:5 |
| 07 | `07-cadastro-imovel-desktop.png` | Cadastro | Como Funciona > Passo 1 (locador) | Desktop | 3:2 |
| 07 | `07-cadastro-imovel-mobile.png` | Cadastro | Como Funciona > Passo 1 (locador) | Celular | 4:5 |
| 08 | `08-status-disponibilidade.png` | Disponibilidade | Como Funciona > Passo 2 (locador) | Ambos | 1:1 |
| 09 | `09-contato-whatsapp.png` | Contato | Como Funciona > Passo 3; Contato | Ambos | 4:5 |
| 10 | `10-seguranca-confianca.png` | Segurança e confiança | Home > Segurança e confiança | Ambos | 4:3 |
| 11 | `11-lifestyle-novo-comeco-desktop.png` | Estilo de vida | Home > Novos começos | Desktop | 3:2 |
| 11 | `11-lifestyle-novo-comeco-mobile.png` | Estilo de vida | Home > Novos começos | Celular | 4:5 |
| 12 | `12-como-funciona.png` | Como funciona | Home > Como funciona | Ambos | 1:1 |
| 13 | `13-cta-final-desktop.png` | Chamada final | Home > Chamada final | Desktop | 21:9 |
| 13 | `13-cta-final-mobile.png` | Chamada final | Home > Chamada final | Celular | 4:5 |
| 14 | `14-mobile-telas-desktop.png` | Experiência mobile | Home > No celular | Desktop | 16:9 |
| 14 | `14-mobile-filtros.png` | Experiência mobile | Como Funciona > Passo 1 | Celular | 4:5 |
| 14 | `14-mobile-detalhes.png` | Experiência mobile | Home > No celular | Celular | 4:5 |
| 15 | `15-estudante-celular.png` | Pessoas | Como Funciona > Quem procura | Ambos | 4:3 |
| 15 | `15-jovem-estudando.png` | Pessoas | Home > Novos começos | Desktop | 4:5 |
| 16 | `16-locador-gestao.png` | Locador | Como Funciona > Quem anuncia | Ambos | 4:3 |
| 17 | `17-compartilhamento-og.png` | Compartilhamento | Tags Open Graph | Nenhum (link) | 1,91:1 |

### 11.2 Ativos vetoriais (não gerar por IA)

| Arquivo | Categoria | Uso principal |
|---|---|---|
| `sglk-logo-principal.svg` | Marca | Compartilhamento e materiais de apresentação |
| `sglk-logo-horizontal.svg` | Marca | Cabeçalho de todas as páginas |
| `sglk-simbolo.svg` | Marca | Favicon e usos pequenos |
| `sglk-logo-negativo.svg` | Marca | Rodapé em `--marinho-900` |
| `favicon-32.png`, `apple-touch-icon-180.png`, `icon-192.png`, `icon-512.png` | Marca | Aba do navegador e atalho no celular |
| `sglk-icones/` (SVG) | Benefícios e interface | Diferenciais, cards, filtros e passos |
| `sglk-elementos-graficos.svg` | Fundos e apoio | Círculos, arcos e contorno do símbolo |
| `sglk-estado-vazio.svg` | Interface | Imóveis > Nenhum resultado |

---

## 12. Fichas das imagens

Cada ficha traz os campos de produção e o prompt completo, já com o prompt-base no início. Anexe sempre as referências indicadas.

### 12.A Ativos de marca e vetores (não gerar por IA)

Estes itens não passam por geração de imagem: o logo não pode ser redesenhado e os ícones precisam ser vetores leves. Campos de fotografia, iluminação, área livre e prompt não se aplicam.

| Arquivo | Uso | Objetivo e mensagem | Como produzir | Formatos | Restrições |
|---|---|---|---|---|---|
| `sglk-logo-principal.svg` | Compartilhamento (17) e apresentações | Assinatura completa: símbolo, "SGLK" e "Sistema de Gerenciamento e Locação de Kitnets" | Vetorizar a versão vertical do quadro `sglk-identidade-visual.png` | SVG e PNG transparente de 1200px | Mesmas cores (`#0B2841` e `#648B81`) e proporções do quadro |
| `sglk-logo-horizontal.svg` | Cabeçalho de todas as páginas | Marca legível num cabeçalho de 64 a 72px | Vetorizar a versão horizontal ("Locação de kitnets") | SVG | Altura mínima de 32px na tela |
| `sglk-simbolo.svg` | Favicon e usos pequenos | Reconhecimento em tamanho mínimo | Vetorizar o ícone isolado | SVG | Sem texto |
| `sglk-logo-negativo.svg` | Rodapé em `--marinho-900` | Marca legível sobre fundo escuro | A partir do vetor: contorno e letras em branco, porta em `#9DBAB1` | SVG | Aprovar antes de usar, porque não existe no quadro de identidade |
| `favicon-32.png`, `apple-touch-icon-180.png`, `icon-192.png`, `icon-512.png` | Aba do navegador e atalho no celular | Identificar o site | Exportar do `sglk-simbolo.svg`; fundo `#FBFAF8` nos tamanhos de 180px ou mais | PNG | Sem texto |
| `sglk-icones/` | Diferenciais, cards, filtros, passos e interface | Ícones de linha iguais aos dos mockups | Conjunto aberto escolhido na implementação. Lista mínima: busca, filtro, marcador, cama, chuveiro, área, escudo com check, raio, gráfico de barras simples, casa, porta, cadeado, check, seta, fechar, menu e o ícone oficial do WhatsApp | SVG, traço de 1,5 a 2px, pontas arredondadas | Um só conjunto; cores `--marinho-700` ou `--salvia-700` |
| `sglk-elementos-graficos.svg` | Fundos de seção | Círculos em `--salvia-100` ou `--marinho-50`, arcos de 1px em `--salvia-200` e contorno do símbolo como linha fina | Desenhar em vetor ou em CSS | SVG ou CSS | No máximo um por seção, nunca atrás de texto e nunca como máscara de foto |
| `sglk-estado-vazio.svg` | Imóveis > Nenhum resultado | Mostrar que não há kitnets com aqueles filtros | Contorno do símbolo em `--salvia-500` com uma lupa em `--marinho-700` | SVG, até 240px | Sem personagens e sem ilustração infantil |

**Benefícios (item 18 do pedido):** resolvidos com ícones do conjunto `sglk-icones/` dentro de círculos `--salvia-100`: busca inteligente (lupa), praticidade (casa), segurança (escudo com check), organização (lista), contato rápido (raio ou ícone do WhatsApp) e gestão simplificada (gráfico de barras). Imagens raster aqui só pesariam no carregamento.

**Fundos e elementos de apoio (item 20 do pedido):** o site não precisa de degradês, texturas nem fundos fotográficos genéricos. Bastam os círculos, os arcos e o contorno do símbolo de `sglk-elementos-graficos.svg`, que já aparecem na identidade.

**Experiência desktop (item 13 do pedido):** coberta por `02-busca-kitnets-desktop`, `03-catalogo-kitnets-desktop`, `06-painel-locador-desktop`, `07-cadastro-imovel-desktop` e `14-mobile-telas-desktop`. Não precisa de imagem própria.

---

### 01 · `01-hero-sglk-desktop.png`

| Campo | Definição |
|---|---|
| Categoria | Topo (hero) |
| Seção de uso | Home > Topo, a partir de 1024px, como fundo da seção |
| Objetivo | Abrir o site mostrando o produto em uso num cenário real de moradia |
| Mensagem | Aqui você encontra uma kitnet de verdade, com informação clara |
| Público principal | Locatário (estudantes e trabalhadores temporários) |
| Elemento principal | Card da Kitnet mobiliada flutuando diante da fachada |
| Elementos secundários | Card da Kitnet moderna parcialmente atrás; fachada do prédio da kitnet 02; círculo sálvia; arco fino; folhagem desfocada |
| Composição | Lado esquerdo (45%) vazio em off-white; lado direito (55%) com fachada, círculo e dois cards sobrepostos |
| Enquadramento | Foto de arquitetura de baixo para cima, suave; lente equivalente a 35mm; verticais retas |
| Posição dos elementos | Fachada no terço direito, do topo até 80% da altura; círculo atrás da fachada, centrado a 65% da largura; card principal a 60% da largura e 55% da altura; card de trás acima e à direita dele; folhas no canto inferior direito |
| Cenário | Manhã de sol, céu azul-claro, prédio residencial moderno de três andares com árvores tropicais |
| Tipo de imóvel | Fachada da kitnet 02 (seção 6) |
| Direção fotográfica | Arquitetura realista e limpa, sem pessoas e sem carros |
| Iluminação | Sol da manhã vindo da esquerda, sombras suaves |
| Cores predominantes | Off-white, branco, azul-marinho nos textos, sálvia, verde das árvores e azul-claro do céu |
| Proporção | 16:9 |
| Resolução | Master 2400 × 1350 px; exportar 1920 × 1080 e 1440 × 810 (até 250 KB) |
| Área livre para texto | Sim: título, texto de abertura e painel de busca do site |
| Posição da área livre | Esquerda, 45% da largura, na altura toda |
| Dispositivo | Desktop (a partir de 1024px) |
| Referências | `sglk-hero-desktop.png`, `sglk-identidade-visual.png`, `05-kitnet-02-fachada.png`, `04-kitnet-destaque-01.png`, `05-kitnet-01-quarto.png`, `05-kitnet-02-cozinha.png` |
| Restrições | Sem logo, menu e campo de busca na imagem, porque o site já tem esses elementos; cards idênticos aos da seção 7.2; nada importante na área livre |
| Não deve aparecer | Título ou frase, mapa, coração, pessoas, carros, placas, céu dramático, vinheta escura |
| Reuso | Base visual de `17-compartilhamento-og` |
| Texto alternativo | "Prédio residencial com árvores e dois anúncios de kitnet do SGLK em destaque." |

```text
SGLK BASE PROMPT. BRAND: SGLK (Sistema de Gerenciamento e Locação de Kitnets), a modern Brazilian web platform connecting people searching for compact housing (kitnets, 20-25 m² studios) with small property owners. Users search with filters (neighborhood, price, amenities), see clear listings with photos, price, neighborhood, size and availability ("Disponível" or "Alugado"), and contact the owner directly through WhatsApp. VISUAL IDENTITY: minimal, clean, modern, trustworthy and approachable; premium digital-product aesthetic without looking luxurious; generous negative space; soft off-white and white backgrounds; deep navy as the primary structural color; muted sage green as the main accent; light gray for secondary surfaces and borders; green indicates available properties; signature elements: large soft pale-sage circles, very thin arc lines and softly blurred tropical leaves at the edges. UI DIRECTION: clean responsive web interface floating without any device frame; rounded cards (16 px radius) and panels (24 px radius); rectangular buttons with 12 px radius, not pill-shaped; pill-shaped status tags and filter chips; subtle 1 px light-gray borders; very soft navy-tinted shadows; simple rounded line icons; clear visual hierarchy; minimal interface density; geometric sans-serif typography similar to Plus Jakarta Sans, in sentence case; all interface text in Brazilian Portuguese exactly as quoted in this prompt, and no other text. PHOTOGRAPHIC DIRECTION: realistic Brazilian compact apartments and kitnets in a warm tropical city; plausible small spaces; clean, tidy interiors; neutral materials (warm white walls, light beige porcelain floor tiles, light wood, white cabinets); warm wood and subtle greenery; eye-level camera, straight verticals, no ultra-wide distortion; no luxury penthouses or oversized apartments. LIGHTING: soft natural daylight, diffused shadows, bright but not overexposed, comfortable residential feeling. REALISM: photorealistic architectural photography when showing properties; high-end product visualization when showing the interface; UI elements crisp, intentional and professionally designed. COLOR PALETTE: deep navy #0B2841 (logo, headings, text), interface navy #0C3E66 (primary buttons, selected chips), muted sage green #648B81 (accents), dark sage #45695F ("Disponível" tag with white text), slate gray #636E7B ("Alugado" tag with white text), light cool gray #D7D8DC (borders), off-white #FBFAF8 (backgrounds), warm light gray #F2F1EF (secondary surfaces), white #FFFFFF (cards), WhatsApp button green #15803D with white text. GENERAL CONSISTENCY RULE: Follow the supplied SGLK references exactly. Preserve the same logo, visual identity, color palette, interface language, rounded geometry, typography style and overall product character. PROPERTY CONSISTENCY RULE (when property references are supplied): Follow the supplied property references exactly. Preserve the same architecture, furniture layout, materials, colors, proportions and interior details. RESTRICTIONS: never add unsupported functionality; do not show in-platform payments, checkout, credit cards, rent payment dashboards, digital contracts, electronic signatures, credit scores, internal chat systems, video calls, financial analytics, banking interfaces or luxury real-estate brokerage features; no favorite or heart icons, no maps, no app-store badges, no verification seals; do not change the SGLK logo and do not invent another logo; do not change the brand colors; do not overcrowd the composition; no excessive gradients; no cartoon illustration; no generic corporate stock photography; no unrealistic luxury apartments; no random decorative UI without function; no watermarks; no slogans or headlines outside the interface.

IMAGE BRIEF: 01-hero-sglk-desktop, the homepage hero background for desktop screens. Follow the supplied SGLK interface references exactly. Preserve the same visual identity, logo, color palette, typography style, spacing, rounded corners, cards, buttons, filters, status pills and overall interface language. COMPOSITION: wide horizontal scene. The left 45% of the frame is an almost empty, even off-white area (#FBFAF8) with only one very thin pale arc line near the far left edge. The right 55% shows a photorealistic three-story modern residential building (white and light-gray render, black window frames, small balconies with thin black metal railings, tropical trees in front), partly in front of a large soft pale-sage circle. Floating in front of the building, two SGLK listing cards overlap at a gentle 3-degree angle with very soft navy-tinted shadows; the front card is larger and sharper. Softly blurred tropical leaves enter the bottom-right corner, out of focus. FRAMING AND CAMERA: architectural photograph, 35 mm equivalent, camera at street level looking slightly up, straight verticals. SCENE: sunny morning in a warm tropical Brazilian city, pale blue sky with light haze, no people, no cars, no signs. INTERFACE: the front card is a white card with 16 px radius and a 1 px light-gray border; its photo, inset 8 px with 12 px radius, shows a tidy furnished studio bedroom (double bed with a low dark-gray upholstered headboard, white duvet, folded gray throw, tall fiddle-leaf fig, two small black-framed botanical prints, window with a white sheer curtain); on the photo's top-left corner a dark sage pill tag "Disponível" (#45695F, white text); below the photo: "Kitnet mobiliada" in semibold navy, a location-pin icon with "Centro" in slate gray, "R$ 1.200/mês" in bold navy, a row of line icons with "1" (bed), "1" (shower) and "25 m²" (area), and a full-width green button "Falar no WhatsApp" (#15803D, white text, white WhatsApp glyph on the left). The back card, smaller and partly hidden, shows a compact kitchenette photo (tall white fridge, matte charcoal cabinets, small light-wood table), the tag "Disponível", "Kitnet moderna", "Vila Nova", "R$ 950/mês", "1", "1" and "20 m²". LIGHTING: soft morning sunlight from the left, diffused shadows, bright but not overexposed. COLORS: off-white and white dominate; deep navy text; sage accents; natural tree greens; pale blue sky. FORMAT: 16:9 landscape, 2400 x 1350 px. NEGATIVE SPACE: Leave the left 45% of the image visually clean and low-detail for website typography, in an even off-white tone that blends into the page background. REALISM: photorealistic architecture and crisp, high-end product visualization for the cards. AVOID: logo, navigation bar, search bar, headline or slogan text, map, heart icons, extra cards, people, cars, street signs, dramatic sky, dark vignette, gradients.
```

---

### 01 · `01-hero-sglk-mobile.png`

| Campo | Definição |
|---|---|
| Categoria | Topo (hero) |
| Seção de uso | Home > Topo, abaixo de 1024px, logo depois do painel de busca |
| Objetivo | Mostrar o produto logo depois da busca, na tela do celular |
| Mensagem | Uma kitnet de verdade, com informação clara |
| Público principal | Locatário |
| Elemento principal | Card da Kitnet mobiliada, grande e legível |
| Elementos secundários | Parte alta da fachada da kitnet 02; círculo sálvia; folhagem desfocada |
| Composição | Vertical: fachada no alto, à direita; card com 70% da largura na metade de baixo; círculo atrás do card |
| Enquadramento | Arquitetura de baixo para cima; card de frente, inclinado 2° |
| Posição dos elementos | Fachada do topo até 55% da altura, deslocada para a direita; card centralizado, de 40% a 95% da altura; folhas no canto inferior esquerdo |
| Cenário | O mesmo prédio e a mesma manhã da versão desktop |
| Tipo de imóvel | Fachada da kitnet 02 |
| Direção fotográfica | Arquitetura realista, sem pessoas e sem carros |
| Iluminação | Sol da manhã, sombras suaves |
| Cores predominantes | Off-white, branco, azul-marinho, sálvia e verde das árvores |
| Proporção | 4:5 |
| Resolução | Master 1440 × 1800 px; exportar 1080 × 1350 e 720 × 900 (até 200 KB) |
| Área livre para texto | Não: o texto fica acima da imagem, fora dela |
| Posição da área livre | Não se aplica; manter margem limpa de 6% em volta do card |
| Dispositivo | Celular e tablet |
| Referências | `01-hero-sglk-desktop.png` aprovada, `sglk-mobile-busca.png`, `sglk-identidade-visual.png`, `05-kitnet-02-fachada.png`, `04-kitnet-destaque-01.png` |
| Restrições | Card legível numa tela de 360px; mesmo card e mesmo prédio da versão desktop |
| Não deve aparecer | Logo, menu, busca, títulos, coração, mapa, pessoas, carros |
| Reuso | Nenhum |
| Texto alternativo | "Anúncio da Kitnet mobiliada no Centro, com a fachada de um prédio residencial ao fundo." |

```text
SGLK BASE PROMPT. BRAND: SGLK (Sistema de Gerenciamento e Locação de Kitnets), a modern Brazilian web platform connecting people searching for compact housing (kitnets, 20-25 m² studios) with small property owners. Users search with filters (neighborhood, price, amenities), see clear listings with photos, price, neighborhood, size and availability ("Disponível" or "Alugado"), and contact the owner directly through WhatsApp. VISUAL IDENTITY: minimal, clean, modern, trustworthy and approachable; premium digital-product aesthetic without looking luxurious; generous negative space; soft off-white and white backgrounds; deep navy as the primary structural color; muted sage green as the main accent; light gray for secondary surfaces and borders; green indicates available properties; signature elements: large soft pale-sage circles, very thin arc lines and softly blurred tropical leaves at the edges. UI DIRECTION: clean responsive web interface floating without any device frame; rounded cards (16 px radius) and panels (24 px radius); rectangular buttons with 12 px radius, not pill-shaped; pill-shaped status tags and filter chips; subtle 1 px light-gray borders; very soft navy-tinted shadows; simple rounded line icons; clear visual hierarchy; minimal interface density; geometric sans-serif typography similar to Plus Jakarta Sans, in sentence case; all interface text in Brazilian Portuguese exactly as quoted in this prompt, and no other text. PHOTOGRAPHIC DIRECTION: realistic Brazilian compact apartments and kitnets in a warm tropical city; plausible small spaces; clean, tidy interiors; neutral materials (warm white walls, light beige porcelain floor tiles, light wood, white cabinets); warm wood and subtle greenery; eye-level camera, straight verticals, no ultra-wide distortion; no luxury penthouses or oversized apartments. LIGHTING: soft natural daylight, diffused shadows, bright but not overexposed, comfortable residential feeling. REALISM: photorealistic architectural photography when showing properties; high-end product visualization when showing the interface; UI elements crisp, intentional and professionally designed. COLOR PALETTE: deep navy #0B2841 (logo, headings, text), interface navy #0C3E66 (primary buttons, selected chips), muted sage green #648B81 (accents), dark sage #45695F ("Disponível" tag with white text), slate gray #636E7B ("Alugado" tag with white text), light cool gray #D7D8DC (borders), off-white #FBFAF8 (backgrounds), warm light gray #F2F1EF (secondary surfaces), white #FFFFFF (cards), WhatsApp button green #15803D with white text. GENERAL CONSISTENCY RULE: Follow the supplied SGLK references exactly. Preserve the same logo, visual identity, color palette, interface language, rounded geometry, typography style and overall product character. PROPERTY CONSISTENCY RULE (when property references are supplied): Follow the supplied property references exactly. Preserve the same architecture, furniture layout, materials, colors, proportions and interior details. RESTRICTIONS: never add unsupported functionality; do not show in-platform payments, checkout, credit cards, rent payment dashboards, digital contracts, electronic signatures, credit scores, internal chat systems, video calls, financial analytics, banking interfaces or luxury real-estate brokerage features; no favorite or heart icons, no maps, no app-store badges, no verification seals; do not change the SGLK logo and do not invent another logo; do not change the brand colors; do not overcrowd the composition; no excessive gradients; no cartoon illustration; no generic corporate stock photography; no unrealistic luxury apartments; no random decorative UI without function; no watermarks; no slogans or headlines outside the interface.

IMAGE BRIEF: 01-hero-sglk-mobile, the homepage hero image for mobile screens, shown below the website search panel. Follow the supplied SGLK interface references exactly. Preserve the same visual identity, logo, color palette, typography style, spacing, rounded corners, cards, buttons, filters, status pills and overall interface language. Follow the supplied property references exactly. Preserve the same architecture, furniture layout, materials, colors, proportions and interior details. COMPOSITION: vertical portrait scene. The upper half shows the top floors of the same three-story modern residential building (white and light-gray render, black window frames, small balconies with thin black metal railings, tropical trees), shifted to the right, against a pale blue sky. A large soft pale-sage circle sits behind the lower half. One SGLK listing card floats in the lower half, centered, about 70% of the image width, tilted 2 degrees, with a very soft navy-tinted shadow. Softly blurred tropical leaves enter the bottom-left corner. FRAMING AND CAMERA: architectural photograph looking slightly up, straight verticals; the card faces the viewer. SCENE: the same sunny morning as the desktop hero; no people, no cars, no signs. INTERFACE: white card, 16 px radius, 1 px light-gray border; photo inset 8 px with 12 px radius showing the tidy furnished studio bedroom (double bed with a low dark-gray upholstered headboard, white duvet, folded gray throw, tall fiddle-leaf fig, two small black-framed botanical prints, window with a white sheer curtain); dark sage pill tag "Disponível" (#45695F, white text) on the photo's top-left corner; below: "Kitnet mobiliada" in semibold navy, a location-pin icon with "Centro" in slate gray, "R$ 1.200/mês" in bold navy, line icons with "1" (bed), "1" (shower) and "25 m²" (area), and a full-width green button "Falar no WhatsApp" (#15803D, white text, white WhatsApp glyph). All card text must be large and legible when the image is shown 360 px wide. LIGHTING: soft morning sunlight, diffused shadows, bright but not overexposed. COLORS: off-white, white, deep navy, sage and natural greens. FORMAT: 4:5 portrait, 1440 x 1800 px. NEGATIVE SPACE: no text area needed, because the website text sits above the image; keep a clean 6% margin around the card. REALISM: photorealistic architecture and crisp product visualization. AVOID: logo, navigation bar, search bar, headline text, map, heart icons, extra cards, people, cars, dark vignette.
```

---

### 02 · `02-busca-kitnets-desktop.png`

| Campo | Definição |
|---|---|
| Categoria | Busca de kitnets |
| Seção de uso | Home > Busca rápida (desktop); Como Funciona > Quem procura > Passo 1 (desktop) |
| Objetivo | Mostrar como é fácil filtrar por bairro, preço e comodidades |
| Mensagem | Encontre a kitnet certa em poucos passos |
| Público principal | Locatário |
| Elemento principal | Painel da página Imóveis com busca e filtros |
| Elementos secundários | Chips de filtros ativos, contagem de resultados e 3 cards |
| Composição | Painel grande flutuando com perspectiva suave, ocupando 85% da largura; círculo sálvia atrás do canto superior direito; arco fino; folhas no canto inferior esquerdo |
| Enquadramento | Visualização de produto de frente, painel inclinado 3° |
| Posição dos elementos | Cabeçalho no topo do painel; busca e filtros no terço superior; cards na metade de baixo |
| Cenário | Fundo off-white de estúdio, sem ambiente físico |
| Tipo de imóvel | Fotos das kitnets 01, 02 e 03 nos cards |
| Direção fotográfica | Visualização de produto; fotos dos cards realistas |
| Iluminação | Luz de estúdio suave e uniforme, sombra azulada leve sob o painel |
| Cores predominantes | Off-white, branco, azul-marinho e sálvia; verde do WhatsApp só nos botões |
| Proporção | 3:2 |
| Resolução | Master 2400 × 1600 px; exportar 1600 × 1067 e 800 × 533 (até 250 KB) |
| Área livre para texto | Não: o texto da seção fica ao lado da imagem |
| Posição da área livre | Não se aplica; margem limpa de 7% em volta do painel |
| Dispositivo | Desktop |
| Referências | `sglk-busca-kitnets-desktop.png`, `sglk-identidade-visual.png`, `04-kitnet-destaque-01.png`, `05-kitnet-01-quarto.png`, `05-kitnet-02-cozinha.png`, `05-kitnet-03-quarto.png` |
| Restrições | Só os 3 filtros do `specs/site.md`; textos da seção 7.1; cards da seção 7.2 |
| Não deve aparecer | Mapa, coração, "Mais filtros", "Entrar", "Cadastrar", "Sobre", anúncios extras |
| Reuso | Como Funciona > Passo 1 (desktop) |
| Texto alternativo | "Tela de busca do SGLK com filtros de bairro, preço e comodidades e três kitnets encontradas." |

```text
SGLK BASE PROMPT. BRAND: SGLK (Sistema de Gerenciamento e Locação de Kitnets), a modern Brazilian web platform connecting people searching for compact housing (kitnets, 20-25 m² studios) with small property owners. Users search with filters (neighborhood, price, amenities), see clear listings with photos, price, neighborhood, size and availability ("Disponível" or "Alugado"), and contact the owner directly through WhatsApp. VISUAL IDENTITY: minimal, clean, modern, trustworthy and approachable; premium digital-product aesthetic without looking luxurious; generous negative space; soft off-white and white backgrounds; deep navy as the primary structural color; muted sage green as the main accent; light gray for secondary surfaces and borders; green indicates available properties; signature elements: large soft pale-sage circles, very thin arc lines and softly blurred tropical leaves at the edges. UI DIRECTION: clean responsive web interface floating without any device frame; rounded cards (16 px radius) and panels (24 px radius); rectangular buttons with 12 px radius, not pill-shaped; pill-shaped status tags and filter chips; subtle 1 px light-gray borders; very soft navy-tinted shadows; simple rounded line icons; clear visual hierarchy; minimal interface density; geometric sans-serif typography similar to Plus Jakarta Sans, in sentence case; all interface text in Brazilian Portuguese exactly as quoted in this prompt, and no other text. PHOTOGRAPHIC DIRECTION: realistic Brazilian compact apartments and kitnets in a warm tropical city; plausible small spaces; clean, tidy interiors; neutral materials (warm white walls, light beige porcelain floor tiles, light wood, white cabinets); warm wood and subtle greenery; eye-level camera, straight verticals, no ultra-wide distortion; no luxury penthouses or oversized apartments. LIGHTING: soft natural daylight, diffused shadows, bright but not overexposed, comfortable residential feeling. REALISM: photorealistic architectural photography when showing properties; high-end product visualization when showing the interface; UI elements crisp, intentional and professionally designed. COLOR PALETTE: deep navy #0B2841 (logo, headings, text), interface navy #0C3E66 (primary buttons, selected chips), muted sage green #648B81 (accents), dark sage #45695F ("Disponível" tag with white text), slate gray #636E7B ("Alugado" tag with white text), light cool gray #D7D8DC (borders), off-white #FBFAF8 (backgrounds), warm light gray #F2F1EF (secondary surfaces), white #FFFFFF (cards), WhatsApp button green #15803D with white text. GENERAL CONSISTENCY RULE: Follow the supplied SGLK references exactly. Preserve the same logo, visual identity, color palette, interface language, rounded geometry, typography style and overall product character. PROPERTY CONSISTENCY RULE (when property references are supplied): Follow the supplied property references exactly. Preserve the same architecture, furniture layout, materials, colors, proportions and interior details. RESTRICTIONS: never add unsupported functionality; do not show in-platform payments, checkout, credit cards, rent payment dashboards, digital contracts, electronic signatures, credit scores, internal chat systems, video calls, financial analytics, banking interfaces or luxury real-estate brokerage features; no favorite or heart icons, no maps, no app-store badges, no verification seals; do not change the SGLK logo and do not invent another logo; do not change the brand colors; do not overcrowd the composition; no excessive gradients; no cartoon illustration; no generic corporate stock photography; no unrealistic luxury apartments; no random decorative UI without function; no watermarks; no slogans or headlines outside the interface.

IMAGE BRIEF: 02-busca-kitnets-desktop, a product visualization of the SGLK property search page for desktop. Follow the supplied SGLK interface references exactly. Preserve the same visual identity, logo, color palette, typography style, spacing, rounded corners, cards, buttons, filters, status pills and overall interface language. Follow the supplied property references exactly for the three card photos. COMPOSITION: one large white page panel (24 px radius) floats over a plain off-white studio background (#FBFAF8), filling about 85% of the width, tilted 3 degrees in gentle perspective, with a very soft navy-tinted shadow. A large soft pale-sage circle sits behind the panel's top-right corner, one very thin pale arc line crosses the background, and softly blurred tropical leaves enter the bottom-left corner. INTERFACE, from top to bottom inside the panel: (1) header: SGLK horizontal logo on the left exactly as in the supplied identity reference (navy hexagonal house outline with a sage-green open door and a speech-bubble tail, bold navy "SGLK" wordmark); navigation links "Imóveis" (active, with a thin navy underline), "Como funciona", "FAQ" and "Contato"; on the right an outlined navy button "Anunciar minha kitnet". (2) search row: a wide search field with a magnifier icon and the placeholder "Busque por bairro..." and a solid navy button "Buscar" (#0C3E66, white text, 12 px radius). (3) filter row: three dropdown fields with small labels above them: "Bairro" showing "Todos os bairros", "Faixa de preço" showing "Até R$ 1.500", "Comodidades" showing "Mobiliada". (4) active filter chips: "Até R$ 1.500" and "Mobiliada", each a navy pill with white text and a small close mark. (5) the text "3 kitnets encontradas" in semibold navy. (6) three listing cards in a row, each a white card with 16 px radius, photo inset 8 px with 12 px radius, pill status tag on the photo's top-left corner, then the name in semibold navy, a location-pin icon with the neighborhood in slate gray, the monthly price in bold navy, line icons for bed, shower and area, and the action button. Card 1: "Disponível" (#45695F), "Kitnet mobiliada", "Centro", "R$ 1.200/mês", "1", "1", "25 m²", green button "Falar no WhatsApp" (#15803D, white text, white WhatsApp glyph); photo of the tidy furnished studio bedroom with a dark-gray headboard and a tall fiddle-leaf fig. Card 2: "Disponível", "Kitnet moderna", "Vila Nova", "R$ 950/mês", "1", "1", "20 m²", green button "Falar no WhatsApp"; photo of the compact kitchenette with a tall white fridge, matte charcoal cabinets and a small light-wood table. Card 3: "Alugado" (#636E7B, white text), "Kitnet aconchegante", "Jardim Paulista", "R$ 1.100/mês", "1", "1", "22 m²", button "Ver detalhes" (pale blue-gray #EEF2F6 background, navy text); photo of the cozy studio with white linen, a beige throw and light-wood open shelves. LIGHTING: soft, even studio light. COLORS: off-white and white dominate, deep and interface navy for text and buttons, sage accents, green only on the WhatsApp buttons. FORMAT: 3:2 landscape, 2400 x 1600 px. NEGATIVE SPACE: no text area needed; keep a clean 7% margin around the panel. REALISM: crisp, high-end product visualization with realistic photos inside the cards. AVOID: map, heart icons, a "Mais filtros" button, "Entrar", "Cadastrar" or "Sobre" links, extra listings, sidebars, ads, device frames, gradients, garbled text.
```

---

### 02 · `02-busca-kitnets-mobile.png`

| Campo | Definição |
|---|---|
| Categoria | Busca de kitnets |
| Seção de uso | Home > Busca rápida (celular e tablet) |
| Objetivo | Mostrar a busca funcionando na tela do celular |
| Mensagem | A busca cabe na palma da mão |
| Público principal | Locatário |
| Elemento principal | Tela vertical com busca, chips de filtro e cards |
| Elementos secundários | Círculo sálvia; canto de fachada branca; folhagem desfocada |
| Composição | Uma tela vertical flutuando no centro, inclinada 4°; círculo atrás no alto, à direita; canto de fachada na borda direita; folhas no canto inferior esquerdo |
| Enquadramento | Visualização de produto de frente |
| Posição dos elementos | Tela ocupando 70% da largura e 88% da altura; busca e chips no topo da tela; card 01 inteiro; card 02 cortado pela borda de baixo da tela, sugerindo rolagem |
| Cenário | Fundo off-white de estúdio, com um canto da fachada da kitnet 02 |
| Tipo de imóvel | Fotos das kitnets 01 e 02 nos cards |
| Direção fotográfica | Visualização de produto; fotos dos cards realistas |
| Iluminação | Luz suave e uniforme |
| Cores predominantes | Off-white, branco, azul-marinho e sálvia |
| Proporção | 4:5 |
| Resolução | Master 1440 × 1800 px; exportar 1080 × 1350 e 720 × 900 (até 200 KB) |
| Área livre para texto | Não |
| Posição da área livre | Não se aplica; margem limpa de 6% |
| Dispositivo | Celular e tablet |
| Referências | `sglk-mobile-busca.png`, `sglk-identidade-visual.png`, `02-busca-kitnets-desktop.png` aprovada, `05-kitnet-01-quarto.png`, `05-kitnet-02-cozinha.png` |
| Restrições | Sem moldura de celular; textos legíveis numa tela de 360px |
| Não deve aparecer | Moldura de aparelho, entalhe, botões físicos, barra de status com operadora, coração, mapa, "Mais filtros" |
| Reuso | Nenhum |
| Texto alternativo | "Tela do SGLK no celular com filtros de preço e comodidades e anúncios de kitnet." |

```text
SGLK BASE PROMPT. BRAND: SGLK (Sistema de Gerenciamento e Locação de Kitnets), a modern Brazilian web platform connecting people searching for compact housing (kitnets, 20-25 m² studios) with small property owners. Users search with filters (neighborhood, price, amenities), see clear listings with photos, price, neighborhood, size and availability ("Disponível" or "Alugado"), and contact the owner directly through WhatsApp. VISUAL IDENTITY: minimal, clean, modern, trustworthy and approachable; premium digital-product aesthetic without looking luxurious; generous negative space; soft off-white and white backgrounds; deep navy as the primary structural color; muted sage green as the main accent; light gray for secondary surfaces and borders; green indicates available properties; signature elements: large soft pale-sage circles, very thin arc lines and softly blurred tropical leaves at the edges. UI DIRECTION: clean responsive web interface floating without any device frame; rounded cards (16 px radius) and panels (24 px radius); rectangular buttons with 12 px radius, not pill-shaped; pill-shaped status tags and filter chips; subtle 1 px light-gray borders; very soft navy-tinted shadows; simple rounded line icons; clear visual hierarchy; minimal interface density; geometric sans-serif typography similar to Plus Jakarta Sans, in sentence case; all interface text in Brazilian Portuguese exactly as quoted in this prompt, and no other text. PHOTOGRAPHIC DIRECTION: realistic Brazilian compact apartments and kitnets in a warm tropical city; plausible small spaces; clean, tidy interiors; neutral materials (warm white walls, light beige porcelain floor tiles, light wood, white cabinets); warm wood and subtle greenery; eye-level camera, straight verticals, no ultra-wide distortion; no luxury penthouses or oversized apartments. LIGHTING: soft natural daylight, diffused shadows, bright but not overexposed, comfortable residential feeling. REALISM: photorealistic architectural photography when showing properties; high-end product visualization when showing the interface; UI elements crisp, intentional and professionally designed. COLOR PALETTE: deep navy #0B2841 (logo, headings, text), interface navy #0C3E66 (primary buttons, selected chips), muted sage green #648B81 (accents), dark sage #45695F ("Disponível" tag with white text), slate gray #636E7B ("Alugado" tag with white text), light cool gray #D7D8DC (borders), off-white #FBFAF8 (backgrounds), warm light gray #F2F1EF (secondary surfaces), white #FFFFFF (cards), WhatsApp button green #15803D with white text. GENERAL CONSISTENCY RULE: Follow the supplied SGLK references exactly. Preserve the same logo, visual identity, color palette, interface language, rounded geometry, typography style and overall product character. PROPERTY CONSISTENCY RULE (when property references are supplied): Follow the supplied property references exactly. Preserve the same architecture, furniture layout, materials, colors, proportions and interior details. RESTRICTIONS: never add unsupported functionality; do not show in-platform payments, checkout, credit cards, rent payment dashboards, digital contracts, electronic signatures, credit scores, internal chat systems, video calls, financial analytics, banking interfaces or luxury real-estate brokerage features; no favorite or heart icons, no maps, no app-store badges, no verification seals; do not change the SGLK logo and do not invent another logo; do not change the brand colors; do not overcrowd the composition; no excessive gradients; no cartoon illustration; no generic corporate stock photography; no unrealistic luxury apartments; no random decorative UI without function; no watermarks; no slogans or headlines outside the interface.

IMAGE BRIEF: 02-busca-kitnets-mobile, a product visualization of the SGLK search on a mobile screen. Follow the supplied SGLK interface references exactly. Preserve the same visual identity, logo, color palette, typography style, spacing, rounded corners, cards, buttons, filters, status pills and overall interface language. Follow the supplied property references exactly for the card photos. COMPOSITION: one tall floating mobile screen, a white rounded rectangle with 32 px corner radius and no phone hardware at all, centered, tilted 4 degrees, about 70% of the image width and 88% of its height, with a very soft navy-tinted shadow. Behind the upper right of the screen, a large soft pale-sage circle; at the right edge, a sliver of a white modern building with a small balcony and a thin black railing; softly blurred tropical leaves enter the bottom-left corner. INTERFACE inside the screen, from top to bottom: a small SGLK horizontal logo on the left exactly as in the supplied identity reference and a menu icon on the right; a search field with a magnifier icon and the placeholder "Busque por bairro..." next to a square filter-icon button; a row of filter chips: "Bairro" (white pill, gray outline, navy text), "Até R$ 1.500" and "Mobiliada" (both selected: solid navy #0C3E66 pills with white text and a small check mark); the text "3 kitnets encontradas" in semibold navy; a full-width vertical listing card: photo inset 8 px with 12 px radius showing the tidy furnished studio bedroom (dark-gray headboard, white duvet, gray throw, tall fiddle-leaf fig), dark sage tag "Disponível" (#45695F, white text), "Kitnet mobiliada", location-pin icon with "Centro", "R$ 1.200/mês", line icons with "1", "1" and "25 m²", full-width green button "Falar no WhatsApp" (#15803D, white text, white WhatsApp glyph); below it, the top of a second card cut off by the bottom edge of the screen, showing the compact kitchenette photo (tall white fridge, matte charcoal cabinets), the tag "Disponível" and "Kitnet moderna". All text must be legible when the image is shown 360 px wide. LIGHTING: soft, even light. COLORS: off-white, white, navy and sage; green only on the WhatsApp button. FORMAT: 4:5 portrait, 1440 x 1800 px. NEGATIVE SPACE: no text area needed; keep a clean 6% margin. REALISM: crisp product visualization with realistic photos. AVOID: phone frame, bezel, notch, hardware buttons, carrier status bar, heart icons, map, a "Mais filtros" button, extra listings, garbled text.
```

---

### 03 · `03-catalogo-kitnets-desktop.png`

| Campo | Definição |
|---|---|
| Categoria | Catálogo de imóveis |
| Seção de uso | Como Funciona > Quem procura > Passo 2, "Compare" (desktop) |
| Objetivo | Mostrar as kitnets lado a lado para comparar preço, área, bairro e status |
| Mensagem | Compare opções com as mesmas informações, sem surpresa |
| Público principal | Locatário |
| Elemento principal | Grade com 3 cards grandes |
| Elementos secundários | Barra compacta de filtros; fileira de cards carregando (esqueleto) abaixo; círculo sálvia; arco fino |
| Composição | Painel de página reto, sem inclinação, cortado pela borda de baixo da imagem; 3 cards grandes na faixa central; segunda fileira em esqueleto, também cortada |
| Enquadramento | Vista frontal, como uma captura de tela ampliada e limpa |
| Posição dos elementos | Barra de filtros e chips no topo (até 18% da altura); "3 kitnets encontradas" logo abaixo; cards de 25% a 85% da altura; esqueleto a partir de 88% |
| Cenário | Fundo off-white; círculo sálvia atrás do lado esquerdo do painel |
| Tipo de imóvel | Kitnets 01, 02 e 03 nos cards |
| Direção fotográfica | Visualização de produto; fotos dos cards realistas |
| Iluminação | Uniforme, sem reflexos |
| Cores predominantes | Branco, off-white, azul-marinho e sálvia; verde só nos botões do WhatsApp |
| Proporção | 16:9 |
| Resolução | Master 2400 × 1350 px; exportar 1600 × 900 e 1024 × 576 (até 250 KB) |
| Área livre para texto | Não |
| Posição da área livre | Não se aplica; margem limpa de 6% nas laterais |
| Dispositivo | Desktop |
| Referências | `sglk-busca-kitnets-desktop.png`, `sglk-identidade-visual.png`, `02-busca-kitnets-desktop.png` aprovada, `04-kitnet-destaque-01.png`, `05-kitnet-01-quarto.png`, `05-kitnet-02-cozinha.png`, `05-kitnet-03-quarto.png` |
| Restrições | Cards iguais aos da imagem 02; esqueleto sem texto e sem dados |
| Não deve aparecer | Anúncios além dos 3, mapa, coração, paginação com números, barra lateral, cabeçalho do site |
| Reuso | Nenhum |
| Texto alternativo | "Três anúncios de kitnet lado a lado no SGLK, com preço, bairro, área e status." |

```text
SGLK BASE PROMPT. BRAND: SGLK (Sistema de Gerenciamento e Locação de Kitnets), a modern Brazilian web platform connecting people searching for compact housing (kitnets, 20-25 m² studios) with small property owners. Users search with filters (neighborhood, price, amenities), see clear listings with photos, price, neighborhood, size and availability ("Disponível" or "Alugado"), and contact the owner directly through WhatsApp. VISUAL IDENTITY: minimal, clean, modern, trustworthy and approachable; premium digital-product aesthetic without looking luxurious; generous negative space; soft off-white and white backgrounds; deep navy as the primary structural color; muted sage green as the main accent; light gray for secondary surfaces and borders; green indicates available properties; signature elements: large soft pale-sage circles, very thin arc lines and softly blurred tropical leaves at the edges. UI DIRECTION: clean responsive web interface floating without any device frame; rounded cards (16 px radius) and panels (24 px radius); rectangular buttons with 12 px radius, not pill-shaped; pill-shaped status tags and filter chips; subtle 1 px light-gray borders; very soft navy-tinted shadows; simple rounded line icons; clear visual hierarchy; minimal interface density; geometric sans-serif typography similar to Plus Jakarta Sans, in sentence case; all interface text in Brazilian Portuguese exactly as quoted in this prompt, and no other text. PHOTOGRAPHIC DIRECTION: realistic Brazilian compact apartments and kitnets in a warm tropical city; plausible small spaces; clean, tidy interiors; neutral materials (warm white walls, light beige porcelain floor tiles, light wood, white cabinets); warm wood and subtle greenery; eye-level camera, straight verticals, no ultra-wide distortion; no luxury penthouses or oversized apartments. LIGHTING: soft natural daylight, diffused shadows, bright but not overexposed, comfortable residential feeling. REALISM: photorealistic architectural photography when showing properties; high-end product visualization when showing the interface; UI elements crisp, intentional and professionally designed. COLOR PALETTE: deep navy #0B2841 (logo, headings, text), interface navy #0C3E66 (primary buttons, selected chips), muted sage green #648B81 (accents), dark sage #45695F ("Disponível" tag with white text), slate gray #636E7B ("Alugado" tag with white text), light cool gray #D7D8DC (borders), off-white #FBFAF8 (backgrounds), warm light gray #F2F1EF (secondary surfaces), white #FFFFFF (cards), WhatsApp button green #15803D with white text. GENERAL CONSISTENCY RULE: Follow the supplied SGLK references exactly. Preserve the same logo, visual identity, color palette, interface language, rounded geometry, typography style and overall product character. PROPERTY CONSISTENCY RULE (when property references are supplied): Follow the supplied property references exactly. Preserve the same architecture, furniture layout, materials, colors, proportions and interior details. RESTRICTIONS: never add unsupported functionality; do not show in-platform payments, checkout, credit cards, rent payment dashboards, digital contracts, electronic signatures, credit scores, internal chat systems, video calls, financial analytics, banking interfaces or luxury real-estate brokerage features; no favorite or heart icons, no maps, no app-store badges, no verification seals; do not change the SGLK logo and do not invent another logo; do not change the brand colors; do not overcrowd the composition; no excessive gradients; no cartoon illustration; no generic corporate stock photography; no unrealistic luxury apartments; no random decorative UI without function; no watermarks; no slogans or headlines outside the interface.

IMAGE BRIEF: 03-catalogo-kitnets-desktop, a product visualization of the SGLK results grid for comparing kitnets on desktop. Follow the supplied SGLK interface references exactly. Preserve the same visual identity, logo, color palette, typography style, spacing, rounded corners, cards, buttons, filters, status pills and overall interface language. Follow the supplied property references exactly for the card photos. COMPOSITION: a straight, untilted white page panel (24 px top corners) on an off-white background (#FBFAF8), spanning the width with 6% side margins and cut off by the bottom edge of the image; a large soft pale-sage circle sits behind the panel's left side and one very thin pale arc line crosses the background. INTERFACE inside the panel, from top to bottom: a compact filter bar with three dropdown fields labeled "Bairro" ("Todos os bairros"), "Faixa de preço" ("Até R$ 1.500") and "Comodidades" ("Mobiliada") and a solid navy button "Buscar" (#0C3E66, white text, 12 px radius); a row of two active filter chips, "Até R$ 1.500" and "Mobiliada", as navy pills with white text and a small close mark; the text "3 kitnets encontradas" in semibold navy; a row of three large listing cards with generous gaps. Each card: white, 16 px radius, 1 px light-gray border, photo inset 8 px with 12 px radius, pill status tag on the photo's top-left corner, then the name in semibold navy, a location-pin icon with the neighborhood in slate gray, the monthly price in bold navy, line icons for bed, shower and area, and the action button. Card 1: "Disponível" (#45695F, white text), "Kitnet mobiliada", "Centro", "R$ 1.200/mês", "1", "1", "25 m²", green button "Falar no WhatsApp" (#15803D, white text, white WhatsApp glyph); photo of the tidy furnished studio bedroom with a dark-gray headboard and a tall fiddle-leaf fig. Card 2: "Disponível", "Kitnet moderna", "Vila Nova", "R$ 950/mês", "1", "1", "20 m²", green button "Falar no WhatsApp"; photo of the compact kitchenette with a tall white fridge, matte charcoal cabinets and a small light-wood table. Card 3: "Alugado" (#636E7B, white text), "Kitnet aconchegante", "Jardim Paulista", "R$ 1.100/mês", "1", "1", "22 m²", button "Ver detalhes" (pale blue-gray #EEF2F6 background, navy text); photo of the cozy studio with white linen, a beige throw and light-wood open shelves. Below the cards, the top of a second row of three loading placeholder cards made only of flat light-gray blocks (#ECEDEF), with no text and no data, cut off by the bottom edge. LIGHTING: even, soft light, no glare. COLORS: white and off-white dominate, navy text and buttons, sage accents, green only on the WhatsApp buttons. FORMAT: 16:9 landscape, 2400 x 1350 px. NEGATIVE SPACE: no text area needed; keep the 6% side margins clean. REALISM: crisp product visualization with realistic photos inside the cards. AVOID: site header, sidebar, map, heart icons, page numbers, extra listings with data, ads, device frames, perspective tilt, garbled text.
```

---

### 04 · `04-kitnet-destaque-01.png`

| Campo | Definição |
|---|---|
| Categoria | Card de kitnet em destaque |
| Seção de uso | Como Funciona > Quem procura > Passo 2 (celular); base de `17-compartilhamento-og`; cópia `sglk-card-imovel.png` em `meus - produtos/` |
| Objetivo | Destacar um imóvel com todas as informações num único card, usável sozinho |
| Mensagem | Tudo o que você precisa saber, num só lugar |
| Público principal | Locatário |
| Elemento principal | Card grande da Kitnet mobiliada |
| Elementos secundários | Chips de comodidades; círculo sálvia; arco fino; folhagem desfocada |
| Composição | Card centralizado com 76% da largura, inclinado 2°; círculo atrás do card; folhas no canto inferior direito |
| Enquadramento | Visualização de produto de frente |
| Posição dos elementos | Foto grande no terço superior do card; textos, chips e botão abaixo |
| Cenário | Fundo off-white |
| Tipo de imóvel | Kitnet 01 |
| Direção fotográfica | Visualização de produto; foto do card realista |
| Iluminação | Suave e uniforme |
| Cores predominantes | Branco, off-white, azul-marinho e sálvia; verde só no botão |
| Proporção | 4:5 |
| Resolução | Master 1440 × 1800 px; exportar 1080 × 1350 e 720 × 900 (até 200 KB) |
| Área livre para texto | Não |
| Posição da área livre | Não se aplica; margem limpa de 8% |
| Dispositivo | Celular (Como Funciona) e compartilhamento |
| Referências | `sglk-mobile-busca.png`, `sglk-busca-kitnets-desktop.png`, `sglk-identidade-visual.png`, `05-kitnet-01-quarto.png` |
| Restrições | Atributos por extenso ("1 quarto", "1 banheiro", "25 m²"); chips informativos, não de filtro |
| Não deve aparecer | Coração, mapa, estrelas de avaliação, selo de verificado, logo, outros cards |
| Reuso | `17-compartilhamento-og`; referência de card para as telas 02, 03, 09, 10, 12 e 14 |
| Texto alternativo | "Anúncio da Kitnet mobiliada no Centro, disponível: R$ 1.200 por mês, 1 quarto, 1 banheiro e 25 m²." |

```text
SGLK BASE PROMPT. BRAND: SGLK (Sistema de Gerenciamento e Locação de Kitnets), a modern Brazilian web platform connecting people searching for compact housing (kitnets, 20-25 m² studios) with small property owners. Users search with filters (neighborhood, price, amenities), see clear listings with photos, price, neighborhood, size and availability ("Disponível" or "Alugado"), and contact the owner directly through WhatsApp. VISUAL IDENTITY: minimal, clean, modern, trustworthy and approachable; premium digital-product aesthetic without looking luxurious; generous negative space; soft off-white and white backgrounds; deep navy as the primary structural color; muted sage green as the main accent; light gray for secondary surfaces and borders; green indicates available properties; signature elements: large soft pale-sage circles, very thin arc lines and softly blurred tropical leaves at the edges. UI DIRECTION: clean responsive web interface floating without any device frame; rounded cards (16 px radius) and panels (24 px radius); rectangular buttons with 12 px radius, not pill-shaped; pill-shaped status tags and filter chips; subtle 1 px light-gray borders; very soft navy-tinted shadows; simple rounded line icons; clear visual hierarchy; minimal interface density; geometric sans-serif typography similar to Plus Jakarta Sans, in sentence case; all interface text in Brazilian Portuguese exactly as quoted in this prompt, and no other text. PHOTOGRAPHIC DIRECTION: realistic Brazilian compact apartments and kitnets in a warm tropical city; plausible small spaces; clean, tidy interiors; neutral materials (warm white walls, light beige porcelain floor tiles, light wood, white cabinets); warm wood and subtle greenery; eye-level camera, straight verticals, no ultra-wide distortion; no luxury penthouses or oversized apartments. LIGHTING: soft natural daylight, diffused shadows, bright but not overexposed, comfortable residential feeling. REALISM: photorealistic architectural photography when showing properties; high-end product visualization when showing the interface; UI elements crisp, intentional and professionally designed. COLOR PALETTE: deep navy #0B2841 (logo, headings, text), interface navy #0C3E66 (primary buttons, selected chips), muted sage green #648B81 (accents), dark sage #45695F ("Disponível" tag with white text), slate gray #636E7B ("Alugado" tag with white text), light cool gray #D7D8DC (borders), off-white #FBFAF8 (backgrounds), warm light gray #F2F1EF (secondary surfaces), white #FFFFFF (cards), WhatsApp button green #15803D with white text. GENERAL CONSISTENCY RULE: Follow the supplied SGLK references exactly. Preserve the same logo, visual identity, color palette, interface language, rounded geometry, typography style and overall product character. PROPERTY CONSISTENCY RULE (when property references are supplied): Follow the supplied property references exactly. Preserve the same architecture, furniture layout, materials, colors, proportions and interior details. RESTRICTIONS: never add unsupported functionality; do not show in-platform payments, checkout, credit cards, rent payment dashboards, digital contracts, electronic signatures, credit scores, internal chat systems, video calls, financial analytics, banking interfaces or luxury real-estate brokerage features; no favorite or heart icons, no maps, no app-store badges, no verification seals; do not change the SGLK logo and do not invent another logo; do not change the brand colors; do not overcrowd the composition; no excessive gradients; no cartoon illustration; no generic corporate stock photography; no unrealistic luxury apartments; no random decorative UI without function; no watermarks; no slogans or headlines outside the interface.

IMAGE BRIEF: 04-kitnet-destaque-01, a single featured SGLK listing card that can be used on its own. Follow the supplied SGLK interface references exactly. Preserve the same visual identity, logo, color palette, typography style, spacing, rounded corners, cards, buttons, filters, status pills and overall interface language. Follow the supplied property references exactly. Preserve the same architecture, furniture layout, materials, colors, proportions and interior details. COMPOSITION: one large white listing card (16 px radius, 1 px light-gray border, very soft navy-tinted shadow) floats in the center of an off-white background (#FBFAF8), about 76% of the image width, tilted 2 degrees. A large soft pale-sage circle sits behind the card, one very thin pale arc line crosses the background and softly blurred tropical leaves enter the bottom-right corner. INTERFACE inside the card, from top to bottom: a large photo, inset 8 px with 12 px radius, showing the tidy furnished studio bedroom (double bed with a low dark-gray upholstered headboard, white duvet, folded mid-gray throw, small black bedside table with a white ceramic lamp, tall fiddle-leaf fig in a light terracotta pot, two small black-framed botanical prints, window with a white sheer curtain and a white split air conditioner above it); on the photo's top-left corner a dark sage pill tag "Disponível" (#45695F, white text); below the photo: "Kitnet mobiliada" in semibold navy; a location-pin icon with "Centro" in slate gray; "R$ 1.200/mês" in large bold navy; a row of three line icons with the labels "1 quarto", "1 banheiro" and "25 m²"; a row of three small informative chips with a warm light-gray background (#F2F1EF) and navy text: "Mobiliada", "Wi-Fi" and "Ar-condicionado"; and a full-width green button "Falar no WhatsApp" (#15803D, white text, white WhatsApp glyph on the left). All text must be legible when the image is shown 360 px wide. LIGHTING: soft, even light. COLORS: white and off-white, navy text, sage accents, green only on the button. FORMAT: 4:5 portrait, 1440 x 1800 px. NEGATIVE SPACE: no text area needed; keep a clean 8% margin around the card. REALISM: crisp, high-end product visualization with a photorealistic photo. AVOID: heart icon, map, star ratings, verification badge, logo, other cards, device frames, garbled text.
```

---

### 05 · Série de fotos das kitnets de demonstração

Regras comuns às 12 fotos da série 05:
- São fotos ilustrativas, usadas só nos anúncios de demonstração, sempre com o aviso da seção 8.4.
- Cada foto recebe a descrição completa da kitnet no prompt, para manter a mesma planta, móveis, cores e materiais.
- Gerar primeiro a capa de cada kitnet, aprovar e anexá-la às demais fotos da mesma kitnet.
- Proporção 4:3; master 1600 × 1200 px; exportar 1200 × 900 (galeria, até 200 KB), 800 × 600 e 400 × 300 (cards, até 120 KB).
- Sem área livre para texto: as fotos aparecem inteiras, sem nada por cima além do selo de status do card.

### 05 · `05-kitnet-01-quarto.png`

| Campo | Definição |
|---|---|
| Categoria | Foto de kitnet (demonstração) |
| Seção de uso | Capa da kitnet 01 nos cards (Home > Kitnets em destaque; Imóveis); 1ª foto da galeria de detalhes; foto dentro dos cards nas telas |
| Objetivo | Mostrar o ambiente principal da kitnet 01 de forma honesta e clara |
| Mensagem | Espaço compacto, arrumado e pronto para morar |
| Público principal | Locatário |
| Elemento principal | Cama de casal com cabeceira cinza-escura |
| Elementos secundários | Mesa de cabeceira preta com luminária, figueira-lira, 2 quadros botânicos, janela com cortina, ar-condicionado e guarda-roupa branco |
| Composição | Vista da quina da entrada em direção à parede da cama |
| Enquadramento | Câmera a 1,3m de altura, lente equivalente a 24–28mm, verticais retas |
| Posição dos elementos | Cama no terço central; planta e mesa à esquerda; janela no terço direito; guarda-roupa cortado pela borda direita |
| Cenário | Interior, manhã |
| Tipo de imóvel | Kitnet 01, 25 m² |
| Direção fotográfica | Foto de interiores realista, no estilo de um anúncio honesto |
| Iluminação | Luz do dia entrando pela janela à direita, luz de teto acesa e suave |
| Cores predominantes | Branco quente, bege claro, cinza, preto pontual e verde da planta |
| Proporção | 4:3 |
| Resolução | Master 1600 × 1200 px; exportar 1200 × 900, 800 × 600 e 400 × 300 |
| Área livre para texto | Não |
| Posição da área livre | Não se aplica; o canto superior esquerdo recebe o selo de status do card, então deve ficar sem detalhe importante |
| Dispositivo | Ambos |
| Referências | `ref-kitnet-01-mockup.png`, `sglk-busca-kitnets-desktop.png` |
| Restrições | Fiel à miniatura do mockup; quadros sem texto |
| Não deve aparecer | Pessoas, objetos pessoais, texto, logo, marca-d'água, lustre, vista panorâmica, ar de luxo |
| Reuso | Todas as telas com o card 01; cópia `kitnet-01-quarto.png` em `meus - produtos/` |
| Texto alternativo | "Kitnet mobiliada com cama de casal, planta, quadros e janela com cortina clara." |

```text
SGLK BASE PROMPT. BRAND: SGLK (Sistema de Gerenciamento e Locação de Kitnets), a modern Brazilian web platform connecting people searching for compact housing (kitnets, 20-25 m² studios) with small property owners. Users search with filters (neighborhood, price, amenities), see clear listings with photos, price, neighborhood, size and availability ("Disponível" or "Alugado"), and contact the owner directly through WhatsApp. VISUAL IDENTITY: minimal, clean, modern, trustworthy and approachable; premium digital-product aesthetic without looking luxurious; generous negative space; soft off-white and white backgrounds; deep navy as the primary structural color; muted sage green as the main accent; light gray for secondary surfaces and borders; green indicates available properties; signature elements: large soft pale-sage circles, very thin arc lines and softly blurred tropical leaves at the edges. UI DIRECTION: clean responsive web interface floating without any device frame; rounded cards (16 px radius) and panels (24 px radius); rectangular buttons with 12 px radius, not pill-shaped; pill-shaped status tags and filter chips; subtle 1 px light-gray borders; very soft navy-tinted shadows; simple rounded line icons; clear visual hierarchy; minimal interface density; geometric sans-serif typography similar to Plus Jakarta Sans, in sentence case; all interface text in Brazilian Portuguese exactly as quoted in this prompt, and no other text. PHOTOGRAPHIC DIRECTION: realistic Brazilian compact apartments and kitnets in a warm tropical city; plausible small spaces; clean, tidy interiors; neutral materials (warm white walls, light beige porcelain floor tiles, light wood, white cabinets); warm wood and subtle greenery; eye-level camera, straight verticals, no ultra-wide distortion; no luxury penthouses or oversized apartments. LIGHTING: soft natural daylight, diffused shadows, bright but not overexposed, comfortable residential feeling. REALISM: photorealistic architectural photography when showing properties; high-end product visualization when showing the interface; UI elements crisp, intentional and professionally designed. COLOR PALETTE: deep navy #0B2841 (logo, headings, text), interface navy #0C3E66 (primary buttons, selected chips), muted sage green #648B81 (accents), dark sage #45695F ("Disponível" tag with white text), slate gray #636E7B ("Alugado" tag with white text), light cool gray #D7D8DC (borders), off-white #FBFAF8 (backgrounds), warm light gray #F2F1EF (secondary surfaces), white #FFFFFF (cards), WhatsApp button green #15803D with white text. GENERAL CONSISTENCY RULE: Follow the supplied SGLK references exactly. Preserve the same logo, visual identity, color palette, interface language, rounded geometry, typography style and overall product character. PROPERTY CONSISTENCY RULE (when property references are supplied): Follow the supplied property references exactly. Preserve the same architecture, furniture layout, materials, colors, proportions and interior details. RESTRICTIONS: never add unsupported functionality; do not show in-platform payments, checkout, credit cards, rent payment dashboards, digital contracts, electronic signatures, credit scores, internal chat systems, video calls, financial analytics, banking interfaces or luxury real-estate brokerage features; no favorite or heart icons, no maps, no app-store badges, no verification seals; do not change the SGLK logo and do not invent another logo; do not change the brand colors; do not overcrowd the composition; no excessive gradients; no cartoon illustration; no generic corporate stock photography; no unrealistic luxury apartments; no random decorative UI without function; no watermarks; no slogans or headlines outside the interface.

IMAGE BRIEF: 05-kitnet-01-quarto, the cover photo of Kitnet 01. This is a pure interior photograph: no interface, no logo and no text of any kind. Follow the supplied property references exactly. Preserve the same architecture, furniture layout, materials, colors, proportions and interior details. PROPERTY: Kitnet 01, a furnished studio of 25 m² in a city-center building; one rectangular room plus a small bathroom. Warm white walls, light beige 60 x 60 cm porcelain floor tiles, white ceiling with a round flush LED light. Sleeping side: double bed against the back wall with a low dark-gray upholstered headboard, white duvet and a folded mid-gray throw at the foot; small black bedside table with a white ceramic lamp on the left; tall fiddle-leaf fig in a light terracotta pot next to it; two small black-framed botanical prints above the bed; window on the right wall with a white sheer curtain and a white split air conditioner above it; white two-door wardrobe near the entrance. Kitchen side, on the opposite wall: straight 1.6 m kitchenette with white cabinets, light-gray countertop, small stainless-steel sink, black two-burner electric cooktop, compact white fridge and one open light-wood shelf. SHOT: view from the entrance corner toward the bed wall; the bed fills the central third, the plant and the bedside table sit on the left, the window with the sheer curtain and the air conditioner fills the right third, and the edge of the white wardrobe is cut by the right border. Keep the top-left corner calm, because a status tag will sit there. CAMERA: eye-level at 1.3 m, 24-28 mm equivalent lens, straight verticals, no ultra-wide distortion; the room must look its real compact size. LIGHTING: soft morning daylight through the window on the right, ceiling light on and soft, diffused shadows, bright but not overexposed. COLORS: warm white, light beige, soft grays, small black accents and the green of the plant. FORMAT: 4:3 landscape, 1600 x 1200 px. NEGATIVE SPACE: none; the photo is used whole. REALISM: photorealistic real-estate interior photography, honest and unstaged-looking. AVOID: people, personal belongings, text or letters on the prints, logos, watermarks, chandeliers, panoramic views, luxury finishes, oversized room, fisheye distortion.
```

---

### 05 · `05-kitnet-01-cozinha.png`

| Campo | Definição |
|---|---|
| Categoria | Foto de kitnet (demonstração) |
| Seção de uso | Galeria de detalhes da kitnet 01 (Imóveis); miniatura em `07-cadastro-imovel` |
| Objetivo | Mostrar a área de cozinha da mesma kitnet |
| Mensagem | Tudo o que precisa, num espaço bem aproveitado |
| Público principal | Locatário |
| Elemento principal | Cozinha linear de 1,6m com armários brancos |
| Elementos secundários | Geladeira compacta, prateleira de madeira com canecas e planta, borda da cama com a manta cinza no primeiro plano |
| Composição | Vista a partir do lado da cama em direção à parede oposta |
| Enquadramento | Câmera a 1,3m, lente equivalente a 28mm, verticais retas |
| Posição dos elementos | Cozinha no centro; geladeira na ponta direita; borda da cama no canto inferior esquerdo, levemente desfocada |
| Cenário | Interior, manhã |
| Tipo de imóvel | Kitnet 01, 25 m² |
| Direção fotográfica | Foto de interiores realista, estilo anúncio honesto |
| Iluminação | Luz do dia lateral, vinda da janela à esquerda do quadro |
| Cores predominantes | Branco, cinza-claro, preto do cooktop, madeira clara e bege do piso |
| Proporção | 4:3 |
| Resolução | Master 1600 × 1200 px; exportar 1200 × 900, 800 × 600 e 400 × 300 |
| Área livre para texto | Não |
| Posição da área livre | Não se aplica |
| Dispositivo | Ambos |
| Referências | `05-kitnet-01-quarto.png` aprovada, `ref-kitnet-01-mockup.png` |
| Restrições | Mesma kitnet da capa: mesmo piso, paredes, manta e padrão de acabamento |
| Não deve aparecer | Pessoas, eletrodomésticos grandes de luxo, ilha de cozinha, texto, logo, marca-d'água |
| Reuso | Cópia `kitnet-01-cozinha.png` em `meus - produtos/` |
| Texto alternativo | "Cozinha compacta da kitnet mobiliada, com armários brancos, cooktop e geladeira pequena." |

```text
SGLK BASE PROMPT. BRAND: SGLK (Sistema de Gerenciamento e Locação de Kitnets), a modern Brazilian web platform connecting people searching for compact housing (kitnets, 20-25 m² studios) with small property owners. Users search with filters (neighborhood, price, amenities), see clear listings with photos, price, neighborhood, size and availability ("Disponível" or "Alugado"), and contact the owner directly through WhatsApp. VISUAL IDENTITY: minimal, clean, modern, trustworthy and approachable; premium digital-product aesthetic without looking luxurious; generous negative space; soft off-white and white backgrounds; deep navy as the primary structural color; muted sage green as the main accent; light gray for secondary surfaces and borders; green indicates available properties; signature elements: large soft pale-sage circles, very thin arc lines and softly blurred tropical leaves at the edges. UI DIRECTION: clean responsive web interface floating without any device frame; rounded cards (16 px radius) and panels (24 px radius); rectangular buttons with 12 px radius, not pill-shaped; pill-shaped status tags and filter chips; subtle 1 px light-gray borders; very soft navy-tinted shadows; simple rounded line icons; clear visual hierarchy; minimal interface density; geometric sans-serif typography similar to Plus Jakarta Sans, in sentence case; all interface text in Brazilian Portuguese exactly as quoted in this prompt, and no other text. PHOTOGRAPHIC DIRECTION: realistic Brazilian compact apartments and kitnets in a warm tropical city; plausible small spaces; clean, tidy interiors; neutral materials (warm white walls, light beige porcelain floor tiles, light wood, white cabinets); warm wood and subtle greenery; eye-level camera, straight verticals, no ultra-wide distortion; no luxury penthouses or oversized apartments. LIGHTING: soft natural daylight, diffused shadows, bright but not overexposed, comfortable residential feeling. REALISM: photorealistic architectural photography when showing properties; high-end product visualization when showing the interface; UI elements crisp, intentional and professionally designed. COLOR PALETTE: deep navy #0B2841 (logo, headings, text), interface navy #0C3E66 (primary buttons, selected chips), muted sage green #648B81 (accents), dark sage #45695F ("Disponível" tag with white text), slate gray #636E7B ("Alugado" tag with white text), light cool gray #D7D8DC (borders), off-white #FBFAF8 (backgrounds), warm light gray #F2F1EF (secondary surfaces), white #FFFFFF (cards), WhatsApp button green #15803D with white text. GENERAL CONSISTENCY RULE: Follow the supplied SGLK references exactly. Preserve the same logo, visual identity, color palette, interface language, rounded geometry, typography style and overall product character. PROPERTY CONSISTENCY RULE (when property references are supplied): Follow the supplied property references exactly. Preserve the same architecture, furniture layout, materials, colors, proportions and interior details. RESTRICTIONS: never add unsupported functionality; do not show in-platform payments, checkout, credit cards, rent payment dashboards, digital contracts, electronic signatures, credit scores, internal chat systems, video calls, financial analytics, banking interfaces or luxury real-estate brokerage features; no favorite or heart icons, no maps, no app-store badges, no verification seals; do not change the SGLK logo and do not invent another logo; do not change the brand colors; do not overcrowd the composition; no excessive gradients; no cartoon illustration; no generic corporate stock photography; no unrealistic luxury apartments; no random decorative UI without function; no watermarks; no slogans or headlines outside the interface.

IMAGE BRIEF: 05-kitnet-01-cozinha, the kitchenette photo of Kitnet 01. This is a pure interior photograph: no interface, no logo and no text of any kind. Follow the supplied property references exactly. Preserve the same architecture, furniture layout, materials, colors, proportions and interior details. PROPERTY: Kitnet 01, a furnished studio of 25 m² in a city-center building; one rectangular room plus a small bathroom. Warm white walls, light beige 60 x 60 cm porcelain floor tiles, white ceiling with a round flush LED light. Sleeping side: double bed with a low dark-gray upholstered headboard, white duvet and a folded mid-gray throw; black bedside table; tall fiddle-leaf fig; window with a white sheer curtain and a white split air conditioner; white two-door wardrobe near the entrance. Kitchen side, on the wall opposite the bed: straight 1.6 m kitchenette with white cabinets, light-gray countertop, small stainless-steel sink, black two-burner electric cooktop, compact white fridge at the right end and one open light-wood shelf with two mugs and a small potted plant. SHOT: view from the bed side toward the kitchenette wall; the kitchenette is centered, the compact fridge sits at the right end, and the corner of the bed with the folded gray throw appears in the bottom-left foreground, slightly out of focus, proving it is the same studio. CAMERA: eye-level at 1.3 m, 28 mm equivalent lens, straight verticals, no ultra-wide distortion. LIGHTING: soft side daylight from the window at the left of the frame, diffused shadows, bright but not overexposed. COLORS: white, light gray, black cooktop, light wood and beige floor. FORMAT: 4:3 landscape, 1600 x 1200 px. NEGATIVE SPACE: none; the photo is used whole. REALISM: photorealistic real-estate interior photography, honest and plausible. AVOID: people, kitchen island, large luxury appliances, marble, text, logos, watermarks, clutter, oversized space, fisheye distortion.
```

---

### 05 · `05-kitnet-01-banheiro.png`

| Campo | Definição |
|---|---|
| Categoria | Foto de kitnet (demonstração) |
| Seção de uso | Galeria de detalhes da kitnet 01 (Imóveis); miniatura em `07-cadastro-imovel` |
| Objetivo | Mostrar o banheiro da mesma kitnet, sem exagerar o tamanho |
| Mensagem | Banheiro limpo, simples e bem conservado |
| Público principal | Locatário |
| Elemento principal | Pia sobre gabinete de madeira clara, com espelho redondo |
| Elementos secundários | Box de vidro, revestimento branco 30 × 60, toalha branca, janela alta |
| Composição | Vista da porta, de frente para a pia, com o box à direita |
| Enquadramento | Câmera a 1,3m, lente equivalente a 28mm, verticais retas |
| Posição dos elementos | Pia e espelho no centro-esquerda; box no terço direito; janela alta no alto do box |
| Cenário | Interior, dia |
| Tipo de imóvel | Kitnet 01; banheiro de cerca de 1,2 × 2,2m |
| Direção fotográfica | Foto de interiores realista, estilo anúncio honesto |
| Iluminação | Luz do dia pela janela alta, luz do teto acesa |
| Cores predominantes | Branco, bege do piso, madeira clara, detalhes cromados e preto do espelho |
| Proporção | 4:3 |
| Resolução | Master 1600 × 1200 px; exportar 1200 × 900, 800 × 600 e 400 × 300 |
| Área livre para texto | Não |
| Posição da área livre | Não se aplica |
| Dispositivo | Ambos |
| Referências | `05-kitnet-01-quarto.png` aprovada, `05-kitnet-01-cozinha.png` aprovada |
| Restrições | Mesmo padrão de acabamento da kitnet 01; tamanho real de banheiro pequeno |
| Não deve aparecer | Banheira, bancada dupla, mármore, produtos com marca, pessoas, reflexo do fotógrafo no espelho, texto |
| Reuso | Cópia `kitnet-01-banheiro.png` em `meus - produtos/` |
| Texto alternativo | "Banheiro pequeno com pia sobre gabinete de madeira clara, espelho redondo e box de vidro." |

```text
SGLK BASE PROMPT. BRAND: SGLK (Sistema de Gerenciamento e Locação de Kitnets), a modern Brazilian web platform connecting people searching for compact housing (kitnets, 20-25 m² studios) with small property owners. Users search with filters (neighborhood, price, amenities), see clear listings with photos, price, neighborhood, size and availability ("Disponível" or "Alugado"), and contact the owner directly through WhatsApp. VISUAL IDENTITY: minimal, clean, modern, trustworthy and approachable; premium digital-product aesthetic without looking luxurious; generous negative space; soft off-white and white backgrounds; deep navy as the primary structural color; muted sage green as the main accent; light gray for secondary surfaces and borders; green indicates available properties; signature elements: large soft pale-sage circles, very thin arc lines and softly blurred tropical leaves at the edges. UI DIRECTION: clean responsive web interface floating without any device frame; rounded cards (16 px radius) and panels (24 px radius); rectangular buttons with 12 px radius, not pill-shaped; pill-shaped status tags and filter chips; subtle 1 px light-gray borders; very soft navy-tinted shadows; simple rounded line icons; clear visual hierarchy; minimal interface density; geometric sans-serif typography similar to Plus Jakarta Sans, in sentence case; all interface text in Brazilian Portuguese exactly as quoted in this prompt, and no other text. PHOTOGRAPHIC DIRECTION: realistic Brazilian compact apartments and kitnets in a warm tropical city; plausible small spaces; clean, tidy interiors; neutral materials (warm white walls, light beige porcelain floor tiles, light wood, white cabinets); warm wood and subtle greenery; eye-level camera, straight verticals, no ultra-wide distortion; no luxury penthouses or oversized apartments. LIGHTING: soft natural daylight, diffused shadows, bright but not overexposed, comfortable residential feeling. REALISM: photorealistic architectural photography when showing properties; high-end product visualization when showing the interface; UI elements crisp, intentional and professionally designed. COLOR PALETTE: deep navy #0B2841 (logo, headings, text), interface navy #0C3E66 (primary buttons, selected chips), muted sage green #648B81 (accents), dark sage #45695F ("Disponível" tag with white text), slate gray #636E7B ("Alugado" tag with white text), light cool gray #D7D8DC (borders), off-white #FBFAF8 (backgrounds), warm light gray #F2F1EF (secondary surfaces), white #FFFFFF (cards), WhatsApp button green #15803D with white text. GENERAL CONSISTENCY RULE: Follow the supplied SGLK references exactly. Preserve the same logo, visual identity, color palette, interface language, rounded geometry, typography style and overall product character. PROPERTY CONSISTENCY RULE (when property references are supplied): Follow the supplied property references exactly. Preserve the same architecture, furniture layout, materials, colors, proportions and interior details. RESTRICTIONS: never add unsupported functionality; do not show in-platform payments, checkout, credit cards, rent payment dashboards, digital contracts, electronic signatures, credit scores, internal chat systems, video calls, financial analytics, banking interfaces or luxury real-estate brokerage features; no favorite or heart icons, no maps, no app-store badges, no verification seals; do not change the SGLK logo and do not invent another logo; do not change the brand colors; do not overcrowd the composition; no excessive gradients; no cartoon illustration; no generic corporate stock photography; no unrealistic luxury apartments; no random decorative UI without function; no watermarks; no slogans or headlines outside the interface.

IMAGE BRIEF: 05-kitnet-01-banheiro, the bathroom photo of Kitnet 01. This is a pure interior photograph: no interface, no logo and no text of any kind. Follow the supplied property references exactly. Preserve the same architecture, furniture layout, materials, colors, proportions and interior details. PROPERTY: Kitnet 01, a furnished studio of 25 m² with warm white walls, light beige porcelain floor tiles and simple, clean finishes. Its bathroom is small, about 1.2 x 2.2 m: white 30 x 60 cm wall tiles, the same light beige floor tiles as the room, a white sink on a small light-wood cabinet, a round mirror with a thin black frame, a clear glass shower screen, chrome fixtures, one folded white towel and a small high window above the shower. SHOT: view from the doorway, facing the sink; the sink and mirror sit center-left, the glass shower fills the right third, the high window is at the top of the shower area. The mirror reflects only the tiled wall, never the camera or a person. CAMERA: eye-level at 1.3 m, 28 mm equivalent lens, straight verticals, no ultra-wide distortion; the bathroom must look its real small size. LIGHTING: daylight from the high window plus a soft ceiling light, diffused shadows, bright and clean. COLORS: white, light beige, light wood, chrome and a thin black accent. FORMAT: 4:3 landscape, 1600 x 1200 px. NEGATIVE SPACE: none; the photo is used whole. REALISM: photorealistic real-estate interior photography, honest and plausible. AVOID: bathtub, double vanity, marble, branded products, people, the photographer's reflection, text, logos, watermarks, oversized space.
```

---

### 05 · `05-kitnet-01-fachada.png`

| Campo | Definição |
|---|---|
| Categoria | Foto de kitnet (demonstração) |
| Seção de uso | Galeria de detalhes da kitnet 01 (Imóveis); referência de `10-seguranca-confianca` |
| Objetivo | Mostrar o prédio e a entrada da kitnet 01 |
| Mensagem | Um endereço real, simples e bem cuidado |
| Público principal | Locatário |
| Elemento principal | Prédio residencial de dois andares com corredor externo |
| Elementos secundários | Escada de concreto com corrimão preto, portas brancas no andar de cima, portão cinza-escuro, vasos com plantas |
| Composição | Vista da calçada oposta, levemente em diagonal; prédio com 70% da largura |
| Enquadramento | Câmera a 1,5m, lente equivalente a 28mm, verticais corrigidas |
| Posição dos elementos | Prédio centralizado; escada à esquerda; portão na base; céu no quinto superior |
| Cenário | Rua central de uma cidade brasileira quente, manhã, calçada limpa |
| Tipo de imóvel | Prédio da kitnet 01 |
| Direção fotográfica | Foto de arquitetura realista, sem pessoas |
| Iluminação | Sol da manhã em ângulo baixo, sombras suaves |
| Cores predominantes | Cinza-claro, branco, cinza-escuro do portão, verde das plantas e azul-claro do céu |
| Proporção | 4:3 |
| Resolução | Master 1600 × 1200 px; exportar 1200 × 900, 800 × 600 e 400 × 300 |
| Área livre para texto | Não |
| Posição da área livre | Não se aplica |
| Dispositivo | Ambos |
| Referências | `05-kitnet-01-quarto.png` aprovada, `sglk-hero-desktop.png` (só atmosfera) |
| Restrições | Sem números de casa legíveis, placas, nomes de rua ou de comércio; fios aéreos discretos |
| Não deve aparecer | Pessoas, carros estacionados na frente, pichação, lixo, pontos turísticos, marcas |
| Reuso | Referência de `10-seguranca-confianca`; cópia `kitnet-01-fachada.png` em `meus - produtos/` |
| Texto alternativo | "Fachada de prédio residencial de dois andares, com escada externa e portas brancas no andar de cima." |

```text
SGLK BASE PROMPT. BRAND: SGLK (Sistema de Gerenciamento e Locação de Kitnets), a modern Brazilian web platform connecting people searching for compact housing (kitnets, 20-25 m² studios) with small property owners. Users search with filters (neighborhood, price, amenities), see clear listings with photos, price, neighborhood, size and availability ("Disponível" or "Alugado"), and contact the owner directly through WhatsApp. VISUAL IDENTITY: minimal, clean, modern, trustworthy and approachable; premium digital-product aesthetic without looking luxurious; generous negative space; soft off-white and white backgrounds; deep navy as the primary structural color; muted sage green as the main accent; light gray for secondary surfaces and borders; green indicates available properties; signature elements: large soft pale-sage circles, very thin arc lines and softly blurred tropical leaves at the edges. UI DIRECTION: clean responsive web interface floating without any device frame; rounded cards (16 px radius) and panels (24 px radius); rectangular buttons with 12 px radius, not pill-shaped; pill-shaped status tags and filter chips; subtle 1 px light-gray borders; very soft navy-tinted shadows; simple rounded line icons; clear visual hierarchy; minimal interface density; geometric sans-serif typography similar to Plus Jakarta Sans, in sentence case; all interface text in Brazilian Portuguese exactly as quoted in this prompt, and no other text. PHOTOGRAPHIC DIRECTION: realistic Brazilian compact apartments and kitnets in a warm tropical city; plausible small spaces; clean, tidy interiors; neutral materials (warm white walls, light beige porcelain floor tiles, light wood, white cabinets); warm wood and subtle greenery; eye-level camera, straight verticals, no ultra-wide distortion; no luxury penthouses or oversized apartments. LIGHTING: soft natural daylight, diffused shadows, bright but not overexposed, comfortable residential feeling. REALISM: photorealistic architectural photography when showing properties; high-end product visualization when showing the interface; UI elements crisp, intentional and professionally designed. COLOR PALETTE: deep navy #0B2841 (logo, headings, text), interface navy #0C3E66 (primary buttons, selected chips), muted sage green #648B81 (accents), dark sage #45695F ("Disponível" tag with white text), slate gray #636E7B ("Alugado" tag with white text), light cool gray #D7D8DC (borders), off-white #FBFAF8 (backgrounds), warm light gray #F2F1EF (secondary surfaces), white #FFFFFF (cards), WhatsApp button green #15803D with white text. GENERAL CONSISTENCY RULE: Follow the supplied SGLK references exactly. Preserve the same logo, visual identity, color palette, interface language, rounded geometry, typography style and overall product character. PROPERTY CONSISTENCY RULE (when property references are supplied): Follow the supplied property references exactly. Preserve the same architecture, furniture layout, materials, colors, proportions and interior details. RESTRICTIONS: never add unsupported functionality; do not show in-platform payments, checkout, credit cards, rent payment dashboards, digital contracts, electronic signatures, credit scores, internal chat systems, video calls, financial analytics, banking interfaces or luxury real-estate brokerage features; no favorite or heart icons, no maps, no app-store badges, no verification seals; do not change the SGLK logo and do not invent another logo; do not change the brand colors; do not overcrowd the composition; no excessive gradients; no cartoon illustration; no generic corporate stock photography; no unrealistic luxury apartments; no random decorative UI without function; no watermarks; no slogans or headlines outside the interface.

IMAGE BRIEF: 05-kitnet-01-fachada, the building photo of Kitnet 01. This is a pure architectural photograph: no interface, no logo and no text of any kind. Follow the supplied property references exactly. PROPERTY: Kitnet 01 is a furnished studio in a small two-story residential building on a city-center street: light-gray and white painted walls, an external concrete staircase with a black metal handrail on the left, a row of white doors along an open upper corridor with a simple black railing, a dark-gray metal gate at street level, a few potted plants by the entrance, clean sidewalk. The building is modest, well kept and typical of a warm Brazilian city, never luxurious. SHOT: view from the opposite sidewalk, slightly diagonal; the building fills about 70% of the width, the staircase on the left, the gate at the base, sky in the top fifth of the frame. CAMERA: 1.5 m high, 28 mm equivalent lens, corrected verticals. SCENE: sunny morning, pale blue sky with light haze, discreet overhead wires, no people, no parked cars in front of the building. LIGHTING: low morning sun, soft shadows, bright but not overexposed. COLORS: light gray, white, dark-gray gate, plant greens and pale blue sky. FORMAT: 4:3 landscape, 1600 x 1200 px. NEGATIVE SPACE: none; the photo is used whole. REALISM: photorealistic real-estate exterior photography, honest and plausible. AVOID: readable house numbers, signs, street names, shop names, brands, graffiti, trash, people, parked cars, landmarks, luxury architecture, dramatic sky.
```

---

### 05 · `05-kitnet-02-cozinha.png`

| Campo | Definição |
|---|---|
| Categoria | Foto de kitnet (demonstração) |
| Seção de uso | Capa da kitnet 02 nos cards (Home > Kitnets em destaque; Imóveis); 1ª foto da galeria; foto dentro dos cards nas telas |
| Objetivo | Mostrar a cozinha moderna e equipada da kitnet 02 |
| Mensagem | Moderna, prática e pronta para usar |
| Público principal | Locatário |
| Elemento principal | Parede da cozinha com armários grafite e geladeira branca alta |
| Elementos secundários | Janela de caixilho preto com ervas, forno embutido, mesa quadrada de madeira com 2 cadeiras e uma planta |
| Composição | Vista do meio do cômodo para a parede da cozinha |
| Enquadramento | Câmera a 1,3m, lente equivalente a 24–28mm, verticais retas |
| Posição dos elementos | Geladeira no terço esquerdo; pia e janela no centro; mesa e cadeiras no terço direito, mais perto da câmera |
| Cenário | Interior, manhã |
| Tipo de imóvel | Kitnet 02, 20 m² |
| Direção fotográfica | Foto de interiores realista, estilo anúncio honesto |
| Iluminação | Luz do dia pela janela sobre a pia, sombras suaves |
| Cores predominantes | Grafite, branco, madeira clara, bege do piso e verde das ervas |
| Proporção | 4:3 |
| Resolução | Master 1600 × 1200 px; exportar 1200 × 900, 800 × 600 e 400 × 300 |
| Área livre para texto | Não |
| Posição da área livre | Não se aplica; canto superior esquerdo sem detalhe importante (selo do card) |
| Dispositivo | Ambos |
| Referências | `ref-kitnet-02-mockup.png`, `sglk-busca-kitnets-desktop.png` |
| Restrições | Fiel à miniatura do mockup |
| Não deve aparecer | Pessoas, ilha de cozinha, mármore, eletrodomésticos de luxo, texto, logo, marca-d'água |
| Reuso | Todas as telas com o card 02; cópia `kitnet-02-cozinha.png` em `meus - produtos/` |
| Texto alternativo | "Cozinha compacta com armários grafite, geladeira branca e mesa de madeira para duas pessoas." |

```text
SGLK BASE PROMPT. BRAND: SGLK (Sistema de Gerenciamento e Locação de Kitnets), a modern Brazilian web platform connecting people searching for compact housing (kitnets, 20-25 m² studios) with small property owners. Users search with filters (neighborhood, price, amenities), see clear listings with photos, price, neighborhood, size and availability ("Disponível" or "Alugado"), and contact the owner directly through WhatsApp. VISUAL IDENTITY: minimal, clean, modern, trustworthy and approachable; premium digital-product aesthetic without looking luxurious; generous negative space; soft off-white and white backgrounds; deep navy as the primary structural color; muted sage green as the main accent; light gray for secondary surfaces and borders; green indicates available properties; signature elements: large soft pale-sage circles, very thin arc lines and softly blurred tropical leaves at the edges. UI DIRECTION: clean responsive web interface floating without any device frame; rounded cards (16 px radius) and panels (24 px radius); rectangular buttons with 12 px radius, not pill-shaped; pill-shaped status tags and filter chips; subtle 1 px light-gray borders; very soft navy-tinted shadows; simple rounded line icons; clear visual hierarchy; minimal interface density; geometric sans-serif typography similar to Plus Jakarta Sans, in sentence case; all interface text in Brazilian Portuguese exactly as quoted in this prompt, and no other text. PHOTOGRAPHIC DIRECTION: realistic Brazilian compact apartments and kitnets in a warm tropical city; plausible small spaces; clean, tidy interiors; neutral materials (warm white walls, light beige porcelain floor tiles, light wood, white cabinets); warm wood and subtle greenery; eye-level camera, straight verticals, no ultra-wide distortion; no luxury penthouses or oversized apartments. LIGHTING: soft natural daylight, diffused shadows, bright but not overexposed, comfortable residential feeling. REALISM: photorealistic architectural photography when showing properties; high-end product visualization when showing the interface; UI elements crisp, intentional and professionally designed. COLOR PALETTE: deep navy #0B2841 (logo, headings, text), interface navy #0C3E66 (primary buttons, selected chips), muted sage green #648B81 (accents), dark sage #45695F ("Disponível" tag with white text), slate gray #636E7B ("Alugado" tag with white text), light cool gray #D7D8DC (borders), off-white #FBFAF8 (backgrounds), warm light gray #F2F1EF (secondary surfaces), white #FFFFFF (cards), WhatsApp button green #15803D with white text. GENERAL CONSISTENCY RULE: Follow the supplied SGLK references exactly. Preserve the same logo, visual identity, color palette, interface language, rounded geometry, typography style and overall product character. PROPERTY CONSISTENCY RULE (when property references are supplied): Follow the supplied property references exactly. Preserve the same architecture, furniture layout, materials, colors, proportions and interior details. RESTRICTIONS: never add unsupported functionality; do not show in-platform payments, checkout, credit cards, rent payment dashboards, digital contracts, electronic signatures, credit scores, internal chat systems, video calls, financial analytics, banking interfaces or luxury real-estate brokerage features; no favorite or heart icons, no maps, no app-store badges, no verification seals; do not change the SGLK logo and do not invent another logo; do not change the brand colors; do not overcrowd the composition; no excessive gradients; no cartoon illustration; no generic corporate stock photography; no unrealistic luxury apartments; no random decorative UI without function; no watermarks; no slogans or headlines outside the interface.

IMAGE BRIEF: 05-kitnet-02-cozinha, the cover photo of Kitnet 02. This is a pure interior photograph: no interface, no logo and no text of any kind. Follow the supplied property references exactly. Preserve the same architecture, furniture layout, materials, colors, proportions and interior details. PROPERTY: Kitnet 02, a modern studio of 20 m²; one compact room with a kitchenette wall and a sleeping corner, plus a small bathroom. Warm white walls, light beige porcelain floor. Kitchenette: tall white freestanding fridge on the left, matte charcoal lower and upper cabinets, white countertop, stainless-steel sink under a black-framed window with two small potted herbs on the sill, built-in stainless oven with a four-burner cooktop, small square light-wood dining table with two light-wood chairs and a potted plant on it. Sleeping corner (not visible in this shot): double bed with light-gray bedding and a charcoal throw, black metal clothes rail with a few plain hangers, small black side table, window with a white roller blind. SHOT: view from the middle of the room toward the kitchenette wall; the white fridge fills the left third, the sink and window sit in the center, the table and two chairs occupy the right third, closer to the camera. Keep the top-left corner calm, because a status tag will sit there. CAMERA: eye-level at 1.3 m, 24-28 mm equivalent lens, straight verticals, no ultra-wide distortion; the room must look its real compact size. LIGHTING: soft morning daylight through the window above the sink, diffused shadows, bright but not overexposed. COLORS: matte charcoal, white, light wood, beige floor and the green of the herbs and plant. FORMAT: 4:3 landscape, 1600 x 1200 px. NEGATIVE SPACE: none; the photo is used whole. REALISM: photorealistic real-estate interior photography, honest and plausible. AVOID: people, kitchen island, marble, luxury appliances, clutter, text, logos, watermarks, oversized space, fisheye distortion.
```

---

### 05 · `05-kitnet-02-quarto.png`

| Campo | Definição |
|---|---|
| Categoria | Foto de kitnet (demonstração) |
| Seção de uso | Galeria de detalhes da kitnet 02 (Imóveis) |
| Objetivo | Mostrar o canto de dormir da mesma kitnet |
| Mensagem | Tudo num só ambiente, bem organizado |
| Público principal | Locatário |
| Elemento principal | Cama de casal com roupa de cama cinza-clara e manta grafite |
| Elementos secundários | Arara preta com cabides lisos, mesa lateral preta, janela com persiana branca, quina dos armários grafite e da geladeira branca na borda |
| Composição | Vista a partir da mesa em direção ao canto de dormir |
| Enquadramento | Câmera a 1,3m, lente equivalente a 28mm, verticais retas |
| Posição dos elementos | Cama no centro; arara à direita; janela acima da cama; quina da cozinha na borda esquerda |
| Cenário | Interior, manhã |
| Tipo de imóvel | Kitnet 02, 20 m² |
| Direção fotográfica | Foto de interiores realista, estilo anúncio honesto |
| Iluminação | Luz do dia filtrada pela persiana, sombras suaves |
| Cores predominantes | Cinza-claro, grafite, branco, preto pontual e bege do piso |
| Proporção | 4:3 |
| Resolução | Master 1600 × 1200 px; exportar 1200 × 900, 800 × 600 e 400 × 300 |
| Área livre para texto | Não |
| Posição da área livre | Não se aplica |
| Dispositivo | Ambos |
| Referências | `05-kitnet-02-cozinha.png` aprovada, `ref-kitnet-02-mockup.png` |
| Restrições | Mesma kitnet da capa: mesmo piso, paredes e armários grafite |
| Não deve aparecer | Roupas penduradas, objetos pessoais, pessoas, texto, logo, marca-d'água |
| Reuso | Cópia `kitnet-02-quarto.png` em `meus - produtos/` |
| Texto alternativo | "Canto de dormir da kitnet moderna, com cama de casal, arara e janela com persiana." |

```text
SGLK BASE PROMPT. BRAND: SGLK (Sistema de Gerenciamento e Locação de Kitnets), a modern Brazilian web platform connecting people searching for compact housing (kitnets, 20-25 m² studios) with small property owners. Users search with filters (neighborhood, price, amenities), see clear listings with photos, price, neighborhood, size and availability ("Disponível" or "Alugado"), and contact the owner directly through WhatsApp. VISUAL IDENTITY: minimal, clean, modern, trustworthy and approachable; premium digital-product aesthetic without looking luxurious; generous negative space; soft off-white and white backgrounds; deep navy as the primary structural color; muted sage green as the main accent; light gray for secondary surfaces and borders; green indicates available properties; signature elements: large soft pale-sage circles, very thin arc lines and softly blurred tropical leaves at the edges. UI DIRECTION: clean responsive web interface floating without any device frame; rounded cards (16 px radius) and panels (24 px radius); rectangular buttons with 12 px radius, not pill-shaped; pill-shaped status tags and filter chips; subtle 1 px light-gray borders; very soft navy-tinted shadows; simple rounded line icons; clear visual hierarchy; minimal interface density; geometric sans-serif typography similar to Plus Jakarta Sans, in sentence case; all interface text in Brazilian Portuguese exactly as quoted in this prompt, and no other text. PHOTOGRAPHIC DIRECTION: realistic Brazilian compact apartments and kitnets in a warm tropical city; plausible small spaces; clean, tidy interiors; neutral materials (warm white walls, light beige porcelain floor tiles, light wood, white cabinets); warm wood and subtle greenery; eye-level camera, straight verticals, no ultra-wide distortion; no luxury penthouses or oversized apartments. LIGHTING: soft natural daylight, diffused shadows, bright but not overexposed, comfortable residential feeling. REALISM: photorealistic architectural photography when showing properties; high-end product visualization when showing the interface; UI elements crisp, intentional and professionally designed. COLOR PALETTE: deep navy #0B2841 (logo, headings, text), interface navy #0C3E66 (primary buttons, selected chips), muted sage green #648B81 (accents), dark sage #45695F ("Disponível" tag with white text), slate gray #636E7B ("Alugado" tag with white text), light cool gray #D7D8DC (borders), off-white #FBFAF8 (backgrounds), warm light gray #F2F1EF (secondary surfaces), white #FFFFFF (cards), WhatsApp button green #15803D with white text. GENERAL CONSISTENCY RULE: Follow the supplied SGLK references exactly. Preserve the same logo, visual identity, color palette, interface language, rounded geometry, typography style and overall product character. PROPERTY CONSISTENCY RULE (when property references are supplied): Follow the supplied property references exactly. Preserve the same architecture, furniture layout, materials, colors, proportions and interior details. RESTRICTIONS: never add unsupported functionality; do not show in-platform payments, checkout, credit cards, rent payment dashboards, digital contracts, electronic signatures, credit scores, internal chat systems, video calls, financial analytics, banking interfaces or luxury real-estate brokerage features; no favorite or heart icons, no maps, no app-store badges, no verification seals; do not change the SGLK logo and do not invent another logo; do not change the brand colors; do not overcrowd the composition; no excessive gradients; no cartoon illustration; no generic corporate stock photography; no unrealistic luxury apartments; no random decorative UI without function; no watermarks; no slogans or headlines outside the interface.

IMAGE BRIEF: 05-kitnet-02-quarto, the sleeping-corner photo of Kitnet 02. This is a pure interior photograph: no interface, no logo and no text of any kind. Follow the supplied property references exactly. Preserve the same architecture, furniture layout, materials, colors, proportions and interior details. PROPERTY: Kitnet 02, a modern studio of 20 m²; one compact room with a kitchenette wall and a sleeping corner, plus a small bathroom. Warm white walls, light beige porcelain floor. Kitchenette: tall white freestanding fridge, matte charcoal lower and upper cabinets, white countertop, black-framed window, small square light-wood table with two chairs. Sleeping corner: double bed with light-gray bedding and a charcoal throw, black metal clothes rail with a few plain wooden hangers and no clothes, small black side table, window above the bed with a white roller blind half open. SHOT: view from the dining table toward the sleeping corner; the bed sits in the center, the clothes rail on the right, the window above the bed, and the edge of the charcoal cabinets and the white fridge appears at the left border, proving it is the same studio. CAMERA: eye-level at 1.3 m, 28 mm equivalent lens, straight verticals, no ultra-wide distortion. LIGHTING: soft daylight filtered by the roller blind, diffused shadows, bright but not overexposed. COLORS: light gray, charcoal, white, small black accents and beige floor. FORMAT: 4:3 landscape, 1600 x 1200 px. NEGATIVE SPACE: none; the photo is used whole. REALISM: photorealistic real-estate interior photography, honest and plausible. AVOID: hanging clothes, personal belongings, people, text, logos, watermarks, luxury decor, oversized room.
```

---

### 05 · `05-kitnet-02-banheiro.png`

| Campo | Definição |
|---|---|
| Categoria | Foto de kitnet (demonstração) |
| Seção de uso | Galeria de detalhes da kitnet 02 (Imóveis) |
| Objetivo | Mostrar o banheiro moderno da mesma kitnet |
| Mensagem | Acabamento atual e fácil de cuidar |
| Público principal | Locatário |
| Elemento principal | Box com caixilho preto e pia branca suspensa com torneira preta |
| Elementos secundários | Porcelanato cinza-claro, espelho retangular de moldura preta, toalha cinza |
| Composição | Vista da porta, pia à esquerda e box ao fundo, à direita |
| Enquadramento | Câmera a 1,3m, lente equivalente a 28mm, verticais retas |
| Posição dos elementos | Pia e espelho no terço esquerdo; box no centro-direita |
| Cenário | Interior, dia |
| Tipo de imóvel | Kitnet 02; banheiro pequeno |
| Direção fotográfica | Foto de interiores realista, estilo anúncio honesto |
| Iluminação | Luz de teto branca e suave, luz do dia vinda de um basculante |
| Cores predominantes | Cinza-claro, branco e preto |
| Proporção | 4:3 |
| Resolução | Master 1600 × 1200 px; exportar 1200 × 900, 800 × 600 e 400 × 300 |
| Área livre para texto | Não |
| Posição da área livre | Não se aplica |
| Dispositivo | Ambos |
| Referências | `05-kitnet-02-cozinha.png` aprovada, `05-kitnet-02-quarto.png` aprovada |
| Restrições | Mesmo estilo moderno com detalhes pretos da kitnet 02; tamanho real de banheiro pequeno |
| Não deve aparecer | Banheira, mármore, fita de LED, produtos com marca, reflexo do fotógrafo, pessoas, texto |
| Reuso | Cópia `kitnet-02-banheiro.png` em `meus - produtos/` |
| Texto alternativo | "Banheiro moderno com porcelanato cinza-claro, pia suspensa e box de vidro com caixilho preto." |

```text
SGLK BASE PROMPT. BRAND: SGLK (Sistema de Gerenciamento e Locação de Kitnets), a modern Brazilian web platform connecting people searching for compact housing (kitnets, 20-25 m² studios) with small property owners. Users search with filters (neighborhood, price, amenities), see clear listings with photos, price, neighborhood, size and availability ("Disponível" or "Alugado"), and contact the owner directly through WhatsApp. VISUAL IDENTITY: minimal, clean, modern, trustworthy and approachable; premium digital-product aesthetic without looking luxurious; generous negative space; soft off-white and white backgrounds; deep navy as the primary structural color; muted sage green as the main accent; light gray for secondary surfaces and borders; green indicates available properties; signature elements: large soft pale-sage circles, very thin arc lines and softly blurred tropical leaves at the edges. UI DIRECTION: clean responsive web interface floating without any device frame; rounded cards (16 px radius) and panels (24 px radius); rectangular buttons with 12 px radius, not pill-shaped; pill-shaped status tags and filter chips; subtle 1 px light-gray borders; very soft navy-tinted shadows; simple rounded line icons; clear visual hierarchy; minimal interface density; geometric sans-serif typography similar to Plus Jakarta Sans, in sentence case; all interface text in Brazilian Portuguese exactly as quoted in this prompt, and no other text. PHOTOGRAPHIC DIRECTION: realistic Brazilian compact apartments and kitnets in a warm tropical city; plausible small spaces; clean, tidy interiors; neutral materials (warm white walls, light beige porcelain floor tiles, light wood, white cabinets); warm wood and subtle greenery; eye-level camera, straight verticals, no ultra-wide distortion; no luxury penthouses or oversized apartments. LIGHTING: soft natural daylight, diffused shadows, bright but not overexposed, comfortable residential feeling. REALISM: photorealistic architectural photography when showing properties; high-end product visualization when showing the interface; UI elements crisp, intentional and professionally designed. COLOR PALETTE: deep navy #0B2841 (logo, headings, text), interface navy #0C3E66 (primary buttons, selected chips), muted sage green #648B81 (accents), dark sage #45695F ("Disponível" tag with white text), slate gray #636E7B ("Alugado" tag with white text), light cool gray #D7D8DC (borders), off-white #FBFAF8 (backgrounds), warm light gray #F2F1EF (secondary surfaces), white #FFFFFF (cards), WhatsApp button green #15803D with white text. GENERAL CONSISTENCY RULE: Follow the supplied SGLK references exactly. Preserve the same logo, visual identity, color palette, interface language, rounded geometry, typography style and overall product character. PROPERTY CONSISTENCY RULE (when property references are supplied): Follow the supplied property references exactly. Preserve the same architecture, furniture layout, materials, colors, proportions and interior details. RESTRICTIONS: never add unsupported functionality; do not show in-platform payments, checkout, credit cards, rent payment dashboards, digital contracts, electronic signatures, credit scores, internal chat systems, video calls, financial analytics, banking interfaces or luxury real-estate brokerage features; no favorite or heart icons, no maps, no app-store badges, no verification seals; do not change the SGLK logo and do not invent another logo; do not change the brand colors; do not overcrowd the composition; no excessive gradients; no cartoon illustration; no generic corporate stock photography; no unrealistic luxury apartments; no random decorative UI without function; no watermarks; no slogans or headlines outside the interface.

IMAGE BRIEF: 05-kitnet-02-banheiro, the bathroom photo of Kitnet 02. This is a pure interior photograph: no interface, no logo and no text of any kind. Follow the supplied property references exactly. Preserve the same architecture, furniture layout, materials, colors, proportions and interior details. PROPERTY: Kitnet 02, a modern studio of 20 m² with warm white walls, matte charcoal kitchen cabinets and small black accents throughout. Its small bathroom has light-gray large-format porcelain tiles on walls and floor, a black-framed glass shower, a floating white sink with a matte black faucet, a simple rectangular mirror with a thin black frame, one folded gray towel and a small tilting window near the ceiling. SHOT: view from the doorway; the sink and mirror fill the left third, the black-framed shower sits center-right in the background. The mirror reflects only the tiled wall, never the camera or a person. CAMERA: eye-level at 1.3 m, 28 mm equivalent lens, straight verticals, no ultra-wide distortion; the bathroom must look its real small size. LIGHTING: soft white ceiling light plus daylight from the small window, diffused shadows, clean and bright. COLORS: light gray, white and black. FORMAT: 4:3 landscape, 1600 x 1200 px. NEGATIVE SPACE: none; the photo is used whole. REALISM: photorealistic real-estate interior photography, honest and plausible. AVOID: bathtub, marble, LED strips, branded products, the photographer's reflection, people, text, logos, watermarks, oversized space.
```

---

### 05 · `05-kitnet-02-fachada.png`

| Campo | Definição |
|---|---|
| Categoria | Foto de kitnet (demonstração) |
| Seção de uso | Galeria de detalhes da kitnet 02 (Imóveis); referência obrigatória do topo (01) |
| Objetivo | Mostrar o prédio moderno da kitnet 02 |
| Mensagem | Prédio novo, bem cuidado e cercado de verde |
| Público principal | Locatário |
| Elemento principal | Prédio de três andares com reboco branco e cinza-claro e varandas de gradil preto |
| Elementos secundários | Árvores tropicais, muro baixo com portão preto, jardim estreito |
| Composição | Vista da calçada, de baixo para cima, suave; prédio com 75% da largura |
| Enquadramento | Câmera a 1,5m, lente equivalente a 28mm, verticais corrigidas |
| Posição dos elementos | Prédio centralizado à direita; árvore na borda esquerda; céu no quarto superior |
| Cenário | Rua residencial arborizada numa cidade brasileira quente, manhã de sol |
| Tipo de imóvel | Prédio da kitnet 02 |
| Direção fotográfica | Foto de arquitetura realista, sem pessoas |
| Iluminação | Sol da manhã vindo da esquerda, sombras suaves |
| Cores predominantes | Branco, cinza-claro, preto dos caixilhos, verde das árvores e azul-claro do céu |
| Proporção | 4:3 |
| Resolução | Master 1600 × 1200 px; exportar 1200 × 900, 800 × 600 e 400 × 300 |
| Área livre para texto | Não |
| Posição da área livre | Não se aplica |
| Dispositivo | Ambos |
| Referências | `sglk-hero-desktop.png` (o prédio do fundo), `05-kitnet-02-cozinha.png` aprovada |
| Restrições | Mesmo prédio do mockup de topo; sem números, placas ou nomes |
| Não deve aparecer | Pessoas, carros, placas, marcas, cobertura de luxo, piscina, céu dramático |
| Reuso | Fundo de `01-hero-sglk-desktop` e `01-hero-sglk-mobile`; cópia `kitnet-02-fachada.png` em `meus - produtos/` |
| Texto alternativo | "Prédio residencial moderno de três andares, com varandas de gradil preto e árvores na frente." |

```text
SGLK BASE PROMPT. BRAND: SGLK (Sistema de Gerenciamento e Locação de Kitnets), a modern Brazilian web platform connecting people searching for compact housing (kitnets, 20-25 m² studios) with small property owners. Users search with filters (neighborhood, price, amenities), see clear listings with photos, price, neighborhood, size and availability ("Disponível" or "Alugado"), and contact the owner directly through WhatsApp. VISUAL IDENTITY: minimal, clean, modern, trustworthy and approachable; premium digital-product aesthetic without looking luxurious; generous negative space; soft off-white and white backgrounds; deep navy as the primary structural color; muted sage green as the main accent; light gray for secondary surfaces and borders; green indicates available properties; signature elements: large soft pale-sage circles, very thin arc lines and softly blurred tropical leaves at the edges. UI DIRECTION: clean responsive web interface floating without any device frame; rounded cards (16 px radius) and panels (24 px radius); rectangular buttons with 12 px radius, not pill-shaped; pill-shaped status tags and filter chips; subtle 1 px light-gray borders; very soft navy-tinted shadows; simple rounded line icons; clear visual hierarchy; minimal interface density; geometric sans-serif typography similar to Plus Jakarta Sans, in sentence case; all interface text in Brazilian Portuguese exactly as quoted in this prompt, and no other text. PHOTOGRAPHIC DIRECTION: realistic Brazilian compact apartments and kitnets in a warm tropical city; plausible small spaces; clean, tidy interiors; neutral materials (warm white walls, light beige porcelain floor tiles, light wood, white cabinets); warm wood and subtle greenery; eye-level camera, straight verticals, no ultra-wide distortion; no luxury penthouses or oversized apartments. LIGHTING: soft natural daylight, diffused shadows, bright but not overexposed, comfortable residential feeling. REALISM: photorealistic architectural photography when showing properties; high-end product visualization when showing the interface; UI elements crisp, intentional and professionally designed. COLOR PALETTE: deep navy #0B2841 (logo, headings, text), interface navy #0C3E66 (primary buttons, selected chips), muted sage green #648B81 (accents), dark sage #45695F ("Disponível" tag with white text), slate gray #636E7B ("Alugado" tag with white text), light cool gray #D7D8DC (borders), off-white #FBFAF8 (backgrounds), warm light gray #F2F1EF (secondary surfaces), white #FFFFFF (cards), WhatsApp button green #15803D with white text. GENERAL CONSISTENCY RULE: Follow the supplied SGLK references exactly. Preserve the same logo, visual identity, color palette, interface language, rounded geometry, typography style and overall product character. PROPERTY CONSISTENCY RULE (when property references are supplied): Follow the supplied property references exactly. Preserve the same architecture, furniture layout, materials, colors, proportions and interior details. RESTRICTIONS: never add unsupported functionality; do not show in-platform payments, checkout, credit cards, rent payment dashboards, digital contracts, electronic signatures, credit scores, internal chat systems, video calls, financial analytics, banking interfaces or luxury real-estate brokerage features; no favorite or heart icons, no maps, no app-store badges, no verification seals; do not change the SGLK logo and do not invent another logo; do not change the brand colors; do not overcrowd the composition; no excessive gradients; no cartoon illustration; no generic corporate stock photography; no unrealistic luxury apartments; no random decorative UI without function; no watermarks; no slogans or headlines outside the interface.

IMAGE BRIEF: 05-kitnet-02-fachada, the building photo of Kitnet 02. This is a pure architectural photograph: no interface, no logo and no text of any kind. Follow the supplied property references exactly. Preserve the same architecture, proportions and details of the white building shown in the supplied SGLK hero reference. PROPERTY: Kitnet 02 is a modern studio in a three-story residential building with white and light-gray render, black window frames, small balconies with thin black metal railings, tropical trees in front, a narrow front garden and a low front wall with a black metal gate. The building is new and well kept, but modest in size, never a luxury tower. SHOT: view from the sidewalk, looking slightly up; the building fills about 75% of the width, center-right; a tree enters at the left border; sky in the top quarter of the frame. CAMERA: 1.5 m high, 28 mm equivalent lens, corrected verticals. SCENE: tree-lined residential street in a warm Brazilian city, sunny morning, pale blue sky with light haze, no people, no cars. LIGHTING: morning sun from the left, soft shadows, bright but not overexposed. COLORS: white, light gray, black frames, tree greens and pale blue sky. FORMAT: 4:3 landscape, 1600 x 1200 px. NEGATIVE SPACE: none; the photo is used whole. REALISM: photorealistic architectural photography, honest and plausible. AVOID: people, cars, readable numbers, signs, brands, penthouse, swimming pool, glass tower, dramatic sky, text, logos, watermarks.
```

---

### 05 · `05-kitnet-03-quarto.png`

| Campo | Definição |
|---|---|
| Categoria | Foto de kitnet (demonstração) |
| Seção de uso | Capa da kitnet 03 nos cards (Home > Kitnets em destaque; Imóveis); 1ª foto da galeria; foto dentro dos cards nas telas |
| Objetivo | Mostrar o ambiente aconchegante da kitnet 03 |
| Mensagem | Aconchego e um cantinho para estudar |
| Público principal | Locatário, principalmente estudantes |
| Elemento principal | Cama de casal com roupa de cama branca e manta bege |
| Elementos secundários | Estante aberta de madeira clara com livros, cestos e plantas; planta alta no chão; janela com cortina; tapete de juta; ponta da mesa de estudo |
| Composição | Vista diagonal a partir do pé da cama |
| Enquadramento | Câmera a 1,3m, lente equivalente a 24–28mm, verticais retas |
| Posição dos elementos | Cama no centro-esquerda; estante no terço direito; planta na borda esquerda; mesa de estudo cortada na borda direita, perto da janela |
| Cenário | Interior, fim de tarde |
| Tipo de imóvel | Kitnet 03, 22 m² |
| Direção fotográfica | Foto de interiores realista, estilo anúncio honesto |
| Iluminação | Luz da tarde quente e suave pela janela |
| Cores predominantes | Branco, bege, madeira clara, fibra natural e verde das plantas |
| Proporção | 4:3 |
| Resolução | Master 1600 × 1200 px; exportar 1200 × 900, 800 × 600 e 400 × 300 |
| Área livre para texto | Não |
| Posição da área livre | Não se aplica; canto superior esquerdo sem detalhe importante (selo do card) |
| Dispositivo | Ambos |
| Referências | `ref-kitnet-03-mockup.png`, `sglk-busca-kitnets-desktop.png` |
| Restrições | Fiel à miniatura do mockup; lombadas dos livros sem texto legível |
| Não deve aparecer | Pessoas, objetos pessoais, texto legível, logo, marca-d'água, decoração de luxo |
| Reuso | Todas as telas com o card 03; cópia `kitnet-03-quarto.png` em `meus - produtos/` |
| Texto alternativo | "Kitnet aconchegante com cama de casal, estante de madeira clara com livros e plantas e tapete de juta." |

```text
SGLK BASE PROMPT. BRAND: SGLK (Sistema de Gerenciamento e Locação de Kitnets), a modern Brazilian web platform connecting people searching for compact housing (kitnets, 20-25 m² studios) with small property owners. Users search with filters (neighborhood, price, amenities), see clear listings with photos, price, neighborhood, size and availability ("Disponível" or "Alugado"), and contact the owner directly through WhatsApp. VISUAL IDENTITY: minimal, clean, modern, trustworthy and approachable; premium digital-product aesthetic without looking luxurious; generous negative space; soft off-white and white backgrounds; deep navy as the primary structural color; muted sage green as the main accent; light gray for secondary surfaces and borders; green indicates available properties; signature elements: large soft pale-sage circles, very thin arc lines and softly blurred tropical leaves at the edges. UI DIRECTION: clean responsive web interface floating without any device frame; rounded cards (16 px radius) and panels (24 px radius); rectangular buttons with 12 px radius, not pill-shaped; pill-shaped status tags and filter chips; subtle 1 px light-gray borders; very soft navy-tinted shadows; simple rounded line icons; clear visual hierarchy; minimal interface density; geometric sans-serif typography similar to Plus Jakarta Sans, in sentence case; all interface text in Brazilian Portuguese exactly as quoted in this prompt, and no other text. PHOTOGRAPHIC DIRECTION: realistic Brazilian compact apartments and kitnets in a warm tropical city; plausible small spaces; clean, tidy interiors; neutral materials (warm white walls, light beige porcelain floor tiles, light wood, white cabinets); warm wood and subtle greenery; eye-level camera, straight verticals, no ultra-wide distortion; no luxury penthouses or oversized apartments. LIGHTING: soft natural daylight, diffused shadows, bright but not overexposed, comfortable residential feeling. REALISM: photorealistic architectural photography when showing properties; high-end product visualization when showing the interface; UI elements crisp, intentional and professionally designed. COLOR PALETTE: deep navy #0B2841 (logo, headings, text), interface navy #0C3E66 (primary buttons, selected chips), muted sage green #648B81 (accents), dark sage #45695F ("Disponível" tag with white text), slate gray #636E7B ("Alugado" tag with white text), light cool gray #D7D8DC (borders), off-white #FBFAF8 (backgrounds), warm light gray #F2F1EF (secondary surfaces), white #FFFFFF (cards), WhatsApp button green #15803D with white text. GENERAL CONSISTENCY RULE: Follow the supplied SGLK references exactly. Preserve the same logo, visual identity, color palette, interface language, rounded geometry, typography style and overall product character. PROPERTY CONSISTENCY RULE (when property references are supplied): Follow the supplied property references exactly. Preserve the same architecture, furniture layout, materials, colors, proportions and interior details. RESTRICTIONS: never add unsupported functionality; do not show in-platform payments, checkout, credit cards, rent payment dashboards, digital contracts, electronic signatures, credit scores, internal chat systems, video calls, financial analytics, banking interfaces or luxury real-estate brokerage features; no favorite or heart icons, no maps, no app-store badges, no verification seals; do not change the SGLK logo and do not invent another logo; do not change the brand colors; do not overcrowd the composition; no excessive gradients; no cartoon illustration; no generic corporate stock photography; no unrealistic luxury apartments; no random decorative UI without function; no watermarks; no slogans or headlines outside the interface.

IMAGE BRIEF: 05-kitnet-03-quarto, the cover photo of Kitnet 03. This is a pure interior photograph: no interface, no logo and no text of any kind. Follow the supplied property references exactly. Preserve the same architecture, furniture layout, materials, colors, proportions and interior details. PROPERTY: Kitnet 03, a cozy studio of 22 m²; one room with a sleeping area, a study corner and a kitchenette, plus a small bathroom. Warm white walls, light beige porcelain floor, round jute rug. Sleeping area: double bed with white linen and a beige knitted throw; light-wood open shelving unit on the right wall with books, woven baskets and small plants; tall potted plant on the floor at left; window with a white sheer curtain. Study corner: small light-wood desk with a simple chair near the window. Kitchenette (not the focus of this shot): light-wood lower cabinets, white countertop, white subway-tile backsplash. SHOT: diagonal view from the foot of the bed; the bed sits center-left, the light-wood shelving unit fills the right third, the tall plant is at the left border, and the edge of the study desk appears at the right border near the window. Keep the top-left corner calm, because a status tag will sit there. CAMERA: eye-level at 1.3 m, 24-28 mm equivalent lens, straight verticals, no ultra-wide distortion; the room must look its real compact size. LIGHTING: warm, soft late-afternoon daylight through the sheer curtain, diffused shadows, bright but not overexposed. COLORS: white, beige, light wood, natural fiber and plant greens. FORMAT: 4:3 landscape, 1600 x 1200 px. NEGATIVE SPACE: none; the photo is used whole. REALISM: photorealistic real-estate interior photography, honest and plausible. AVOID: people, personal belongings, readable text on book spines or anywhere else, logos, watermarks, luxury decor, oversized room, fisheye distortion.
```

---

### 05 · `05-kitnet-03-cozinha.png`

| Campo | Definição |
|---|---|
| Categoria | Foto de kitnet (demonstração) |
| Seção de uso | Galeria de detalhes da kitnet 03 (Imóveis) |
| Objetivo | Mostrar a cozinha da mesma kitnet |
| Mensagem | Simples, acolhedora e funcional |
| Público principal | Locatário |
| Elemento principal | Armários baixos de madeira clara, bancada branca e azulejo metrô |
| Elementos secundários | Cooktop de 2 bocas, geladeira compacta, prateleira com potes de vidro, borda da estante de madeira |
| Composição | Vista frontal da parede da cozinha, levemente em diagonal |
| Enquadramento | Câmera a 1,3m, lente equivalente a 28mm, verticais retas |
| Posição dos elementos | Bancada no centro; geladeira na ponta esquerda; prateleira acima; borda da estante na borda direita |
| Cenário | Interior, fim de tarde |
| Tipo de imóvel | Kitnet 03, 22 m² |
| Direção fotográfica | Foto de interiores realista, estilo anúncio honesto |
| Iluminação | Luz da tarde quente e lateral |
| Cores predominantes | Madeira clara, branco, vidro e verde de uma planta pequena |
| Proporção | 4:3 |
| Resolução | Master 1600 × 1200 px; exportar 1200 × 900, 800 × 600 e 400 × 300 |
| Área livre para texto | Não |
| Posição da área livre | Não se aplica |
| Dispositivo | Ambos |
| Referências | `05-kitnet-03-quarto.png` aprovada, `ref-kitnet-03-mockup.png` |
| Restrições | Mesma kitnet da capa: mesmo piso, mesma madeira clara |
| Não deve aparecer | Pessoas, rótulos legíveis nos potes, ilha, eletrodomésticos de luxo, texto, logo |
| Reuso | Cópia `kitnet-03-cozinha.png` em `meus - produtos/` |
| Texto alternativo | "Cozinha compacta com armários de madeira clara, azulejo branco e prateleira com potes de vidro." |

```text
SGLK BASE PROMPT. BRAND: SGLK (Sistema de Gerenciamento e Locação de Kitnets), a modern Brazilian web platform connecting people searching for compact housing (kitnets, 20-25 m² studios) with small property owners. Users search with filters (neighborhood, price, amenities), see clear listings with photos, price, neighborhood, size and availability ("Disponível" or "Alugado"), and contact the owner directly through WhatsApp. VISUAL IDENTITY: minimal, clean, modern, trustworthy and approachable; premium digital-product aesthetic without looking luxurious; generous negative space; soft off-white and white backgrounds; deep navy as the primary structural color; muted sage green as the main accent; light gray for secondary surfaces and borders; green indicates available properties; signature elements: large soft pale-sage circles, very thin arc lines and softly blurred tropical leaves at the edges. UI DIRECTION: clean responsive web interface floating without any device frame; rounded cards (16 px radius) and panels (24 px radius); rectangular buttons with 12 px radius, not pill-shaped; pill-shaped status tags and filter chips; subtle 1 px light-gray borders; very soft navy-tinted shadows; simple rounded line icons; clear visual hierarchy; minimal interface density; geometric sans-serif typography similar to Plus Jakarta Sans, in sentence case; all interface text in Brazilian Portuguese exactly as quoted in this prompt, and no other text. PHOTOGRAPHIC DIRECTION: realistic Brazilian compact apartments and kitnets in a warm tropical city; plausible small spaces; clean, tidy interiors; neutral materials (warm white walls, light beige porcelain floor tiles, light wood, white cabinets); warm wood and subtle greenery; eye-level camera, straight verticals, no ultra-wide distortion; no luxury penthouses or oversized apartments. LIGHTING: soft natural daylight, diffused shadows, bright but not overexposed, comfortable residential feeling. REALISM: photorealistic architectural photography when showing properties; high-end product visualization when showing the interface; UI elements crisp, intentional and professionally designed. COLOR PALETTE: deep navy #0B2841 (logo, headings, text), interface navy #0C3E66 (primary buttons, selected chips), muted sage green #648B81 (accents), dark sage #45695F ("Disponível" tag with white text), slate gray #636E7B ("Alugado" tag with white text), light cool gray #D7D8DC (borders), off-white #FBFAF8 (backgrounds), warm light gray #F2F1EF (secondary surfaces), white #FFFFFF (cards), WhatsApp button green #15803D with white text. GENERAL CONSISTENCY RULE: Follow the supplied SGLK references exactly. Preserve the same logo, visual identity, color palette, interface language, rounded geometry, typography style and overall product character. PROPERTY CONSISTENCY RULE (when property references are supplied): Follow the supplied property references exactly. Preserve the same architecture, furniture layout, materials, colors, proportions and interior details. RESTRICTIONS: never add unsupported functionality; do not show in-platform payments, checkout, credit cards, rent payment dashboards, digital contracts, electronic signatures, credit scores, internal chat systems, video calls, financial analytics, banking interfaces or luxury real-estate brokerage features; no favorite or heart icons, no maps, no app-store badges, no verification seals; do not change the SGLK logo and do not invent another logo; do not change the brand colors; do not overcrowd the composition; no excessive gradients; no cartoon illustration; no generic corporate stock photography; no unrealistic luxury apartments; no random decorative UI without function; no watermarks; no slogans or headlines outside the interface.

IMAGE BRIEF: 05-kitnet-03-cozinha, the kitchenette photo of Kitnet 03. This is a pure interior photograph: no interface, no logo and no text of any kind. Follow the supplied property references exactly. Preserve the same architecture, furniture layout, materials, colors, proportions and interior details. PROPERTY: Kitnet 03, a cozy studio of 22 m² with warm white walls, light beige porcelain floor, a round jute rug, a double bed with white linen and a beige throw, and a light-wood open shelving unit with books, baskets and plants. Kitchenette: light-wood lower cabinets, white countertop, white subway-tile backsplash, small stainless-steel sink, two-burner cooktop, compact white fridge at the left end, and a light-wood wall shelf with plain glass jars and one small plant. SHOT: front view of the kitchenette wall, slightly diagonal; the countertop sits in the center, the compact fridge at the left end, the wall shelf above, and the edge of the light-wood shelving unit appears at the right border, proving it is the same studio. CAMERA: eye-level at 1.3 m, 28 mm equivalent lens, straight verticals, no ultra-wide distortion. LIGHTING: warm late-afternoon side light, soft shadows, bright but not overexposed. COLORS: light wood, white, clear glass and a touch of plant green. FORMAT: 4:3 landscape, 1600 x 1200 px. NEGATIVE SPACE: none; the photo is used whole. REALISM: photorealistic real-estate interior photography, honest and plausible. AVOID: people, readable labels on jars, kitchen island, luxury appliances, clutter, text, logos, watermarks, oversized space.
```

---

### 05 · `05-kitnet-03-banheiro.png`

| Campo | Definição |
|---|---|
| Categoria | Foto de kitnet (demonstração) |
| Seção de uso | Galeria de detalhes da kitnet 03 (Imóveis) |
| Objetivo | Mostrar o banheiro da mesma kitnet |
| Mensagem | Limpo, claro e acolhedor |
| Público principal | Locatário |
| Elemento principal | Gabinete amadeirado com cuba branca e espelho redondo de moldura de madeira |
| Elementos secundários | Revestimento creme 30 × 60, box de vidro, planta pequena, toalha bege |
| Composição | Vista da porta, de frente para o gabinete, box à direita |
| Enquadramento | Câmera a 1,3m, lente equivalente a 28mm, verticais retas |
| Posição dos elementos | Gabinete e espelho no centro-esquerda; box no terço direito; planta sobre o gabinete |
| Cenário | Interior, dia |
| Tipo de imóvel | Kitnet 03; banheiro pequeno |
| Direção fotográfica | Foto de interiores realista, estilo anúncio honesto |
| Iluminação | Luz de teto quente e suave, luz do dia difusa |
| Cores predominantes | Creme, madeira clara, branco e verde da planta |
| Proporção | 4:3 |
| Resolução | Master 1600 × 1200 px; exportar 1200 × 900, 800 × 600 e 400 × 300 |
| Área livre para texto | Não |
| Posição da área livre | Não se aplica |
| Dispositivo | Ambos |
| Referências | `05-kitnet-03-quarto.png` aprovada, `05-kitnet-03-cozinha.png` aprovada |
| Restrições | Mesmo estilo quente e amadeirado da kitnet 03; tamanho real de banheiro pequeno |
| Não deve aparecer | Banheira, mármore, produtos com marca, reflexo do fotógrafo, pessoas, texto |
| Reuso | Cópia `kitnet-03-banheiro.png` em `meus - produtos/` |
| Texto alternativo | "Banheiro com revestimento creme, gabinete de madeira clara, espelho redondo e box de vidro." |

```text
SGLK BASE PROMPT. BRAND: SGLK (Sistema de Gerenciamento e Locação de Kitnets), a modern Brazilian web platform connecting people searching for compact housing (kitnets, 20-25 m² studios) with small property owners. Users search with filters (neighborhood, price, amenities), see clear listings with photos, price, neighborhood, size and availability ("Disponível" or "Alugado"), and contact the owner directly through WhatsApp. VISUAL IDENTITY: minimal, clean, modern, trustworthy and approachable; premium digital-product aesthetic without looking luxurious; generous negative space; soft off-white and white backgrounds; deep navy as the primary structural color; muted sage green as the main accent; light gray for secondary surfaces and borders; green indicates available properties; signature elements: large soft pale-sage circles, very thin arc lines and softly blurred tropical leaves at the edges. UI DIRECTION: clean responsive web interface floating without any device frame; rounded cards (16 px radius) and panels (24 px radius); rectangular buttons with 12 px radius, not pill-shaped; pill-shaped status tags and filter chips; subtle 1 px light-gray borders; very soft navy-tinted shadows; simple rounded line icons; clear visual hierarchy; minimal interface density; geometric sans-serif typography similar to Plus Jakarta Sans, in sentence case; all interface text in Brazilian Portuguese exactly as quoted in this prompt, and no other text. PHOTOGRAPHIC DIRECTION: realistic Brazilian compact apartments and kitnets in a warm tropical city; plausible small spaces; clean, tidy interiors; neutral materials (warm white walls, light beige porcelain floor tiles, light wood, white cabinets); warm wood and subtle greenery; eye-level camera, straight verticals, no ultra-wide distortion; no luxury penthouses or oversized apartments. LIGHTING: soft natural daylight, diffused shadows, bright but not overexposed, comfortable residential feeling. REALISM: photorealistic architectural photography when showing properties; high-end product visualization when showing the interface; UI elements crisp, intentional and professionally designed. COLOR PALETTE: deep navy #0B2841 (logo, headings, text), interface navy #0C3E66 (primary buttons, selected chips), muted sage green #648B81 (accents), dark sage #45695F ("Disponível" tag with white text), slate gray #636E7B ("Alugado" tag with white text), light cool gray #D7D8DC (borders), off-white #FBFAF8 (backgrounds), warm light gray #F2F1EF (secondary surfaces), white #FFFFFF (cards), WhatsApp button green #15803D with white text. GENERAL CONSISTENCY RULE: Follow the supplied SGLK references exactly. Preserve the same logo, visual identity, color palette, interface language, rounded geometry, typography style and overall product character. PROPERTY CONSISTENCY RULE (when property references are supplied): Follow the supplied property references exactly. Preserve the same architecture, furniture layout, materials, colors, proportions and interior details. RESTRICTIONS: never add unsupported functionality; do not show in-platform payments, checkout, credit cards, rent payment dashboards, digital contracts, electronic signatures, credit scores, internal chat systems, video calls, financial analytics, banking interfaces or luxury real-estate brokerage features; no favorite or heart icons, no maps, no app-store badges, no verification seals; do not change the SGLK logo and do not invent another logo; do not change the brand colors; do not overcrowd the composition; no excessive gradients; no cartoon illustration; no generic corporate stock photography; no unrealistic luxury apartments; no random decorative UI without function; no watermarks; no slogans or headlines outside the interface.

IMAGE BRIEF: 05-kitnet-03-banheiro, the bathroom photo of Kitnet 03. This is a pure interior photograph: no interface, no logo and no text of any kind. Follow the supplied property references exactly. Preserve the same architecture, furniture layout, materials, colors, proportions and interior details. PROPERTY: Kitnet 03, a cozy studio of 22 m² with warm white walls, light beige porcelain floor and light-wood furniture. Its small bathroom has cream 30 x 60 cm tiles, a light-wood-look vanity with a white basin, a round mirror with a light-wood frame, a clear glass shower screen, a small potted plant on the vanity and one folded beige towel. SHOT: view from the doorway, facing the vanity; the vanity and mirror sit center-left, the glass shower fills the right third. The mirror reflects only the tiled wall, never the camera or a person. CAMERA: eye-level at 1.3 m, 28 mm equivalent lens, straight verticals, no ultra-wide distortion; the bathroom must look its real small size. LIGHTING: warm, soft ceiling light plus diffused daylight, gentle shadows, clean and bright. COLORS: cream, light wood, white and a touch of plant green. FORMAT: 4:3 landscape, 1600 x 1200 px. NEGATIVE SPACE: none; the photo is used whole. REALISM: photorealistic real-estate interior photography, honest and plausible. AVOID: bathtub, marble, branded products, the photographer's reflection, people, text, logos, watermarks, oversized space.
```

---

### 05 · `05-kitnet-03-fachada.png`

| Campo | Definição |
|---|---|
| Categoria | Foto de kitnet (demonstração) |
| Seção de uso | Galeria de detalhes da kitnet 03 (Imóveis); fundo de `16-locador-gestao` |
| Objetivo | Mostrar a vila de kitnets onde fica a kitnet 03 |
| Mensagem | Lugar tranquilo, simples e bem cuidado |
| Público principal | Locatário e locador |
| Elemento principal | Fileira térrea de 4 kitnets num lote murado |
| Elementos secundários | Portas de madeira clara, janelas de moldura branca, varanda coberta com telha cerâmica, caminho de concreto com grama e plantas, muro baixo com portão branco |
| Composição | Vista a partir do portão, em diagonal, com o caminho levando o olhar para o fundo |
| Enquadramento | Câmera a 1,5m, lente equivalente a 28mm, verticais retas |
| Posição dos elementos | Fileira de kitnets do centro para a direita; caminho no terço inferior esquerdo; portão aberto na borda esquerda |
| Cenário | Lote residencial numa cidade brasileira quente, fim de tarde |
| Tipo de imóvel | Vila da kitnet 03 |
| Direção fotográfica | Foto de arquitetura realista, sem pessoas |
| Iluminação | Luz da tarde quente e baixa, sombras longas e suaves |
| Cores predominantes | Creme, madeira clara, branco, terracota da telha e verde das plantas |
| Proporção | 4:3 |
| Resolução | Master 1600 × 1200 px; exportar 1200 × 900, 800 × 600 e 400 × 300 |
| Área livre para texto | Não |
| Posição da área livre | Não se aplica |
| Dispositivo | Ambos |
| Referências | `05-kitnet-03-quarto.png` aprovada |
| Restrições | Sem números, placas ou nomes; construção simples, sem ar de condomínio de luxo |
| Não deve aparecer | Pessoas, carros, piscina, placas, marcas, texto, logo |
| Reuso | Fundo de `16-locador-gestao`; cópia `kitnet-03-fachada.png` em `meus - produtos/` |
| Texto alternativo | "Fileira de kitnets térreas com paredes creme, portas de madeira e jardim na frente." |

```text
SGLK BASE PROMPT. BRAND: SGLK (Sistema de Gerenciamento e Locação de Kitnets), a modern Brazilian web platform connecting people searching for compact housing (kitnets, 20-25 m² studios) with small property owners. Users search with filters (neighborhood, price, amenities), see clear listings with photos, price, neighborhood, size and availability ("Disponível" or "Alugado"), and contact the owner directly through WhatsApp. VISUAL IDENTITY: minimal, clean, modern, trustworthy and approachable; premium digital-product aesthetic without looking luxurious; generous negative space; soft off-white and white backgrounds; deep navy as the primary structural color; muted sage green as the main accent; light gray for secondary surfaces and borders; green indicates available properties; signature elements: large soft pale-sage circles, very thin arc lines and softly blurred tropical leaves at the edges. UI DIRECTION: clean responsive web interface floating without any device frame; rounded cards (16 px radius) and panels (24 px radius); rectangular buttons with 12 px radius, not pill-shaped; pill-shaped status tags and filter chips; subtle 1 px light-gray borders; very soft navy-tinted shadows; simple rounded line icons; clear visual hierarchy; minimal interface density; geometric sans-serif typography similar to Plus Jakarta Sans, in sentence case; all interface text in Brazilian Portuguese exactly as quoted in this prompt, and no other text. PHOTOGRAPHIC DIRECTION: realistic Brazilian compact apartments and kitnets in a warm tropical city; plausible small spaces; clean, tidy interiors; neutral materials (warm white walls, light beige porcelain floor tiles, light wood, white cabinets); warm wood and subtle greenery; eye-level camera, straight verticals, no ultra-wide distortion; no luxury penthouses or oversized apartments. LIGHTING: soft natural daylight, diffused shadows, bright but not overexposed, comfortable residential feeling. REALISM: photorealistic architectural photography when showing properties; high-end product visualization when showing the interface; UI elements crisp, intentional and professionally designed. COLOR PALETTE: deep navy #0B2841 (logo, headings, text), interface navy #0C3E66 (primary buttons, selected chips), muted sage green #648B81 (accents), dark sage #45695F ("Disponível" tag with white text), slate gray #636E7B ("Alugado" tag with white text), light cool gray #D7D8DC (borders), off-white #FBFAF8 (backgrounds), warm light gray #F2F1EF (secondary surfaces), white #FFFFFF (cards), WhatsApp button green #15803D with white text. GENERAL CONSISTENCY RULE: Follow the supplied SGLK references exactly. Preserve the same logo, visual identity, color palette, interface language, rounded geometry, typography style and overall product character. PROPERTY CONSISTENCY RULE (when property references are supplied): Follow the supplied property references exactly. Preserve the same architecture, furniture layout, materials, colors, proportions and interior details. RESTRICTIONS: never add unsupported functionality; do not show in-platform payments, checkout, credit cards, rent payment dashboards, digital contracts, electronic signatures, credit scores, internal chat systems, video calls, financial analytics, banking interfaces or luxury real-estate brokerage features; no favorite or heart icons, no maps, no app-store badges, no verification seals; do not change the SGLK logo and do not invent another logo; do not change the brand colors; do not overcrowd the composition; no excessive gradients; no cartoon illustration; no generic corporate stock photography; no unrealistic luxury apartments; no random decorative UI without function; no watermarks; no slogans or headlines outside the interface.

IMAGE BRIEF: 05-kitnet-03-fachada, the exterior photo of the small lot where Kitnet 03 is. This is a pure architectural photograph: no interface, no logo and no text of any kind. Follow the supplied property references exactly. PROPERTY: Kitnet 03 is a cozy studio in a single-story row of four kitnets in a small gated lot: cream painted walls, light-wood front doors, small windows with white frames, a covered walkway with a terracotta ceramic tile roof, a concrete path with grass and tropical plants, and a low wall with a white gate. Simple, well kept and modest, never a luxury condominium. SHOT: view from the open gate, diagonal, with the path leading the eye into the lot; the row of kitnets runs from the center to the right, the path fills the bottom-left third, the white gate is at the left border. CAMERA: 1.5 m high, 28 mm equivalent lens, straight verticals. SCENE: residential lot in a warm Brazilian city, late afternoon, clear sky, no people, no cars. LIGHTING: warm, low late-afternoon sun, long soft shadows, bright but not overexposed. COLORS: cream, light wood, white, terracotta roof tiles and plant greens. FORMAT: 4:3 landscape, 1600 x 1200 px. NEGATIVE SPACE: none; the photo is used whole. REALISM: photorealistic architectural photography, honest and plausible. AVOID: people, cars, swimming pool, readable numbers, signs, brands, text, logos, watermarks, luxury condominium look, dramatic sky.
```

---

### 06 · `06-painel-locador-desktop.png`

| Campo | Definição |
|---|---|
| Categoria | Painel do locador |
| Seção de uso | Home > Para quem anuncia (desktop); Como Funciona > Quem anuncia > Passo 3 (desktop) |
| Objetivo | Mostrar ao pequeno proprietário como é simples gerenciar os anúncios |
| Mensagem | Seus imóveis organizados num só lugar |
| Público principal | Locador |
| Elemento principal | Painel "Meus imóveis" com a lista dos 3 anúncios |
| Elementos secundários | 3 indicadores simples (cadastrados, disponíveis e alugados); botão "Cadastrar imóvel"; controle de status em cada linha |
| Composição | Painel largo flutuando com perspectiva suave (3°), com 85% da largura; círculo sálvia atrás do lado esquerdo; arco fino; folhas no canto inferior direito |
| Enquadramento | Visualização de produto de frente |
| Posição dos elementos | Cabeçalho no topo do painel; título e botão logo abaixo; faixa com os 3 indicadores; lista na metade de baixo |
| Cenário | Fundo off-white de estúdio |
| Tipo de imóvel | Miniaturas das kitnets 01, 02 e 03 |
| Direção fotográfica | Visualização de produto |
| Iluminação | Suave e uniforme |
| Cores predominantes | Branco, off-white, azul-marinho, sálvia escuro e cinza-azulado |
| Proporção | 3:2 |
| Resolução | Master 2400 × 1600 px; exportar 1600 × 1067 e 800 × 533 (até 250 KB) |
| Área livre para texto | Não |
| Posição da área livre | Não se aplica; margem limpa de 7% |
| Dispositivo | Desktop |
| Referências | `sglk-busca-kitnets-desktop.png`, `sglk-identidade-visual.png`, `04-kitnet-destaque-01.png`, `05-kitnet-01-quarto.png`, `05-kitnet-02-cozinha.png`, `05-kitnet-03-quarto.png` |
| Restrições | Só dados que o produto tem: quantidade de imóveis, status e preço mensal de cada anúncio |
| Não deve aparecer | Receita, faturamento, soma de aluguéis, gráficos de dinheiro, pagamentos, contratos, chat, contagem de contatos, nome ou foto de pessoa |
| Reuso | Como Funciona > Passo 3 (desktop); cópia `sglk-painel-locador.png` em `meus - produtos/` |
| Texto alternativo | "Painel do locador no SGLK com três imóveis cadastrados, dois disponíveis e um alugado." |

```text
SGLK BASE PROMPT. BRAND: SGLK (Sistema de Gerenciamento e Locação de Kitnets), a modern Brazilian web platform connecting people searching for compact housing (kitnets, 20-25 m² studios) with small property owners. Users search with filters (neighborhood, price, amenities), see clear listings with photos, price, neighborhood, size and availability ("Disponível" or "Alugado"), and contact the owner directly through WhatsApp. VISUAL IDENTITY: minimal, clean, modern, trustworthy and approachable; premium digital-product aesthetic without looking luxurious; generous negative space; soft off-white and white backgrounds; deep navy as the primary structural color; muted sage green as the main accent; light gray for secondary surfaces and borders; green indicates available properties; signature elements: large soft pale-sage circles, very thin arc lines and softly blurred tropical leaves at the edges. UI DIRECTION: clean responsive web interface floating without any device frame; rounded cards (16 px radius) and panels (24 px radius); rectangular buttons with 12 px radius, not pill-shaped; pill-shaped status tags and filter chips; subtle 1 px light-gray borders; very soft navy-tinted shadows; simple rounded line icons; clear visual hierarchy; minimal interface density; geometric sans-serif typography similar to Plus Jakarta Sans, in sentence case; all interface text in Brazilian Portuguese exactly as quoted in this prompt, and no other text. PHOTOGRAPHIC DIRECTION: realistic Brazilian compact apartments and kitnets in a warm tropical city; plausible small spaces; clean, tidy interiors; neutral materials (warm white walls, light beige porcelain floor tiles, light wood, white cabinets); warm wood and subtle greenery; eye-level camera, straight verticals, no ultra-wide distortion; no luxury penthouses or oversized apartments. LIGHTING: soft natural daylight, diffused shadows, bright but not overexposed, comfortable residential feeling. REALISM: photorealistic architectural photography when showing properties; high-end product visualization when showing the interface; UI elements crisp, intentional and professionally designed. COLOR PALETTE: deep navy #0B2841 (logo, headings, text), interface navy #0C3E66 (primary buttons, selected chips), muted sage green #648B81 (accents), dark sage #45695F ("Disponível" tag with white text), slate gray #636E7B ("Alugado" tag with white text), light cool gray #D7D8DC (borders), off-white #FBFAF8 (backgrounds), warm light gray #F2F1EF (secondary surfaces), white #FFFFFF (cards), WhatsApp button green #15803D with white text. GENERAL CONSISTENCY RULE: Follow the supplied SGLK references exactly. Preserve the same logo, visual identity, color palette, interface language, rounded geometry, typography style and overall product character. PROPERTY CONSISTENCY RULE (when property references are supplied): Follow the supplied property references exactly. Preserve the same architecture, furniture layout, materials, colors, proportions and interior details. RESTRICTIONS: never add unsupported functionality; do not show in-platform payments, checkout, credit cards, rent payment dashboards, digital contracts, electronic signatures, credit scores, internal chat systems, video calls, financial analytics, banking interfaces or luxury real-estate brokerage features; no favorite or heart icons, no maps, no app-store badges, no verification seals; do not change the SGLK logo and do not invent another logo; do not change the brand colors; do not overcrowd the composition; no excessive gradients; no cartoon illustration; no generic corporate stock photography; no unrealistic luxury apartments; no random decorative UI without function; no watermarks; no slogans or headlines outside the interface.

IMAGE BRIEF: 06-painel-locador-desktop, a product visualization of the SGLK landlord dashboard for desktop. Follow the supplied SGLK interface references exactly. Preserve the same visual identity, logo, color palette, typography style, spacing, rounded corners, cards, buttons, filters, status pills and overall interface language. Follow the supplied property references exactly for the thumbnails. COMPOSITION: one wide white dashboard panel (24 px radius) floats over an off-white background (#FBFAF8), about 85% of the width, tilted 3 degrees in gentle perspective, with a very soft navy-tinted shadow. A large soft pale-sage circle sits behind the panel's left side, one very thin pale arc line crosses the background and softly blurred tropical leaves enter the bottom-right corner. INTERFACE inside the panel, from top to bottom: (1) a slim header with the SGLK horizontal logo on the left exactly as in the supplied identity reference and a simple outline user icon on the right, with no name and no photo. (2) the title "Meus imóveis" in bold navy on the left and, on the right, a solid navy button "Cadastrar imóvel" (#0C3E66, white text, small plus icon, 12 px radius). (3) three small white stat tiles in a row, each with a light-gray border: "Imóveis cadastrados" with the number "3"; "Disponíveis" with the number "2" and a small dark sage dot (#45695F); "Alugados" with the number "1" and a small slate gray dot (#636E7B). (4) a clean list with three rows separated by thin light-gray lines; each row shows a small rounded photo thumbnail, the listing name in semibold navy with the neighborhood below it in slate gray, the monthly price, a status pill with a small dropdown chevron, and a text link "Editar" in navy. Row 1: thumbnail of the furnished studio bedroom with a dark-gray headboard, "Kitnet mobiliada", "Centro", "R$ 1.200/mês", pill "Disponível" (#45695F, white text). Row 2: thumbnail of the compact kitchenette with a white fridge and charcoal cabinets, "Kitnet moderna", "Vila Nova", "R$ 950/mês", pill "Disponível". Row 3: thumbnail of the cozy studio with light-wood shelves, "Kitnet aconchegante", "Jardim Paulista", "R$ 1.100/mês", pill "Alugado" (#636E7B, white text). LIGHTING: soft, even light. COLORS: white and off-white dominate, navy text and button, dark sage and slate gray only in the status pills and dots. FORMAT: 3:2 landscape, 2400 x 1600 px. NEGATIVE SPACE: no text area needed; keep a clean 7% margin around the panel. REALISM: crisp, high-end product visualization with realistic thumbnails. AVOID: revenue, totals of money, charts, payments, contracts, chat, contact counters, notifications, person names or photos, sidebars full of menus, heart icons, maps, device frames, garbled text.
```

---

### 06 · `06-painel-locador-mobile.png`

| Campo | Definição |
|---|---|
| Categoria | Painel do locador |
| Seção de uso | Home > Para quem anuncia (celular); Como Funciona > Quem anuncia > Passo 3 (celular) |
| Objetivo | Mostrar que o locador gerencia os anúncios pelo celular |
| Mensagem | Atualize seus anúncios de onde estiver |
| Público principal | Locador |
| Elemento principal | Tela vertical "Meus imóveis" |
| Elementos secundários | Indicadores compactos, lista de 3 anúncios com status e botão "Cadastrar imóvel" |
| Composição | Uma tela vertical flutuando no centro, inclinada 3°; círculo sálvia atrás; folhas no canto inferior direito |
| Enquadramento | Visualização de produto de frente |
| Posição dos elementos | Tela com 70% da largura e 88% da altura; título e indicadores no terço superior; lista no meio; botão fixo na base da tela |
| Cenário | Fundo off-white |
| Tipo de imóvel | Miniaturas das kitnets 01, 02 e 03 |
| Direção fotográfica | Visualização de produto |
| Iluminação | Suave e uniforme |
| Cores predominantes | Branco, off-white, azul-marinho, sálvia escuro e cinza-azulado |
| Proporção | 4:5 |
| Resolução | Master 1440 × 1800 px; exportar 1080 × 1350 e 720 × 900 (até 200 KB) |
| Área livre para texto | Não |
| Posição da área livre | Não se aplica; margem limpa de 6% |
| Dispositivo | Celular e tablet |
| Referências | `06-painel-locador-desktop.png` aprovada, `sglk-mobile-busca.png`, `sglk-identidade-visual.png` |
| Restrições | Mesmos dados da versão desktop; textos legíveis numa tela de 360px |
| Não deve aparecer | Moldura de celular, dinheiro somado, gráficos, pagamentos, chat, nome ou foto de pessoa |
| Reuso | Como Funciona > Passo 3 (celular) |
| Texto alternativo | "Painel do locador no celular, com a lista de imóveis e o status de cada um." |

```text
SGLK BASE PROMPT. BRAND: SGLK (Sistema de Gerenciamento e Locação de Kitnets), a modern Brazilian web platform connecting people searching for compact housing (kitnets, 20-25 m² studios) with small property owners. Users search with filters (neighborhood, price, amenities), see clear listings with photos, price, neighborhood, size and availability ("Disponível" or "Alugado"), and contact the owner directly through WhatsApp. VISUAL IDENTITY: minimal, clean, modern, trustworthy and approachable; premium digital-product aesthetic without looking luxurious; generous negative space; soft off-white and white backgrounds; deep navy as the primary structural color; muted sage green as the main accent; light gray for secondary surfaces and borders; green indicates available properties; signature elements: large soft pale-sage circles, very thin arc lines and softly blurred tropical leaves at the edges. UI DIRECTION: clean responsive web interface floating without any device frame; rounded cards (16 px radius) and panels (24 px radius); rectangular buttons with 12 px radius, not pill-shaped; pill-shaped status tags and filter chips; subtle 1 px light-gray borders; very soft navy-tinted shadows; simple rounded line icons; clear visual hierarchy; minimal interface density; geometric sans-serif typography similar to Plus Jakarta Sans, in sentence case; all interface text in Brazilian Portuguese exactly as quoted in this prompt, and no other text. PHOTOGRAPHIC DIRECTION: realistic Brazilian compact apartments and kitnets in a warm tropical city; plausible small spaces; clean, tidy interiors; neutral materials (warm white walls, light beige porcelain floor tiles, light wood, white cabinets); warm wood and subtle greenery; eye-level camera, straight verticals, no ultra-wide distortion; no luxury penthouses or oversized apartments. LIGHTING: soft natural daylight, diffused shadows, bright but not overexposed, comfortable residential feeling. REALISM: photorealistic architectural photography when showing properties; high-end product visualization when showing the interface; UI elements crisp, intentional and professionally designed. COLOR PALETTE: deep navy #0B2841 (logo, headings, text), interface navy #0C3E66 (primary buttons, selected chips), muted sage green #648B81 (accents), dark sage #45695F ("Disponível" tag with white text), slate gray #636E7B ("Alugado" tag with white text), light cool gray #D7D8DC (borders), off-white #FBFAF8 (backgrounds), warm light gray #F2F1EF (secondary surfaces), white #FFFFFF (cards), WhatsApp button green #15803D with white text. GENERAL CONSISTENCY RULE: Follow the supplied SGLK references exactly. Preserve the same logo, visual identity, color palette, interface language, rounded geometry, typography style and overall product character. PROPERTY CONSISTENCY RULE (when property references are supplied): Follow the supplied property references exactly. Preserve the same architecture, furniture layout, materials, colors, proportions and interior details. RESTRICTIONS: never add unsupported functionality; do not show in-platform payments, checkout, credit cards, rent payment dashboards, digital contracts, electronic signatures, credit scores, internal chat systems, video calls, financial analytics, banking interfaces or luxury real-estate brokerage features; no favorite or heart icons, no maps, no app-store badges, no verification seals; do not change the SGLK logo and do not invent another logo; do not change the brand colors; do not overcrowd the composition; no excessive gradients; no cartoon illustration; no generic corporate stock photography; no unrealistic luxury apartments; no random decorative UI without function; no watermarks; no slogans or headlines outside the interface.

IMAGE BRIEF: 06-painel-locador-mobile, a product visualization of the SGLK landlord dashboard on a mobile screen. Follow the supplied SGLK interface references exactly. Preserve the same visual identity, logo, color palette, typography style, spacing, rounded corners, cards, buttons, filters, status pills and overall interface language. Follow the supplied property references exactly for the thumbnails. COMPOSITION: one tall floating mobile screen, a white rounded rectangle with 32 px corner radius and no phone hardware at all, centered, tilted 3 degrees, about 70% of the image width and 88% of its height, with a very soft navy-tinted shadow, over an off-white background (#FBFAF8). A large soft pale-sage circle sits behind the screen and softly blurred tropical leaves enter the bottom-right corner. INTERFACE inside the screen, from top to bottom: a small SGLK horizontal logo on the left exactly as in the supplied identity reference and a simple outline user icon on the right; the title "Meus imóveis" in bold navy; three compact stat tiles in one row: "Imóveis cadastrados" with "3", "Disponíveis" with "2" and a small dark sage dot (#45695F), "Alugados" with "1" and a small slate gray dot (#636E7B); a list of three compact rows, each with a small rounded photo thumbnail, the name in semibold navy, the neighborhood in slate gray, the monthly price and a status pill: "Kitnet mobiliada", "Centro", "R$ 1.200/mês", "Disponível" (#45695F, white text); "Kitnet moderna", "Vila Nova", "R$ 950/mês", "Disponível"; "Kitnet aconchegante", "Jardim Paulista", "R$ 1.100/mês", "Alugado" (#636E7B, white text); a full-width solid navy button "Cadastrar imóvel" (#0C3E66, white text, small plus icon) fixed at the bottom of the screen. Thumbnails: the furnished studio bedroom with a dark-gray headboard; the compact kitchenette with a white fridge and charcoal cabinets; the cozy studio with light-wood shelves. All text must be legible when the image is shown 360 px wide. LIGHTING: soft, even light. COLORS: white, off-white, navy, dark sage and slate gray. FORMAT: 4:5 portrait, 1440 x 1800 px. NEGATIVE SPACE: no text area needed; keep a clean 6% margin. REALISM: crisp product visualization with realistic thumbnails. AVOID: phone frame, bezel, notch, hardware buttons, totals of money, charts, payments, chat, notifications, person names or photos, heart icons, garbled text.
```

---

### 07 · `07-cadastro-imovel-desktop.png`

| Campo | Definição |
|---|---|
| Categoria | Cadastro de imóvel |
| Seção de uso | Como Funciona > Quem anuncia > Passo 1 (desktop) |
| Objetivo | Mostrar que anunciar uma kitnet é preencher um formulário simples |
| Mensagem | Anunciar é rápido: fotos, preço, comodidades e pronto |
| Público principal | Locador |
| Elemento principal | Formulário "Cadastrar imóvel" preenchido com a kitnet 01 |
| Elementos secundários | Área de fotos com 3 miniaturas e o bloco "Adicionar fotos"; chips de comodidades; seletor de status; botão "Salvar anúncio" |
| Composição | Painel largo flutuando com perspectiva suave (3°); fotos na coluna esquerda; campos na coluna direita; círculo sálvia atrás; folhas no canto inferior esquerdo |
| Enquadramento | Visualização de produto de frente |
| Posição dos elementos | Título no topo; coluna de fotos com 35% da largura do painel; campos com 65%; botão no canto inferior direito do painel |
| Cenário | Fundo off-white |
| Tipo de imóvel | Fotos da kitnet 01 nas miniaturas |
| Direção fotográfica | Visualização de produto |
| Iluminação | Suave e uniforme |
| Cores predominantes | Branco, off-white, azul-marinho e sálvia escuro |
| Proporção | 3:2 |
| Resolução | Master 2400 × 1600 px; exportar 1600 × 1067 e 800 × 533 (até 250 KB) |
| Área livre para texto | Não |
| Posição da área livre | Não se aplica; margem limpa de 7% |
| Dispositivo | Desktop |
| Referências | `sglk-busca-kitnets-desktop.png`, `sglk-identidade-visual.png`, `05-kitnet-01-quarto.png`, `05-kitnet-01-cozinha.png`, `05-kitnet-01-banheiro.png` |
| Restrições | Só os campos da seção 7.1; dados iguais aos da kitnet 01 |
| Não deve aparecer | Campos de CPF, documentos, contrato, pagamento, assinatura, conta bancária ou plano pago |
| Reuso | Cópia `sglk-cadastro-imovel.png` em `meus - produtos/` |
| Texto alternativo | "Formulário de cadastro de imóvel no SGLK, com fotos, preço, comodidades e status." |

```text
SGLK BASE PROMPT. BRAND: SGLK (Sistema de Gerenciamento e Locação de Kitnets), a modern Brazilian web platform connecting people searching for compact housing (kitnets, 20-25 m² studios) with small property owners. Users search with filters (neighborhood, price, amenities), see clear listings with photos, price, neighborhood, size and availability ("Disponível" or "Alugado"), and contact the owner directly through WhatsApp. VISUAL IDENTITY: minimal, clean, modern, trustworthy and approachable; premium digital-product aesthetic without looking luxurious; generous negative space; soft off-white and white backgrounds; deep navy as the primary structural color; muted sage green as the main accent; light gray for secondary surfaces and borders; green indicates available properties; signature elements: large soft pale-sage circles, very thin arc lines and softly blurred tropical leaves at the edges. UI DIRECTION: clean responsive web interface floating without any device frame; rounded cards (16 px radius) and panels (24 px radius); rectangular buttons with 12 px radius, not pill-shaped; pill-shaped status tags and filter chips; subtle 1 px light-gray borders; very soft navy-tinted shadows; simple rounded line icons; clear visual hierarchy; minimal interface density; geometric sans-serif typography similar to Plus Jakarta Sans, in sentence case; all interface text in Brazilian Portuguese exactly as quoted in this prompt, and no other text. PHOTOGRAPHIC DIRECTION: realistic Brazilian compact apartments and kitnets in a warm tropical city; plausible small spaces; clean, tidy interiors; neutral materials (warm white walls, light beige porcelain floor tiles, light wood, white cabinets); warm wood and subtle greenery; eye-level camera, straight verticals, no ultra-wide distortion; no luxury penthouses or oversized apartments. LIGHTING: soft natural daylight, diffused shadows, bright but not overexposed, comfortable residential feeling. REALISM: photorealistic architectural photography when showing properties; high-end product visualization when showing the interface; UI elements crisp, intentional and professionally designed. COLOR PALETTE: deep navy #0B2841 (logo, headings, text), interface navy #0C3E66 (primary buttons, selected chips), muted sage green #648B81 (accents), dark sage #45695F ("Disponível" tag with white text), slate gray #636E7B ("Alugado" tag with white text), light cool gray #D7D8DC (borders), off-white #FBFAF8 (backgrounds), warm light gray #F2F1EF (secondary surfaces), white #FFFFFF (cards), WhatsApp button green #15803D with white text. GENERAL CONSISTENCY RULE: Follow the supplied SGLK references exactly. Preserve the same logo, visual identity, color palette, interface language, rounded geometry, typography style and overall product character. PROPERTY CONSISTENCY RULE (when property references are supplied): Follow the supplied property references exactly. Preserve the same architecture, furniture layout, materials, colors, proportions and interior details. RESTRICTIONS: never add unsupported functionality; do not show in-platform payments, checkout, credit cards, rent payment dashboards, digital contracts, electronic signatures, credit scores, internal chat systems, video calls, financial analytics, banking interfaces or luxury real-estate brokerage features; no favorite or heart icons, no maps, no app-store badges, no verification seals; do not change the SGLK logo and do not invent another logo; do not change the brand colors; do not overcrowd the composition; no excessive gradients; no cartoon illustration; no generic corporate stock photography; no unrealistic luxury apartments; no random decorative UI without function; no watermarks; no slogans or headlines outside the interface.

IMAGE BRIEF: 07-cadastro-imovel-desktop, a product visualization of the SGLK property registration form for desktop. Follow the supplied SGLK interface references exactly. Preserve the same visual identity, logo, color palette, typography style, spacing, rounded corners, cards, buttons, filters, status pills and overall interface language. Follow the supplied property references exactly for the photo thumbnails. COMPOSITION: one wide white form panel (24 px radius) floats over an off-white background (#FBFAF8), about 85% of the width, tilted 3 degrees in gentle perspective, with a very soft navy-tinted shadow. A large soft pale-sage circle sits behind the panel's top-right corner and softly blurred tropical leaves enter the bottom-left corner. INTERFACE inside the panel: the title "Cadastrar imóvel" in bold navy at the top left. LEFT COLUMN (about 35% of the panel): the label "Fotos do imóvel" and a 2 x 2 grid of rounded tiles: three photo thumbnails of the same furnished studio (the bedroom with a dark-gray headboard and a tall fiddle-leaf fig, the white kitchenette with a black cooktop, the small bathroom with a round black-framed mirror) and one dashed-outline tile with a plus icon and the text "Adicionar fotos". RIGHT COLUMN (about 65%): form fields with small labels above them and 12 px radius inputs with gray outlines: "Título do anúncio" filled with "Kitnet mobiliada"; "Bairro" filled with "Centro"; a row with "Preço mensal" filled with "R$ 1.200" and "Área" filled with "25 m²"; a row with "Quartos" filled with "1" and "Banheiros" filled with "1"; "Descrição" as a short text area containing "Kitnet mobiliada no Centro, com cama, armário e cozinha compacta."; "Comodidades" with chips: "Mobiliada", "Wi-Fi" and "Ar-condicionado" selected (solid navy #0C3E66 pills with white text and a check mark) and "Cozinha equipada" and "Área de estudo" unselected (white pills with a gray outline and navy text); "Status" with a two-option segmented control where "Disponível" is selected (dark sage #45695F, white text) and "Alugado" is unselected (white, slate gray text). At the bottom right of the panel, a solid navy button "Salvar anúncio" (#0C3E66, white text, 12 px radius). LIGHTING: soft, even light. COLORS: white and off-white, navy text and controls, dark sage only on the selected status. FORMAT: 3:2 landscape, 2400 x 1600 px. NEGATIVE SPACE: no text area needed; keep a clean 7% margin around the panel. REALISM: crisp, high-end product visualization with realistic thumbnails. AVOID: ID or document fields, contracts, payments, signatures, bank accounts, paid plans, heart icons, maps, device frames, extra fields, garbled text.
```

---

### 07 · `07-cadastro-imovel-mobile.png`

| Campo | Definição |
|---|---|
| Categoria | Cadastro de imóvel |
| Seção de uso | Como Funciona > Quem anuncia > Passo 1 (celular) |
| Objetivo | Mostrar que dá para anunciar pelo celular |
| Mensagem | Anuncie sua kitnet em poucos minutos, pelo celular |
| Público principal | Locador |
| Elemento principal | Tela vertical do formulário "Cadastrar imóvel" |
| Elementos secundários | Fileira de fotos, campos principais, chips de comodidades, seletor de status e botão fixo |
| Composição | Uma tela vertical flutuando no centro, inclinada 3°; círculo sálvia atrás; folhas no canto inferior esquerdo |
| Enquadramento | Visualização de produto de frente |
| Posição dos elementos | Tela com 70% da largura e 88% da altura; título e fotos no topo; campos no meio; botão fixo na base da tela |
| Cenário | Fundo off-white |
| Tipo de imóvel | Fotos da kitnet 01 nas miniaturas |
| Direção fotográfica | Visualização de produto |
| Iluminação | Suave e uniforme |
| Cores predominantes | Branco, off-white, azul-marinho e sálvia escuro |
| Proporção | 4:5 |
| Resolução | Master 1440 × 1800 px; exportar 1080 × 1350 e 720 × 900 (até 200 KB) |
| Área livre para texto | Não |
| Posição da área livre | Não se aplica; margem limpa de 6% |
| Dispositivo | Celular e tablet |
| Referências | `07-cadastro-imovel-desktop.png` aprovada, `sglk-mobile-busca.png`, `sglk-identidade-visual.png` |
| Restrições | Mesmos dados da versão desktop; textos legíveis numa tela de 360px |
| Não deve aparecer | Moldura de celular, campos de documento, pagamento, contrato ou assinatura |
| Reuso | Nenhum |
| Texto alternativo | "Cadastro de imóvel no celular, com fotos da kitnet, preço mensal, comodidades e status." |

```text
SGLK BASE PROMPT. BRAND: SGLK (Sistema de Gerenciamento e Locação de Kitnets), a modern Brazilian web platform connecting people searching for compact housing (kitnets, 20-25 m² studios) with small property owners. Users search with filters (neighborhood, price, amenities), see clear listings with photos, price, neighborhood, size and availability ("Disponível" or "Alugado"), and contact the owner directly through WhatsApp. VISUAL IDENTITY: minimal, clean, modern, trustworthy and approachable; premium digital-product aesthetic without looking luxurious; generous negative space; soft off-white and white backgrounds; deep navy as the primary structural color; muted sage green as the main accent; light gray for secondary surfaces and borders; green indicates available properties; signature elements: large soft pale-sage circles, very thin arc lines and softly blurred tropical leaves at the edges. UI DIRECTION: clean responsive web interface floating without any device frame; rounded cards (16 px radius) and panels (24 px radius); rectangular buttons with 12 px radius, not pill-shaped; pill-shaped status tags and filter chips; subtle 1 px light-gray borders; very soft navy-tinted shadows; simple rounded line icons; clear visual hierarchy; minimal interface density; geometric sans-serif typography similar to Plus Jakarta Sans, in sentence case; all interface text in Brazilian Portuguese exactly as quoted in this prompt, and no other text. PHOTOGRAPHIC DIRECTION: realistic Brazilian compact apartments and kitnets in a warm tropical city; plausible small spaces; clean, tidy interiors; neutral materials (warm white walls, light beige porcelain floor tiles, light wood, white cabinets); warm wood and subtle greenery; eye-level camera, straight verticals, no ultra-wide distortion; no luxury penthouses or oversized apartments. LIGHTING: soft natural daylight, diffused shadows, bright but not overexposed, comfortable residential feeling. REALISM: photorealistic architectural photography when showing properties; high-end product visualization when showing the interface; UI elements crisp, intentional and professionally designed. COLOR PALETTE: deep navy #0B2841 (logo, headings, text), interface navy #0C3E66 (primary buttons, selected chips), muted sage green #648B81 (accents), dark sage #45695F ("Disponível" tag with white text), slate gray #636E7B ("Alugado" tag with white text), light cool gray #D7D8DC (borders), off-white #FBFAF8 (backgrounds), warm light gray #F2F1EF (secondary surfaces), white #FFFFFF (cards), WhatsApp button green #15803D with white text. GENERAL CONSISTENCY RULE: Follow the supplied SGLK references exactly. Preserve the same logo, visual identity, color palette, interface language, rounded geometry, typography style and overall product character. PROPERTY CONSISTENCY RULE (when property references are supplied): Follow the supplied property references exactly. Preserve the same architecture, furniture layout, materials, colors, proportions and interior details. RESTRICTIONS: never add unsupported functionality; do not show in-platform payments, checkout, credit cards, rent payment dashboards, digital contracts, electronic signatures, credit scores, internal chat systems, video calls, financial analytics, banking interfaces or luxury real-estate brokerage features; no favorite or heart icons, no maps, no app-store badges, no verification seals; do not change the SGLK logo and do not invent another logo; do not change the brand colors; do not overcrowd the composition; no excessive gradients; no cartoon illustration; no generic corporate stock photography; no unrealistic luxury apartments; no random decorative UI without function; no watermarks; no slogans or headlines outside the interface.

IMAGE BRIEF: 07-cadastro-imovel-mobile, a product visualization of the SGLK property registration form on a mobile screen. Follow the supplied SGLK interface references exactly. Preserve the same visual identity, logo, color palette, typography style, spacing, rounded corners, cards, buttons, filters, status pills and overall interface language. Follow the supplied property references exactly for the photo thumbnails. COMPOSITION: one tall floating mobile screen, a white rounded rectangle with 32 px corner radius and no phone hardware at all, centered, tilted 3 degrees, about 70% of the image width and 88% of its height, with a very soft navy-tinted shadow, over an off-white background (#FBFAF8). A large soft pale-sage circle sits behind the screen and softly blurred tropical leaves enter the bottom-left corner. INTERFACE inside the screen, from top to bottom: the title "Cadastrar imóvel" in bold navy; the label "Fotos do imóvel" and a horizontal row of three small rounded photo thumbnails of the same furnished studio (bedroom with a dark-gray headboard, white kitchenette, small bathroom with a round black-framed mirror) followed by a dashed-outline tile with a plus icon and "Adicionar fotos"; stacked fields with small labels above them and gray-outlined 12 px radius inputs: "Título do anúncio" with "Kitnet mobiliada", "Bairro" with "Centro", and a row with "Preço mensal" ("R$ 1.200") and "Área" ("25 m²"); "Comodidades" with chips "Mobiliada", "Wi-Fi" and "Ar-condicionado" selected (solid navy #0C3E66 pills, white text, check mark); "Status" with a segmented control where "Disponível" is selected (dark sage #45695F, white text) and "Alugado" is unselected; and a full-width solid navy button "Salvar anúncio" (#0C3E66, white text) fixed at the bottom of the screen. All text must be legible when the image is shown 360 px wide. LIGHTING: soft, even light. COLORS: white, off-white, navy and dark sage. FORMAT: 4:5 portrait, 1440 x 1800 px. NEGATIVE SPACE: no text area needed; keep a clean 6% margin. REALISM: crisp product visualization with realistic thumbnails. AVOID: phone frame, bezel, notch, hardware buttons, ID or document fields, payments, contracts, signatures, heart icons, garbled text.
```

---

### 08 · `08-status-disponibilidade.png`

| Campo | Definição |
|---|---|
| Categoria | Gestão de disponibilidade |
| Seção de uso | Como Funciona > Quem anuncia > Passo 2 (desktop e celular) |
| Objetivo | Explicar num relance que o locador muda o status de "Disponível" para "Alugado" |
| Mensagem | Alugou? Um toque e o anúncio fica atualizado |
| Público principal | Locador |
| Elemento principal | O mesmo anúncio em dois estados, antes e depois |
| Elementos secundários | Seta curva fina em sálvia ligando os dois estados; círculo sálvia; muito espaço em branco |
| Composição | Dois cartões horizontais iguais, um em cima do outro, com a seta entre eles |
| Enquadramento | Visualização de produto de frente, sem perspectiva |
| Posição dos elementos | Cartão "antes" no terço superior; seta no centro, à direita; cartão "depois" no terço inferior; margens largas |
| Cenário | Fundo off-white |
| Tipo de imóvel | Miniatura da kitnet 03 |
| Direção fotográfica | Visualização de produto, simples e muito visual |
| Iluminação | Suave e uniforme |
| Cores predominantes | Off-white, branco, sálvia escuro no primeiro estado e cinza-azulado no segundo |
| Proporção | 1:1 |
| Resolução | Master 1600 × 1600 px; exportar 1200 × 1200 e 800 × 800 (até 200 KB) |
| Área livre para texto | Não |
| Posição da área livre | Não se aplica; margem limpa de 10% |
| Dispositivo | Ambos |
| Referências | `sglk-mobile-busca.png`, `sglk-identidade-visual.png`, `05-kitnet-03-quarto.png`, `06-painel-locador-desktop.png` aprovada |
| Restrições | Cartões idênticos, mudando só o status selecionado; nenhum texto além dos listados |
| Não deve aparecer | Cursor gigante, mãos, confete, notificação, data, valores de pagamento, coração |
| Reuso | Nenhum |
| Texto alternativo | "O anúncio da Kitnet aconchegante muda de disponível para alugado com um toque." |

```text
SGLK BASE PROMPT. BRAND: SGLK (Sistema de Gerenciamento e Locação de Kitnets), a modern Brazilian web platform connecting people searching for compact housing (kitnets, 20-25 m² studios) with small property owners. Users search with filters (neighborhood, price, amenities), see clear listings with photos, price, neighborhood, size and availability ("Disponível" or "Alugado"), and contact the owner directly through WhatsApp. VISUAL IDENTITY: minimal, clean, modern, trustworthy and approachable; premium digital-product aesthetic without looking luxurious; generous negative space; soft off-white and white backgrounds; deep navy as the primary structural color; muted sage green as the main accent; light gray for secondary surfaces and borders; green indicates available properties; signature elements: large soft pale-sage circles, very thin arc lines and softly blurred tropical leaves at the edges. UI DIRECTION: clean responsive web interface floating without any device frame; rounded cards (16 px radius) and panels (24 px radius); rectangular buttons with 12 px radius, not pill-shaped; pill-shaped status tags and filter chips; subtle 1 px light-gray borders; very soft navy-tinted shadows; simple rounded line icons; clear visual hierarchy; minimal interface density; geometric sans-serif typography similar to Plus Jakarta Sans, in sentence case; all interface text in Brazilian Portuguese exactly as quoted in this prompt, and no other text. PHOTOGRAPHIC DIRECTION: realistic Brazilian compact apartments and kitnets in a warm tropical city; plausible small spaces; clean, tidy interiors; neutral materials (warm white walls, light beige porcelain floor tiles, light wood, white cabinets); warm wood and subtle greenery; eye-level camera, straight verticals, no ultra-wide distortion; no luxury penthouses or oversized apartments. LIGHTING: soft natural daylight, diffused shadows, bright but not overexposed, comfortable residential feeling. REALISM: photorealistic architectural photography when showing properties; high-end product visualization when showing the interface; UI elements crisp, intentional and professionally designed. COLOR PALETTE: deep navy #0B2841 (logo, headings, text), interface navy #0C3E66 (primary buttons, selected chips), muted sage green #648B81 (accents), dark sage #45695F ("Disponível" tag with white text), slate gray #636E7B ("Alugado" tag with white text), light cool gray #D7D8DC (borders), off-white #FBFAF8 (backgrounds), warm light gray #F2F1EF (secondary surfaces), white #FFFFFF (cards), WhatsApp button green #15803D with white text. GENERAL CONSISTENCY RULE: Follow the supplied SGLK references exactly. Preserve the same logo, visual identity, color palette, interface language, rounded geometry, typography style and overall product character. PROPERTY CONSISTENCY RULE (when property references are supplied): Follow the supplied property references exactly. Preserve the same architecture, furniture layout, materials, colors, proportions and interior details. RESTRICTIONS: never add unsupported functionality; do not show in-platform payments, checkout, credit cards, rent payment dashboards, digital contracts, electronic signatures, credit scores, internal chat systems, video calls, financial analytics, banking interfaces or luxury real-estate brokerage features; no favorite or heart icons, no maps, no app-store badges, no verification seals; do not change the SGLK logo and do not invent another logo; do not change the brand colors; do not overcrowd the composition; no excessive gradients; no cartoon illustration; no generic corporate stock photography; no unrealistic luxury apartments; no random decorative UI without function; no watermarks; no slogans or headlines outside the interface.

IMAGE BRIEF: 08-status-disponibilidade, a simple, very visual product illustration of a landlord changing a listing's availability. Follow the supplied SGLK interface references exactly. Preserve the same visual identity, logo, color palette, typography style, spacing, rounded corners, cards, buttons, filters, status pills and overall interface language. Follow the supplied property references exactly for the thumbnail. COMPOSITION: square image on an off-white background (#FBFAF8) with generous empty space and a large soft pale-sage circle behind the center. Two identical white horizontal cards (16 px radius, 1 px light-gray border, very soft navy-tinted shadow) are stacked vertically, one in the upper third and one in the lower third, both straight and untilted. Between them, on the right side, a thin curved arrow drawn as a 2 px sage line (#648B81) points from the upper card down to the lower card. INTERFACE inside each card: on the left, a small rounded photo thumbnail of the cozy studio with white linen, a beige throw and light-wood open shelves; in the middle, "Kitnet aconchegante" in semibold navy with "Jardim Paulista" below it in slate gray; on the right, the small label "Status" above a two-option segmented control with the options "Disponível" and "Alugado". Upper card (before): "Disponível" is selected (dark sage #45695F background, white text) and "Alugado" is unselected (white background, slate gray text). Lower card (after): "Alugado" is selected (slate gray #636E7B background, white text) and "Disponível" is unselected (white background, slate gray text). Everything else in both cards is identical. LIGHTING: soft, even light. COLORS: off-white and white, navy text, dark sage in the first state, slate gray in the second, a sage arrow. FORMAT: 1:1 square, 1600 x 1600 px. NEGATIVE SPACE: no text area needed; keep a clean 10% margin on every side. REALISM: crisp, high-end product visualization. AVOID: giant cursor, hands, confetti, notifications, dates, payment values, heart icons, extra text, perspective tilt, device frames, garbled text.
```

---

### 09 · `09-contato-whatsapp.png`

| Campo | Definição |
|---|---|
| Categoria | Contato com o locador |
| Seção de uso | Como Funciona > Quem procura > Passo 3 (desktop e celular); Contato (desktop, coluna de informações) |
| Objetivo | Mostrar o fim da jornada: da kitnet escolhida direto para o WhatsApp, com mensagem pronta |
| Mensagem | Gostou? Fale direto com o locador, sem intermediário |
| Público principal | Locatário |
| Elemento principal | Botão "Falar no WhatsApp" |
| Elementos secundários | Resumo da kitnet escolhida no topo; caixa com a mensagem pronta; seta fina indicando a saída para o WhatsApp |
| Composição | Vertical, com três blocos empilhados: resumo do anúncio, caixa da mensagem e botão; círculo sálvia atrás; folhas no canto inferior direito |
| Enquadramento | Visualização de produto de frente, sem perspectiva |
| Posição dos elementos | Resumo no terço superior; mensagem no centro; botão no terço inferior; seta saindo do botão para a borda direita |
| Cenário | Fundo off-white |
| Tipo de imóvel | Miniatura da kitnet 01 |
| Direção fotográfica | Visualização de produto |
| Iluminação | Suave e uniforme |
| Cores predominantes | Off-white, branco, azul-marinho e verde do botão |
| Proporção | 4:5 |
| Resolução | Master 1440 × 1800 px; exportar 1080 × 1350 e 720 × 900 (até 200 KB) |
| Área livre para texto | Não |
| Posição da área livre | Não se aplica; margem limpa de 8% |
| Dispositivo | Ambos |
| Referências | `sglk-mobile-busca.png`, `sglk-identidade-visual.png`, `04-kitnet-destaque-01.png`, `05-kitnet-01-quarto.png` |
| Restrições | Uma única caixa de mensagem, sem conversa; botão no estado livre (sem cadeado), enquanto o login não for decidido |
| Não deve aparecer | Tela do aplicativo WhatsApp, lista de conversas, campo de resposta, avatares, horários, "visto", telefone completo, chat interno do SGLK |
| Reuso | Página Contato (desktop); cópia `sglk-contato-locador.png` em `meus - produtos/` |
| Texto alternativo | "Anúncio da Kitnet mobiliada com mensagem pronta e botão para falar com o locador no WhatsApp." |

```text
SGLK BASE PROMPT. BRAND: SGLK (Sistema de Gerenciamento e Locação de Kitnets), a modern Brazilian web platform connecting people searching for compact housing (kitnets, 20-25 m² studios) with small property owners. Users search with filters (neighborhood, price, amenities), see clear listings with photos, price, neighborhood, size and availability ("Disponível" or "Alugado"), and contact the owner directly through WhatsApp. VISUAL IDENTITY: minimal, clean, modern, trustworthy and approachable; premium digital-product aesthetic without looking luxurious; generous negative space; soft off-white and white backgrounds; deep navy as the primary structural color; muted sage green as the main accent; light gray for secondary surfaces and borders; green indicates available properties; signature elements: large soft pale-sage circles, very thin arc lines and softly blurred tropical leaves at the edges. UI DIRECTION: clean responsive web interface floating without any device frame; rounded cards (16 px radius) and panels (24 px radius); rectangular buttons with 12 px radius, not pill-shaped; pill-shaped status tags and filter chips; subtle 1 px light-gray borders; very soft navy-tinted shadows; simple rounded line icons; clear visual hierarchy; minimal interface density; geometric sans-serif typography similar to Plus Jakarta Sans, in sentence case; all interface text in Brazilian Portuguese exactly as quoted in this prompt, and no other text. PHOTOGRAPHIC DIRECTION: realistic Brazilian compact apartments and kitnets in a warm tropical city; plausible small spaces; clean, tidy interiors; neutral materials (warm white walls, light beige porcelain floor tiles, light wood, white cabinets); warm wood and subtle greenery; eye-level camera, straight verticals, no ultra-wide distortion; no luxury penthouses or oversized apartments. LIGHTING: soft natural daylight, diffused shadows, bright but not overexposed, comfortable residential feeling. REALISM: photorealistic architectural photography when showing properties; high-end product visualization when showing the interface; UI elements crisp, intentional and professionally designed. COLOR PALETTE: deep navy #0B2841 (logo, headings, text), interface navy #0C3E66 (primary buttons, selected chips), muted sage green #648B81 (accents), dark sage #45695F ("Disponível" tag with white text), slate gray #636E7B ("Alugado" tag with white text), light cool gray #D7D8DC (borders), off-white #FBFAF8 (backgrounds), warm light gray #F2F1EF (secondary surfaces), white #FFFFFF (cards), WhatsApp button green #15803D with white text. GENERAL CONSISTENCY RULE: Follow the supplied SGLK references exactly. Preserve the same logo, visual identity, color palette, interface language, rounded geometry, typography style and overall product character. PROPERTY CONSISTENCY RULE (when property references are supplied): Follow the supplied property references exactly. Preserve the same architecture, furniture layout, materials, colors, proportions and interior details. RESTRICTIONS: never add unsupported functionality; do not show in-platform payments, checkout, credit cards, rent payment dashboards, digital contracts, electronic signatures, credit scores, internal chat systems, video calls, financial analytics, banking interfaces or luxury real-estate brokerage features; no favorite or heart icons, no maps, no app-store badges, no verification seals; do not change the SGLK logo and do not invent another logo; do not change the brand colors; do not overcrowd the composition; no excessive gradients; no cartoon illustration; no generic corporate stock photography; no unrealistic luxury apartments; no random decorative UI without function; no watermarks; no slogans or headlines outside the interface.

IMAGE BRIEF: 09-contato-whatsapp, a product visualization of the final step of the renter's journey: from the chosen kitnet straight to WhatsApp with a pre-filled message. Follow the supplied SGLK interface references exactly. Preserve the same visual identity, logo, color palette, typography style, spacing, rounded corners, cards, buttons, filters, status pills and overall interface language. Follow the supplied property references exactly for the thumbnail. COMPOSITION: vertical image on an off-white background (#FBFAF8) with three straight, untilted blocks stacked in the center, a large soft pale-sage circle behind them and softly blurred tropical leaves entering the bottom-right corner. BLOCK 1 (upper third): a compact white listing summary card (16 px radius, 1 px light-gray border, very soft shadow) with a small rounded photo thumbnail of the furnished studio bedroom (dark-gray headboard, white duvet, tall fiddle-leaf fig) on the left and, on the right, a dark sage pill tag "Disponível" (#45695F, white text), "Kitnet mobiliada" in semibold navy, a location-pin icon with "Centro" and "R$ 1.200/mês" in bold navy. BLOCK 2 (center): a single white rounded message box (16 px radius, light-gray border) with a small outline speech-bubble icon in the top-left corner and the pre-filled message in navy: "Olá! Vi a Kitnet mobiliada no Centro pelo SGLK e gostaria de mais informações." It is one standalone message preview, not a conversation. BLOCK 3 (lower third): a large full-width green button "Falar no WhatsApp" (#15803D, white text, white WhatsApp glyph on the left, small outward arrow icon on the right, 12 px radius). A thin dashed sage line (#648B81) curves from the right end of the button toward the right edge of the image, suggesting the redirect to WhatsApp. LIGHTING: soft, even light. COLORS: off-white and white, navy text, dark sage tag, green only on the button. FORMAT: 4:5 portrait, 1440 x 1800 px. NEGATIVE SPACE: no text area needed; keep a clean 8% margin. REALISM: crisp, high-end product visualization. AVOID: the WhatsApp app interface, chat list, conversation thread, reply field, avatars, timestamps, read receipts, full phone numbers, any internal chat screen, lock icons, heart icons, device frames, garbled text.
```

---

### 10 · `10-seguranca-confianca.png`

| Campo | Definição |
|---|---|
| Categoria | Segurança e confiança |
| Seção de uso | Home > Segurança e confiança (desktop e celular) |
| Objetivo | Mostrar que cada anúncio traz as informações que ajudam a evitar golpes |
| Mensagem | Tudo à vista: fotos, preço, bairro, status e contato direto |
| Público principal | Locatário |
| Elemento principal | Card da kitnet 01 com marcadores de check em cada informação |
| Elementos secundários | Foto grande da entrada do prédio da kitnet 01; círculo sálvia |
| Composição | Foto do prédio à esquerda, com cantos arredondados; card flutuando à direita, sobreposto à foto; 5 marcadores sálvia ao lado do card |
| Enquadramento | Foto de arquitetura de frente; card de frente, inclinado 2° |
| Posição dos elementos | Foto ocupando de 0 a 58% da largura; card de 45% a 92% da largura, centrado na altura; marcadores na borda direita do card, alinhados com foto, preço, bairro, selo e botão |
| Cenário | Fundo off-white; foto do prédio de dois andares numa manhã de sol |
| Tipo de imóvel | Kitnet 01 (prédio e foto do quarto) |
| Direção fotográfica | Arquitetura realista + visualização de produto |
| Iluminação | Sol da manhã na foto; luz uniforme no card |
| Cores predominantes | Off-white, branco, cinza-claro do prédio, azul-marinho e sálvia escuro |
| Proporção | 4:3 |
| Resolução | Master 2000 × 1500 px; exportar 1600 × 1200 e 800 × 600 (até 250 KB) |
| Área livre para texto | Não: o texto e a lista de checks do site ficam ao lado ou abaixo |
| Posição da área livre | Não se aplica; margem limpa de 6% |
| Dispositivo | Ambos |
| Referências | `05-kitnet-01-fachada.png`, `04-kitnet-destaque-01.png`, `sglk-identidade-visual.png` |
| Restrições | Marcadores são só círculos com check, sem palavras; nenhum selo de verificação |
| Não deve aparecer | Escudo com "verificado", cadeado, selo de garantia, estrelas de avaliação, documentos, pessoas |
| Reuso | Nenhum |
| Texto alternativo | "Anúncio de kitnet com foto, preço, bairro, status e botão de contato em destaque, diante do prédio." |

```text
SGLK BASE PROMPT. BRAND: SGLK (Sistema de Gerenciamento e Locação de Kitnets), a modern Brazilian web platform connecting people searching for compact housing (kitnets, 20-25 m² studios) with small property owners. Users search with filters (neighborhood, price, amenities), see clear listings with photos, price, neighborhood, size and availability ("Disponível" or "Alugado"), and contact the owner directly through WhatsApp. VISUAL IDENTITY: minimal, clean, modern, trustworthy and approachable; premium digital-product aesthetic without looking luxurious; generous negative space; soft off-white and white backgrounds; deep navy as the primary structural color; muted sage green as the main accent; light gray for secondary surfaces and borders; green indicates available properties; signature elements: large soft pale-sage circles, very thin arc lines and softly blurred tropical leaves at the edges. UI DIRECTION: clean responsive web interface floating without any device frame; rounded cards (16 px radius) and panels (24 px radius); rectangular buttons with 12 px radius, not pill-shaped; pill-shaped status tags and filter chips; subtle 1 px light-gray borders; very soft navy-tinted shadows; simple rounded line icons; clear visual hierarchy; minimal interface density; geometric sans-serif typography similar to Plus Jakarta Sans, in sentence case; all interface text in Brazilian Portuguese exactly as quoted in this prompt, and no other text. PHOTOGRAPHIC DIRECTION: realistic Brazilian compact apartments and kitnets in a warm tropical city; plausible small spaces; clean, tidy interiors; neutral materials (warm white walls, light beige porcelain floor tiles, light wood, white cabinets); warm wood and subtle greenery; eye-level camera, straight verticals, no ultra-wide distortion; no luxury penthouses or oversized apartments. LIGHTING: soft natural daylight, diffused shadows, bright but not overexposed, comfortable residential feeling. REALISM: photorealistic architectural photography when showing properties; high-end product visualization when showing the interface; UI elements crisp, intentional and professionally designed. COLOR PALETTE: deep navy #0B2841 (logo, headings, text), interface navy #0C3E66 (primary buttons, selected chips), muted sage green #648B81 (accents), dark sage #45695F ("Disponível" tag with white text), slate gray #636E7B ("Alugado" tag with white text), light cool gray #D7D8DC (borders), off-white #FBFAF8 (backgrounds), warm light gray #F2F1EF (secondary surfaces), white #FFFFFF (cards), WhatsApp button green #15803D with white text. GENERAL CONSISTENCY RULE: Follow the supplied SGLK references exactly. Preserve the same logo, visual identity, color palette, interface language, rounded geometry, typography style and overall product character. PROPERTY CONSISTENCY RULE (when property references are supplied): Follow the supplied property references exactly. Preserve the same architecture, furniture layout, materials, colors, proportions and interior details. RESTRICTIONS: never add unsupported functionality; do not show in-platform payments, checkout, credit cards, rent payment dashboards, digital contracts, electronic signatures, credit scores, internal chat systems, video calls, financial analytics, banking interfaces or luxury real-estate brokerage features; no favorite or heart icons, no maps, no app-store badges, no verification seals; do not change the SGLK logo and do not invent another logo; do not change the brand colors; do not overcrowd the composition; no excessive gradients; no cartoon illustration; no generic corporate stock photography; no unrealistic luxury apartments; no random decorative UI without function; no watermarks; no slogans or headlines outside the interface.

IMAGE BRIEF: 10-seguranca-confianca, an institutional image showing that every SGLK listing gives clear, organized information. Follow the supplied SGLK interface references exactly. Preserve the same visual identity, logo, color palette, typography style, spacing, rounded corners, cards, buttons, filters, status pills and overall interface language. Follow the supplied property references exactly. Preserve the same architecture, furniture layout, materials, colors, proportions and interior details. COMPOSITION: off-white background (#FBFAF8). On the left, from the left edge to about 58% of the width, a large photograph with 24 px rounded corners of the small two-story residential building of Kitnet 01 (light-gray and white painted walls, external concrete staircase with a black metal handrail, white doors along an open upper corridor, dark-gray metal gate, a few potted plants) on a sunny morning. On the right, from about 45% to 92% of the width and centered vertically, a white listing card floats over the edge of the photo, tilted 2 degrees, with a very soft navy-tinted shadow; a large soft pale-sage circle sits behind the card. INTERFACE: the card follows the SGLK listing card: photo inset 8 px with 12 px radius showing the furnished studio bedroom (dark-gray headboard, white duvet, folded gray throw, tall fiddle-leaf fig, window with a white sheer curtain), dark sage pill tag "Disponível" (#45695F, white text) on the photo's top-left corner, "Kitnet mobiliada" in semibold navy, a location-pin icon with "Centro", "R$ 1.200/mês" in bold navy, line icons with "1", "1" and "25 m²", and a full-width green button "Falar no WhatsApp" (#15803D, white text, white WhatsApp glyph). Just outside the right edge of the card, five small dark sage circles (#45695F) with white check marks, each aligned with one element: the photo, the status tag, the neighborhood line, the price and the button, connected to them by very short thin sage lines. The check circles carry no words. LIGHTING: morning sunlight in the building photo, soft even light on the card. COLORS: off-white, white, light gray building, navy text, dark sage checks and tag, green only on the button. FORMAT: 4:3 landscape, 2000 x 1500 px. NEGATIVE SPACE: no text area needed, because the website text and checklist sit beside or below the image; keep a clean 6% margin. REALISM: photorealistic architecture and crisp product visualization. AVOID: shields with "verified" text, padlocks, guarantee seals, star ratings, documents, people, cars, readable house numbers or signs, heart icons, garbled text.
```

---

### 11 · `11-lifestyle-novo-comeco-desktop.png`

| Campo | Definição |
|---|---|
| Categoria | Estilo de vida |
| Seção de uso | Home > Novos começos (desktop) |
| Objetivo | Vender a ideia de encontrar um espaço para começar uma nova fase |
| Mensagem | Mais que kitnets, novos começos |
| Público principal | Locatário (estudantes e jovens profissionais) |
| Elemento principal | Kitnet 04 iluminada pela manhã, recém-ocupada |
| Elementos secundários | Duas caixas de mudança organizadas junto à parede (uma aberta, com toalhas dobradas); mesa redonda com caneca e caderno; plantas; porta de vidro da varanda aberta, com cortina leve |
| Composição | Vista ampla do estúdio: cama no terço esquerdo; mesa e cozinha sálvia à direita; caixas no primeiro plano, à direita |
| Enquadramento | Câmera a 1,3m, lente equivalente a 28mm, verticais retas |
| Posição dos elementos | Cama da borda esquerda até 40% da largura; porta de vidro ao fundo, no centro; mesa e cadeira sálvia no terço direito; caixas na base, à direita |
| Cenário | Interior, manhã |
| Tipo de imóvel | Kitnet 04 (estilo de vida) |
| Direção fotográfica | Foto de interiores de estilo de vida, autêntica, sem pessoas |
| Iluminação | Sol da manhã entrando pela porta de vidro, quente e suave |
| Cores predominantes | Branco quente, bege, verde-sálvia (manta e armários), madeira clara e verde das plantas |
| Proporção | 3:2 |
| Resolução | Master 2400 × 1600 px; exportar 1600 × 1067 e 800 × 533 (até 250 KB) |
| Área livre para texto | Não: o texto da seção fica ao lado da imagem |
| Posição da área livre | Não se aplica |
| Dispositivo | Desktop |
| Referências | `sglk-lifestyle-kitnet-busca.png` (o interior), `sglk-identidade-visual.png` (cores) |
| Restrições | Mesma kitnet 04 do mockup, sem a interface flutuante; quadros sem texto |
| Não deve aparecer | Pessoas, textos nos quadros, caixas com marca, bagunça, ar de luxo, interface |
| Reuso | Referência de `13-cta-final` e `15-jovem-estudando` |
| Texto alternativo | "Kitnet iluminada pela manhã, com cama arrumada, plantas e caixas de mudança organizadas." |

```text
SGLK BASE PROMPT. BRAND: SGLK (Sistema de Gerenciamento e Locação de Kitnets), a modern Brazilian web platform connecting people searching for compact housing (kitnets, 20-25 m² studios) with small property owners. Users search with filters (neighborhood, price, amenities), see clear listings with photos, price, neighborhood, size and availability ("Disponível" or "Alugado"), and contact the owner directly through WhatsApp. VISUAL IDENTITY: minimal, clean, modern, trustworthy and approachable; premium digital-product aesthetic without looking luxurious; generous negative space; soft off-white and white backgrounds; deep navy as the primary structural color; muted sage green as the main accent; light gray for secondary surfaces and borders; green indicates available properties; signature elements: large soft pale-sage circles, very thin arc lines and softly blurred tropical leaves at the edges. UI DIRECTION: clean responsive web interface floating without any device frame; rounded cards (16 px radius) and panels (24 px radius); rectangular buttons with 12 px radius, not pill-shaped; pill-shaped status tags and filter chips; subtle 1 px light-gray borders; very soft navy-tinted shadows; simple rounded line icons; clear visual hierarchy; minimal interface density; geometric sans-serif typography similar to Plus Jakarta Sans, in sentence case; all interface text in Brazilian Portuguese exactly as quoted in this prompt, and no other text. PHOTOGRAPHIC DIRECTION: realistic Brazilian compact apartments and kitnets in a warm tropical city; plausible small spaces; clean, tidy interiors; neutral materials (warm white walls, light beige porcelain floor tiles, light wood, white cabinets); warm wood and subtle greenery; eye-level camera, straight verticals, no ultra-wide distortion; no luxury penthouses or oversized apartments. LIGHTING: soft natural daylight, diffused shadows, bright but not overexposed, comfortable residential feeling. REALISM: photorealistic architectural photography when showing properties; high-end product visualization when showing the interface; UI elements crisp, intentional and professionally designed. COLOR PALETTE: deep navy #0B2841 (logo, headings, text), interface navy #0C3E66 (primary buttons, selected chips), muted sage green #648B81 (accents), dark sage #45695F ("Disponível" tag with white text), slate gray #636E7B ("Alugado" tag with white text), light cool gray #D7D8DC (borders), off-white #FBFAF8 (backgrounds), warm light gray #F2F1EF (secondary surfaces), white #FFFFFF (cards), WhatsApp button green #15803D with white text. GENERAL CONSISTENCY RULE: Follow the supplied SGLK references exactly. Preserve the same logo, visual identity, color palette, interface language, rounded geometry, typography style and overall product character. PROPERTY CONSISTENCY RULE (when property references are supplied): Follow the supplied property references exactly. Preserve the same architecture, furniture layout, materials, colors, proportions and interior details. RESTRICTIONS: never add unsupported functionality; do not show in-platform payments, checkout, credit cards, rent payment dashboards, digital contracts, electronic signatures, credit scores, internal chat systems, video calls, financial analytics, banking interfaces or luxury real-estate brokerage features; no favorite or heart icons, no maps, no app-store badges, no verification seals; do not change the SGLK logo and do not invent another logo; do not change the brand colors; do not overcrowd the composition; no excessive gradients; no cartoon illustration; no generic corporate stock photography; no unrealistic luxury apartments; no random decorative UI without function; no watermarks; no slogans or headlines outside the interface.

IMAGE BRIEF: 11-lifestyle-novo-comeco-desktop, an emotional lifestyle photograph about finding a place to start a new phase of life. This is a pure interior photograph: no interface, no logo and no text of any kind. Follow the supplied property references exactly. Preserve the same architecture, furniture layout, materials, colors, proportions and interior details of the studio in the supplied lifestyle reference, but without the floating interface. PROPERTY: Kitnet 04, a bright studio used only for lifestyle scenes: double bed with a light-wood headboard, beige linen bedding, sage-green pillows and a sage-green knitted throw; floor-to-ceiling glass balcony door with a black frame and a white sheer curtain; kitchenette with sage-green lower cabinets, white countertop, black faucet, open light-wood shelves with plants and jars, compact fridge; round light-wood table with a sage-green upholstered chair; vertical light-wood slat panel on one wall; framed abstract line-art posters without any text; several green plants; light porcelain floor; jute rug. STORY: someone has just moved in: two plain cardboard moving boxes stand neatly against the wall, one open with folded towels on top; a coffee mug and a closed notebook rest on the round table; the balcony door is open and the sheer curtain moves slightly. SHOT: wide view of the studio; the bed runs from the left edge to about 40% of the width, the glass balcony door is in the background center, the table and sage chair fill the right third, the boxes sit in the bottom-right foreground. CAMERA: eye-level at 1.3 m, 28 mm equivalent lens, straight verticals, no ultra-wide distortion; the studio must look its real compact size. LIGHTING: warm, soft morning sun entering through the balcony door, gentle long shadows, bright but not overexposed. COLORS: warm white, beige, sage green, light wood and plant greens. FORMAT: 3:2 landscape, 2400 x 1600 px. NEGATIVE SPACE: no text area needed, because the website text sits beside the image. REALISM: photorealistic lifestyle interior photography, authentic and calm. AVOID: people, text or letters on posters or boxes, brand logos, clutter, luxury decor, oversized room, floating interface, dark vignette.
```

---

### 11 · `11-lifestyle-novo-comeco-mobile.png`

| Campo | Definição |
|---|---|
| Categoria | Estilo de vida |
| Seção de uso | Home > Novos começos (celular e tablet) |
| Objetivo | Levar a mesma emoção da versão desktop para a tela vertical |
| Mensagem | Mais que kitnets, novos começos |
| Público principal | Locatário |
| Elemento principal | Canto da cama com a manta sálvia e a porta de vidro iluminada ao fundo |
| Elementos secundários | Caixas de mudança, planta, cortina leve |
| Composição | Vertical: cama e manta sálvia no terço inferior; porta de vidro com luz no terço superior; caixas à direita |
| Enquadramento | Câmera a 1,1m, lente equivalente a 35mm, verticais retas |
| Posição dos elementos | Porta de vidro centralizada no alto; cama no primeiro plano, embaixo; caixas na borda direita, no meio da altura |
| Cenário | Interior, manhã |
| Tipo de imóvel | Kitnet 04 |
| Direção fotográfica | Foto de interiores de estilo de vida, sem pessoas |
| Iluminação | Sol da manhã entrando pela porta, quente e suave |
| Cores predominantes | Branco quente, bege, verde-sálvia, madeira clara e verde das plantas |
| Proporção | 4:5 |
| Resolução | Master 1440 × 1800 px; exportar 1080 × 1350 e 720 × 900 (até 200 KB) |
| Área livre para texto | Não |
| Posição da área livre | Não se aplica |
| Dispositivo | Celular e tablet |
| Referências | `11-lifestyle-novo-comeco-desktop.png` aprovada, `sglk-lifestyle-kitnet-busca.png` |
| Restrições | Mesma kitnet e mesma manhã da versão desktop |
| Não deve aparecer | Pessoas, texto, marcas, bagunça, luxo |
| Reuso | Nenhum |
| Texto alternativo | "Canto de uma kitnet iluminada, com manta verde na cama, plantas e caixas de mudança." |

```text
SGLK BASE PROMPT. BRAND: SGLK (Sistema de Gerenciamento e Locação de Kitnets), a modern Brazilian web platform connecting people searching for compact housing (kitnets, 20-25 m² studios) with small property owners. Users search with filters (neighborhood, price, amenities), see clear listings with photos, price, neighborhood, size and availability ("Disponível" or "Alugado"), and contact the owner directly through WhatsApp. VISUAL IDENTITY: minimal, clean, modern, trustworthy and approachable; premium digital-product aesthetic without looking luxurious; generous negative space; soft off-white and white backgrounds; deep navy as the primary structural color; muted sage green as the main accent; light gray for secondary surfaces and borders; green indicates available properties; signature elements: large soft pale-sage circles, very thin arc lines and softly blurred tropical leaves at the edges. UI DIRECTION: clean responsive web interface floating without any device frame; rounded cards (16 px radius) and panels (24 px radius); rectangular buttons with 12 px radius, not pill-shaped; pill-shaped status tags and filter chips; subtle 1 px light-gray borders; very soft navy-tinted shadows; simple rounded line icons; clear visual hierarchy; minimal interface density; geometric sans-serif typography similar to Plus Jakarta Sans, in sentence case; all interface text in Brazilian Portuguese exactly as quoted in this prompt, and no other text. PHOTOGRAPHIC DIRECTION: realistic Brazilian compact apartments and kitnets in a warm tropical city; plausible small spaces; clean, tidy interiors; neutral materials (warm white walls, light beige porcelain floor tiles, light wood, white cabinets); warm wood and subtle greenery; eye-level camera, straight verticals, no ultra-wide distortion; no luxury penthouses or oversized apartments. LIGHTING: soft natural daylight, diffused shadows, bright but not overexposed, comfortable residential feeling. REALISM: photorealistic architectural photography when showing properties; high-end product visualization when showing the interface; UI elements crisp, intentional and professionally designed. COLOR PALETTE: deep navy #0B2841 (logo, headings, text), interface navy #0C3E66 (primary buttons, selected chips), muted sage green #648B81 (accents), dark sage #45695F ("Disponível" tag with white text), slate gray #636E7B ("Alugado" tag with white text), light cool gray #D7D8DC (borders), off-white #FBFAF8 (backgrounds), warm light gray #F2F1EF (secondary surfaces), white #FFFFFF (cards), WhatsApp button green #15803D with white text. GENERAL CONSISTENCY RULE: Follow the supplied SGLK references exactly. Preserve the same logo, visual identity, color palette, interface language, rounded geometry, typography style and overall product character. PROPERTY CONSISTENCY RULE (when property references are supplied): Follow the supplied property references exactly. Preserve the same architecture, furniture layout, materials, colors, proportions and interior details. RESTRICTIONS: never add unsupported functionality; do not show in-platform payments, checkout, credit cards, rent payment dashboards, digital contracts, electronic signatures, credit scores, internal chat systems, video calls, financial analytics, banking interfaces or luxury real-estate brokerage features; no favorite or heart icons, no maps, no app-store badges, no verification seals; do not change the SGLK logo and do not invent another logo; do not change the brand colors; do not overcrowd the composition; no excessive gradients; no cartoon illustration; no generic corporate stock photography; no unrealistic luxury apartments; no random decorative UI without function; no watermarks; no slogans or headlines outside the interface.

IMAGE BRIEF: 11-lifestyle-novo-comeco-mobile, the vertical version of the "new beginning" lifestyle photograph for mobile screens. This is a pure interior photograph: no interface, no logo and no text of any kind. Follow the supplied property references exactly. Preserve the same architecture, furniture layout, materials, colors, proportions and interior details. PROPERTY: Kitnet 04, the same bright studio: double bed with a light-wood headboard, beige linen bedding, sage-green pillows and a sage-green knitted throw; floor-to-ceiling glass balcony door with a black frame and a white sheer curtain; kitchenette with sage-green lower cabinets and open light-wood shelves; round light-wood table with a sage-green chair; framed abstract line-art posters without text; green plants; light porcelain floor; jute rug. STORY: someone has just moved in: two plain cardboard moving boxes stand neatly by the wall, one open with folded towels. SHOT: vertical composition; the glowing glass balcony door with the sheer curtain is centered in the upper half; the corner of the bed with the sage-green throw fills the bottom third in the foreground; the boxes sit at the right edge, mid-height; a plant at the left edge. CAMERA: 1.1 m high, 35 mm equivalent lens, straight verticals. LIGHTING: the same warm morning sun entering through the balcony door, soft shadows, bright but not overexposed. COLORS: warm white, beige, sage green, light wood and plant greens. FORMAT: 4:5 portrait, 1440 x 1800 px. NEGATIVE SPACE: no text area needed. REALISM: photorealistic lifestyle interior photography, authentic and calm. AVOID: people, text on posters or boxes, brand logos, clutter, luxury decor, floating interface.
```

---

### 12 · `12-como-funciona.png`

| Campo | Definição |
|---|---|
| Categoria | Como funciona |
| Seção de uso | Home > Como funciona (resumo), desktop e celular |
| Objetivo | Resumir num relance os 3 passos do locatário |
| Mensagem | Busque, compare e entre em contato |
| Público principal | Locatário |
| Elemento principal | Três momentos da interface ligados por uma linha tracejada |
| Elementos secundários | 3 pontos sálvia na linha; círculo sálvia ao fundo |
| Composição | Diagonal do canto superior esquerdo ao inferior direito: barra de busca → dois cards pequenos lado a lado → botão do WhatsApp com a mensagem pronta |
| Enquadramento | Visualização de produto de frente, sem perspectiva |
| Posição dos elementos | Momento 1 no terço superior esquerdo; momento 2 no centro; momento 3 no terço inferior direito; linha tracejada passando por um ponto sálvia ao lado de cada um |
| Cenário | Fundo off-white |
| Tipo de imóvel | Miniaturas das kitnets 01 e 02 |
| Direção fotográfica | Visualização de produto |
| Iluminação | Suave e uniforme |
| Cores predominantes | Off-white, branco, azul-marinho, sálvia e verde do botão |
| Proporção | 1:1 |
| Resolução | Master 1600 × 1600 px; exportar 1200 × 1200 e 800 × 800 (até 200 KB) |
| Área livre para texto | Não: números e títulos dos passos ficam no HTML |
| Posição da área livre | Não se aplica; margem limpa de 8% |
| Dispositivo | Ambos |
| Referências | `02-busca-kitnets-desktop.png`, `04-kitnet-destaque-01.png` e `09-contato-whatsapp.png` aprovadas, `sglk-identidade-visual.png` |
| Restrições | Sem números nem títulos dos passos dentro da imagem |
| Não deve aparecer | Números, setas grossas, ícones de dinheiro, chat, coração, mapa |
| Reuso | Nenhum |
| Texto alternativo | "Três etapas no SGLK: buscar por bairro, comparar kitnets e falar com o locador pelo WhatsApp." |

```text
SGLK BASE PROMPT. BRAND: SGLK (Sistema de Gerenciamento e Locação de Kitnets), a modern Brazilian web platform connecting people searching for compact housing (kitnets, 20-25 m² studios) with small property owners. Users search with filters (neighborhood, price, amenities), see clear listings with photos, price, neighborhood, size and availability ("Disponível" or "Alugado"), and contact the owner directly through WhatsApp. VISUAL IDENTITY: minimal, clean, modern, trustworthy and approachable; premium digital-product aesthetic without looking luxurious; generous negative space; soft off-white and white backgrounds; deep navy as the primary structural color; muted sage green as the main accent; light gray for secondary surfaces and borders; green indicates available properties; signature elements: large soft pale-sage circles, very thin arc lines and softly blurred tropical leaves at the edges. UI DIRECTION: clean responsive web interface floating without any device frame; rounded cards (16 px radius) and panels (24 px radius); rectangular buttons with 12 px radius, not pill-shaped; pill-shaped status tags and filter chips; subtle 1 px light-gray borders; very soft navy-tinted shadows; simple rounded line icons; clear visual hierarchy; minimal interface density; geometric sans-serif typography similar to Plus Jakarta Sans, in sentence case; all interface text in Brazilian Portuguese exactly as quoted in this prompt, and no other text. PHOTOGRAPHIC DIRECTION: realistic Brazilian compact apartments and kitnets in a warm tropical city; plausible small spaces; clean, tidy interiors; neutral materials (warm white walls, light beige porcelain floor tiles, light wood, white cabinets); warm wood and subtle greenery; eye-level camera, straight verticals, no ultra-wide distortion; no luxury penthouses or oversized apartments. LIGHTING: soft natural daylight, diffused shadows, bright but not overexposed, comfortable residential feeling. REALISM: photorealistic architectural photography when showing properties; high-end product visualization when showing the interface; UI elements crisp, intentional and professionally designed. COLOR PALETTE: deep navy #0B2841 (logo, headings, text), interface navy #0C3E66 (primary buttons, selected chips), muted sage green #648B81 (accents), dark sage #45695F ("Disponível" tag with white text), slate gray #636E7B ("Alugado" tag with white text), light cool gray #D7D8DC (borders), off-white #FBFAF8 (backgrounds), warm light gray #F2F1EF (secondary surfaces), white #FFFFFF (cards), WhatsApp button green #15803D with white text. GENERAL CONSISTENCY RULE: Follow the supplied SGLK references exactly. Preserve the same logo, visual identity, color palette, interface language, rounded geometry, typography style and overall product character. PROPERTY CONSISTENCY RULE (when property references are supplied): Follow the supplied property references exactly. Preserve the same architecture, furniture layout, materials, colors, proportions and interior details. RESTRICTIONS: never add unsupported functionality; do not show in-platform payments, checkout, credit cards, rent payment dashboards, digital contracts, electronic signatures, credit scores, internal chat systems, video calls, financial analytics, banking interfaces or luxury real-estate brokerage features; no favorite or heart icons, no maps, no app-store badges, no verification seals; do not change the SGLK logo and do not invent another logo; do not change the brand colors; do not overcrowd the composition; no excessive gradients; no cartoon illustration; no generic corporate stock photography; no unrealistic luxury apartments; no random decorative UI without function; no watermarks; no slogans or headlines outside the interface.

IMAGE BRIEF: 12-como-funciona, a square visual summary of the renter's journey in three moments: search, compare and contact. Follow the supplied SGLK interface references exactly. Preserve the same visual identity, logo, color palette, typography style, spacing, rounded corners, cards, buttons, filters, status pills and overall interface language. Follow the supplied property references exactly for the thumbnails. COMPOSITION: square image on an off-white background (#FBFAF8) with a large soft pale-sage circle behind the center. Three small, straight, untilted interface fragments are arranged on a diagonal from the top-left to the bottom-right, each with a very soft navy-tinted shadow, connected by one thin dashed sage line (#648B81) that passes a small solid sage dot beside each fragment. MOMENT 1 (top-left third): a white search bar (12 px radius) with a magnifier icon and the placeholder "Busque por bairro...", with two selected chips below it, "Até R$ 1.500" and "Mobiliada" (solid navy #0C3E66 pills, white text, check marks). MOMENT 2 (center): two small white listing cards side by side (16 px radius), each with a photo thumbnail, a pill tag, a name and a price: the first with the furnished studio bedroom (dark-gray headboard, tall fiddle-leaf fig), tag "Disponível" (#45695F, white text), "Kitnet mobiliada", "R$ 1.200/mês"; the second with the compact kitchenette (white fridge, charcoal cabinets), tag "Disponível", "Kitnet moderna", "R$ 950/mês". MOMENT 3 (bottom-right third): a green button "Falar no WhatsApp" (#15803D, white text, white WhatsApp glyph), with a small white rounded message box above it containing the text "Olá! Vi a Kitnet mobiliada no Centro pelo SGLK e gostaria de mais informações." LIGHTING: soft, even light. COLORS: off-white and white, navy, sage, green only on the button. FORMAT: 1:1 square, 1600 x 1600 px. NEGATIVE SPACE: no text area needed, because the step numbers and titles are in the website HTML; keep a clean 8% margin. REALISM: crisp, high-end product visualization. AVOID: step numbers, step titles, thick arrows, money icons, chat threads, heart icons, maps, device frames, garbled text.
```

---

### 13 · `13-cta-final-desktop.png`

| Campo | Definição |
|---|---|
| Categoria | Chamada final |
| Seção de uso | Home > Chamada final (desktop) |
| Objetivo | Fechar a página com emoção e deixar espaço para o convite "Encontrar minha kitnet" |
| Mensagem | A porta para a sua nova fase está aberta |
| Público principal | Locatário |
| Elemento principal | Porta de madeira clara aberta da kitnet 04, revelando o interior iluminado |
| Elementos secundários | Pessoa jovem de costas entrando, com mochila e uma caixa; corredor externo claro; planta num vaso ao lado da porta |
| Composição | Lado esquerdo (45%) com a parede lisa e clara do corredor, livre para texto e botão; lado direito (55%) com a porta aberta e a pessoa |
| Enquadramento | Câmera a 1,4m no corredor, lente equivalente a 35mm, verticais retas; pessoa de costas, sem rosto visível |
| Posição dos elementos | Porta centrada a 72% da largura; pessoa no batente, entrando; interior visível pela porta; vaso à direita da porta |
| Cenário | Corredor externo de um pequeno prédio residencial, manhã; interior da kitnet 04 visto pela porta |
| Tipo de imóvel | Kitnet 04 |
| Direção fotográfica | Foto de estilo de vida natural, sem pose |
| Iluminação | Luz do dia difusa no corredor; sol quente vindo de dentro da kitnet |
| Cores predominantes | Off-white, madeira clara, verde-sálvia visto lá dentro e verde das plantas |
| Proporção | 21:9 |
| Resolução | Master 2560 × 1097 px; exportar 1920 × 823 e 1440 × 617 (até 250 KB) |
| Área livre para texto | Sim: título, texto e botão "Encontrar minha kitnet" |
| Posição da área livre | Esquerda, 45% da largura, na altura toda |
| Dispositivo | Desktop |
| Referências | `11-lifestyle-novo-comeco-desktop.png` aprovada, `sglk-lifestyle-kitnet-busca.png`, `sglk-hero-desktop.png` (atmosfera) |
| Restrições | Pessoa brasileira, natural, de costas; área livre lisa e clara, sem sombra forte |
| Não deve aparecer | Chaves gigantes, placa "Aluga-se", logo, texto, número na porta, pessoa encarando a câmera, escuridão, vinheta |
| Reuso | Nenhum |
| Texto alternativo | "Pessoa jovem com mochila e caixa entrando numa kitnet iluminada pela porta aberta." |

```text
SGLK BASE PROMPT. BRAND: SGLK (Sistema de Gerenciamento e Locação de Kitnets), a modern Brazilian web platform connecting people searching for compact housing (kitnets, 20-25 m² studios) with small property owners. Users search with filters (neighborhood, price, amenities), see clear listings with photos, price, neighborhood, size and availability ("Disponível" or "Alugado"), and contact the owner directly through WhatsApp. VISUAL IDENTITY: minimal, clean, modern, trustworthy and approachable; premium digital-product aesthetic without looking luxurious; generous negative space; soft off-white and white backgrounds; deep navy as the primary structural color; muted sage green as the main accent; light gray for secondary surfaces and borders; green indicates available properties; signature elements: large soft pale-sage circles, very thin arc lines and softly blurred tropical leaves at the edges. UI DIRECTION: clean responsive web interface floating without any device frame; rounded cards (16 px radius) and panels (24 px radius); rectangular buttons with 12 px radius, not pill-shaped; pill-shaped status tags and filter chips; subtle 1 px light-gray borders; very soft navy-tinted shadows; simple rounded line icons; clear visual hierarchy; minimal interface density; geometric sans-serif typography similar to Plus Jakarta Sans, in sentence case; all interface text in Brazilian Portuguese exactly as quoted in this prompt, and no other text. PHOTOGRAPHIC DIRECTION: realistic Brazilian compact apartments and kitnets in a warm tropical city; plausible small spaces; clean, tidy interiors; neutral materials (warm white walls, light beige porcelain floor tiles, light wood, white cabinets); warm wood and subtle greenery; eye-level camera, straight verticals, no ultra-wide distortion; no luxury penthouses or oversized apartments. LIGHTING: soft natural daylight, diffused shadows, bright but not overexposed, comfortable residential feeling. REALISM: photorealistic architectural photography when showing properties; high-end product visualization when showing the interface; UI elements crisp, intentional and professionally designed. COLOR PALETTE: deep navy #0B2841 (logo, headings, text), interface navy #0C3E66 (primary buttons, selected chips), muted sage green #648B81 (accents), dark sage #45695F ("Disponível" tag with white text), slate gray #636E7B ("Alugado" tag with white text), light cool gray #D7D8DC (borders), off-white #FBFAF8 (backgrounds), warm light gray #F2F1EF (secondary surfaces), white #FFFFFF (cards), WhatsApp button green #15803D with white text. GENERAL CONSISTENCY RULE: Follow the supplied SGLK references exactly. Preserve the same logo, visual identity, color palette, interface language, rounded geometry, typography style and overall product character. PROPERTY CONSISTENCY RULE (when property references are supplied): Follow the supplied property references exactly. Preserve the same architecture, furniture layout, materials, colors, proportions and interior details. RESTRICTIONS: never add unsupported functionality; do not show in-platform payments, checkout, credit cards, rent payment dashboards, digital contracts, electronic signatures, credit scores, internal chat systems, video calls, financial analytics, banking interfaces or luxury real-estate brokerage features; no favorite or heart icons, no maps, no app-store badges, no verification seals; do not change the SGLK logo and do not invent another logo; do not change the brand colors; do not overcrowd the composition; no excessive gradients; no cartoon illustration; no generic corporate stock photography; no unrealistic luxury apartments; no random decorative UI without function; no watermarks; no slogans or headlines outside the interface.

IMAGE BRIEF: 13-cta-final-desktop, the closing image of the homepage, with a wide clean area for the final headline and button. This is a lifestyle photograph: no interface, no logo and no text of any kind. Follow the supplied property references exactly. Preserve the same architecture, furniture layout, materials, colors, proportions and interior details of the bright studio (Kitnet 04). COMPOSITION: ultra-wide horizontal scene in the bright, clean open-air corridor of a small residential building. The left 45% of the frame is a smooth, evenly lit off-white wall (close to #FBFAF8) with almost no detail, reserved for website typography and a button. In the right 55%, a light-wood apartment door stands wide open, centered at about 72% of the width; through it we see the sunlit interior of Kitnet 04 (bed with beige linen and a sage-green throw, sage-green kitchen cabinets, round light-wood table, green plants, glass balcony door glowing with daylight). A young Brazilian person, seen from behind in casual clothes with a backpack and carrying one medium plain cardboard box, is stepping through the doorway; no face visible. A potted tropical plant stands on the corridor floor to the right of the door. FRAMING AND CAMERA: 1.4 m high in the corridor, 35 mm equivalent lens, straight verticals, natural candid moment, not posed. LIGHTING: soft diffused daylight in the corridor; warm morning sunlight pouring out from inside the kitnet onto the doorway floor; bright but not overexposed. COLORS: off-white, light wood, sage green inside, natural plant greens. FORMAT: 21:9 ultra-wide landscape, 2560 x 1097 px. NEGATIVE SPACE: Leave the left 45% of the image visually clean and low-detail for website typography and a button; keep it evenly lit with no strong shadows. REALISM: photorealistic lifestyle photography, natural and warm. AVOID: faces looking at the camera, giant keys, "for rent" signs, door numbers, logos, text, luxury corridor, darkness, dark vignette, heavy shadows in the clean area.
```

---

### 13 · `13-cta-final-mobile.png`

| Campo | Definição |
|---|---|
| Categoria | Chamada final |
| Seção de uso | Home > Chamada final (celular e tablet) |
| Objetivo | Fechar a página no celular, com espaço no alto para o convite e o botão |
| Mensagem | A porta para a sua nova fase está aberta |
| Público principal | Locatário |
| Elemento principal | Porta de madeira clara aberta, com a pessoa entrando |
| Elementos secundários | Interior iluminado da kitnet 04; vaso com planta |
| Composição | Vertical: parte de cima (45%) com parede e teto lisos e claros, livres para texto; porta e pessoa na metade de baixo |
| Enquadramento | Câmera a 1,2m, lente equivalente a 35mm, verticais retas; pessoa de costas |
| Posição dos elementos | Porta centralizada, do meio até a base; pessoa no batente; vaso na borda direita |
| Cenário | O mesmo corredor e a mesma manhã da versão desktop |
| Tipo de imóvel | Kitnet 04 |
| Direção fotográfica | Foto de estilo de vida natural, sem pose |
| Iluminação | Luz difusa no corredor; sol quente vindo de dentro |
| Cores predominantes | Off-white, madeira clara, verde-sálvia e verde das plantas |
| Proporção | 4:5 |
| Resolução | Master 1440 × 1800 px; exportar 1080 × 1350 e 720 × 900 (até 200 KB) |
| Área livre para texto | Sim: título, texto e botão |
| Posição da área livre | Topo, 45% da altura |
| Dispositivo | Celular e tablet |
| Referências | `13-cta-final-desktop.png` aprovada, `11-lifestyle-novo-comeco-desktop.png` |
| Restrições | Mesma pessoa, mesma roupa, mesma porta e mesmo interior da versão desktop |
| Não deve aparecer | Rosto voltado para a câmera, placas, número na porta, logo, texto, vinheta |
| Reuso | Nenhum |
| Texto alternativo | "Pessoa jovem com mochila entrando numa kitnet iluminada pela porta aberta." |

```text
SGLK BASE PROMPT. BRAND: SGLK (Sistema de Gerenciamento e Locação de Kitnets), a modern Brazilian web platform connecting people searching for compact housing (kitnets, 20-25 m² studios) with small property owners. Users search with filters (neighborhood, price, amenities), see clear listings with photos, price, neighborhood, size and availability ("Disponível" or "Alugado"), and contact the owner directly through WhatsApp. VISUAL IDENTITY: minimal, clean, modern, trustworthy and approachable; premium digital-product aesthetic without looking luxurious; generous negative space; soft off-white and white backgrounds; deep navy as the primary structural color; muted sage green as the main accent; light gray for secondary surfaces and borders; green indicates available properties; signature elements: large soft pale-sage circles, very thin arc lines and softly blurred tropical leaves at the edges. UI DIRECTION: clean responsive web interface floating without any device frame; rounded cards (16 px radius) and panels (24 px radius); rectangular buttons with 12 px radius, not pill-shaped; pill-shaped status tags and filter chips; subtle 1 px light-gray borders; very soft navy-tinted shadows; simple rounded line icons; clear visual hierarchy; minimal interface density; geometric sans-serif typography similar to Plus Jakarta Sans, in sentence case; all interface text in Brazilian Portuguese exactly as quoted in this prompt, and no other text. PHOTOGRAPHIC DIRECTION: realistic Brazilian compact apartments and kitnets in a warm tropical city; plausible small spaces; clean, tidy interiors; neutral materials (warm white walls, light beige porcelain floor tiles, light wood, white cabinets); warm wood and subtle greenery; eye-level camera, straight verticals, no ultra-wide distortion; no luxury penthouses or oversized apartments. LIGHTING: soft natural daylight, diffused shadows, bright but not overexposed, comfortable residential feeling. REALISM: photorealistic architectural photography when showing properties; high-end product visualization when showing the interface; UI elements crisp, intentional and professionally designed. COLOR PALETTE: deep navy #0B2841 (logo, headings, text), interface navy #0C3E66 (primary buttons, selected chips), muted sage green #648B81 (accents), dark sage #45695F ("Disponível" tag with white text), slate gray #636E7B ("Alugado" tag with white text), light cool gray #D7D8DC (borders), off-white #FBFAF8 (backgrounds), warm light gray #F2F1EF (secondary surfaces), white #FFFFFF (cards), WhatsApp button green #15803D with white text. GENERAL CONSISTENCY RULE: Follow the supplied SGLK references exactly. Preserve the same logo, visual identity, color palette, interface language, rounded geometry, typography style and overall product character. PROPERTY CONSISTENCY RULE (when property references are supplied): Follow the supplied property references exactly. Preserve the same architecture, furniture layout, materials, colors, proportions and interior details. RESTRICTIONS: never add unsupported functionality; do not show in-platform payments, checkout, credit cards, rent payment dashboards, digital contracts, electronic signatures, credit scores, internal chat systems, video calls, financial analytics, banking interfaces or luxury real-estate brokerage features; no favorite or heart icons, no maps, no app-store badges, no verification seals; do not change the SGLK logo and do not invent another logo; do not change the brand colors; do not overcrowd the composition; no excessive gradients; no cartoon illustration; no generic corporate stock photography; no unrealistic luxury apartments; no random decorative UI without function; no watermarks; no slogans or headlines outside the interface.

IMAGE BRIEF: 13-cta-final-mobile, the vertical closing image of the homepage for mobile screens, with a clean upper area for the final headline and button. This is a lifestyle photograph: no interface, no logo and no text of any kind. Follow the supplied property references exactly. Preserve the same corridor, door, interior, person and clothing as the supplied desktop version. COMPOSITION: vertical scene in the same bright open-air corridor. The upper 45% of the frame is a smooth, evenly lit off-white wall and ceiling area (close to #FBFAF8) with almost no detail. In the lower half, the light-wood door stands wide open, centered; through it we see the sunlit interior of Kitnet 04 (bed with a sage-green throw, sage-green kitchen cabinets, green plants, glowing glass balcony door). The same young Brazilian person, seen from behind with a backpack and one plain cardboard box, is stepping through the doorway; no face visible. A potted tropical plant stands at the right edge. FRAMING AND CAMERA: 1.2 m high, 35 mm equivalent lens, straight verticals, natural candid moment. LIGHTING: soft diffused daylight in the corridor; warm morning sunlight coming from inside; bright but not overexposed. COLORS: off-white, light wood, sage green inside, plant greens. FORMAT: 4:5 portrait, 1440 x 1800 px. NEGATIVE SPACE: Keep the upper 45% clear for headline and CTA placement, evenly lit, with no strong shadows or objects. REALISM: photorealistic lifestyle photography, natural and warm. AVOID: faces looking at the camera, signs, door numbers, logos, text, luxury corridor, dark vignette, heavy shadows in the clean area.
```

---

### 14 · `14-mobile-telas-desktop.png`

| Campo | Definição |
|---|---|
| Categoria | Experiência mobile |
| Seção de uso | Home > No celular (desktop) |
| Objetivo | Mostrar que o site funciona bem no navegador do celular: busca, detalhes e filtros |
| Mensagem | Tudo pelo celular, direto do navegador |
| Público principal | Locatário |
| Elemento principal | Três telas verticais flutuantes, sem moldura de aparelho |
| Elementos secundários | Círculo sálvia atrás da tela central; arcos finos; folhas desfocadas nos cantos de baixo |
| Composição | Leque suave: busca à esquerda, detalhes no centro (maior, à frente) e filtros à direita |
| Enquadramento | Visualização de produto de frente |
| Posição dos elementos | Telas centralizadas na imagem; a do meio 10% maior e sobreposta às laterais; laterais inclinadas 4° para fora |
| Cenário | Fundo off-white |
| Tipo de imóvel | Kitnets 01 e 02 nas telas |
| Direção fotográfica | Visualização de produto |
| Iluminação | Suave e uniforme |
| Cores predominantes | Off-white, branco, azul-marinho, sálvia e verde do botão |
| Proporção | 16:9 |
| Resolução | Master 2400 × 1350 px; exportar 1600 × 900 e 1024 × 576 (até 250 KB) |
| Área livre para texto | Não: o texto da seção fica acima ou ao lado |
| Posição da área livre | Não se aplica; margem limpa de 6% |
| Dispositivo | Desktop |
| Referências | `sglk-mobile-busca.png`, `sglk-identidade-visual.png`, `02-busca-kitnets-mobile.png`, `14-mobile-filtros.png` e `14-mobile-detalhes.png` aprovadas |
| Restrições | Telas iguais às versões isoladas 02-mobile, 14-mobile-filtros e 14-mobile-detalhes |
| Não deve aparecer | Moldura de celular, entalhe, selos de loja de aplicativos, "baixe o app", coração, mapa |
| Reuso | Nenhum |
| Texto alternativo | "Três telas do SGLK no celular: busca com resultados, detalhes da kitnet e filtros." |

```text
SGLK BASE PROMPT. BRAND: SGLK (Sistema de Gerenciamento e Locação de Kitnets), a modern Brazilian web platform connecting people searching for compact housing (kitnets, 20-25 m² studios) with small property owners. Users search with filters (neighborhood, price, amenities), see clear listings with photos, price, neighborhood, size and availability ("Disponível" or "Alugado"), and contact the owner directly through WhatsApp. VISUAL IDENTITY: minimal, clean, modern, trustworthy and approachable; premium digital-product aesthetic without looking luxurious; generous negative space; soft off-white and white backgrounds; deep navy as the primary structural color; muted sage green as the main accent; light gray for secondary surfaces and borders; green indicates available properties; signature elements: large soft pale-sage circles, very thin arc lines and softly blurred tropical leaves at the edges. UI DIRECTION: clean responsive web interface floating without any device frame; rounded cards (16 px radius) and panels (24 px radius); rectangular buttons with 12 px radius, not pill-shaped; pill-shaped status tags and filter chips; subtle 1 px light-gray borders; very soft navy-tinted shadows; simple rounded line icons; clear visual hierarchy; minimal interface density; geometric sans-serif typography similar to Plus Jakarta Sans, in sentence case; all interface text in Brazilian Portuguese exactly as quoted in this prompt, and no other text. PHOTOGRAPHIC DIRECTION: realistic Brazilian compact apartments and kitnets in a warm tropical city; plausible small spaces; clean, tidy interiors; neutral materials (warm white walls, light beige porcelain floor tiles, light wood, white cabinets); warm wood and subtle greenery; eye-level camera, straight verticals, no ultra-wide distortion; no luxury penthouses or oversized apartments. LIGHTING: soft natural daylight, diffused shadows, bright but not overexposed, comfortable residential feeling. REALISM: photorealistic architectural photography when showing properties; high-end product visualization when showing the interface; UI elements crisp, intentional and professionally designed. COLOR PALETTE: deep navy #0B2841 (logo, headings, text), interface navy #0C3E66 (primary buttons, selected chips), muted sage green #648B81 (accents), dark sage #45695F ("Disponível" tag with white text), slate gray #636E7B ("Alugado" tag with white text), light cool gray #D7D8DC (borders), off-white #FBFAF8 (backgrounds), warm light gray #F2F1EF (secondary surfaces), white #FFFFFF (cards), WhatsApp button green #15803D with white text. GENERAL CONSISTENCY RULE: Follow the supplied SGLK references exactly. Preserve the same logo, visual identity, color palette, interface language, rounded geometry, typography style and overall product character. PROPERTY CONSISTENCY RULE (when property references are supplied): Follow the supplied property references exactly. Preserve the same architecture, furniture layout, materials, colors, proportions and interior details. RESTRICTIONS: never add unsupported functionality; do not show in-platform payments, checkout, credit cards, rent payment dashboards, digital contracts, electronic signatures, credit scores, internal chat systems, video calls, financial analytics, banking interfaces or luxury real-estate brokerage features; no favorite or heart icons, no maps, no app-store badges, no verification seals; do not change the SGLK logo and do not invent another logo; do not change the brand colors; do not overcrowd the composition; no excessive gradients; no cartoon illustration; no generic corporate stock photography; no unrealistic luxury apartments; no random decorative UI without function; no watermarks; no slogans or headlines outside the interface.

IMAGE BRIEF: 14-mobile-telas-desktop, a horizontal composition of three SGLK mobile web screens for desktop layouts. Follow the supplied SGLK interface references exactly. Preserve the same visual identity, logo, color palette, typography style, spacing, rounded corners, cards, buttons, filters, status pills and overall interface language. Follow the supplied references exactly: each screen must match its approved single-screen version. COMPOSITION: off-white background (#FBFAF8). Three tall floating mobile screens, white rounded rectangles with 32 px corner radius and no phone hardware at all, arranged in a gentle fan in the center: the middle screen is 10% larger, in front, straight; the left and right screens sit slightly behind it, tilted 4 degrees outward; all with very soft navy-tinted shadows. A large soft pale-sage circle sits behind the middle screen, very thin pale arc lines cross the background and softly blurred tropical leaves enter both bottom corners. LEFT SCREEN (search results): a search field with the placeholder "Busque por bairro...", selected chips "Até R$ 1.500" and "Mobiliada" (navy pills, white text), the text "3 kitnets encontradas" and a vertical listing card with the furnished studio bedroom photo, tag "Disponível" (#45695F, white text), "Kitnet mobiliada", "Centro", "R$ 1.200/mês", "1", "1", "25 m²". MIDDLE SCREEN (listing details): a large photo of the furnished studio bedroom (dark-gray headboard, white duvet, tall fiddle-leaf fig) with a small back-arrow icon and the counter "1/4" on it; tag "Disponível"; "Kitnet mobiliada" in bold navy; a location-pin icon with "Centro"; "R$ 1.200/mês"; icons with "1 quarto", "1 banheiro" and "25 m²"; light-gray chips "Mobiliada", "Wi-Fi" and "Ar-condicionado"; and a full-width green button "Falar no WhatsApp" (#15803D, white text, white WhatsApp glyph) fixed at the bottom of the screen. RIGHT SCREEN (filters): a panel titled "Filtros" rising from the bottom over a slightly dimmed list, with the sections "Bairro" (chips "Centro" selected, "Vila Nova", "Jardim Paulista"), "Faixa de preço" (a slider with the label "Até R$ 1.500") and "Comodidades" (chips "Mobiliada" selected, "Wi-Fi", "Ar-condicionado", "Cozinha equipada", "Área de estudo"), and at the bottom a text link "Limpar" and a solid navy button "Aplicar filtros" (#0C3E66, white text). LIGHTING: soft, even light. COLORS: off-white and white, navy, sage, green only on the WhatsApp button. FORMAT: 16:9 landscape, 2400 x 1350 px. NEGATIVE SPACE: no text area needed; keep a clean 6% margin. REALISM: crisp, high-end product visualization with realistic photos. AVOID: phone frames, bezels, notches, hardware buttons, carrier status bars, app-store badges, "download the app" messages, heart icons, maps, garbled text.
```

---

### 14 · `14-mobile-filtros.png`

| Campo | Definição |
|---|---|
| Categoria | Experiência mobile |
| Seção de uso | Como Funciona > Quem procura > Passo 1 (celular) |
| Objetivo | Mostrar como filtrar por bairro, preço e comodidades no celular |
| Mensagem | Filtre do seu jeito, com poucos toques |
| Público principal | Locatário |
| Elemento principal | Painel "Filtros" subindo da parte de baixo da tela |
| Elementos secundários | Lista escurecida atrás do painel; círculo sálvia; folhas desfocadas |
| Composição | Uma tela vertical flutuando no centro, inclinada 3° |
| Enquadramento | Visualização de produto de frente |
| Posição dos elementos | Tela com 70% da largura e 88% da altura; painel de filtros ocupando os 70% de baixo da tela |
| Cenário | Fundo off-white |
| Tipo de imóvel | Miniatura da kitnet 01 na lista escurecida |
| Direção fotográfica | Visualização de produto |
| Iluminação | Suave e uniforme |
| Cores predominantes | Off-white, branco, azul-marinho e sálvia |
| Proporção | 4:5 |
| Resolução | Master 1440 × 1800 px; exportar 1080 × 1350 e 720 × 900 (até 200 KB) |
| Área livre para texto | Não |
| Posição da área livre | Não se aplica; margem limpa de 6% |
| Dispositivo | Celular e tablet |
| Referências | `sglk-mobile-busca.png`, `sglk-identidade-visual.png`, `02-busca-kitnets-mobile.png` aprovada |
| Restrições | Só os 3 filtros do `specs/site.md`; textos legíveis numa tela de 360px |
| Não deve aparecer | Moldura de celular, filtros extras, mapa, coração |
| Reuso | Tela da direita de `14-mobile-telas-desktop` |
| Texto alternativo | "Painel de filtros do SGLK no celular, com bairro, faixa de preço e comodidades." |

```text
SGLK BASE PROMPT. BRAND: SGLK (Sistema de Gerenciamento e Locação de Kitnets), a modern Brazilian web platform connecting people searching for compact housing (kitnets, 20-25 m² studios) with small property owners. Users search with filters (neighborhood, price, amenities), see clear listings with photos, price, neighborhood, size and availability ("Disponível" or "Alugado"), and contact the owner directly through WhatsApp. VISUAL IDENTITY: minimal, clean, modern, trustworthy and approachable; premium digital-product aesthetic without looking luxurious; generous negative space; soft off-white and white backgrounds; deep navy as the primary structural color; muted sage green as the main accent; light gray for secondary surfaces and borders; green indicates available properties; signature elements: large soft pale-sage circles, very thin arc lines and softly blurred tropical leaves at the edges. UI DIRECTION: clean responsive web interface floating without any device frame; rounded cards (16 px radius) and panels (24 px radius); rectangular buttons with 12 px radius, not pill-shaped; pill-shaped status tags and filter chips; subtle 1 px light-gray borders; very soft navy-tinted shadows; simple rounded line icons; clear visual hierarchy; minimal interface density; geometric sans-serif typography similar to Plus Jakarta Sans, in sentence case; all interface text in Brazilian Portuguese exactly as quoted in this prompt, and no other text. PHOTOGRAPHIC DIRECTION: realistic Brazilian compact apartments and kitnets in a warm tropical city; plausible small spaces; clean, tidy interiors; neutral materials (warm white walls, light beige porcelain floor tiles, light wood, white cabinets); warm wood and subtle greenery; eye-level camera, straight verticals, no ultra-wide distortion; no luxury penthouses or oversized apartments. LIGHTING: soft natural daylight, diffused shadows, bright but not overexposed, comfortable residential feeling. REALISM: photorealistic architectural photography when showing properties; high-end product visualization when showing the interface; UI elements crisp, intentional and professionally designed. COLOR PALETTE: deep navy #0B2841 (logo, headings, text), interface navy #0C3E66 (primary buttons, selected chips), muted sage green #648B81 (accents), dark sage #45695F ("Disponível" tag with white text), slate gray #636E7B ("Alugado" tag with white text), light cool gray #D7D8DC (borders), off-white #FBFAF8 (backgrounds), warm light gray #F2F1EF (secondary surfaces), white #FFFFFF (cards), WhatsApp button green #15803D with white text. GENERAL CONSISTENCY RULE: Follow the supplied SGLK references exactly. Preserve the same logo, visual identity, color palette, interface language, rounded geometry, typography style and overall product character. PROPERTY CONSISTENCY RULE (when property references are supplied): Follow the supplied property references exactly. Preserve the same architecture, furniture layout, materials, colors, proportions and interior details. RESTRICTIONS: never add unsupported functionality; do not show in-platform payments, checkout, credit cards, rent payment dashboards, digital contracts, electronic signatures, credit scores, internal chat systems, video calls, financial analytics, banking interfaces or luxury real-estate brokerage features; no favorite or heart icons, no maps, no app-store badges, no verification seals; do not change the SGLK logo and do not invent another logo; do not change the brand colors; do not overcrowd the composition; no excessive gradients; no cartoon illustration; no generic corporate stock photography; no unrealistic luxury apartments; no random decorative UI without function; no watermarks; no slogans or headlines outside the interface.

IMAGE BRIEF: 14-mobile-filtros, a product visualization of the SGLK filter panel on a mobile screen. Follow the supplied SGLK interface references exactly. Preserve the same visual identity, logo, color palette, typography style, spacing, rounded corners, cards, buttons, filters, status pills and overall interface language. COMPOSITION: one tall floating mobile screen, a white rounded rectangle with 32 px corner radius and no phone hardware at all, centered, tilted 3 degrees, about 70% of the image width and 88% of its height, with a very soft navy-tinted shadow, over an off-white background (#FBFAF8). A large soft pale-sage circle sits behind the screen and softly blurred tropical leaves enter the bottom-left corner. INTERFACE inside the screen: the upper 30% shows the search results list slightly dimmed by a translucent navy overlay (a listing card with the furnished studio bedroom photo is faintly visible). Over it, a white panel with 24 px top corners rises from the bottom and fills the lower 70% of the screen: the title "Filtros" in bold navy with a close icon on the right; the section "Bairro" with chips "Centro" (selected: solid navy #0C3E66, white text, check mark), "Vila Nova" and "Jardim Paulista" (white pills, gray outline, navy text); the section "Faixa de preço" with a navy slider and the label "Até R$ 1.500"; the section "Comodidades" with chips "Mobiliada" (selected), "Wi-Fi", "Ar-condicionado", "Cozinha equipada" and "Área de estudo"; and at the bottom a text link "Limpar" in navy and a solid navy button "Aplicar filtros" (#0C3E66, white text, 12 px radius). All text must be legible when the image is shown 360 px wide. LIGHTING: soft, even light. COLORS: white, off-white, navy and sage. FORMAT: 4:5 portrait, 1440 x 1800 px. NEGATIVE SPACE: no text area needed; keep a clean 6% margin. REALISM: crisp, high-end product visualization. AVOID: phone frame, bezel, notch, hardware buttons, extra filter types, maps, heart icons, garbled text.
```

---

### 14 · `14-mobile-detalhes.png`

| Campo | Definição |
|---|---|
| Categoria | Experiência mobile |
| Seção de uso | Home > No celular (celular e tablet) |
| Objetivo | Mostrar os detalhes de uma kitnet no celular, com o botão de contato sempre à mão |
| Mensagem | Veja tudo sobre a kitnet e fale com o locador na hora |
| Público principal | Locatário |
| Elemento principal | Tela de detalhes da kitnet 01 |
| Elementos secundários | Galeria com contador, chips de comodidades, descrição curta e botão fixo do WhatsApp |
| Composição | Uma tela vertical flutuando no centro, inclinada 3°; círculo sálvia atrás; folhas no canto inferior direito |
| Enquadramento | Visualização de produto de frente |
| Posição dos elementos | Tela com 70% da largura e 88% da altura; foto no terço superior da tela; informações no meio; botão fixo na base |
| Cenário | Fundo off-white |
| Tipo de imóvel | Kitnet 01 |
| Direção fotográfica | Visualização de produto |
| Iluminação | Suave e uniforme |
| Cores predominantes | Off-white, branco, azul-marinho, sálvia e verde do botão |
| Proporção | 4:5 |
| Resolução | Master 1440 × 1800 px; exportar 1080 × 1350 e 720 × 900 (até 200 KB) |
| Área livre para texto | Não |
| Posição da área livre | Não se aplica; margem limpa de 6% |
| Dispositivo | Celular e tablet |
| Referências | `sglk-mobile-busca.png`, `sglk-identidade-visual.png`, `04-kitnet-destaque-01.png`, `05-kitnet-01-quarto.png` |
| Restrições | Botão no estado livre (sem cadeado), enquanto o login não for decidido |
| Não deve aparecer | Moldura de celular, mapa, coração, avaliações, chat, dados do locador |
| Reuso | Tela central de `14-mobile-telas-desktop`; cópia `sglk-mobile-detalhes.png` em `meus - produtos/` |
| Texto alternativo | "Detalhes da Kitnet mobiliada no celular, com foto, preço, comodidades e botão do WhatsApp." |

```text
SGLK BASE PROMPT. BRAND: SGLK (Sistema de Gerenciamento e Locação de Kitnets), a modern Brazilian web platform connecting people searching for compact housing (kitnets, 20-25 m² studios) with small property owners. Users search with filters (neighborhood, price, amenities), see clear listings with photos, price, neighborhood, size and availability ("Disponível" or "Alugado"), and contact the owner directly through WhatsApp. VISUAL IDENTITY: minimal, clean, modern, trustworthy and approachable; premium digital-product aesthetic without looking luxurious; generous negative space; soft off-white and white backgrounds; deep navy as the primary structural color; muted sage green as the main accent; light gray for secondary surfaces and borders; green indicates available properties; signature elements: large soft pale-sage circles, very thin arc lines and softly blurred tropical leaves at the edges. UI DIRECTION: clean responsive web interface floating without any device frame; rounded cards (16 px radius) and panels (24 px radius); rectangular buttons with 12 px radius, not pill-shaped; pill-shaped status tags and filter chips; subtle 1 px light-gray borders; very soft navy-tinted shadows; simple rounded line icons; clear visual hierarchy; minimal interface density; geometric sans-serif typography similar to Plus Jakarta Sans, in sentence case; all interface text in Brazilian Portuguese exactly as quoted in this prompt, and no other text. PHOTOGRAPHIC DIRECTION: realistic Brazilian compact apartments and kitnets in a warm tropical city; plausible small spaces; clean, tidy interiors; neutral materials (warm white walls, light beige porcelain floor tiles, light wood, white cabinets); warm wood and subtle greenery; eye-level camera, straight verticals, no ultra-wide distortion; no luxury penthouses or oversized apartments. LIGHTING: soft natural daylight, diffused shadows, bright but not overexposed, comfortable residential feeling. REALISM: photorealistic architectural photography when showing properties; high-end product visualization when showing the interface; UI elements crisp, intentional and professionally designed. COLOR PALETTE: deep navy #0B2841 (logo, headings, text), interface navy #0C3E66 (primary buttons, selected chips), muted sage green #648B81 (accents), dark sage #45695F ("Disponível" tag with white text), slate gray #636E7B ("Alugado" tag with white text), light cool gray #D7D8DC (borders), off-white #FBFAF8 (backgrounds), warm light gray #F2F1EF (secondary surfaces), white #FFFFFF (cards), WhatsApp button green #15803D with white text. GENERAL CONSISTENCY RULE: Follow the supplied SGLK references exactly. Preserve the same logo, visual identity, color palette, interface language, rounded geometry, typography style and overall product character. PROPERTY CONSISTENCY RULE (when property references are supplied): Follow the supplied property references exactly. Preserve the same architecture, furniture layout, materials, colors, proportions and interior details. RESTRICTIONS: never add unsupported functionality; do not show in-platform payments, checkout, credit cards, rent payment dashboards, digital contracts, electronic signatures, credit scores, internal chat systems, video calls, financial analytics, banking interfaces or luxury real-estate brokerage features; no favorite or heart icons, no maps, no app-store badges, no verification seals; do not change the SGLK logo and do not invent another logo; do not change the brand colors; do not overcrowd the composition; no excessive gradients; no cartoon illustration; no generic corporate stock photography; no unrealistic luxury apartments; no random decorative UI without function; no watermarks; no slogans or headlines outside the interface.

IMAGE BRIEF: 14-mobile-detalhes, a product visualization of the SGLK listing details on a mobile screen. Follow the supplied SGLK interface references exactly. Preserve the same visual identity, logo, color palette, typography style, spacing, rounded corners, cards, buttons, filters, status pills and overall interface language. Follow the supplied property references exactly. Preserve the same architecture, furniture layout, materials, colors, proportions and interior details. COMPOSITION: one tall floating mobile screen, a white rounded rectangle with 32 px corner radius and no phone hardware at all, centered, tilted 3 degrees, about 70% of the image width and 88% of its height, with a very soft navy-tinted shadow, over an off-white background (#FBFAF8). A large soft pale-sage circle sits behind the screen and softly blurred tropical leaves enter the bottom-right corner. INTERFACE inside the screen, from top to bottom: a large photo filling the top third of the screen, showing the furnished studio bedroom (double bed with a low dark-gray upholstered headboard, white duvet, folded gray throw, tall fiddle-leaf fig, two small black-framed botanical prints, window with a white sheer curtain), with a small circular back-arrow button in its top-left corner and a small counter "1/4" in its bottom-right corner; a dark sage pill tag "Disponível" (#45695F, white text); "Kitnet mobiliada" in bold navy; a location-pin icon with "Centro" in slate gray; "R$ 1.200/mês" in large bold navy; a row of line icons with "1 quarto", "1 banheiro" and "25 m²"; a row of light-gray chips (#F2F1EF, navy text): "Mobiliada", "Wi-Fi" and "Ar-condicionado"; a short paragraph in slate gray: "Kitnet mobiliada no Centro, com cama, armário e cozinha compacta."; and a full-width green button "Falar no WhatsApp" (#15803D, white text, white WhatsApp glyph) fixed at the bottom of the screen. All text must be legible when the image is shown 360 px wide. LIGHTING: soft, even light. COLORS: off-white and white, navy text, dark sage tag, green only on the button. FORMAT: 4:5 portrait, 1440 x 1800 px. NEGATIVE SPACE: no text area needed; keep a clean 6% margin. REALISM: crisp, high-end product visualization with a photorealistic photo. AVOID: phone frame, bezel, notch, hardware buttons, maps, heart icons, ratings, chat, owner's name or phone number, lock icons, garbled text.
```

---

### 15 · `15-estudante-celular.png`

| Campo | Definição |
|---|---|
| Categoria | Pessoas: estudante ou jovem morador |
| Seção de uso | Como Funciona > Quem procura (abertura da aba), desktop e celular |
| Objetivo | Dar rosto humano à busca: alguém do público procurando kitnet pelo celular |
| Mensagem | Procurar kitnet ficou simples, de onde você estiver |
| Público principal | Locatário (estudantes e trabalhadores temporários) |
| Elemento principal | Jovem brasileiro de uns 20 anos sentado num banco, olhando o celular |
| Elementos secundários | Mochila ao lado; árvores; fundo desfocado |
| Composição | Pessoa no terço direito, sentada; banco e árvores; fundo desfocado à esquerda |
| Enquadramento | Plano médio (da cintura para cima), 3/4 de perfil, lente equivalente a 50mm, profundidade de campo rasa |
| Posição dos elementos | Rosto a um terço do topo, à direita; celular na altura do peito; mochila no banco, à esquerda da pessoa |
| Cenário | Área arborizada ao ar livre numa cidade brasileira quente (praça ou campus), sem placas |
| Tipo de imóvel | Nenhum |
| Direção fotográfica | Estilo de vida documental, natural, sem pose publicitária |
| Iluminação | Luz natural da manhã filtrada pelas árvores |
| Cores predominantes | Verdes naturais, bege e roupas em tons neutros (azul-marinho, branco e sálvia) |
| Proporção | 4:3 |
| Resolução | Master 2000 × 1500 px; exportar 1600 × 1200 e 800 × 600 (até 250 KB) |
| Área livre para texto | Não |
| Posição da área livre | Não se aplica |
| Dispositivo | Ambos |
| Referências | `sglk-identidade-visual.png` (cores), `sglk-hero-desktop.png` (atmosfera) |
| Restrições | Tela do celular voltada para a pessoa, fora da vista; roupas sem marcas; aparência comum, não de modelo |
| Não deve aparecer | Logos em roupas, tela com interface inventada, pontos turísticos, placas, olhar para a câmera, grupo de pessoas posando |
| Reuso | Nenhum |
| Texto alternativo | "Estudante sentado num banco ao ar livre, procurando kitnet pelo celular." |

```text
SGLK BASE PROMPT. BRAND: SGLK (Sistema de Gerenciamento e Locação de Kitnets), a modern Brazilian web platform connecting people searching for compact housing (kitnets, 20-25 m² studios) with small property owners. Users search with filters (neighborhood, price, amenities), see clear listings with photos, price, neighborhood, size and availability ("Disponível" or "Alugado"), and contact the owner directly through WhatsApp. VISUAL IDENTITY: minimal, clean, modern, trustworthy and approachable; premium digital-product aesthetic without looking luxurious; generous negative space; soft off-white and white backgrounds; deep navy as the primary structural color; muted sage green as the main accent; light gray for secondary surfaces and borders; green indicates available properties; signature elements: large soft pale-sage circles, very thin arc lines and softly blurred tropical leaves at the edges. UI DIRECTION: clean responsive web interface floating without any device frame; rounded cards (16 px radius) and panels (24 px radius); rectangular buttons with 12 px radius, not pill-shaped; pill-shaped status tags and filter chips; subtle 1 px light-gray borders; very soft navy-tinted shadows; simple rounded line icons; clear visual hierarchy; minimal interface density; geometric sans-serif typography similar to Plus Jakarta Sans, in sentence case; all interface text in Brazilian Portuguese exactly as quoted in this prompt, and no other text. PHOTOGRAPHIC DIRECTION: realistic Brazilian compact apartments and kitnets in a warm tropical city; plausible small spaces; clean, tidy interiors; neutral materials (warm white walls, light beige porcelain floor tiles, light wood, white cabinets); warm wood and subtle greenery; eye-level camera, straight verticals, no ultra-wide distortion; no luxury penthouses or oversized apartments. LIGHTING: soft natural daylight, diffused shadows, bright but not overexposed, comfortable residential feeling. REALISM: photorealistic architectural photography when showing properties; high-end product visualization when showing the interface; UI elements crisp, intentional and professionally designed. COLOR PALETTE: deep navy #0B2841 (logo, headings, text), interface navy #0C3E66 (primary buttons, selected chips), muted sage green #648B81 (accents), dark sage #45695F ("Disponível" tag with white text), slate gray #636E7B ("Alugado" tag with white text), light cool gray #D7D8DC (borders), off-white #FBFAF8 (backgrounds), warm light gray #F2F1EF (secondary surfaces), white #FFFFFF (cards), WhatsApp button green #15803D with white text. GENERAL CONSISTENCY RULE: Follow the supplied SGLK references exactly. Preserve the same logo, visual identity, color palette, interface language, rounded geometry, typography style and overall product character. PROPERTY CONSISTENCY RULE (when property references are supplied): Follow the supplied property references exactly. Preserve the same architecture, furniture layout, materials, colors, proportions and interior details. RESTRICTIONS: never add unsupported functionality; do not show in-platform payments, checkout, credit cards, rent payment dashboards, digital contracts, electronic signatures, credit scores, internal chat systems, video calls, financial analytics, banking interfaces or luxury real-estate brokerage features; no favorite or heart icons, no maps, no app-store badges, no verification seals; do not change the SGLK logo and do not invent another logo; do not change the brand colors; do not overcrowd the composition; no excessive gradients; no cartoon illustration; no generic corporate stock photography; no unrealistic luxury apartments; no random decorative UI without function; no watermarks; no slogans or headlines outside the interface.

IMAGE BRIEF: 15-estudante-celular, a natural lifestyle photograph of a young person searching for a kitnet on a phone. This is a photograph with no interface, no logo and no text of any kind. SUBJECT: a young Brazilian university student around 20 years old, with a natural, everyday appearance, casual clothes in neutral tones (navy, white or sage) without any brand, sitting on a simple bench and looking at a smartphone with a light, relaxed expression. The phone screen faces the person and is not visible to the camera. A backpack rests on the bench beside them. COMPOSITION: the person sits in the right third of the frame; the face is about one third from the top; the phone is held at chest height; the bench and trees extend to the left, where the background falls softly out of focus. FRAMING AND CAMERA: medium shot from the waist up, three-quarter profile, 50 mm equivalent lens, shallow depth of field, eye-level camera, candid moment, the person does not look at the camera. SCENE: a tree-lined outdoor area in a warm Brazilian city, such as a small square or a campus walkway, with tropical greenery; no signs, no landmarks, no readable text. LIGHTING: soft natural morning light filtered through the trees, gentle dappled shadows, bright but not overexposed. COLORS: natural greens, beige and neutral clothing that harmonizes with navy and sage. FORMAT: 4:3 landscape, 2000 x 1500 px. NEGATIVE SPACE: no text area needed. REALISM: photorealistic documentary-style lifestyle photography, authentic, not an advertising pose. AVOID: visible phone screen, invented interfaces, brand logos on clothes, landmarks, signs, groups of posing people, looking at the camera, exaggerated smiles, studio lighting, deformed hands or faces.
```

---

### 15 · `15-jovem-estudando.png`

| Campo | Definição |
|---|---|
| Categoria | Pessoas: estudante ou jovem morador |
| Seção de uso | Home > Novos começos (desktop), ao lado de `11-lifestyle-novo-comeco-desktop` |
| Objetivo | Mostrar a kitnet como lugar de estudar e começar a vida |
| Mensagem | Um espaço seu para estudar e crescer |
| Público principal | Locatário (estudantes e jovens profissionais) |
| Elemento principal | Jovem estudando à mesa redonda da kitnet 04, perto da porta de vidro |
| Elementos secundários | Notebook, caderno, caneca, planta e luz da manhã |
| Composição | Vertical: pessoa sentada em perfil 3/4 no terço de baixo; porta de vidro iluminada ao fundo |
| Enquadramento | Plano médio, lente equivalente a 50mm, câmera na altura dos olhos da pessoa sentada |
| Posição dos elementos | Pessoa e mesa na metade de baixo; porta de vidro no alto, ao fundo; planta na borda esquerda |
| Cenário | Kitnet 04, manhã |
| Tipo de imóvel | Kitnet 04 |
| Direção fotográfica | Estilo de vida documental, natural |
| Iluminação | Sol da manhã entrando pela porta de vidro, quente e suave |
| Cores predominantes | Madeira clara, verde-sálvia (cadeira e armários), branco quente e verde das plantas |
| Proporção | 4:5 |
| Resolução | Master 1440 × 1800 px; exportar 1080 × 1350 e 720 × 900 (até 200 KB) |
| Área livre para texto | Não |
| Posição da área livre | Não se aplica |
| Dispositivo | Desktop |
| Referências | `11-lifestyle-novo-comeco-desktop.png` aprovada, `sglk-lifestyle-kitnet-busca.png` |
| Restrições | Mesma kitnet 04; tela do notebook virada ou fora de foco |
| Não deve aparecer | Interface legível na tela, marcas, livros com títulos legíveis, pose publicitária, olhar para a câmera |
| Reuso | Nenhum |
| Texto alternativo | "Jovem estudando com notebook e caderno numa kitnet clara, perto da porta da varanda." |

```text
SGLK BASE PROMPT. BRAND: SGLK (Sistema de Gerenciamento e Locação de Kitnets), a modern Brazilian web platform connecting people searching for compact housing (kitnets, 20-25 m² studios) with small property owners. Users search with filters (neighborhood, price, amenities), see clear listings with photos, price, neighborhood, size and availability ("Disponível" or "Alugado"), and contact the owner directly through WhatsApp. VISUAL IDENTITY: minimal, clean, modern, trustworthy and approachable; premium digital-product aesthetic without looking luxurious; generous negative space; soft off-white and white backgrounds; deep navy as the primary structural color; muted sage green as the main accent; light gray for secondary surfaces and borders; green indicates available properties; signature elements: large soft pale-sage circles, very thin arc lines and softly blurred tropical leaves at the edges. UI DIRECTION: clean responsive web interface floating without any device frame; rounded cards (16 px radius) and panels (24 px radius); rectangular buttons with 12 px radius, not pill-shaped; pill-shaped status tags and filter chips; subtle 1 px light-gray borders; very soft navy-tinted shadows; simple rounded line icons; clear visual hierarchy; minimal interface density; geometric sans-serif typography similar to Plus Jakarta Sans, in sentence case; all interface text in Brazilian Portuguese exactly as quoted in this prompt, and no other text. PHOTOGRAPHIC DIRECTION: realistic Brazilian compact apartments and kitnets in a warm tropical city; plausible small spaces; clean, tidy interiors; neutral materials (warm white walls, light beige porcelain floor tiles, light wood, white cabinets); warm wood and subtle greenery; eye-level camera, straight verticals, no ultra-wide distortion; no luxury penthouses or oversized apartments. LIGHTING: soft natural daylight, diffused shadows, bright but not overexposed, comfortable residential feeling. REALISM: photorealistic architectural photography when showing properties; high-end product visualization when showing the interface; UI elements crisp, intentional and professionally designed. COLOR PALETTE: deep navy #0B2841 (logo, headings, text), interface navy #0C3E66 (primary buttons, selected chips), muted sage green #648B81 (accents), dark sage #45695F ("Disponível" tag with white text), slate gray #636E7B ("Alugado" tag with white text), light cool gray #D7D8DC (borders), off-white #FBFAF8 (backgrounds), warm light gray #F2F1EF (secondary surfaces), white #FFFFFF (cards), WhatsApp button green #15803D with white text. GENERAL CONSISTENCY RULE: Follow the supplied SGLK references exactly. Preserve the same logo, visual identity, color palette, interface language, rounded geometry, typography style and overall product character. PROPERTY CONSISTENCY RULE (when property references are supplied): Follow the supplied property references exactly. Preserve the same architecture, furniture layout, materials, colors, proportions and interior details. RESTRICTIONS: never add unsupported functionality; do not show in-platform payments, checkout, credit cards, rent payment dashboards, digital contracts, electronic signatures, credit scores, internal chat systems, video calls, financial analytics, banking interfaces or luxury real-estate brokerage features; no favorite or heart icons, no maps, no app-store badges, no verification seals; do not change the SGLK logo and do not invent another logo; do not change the brand colors; do not overcrowd the composition; no excessive gradients; no cartoon illustration; no generic corporate stock photography; no unrealistic luxury apartments; no random decorative UI without function; no watermarks; no slogans or headlines outside the interface.

IMAGE BRIEF: 15-jovem-estudando, a natural lifestyle photograph of a young resident studying at home in a bright kitnet. This is a photograph with no interface, no logo and no text of any kind. Follow the supplied property references exactly. Preserve the same architecture, furniture layout, materials, colors, proportions and interior details of Kitnet 04: round light-wood table with a sage-green upholstered chair, kitchenette with sage-green lower cabinets and open light-wood shelves, floor-to-ceiling glass balcony door with a black frame and a white sheer curtain, green plants, light porcelain floor. SUBJECT: a young Brazilian person in their early twenties, natural everyday appearance, casual clothes in neutral tones without brands, sitting on the sage-green chair at the round table, studying with an open laptop, a notebook and a coffee mug; focused and calm, writing in the notebook. The laptop screen is turned away from the camera or out of focus. COMPOSITION: vertical frame; the person and the table fill the lower half; the glowing glass balcony door is in the upper background; a plant enters at the left border. FRAMING AND CAMERA: medium shot, three-quarter profile, 50 mm equivalent lens, camera at the seated person's eye level, gentle depth of field, candid moment, the person does not look at the camera. LIGHTING: warm, soft morning sun entering through the balcony door, gentle shadows, bright but not overexposed. COLORS: light wood, sage green, warm white and plant greens. FORMAT: 4:5 portrait, 1440 x 1800 px. NEGATIVE SPACE: no text area needed. REALISM: photorealistic documentary-style lifestyle photography, authentic and calm. AVOID: readable screens or interfaces, brand logos, book titles, advertising poses, looking at the camera, clutter, luxury decor, deformed hands or faces.
```

---

### 16 · `16-locador-gestao.png`

| Campo | Definição |
|---|---|
| Categoria | Locador |
| Seção de uso | Como Funciona > Quem anuncia (abertura da aba), desktop e celular |
| Objetivo | Mostrar que administrar kitnets pelo SGLK é fácil para um pequeno proprietário |
| Mensagem | Gerenciar seus imóveis é simples, sem complicação |
| Público principal | Locador |
| Elemento principal | Pequeno proprietário de uns 55 anos usando notebook e celular numa mesa simples |
| Elementos secundários | Varanda coberta; vila de kitnets da kitnet 03 ao fundo, desfocada |
| Composição | Pessoa no terço esquerdo, sentada à mesa; kitnets ao fundo, à direita |
| Enquadramento | Plano médio, lente equivalente a 50mm, profundidade de campo rasa |
| Posição dos elementos | Pessoa e notebook no terço esquerdo; celular na mão; fileira de kitnets desfocada do centro para a direita |
| Cenário | Varanda coberta da casa do locador, ao lado do lote das kitnets; fim de tarde |
| Tipo de imóvel | Vila da kitnet 03, ao fundo |
| Direção fotográfica | Estilo de vida documental, natural |
| Iluminação | Luz da tarde, quente e suave |
| Cores predominantes | Madeira, creme, verdes naturais e roupas em tons neutros |
| Proporção | 4:3 |
| Resolução | Master 2000 × 1500 px; exportar 1600 × 1200 e 800 × 600 (até 250 KB) |
| Área livre para texto | Não |
| Posição da área livre | Não se aplica |
| Dispositivo | Ambos |
| Referências | `05-kitnet-03-fachada.png` aprovada, `sglk-identidade-visual.png` (cores) |
| Restrições | Roupa casual (camisa simples, sem terno); telas do notebook e do celular viradas ou fora de foco |
| Não deve aparecer | Executivo, escritório corporativo, dinheiro, maquininha de cartão, contratos, chaves de carro de luxo, tela com dados legíveis |
| Reuso | Nenhum |
| Texto alternativo | "Pequeno proprietário usando notebook numa varanda, com kitnets ao fundo." |

```text
SGLK BASE PROMPT. BRAND: SGLK (Sistema de Gerenciamento e Locação de Kitnets), a modern Brazilian web platform connecting people searching for compact housing (kitnets, 20-25 m² studios) with small property owners. Users search with filters (neighborhood, price, amenities), see clear listings with photos, price, neighborhood, size and availability ("Disponível" or "Alugado"), and contact the owner directly through WhatsApp. VISUAL IDENTITY: minimal, clean, modern, trustworthy and approachable; premium digital-product aesthetic without looking luxurious; generous negative space; soft off-white and white backgrounds; deep navy as the primary structural color; muted sage green as the main accent; light gray for secondary surfaces and borders; green indicates available properties; signature elements: large soft pale-sage circles, very thin arc lines and softly blurred tropical leaves at the edges. UI DIRECTION: clean responsive web interface floating without any device frame; rounded cards (16 px radius) and panels (24 px radius); rectangular buttons with 12 px radius, not pill-shaped; pill-shaped status tags and filter chips; subtle 1 px light-gray borders; very soft navy-tinted shadows; simple rounded line icons; clear visual hierarchy; minimal interface density; geometric sans-serif typography similar to Plus Jakarta Sans, in sentence case; all interface text in Brazilian Portuguese exactly as quoted in this prompt, and no other text. PHOTOGRAPHIC DIRECTION: realistic Brazilian compact apartments and kitnets in a warm tropical city; plausible small spaces; clean, tidy interiors; neutral materials (warm white walls, light beige porcelain floor tiles, light wood, white cabinets); warm wood and subtle greenery; eye-level camera, straight verticals, no ultra-wide distortion; no luxury penthouses or oversized apartments. LIGHTING: soft natural daylight, diffused shadows, bright but not overexposed, comfortable residential feeling. REALISM: photorealistic architectural photography when showing properties; high-end product visualization when showing the interface; UI elements crisp, intentional and professionally designed. COLOR PALETTE: deep navy #0B2841 (logo, headings, text), interface navy #0C3E66 (primary buttons, selected chips), muted sage green #648B81 (accents), dark sage #45695F ("Disponível" tag with white text), slate gray #636E7B ("Alugado" tag with white text), light cool gray #D7D8DC (borders), off-white #FBFAF8 (backgrounds), warm light gray #F2F1EF (secondary surfaces), white #FFFFFF (cards), WhatsApp button green #15803D with white text. GENERAL CONSISTENCY RULE: Follow the supplied SGLK references exactly. Preserve the same logo, visual identity, color palette, interface language, rounded geometry, typography style and overall product character. PROPERTY CONSISTENCY RULE (when property references are supplied): Follow the supplied property references exactly. Preserve the same architecture, furniture layout, materials, colors, proportions and interior details. RESTRICTIONS: never add unsupported functionality; do not show in-platform payments, checkout, credit cards, rent payment dashboards, digital contracts, electronic signatures, credit scores, internal chat systems, video calls, financial analytics, banking interfaces or luxury real-estate brokerage features; no favorite or heart icons, no maps, no app-store badges, no verification seals; do not change the SGLK logo and do not invent another logo; do not change the brand colors; do not overcrowd the composition; no excessive gradients; no cartoon illustration; no generic corporate stock photography; no unrealistic luxury apartments; no random decorative UI without function; no watermarks; no slogans or headlines outside the interface.

IMAGE BRIEF: 16-locador-gestao, a natural lifestyle photograph of a small property owner managing listings with ease. This is a photograph with no interface, no logo and no text of any kind. Follow the supplied property references exactly for the background buildings: a single-story row of four kitnets with cream painted walls, light-wood front doors, small white-framed windows, a covered walkway with a terracotta tile roof and a garden path. SUBJECT: a Brazilian small property owner around 55 years old, friendly and down-to-earth, in a simple casual button shirt (no suit, no tie), sitting at a plain wooden table on the covered veranda of their house, using a laptop and holding a smartphone, with a calm, satisfied expression. Both screens face away from the camera or are out of focus. COMPOSITION: the person and the laptop occupy the left third; the row of kitnets stands softly out of focus in the background from the center to the right. FRAMING AND CAMERA: medium shot, 50 mm equivalent lens, shallow depth of field, eye-level camera, candid moment, the person does not look at the camera. SCENE: covered veranda next to the small kitnet lot in a warm Brazilian city, potted plants, late afternoon. LIGHTING: warm, soft late-afternoon light, gentle shadows, bright but not overexposed. COLORS: wood, cream, natural greens and neutral clothing that harmonizes with navy and sage. FORMAT: 4:3 landscape, 2000 x 1500 px. NEGATIVE SPACE: no text area needed. REALISM: photorealistic documentary-style lifestyle photography, authentic, not an advertising pose. AVOID: executive or real-estate broker look, corporate office, suits, money, card machines, contracts, luxury car keys, readable screens, brand logos, looking at the camera, deformed hands or faces.
```

---

### 17 · `17-compartilhamento-og.png`

| Campo | Definição |
|---|---|
| Categoria | Compartilhamento (Open Graph) |
| Seção de uso | Tags de compartilhamento de todas as páginas: prévia do link no WhatsApp e nas redes |
| Objetivo | Mostrar a marca e o produto quando alguém compartilha o link do site |
| Mensagem | SGLK: kitnets mais perto de você |
| Público principal | Locatário e locador |
| Elemento principal | Card da Kitnet mobiliada, à direita |
| Elementos secundários | Área livre à esquerda para o logo oficial e a frase da marca, aplicados na edição; círculo sálvia; parte da fachada |
| Composição | Esquerda (45%) off-white livre; direita (55%) com o card flutuando diante de um trecho da fachada da kitnet 02 e do círculo sálvia |
| Enquadramento | Visualização de produto de frente |
| Posição dos elementos | Card centrado a 72% da largura; logo e frase (na edição) a partir de 8% da borda esquerda |
| Cenário | Fundo off-white com a fachada clara e árvores |
| Tipo de imóvel | Kitnet 01 no card; fachada da kitnet 02 |
| Direção fotográfica | Visualização de produto com foto de arquitetura realista |
| Iluminação | Manhã de sol, suave |
| Cores predominantes | Off-white, branco, azul-marinho, sálvia e verde das árvores |
| Proporção | 1,91:1 |
| Resolução | Master 2400 × 1260 px; exportar 1200 × 630 em JPG |
| Área livre para texto | Sim: logo oficial (`sglk-logo-principal.svg`) e a frase "Kitnets mais perto de você" em Plus Jakarta Sans 800, cor `#0B2841`, aplicados na edição |
| Posição da área livre | Esquerda, 45% da largura |
| Dispositivo | Nenhum (prévia de link) |
| Referências | `01-hero-sglk-desktop.png` aprovada, `04-kitnet-destaque-01.png`, `05-kitnet-02-fachada.png`, `sglk-identidade-visual.png` |
| Restrições | A IA não gera o logo nem a frase; logo e card a pelo menos 8% das bordas |
| Não deve aparecer | Logo ou texto gerados pela IA, mapa, coração, mais de um card |
| Reuso | Nenhum |
| Texto alternativo | "SGLK, plataforma de locação de kitnets, com um anúncio de kitnet disponível." (usar em `og:image:alt`) |

```text
SGLK BASE PROMPT. BRAND: SGLK (Sistema de Gerenciamento e Locação de Kitnets), a modern Brazilian web platform connecting people searching for compact housing (kitnets, 20-25 m² studios) with small property owners. Users search with filters (neighborhood, price, amenities), see clear listings with photos, price, neighborhood, size and availability ("Disponível" or "Alugado"), and contact the owner directly through WhatsApp. VISUAL IDENTITY: minimal, clean, modern, trustworthy and approachable; premium digital-product aesthetic without looking luxurious; generous negative space; soft off-white and white backgrounds; deep navy as the primary structural color; muted sage green as the main accent; light gray for secondary surfaces and borders; green indicates available properties; signature elements: large soft pale-sage circles, very thin arc lines and softly blurred tropical leaves at the edges. UI DIRECTION: clean responsive web interface floating without any device frame; rounded cards (16 px radius) and panels (24 px radius); rectangular buttons with 12 px radius, not pill-shaped; pill-shaped status tags and filter chips; subtle 1 px light-gray borders; very soft navy-tinted shadows; simple rounded line icons; clear visual hierarchy; minimal interface density; geometric sans-serif typography similar to Plus Jakarta Sans, in sentence case; all interface text in Brazilian Portuguese exactly as quoted in this prompt, and no other text. PHOTOGRAPHIC DIRECTION: realistic Brazilian compact apartments and kitnets in a warm tropical city; plausible small spaces; clean, tidy interiors; neutral materials (warm white walls, light beige porcelain floor tiles, light wood, white cabinets); warm wood and subtle greenery; eye-level camera, straight verticals, no ultra-wide distortion; no luxury penthouses or oversized apartments. LIGHTING: soft natural daylight, diffused shadows, bright but not overexposed, comfortable residential feeling. REALISM: photorealistic architectural photography when showing properties; high-end product visualization when showing the interface; UI elements crisp, intentional and professionally designed. COLOR PALETTE: deep navy #0B2841 (logo, headings, text), interface navy #0C3E66 (primary buttons, selected chips), muted sage green #648B81 (accents), dark sage #45695F ("Disponível" tag with white text), slate gray #636E7B ("Alugado" tag with white text), light cool gray #D7D8DC (borders), off-white #FBFAF8 (backgrounds), warm light gray #F2F1EF (secondary surfaces), white #FFFFFF (cards), WhatsApp button green #15803D with white text. GENERAL CONSISTENCY RULE: Follow the supplied SGLK references exactly. Preserve the same logo, visual identity, color palette, interface language, rounded geometry, typography style and overall product character. PROPERTY CONSISTENCY RULE (when property references are supplied): Follow the supplied property references exactly. Preserve the same architecture, furniture layout, materials, colors, proportions and interior details. RESTRICTIONS: never add unsupported functionality; do not show in-platform payments, checkout, credit cards, rent payment dashboards, digital contracts, electronic signatures, credit scores, internal chat systems, video calls, financial analytics, banking interfaces or luxury real-estate brokerage features; no favorite or heart icons, no maps, no app-store badges, no verification seals; do not change the SGLK logo and do not invent another logo; do not change the brand colors; do not overcrowd the composition; no excessive gradients; no cartoon illustration; no generic corporate stock photography; no unrealistic luxury apartments; no random decorative UI without function; no watermarks; no slogans or headlines outside the interface.

IMAGE BRIEF: 17-compartilhamento-og, the background artwork of the link-preview image shared on WhatsApp and social networks. The official SGLK logo and a short phrase will be added later in editing, so do not draw any logo or headline. Follow the supplied SGLK interface references exactly. Preserve the same visual identity, logo, color palette, typography style, spacing, rounded corners, cards, buttons, filters, status pills and overall interface language. Follow the supplied property references exactly. COMPOSITION: wide landscape. The left 45% of the frame is an empty, even off-white area (#FBFAF8) with nothing in it. The right 55% shows the top floors of the modern three-story residential building (white and light-gray render, black window frames, small balconies with thin black railings, tropical trees) against a pale blue sky, partly behind a large soft pale-sage circle. In front of it, centered at about 72% of the width and at least 8% away from every edge, one SGLK listing card floats, tilted 2 degrees, with a very soft navy-tinted shadow. INTERFACE: white card, 16 px radius; photo inset 8 px with 12 px radius showing the tidy furnished studio bedroom (dark-gray headboard, white duvet, folded gray throw, tall fiddle-leaf fig, window with a white sheer curtain); dark sage pill tag "Disponível" (#45695F, white text) on the photo's top-left corner; "Kitnet mobiliada" in semibold navy; a location-pin icon with "Centro"; "R$ 1.200/mês" in bold navy; line icons with "1", "1" and "25 m²"; a full-width green button "Falar no WhatsApp" (#15803D, white text, white WhatsApp glyph). LIGHTING: soft morning sunlight, diffused shadows. COLORS: off-white, white, navy, sage, tree greens and pale blue sky. FORMAT: 1.91:1 landscape, 2400 x 1260 px. NEGATIVE SPACE: Leave the left 45% of the image completely clean and low-detail for the logo and a headline added in editing. REALISM: photorealistic architecture and crisp product visualization. AVOID: any logo, any headline or slogan, extra cards, map, heart icons, people, cars, signs, dark vignette.
```

---

## 13. Reuso e imagens que não precisam ser produzidas

### 13.1 Reuso planejado

| Imagem | Onde aparece |
|---|---|
| `02-busca-kitnets-desktop` | Home > Busca rápida; Como Funciona > Passo 1 (desktop) |
| `04-kitnet-destaque-01` | Como Funciona > Passo 2 (celular); base de `17-compartilhamento-og`; referência de card para as telas |
| Capas da série 05 | Home > Kitnets em destaque; cards da página Imóveis; miniaturas em todas as telas |
| `05-kitnet-01-fachada` | Galeria da kitnet 01; foto de `10-seguranca-confianca` |
| `05-kitnet-02-fachada` | Galeria da kitnet 02; fundo de `01-hero-sglk-desktop`, `01-hero-sglk-mobile` e `17-compartilhamento-og` |
| `05-kitnet-03-fachada` | Galeria da kitnet 03; fundo de `16-locador-gestao` |
| `06-painel-locador-desktop` e `-mobile` | Home > Para quem anuncia; Como Funciona > Passo 3 (locador) |
| `09-contato-whatsapp` | Como Funciona > Passo 3 (locatário); página Contato (desktop) |
| `11-lifestyle-novo-comeco-desktop` | Home > Novos começos; referência de `13` e `15-jovem-estudando` |
| `14-mobile-filtros` e `14-mobile-detalhes` | Telas isoladas e telas de `14-mobile-telas-desktop` |

### 13.2 O que não produzir

- **Imagens na FAQ:** a página é só texto.
- **Imagem própria de "experiência desktop":** coberta pelas versões desktop de 02, 03, 06, 07 e 14.
- **Imagens raster para os benefícios:** resolvidos com ícones SVG.
- **Fundos com degradê ou textura:** bastam os elementos gráficos da identidade.
- **Faixas de topo nas páginas internas** (Imóveis, FAQ, Contato): deixariam as páginas mais pesadas sem ajudar a tarefa.
- **Mapa, favoritos, telas de login ou de cadastro de usuário:** fora do `specs/site.md` ou pendentes.
- **Fotos de Tucuruí geradas por IA:** fotos da cidade só se forem reais.
- **Os 5 arquivos atuais de `meus - produtos/` direto no site:** têm textos embutidos, favoritos, mapa e contraste reprovado. Servem só como referência.

## 14. Pendências que afetam as imagens

- **Login do botão de WhatsApp:** se o login for exigido, criar variantes de `09-contato-whatsapp`, `14-mobile-detalhes` e dos cards com o ícone de cadeado (`specs/design.md`, seção 8).
- **Logo vetorizado:** necessário antes de `17-compartilhamento-og` e para conferir o logo nas telas geradas.
- **Recortes `ref-kitnet-0X-mockup.png`:** necessários antes da série 05.
- **Anúncios reais:** quando existirem, trocar os cards de demonstração da Home e da página Imóveis por anúncios reais, com fotos enviadas pelos locadores.
- **Telas reais do sistema:** quando existirem, substituir 02, 03, 06, 07, 08, 09, 12 e 14 por capturas reais (`specs/design.md`, seção 11).
- **Mapa e favoritos:** se entrarem no produto, as telas precisam ser refeitas.
- **Seções da Home:** a divisão proposta na seção 5 precisa ser confirmada no plano de implementação; se mudar, revisar este inventário.

