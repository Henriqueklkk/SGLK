/*
  moderacao.js - Pagina de moderacao (moderacao.html): cadastros de locador
  para aprovar, denuncias, mensagens do formulario de contato, anuncios e contas (documento da disciplina:
  UC-06, HU-06 e RN-02).

  So abre para contas com app_metadata.papel = "admin". Esconder a pagina
  nao e a protecao: o banco confere de novo em cada leitura e em cada acao
  (RLS e a funcao moderacao_listar_contas, em supabase/moderacao.sql).

  Usa as funcoes de armazenamento.js e os utilitarios que site.js expoe em
  window.SGLK.
*/
(function () {
  "use strict";

  document.addEventListener("DOMContentLoaded", iniciarPaginaModeracao);

  async function iniciarPaginaModeracao() {
    const raiz = document.querySelector("[data-pagina-moderacao]");
    if (!raiz || !window.SGLK) return;
    const { el, formatarPreco, formatarData, mascararCpf, mascararTelefone, botaoCarregando, mostrarErro, mostrarAvisoFlutuante } = window.SGLK;

    const carregando = raiz.querySelector("[data-moderacao-carregando]");
    const restrito = raiz.querySelector("[data-moderacao-restrito]");
    const area = raiz.querySelector("[data-moderacao-area]");
    const avisoErro = raiz.querySelector("[data-moderacao-erro]");

    const conta = await obterContaAtual();
    if (!conta) {
      window.location.replace("entrar.html?redirecionar=moderacao.html");
      return;
    }
    carregando.hidden = true;
    if (!conta.ehAdmin) {
      restrito.hidden = false;
      return;
    }
    area.hidden = false;

    /* ---------- Abas ---------- */

    const abas = Array.from(raiz.querySelectorAll("[data-aba-moderacao]"));
    function selecionarAba(nome, moverFoco) {
      abas.forEach((botao) => {
        const ativa = botao.dataset.abaModeracao === nome;
        botao.setAttribute("aria-selected", String(ativa));
        botao.tabIndex = ativa ? 0 : -1;
        document.getElementById(botao.getAttribute("aria-controls")).hidden = !ativa;
        if (ativa && moverFoco) botao.focus();
      });
    }
    abas.forEach((botao, indice) => {
      botao.addEventListener("click", () => selecionarAba(botao.dataset.abaModeracao, false));
      botao.addEventListener("keydown", (evento) => {
        if (evento.key !== "ArrowRight" && evento.key !== "ArrowLeft") return;
        const proximo = evento.key === "ArrowRight" ? (indice + 1) % abas.length : (indice - 1 + abas.length) % abas.length;
        selecionarAba(abas[proximo].dataset.abaModeracao, true);
        evento.preventDefault();
      });
    });

    /* ---------- Janela de confirmacao (com ou sem motivo) ---------- */

    const dialogo = document.querySelector("[data-dialogo]");
    const formDialogo = dialogo.querySelector("[data-dialogo-form]");
    const tituloDialogo = dialogo.querySelector("[data-dialogo-titulo]");
    const textoDialogo = dialogo.querySelector("[data-dialogo-texto]");
    const grupoMotivo = dialogo.querySelector("[data-dialogo-campo]");
    const campoMotivo = dialogo.querySelector("#dialogo-motivo");
    const erroDialogo = dialogo.querySelector("[data-dialogo-erro]");
    const botaoConfirmar = dialogo.querySelector("[data-dialogo-confirmar]");
    let acaoDialogo = null;
    let focoAnterior = null;

    // opcoes: { titulo, texto, pedirMotivo, motivoInicial, rotuloConfirmar, acao(motivo) }
    function abrirDialogo(opcoes) {
      acaoDialogo = opcoes.acao;
      tituloDialogo.textContent = opcoes.titulo;
      textoDialogo.textContent = opcoes.texto || "";
      grupoMotivo.hidden = !opcoes.pedirMotivo;
      grupoMotivo.classList.remove("campo--erro");
      grupoMotivo.querySelector(".mensagem-erro").hidden = true;
      campoMotivo.value = opcoes.motivoInicial || "";
      botaoConfirmar.textContent = opcoes.rotuloConfirmar;
      mostrarErro(erroDialogo, "");
      focoAnterior = document.activeElement;
      dialogo.showModal();
      (opcoes.pedirMotivo ? campoMotivo : botaoConfirmar).focus();
    }

    dialogo.querySelector("[data-dialogo-cancelar]").addEventListener("click", () => dialogo.close());
    dialogo.addEventListener("close", () => {
      if (focoAnterior && document.contains(focoAnterior)) focoAnterior.focus();
    });
    formDialogo.addEventListener("submit", async (evento) => {
      evento.preventDefault();
      mostrarErro(erroDialogo, "");
      const motivo = campoMotivo.value.trim();
      if (!grupoMotivo.hidden && motivo.length < 3) {
        grupoMotivo.classList.add("campo--erro");
        grupoMotivo.querySelector(".mensagem-erro").hidden = false;
        campoMotivo.focus();
        return;
      }
      botaoCarregando(botaoConfirmar, true, "Salvando…");
      try {
        await acaoDialogo(motivo);
        dialogo.close();
      } catch (erro) {
        mostrarErro(erroDialogo, erro.message);
      } finally {
        botaoCarregando(botaoConfirmar, false);
      }
    });

    /* ---------- Pecas dos cartoes ---------- */

    function selo(texto, variante) {
      return el("span", { class: "selo selo--" + variante, texto: texto });
    }

    function dados(pares) {
      return el("dl", { class: "cartao-moderacao-dados" }, pares
        .filter((par) => par && par[1] !== null && par[1] !== undefined && par[1] !== "")
        .map((par) => el("div", {}, [el("dt", { texto: par[0] }), el("dd", {}, [typeof par[1] === "string" ? document.createTextNode(par[1]) : par[1]])])));
    }

    function cartao(titulo, selos, corpo, acoes) {
      return el("li", { class: "cartao-moderacao" }, [
        el("div", { class: "cartao-moderacao-topo" }, [
          el("h3", { class: "cartao-moderacao-titulo", texto: titulo }),
          el("div", { class: "selos-linha" }, selos)
        ]),
        ...corpo,
        acoes.length ? el("div", { class: "cartao-moderacao-acoes" }, acoes) : null
      ]);
    }

    function botao(texto, variante, aoClicar) {
      const classes = variante === "link" ? "botao botao--link" : variante === "perigo" ? "botao botao--link texto-erro" : "botao botao--secundario botao--compacto";
      const b = el("button", { type: "button", class: classes }, [document.createTextNode(texto)]);
      b.addEventListener("click", aoClicar);
      return b;
    }

    function link(texto, href) {
      return el("a", { class: "botao--link", href: href, texto: texto });
    }

    function preencherLista(nome, itens) {
      const lista = raiz.querySelector("[data-lista='" + nome + "']");
      const vazio = raiz.querySelector("[data-vazio='" + nome + "']");
      lista.innerHTML = "";
      itens.forEach((item) => lista.appendChild(item));
      lista.hidden = itens.length === 0;
      vazio.hidden = itens.length !== 0;
    }

    function contador(nome, quantidade) {
      raiz.querySelector("[data-contador='" + nome + "']").textContent = quantidade ? "(" + quantidade + ")" : "";
    }

    /* ---------- Acoes ---------- */

    async function executar(acao, mensagemSucesso) {
      await acao();
      await carregarTudo();
      mostrarAvisoFlutuante(mensagemSucesso);
    }

    function aprovarLocador(c) {
      abrirDialogo({
        titulo: "Aprovar o cadastro de " + c.nome + "?",
        texto: "Os anúncios desta conta passam a aparecer no catálogo para todo mundo.",
        rotuloConfirmar: "Aprovar cadastro",
        acao: () => executar(() => moderacaoAtualizarConta(c.id, { aprovacao: "aprovado" }), "Cadastro aprovado.")
      });
    }

    function suspenderConta(c) {
      abrirDialogo({
        titulo: "Suspender a conta de " + c.nome + "?",
        texto: "A pessoa continua entrando e vê este motivo, mas não vê contatos, não publica, não edita e não denuncia. Os anúncios dela saem do ar.",
        pedirMotivo: true,
        rotuloConfirmar: "Suspender conta",
        acao: (motivo) => executar(() => moderacaoAtualizarConta(c.id, { situacao: "suspensa", motivo_suspensao: motivo }), "Conta suspensa.")
      });
    }

    function reativarConta(c) {
      abrirDialogo({
        titulo: "Reativar a conta de " + c.nome + "?",
        texto: "A conta volta a funcionar normalmente, e os anúncios dela voltam ao catálogo se o cadastro estiver aprovado.",
        rotuloConfirmar: "Reativar conta",
        acao: () => executar(() => moderacaoAtualizarConta(c.id, { situacao: "ativa" }), "Conta reativada.")
      });
    }

    function inativarAnuncio(kitnet, motivoInicial, idDenuncia) {
      abrirDialogo({
        titulo: "Inativar o anúncio “" + kitnet.nome + "”?",
        texto: "O anúncio sai do catálogo, e o dono vê o motivo em “Meus imóveis”.",
        pedirMotivo: true,
        motivoInicial: motivoInicial || "",
        rotuloConfirmar: "Inativar anúncio",
        acao: (motivo) => executar(async () => {
          await moderacaoModerarKitnet(kitnet.id, "inativo", motivo);
          if (idDenuncia) await moderacaoAnalisarDenuncia(idDenuncia, "resolvida");
        }, "Anúncio inativado.")
      });
    }

    function reativarAnuncio(kitnet) {
      abrirDialogo({
        titulo: "Reativar o anúncio “" + kitnet.nome + "”?",
        texto: "O anúncio volta ao catálogo se o cadastro do locador estiver aprovado e a conta dele estiver ativa.",
        rotuloConfirmar: "Reativar anúncio",
        acao: () => executar(() => moderacaoModerarKitnet(kitnet.id, "ativo"), "Anúncio reativado.")
      });
    }

    function analisarDenuncia(denuncia, situacao) {
      const resolver = situacao === "resolvida";
      abrirDialogo({
        titulo: resolver ? "Marcar a denúncia como resolvida?" : "Descartar a denúncia?",
        texto: resolver
          ? "Use quando o problema já foi tratado. O anúncio continua como está."
          : "Use quando a denúncia não procede. O anúncio continua como está.",
        rotuloConfirmar: resolver ? "Marcar como resolvida" : "Descartar",
        acao: () => executar(() => moderacaoAnalisarDenuncia(denuncia.id, situacao), resolver ? "Denúncia resolvida." : "Denúncia descartada.")
      });
    }

    function marcarMensagem(mensagem, situacao) {
      const textos = {
        respondida: ["Marcar a mensagem de " + mensagem.nome + " como respondida?", "Use depois de responder pelo seu e-mail.", "Marcar como respondida", "Mensagem marcada como respondida."],
        arquivada: ["Arquivar a mensagem de " + mensagem.nome + "?", "Ela sai das novas e fica guardada no fim da lista.", "Arquivar", "Mensagem arquivada."]
      }[situacao];
      abrirDialogo({
        titulo: textos[0],
        texto: textos[1],
        rotuloConfirmar: textos[2],
        acao: () => executar(() => moderacaoMarcarMensagem(mensagem.id, situacao), textos[3])
      });
    }

    function excluirMensagem(mensagem) {
      abrirDialogo({
        titulo: "Apagar a mensagem de " + mensagem.nome + "?",
        texto: "Ela some de vez, junto com o nome e o e-mail de quem escreveu. Não dá para desfazer.",
        rotuloConfirmar: "Apagar mensagem",
        acao: () => executar(() => moderacaoExcluirMensagem(mensagem.id), "Mensagem apagada.")
      });
    }

    /* ---------- Renderizacao ---------- */

    function selosConta(c) {
      const selos = [selo(c.tipo === "locador" ? "Locador" : "Locatário", "neutro")];
      if (c.administrador) selos.push(selo("Moderação", "neutro"));
      if (c.aprovacao === "pendente") selos.push(selo("Aguardando aprovação", "aviso"));
      if (c.situacao === "suspensa") selos.push(selo("Suspensa", "erro"));
      return selos;
    }

    function dadosConta(c, kitnets) {
      const quantidade = kitnets.filter((k) => k.locadorId === c.id).length;
      return dados([
        ["E-mail", c.email],
        ["Telefone", c.telefone ? mascararTelefone(c.telefone) : ""],
        ["CPF", c.cpf ? mascararCpf(c.cpf) : ""],
        ["Ocupação", c.ocupacao],
        ["Conta criada em", formatarData(c.criado_em)],
        ["Anúncios", c.tipo === "locador" ? String(quantidade) : ""],
        ["Motivo da suspensão", c.situacao === "suspensa" ? c.motivo_suspensao : ""]
      ]);
    }

    function acoesConta(c) {
      const acoes = [];
      if (c.aprovacao === "pendente" && c.situacao === "ativa") acoes.push(botao("Aprovar cadastro", "secundario", () => aprovarLocador(c)));
      if (c.id !== conta.usuario.id) {
        if (c.situacao === "ativa") acoes.push(botao("Suspender conta", "perigo", () => suspenderConta(c)));
        else acoes.push(botao("Reativar conta", "secundario", () => reativarConta(c)));
      }
      return acoes;
    }

    function renderizarCadastros(contas, kitnets) {
      const pendentes = contas.filter((c) => c.tipo === "locador" && c.aprovacao === "pendente" && c.situacao === "ativa");
      contador("cadastros", pendentes.length);
      preencherLista("cadastros", pendentes.map((c) => cartao(c.nome, selosConta(c), [dadosConta(c, kitnets)], acoesConta(c))));
    }

    function renderizarContas(contas, kitnets) {
      preencherLista("contas", contas.map((c) => cartao(
        c.nome + (c.id === conta.usuario.id ? " (você)" : ""),
        selosConta(c),
        [dadosConta(c, kitnets)],
        acoesConta(c)
      )));
    }

    function renderizarAnuncios(kitnets) {
      preencherLista("anuncios", kitnets.map((k) => {
        const locador = k.locador || {};
        const selos = [selo(k.statusTexto, k.status)];
        if (k.moderacao === "inativo") selos.push(selo("Inativo", "erro"));
        if (locador.aprovacao === "pendente") selos.push(selo("Locador aguardando aprovação", "aviso"));
        if (locador.situacao === "suspensa") selos.push(selo("Locador suspenso", "erro"));
        const acoes = [
          link("Ver anúncio", "imovel.html?id=" + encodeURIComponent(k.id)),
          link("Editar", "anunciar.html?editar=" + encodeURIComponent(k.id)),
          k.moderacao === "inativo"
            ? botao("Reativar anúncio", "secundario", () => reativarAnuncio(k))
            : botao("Inativar anúncio", "perigo", () => inativarAnuncio(k))
        ];
        return cartao(k.nome, selos, [dados([
          ["Bairro", k.bairro],
          ["Preço", formatarPreco(k.preco) + "/mês"],
          ["Locador", locador.nome || ""],
          ["Cadastrado em", formatarData(k.criadoEm)],
          ["Motivo da inativação", k.moderacao === "inativo" ? k.motivoModeracao : ""]
        ])], acoes);
      }));
    }

    function renderizarDenuncias(denuncias) {
      const ordem = { aberta: 0, resolvida: 1, descartada: 2 };
      const lista = denuncias.slice().sort((a, b) => ordem[a.situacao] - ordem[b.situacao]);
      contador("denuncias", denuncias.filter((d) => d.situacao === "aberta").length);
      preencherLista("denuncias", lista.map((d) => {
        const kitnet = d.kitnets || {};
        const selos = [
          d.situacao === "aberta" ? selo("Aberta", "aviso") : d.situacao === "resolvida" ? selo("Resolvida", "ok") : selo("Descartada", "neutro")
        ];
        if (kitnet.moderacao === "inativo") selos.push(selo("Anúncio inativo", "erro"));
        const acoes = [];
        if (d.situacao === "aberta") {
          if (kitnet.id && kitnet.moderacao !== "inativo") {
            acoes.push(botao("Inativar anúncio", "perigo", () => inativarAnuncio(
              { id: kitnet.id, nome: kitnet.nome },
              "Denúncia: " + (MOTIVOS_DENUNCIA[d.motivo] || d.motivo).toLowerCase() + ".",
              d.id
            )));
          }
          acoes.push(botao("Marcar como resolvida", "secundario", () => analisarDenuncia(d, "resolvida")));
          acoes.push(botao("Descartar", "link", () => analisarDenuncia(d, "descartada")));
        }
        return cartao(MOTIVOS_DENUNCIA[d.motivo] || d.motivo, selos, [
          dados([
            ["Anúncio", kitnet.id ? link(kitnet.nome + " (" + kitnet.bairro + ")", "imovel.html?id=" + encodeURIComponent(kitnet.id)) : ""],
            ["Locador", kitnet.perfis ? kitnet.perfis.nome : ""],
            ["Denunciado por", d.autor ? d.autor.nome : ""],
            ["Data", formatarData(d.criado_em)]
          ]),
          el("p", { class: "cartao-moderacao-texto", texto: d.detalhes })
        ], acoes);
      }));
    }

    function renderizarMensagens(mensagens) {
      const ordem = { nova: 0, respondida: 1, arquivada: 2 };
      const lista = mensagens.slice().sort((a, b) => ordem[a.situacao] - ordem[b.situacao]);
      contador("mensagens", mensagens.filter((m) => m.situacao === "nova").length);
      preencherLista("mensagens", lista.map((m) => {
        const selos = [
          m.situacao === "nova" ? selo("Nova", "aviso") : m.situacao === "respondida" ? selo("Respondida", "ok") : selo("Arquivada", "neutro")
        ];
        const acoes = [link("Responder por e-mail", "mailto:" + encodeURIComponent(m.email).replace("%40", "@") + "?subject=" + encodeURIComponent("Sua mensagem para o SGLK"))];
        if (m.situacao === "nova") acoes.push(botao("Marcar como respondida", "secundario", () => marcarMensagem(m, "respondida")));
        if (m.situacao !== "arquivada") acoes.push(botao("Arquivar", "link", () => marcarMensagem(m, "arquivada")));
        acoes.push(botao("Apagar", "perigo", () => excluirMensagem(m)));
        return cartao(m.nome, selos, [
          dados([
            ["E-mail", m.email],
            ["Conta no SGLK", m.autor ? m.autor.nome + (m.autor.tipo === "locador" ? " (locador)" : " (locatário)") : "Enviada sem entrar"],
            ["Recebida em", formatarData(m.criado_em)]
          ]),
          el("p", { class: "cartao-moderacao-texto", texto: m.mensagem })
        ], acoes);
      }));
    }

    async function carregarTudo() {
      avisoErro.hidden = true;
      try {
        const [contas, kitnets, denuncias, mensagens] = await Promise.all([
          moderacaoListarContas(),
          moderacaoListarKitnets(),
          moderacaoListarDenuncias(),
          moderacaoListarMensagens()
        ]);
        renderizarCadastros(contas, kitnets);
        renderizarDenuncias(denuncias);
        renderizarMensagens(mensagens);
        renderizarAnuncios(kitnets);
        renderizarContas(contas, kitnets);
      } catch (erro) {
        avisoErro.querySelector("p").textContent = erro.message + " Se você acabou de virar moderador, saia e entre de novo.";
        avisoErro.hidden = false;
      }
    }

    await carregarTudo();
  }
})();
