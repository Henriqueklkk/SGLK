/*
  dados-demo.js - Fonte unica dos dados das 3 kitnets ilustrativas.
  Valores vindos de imagens.md, secao 6 (Banco de kitnets ilustrativas).
  Nao inventar bairro, preco, area ou comodidade fora desta lista:
  qualquer novo dado precisa primeiro ser aprovado e registrado em memoria.md.

  Estas 3 kitnets sao ilustrativas: as fotos foram geradas por IA (ver
  imagens.md) e nao correspondem a imoveis reais. Por isso levam
  "origem: 'ia'" - o site usa esse campo para mostrar o aviso "Imagem
  ilustrativa (gerada por IA)" so nelas, e para manter o botao de WhatsApp
  desabilitado so nelas (nao ha numero real por tras). Imoveis cadastrados
  de verdade pelo formulario de Anunciar (js/armazenamento.js) tem
  "origem: 'usuario'" e nao levam esse aviso.
*/

const KITNETS_DEMO = [
  {
    id: "kitnet-01",
    origem: "ia",
    nome: "Kitnet mobiliada",
    bairro: "Centro",
    preco: 1200,
    area: 25,
    quartos: 1,
    banheiros: 1,
    status: "disponivel",
    statusTexto: "Disponível",
    comodidades: ["Mobiliada", "Wi-Fi", "Ar-condicionado"],
    descricao: "Kitnet mobiliada no Centro, com cama, armário e cozinha compacta.",
    capa: "img/05-kitnet-01-quarto.jpg",
    capaAlt: "Kitnet mobiliada com cama de casal, planta, quadros e janela com cortina clara.",
    galeria: [
      { src: "img/05-kitnet-01-quarto.jpg", alt: "Quarto da kitnet mobiliada, com cama de casal e ar-condicionado." },
      { src: "img/05-kitnet-01-cozinha.jpg", alt: "Cozinha compacta da kitnet mobiliada, com armários brancos e cooktop." },
      { src: "img/05-kitnet-01-banheiro.jpg", alt: "Banheiro da kitnet mobiliada, com pia sobre gabinete de madeira clara." },
      { src: "img/05-kitnet-01-fachada.jpg", alt: "Fachada do prédio onde fica a kitnet mobiliada, no Centro." }
    ],
    mensagemWhatsapp: "Olá! Vi a Kitnet mobiliada no Centro pelo SGLK e gostaria de mais informações."
  },
  {
    id: "kitnet-02",
    origem: "ia",
    nome: "Kitnet moderna",
    bairro: "Vila Nova",
    preco: 950,
    area: 20,
    quartos: 1,
    banheiros: 1,
    status: "disponivel",
    statusTexto: "Disponível",
    comodidades: ["Mobiliada", "Cozinha equipada", "Wi-Fi"],
    descricao: "Kitnet moderna na Vila Nova, com cozinha equipada e mesa de jantar.",
    capa: "img/05-kitnet-02-cozinha.jpg",
    capaAlt: "Cozinha moderna com armários grafite, geladeira branca e mesa de madeira para duas pessoas.",
    galeria: [
      { src: "img/05-kitnet-02-cozinha.jpg", alt: "Cozinha da kitnet moderna, com armários grafite e mesa de jantar." },
      { src: "img/05-kitnet-02-quarto.jpg", alt: "Canto de dormir da kitnet moderna, com cama de casal e arara." },
      { src: "img/05-kitnet-02-banheiro.jpg", alt: "Banheiro da kitnet moderna, com porcelanato cinza-claro e box de vidro." },
      { src: "img/05-kitnet-02-fachada.jpg", alt: "Fachada do prédio onde fica a kitnet moderna, na Vila Nova." }
    ],
    mensagemWhatsapp: "Olá! Vi a Kitnet moderna na Vila Nova pelo SGLK e gostaria de mais informações."
  },
  {
    id: "kitnet-03",
    origem: "ia",
    nome: "Kitnet aconchegante",
    bairro: "Jardim Paulista",
    preco: 1100,
    area: 22,
    quartos: 1,
    banheiros: 1,
    status: "alugado",
    statusTexto: "Alugado",
    comodidades: ["Mobiliada", "Wi-Fi", "Área de estudo"],
    descricao: "Kitnet aconchegante no Jardim Paulista, com cantinho de estudo.",
    capa: "img/05-kitnet-03-quarto.jpg",
    capaAlt: "Kitnet aconchegante com cama de casal, estante de madeira clara com livros e plantas.",
    galeria: [
      { src: "img/05-kitnet-03-quarto.jpg", alt: "Quarto da kitnet aconchegante, com cama de casal e estante de livros." },
      { src: "img/05-kitnet-03-cozinha.jpg", alt: "Cozinha da kitnet aconchegante, com armários de madeira clara." },
      { src: "img/05-kitnet-03-banheiro.jpg", alt: "Banheiro da kitnet aconchegante, com revestimento creme e gabinete de madeira." },
      { src: "img/05-kitnet-03-fachada.jpg", alt: "Fileira de kitnets térreas onde fica a kitnet aconchegante, no Jardim Paulista." }
    ],
    mensagemWhatsapp: "Olá! Vi a Kitnet aconchegante no Jardim Paulista pelo SGLK e gostaria de mais informações."
  }
];

// Lista de comodidades que o site reconhece nos filtros e no formulario de
// cadastro. E uma lista fixa (nao vem so das kitnets de demonstracao) para
// os filtros continuarem mostrando todas as opcoes mesmo quando nenhum
// imovel cadastrado ainda usa uma delas.
const COMODIDADES_DEMO = ["Mobiliada", "Wi-Fi", "Ar-condicionado", "Cozinha equipada", "Área de estudo"];

// A lista de bairros NAO e mais fixa aqui: ela e calculada a partir de todos
// os imoveis existentes (demonstracao + cadastrados pelo usuario), pela
// funcao obterBairrosDisponiveis() em armazenamento.js.
