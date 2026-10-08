/*
  site.js - Comportamento do site do SGLK (menu, conta, filtros, cards, FAQ,
  abas, anuncios, cadastro e login). JavaScript puro, sem framework; os
  dados vem de armazenamento.js (Supabase). Carregado com "defer" em todas
  as paginas.
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

  function formatarData(iso) {
    return iso ? new Date(iso).toLocaleDateString("pt-BR") : "";
  }

  function primeiroNome(nome) {
    return String(nome || "").trim().split(/\s+/)[0] || "";
  }

  // Estado "Carregando" dos botoes (design.md, secao 8): mantem a largura e
  // troca o texto por uma mensagem, anunciada para leitores de tela.
  function botaoCarregando(botao, carregando, textoCarregando) {
    if (!botao) return;
    if (carregando) {
      botao.dataset.textoOriginal = botao.textContent;
      botao.style.minWidth = botao.offsetWidth + "px";
      botao.textContent = textoCarregando;
      botao.disabled = true;
      botao.setAttribute("aria-busy", "true");
    } else {
      if (botao.dataset.textoOriginal) botao.textContent = botao.dataset.textoOriginal;
      botao.disabled = false;
      botao.removeAttribute("aria-busy");
      botao.style.minWidth = "";
    }
  }

  // Mostra (ou esconde, com texto vazio) uma mensagem .mensagem-erro que
  // tem um <span> para o texto ao lado do icone.
  function mostrarErro(alvo, texto) {
    if (!alvo) return;
    const span = alvo.querySelector("span");
    if (span) span.textContent = texto || "";
    else alvo.textContent = texto || "";
    alvo.hidden = !texto;
  }

  let avisoFlutuanteTimer;
  function mostrarAvisoFlutuante(texto) {
    let aviso = document.querySelector("[data-aviso-flutuante]");
    if (!aviso) {
      aviso = el("div", {
        "data-aviso-flutuante": "",
        role: "status",
        class: "texto-pequeno",
        style: "position:fixed;left:50%;bottom:24px;transform:translateX(-50%);background:var(--marinho-900);color:var(--branco);padding:10px 18px;border-radius:12px;box-shadow:var(--sombra-2);z-index:80;max-width:90vw;text-align:center"
      });
      document.body.appendChild(aviso);
    }
    aviso.textContent = texto;
    aviso.hidden = false;
    window.clearTimeout(avisoFlutuanteTimer);
    avisoFlutuanteTimer = window.setTimeout(() => { aviso.hidden = true; }, 4000);
  }

  function blocoSemFoto(classeExtra) {
    return el("div", { class: "sem-foto" + (classeExtra ? " " + classeExtra : "") }, [
      icone("icon-camera"),
      el("span", { texto: "Foto em breve" })
    ]);
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
  // substitui verificacao de identidade de verdade. O banco confere de novo.
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

  /* ============================= TELEFONE E WHATSAPP (mascara e formato) ============================= */

  // Formata "94999999999" como "(94) 99999-9999" enquanto a pessoa digita.
  function mascararTelefone(valor) {
    const digitos = String(valor).replace(/\D/g, "").slice(0, 11);
    if (digitos.length > 10) return digitos.replace(/(\d{2})(\d{5})(\d{4})/, "($1) $2-$3");
    if (digitos.length > 6) return digitos.replace(/(\d{2})(\d{4})(\d{1,4})/, "($1) $2-$3");
    if (digitos.length > 2) return digitos.replace(/(\d{2})(\d{1,5})/, "($1) $2");
    if (digitos.length > 0) return "(" + digitos;
    return digitos;
  }

  // DDD + celular (9 e mais 8 digitos) ou fixo (8 digitos comecando de 2 a 8).
  // A mesma regra vale no banco (supabase/telefone-no-perfil.sql).
  function telefoneValido(valorComOuSemMascara) {
    return /^[1-9]{2}(9\d{8}|[2-8]\d{7})$/.test(String(valorComOuSemMascara).replace(/\D/g, ""));
  }

  // WhatsApp do anuncio: a pessoa digita com DDD; o banco guarda com o 55
  // na frente, que o link wa.me precisa.
  function normalizarWhatsapp(valor) {
    const digitos = String(valor || "").replace(/\D/g, "");
    return digitos.length === 10 || digitos.length === 11 ? "55" + digitos : digitos;
  }

  function whatsappValido(valor) {
    return /^55[1-9]{2}(9\d{8}|[2-8]\d{7})$/.test(normalizarWhatsapp(valor));
  }

  function whatsappParaCampo(digitosCom55) {
    const digitos = String(digitosCom55 || "").replace(/\D/g, "");
    return mascararTelefone(digitos.length > 11 && digitos.indexOf("55") === 0 ? digitos.slice(2) : digitos);
  }

  /* ============================= MOSTRAR SENHA ============================= */

  // <input type="checkbox" data-mostrar-senha="id1 id2"> mostra ou esconde as
  // senhas dos campos indicados (decisao de 2026-10-06).
  function iniciarMostrarSenha() {
    document.querySelectorAll("[data-mostrar-senha]").forEach((caixa) => {
      const campos = caixa.dataset.mostrarSenha.split(/\s+/).map((id) => document.getElementById(id)).filter(Boolean);
      caixa.setAttribute("aria-controls", campos.map((c) => c.id).join(" "));
      caixa.addEventListener("change", () => {
        campos.forEach((campo) => { campo.type = caixa.checked ? "text" : "password"; });
      });
    });
  }

  /* ============================= MENU DO CELULAR ============================= */

  function iniciarMenuMovel() {
    const botaoAbrir = document.querySelector("[data-abrir-menu]");
    const menu = document.querySelector("[data-menu-movel]");
    if (!botaoAbrir || !menu) return;
    const botaoFechar = menu.querySelector("[data-fechar-menu]");

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
    // A lista de focaveis e lida na hora: os links da conta (Sair,
    // Moderacao) entram no menu depois que a pagina carrega.
    menu.addEventListener("keydown", (evento) => {
      if (evento.key === "Escape") fechar();
      if (evento.key === "Tab") {
        const focaveis = Array.from(menu.querySelectorAll("a, button"));
        const primeiro = focaveis[0];
        const ultimo = focaveis[focaveis.length - 1];
        if (evento.shiftKey && document.activeElement === primeiro) { evento.preventDefault(); ultimo.focus(); }
        else if (!evento.shiftKey && document.activeElement === ultimo) { evento.preventDefault(); primeiro.focus(); }
      }
    });
    menu.addEventListener("click", (evento) => {
      if (evento.target.closest("a")) fechar();
    });
  }

  /* ============================= CONTA NO CABECALHO ============================= */

  // Pagina atual como destino depois de entrar (so as paginas conhecidas
  // de destinoAutenticadoSeguro); null nas outras, como a propria entrar.html.
  function paginaAtualComoDestino() {
    const arquivo = window.location.pathname.split("/").pop() || "index.html";
    return destinoAutenticadoSeguro(arquivo + window.location.search) || destinoAutenticadoSeguro(arquivo);
  }

  // Quem entrou ve o primeiro nome, "Sair" e, se for da moderacao, o link
  // para a pagina de moderacao; quem nao entrou ve o link "Entrar". No
  // cabecalho aparecem a partir de 1024px; no menu do celular, sempre.
  async function iniciarControleConta() {
    const areas = document.querySelectorAll(".cabecalho-acoes, .menu-movel-acao");
    if (!areas.length || typeof obterContaAtual !== "function") return;

    // "Entrar" volta para a pagina atual depois do login. Se ja existe uma
    // sessao guardada neste navegador, o link some na hora, sem piscar
    // enquanto a conta carrega.
    const linksEntrar = document.querySelectorAll("[data-link-entrar]");
    const destino = paginaAtualComoDestino();
    let temSessaoGuardada = false;
    try {
      temSessaoGuardada = typeof CHAVE_SESSAO_SUPABASE !== "undefined" && !!localStorage.getItem(CHAVE_SESSAO_SUPABASE);
    } catch (e) {}
    linksEntrar.forEach((link) => {
      if (destino) link.href = "entrar.html?modo=entrar&redirecionar=" + encodeURIComponent(destino);
      link.hidden = temSessaoGuardada;
    });

    const conta = await obterContaAtual();
    linksEntrar.forEach((link) => { link.hidden = !!conta; });

    areas.forEach((area) => {
      const existente = area.querySelector("[data-sessao-info]");
      if (existente) existente.remove();
      if (!conta) return;

      const ehMenuMovel = area.classList.contains("menu-movel-acao");
      const nome = conta.perfil ? primeiroNome(conta.perfil.nome) : "";
      const filhos = [el("span", { class: "texto-suave texto-pequeno sessao-saudacao", texto: nome ? "Olá, " + nome : "Conectado" })];
      if (conta.ehAdmin) {
        filhos.push(el("a", { class: "botao botao--link texto-pequeno", href: "moderacao.html", texto: "Moderação" }));
      }
      const botaoSair = el("button", { type: "button", class: "botao botao--link texto-pequeno" }, [document.createTextNode("Sair")]);
      filhos.push(botaoSair);

      const bloco = el("div", {
        class: ehMenuMovel ? "sessao-info sessao-info--menu-movel" : "sessao-info",
        "data-sessao-info": ""
      }, filhos);
      if (ehMenuMovel) area.appendChild(bloco);
      else area.insertBefore(bloco, area.querySelector(".botao-menu"));

      botaoSair.addEventListener("click", async () => {
        botaoCarregando(botaoSair, true, "Saindo…");
        await sairDaConta();
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
      kitnet.capa
        ? el("img", { src: kitnet.capa, alt: kitnet.capaAlt, loading: "lazy", width: "400", height: "300" })
        : blocoSemFoto(),
      el("span", { class: "selo selo--" + kitnet.status, texto: kitnet.statusTexto })
    ];
    // O aviso de imagem ilustrativa (gerada por IA) fica só nas kitnets que
    // realmente usam fotos de IA - nunca como um aviso geral da página.
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
    // e sempre "Ver detalhes".
    const acao = el("a", {
      href: "imovel.html?id=" + encodeURIComponent(kitnet.id),
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

  /* ============================= SELETORES DE BAIRRO (dinamicos) ============================= */

  // Preenche todo <select data-campo-bairro> com os bairros das kitnets da
  // lista, sem apagar a opcao "Todos os bairros" que ja vem no HTML.
  function popularSelectsBairro(lista) {
    const bairros = obterBairros(lista);
    document.querySelectorAll("[data-campo-bairro]").forEach((select) => {
      const valorAtual = select.value;
      Array.from(select.querySelectorAll("option:not([value='todos'])")).forEach((op) => op.remove());
      bairros.forEach((bairro) => select.appendChild(el("option", { value: bairro, texto: bairro })));
      if ([...select.options].some((o) => o.value === valorAtual)) select.value = valorAtual;
    });
    return bairros;
  }

  /* ============================= "KITNETS EM DESTAQUE" (HOME) ============================= */

  async function iniciarDestaqueHome() {
    const grade = document.querySelector("[data-grade-destaque]");
    if (!grade || typeof listarCatalogo !== "function") return;

    // Mostra no maximo 6, com as disponiveis primeiro e as alugadas por
    // ultimo. As de demonstracao aparecem na hora; as do banco, quando chegam.
    function renderizar(lista) {
      grade.innerHTML = "";
      lista.slice(0, 6).forEach((kitnet) => grade.appendChild(montarCartaoKitnet(kitnet)));
      popularSelectsBairro(lista);
    }
    renderizar(ordenarDisponiveisPrimeiro(kitnetsDemonstracao()));
    const { kitnets } = await listarCatalogo();
    renderizar(kitnets);
  }

  /* ============================= PAGINA IMOVEIS: BUSCA E FILTROS ============================= */

  async function iniciarPaginaImoveis() {
    const grade = document.querySelector("[data-grade-resultados]");
    if (!grade || typeof listarCatalogo !== "function") return;

    const campoBusca = document.querySelector("[data-campo-busca]");
    const seletoresBairro = document.querySelectorAll("[data-campo-bairro]");
    const camposPreco = document.querySelectorAll("[data-campo-preco]");
    const contagem = document.querySelector("[data-contagem-resultados]");
    const listaChips = document.querySelector("[data-chips-ativos]");
    const estadoVazio = document.querySelector("[data-estado-vazio]");
    const gruposComodidade = document.querySelectorAll("[data-grupo-comodidades]");

    const estado = {
      lista: ordenarDisponiveisPrimeiro(kitnetsDemonstracao()),
      carregando: true,
      busca: "", bairro: "todos", precoMax: null, comodidades: []
    };

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
      const filtrados = estado.lista.filter((k) => {
        if (buscaNormalizada && !k.bairro.toLowerCase().includes(buscaNormalizada) && !k.nome.toLowerCase().includes(buscaNormalizada)) return false;
        if (estado.bairro !== "todos" && k.bairro !== estado.bairro) return false;
        if (estado.precoMax && k.preco > estado.precoMax) return false;
        if (estado.comodidades.length && !estado.comodidades.every((c) => k.comodidades.includes(c))) return false;
        return true;
      });

      grade.innerHTML = "";
      filtrados.forEach((k) => grade.appendChild(montarCartaoKitnet(k)));

      if (contagem) {
        contagem.textContent = estado.carregando && !filtrados.length
          ? "Carregando anúncios…"
          : filtrados.length === 1 ? "1 kitnet encontrada" : filtrados.length + " kitnets encontradas";
      }
      // Enquanto os anuncios do banco nao chegam, "nenhuma encontrada" seria falso.
      if (estadoVazio) estadoVazio.hidden = filtrados.length !== 0 || estado.carregando;
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

    document.querySelectorAll("[data-limpar-filtros]").forEach((botao) => botao.addEventListener("click", () => {
      estado.bairro = "todos"; estado.precoMax = null; estado.comodidades = []; estado.busca = "";
      sincronizarControles(); aplicarFiltros();
    }));

    // Le os parametros vindos da busca da Home (formulario GET).
    const parametros = new URLSearchParams(window.location.search);
    if (parametros.get("busca")) estado.busca = parametros.get("busca");
    if (parametros.get("bairro")) estado.bairro = parametros.get("bairro");
    if (parametros.get("precoMax")) estado.precoMax = Number(parametros.get("precoMax"));
    if (parametros.get("comodidade")) estado.comodidades = parametros.getAll("comodidade").filter((c) => COMODIDADES_DEMO.includes(c));

    popularSelectsBairro(estado.lista);
    sincronizarControles();
    aplicarFiltros();

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

    // Anuncios do banco.
    const { kitnets, erro } = await listarCatalogo();
    estado.lista = kitnets;
    estado.carregando = false;
    const bairros = popularSelectsBairro(kitnets);
    if (estado.bairro !== "todos" && !bairros.includes(estado.bairro)) estado.bairro = "todos";
    if (erro) {
      grade.parentNode.insertBefore(el("div", { class: "aviso-caixa", role: "status", style: "margin-bottom:var(--esp-5)" }, [
        icone("icon-alerta"),
        el("p", { class: "texto-pequeno", texto: "Não foi possível carregar os anúncios cadastrados agora. Mostrando só os exemplos." })
      ]), grade);
    }
    sincronizarControles();
    aplicarFiltros();
  }

  /* ============================= FORMULARIO DE CONTATO ============================= */

  function iniciarFormularioContato() {
    const formulario = document.querySelector("[data-form-contato]");
    if (!formulario) return;
    const mensagemSucesso = document.querySelector("[data-sucesso-contato]");

    function validarCampo(campo) {
      const grupo = campo.closest(".campo");
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
    if (/^(index|imoveis|como-funciona|faq|contato|moderacao)\.html$/.test(valor)) return valor;
    if (/^anunciar\.html(?:\?editar=[0-9a-f-]{36})?$/i.test(valor)) return valor;
    if (/^imovel\.html\?id=[^&]+$/.test(valor)) return valor;
    return null;
  }

  // Decisao de 2026-09-29: o botao segue o documento da disciplina
  // ("Entrar em contato"); o complemento "pelo WhatsApp" fica so para
  // leitores de tela, que nao veem o icone.
  function rotuloBotaoContato() {
    return [document.createTextNode("Entrar em contato"), el("span", { class: "apenas-leitor", texto: " pelo WhatsApp" })];
  }

  function paragrafoContato(texto) {
    return el("p", { class: "texto-suave texto-pequeno", style: "margin-top:var(--esp-2)", texto: texto });
  }

  // Botao de contato. So existe aqui, nunca no card da grade.
  //   - demonstracao: desabilitado (nao ha numero real por tras);
  //   - sem conta: leva para entrar (specs/site.md exige login para o contato);
  //   - conta suspensa: sem contato;
  //   - conta ativa (locatario ou locador, decisao de 2026-09-25): WhatsApp real.
  async function montarContato(acaoContato, kitnet, conta) {
    acaoContato.innerHTML = "";
    const urlDaPagina = "imovel.html?id=" + encodeURIComponent(kitnet.id);

    if (kitnet.status !== "disponivel") {
      acaoContato.appendChild(el("p", { class: "selo selo--aviso texto-pequeno", texto: "Este imóvel já foi alugado." }));
      return;
    }
    if (kitnet.origem === "ia") {
      const botao = el("button", {
        type: "button",
        class: "botao botao--whatsapp botao--largura-total",
        "aria-disabled": "true",
        title: "Anúncio de demonstração — ainda não há um número real para contato."
      }, [icone("icon-whatsapp"), ...rotuloBotaoContato()]);
      botao.addEventListener("click", (e) => {
        e.preventDefault();
        mostrarAvisoFlutuante("Este é um anúncio de demonstração — ainda não há um contato real cadastrado.");
      });
      acaoContato.appendChild(botao);
      return;
    }
    if (!conta) {
      acaoContato.appendChild(el("a", {
        href: "entrar.html?papel=locatario&redirecionar=" + encodeURIComponent(urlDaPagina),
        class: "botao botao--whatsapp botao--largura-total"
      }, [icone("icon-whatsapp"), ...rotuloBotaoContato(), icone("icon-cadeado")]));
      acaoContato.appendChild(paragrafoContato("É preciso entrar ou criar uma conta para falar com o locador."));
      return;
    }
    if (conta.usuario.id === kitnet.locadorId) {
      acaoContato.appendChild(el("p", { texto: "Este anúncio é seu." }));
      acaoContato.appendChild(el("a", { class: "botao botao--secundario botao--largura-total", style: "margin-top:var(--esp-3)", href: "anunciar.html?editar=" + encodeURIComponent(kitnet.id), texto: "Editar anúncio" }));
      return;
    }
    if (!conta.perfil || conta.perfil.situacao !== "ativa") {
      acaoContato.appendChild(paragrafoContato(conta.perfil
        ? "Sua conta está suspensa, então o contato com locadores está bloqueado."
        : "Não foi possível carregar sua conta. Recarregue a página."));
      return;
    }
    acaoContato.appendChild(paragrafoContato("Carregando o contato…"));
    let whatsapp = null;
    try {
      whatsapp = await buscarWhatsappKitnet(kitnet.id);
    } catch (erro) {
      acaoContato.innerHTML = "";
      acaoContato.appendChild(paragrafoContato(erro.message));
      return;
    }
    acaoContato.innerHTML = "";
    if (!whatsapp) {
      acaoContato.appendChild(paragrafoContato("O contato deste anúncio não está disponível no momento."));
      return;
    }
    acaoContato.appendChild(el("a", {
      href: construirLinkWhatsapp(whatsapp, kitnet.mensagemWhatsapp),
      target: "_blank",
      rel: "noopener",
      class: "botao botao--whatsapp botao--largura-total"
    }, [icone("icon-whatsapp"), ...rotuloBotaoContato()]));
  }

  // Denuncia (documento da disciplina, UC-06 e HU-06): so em anuncios reais
  // de outra pessoa. Sem conta, o link leva para entrar.
  async function montarDenuncia(area, kitnet, conta) {
    if (!area) return;
    area.innerHTML = "";
    if (kitnet.origem !== "usuario") return;
    if (conta && conta.usuario.id === kitnet.locadorId) return;
    if (conta && (!conta.perfil || conta.perfil.situacao !== "ativa")) return;

    if (!conta) {
      area.appendChild(el("a", {
        class: "botao--link texto-pequeno link-denuncia",
        href: "entrar.html?redirecionar=" + encodeURIComponent("imovel.html?id=" + kitnet.id)
      }, [icone("icon-alerta"), document.createTextNode("Denunciar anúncio")]));
      return;
    }

    if (await temDenunciaAberta(kitnet.id)) {
      area.appendChild(paragrafoContato("Você já denunciou este anúncio. A moderação está analisando."));
      return;
    }

    const botaoAbrir = el("button", { type: "button", class: "botao--link texto-pequeno link-denuncia", "aria-expanded": "false", "aria-controls": "form-denuncia" },
      [icone("icon-alerta"), document.createTextNode("Denunciar anúncio")]);

    const seletor = el("select", { id: "denuncia-motivo", required: "" }, [el("option", { value: "", texto: "Escolha o motivo" })]);
    Object.keys(MOTIVOS_DENUNCIA).forEach((chave) => seletor.appendChild(el("option", { value: chave, texto: MOTIVOS_DENUNCIA[chave] })));
    const detalhes = el("textarea", { id: "denuncia-detalhes", required: "", minlength: "10", maxlength: "1000", placeholder: "Conte o que aconteceu. Ex.: pediu depósito antes da visita." });
    const erroEnvio = el("p", { class: "mensagem-erro", hidden: "" }, [icone("icon-alerta"), el("span")]);
    const botaoEnviar = el("button", { type: "submit", class: "botao botao--secundario botao--compacto" }, [document.createTextNode("Enviar denúncia")]);
    const botaoCancelar = el("button", { type: "button", class: "botao botao--link" }, [document.createTextNode("Cancelar")]);

    const formulario = el("form", { class: "form-denuncia", id: "form-denuncia", novalidate: "", hidden: "" }, [
      el("div", { class: "campo" }, [
        el("label", { for: "denuncia-motivo", texto: "Motivo" }),
        seletor,
        el("p", { class: "mensagem-erro", hidden: "" }, [icone("icon-alerta"), document.createTextNode("Escolha um motivo.")])
      ]),
      el("div", { class: "campo" }, [
        el("label", { for: "denuncia-detalhes", texto: "O que aconteceu" }),
        detalhes,
        el("p", { class: "mensagem-erro", hidden: "" }, [icone("icon-alerta"), document.createTextNode("Escreva pelo menos 10 caracteres.")])
      ]),
      erroEnvio,
      el("div", { class: "linha-acoes" }, [botaoEnviar, botaoCancelar])
    ]);

    botaoAbrir.addEventListener("click", () => {
      formulario.hidden = !formulario.hidden;
      botaoAbrir.setAttribute("aria-expanded", String(!formulario.hidden));
      if (!formulario.hidden) seletor.focus();
    });
    botaoCancelar.addEventListener("click", () => {
      formulario.hidden = true;
      botaoAbrir.setAttribute("aria-expanded", "false");
      botaoAbrir.focus();
    });
    formulario.addEventListener("submit", async (evento) => {
      evento.preventDefault();
      mostrarErro(erroEnvio, "");
      let valido = true;
      [seletor, detalhes].forEach((campo) => {
        const ok = campo.checkValidity() && (campo !== detalhes || campo.value.trim().length >= 10);
        campo.closest(".campo").classList.toggle("campo--erro", !ok);
        campo.closest(".campo").querySelector(".mensagem-erro").hidden = ok;
        if (!ok) valido = false;
      });
      if (!valido) return;
      botaoCarregando(botaoEnviar, true, "Enviando…");
      try {
        await enviarDenuncia(kitnet.id, seletor.value, detalhes.value.trim());
        area.innerHTML = "";
        const sucesso = el("div", { class: "mensagem-sucesso", tabindex: "-1" }, [
          icone("icon-check"),
          el("p", { class: "texto-pequeno", texto: "Denúncia enviada. A moderação do SGLK vai analisar este anúncio." })
        ]);
        area.appendChild(sucesso);
        sucesso.focus();
      } catch (erro) {
        mostrarErro(erroEnvio, erro.message);
        botaoCarregando(botaoEnviar, false);
      }
    });

    area.appendChild(botaoAbrir);
    area.appendChild(formulario);
  }

  async function iniciarPaginaImovel() {
    const raiz = document.querySelector("[data-pagina-imovel]");
    if (!raiz || typeof buscarKitnet !== "function") return;

    const parametros = new URLSearchParams(window.location.search);
    const conteudo = raiz.querySelector("[data-imovel-conteudo]");
    const naoEncontrado = raiz.querySelector("[data-imovel-nao-encontrado]");
    const carregando = raiz.querySelector("[data-imovel-carregando]");

    let kitnet = null;
    let erroCarregamento = null;
    try {
      kitnet = await buscarKitnet(parametros.get("id"));
    } catch (erro) {
      erroCarregamento = erro;
    }
    if (carregando) carregando.hidden = true;

    if (!kitnet) {
      if (erroCarregamento) {
        const texto = naoEncontrado.querySelector("p");
        if (texto) texto.textContent = erroCarregamento.message;
      }
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
    if (!kitnet.galeria.length) galeria.appendChild(blocoSemFoto("sem-foto--galeria"));
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

    conteudo.hidden = false;
    naoEncontrado.hidden = true;

    const conta = await obterContaAtual();

    // Dono ou moderacao vendo um anuncio que nao aparece para o publico.
    const avisoVisibilidade = conteudo.querySelector("[data-aviso-visibilidade]");
    if (avisoVisibilidade && kitnet.origem === "usuario" && !kitnet.publica) {
      const ehDono = conta && conta.usuario.id === kitnet.locadorId;
      let texto = "Este anúncio não aparece para o público: o cadastro do locador ainda não foi aprovado ou a conta dele está suspensa.";
      if (kitnet.moderacao === "inativo") texto = "Este anúncio foi inativado pela moderação e não aparece para o público. Motivo: " + kitnet.motivoModeracao;
      else if (ehDono && conta.perfil && conta.perfil.situacao !== "ativa") texto = "Sua conta está suspensa, então este anúncio não aparece para o público.";
      else if (ehDono && conta.perfil && conta.perfil.aprovacao === "pendente") texto = "Este anúncio só aparece para o público depois que a moderação aprovar o seu cadastro de locador.";
      avisoVisibilidade.querySelector("p").textContent = texto;
      avisoVisibilidade.hidden = false;
    }

    await montarContato(conteudo.querySelector("[data-detalhes-contato]"), kitnet, conta);
    await montarDenuncia(conteudo.querySelector("[data-detalhes-denuncia]"), kitnet, conta);
  }

  /* ============================= PAGINA ANUNCIAR: CADASTRO E EDICAO ============================= */

  // Le um arquivo de imagem, redesenha num <canvas> numa largura maxima e
  // devolve um JPEG comprimido (Blob) e um endereco local para a previa.
  function comprimirImagem(arquivo, larguraMaxima) {
    return new Promise((resolve, reject) => {
      if (!arquivo.type || arquivo.type.indexOf("image/") !== 0) {
        reject(new Error(arquivo.name + " não é uma imagem. Envie fotos em JPG, PNG ou WebP."));
        return;
      }
      const endereco = URL.createObjectURL(arquivo);
      const imagem = new Image();
      imagem.onerror = () => { URL.revokeObjectURL(endereco); reject(new Error(arquivo.name + " não pôde ser aberta como imagem.")); };
      imagem.onload = () => {
        URL.revokeObjectURL(endereco);
        const escala = Math.min(1, larguraMaxima / imagem.width);
        const tela = document.createElement("canvas");
        tela.width = Math.max(1, Math.round(imagem.width * escala));
        tela.height = Math.max(1, Math.round(imagem.height * escala));
        tela.getContext("2d").drawImage(imagem, 0, 0, tela.width, tela.height);
        tela.toBlob((blob) => {
          if (!blob) { reject(new Error("Não foi possível preparar " + arquivo.name + ".")); return; }
          resolve({ blob: blob, src: URL.createObjectURL(blob) });
        }, "image/jpeg", 0.72);
      };
      imagem.src = endereco;
    });
  }

  function mostrarAvisoConta(alvo, texto, tipo) {
    if (!alvo) return;
    alvo.className = tipo === "info" ? "aviso-armazenamento-local" : "aviso-caixa";
    alvo.querySelector("p").textContent = texto;
    alvo.hidden = false;
  }

  async function iniciarPaginaAnunciar() {
    const formulario = document.querySelector("[data-form-cadastro]");
    if (!formulario) return;

    const parametros = new URLSearchParams(window.location.search);
    const idEdicao = parametros.get("editar");
    const destinoAqui = "anunciar.html" + (idEdicao ? "?editar=" + encodeURIComponent(idEdicao) : "");

    const carregandoConta = document.querySelector("[data-carregando-conta]");
    const areaFormulario = document.querySelector("[data-area-formulario]");
    const secaoMeusImoveis = document.querySelector("[data-secao-meus-imoveis]");
    const avisoConta = document.querySelector("[data-aviso-conta]");

    const conta = await obterContaAtual();
    if (!conta) {
      window.location.replace("entrar.html?papel=locador&redirecionar=" + encodeURIComponent(destinoAqui));
      return;
    }
    if (carregandoConta) carregandoConta.hidden = true;

    const perfil = conta.perfil;
    const ehLocador = !!perfil && perfil.tipo === "locador";
    const contaAtiva = !!perfil && perfil.situacao === "ativa";

    if (!perfil) {
      mostrarAvisoConta(avisoConta, "Não foi possível carregar sua conta. Recarregue a página.");
      return;
    }
    if (!ehLocador && !(conta.ehAdmin && idEdicao)) {
      mostrarAvisoConta(avisoConta, "Sua conta é de locatário, que busca kitnets e entra em contato com locadores. Anúncios são publicados por contas de locador; o tipo de conta é escolhido no cadastro e não muda depois.");
      return;
    }

    if (ehLocador) secaoMeusImoveis.hidden = false;
    if (!contaAtiva) {
      mostrarAvisoConta(avisoConta, "Sua conta está suspensa pela moderação, então você não pode publicar nem editar anúncios. Motivo: " + perfil.motivo_suspensao + ". Você ainda pode excluir seus anúncios.");
    } else if (ehLocador && perfil.aprovacao === "pendente") {
      mostrarAvisoConta(avisoConta, "Seu cadastro de locador está em análise pela moderação. Você já pode cadastrar imóveis: eles aparecem no catálogo depois da aprovação.", "info");
    } else {
      mostrarAvisoConta(avisoConta, "Seus anúncios ficam guardados no banco do SGLK e aparecem para todo mundo no catálogo de Imóveis.", "info");
    }

    const MAX_FOTOS = 4;
    let fotosExistentes = []; // [{ id, caminho, src }]
    let fotosRemovidas = [];  // [{ id, caminho }]
    let fotosNovas = [];      // [{ blob, src }]
    let podeEnviarFotos = contaAtiva && ehLocador;
    let kitnetEmEdicao = null;

    const campoFotos = document.querySelector("[data-campo-fotos]");
    const entradaFotos = document.querySelector("[data-entrada-fotos]");
    const preview = document.querySelector("[data-preview-fotos]");
    const erroFotos = document.querySelector("[data-erro-fotos]");
    const gruposComodidade = formulario.querySelectorAll("[data-grupo-comodidades]");
    const mensagemSucesso = document.querySelector("[data-sucesso-cadastro]");
    const mensagemErroEnvio = document.querySelector("[data-erro-cadastro]");
    const campoWhatsapp = formulario.querySelector("#anuncio-whatsapp");
    const botaoSalvar = formulario.querySelector("[data-botao-salvar]");

    function totalFotos() {
      return fotosExistentes.length + fotosNovas.length;
    }

    function renderizarPreview() {
      preview.innerHTML = "";
      const todas = fotosExistentes.map((f) => ({ src: f.src, remover: () => { fotosRemovidas.push(f); fotosExistentes = fotosExistentes.filter((x) => x !== f); } }))
        .concat(fotosNovas.map((f) => ({ src: f.src, remover: () => { fotosNovas = fotosNovas.filter((x) => x !== f); } })));
      todas.forEach((foto, indice) => {
        const item = el("div", { class: "preview-foto" }, [
          el("img", { src: foto.src, alt: "Pré-visualização da foto " + (indice + 1), width: "120", height: "90" })
        ]);
        const remover = el("button", { type: "button", class: "preview-foto-remover", "aria-label": "Remover a foto " + (indice + 1) }, [icone("icon-fechar")]);
        remover.addEventListener("click", () => { foto.remover(); renderizarPreview(); });
        item.appendChild(remover);
        preview.appendChild(item);
      });
      if (campoFotos) campoFotos.disabled = !podeEnviarFotos || totalFotos() >= MAX_FOTOS;
      if (entradaFotos) entradaFotos.hidden = !podeEnviarFotos;
    }

    if (campoFotos) {
      campoFotos.addEventListener("change", async (evento) => {
        const arquivos = Array.from(evento.target.files || []);
        evento.target.value = ""; // permite selecionar o mesmo arquivo de novo depois
        mostrarErro(erroFotos, "");
        const vagas = MAX_FOTOS - totalFotos();
        if (arquivos.length > vagas) {
          mostrarErro(erroFotos, "Você pode enviar no máximo " + MAX_FOTOS + " fotos. Foram adicionadas só as primeiras.");
        }
        for (const arquivo of arquivos.slice(0, Math.max(0, vagas))) {
          try {
            fotosNovas.push(await comprimirImagem(arquivo, 900));
          } catch (e) {
            mostrarErro(erroFotos, e.message);
          }
        }
        renderizarPreview();
      });
    }

    if (campoWhatsapp) {
      campoWhatsapp.addEventListener("input", () => { campoWhatsapp.value = mascararTelefone(campoWhatsapp.value); });
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
      let valido = campo.checkValidity();
      if (valido && campo === campoWhatsapp) valido = whatsappValido(campo.value);
      grupo.classList.toggle("campo--erro", !valido);
      if (erro) erro.hidden = valido;
      return valido;
    }

    formulario.querySelectorAll("input, textarea").forEach((campo) => {
      if (campo.type === "file" || campo.type === "checkbox" || campo.type === "radio") return;
      campo.addEventListener("blur", () => validarCampo(campo));
    });

    function preencherPadrao() {
      formulario.reset();
      formulario.querySelectorAll(".campo--erro").forEach((c) => c.classList.remove("campo--erro"));
      formulario.querySelectorAll(".campo .mensagem-erro").forEach((m) => { m.hidden = true; });
      if (campoWhatsapp && perfil.telefone) campoWhatsapp.value = mascararTelefone(perfil.telefone);
      fotosExistentes = []; fotosRemovidas = []; fotosNovas = [];
      renderizarPreview();
    }

    function preencherComKitnet(kitnet) {
      formulario.querySelector("#anuncio-titulo").value = kitnet.nome;
      formulario.querySelector("#anuncio-descricao").value = kitnet.descricao;
      formulario.querySelector("#anuncio-bairro").value = kitnet.bairro;
      formulario.querySelector("#anuncio-preco").value = kitnet.preco;
      formulario.querySelector("#anuncio-area").value = kitnet.area;
      formulario.querySelector("#anuncio-quartos").value = kitnet.quartos;
      formulario.querySelector("#anuncio-banheiros").value = kitnet.banheiros;
      formulario.querySelectorAll("[data-grupo-comodidades] input[type=checkbox]").forEach((caixa) => {
        caixa.checked = kitnet.comodidades.includes(caixa.value);
      });
      const radio = formulario.querySelector("input[name=anuncio-status][value='" + kitnet.status + "']");
      if (radio) radio.checked = true;
      if (campoWhatsapp) campoWhatsapp.value = whatsappParaCampo(kitnet.whatsapp);
      fotosExistentes = kitnet.fotos.map((f) => ({ id: f.id, caminho: f.caminho, src: f.src }));
      fotosRemovidas = []; fotosNovas = [];
      renderizarPreview();
    }

    // Modo edicao (anunciar.html?editar=<id>): dono ou moderacao.
    if (idEdicao) {
      let kitnet = null;
      try {
        kitnet = await buscarKitnetParaEdicao(idEdicao);
      } catch (erro) {
        mostrarAvisoConta(avisoConta, erro.message);
        return;
      }
      const ehDono = kitnet && kitnet.locadorId === conta.usuario.id;
      if (!kitnet || (!ehDono && !conta.ehAdmin)) {
        mostrarAvisoConta(avisoConta, "Anúncio não encontrado, ou você não tem permissão para editá-lo.");
        return;
      }
      if (ehDono && !contaAtiva) {
        // Aviso de conta suspensa ja esta na tela; sem formulario.
      } else {
        kitnetEmEdicao = kitnet;
        podeEnviarFotos = ehDono && contaAtiva;
        document.querySelector("[data-titulo-anunciar]").textContent = "Editar anúncio";
        document.querySelector("[data-titulo-formulario]").textContent = kitnet.nome;
        botaoSalvar.textContent = "Salvar alterações";
        const cancelar = document.querySelector("[data-cancelar-edicao]");
        if (cancelar) { cancelar.hidden = false; cancelar.href = ehDono ? "anunciar.html" : "moderacao.html"; }
        if (!ehDono) {
          mostrarAvisoConta(avisoConta, "Você está editando como moderação um anúncio de outra pessoa. Dá para remover fotos, mas não enviar novas.", "info");
        }
        preencherComKitnet(kitnet);
        areaFormulario.hidden = false;
      }
    } else if (contaAtiva) {
      preencherPadrao();
      areaFormulario.hidden = false;
    }

    formulario.addEventListener("submit", async (evento) => {
      evento.preventDefault();
      mostrarErro(mensagemErroEnvio, "");

      const camposObrigatorios = formulario.querySelectorAll("input[required], textarea[required]");
      let tudoValido = true;
      camposObrigatorios.forEach((campo) => { if (!validarCampo(campo)) tudoValido = false; });

      if (totalFotos() === 0) {
        tudoValido = false;
        mostrarErro(erroFotos, "Adicione pelo menos uma foto do imóvel.");
      }

      if (!tudoValido) {
        const primeiroInvalido = formulario.querySelector(".campo--erro input, .campo--erro textarea");
        if (primeiroInvalido) primeiroInvalido.focus();
        return;
      }

      const dados = {
        nome: formulario.querySelector("#anuncio-titulo").value.trim(),
        descricao: formulario.querySelector("#anuncio-descricao").value.trim(),
        bairro: formulario.querySelector("#anuncio-bairro").value.trim(),
        preco: Number(formulario.querySelector("#anuncio-preco").value),
        area: Number(formulario.querySelector("#anuncio-area").value),
        quartos: Number(formulario.querySelector("#anuncio-quartos").value),
        banheiros: Number(formulario.querySelector("#anuncio-banheiros").value),
        comodidades: comodidadesSelecionadas(),
        status: formulario.querySelector("input[name=anuncio-status]:checked").value
      };

      botaoCarregando(botaoSalvar, true, kitnetEmEdicao ? "Salvando…" : "Cadastrando…");
      try {
        const idSalvo = await salvarKitnet({
          id: kitnetEmEdicao ? kitnetEmEdicao.id : null,
          idUsuario: conta.usuario.id,
          dados: dados,
          whatsapp: normalizarWhatsapp(campoWhatsapp.value),
          fotosNovas: fotosNovas.map((f) => f.blob),
          fotosRemovidas: fotosRemovidas.map((f) => ({ id: f.id, caminho: f.caminho })),
          idsFotosMantidas: fotosExistentes.map((f) => f.id)
        });

        if (kitnetEmEdicao) {
          window.location.href = "imovel.html?id=" + encodeURIComponent(idSalvo);
          return;
        }
        preencherPadrao();
        await renderizarMeusImoveis();
        if (mensagemSucesso) {
          mensagemSucesso.querySelector("p").textContent = perfil.aprovacao === "aprovado"
            ? "Imóvel cadastrado com sucesso! Ele já aparece no catálogo de Imóveis e na lista Meus imóveis, abaixo."
            : "Imóvel cadastrado com sucesso! Ele aparece no catálogo depois que a moderação aprovar o seu cadastro de locador. Enquanto isso, fica na lista Meus imóveis, abaixo.";
          mensagemSucesso.hidden = false;
          mensagemSucesso.focus();
        }
      } catch (erro) {
        mostrarErro(mensagemErroEnvio, erro.message);
      } finally {
        botaoCarregando(botaoSalvar, false);
      }
    });

    // "Meus imoveis": ver, editar, mudar o status e excluir.
    const listaMeusImoveis = document.querySelector("[data-lista-meus-imoveis]");
    const semImoveis = document.querySelector("[data-sem-imoveis]");

    function situacaoNoCatalogo(kitnet) {
      if (kitnet.moderacao === "inativo") return { texto: "Inativado pela moderação. Motivo: " + kitnet.motivoModeracao, alerta: true };
      if (!contaAtiva) return { texto: "Fora do catálogo: sua conta está suspensa.", alerta: true };
      if (perfil.aprovacao !== "aprovado") return { texto: "Aguardando a aprovação do seu cadastro para aparecer no catálogo.", alerta: false };
      return { texto: "Visível no catálogo.", alerta: false };
    }

    async function renderizarMeusImoveis() {
      if (!listaMeusImoveis || !ehLocador) return;
      let meusImoveis = [];
      try {
        meusImoveis = await listarMinhasKitnets(conta.usuario.id);
      } catch (erro) {
        if (semImoveis) { semImoveis.textContent = erro.message; semImoveis.hidden = false; }
        listaMeusImoveis.hidden = true;
        return;
      }
      listaMeusImoveis.innerHTML = "";
      if (semImoveis) { semImoveis.textContent = "Você ainda não cadastrou nenhum imóvel."; semImoveis.hidden = meusImoveis.length !== 0; }
      listaMeusImoveis.hidden = meusImoveis.length === 0;

      meusImoveis.forEach((kitnet) => {
        const acoes = [el("a", { class: "botao--link", href: "imovel.html?id=" + encodeURIComponent(kitnet.id), texto: "Ver anúncio" })];

        if (contaAtiva) {
          acoes.push(el("a", { class: "botao--link", href: "anunciar.html?editar=" + encodeURIComponent(kitnet.id), texto: "Editar" }));
          const outroStatus = kitnet.status === "disponivel" ? "alugado" : "disponivel";
          const rotuloAlternar = kitnet.status === "disponivel" ? "Marcar como alugado" : "Marcar como disponível";
          const botaoAlternar = el("button", { type: "button", class: "botao botao--secundario botao--compacto" }, [document.createTextNode(rotuloAlternar)]);
          botaoAlternar.addEventListener("click", async () => {
            // UC-04 do documento: confirmar antes de mudar o status.
            const pergunta = outroStatus === "alugado" ? "Deseja marcar este imóvel como alugado?" : "Deseja marcar este imóvel como disponível?";
            if (!window.confirm(pergunta)) return;
            botaoCarregando(botaoAlternar, true, "Salvando…");
            try {
              await alterarStatusKitnet(kitnet.id, outroStatus);
              await renderizarMeusImoveis();
            } catch (erro) {
              botaoCarregando(botaoAlternar, false);
              mostrarAvisoFlutuante(erro.message);
            }
          });
          acoes.push(botaoAlternar);
        }

        const botaoExcluir = el("button", { type: "button", class: "botao botao--link", style: "color:var(--erro)" }, [document.createTextNode("Excluir")]);
        botaoExcluir.addEventListener("click", async () => {
          if (!window.confirm('Excluir o anúncio "' + kitnet.nome + '"? Essa ação não pode ser desfeita.')) return;
          botaoCarregando(botaoExcluir, true, "Excluindo…");
          try {
            await excluirKitnet(kitnet);
            await renderizarMeusImoveis();
          } catch (erro) {
            botaoCarregando(botaoExcluir, false);
            mostrarAvisoFlutuante(erro.message);
          }
        });
        acoes.push(botaoExcluir);

        const situacao = situacaoNoCatalogo(kitnet);
        const linha = el("li", { class: "linha-imovel-usuario" }, [
          kitnet.capa ? el("img", { src: kitnet.capa, alt: "", width: "72", height: "72" }) : blocoSemFoto("sem-foto--miniatura"),
          el("div", { class: "linha-imovel-usuario-info" }, [
            el("p", { style: "font-weight:600", texto: kitnet.nome }),
            el("p", { class: "texto-suave texto-pequeno", texto: kitnet.bairro + " · " + formatarPreco(kitnet.preco) + "/mês" }),
            el("p", { class: "texto-pequeno", style: situacao.alerta ? "color:var(--erro)" : "color:var(--texto-suave)", texto: situacao.texto })
          ]),
          el("span", { class: "selo selo--" + kitnet.status, texto: kitnet.statusTexto }),
          el("div", { class: "linha-imovel-usuario-acoes" }, acoes)
        ]);
        listaMeusImoveis.appendChild(linha);
      });
    }

    await renderizarMeusImoveis();
  }

  /* ============================= PAGINA ENTRAR (CADASTRO / LOGIN) ============================= */

  // Valida um campo generico do padrao .campo + .mensagem-erro. Aceita um
  // validador extra opcional alem da validacao nativa do HTML.
  function validarCampoAuth(campo, validadorExtra) {
    const grupo = campo.closest(".campo");
    if (!grupo) return campo.checkValidity();
    const erro = grupo.querySelector(".mensagem-erro");
    // O navegador so aplica minlength ao que a pessoa digitou; valores
    // preenchidos por script ou por alguns gerenciadores de senha passariam.
    let valido = campo.checkValidity() && !(campo.minLength > 0 && campo.value.length < campo.minLength);
    if (valido && validadorExtra) valido = validadorExtra(campo.value);
    grupo.classList.toggle("campo--erro", !valido);
    if (erro) erro.hidden = valido;
    return valido;
  }

  async function iniciarPaginaEntrar() {
    const raiz = document.querySelector("[data-pagina-entrar]");
    if (!raiz) return;

    // "papel" e "redirecionar" chegam de uma trava de login (anunciar, contato
    // ou denuncia): dizem qual tipo de conta sugerir e para onde voltar depois.
    const parametrosUrl = new URLSearchParams(window.location.search);
    const papelParam = parametrosUrl.get("papel");
    const papelSolicitado = papelParam === "locador" || papelParam === "locatario" ? papelParam : null;
    const destinoPosLogin = destinoAutenticadoSeguro(parametrosUrl.get("redirecionar")) || "index.html";
    const vemDaConfirmacao = parametrosUrl.get("confirmado") === "1";

    const blocos = {
      cadastro: document.querySelector("[data-bloco-cadastro]"),
      entrar: document.querySelector("[data-bloco-entrar]"),
      recuperar: document.querySelector("[data-bloco-recuperar]"),
      novaSenha: document.querySelector("[data-bloco-nova-senha]"),
      conectado: document.querySelector("[data-bloco-conectado]")
    };
    function mostrarBloco(nome) {
      Object.keys(blocos).forEach((chave) => { if (blocos[chave]) blocos[chave].hidden = chave !== nome; });
    }

    const avisoRedirecionamento = document.querySelector("[data-aviso-redirecionamento]");
    const avisoRedirecionamentoTexto = document.querySelector("[data-aviso-redirecionamento-texto]");
    if (papelSolicitado && avisoRedirecionamento && avisoRedirecionamentoTexto) {
      avisoRedirecionamentoTexto.textContent = papelSolicitado === "locador"
        ? "Para anunciar uma kitnet, entre ou crie uma conta de locador."
        : "Para entrar em contato com o locador, entre ou crie uma conta.";
      avisoRedirecionamento.hidden = false;
    }

    // Mascaras do CPF e do telefone enquanto a pessoa digita.
    const campoCpf = document.querySelector("#conta-cpf");
    if (campoCpf) campoCpf.addEventListener("input", () => { campoCpf.value = mascararCpf(campoCpf.value); });
    const campoTelefone = document.querySelector("#conta-telefone");
    if (campoTelefone) campoTelefone.addEventListener("input", () => { campoTelefone.value = mascararTelefone(campoTelefone.value); });

    // Validadores alem do HTML nativo, por id do campo.
    const validadoresCadastro = { "conta-cpf": cpfValido, "conta-telefone": telefoneValido };

    // Abas "Quero alugar" / "Quero anunciar": mostram ou escondem o campo
    // Ocupacao (so do locatario), trocam os textos e definem o tipo da conta.
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
      if (campoOcupacao) campoOcupacao.hidden = ehLocador;
      if (entradaOcupacao) entradaOcupacao.required = !ehLocador;
      if (tituloForm) tituloForm.textContent = ehLocador ? "Cadastro de locador" : "Cadastro de locatário";
      if (subtituloForm) {
        subtituloForm.textContent = ehLocador
          ? "Crie sua conta para anunciar e gerenciar suas kitnets no SGLK. O cadastro de locador passa pela aprovação da moderação antes de os anúncios aparecerem."
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

    const campoEmailEntrar = document.querySelector("#conta-email-entrar");
    function irParaEntrar(email) {
      if (email && campoEmailEntrar) campoEmailEntrar.value = email;
      mostrarBloco("entrar");
      const alvo = email ? document.querySelector("#conta-senha-entrar") : campoEmailEntrar;
      if (alvo) alvo.focus();
    }
    document.querySelectorAll("[data-mostrar-entrar]").forEach((botao) => botao.addEventListener("click", () => irParaEntrar()));
    document.querySelectorAll("[data-mostrar-cadastro]").forEach((botao) => botao.addEventListener("click", () => mostrarBloco("cadastro")));
    // Link "Entrar" do cabecalho (entrar.html?modo=entrar): abre direto no login.
    if (parametrosUrl.get("modo") === "entrar") mostrarBloco("entrar");
    // Link do e-mail de recuperacao: mostra "Conferindo o link…" enquanto a sessao carrega.
    if (parametrosUrl.get("modo") === "nova-senha") mostrarBloco("novaSenha");

    // "Esqueci minha senha": pede o e-mail e manda o link de recuperacao.
    const campoEmailRecuperar = document.querySelector("#conta-email-recuperar");
    const formRecuperar = document.querySelector("[data-form-recuperar]");
    const erroRecuperar = document.querySelector("[data-erro-recuperar]");
    const sucessoRecuperar = document.querySelector("[data-sucesso-recuperar]");
    function irParaRecuperar() {
      if (campoEmailRecuperar && campoEmailEntrar && campoEmailEntrar.value.trim()) campoEmailRecuperar.value = campoEmailEntrar.value.trim();
      if (formRecuperar) formRecuperar.hidden = false;
      if (sucessoRecuperar) sucessoRecuperar.hidden = true;
      mostrarErro(erroRecuperar, "");
      mostrarBloco("recuperar");
      if (campoEmailRecuperar) campoEmailRecuperar.focus();
    }
    document.querySelectorAll("[data-mostrar-recuperar]").forEach((botao) => botao.addEventListener("click", irParaRecuperar));
    // entrar.html?modo=recuperar (usado no e-mail de "senha alterada").
    if (parametrosUrl.get("modo") === "recuperar") irParaRecuperar();
    if (formRecuperar) {
      const botaoRecuperar = formRecuperar.querySelector("button[type=submit]");
      campoEmailRecuperar.addEventListener("blur", () => validarCampoAuth(campoEmailRecuperar));
      formRecuperar.addEventListener("submit", async (evento) => {
        evento.preventDefault();
        mostrarErro(erroRecuperar, "");
        if (!validarCampoAuth(campoEmailRecuperar)) { campoEmailRecuperar.focus(); return; }
        const email = campoEmailRecuperar.value.trim();
        botaoCarregando(botaoRecuperar, true, "Enviando…");
        const resultado = await pedirLinkRecuperacao(email);
        botaoCarregando(botaoRecuperar, false);
        if (!resultado.ok) { mostrarErro(erroRecuperar, resultado.mensagem); return; }
        formRecuperar.hidden = true;
        sucessoRecuperar.querySelector("[data-sucesso-recuperar-email]").textContent = email;
        sucessoRecuperar.hidden = false;
        sucessoRecuperar.focus();
      });
    }

    // Formulario de cadastro: cria a conta no Supabase. Com a confirmacao de
    // e-mail ligada, a pessoa so entra depois de clicar no link do e-mail.
    const formCadastro = document.querySelector("[data-form-cadastro-conta]");
    const erroCadastro = document.querySelector("[data-erro-cadastro-conta]");
    const botaoErroEntrar = document.querySelector("[data-erro-cadastro-entrar]");
    if (formCadastro) {
      formCadastro.querySelectorAll("input:not([type=checkbox])").forEach((campo) => {
        campo.addEventListener("blur", () => {
          if (!campo.closest("[hidden]")) validarCampoAuth(campo, validadoresCadastro[campo.id] || null);
        });
      });
      formCadastro.addEventListener("submit", async (evento) => {
        evento.preventDefault();
        mostrarErro(erroCadastro, "");
        if (botaoErroEntrar) botaoErroEntrar.hidden = true;
        const campos = Array.from(formCadastro.querySelectorAll("input[required]")).filter((c) => !c.closest("[hidden]"));
        let tudoValido = true;
        campos.forEach((campo) => {
          if (!validarCampoAuth(campo, validadoresCadastro[campo.id] || null)) tudoValido = false;
        });
        if (!tudoValido) {
          const primeiroInvalido = campos.find((c) => c.closest(".campo--erro"));
          if (primeiroInvalido) primeiroInvalido.focus();
          return;
        }

        const email = document.querySelector("#conta-email-cadastro").value.trim();
        botaoCarregando(botaoEnviar, true, "Criando conta…");
        const resultado = await cadastrarConta({
          tipo: tipoContaAtual,
          nome: document.querySelector("#conta-nome").value.trim(),
          email: email,
          cpf: campoCpf.value.replace(/\D/g, ""),
          telefone: campoTelefone.value.replace(/\D/g, ""),
          ocupacao: tipoContaAtual === "locatario" ? entradaOcupacao.value.trim() : "",
          senha: document.querySelector("#conta-senha").value
        });
        botaoCarregando(botaoEnviar, false);

        if (!resultado.ok) {
          mostrarErro(erroCadastro, resultado.mensagem);
          if (resultado.emailJaCadastrado && botaoErroEntrar) {
            botaoErroEntrar.hidden = false;
            botaoErroEntrar.onclick = () => irParaEntrar(email);
          }
          return;
        }
        if (!resultado.precisaConfirmar) {
          window.location.href = destinoPosLogin;
          return;
        }
        formCadastro.hidden = true;
        const sucesso = document.querySelector("[data-sucesso-cadastro-conta]");
        if (sucesso) {
          sucesso.querySelector("[data-sucesso-cadastro-email]").textContent = email;
          sucesso.querySelector("[data-sucesso-cadastro-locador]").hidden = tipoContaAtual !== "locador";
          const botaoIr = sucesso.querySelector("[data-sucesso-cadastro-ir]");
          if (botaoIr) botaoIr.onclick = () => irParaEntrar(email);
          sucesso.hidden = false;
          sucesso.focus();
        }
      });
    }

    // Formulario de entrar.
    const formEntrar = document.querySelector("[data-form-entrar]");
    const erroEntrar = document.querySelector("[data-erro-entrar]");
    if (formEntrar) {
      const botaoEntrar = formEntrar.querySelector("button[type=submit]");
      formEntrar.querySelectorAll("input:not([type=checkbox])").forEach((campo) => {
        campo.addEventListener("blur", () => validarCampoAuth(campo));
      });
      formEntrar.addEventListener("submit", async (evento) => {
        evento.preventDefault();
        mostrarErro(erroEntrar, "");
        const campos = Array.from(formEntrar.querySelectorAll("input[required]"));
        let tudoValido = true;
        campos.forEach((campo) => { if (!validarCampoAuth(campo)) tudoValido = false; });
        if (!tudoValido) {
          const primeiroInvalido = campos.find((c) => c.closest(".campo--erro"));
          if (primeiroInvalido) primeiroInvalido.focus();
          return;
        }
        botaoCarregando(botaoEntrar, true, "Entrando…");
        const resultado = await entrarNaConta(campoEmailEntrar.value.trim(), document.querySelector("#conta-senha-entrar").value);
        if (!resultado.ok) {
          botaoCarregando(botaoEntrar, false);
          mostrarErro(erroEntrar, resultado.mensagem);
          return;
        }
        // Documento da disciplina (HU-01): depois de entrar, volta logado
        // para a pagina inicial (ou para onde a trava de login mandou).
        window.location.href = destinoPosLogin;
      });
    }

    const conta = await obterContaAtual();
    const linkComErro = typeof LINK_DO_EMAIL_COM_ERRO !== "undefined" && LINK_DO_EMAIL_COM_ERRO;

    // Senha nova: o link do e-mail de recuperacao abre
    // entrar.html?modo=nova-senha ja com uma sessao. Sem sessao, ou com erro
    // no link, ele expirou ou ja foi usado.
    if (parametrosUrl.get("modo") === "nova-senha") {
      if (avisoRedirecionamento) avisoRedirecionamento.hidden = true;
      mostrarBloco("novaSenha");
      const carregandoNovaSenha = document.querySelector("[data-nova-senha-carregando]");
      const formNovaSenha = document.querySelector("[data-form-nova-senha]");
      if (carregandoNovaSenha) carregandoNovaSenha.hidden = true;
      if (!conta || linkComErro) {
        document.querySelector("[data-nova-senha-invalido]").hidden = false;
        return;
      }
      const campoNova = document.querySelector("#conta-nova-senha");
      const campoRepetir = document.querySelector("#conta-nova-senha-repetir");
      const erroNovaSenha = document.querySelector("[data-erro-nova-senha]");
      const botaoNovaSenha = formNovaSenha.querySelector("button[type=submit]");
      const senhasIguais = () => campoRepetir.value === campoNova.value;
      formNovaSenha.hidden = false;
      campoNova.focus();
      campoNova.addEventListener("blur", () => validarCampoAuth(campoNova));
      campoRepetir.addEventListener("blur", () => validarCampoAuth(campoRepetir, senhasIguais));
      formNovaSenha.addEventListener("submit", async (evento) => {
        evento.preventDefault();
        mostrarErro(erroNovaSenha, "");
        const novaOk = validarCampoAuth(campoNova);
        const repetirOk = validarCampoAuth(campoRepetir, senhasIguais);
        if (!novaOk || !repetirOk) { (novaOk ? campoRepetir : campoNova).focus(); return; }
        botaoCarregando(botaoNovaSenha, true, "Salvando…");
        const resultado = await definirNovaSenha(campoNova.value);
        botaoCarregando(botaoNovaSenha, false);
        if (!resultado.ok) { mostrarErro(erroNovaSenha, resultado.mensagem); return; }
        formNovaSenha.hidden = true;
        window.history.replaceState(null, "", "entrar.html");
        const sucesso = document.querySelector("[data-sucesso-nova-senha]");
        sucesso.hidden = false;
        sucesso.focus();
      });
      return;
    }

    // Link de confirmacao de cadastro expirado ou ja usado.
    if (linkComErro && avisoRedirecionamento && avisoRedirecionamentoTexto) {
      avisoRedirecionamentoTexto.textContent = "O link do e-mail expirou ou já foi usado. Se você já confirmou o cadastro, é só entrar com seu e-mail e senha.";
      avisoRedirecionamento.hidden = false;
      if (!conta) mostrarBloco("entrar");
    }

    // Quem ja esta conectado ve a propria conta em vez dos formularios.
    if (!conta) return;
    const tipoTexto = conta.perfil ? (conta.perfil.tipo === "locador" ? "locador" : "locatário") : "";
    const nome = conta.perfil ? conta.perfil.nome : conta.usuario.email;
    const bloco = blocos.conectado;
    bloco.querySelector("[data-conectado-titulo]").textContent = vemDaConfirmacao ? "E-mail confirmado!" : "Você já entrou";
    bloco.querySelector("[data-conectado-texto]").textContent = "Conectado como " + nome + (tipoTexto ? ", com uma conta de " + tipoTexto + "." : ".");
    const avisoTipo = bloco.querySelector("[data-conectado-aviso]");
    if (avisoTipo && papelSolicitado === "locador" && conta.perfil && conta.perfil.tipo !== "locador" && !conta.ehAdmin) {
      avisoTipo.querySelector("p").textContent = "Esta conta é de locatário e não pode publicar anúncios.";
      avisoTipo.hidden = false;
    }
    bloco.querySelector("[data-conectado-continuar]").href = destinoPosLogin;
    const botaoSair = bloco.querySelector("[data-conectado-sair]");
    botaoSair.addEventListener("click", async () => {
      botaoCarregando(botaoSair, true, "Saindo…");
      await sairDaConta();
      window.location.reload();
    });
    if (avisoRedirecionamento) avisoRedirecionamento.hidden = true;
    mostrarBloco("conectado");
  }

  /* ============================= PARA OUTROS SCRIPTS DO SITE ============================= */

  // moderacao.js reaproveita estas funcoes em vez de duplica-las.
  window.SGLK = {
    el: el,
    icone: icone,
    formatarPreco: formatarPreco,
    formatarData: formatarData,
    mascararCpf: mascararCpf,
    mascararTelefone: mascararTelefone,
    botaoCarregando: botaoCarregando,
    mostrarErro: mostrarErro,
    mostrarAvisoFlutuante: mostrarAvisoFlutuante,
    blocoSemFoto: blocoSemFoto
  };

  /* ============================= INICIALIZACAO ============================= */

  document.addEventListener("DOMContentLoaded", () => {
    iniciarMenuMovel();
    iniciarMostrarSenha();
    iniciarControleConta();
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
