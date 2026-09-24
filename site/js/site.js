/*
  site.js - Comportamento do site do SGLK (menu, filtros, cards, FAQ, abas, contato).
  JavaScript puro, sem framework e sem dependencia externa (specs/site.md).
  Carregado com "defer" em todas as paginas.
*/
(function () {
  "use strict";

  /* ============================= UTILITARIOS ============================= */

  function el(tag, atributos, filhos) {
    const elemento = document.createElement(tag);
    if (atributos) {
      Object.keys(atributos).forEach((chave) => {
        if (chave === "texto") elemento.textContent = atributos[chave];
        else if (chave === "html") elemento.innerHTML = atributos[chave];
        else elemento.setAttribute(chave, atributos[chave]);
      });
    }
    (filhos || []).forEach((filho) => filho && elemento.appendChild(filho));
    return elemento;
  }

  function icone(id, classe) {
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("aria-hidden", "true");
    if (classe) svg.setAttribute("class", classe);
    const use = document.createElementNS("http://www.w3.org/2000/svg", "use");
    use.setAttribute("href", "#" + id);
    svg.appendChild(use);
    return svg;
  }

  function formatarPreco(valor) {
    return valor.toLocaleString("pt-BR", { style: "currency", currency: "BRL", maximumFractionDigits: 0 });
  }

  /* ============================= CPF (mascara e digito verificador) ============================= */

  // Formata "12345678900" como "123.456.789-00" enquanto a pessoa digita.
  function mascararCpf(valor) {
    const digitos = String(valor).replace(/\D/g, "").slice(0, 11);
    if (digitos.length > 9) return digitos.replace(/(\d{3})(\d{3})(\d{3})(\d{1,2})/, "$1.$2.$3-$4");
    if (digitos.length > 6) return digitos.replace(/(\d{3})(\d{3})(\d{1,3})/, "$1.$2.$3");
    if (digitos.length > 3) return digitos.replace(/(\d{3})(\d{1,3})/, "$1.$2");
    return digitos;
  }

  // Confere os digitos verificadores do CPF (algoritmo publico, o mesmo
  // usado em qualquer formulario brasileiro). So confirma que o NUMERO
  // esta bem formado - nao confirma que pertence a uma pessoa real, nem
  // substitui verificacao de identidade de verdade.
  function cpfValido(valorComOuSemMascara) {
    const cpf = String(valorComOuSemMascara).replace(/\D/g, "");
    if (cpf.length !== 11 || /^(\d)\1{10}$/.test(cpf)) return false;
    function digitoVerificador(base, pesoInicial) {
      let soma = 0;
      for (let i = 0; i < base.length; i++) soma += parseInt(base[i], 10) * (pesoInicial - i);
      const resto = (soma * 10) % 11;
      return resto >= 10 ? 0 : resto;
    }
    if (digitoVerificador(cpf.slice(0, 9), 10) !== parseInt(cpf[9], 10)) return false;
    if (digitoVerificador(cpf.slice(0, 10), 11) !== parseInt(cpf[10], 10)) return false;
    return true;
  }

  /* ============================= MENU DO CELULAR ============================= */

  function iniciarMenuMovel() {
    const botaoAbrir = document.querySelector("[data-abrir-menu]");
    const menu = document.querySelector("[data-menu-movel]");
    if (!botaoAbrir || !menu) return;
    const botaoFechar = menu.querySelector("[data-fechar-menu]");
    const linksMenu = menu.querySelectorAll("a, button");

    function abrir() {
      menu.dataset.aberto = "true";
      menu.hidden = false;
      botaoAbrir.setAttribute("aria-expanded", "true");
      document.body.style.overflow = "hidden";
      botaoFechar && botaoFechar.focus();
    }
    function fechar() {
      menu.dataset.aberto = "false";
      botaoAbrir.setAttribute("aria-expanded", "false");
      document.body.style.overflow = "";
      botaoAbrir.focus();
      window.setTimeout(() => { if (menu.dataset.aberto !== "true") menu.hidden = true; }, 350);
    }
    botaoAbrir.addEventListener("click", () => {
      menu.dataset.aberto === "true" ? fechar() : abrir();
    });
    botaoFechar && botaoFechar.addEventListener("click", fechar);
    menu.addEventListener("keydown", (evento) => {
      if (evento.key === "Escape") fechar();
      if (evento.key === "Tab") {
        const focaveis = Array.from(linksMenu);
        const primeiro = focaveis[0];
        const ultimo = focaveis[focaveis.length - 1];
        if (evento.shiftKey && document.activeElement === primeiro) { evento.preventDefault(); ultimo.focus(); }
        else if (!evento.shiftKey && document.activeElement === ultimo) { evento.preventDefault(); primeiro.focus(); }
      }
    });
    linksMenu.forEach((link) => {
      if (link.tagName === "A") link.addEventListener("click", fechar);
    });
  }

  /* ============================= SESSAO SIMULADA (LOGIN) =============================
     O SGLK ainda nao tem backend nem contas de verdade (ver armazenamento.js
     e a pagina entrar.html) - isso so mostra, no cabecalho, qual papel esta
     "logado" neste navegador e da um jeito de sair, para poder testar as
     duas travas (anunciar exige locador, falar no WhatsApp exige locatario).
  */

  function iniciarControleSessao() {
    if (typeof obterSessao !== "function") return;
    const sessao = obterSessao();

    document.querySelectorAll(".cabecalho-acoes, .menu-movel-acao").forEach((area) => {
      const existente = area.querySelector("[data-sessao-info]");
      if (existente) existente.remove();
      if (!sessao) return;

      const rotulo = sessao.tipo === "locador" ? "locador" : "locatário";
      const ehMenuMovel = area.classList.contains("menu-movel-acao");
      const botaoSair = el("button", { type: "button", class: "botao botao--link texto-pequeno", "data-botao-sair": "" }, [document.createTextNode("Sair")]);
      const bloco = el("div", {
        class: ehMenuMovel ? "sessao-info sessao-info--menu-movel" : "sessao-info",
        "data-sessao-info": ""
      }, [
        el("span", { class: "texto-suave texto-pequeno", texto: "Conta de " + rotulo }),
        botaoSair
      ]);

      if (ehMenuMovel) area.appendChild(bloco);
      else area.insertBefore(bloco, area.querySelector(".botao-menu"));

      botaoSair.addEventListener("click", () => {
        encerrarSessao();
        window.location.href = "index.html";
      });
    });
  }

  /* ============================= ACORDEAO (FAQ) ============================= */

  function iniciarAcordeao() {
    document.querySelectorAll("[data-acordeao]").forEach((pergunta) => {
      const resposta = document.getElementById(pergunta.getAttribute("aria-controls"));
      if (!resposta) return;
      pergunta.addEventListener("click", () => {
        const aberto = pergunta.getAttribute("aria-expanded") === "true";
        pergunta.setAttribute("aria-expanded", String(!aberto));
        resposta.dataset.aberto = String(!aberto);
      });
    });
  }

  /* ============================= ABAS (COMO FUNCIONA) ============================= */

  function iniciarAbas() {
    const cabecalho = document.querySelector("[data-abas]");
    if (!cabecalho) return;
    const botoes = Array.from(cabecalho.querySelectorAll("[role='tab']"));

    function selecionar(id, moverFoco) {
      botoes.forEach((botao) => {
        const ativo = botao.dataset.aba === id;
        botao.setAttribute("aria-selected", String(ativo));
        botao.tabIndex = ativo ? 0 : -1;
        const painel = document.getElementById(botao.getAttribute("aria-controls"));
        if (painel) painel.hidden = !ativo;
        if (ativo && moverFoco) botao.focus();
      });
    }

    botoes.forEach((botao, indice) => {
      botao.addEventListener("click", () => selecionar(botao.dataset.aba, false));
      botao.addEventListener("keydown", (evento) => {
        if (evento.key === "ArrowRight" || evento.key === "ArrowLeft") {
          const proximo = evento.key === "ArrowRight" ? (indice + 1) % botoes.length : (indice - 1 + botoes.length) % botoes.length;
          selecionar(botoes[proximo].dataset.aba, true);
          evento.preventDefault();
        }
      });
    });

    const parametros = new URLSearchParams(window.location.search);
    const trilhaInicial = parametros.get("trilha") === "anunciar" ? "anunciar" : "alugar";
    selecionar(trilhaInicial, false);
  }

  /* ============================= CARD DE KITNET ============================= */

  function montarCartaoKitnet(kitnet) {
    const midiaFilhos = [
      el("img", {
        src: kitnet.capa,
        alt: kitnet.capaAlt,
        loading: "lazy",
        width: "400",
        height: "300"
      }),
      el("span", { class: "selo selo--" + kitnet.status, texto: kitnet.statusTexto })
    ];
    // O aviso de imagem ilustrativa (gerada por IA) fica só nas kitnets que
    // realmente usam fotos de IA - nunca como um aviso geral da página, que
    // ficaria falso assim que existirem anúncios reais.
    if (kitnet.origem === "ia") {
      midiaFilhos.push(el("span", { class: "selo selo--ia", title: "As fotos deste anúncio foram geradas por inteligência artificial, só para demonstração." }, [document.createTextNode("Imagem por IA")]));
    }
    const midia = el("div", { class: "cartao-kitnet-midia" }, midiaFilhos);

    const local = el("p", { class: "cartao-kitnet-local" }, [icone("icon-local"), document.createTextNode(kitnet.bairro)]);

    const preco = el("p", { class: "cartao-kitnet-preco" }, [
      document.createTextNode(formatarPreco(kitnet.preco) + " "),
      el("span", { texto: "/mês" })
    ]);

    const atributos = el("ul", { class: "cartao-kitnet-atributos" }, [
      el("li", {}, [icone("icon-cama"), document.createTextNode(kitnet.quartos + " " + (kitnet.quartos > 1 ? "quartos" : "quarto"))]),
      el("li", {}, [icone("icon-banheiro"), document.createTextNode(kitnet.banheiros + " " + (kitnet.banheiros > 1 ? "banheiros" : "banheiro"))]),
      el("li", {}, [icone("icon-area"), document.createTextNode(kitnet.area + " m²")])
    ]);

    // O botao de contato (WhatsApp) so aparece dentro da pagina exclusiva do
    // imovel (imovel.html). Aqui, no card da grade (Home ou Imoveis), a acao
    // e sempre "Ver detalhes", levando para a aba/pagina propria da kitnet.
    const acao = el("a", {
      href: "imovel.html?id=" + kitnet.id,
      class: "botao botao--ver-detalhes botao--largura-total"
    }, [document.createTextNode("Ver detalhes")]);

    const corpo = el("div", { class: "cartao-kitnet-corpo" }, [
      el("h3", { class: "cartao-kitnet-nome", texto: kitnet.nome }),
      local,
      preco,
      atributos,
      el("div", { class: "cartao-kitnet-acao" }, [acao])
    ]);

    return el("article", { class: "cartao-kitnet", id: "cartao-" + kitnet.id }, [midia, corpo]);
  }

  let avisoDemoTimer;
  function mostrarAvisoDemo(botaoOrigem) {
    let aviso = document.querySelector("[data-aviso-demo]");
    if (!aviso) {
      aviso = el("div", {
        "data-aviso-demo": "",
        role: "status",
        class: "texto-pequeno",
        style: "position:fixed;left:50%;bottom:24px;transform:translateX(-50%);background:var(--marinho-900);color:var(--branco);padding:10px 18px;border-radius:12px;box-shadow:var(--sombra-2);z-index:80;max-width:90vw;text-align:center"
      });
      document.body.appendChild(aviso);
    }
    aviso.textContent = "Este é um anúncio de demonstração — ainda não há um contato real cadastrado.";
    aviso.hidden = false;
    window.clearTimeout(avisoDemoTimer);
    avisoDemoTimer = window.setTimeout(() => { aviso.hidden = true; }, 4000);
  }

  /* ============================= SELETORES DE BAIRRO (dinamicos) ============================= */

  // Preenche todo <select data-campo-bairro> da pagina com os bairros que
  // realmente existem hoje (demonstracao + cadastrados pelo usuario), sem
  // apagar a opcao "Todos os bairros" que ja vem fixa no HTML.
  function popularSelectsBairro() {
    if (typeof obterBairrosDisponiveis !== "function") return;
    const bairros = obterBairrosDisponiveis();
    document.querySelectorAll("[data-campo-bairro]").forEach((select) => {
      const valorAtual = select.value;
      Array.from(select.querySelectorAll("option:not([value='todos'])")).forEach((op) => op.remove());
      bairros.forEach((bairro) => select.appendChild(el("option", { value: bairro, texto: bairro })));
      if ([...select.options].some((o) => o.value === valorAtual)) select.value = valorAtual;
    });
  }

  /* ============================= RENDERIZACAO DA "KITNETS EM DESTAQUE" (HOME) ============================= */

  function iniciarDestaqueHome() {
    const grade = document.querySelector("[data-grade-destaque]");
    if (!grade || typeof obterTodasKitnets !== "function") return;
    popularSelectsBairro();
    // Mostra no maximo 6: as 3 de demonstracao e, se houver, as mais
    // recentes cadastradas pelo usuario (obterTodasKitnets ja traz as
    // cadastradas mais novas primeiro).
    obterTodasKitnets().slice(0, 6).forEach((kitnet) => grade.appendChild(montarCartaoKitnet(kitnet)));
  }

  /* ============================= PAGINA IMOVEIS: BUSCA, FILTROS E DETALHES ============================= */

  function iniciarPaginaImoveis() {
    const grade = document.querySelector("[data-grade-resultados]");
    if (!grade || typeof obterTodasKitnets !== "function") return;
    popularSelectsBairro();

    const campoBusca = document.querySelector("[data-campo-busca]");
    const seletoresBairro = document.querySelectorAll("[data-campo-bairro]");
    const camposPreco = document.querySelectorAll("[data-campo-preco]");
    const contagem = document.querySelector("[data-contagem-resultados]");
    const listaChips = document.querySelector("[data-chips-ativos]");
    const estadoVazio = document.querySelector("[data-estado-vazio]");
    const gruposComodidade = document.querySelectorAll("[data-grupo-comodidades]");

    const estado = { busca: "", bairro: "todos", precoMax: null, comodidades: [] };

    function comodidadesSelecionadas() {
      const marcadas = [];
      gruposComodidade.forEach((grupo) => {
        grupo.querySelectorAll("input[type=checkbox]:checked").forEach((caixa) => marcadas.push(caixa.value));
      });
      return [...new Set(marcadas)];
    }

    function sincronizarControles() {
      seletoresBairro.forEach((s) => { s.value = estado.bairro; });
      camposPreco.forEach((c) => { c.value = estado.precoMax || ""; });
      gruposComodidade.forEach((grupo) => {
        grupo.querySelectorAll("input[type=checkbox]").forEach((caixa) => {
          caixa.checked = estado.comodidades.includes(caixa.value);
        });
      });
      if (campoBusca) campoBusca.value = estado.busca;
    }

    function renderizarChips() {
      if (!listaChips) return;
      listaChips.innerHTML = "";
      const itens = [];
      if (estado.bairro !== "todos") itens.push({ rotulo: estado.bairro, limpar: () => { estado.bairro = "todos"; } });
      if (estado.precoMax) itens.push({ rotulo: "Até " + formatarPreco(estado.precoMax), limpar: () => { estado.precoMax = null; } });
      estado.comodidades.forEach((c) => itens.push({ rotulo: c, limpar: () => { estado.comodidades = estado.comodidades.filter((x) => x !== c); } }));

      itens.forEach((item) => {
        const chip = el("button", { type: "button", class: "chip chip--remover" }, [
          document.createTextNode(item.rotulo + " "),
          icone("icon-fechar")
        ]);
        chip.addEventListener("click", () => { item.limpar(); sincronizarControles(); aplicarFiltros(); });
        listaChips.appendChild(chip);
      });
    }

    function aplicarFiltros() {
      const buscaNormalizada = estado.busca.trim().toLowerCase();
      const filtrados = obterTodasKitnets().filter((k) => {
        if (buscaNormalizada && !k.bairro.toLowerCase().includes(buscaNormalizada) && !k.nome.toLowerCase().includes(buscaNormalizada)) return false;
        if (estado.bairro !== "todos" && k.bairro !== estado.bairro) return false;
        if (estado.precoMax && k.preco > estado.precoMax) return false;
        if (estado.comodidades.length && !estado.comodidades.every((c) => k.comodidades.includes(c))) return false;
        return true;
      });

      grade.innerHTML = "";
      filtrados.forEach((k) => grade.appendChild(montarCartaoKitnet(k)));

      if (contagem) {
        contagem.textContent = filtrados.length === 1 ? "1 kitnet encontrada" : filtrados.length + " kitnets encontradas";
      }
      if (estadoVazio) estadoVazio.hidden = filtrados.length !== 0;
      grade.hidden = filtrados.length === 0;
      renderizarChips();
    }

    // Campos de busca/bairro/preco ficam em duplicidade (barra desktop e folha mobile).
    if (campoBusca) campoBusca.addEventListener("input", (e) => { estado.busca = e.target.value; aplicarFiltros(); });
    seletoresBairro.forEach((s) => s.addEventListener("change", (e) => { estado.bairro = e.target.value; sincronizarControles(); aplicarFiltros(); }));
    camposPreco.forEach((c) => c.addEventListener("change", (e) => { estado.precoMax = e.target.value ? Number(e.target.value) : null; sincronizarControles(); aplicarFiltros(); }));
    gruposComodidade.forEach((grupo) => {
      grupo.addEventListener("change", () => { estado.comodidades = comodidadesSelecionadas(); sincronizarControles(); aplicarFiltros(); });
    });

    const botaoLimpar = document.querySelectorAll("[data-limpar-filtros]");
    botaoLimpar.forEach((botao) => botao.addEventListener("click", () => {
      estado.bairro = "todos"; estado.precoMax = null; estado.comodidades = []; estado.busca = "";
      sincronizarControles(); aplicarFiltros();
    }));

    // Le os parametros vindos da busca da Home (formulario GET).
    const parametros = new URLSearchParams(window.location.search);
    if (parametros.get("busca")) estado.busca = parametros.get("busca");
    if (parametros.get("bairro") && obterBairrosDisponiveis().includes(parametros.get("bairro"))) estado.bairro = parametros.get("bairro");
    if (parametros.get("precoMax")) estado.precoMax = Number(parametros.get("precoMax"));
    if (parametros.get("comodidade")) estado.comodidades = parametros.getAll("comodidade").filter((c) => COMODIDADES_DEMO.includes(c));

    sincronizarControles();
    aplicarFiltros();

    // Cada kitnet tem sua propria pagina (imovel.html?id=...) - os cards da
    // grade levam para la (ver montarCartaoKitnet). Nao ha mais um painel de
    // detalhes embutido nesta pagina.

    // Folha de filtros do celular.
    const botaoAbrirFiltros = document.querySelector("[data-abrir-filtros]");
    const folha = document.querySelector("[data-folha-filtros]");
    const overlay = document.querySelector("[data-fundo-sobreposicao]");
    if (botaoAbrirFiltros && folha && overlay) {
      function abrirFolha() {
        folha.dataset.aberto = "true";
        overlay.dataset.aberto = "true";
        document.body.style.overflow = "hidden";
      }
      function fecharFolha() {
        folha.dataset.aberto = "false";
        overlay.dataset.aberto = "false";
        document.body.style.overflow = "";
      }
      botaoAbrirFiltros.addEventListener("click", abrirFolha);
      overlay.addEventListener("click", fecharFolha);
      folha.querySelectorAll("[data-fechar-filtros]").forEach((b) => b.addEventListener("click", fecharFolha));
    }
  }

  /* ============================= FORMULARIO DE CONTATO ============================= */

  function iniciarFormularioContato() {
    const formulario = document.querySelector("[data-form-contato]");
    if (!formulario) return;
    const mensagemSucesso = document.querySelector("[data-sucesso-contato]");

    function validarCampo(campo) {
      const grupo = campo.closest(".campo");
      const erro = grupo.querySelector(".mensagem-erro");
      let valido = campo.checkValidity();
      if (valido) {
        grupo.classList.remove("campo--erro");
        if (erro) erro.hidden = true;
      } else {
        grupo.classList.add("campo--erro");
        if (erro) erro.hidden = false;
      }
      return valido;
    }

    formulario.querySelectorAll("input, textarea").forEach((campo) => {
      campo.addEventListener("blur", () => validarCampo(campo));
    });

    formulario.addEventListener("submit", (evento) => {
      evento.preventDefault();
      const campos = formulario.querySelectorAll("input, textarea");
      let tudoValido = true;
      campos.forEach((campo) => { if (!validarCampo(campo)) tudoValido = false; });
      if (!tudoValido) {
        const primeiroInvalido = formulario.querySelector(":invalid");
        if (primeiroInvalido) primeiroInvalido.focus();
        return;
      }
      formulario.hidden = true;
      if (mensagemSucesso) mensagemSucesso.hidden = false;
      if (mensagemSucesso) mensagemSucesso.focus();
    });
  }

  /* ============================= PAGINA EXCLUSIVA DE CADA KITNET (imovel.html) ============================= */

  function construirLinkWhatsapp(numero, mensagem) {
    const digitos = String(numero || "").replace(/\D/g, "");
    return "https://wa.me/" + digitos + "?text=" + encodeURIComponent(mensagem || "");
  }

  // So aceita paginas internas conhecidas como destino pos-login - nunca um
  // endereco externo vindo da URL (o parametro "redirecionar" e publico).
  function destinoAutenticadoSeguro(valor) {
    if (!valor) return null;
    if (/^anunciar\.html(?:$|\?)/.test(valor)) return valor;
    if (/^imovel\.html\?id=[^&]+$/.test(valor)) return valor;
    return null;
  }

  function iniciarPaginaImovel() {
    const raiz = document.querySelector("[data-pagina-imovel]");
    if (!raiz || typeof obterKitnetPorId !== "function") return;

    const parametros = new URLSearchParams(window.location.search);
    const kitnet = obterKitnetPorId(parametros.get("id"));

    const conteudo = raiz.querySelector("[data-imovel-conteudo]");
    const naoEncontrado = raiz.querySelector("[data-imovel-nao-encontrado]");

    if (!kitnet) {
      conteudo.hidden = true;
      naoEncontrado.hidden = false;
      return;
    }

    document.title = kitnet.nome + " - SGLK";

    conteudo.querySelector("[data-detalhes-nome]").textContent = kitnet.nome;
    conteudo.querySelector("[data-detalhes-local]").textContent = kitnet.bairro;
    conteudo.querySelector("[data-detalhes-preco]").textContent = formatarPreco(kitnet.preco) + " /mês";
    conteudo.querySelector("[data-detalhes-descricao]").textContent = kitnet.descricao;
    const selo = conteudo.querySelector("[data-detalhes-selo]");
    selo.className = "selo selo--" + kitnet.status;
    selo.textContent = kitnet.statusTexto;

    const avisoIa = conteudo.querySelector("[data-detalhes-aviso-ia]");
    if (avisoIa) avisoIa.hidden = kitnet.origem !== "ia";
    conteudo.querySelector("[data-detalhes-quartos]").textContent = kitnet.quartos + " quarto" + (kitnet.quartos > 1 ? "s" : "");
    conteudo.querySelector("[data-detalhes-banheiros]").textContent = kitnet.banheiros + " banheiro" + (kitnet.banheiros > 1 ? "s" : "");
    conteudo.querySelector("[data-detalhes-area]").textContent = kitnet.area + " m²";

    const galeria = conteudo.querySelector("[data-detalhes-galeria]");
    galeria.innerHTML = "";
    kitnet.galeria.forEach((foto, indice) => galeria.appendChild(el("img", {
      src: foto.src,
      alt: foto.alt,
      loading: indice === 0 ? "eager" : "lazy",
      width: "300",
      height: "225"
    })));

    const chips = conteudo.querySelector("[data-detalhes-comodidades]");
    chips.innerHTML = "";
    kitnet.comodidades.forEach((c) => chips.appendChild(el("span", { class: "chip", texto: c })));

    // O botao de contato (WhatsApp) so existe aqui, dentro da pagina exclusiva
    // do imovel - nunca no card da grade (Home ou Imoveis). Em anuncios reais
    // (cadastrados pelo usuario, com numero de WhatsApp informado) o botao
    // abre uma conversa de verdade, mas so para quem "entrou" como locatario
    // (specs/site.md exige login para o contato). Nas 3 kitnets de
    // demonstracao (geradas por IA, sem numero real) o botao fica
    // desabilitado, com aviso, independente de login.
    const sessaoAtual = typeof obterSessao === "function" ? obterSessao() : null;
    const locatarioLogado = !!sessaoAtual && sessaoAtual.tipo === "locatario";

    const acaoContato = conteudo.querySelector("[data-detalhes-contato]");
    acaoContato.innerHTML = "";
    if (kitnet.status === "disponivel" && kitnet.origem === "usuario" && kitnet.whatsapp && locatarioLogado) {
      const link = el("a", {
        href: construirLinkWhatsapp(kitnet.whatsapp, kitnet.mensagemWhatsapp),
        target: "_blank",
        rel: "noopener",
        class: "botao botao--whatsapp botao--largura-total"
      }, [icone("icon-whatsapp"), document.createTextNode("Falar no WhatsApp")]);
      acaoContato.appendChild(link);
    } else if (kitnet.status === "disponivel" && kitnet.origem === "usuario" && kitnet.whatsapp) {
      // Numero real existe, mas exige entrar como locatario primeiro.
      const linkLogin = el("a", {
        href: "entrar.html?papel=locatario&redirecionar=" + encodeURIComponent("imovel.html?id=" + kitnet.id),
        class: "botao botao--whatsapp botao--largura-total"
      }, [icone("icon-whatsapp"), document.createTextNode("Falar no WhatsApp"), icone("icon-cadeado")]);
      acaoContato.appendChild(linkLogin);
      acaoContato.appendChild(el("p", {
        class: "texto-suave texto-pequeno",
        style: "margin-top:var(--esp-2)",
        texto: "É preciso entrar ou criar uma conta de locatário para falar com o locador."
      }));
    } else if (kitnet.status === "disponivel") {
      const botao = el("button", {
        type: "button",
        class: "botao botao--whatsapp botao--largura-total",
        "aria-disabled": "true",
        title: "Anúncio de demonstração — ainda não há um número real para contato."
      }, [icone("icon-whatsapp"), document.createTextNode("Falar no WhatsApp")]);
      botao.addEventListener("click", (e) => { e.preventDefault(); mostrarAvisoDemo(botao); });
      acaoContato.appendChild(botao);
    } else {
      acaoContato.appendChild(el("p", { class: "selo selo--aviso texto-pequeno", texto: "Este imóvel já foi alugado." }));
    }

    conteudo.hidden = false;
    naoEncontrado.hidden = true;
  }

  /* ============================= PAGINA ANUNCIAR: CADASTRO DE VERDADE ============================= */

  // Le um arquivo de imagem, redesenha num <canvas> numa largura maxima e
  // devolve um data URL JPEG comprimido - para nao lotar o localStorage
  // com fotos em tamanho original.
  function comprimirImagem(arquivo, larguraMaxima) {
    return new Promise((resolve, reject) => {
      if (!arquivo.type || arquivo.type.indexOf("image/") !== 0) {
        reject(new Error(arquivo.name + " não é uma imagem."));
        return;
      }
      const leitor = new FileReader();
      leitor.onerror = () => reject(new Error("Não foi possível ler " + arquivo.name + "."));
      leitor.onload = () => {
        const imagem = new Image();
        imagem.onerror = () => reject(new Error(arquivo.name + " não pôde ser aberta como imagem."));
        imagem.onload = () => {
          const escala = Math.min(1, larguraMaxima / imagem.width);
          const largura = Math.max(1, Math.round(imagem.width * escala));
          const altura = Math.max(1, Math.round(imagem.height * escala));
          const tela = document.createElement("canvas");
          tela.width = largura;
          tela.height = altura;
          const contexto = tela.getContext("2d");
          contexto.drawImage(imagem, 0, 0, largura, altura);
          resolve(tela.toDataURL("image/jpeg", 0.72));
        };
        imagem.src = leitor.result;
      };
      leitor.readAsDataURL(arquivo);
    });
  }

  function iniciarPaginaAnunciar() {
    const formulario = document.querySelector("[data-form-cadastro]");
    if (!formulario) return;

    const MAX_FOTOS = 4;
    let fotos = []; // [{src, alt}]

    const campoFotos = document.querySelector("[data-campo-fotos]");
    const preview = document.querySelector("[data-preview-fotos]");
    const erroFotos = document.querySelector("[data-erro-fotos]");
    const gruposComodidade = formulario.querySelectorAll("[data-grupo-comodidades]");
    const mensagemSucesso = document.querySelector("[data-sucesso-cadastro]");
    const mensagemErroEnvio = document.querySelector("[data-erro-cadastro]");

    function renderizarPreview() {
      preview.innerHTML = "";
      fotos.forEach((foto, indice) => {
        const item = el("div", { class: "preview-foto" }, [
          el("img", { src: foto.src, alt: "Pré-visualização da foto " + (indice + 1), width: "120", height: "90" })
        ]);
        const remover = el("button", { type: "button", class: "preview-foto-remover", "aria-label": "Remover esta foto" }, [icone("icon-fechar")]);
        remover.addEventListener("click", () => { fotos.splice(indice, 1); renderizarPreview(); });
        item.appendChild(remover);
        preview.appendChild(item);
      });
      if (campoFotos) campoFotos.disabled = fotos.length >= MAX_FOTOS;
    }

    if (campoFotos) {
      campoFotos.addEventListener("change", async (evento) => {
        const arquivos = Array.from(evento.target.files || []);
        evento.target.value = ""; // permite selecionar o mesmo arquivo de novo depois
        if (erroFotos) erroFotos.hidden = true;
        const vagas = MAX_FOTOS - fotos.length;
        if (arquivos.length > vagas && erroFotos) {
          erroFotos.hidden = false;
          erroFotos.textContent = "Você pode enviar no máximo " + MAX_FOTOS + " fotos. Foram adicionadas só as primeiras.";
        }
        for (const arquivo of arquivos.slice(0, vagas)) {
          try {
            const src = await comprimirImagem(arquivo, 900);
            fotos.push({ src, alt: "Foto enviada pelo anunciante." });
          } catch (e) {
            if (erroFotos) { erroFotos.hidden = false; erroFotos.textContent = e.message; }
          }
        }
        renderizarPreview();
      });
    }

    function comodidadesSelecionadas() {
      const marcadas = [];
      gruposComodidade.forEach((grupo) => {
        grupo.querySelectorAll("input[type=checkbox]:checked").forEach((c) => marcadas.push(c.value));
      });
      return marcadas;
    }

    function validarCampo(campo) {
      const grupo = campo.closest(".campo");
      if (!grupo) return campo.checkValidity();
      const erro = grupo.querySelector(".mensagem-erro");
      const valido = campo.checkValidity();
      grupo.classList.toggle("campo--erro", !valido);
      if (erro) erro.hidden = valido;
      return valido;
    }

    formulario.querySelectorAll("input, textarea").forEach((campo) => {
      campo.addEventListener("blur", () => validarCampo(campo));
    });

    formulario.addEventListener("submit", (evento) => {
      evento.preventDefault();
      if (mensagemErroEnvio) mensagemErroEnvio.hidden = true;

      const camposObrigatorios = formulario.querySelectorAll("input[required], textarea[required]");
      let tudoValido = true;
      camposObrigatorios.forEach((campo) => { if (!validarCampo(campo)) tudoValido = false; });

      if (fotos.length === 0) {
        tudoValido = false;
        if (erroFotos) { erroFotos.hidden = false; erroFotos.textContent = "Adicione pelo menos uma foto do imóvel."; }
      }

      if (!tudoValido) {
        const primeiroInvalido = formulario.querySelector(":invalid");
        if (primeiroInvalido) primeiroInvalido.focus();
        return;
      }

      const nome = formulario.querySelector("#anuncio-titulo").value.trim();
      const bairro = formulario.querySelector("#anuncio-bairro").value.trim();
      const status = formulario.querySelector("input[name=anuncio-status]:checked").value;

      const kitnet = {
        id: gerarIdKitnet(),
        origem: "usuario",
        nome: nome,
        bairro: bairro,
        preco: Number(formulario.querySelector("#anuncio-preco").value),
        area: Number(formulario.querySelector("#anuncio-area").value),
        quartos: Number(formulario.querySelector("#anuncio-quartos").value),
        banheiros: Number(formulario.querySelector("#anuncio-banheiros").value),
        status: status,
        statusTexto: status === "disponivel" ? "Disponível" : "Alugado",
        comodidades: comodidadesSelecionadas(),
        descricao: formulario.querySelector("#anuncio-descricao").value.trim(),
        whatsapp: formulario.querySelector("#anuncio-whatsapp").value.trim(),
        capa: fotos[0].src,
        capaAlt: "Foto do anúncio " + nome + ".",
        galeria: fotos.map((f) => ({ src: f.src, alt: f.alt })),
        mensagemWhatsapp: "Olá! Vi a " + nome + " no " + bairro + " pelo SGLK e gostaria de mais informações."
      };

      const resultado = salvarKitnetUsuario(kitnet);
      if (!resultado.ok) {
        if (mensagemErroEnvio) { mensagemErroEnvio.hidden = false; mensagemErroEnvio.textContent = resultado.motivo; }
        return;
      }

      formulario.reset();
      fotos = [];
      renderizarPreview();
      formulario.querySelectorAll(".campo--erro").forEach((c) => c.classList.remove("campo--erro"));
      renderizarMeusImoveis();
      if (mensagemSucesso) {
        mensagemSucesso.hidden = false;
        mensagemSucesso.scrollIntoView({ behavior: "smooth", block: "center" });
        window.setTimeout(() => { mensagemSucesso.hidden = true; }, 6000);
      }
    });

    // "Meus imoveis cadastrados": lista, com opcao de mudar o status ou excluir.
    const listaMeusImoveis = document.querySelector("[data-lista-meus-imoveis]");
    const semImoveis = document.querySelector("[data-sem-imoveis]");

    function renderizarMeusImoveis() {
      if (!listaMeusImoveis) return;
      const meusImoveis = obterKitnetsUsuario();
      listaMeusImoveis.innerHTML = "";
      if (semImoveis) semImoveis.hidden = meusImoveis.length !== 0;
      listaMeusImoveis.hidden = meusImoveis.length === 0;

      meusImoveis.forEach((kitnet) => {
        const outroStatus = kitnet.status === "disponivel" ? "alugado" : "disponivel";
        const rotuloAlternar = kitnet.status === "disponivel" ? "Marcar como alugado" : "Marcar como disponível";

        const botaoAlternar = el("button", { type: "button", class: "botao botao--secundario botao--compacto" }, [document.createTextNode(rotuloAlternar)]);
        botaoAlternar.addEventListener("click", () => {
          atualizarStatusKitnetUsuario(kitnet.id, outroStatus);
          renderizarMeusImoveis();
        });

        const botaoExcluir = el("button", { type: "button", class: "botao botao--link", style: "color:var(--erro)" }, [document.createTextNode("Excluir")]);
        botaoExcluir.addEventListener("click", () => {
          if (window.confirm('Excluir o anúncio "' + kitnet.nome + '"? Essa ação não pode ser desfeita.')) {
            removerKitnetUsuario(kitnet.id);
            renderizarMeusImoveis();
          }
        });

        const linha = el("li", { class: "linha-imovel-usuario" }, [
          el("img", { src: kitnet.capa, alt: "", width: "72", height: "72" }),
          el("div", { class: "linha-imovel-usuario-info" }, [
            el("p", { style: "font-weight:600", texto: kitnet.nome }),
            el("p", { class: "texto-suave texto-pequeno", texto: kitnet.bairro + " · " + formatarPreco(kitnet.preco) + "/mês" })
          ]),
          el("span", { class: "selo selo--" + kitnet.status, texto: kitnet.statusTexto }),
          el("div", { class: "linha-imovel-usuario-acoes" }, [
            el("a", { class: "botao--link", href: "imovel.html?id=" + kitnet.id, texto: "Ver anúncio" }),
            botaoAlternar,
            botaoExcluir
          ])
        ]);
        listaMeusImoveis.appendChild(linha);
      });
    }

    renderizarPreview();
    renderizarMeusImoveis();
  }

  /* ============================= PAGINA ENTRAR (CADASTRO / LOGIN) ============================= */

  // Valida um campo generico do padrao .campo + .mensagem-erro. Aceita um
  // validador extra opcional (usado para o CPF) alem da validacao nativa
  // do HTML (required, type=email etc.).
  function validarCampoAuth(campo, validadorExtra) {
    const grupo = campo.closest(".campo");
    if (!grupo) return campo.checkValidity();
    const erro = grupo.querySelector(".mensagem-erro");
    let valido = campo.checkValidity();
    if (valido && validadorExtra) valido = validadorExtra(campo.value);
    grupo.classList.toggle("campo--erro", !valido);
    if (erro) erro.hidden = valido;
    return valido;
  }

  function iniciarPaginaEntrar() {
    const raiz = document.querySelector("[data-pagina-entrar]");
    if (!raiz) return;

    // "papel" e "redirecionar" chegam de uma trava de login (ver
    // iniciarPaginaImovel e o script embutido em anunciar.html): dizem qual
    // tipo de conta e necessario e para onde voltar depois.
    const parametrosUrl = new URLSearchParams(window.location.search);
    const papelParam = parametrosUrl.get("papel");
    const papelSolicitado = papelParam === "locador" || papelParam === "locatario" ? papelParam : null;
    const destinoPosLogin = destinoAutenticadoSeguro(parametrosUrl.get("redirecionar"));

    const avisoRedirecionamento = document.querySelector("[data-aviso-redirecionamento]");
    const avisoRedirecionamentoTexto = document.querySelector("[data-aviso-redirecionamento-texto]");
    if (papelSolicitado && avisoRedirecionamento && avisoRedirecionamentoTexto) {
      avisoRedirecionamentoTexto.textContent = papelSolicitado === "locador"
        ? "Para anunciar uma kitnet, entre ou crie uma conta de locador."
        : "Para falar com o locador pelo WhatsApp, entre ou crie uma conta de locatário.";
      avisoRedirecionamento.hidden = false;
    }

    // Mascara do CPF enquanto a pessoa digita.
    const campoCpf = document.querySelector("#conta-cpf");
    if (campoCpf) {
      campoCpf.addEventListener("input", () => { campoCpf.value = mascararCpf(campoCpf.value); });
    }

    // Abas "Quero alugar" / "Quero anunciar": mostram ou escondem o campo
    // Ocupacao (so do locatario), trocam os textos do formulario e definem
    // qual papel a sessao simulada recebe ao entrar/cadastrar.
    const abas = Array.from(document.querySelectorAll("[data-aba-conta]"));
    const campoOcupacao = document.querySelector("[data-campo-ocupacao]");
    const entradaOcupacao = document.querySelector("#conta-ocupacao");
    const tituloForm = document.querySelector("[data-titulo-cadastro]");
    const subtituloForm = document.querySelector("[data-subtitulo-cadastro]");
    const botaoEnviar = document.querySelector("[data-botao-cadastro]");
    let tipoContaAtual = "locatario";

    function selecionarTipoConta(tipo, moverFoco) {
      tipoContaAtual = tipo;
      abas.forEach((botao) => {
        const ativo = botao.dataset.abaConta === tipo;
        botao.setAttribute("aria-selected", String(ativo));
        botao.tabIndex = ativo ? 0 : -1;
        if (ativo && moverFoco) botao.focus();
      });
      const ehLocador = tipo === "locador";
      const ehLocatario = tipo === "locatario";
      if (campoOcupacao) campoOcupacao.hidden = !ehLocatario;
      if (entradaOcupacao) entradaOcupacao.required = ehLocatario;
      if (tituloForm) tituloForm.textContent = ehLocador ? "Cadastro de locador" : "Cadastro de locatário";
      if (subtituloForm) {
        subtituloForm.textContent = ehLocador
          ? "Crie sua conta para anunciar e gerenciar suas kitnets no SGLK."
          : "Crie sua conta para entrar em contato com locadores no SGLK.";
      }
      if (botaoEnviar) botaoEnviar.textContent = ehLocador ? "Criar conta de locador" : "Criar conta de locatário";
    }

    abas.forEach((botao, indice) => {
      botao.addEventListener("click", () => selecionarTipoConta(botao.dataset.abaConta, false));
      botao.addEventListener("keydown", (evento) => {
        if (evento.key === "ArrowRight" || evento.key === "ArrowLeft") {
          const proximo = evento.key === "ArrowRight" ? (indice + 1) % abas.length : (indice - 1 + abas.length) % abas.length;
          selecionarTipoConta(abas[proximo].dataset.abaConta, true);
          evento.preventDefault();
        }
      });
    });
    if (abas.length) selecionarTipoConta(papelSolicitado || "locatario", false);

    // Mostra, na mensagem de sucesso, um botao "Continuar" para o destino
    // pedido pela trava de login - se nao houver destino, nao mexe em nada.
    function prepararAcaoPosLogin(containerAcao) {
      if (!containerAcao) return;
      containerAcao.innerHTML = "";
      if (!destinoPosLogin) return;
      containerAcao.appendChild(el("a", { class: "botao botao--primario", href: destinoPosLogin }, [document.createTextNode("Continuar")]));
    }

    // Formulario de cadastro. Nao guarda nome, e-mail, CPF, ocupacao nem
    // senha em lugar nenhum (nem localStorage): sem um backend seguro de
    // verdade, guardar CPF/senha no navegador seria um risco real. So
    // valida, guarda o TIPO de conta escolhido (locador/locatario, sem mais
    // nada) como sessao simulada, e mostra uma confirmacao honesta.
    const formCadastro = document.querySelector("[data-form-cadastro-conta]");
    if (formCadastro) {
      formCadastro.querySelectorAll("input").forEach((campo) => {
        campo.addEventListener("blur", () => {
          if (!campo.closest("[hidden]")) validarCampoAuth(campo, campo.id === "conta-cpf" ? cpfValido : null);
        });
      });
      formCadastro.addEventListener("submit", (evento) => {
        evento.preventDefault();
        const campos = Array.from(formCadastro.querySelectorAll("input[required]")).filter((c) => !c.closest("[hidden]"));
        let tudoValido = true;
        campos.forEach((campo) => {
          if (!validarCampoAuth(campo, campo.id === "conta-cpf" ? cpfValido : null)) tudoValido = false;
        });
        if (!tudoValido) {
          const primeiroInvalido = campos.find((c) => c.closest(".campo--erro"));
          if (primeiroInvalido) primeiroInvalido.focus();
          return;
        }
        formCadastro.hidden = true;
        if (typeof definirSessao === "function") definirSessao(tipoContaAtual);
        prepararAcaoPosLogin(document.querySelector("[data-sucesso-cadastro-acao]"));
        const sucesso = document.querySelector("[data-sucesso-cadastro-conta]");
        if (sucesso) { sucesso.hidden = false; sucesso.focus(); }
      });
    }

    // Alternar entre o bloco de cadastro e o bloco de entrar.
    document.querySelectorAll("[data-mostrar-entrar]").forEach((botao) => botao.addEventListener("click", () => {
      const cadastro = document.querySelector("[data-bloco-cadastro]");
      const entrar = document.querySelector("[data-bloco-entrar]");
      if (cadastro) cadastro.hidden = true;
      if (entrar) entrar.hidden = false;
    }));
    document.querySelectorAll("[data-mostrar-cadastro]").forEach((botao) => botao.addEventListener("click", () => {
      const cadastro = document.querySelector("[data-bloco-cadastro]");
      const entrar = document.querySelector("[data-bloco-entrar]");
      if (entrar) entrar.hidden = true;
      if (cadastro) cadastro.hidden = false;
    }));

    // Formulario de entrar. Mesma logica: nao guarda nada de sensivel, so
    // valida, guarda o mesmo TIPO de conta usado na aba de cadastro (ou o
    // pedido pela trava de login) como sessao simulada, e mostra uma
    // confirmacao honesta de que o acesso ainda nao existe de verdade.
    const formEntrar = document.querySelector("[data-form-entrar]");
    if (formEntrar) {
      formEntrar.querySelectorAll("input").forEach((campo) => {
        campo.addEventListener("blur", () => validarCampoAuth(campo));
      });
      formEntrar.addEventListener("submit", (evento) => {
        evento.preventDefault();
        const campos = Array.from(formEntrar.querySelectorAll("input[required]"));
        let tudoValido = true;
        campos.forEach((campo) => { if (!validarCampoAuth(campo)) tudoValido = false; });
        if (!tudoValido) {
          const primeiroInvalido = campos.find((c) => c.closest(".campo--erro"));
          if (primeiroInvalido) primeiroInvalido.focus();
          return;
        }
        formEntrar.hidden = true;
        if (typeof definirSessao === "function") definirSessao(papelSolicitado || tipoContaAtual);
        prepararAcaoPosLogin(document.querySelector("[data-sucesso-entrar-acao]"));
        const sucesso = document.querySelector("[data-sucesso-entrar]");
        if (sucesso) { sucesso.hidden = false; sucesso.focus(); }
      });
    }
  }

  /* ============================= INICIALIZACAO ============================= */

  document.addEventListener("DOMContentLoaded", () => {
    iniciarMenuMovel();
    iniciarControleSessao();
    iniciarAcordeao();
    iniciarAbas();
    iniciarPaginaImovel();
    iniciarDestaqueHome();
    iniciarPaginaImoveis();
    iniciarPaginaAnunciar();
    iniciarPaginaEntrar();
    iniciarFormularioContato();
  });
})();
