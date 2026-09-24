/*
  armazenamento.js - Persistencia provisoria dos imoveis cadastrados pelo usuario.

  O SGLK ainda nao tem um banco de dados real (isso e um passo futuro do
  projeto). Enquanto isso, os imoveis que o proprio locador cadastra ficam
  guardados no localStorage do navegador que fez o cadastro.

  Isso e real e funcional (o imovel aparece no catalogo, pode ter o status
  alterado e pode ser excluido de verdade), mas tem uma limitacao honesta:
  os dados vivem so nesse navegador/aparelho - nao sao visiveis para outras
  pessoas nem sincronizam entre dispositivos ate existir um banco de dados
  de verdade por tras do site.
*/

const CHAVE_ARMAZENAMENTO = "sglk_kitnets_usuario_v1";

function gerarIdKitnet() {
  try {
    return "user-" + crypto.randomUUID();
  } catch (e) {
    return "user-" + Date.now().toString(36) + "-" + Math.random().toString(36).slice(2, 10);
  }
}

function armazenamentoDisponivel() {
  try {
    const chaveTeste = "__sglk_teste__";
    localStorage.setItem(chaveTeste, "1");
    localStorage.removeItem(chaveTeste);
    return true;
  } catch (e) {
    return false;
  }
}

function obterKitnetsUsuario() {
  try {
    const bruto = localStorage.getItem(CHAVE_ARMAZENAMENTO);
    if (!bruto) return [];
    const lista = JSON.parse(bruto);
    return Array.isArray(lista) ? lista : [];
  } catch (e) {
    console.warn("Não foi possível ler os imóveis salvos neste navegador.", e);
    return [];
  }
}

function salvarListaKitnetsUsuario(lista) {
  localStorage.setItem(CHAVE_ARMAZENAMENTO, JSON.stringify(lista));
}

// Retorna {ok:true} ou {ok:false, motivo:"..."} - nunca lanca excecao,
// para o formulario poder mostrar um erro compreensível em vez de quebrar.
function salvarKitnetUsuario(kitnet) {
  try {
    const lista = obterKitnetsUsuario();
    lista.unshift(kitnet);
    salvarListaKitnetsUsuario(lista);
    return { ok: true };
  } catch (e) {
    const semEspaco = e && (e.name === "QuotaExceededError" || e.code === 22);
    return {
      ok: false,
      motivo: semEspaco
        ? "As fotos são muito pesadas para o espaço de armazenamento deste navegador. Tente enviar menos fotos ou fotos menores."
        : "Não foi possível salvar este imóvel neste navegador."
    };
  }
}

function atualizarStatusKitnetUsuario(id, novoStatus) {
  const lista = obterKitnetsUsuario();
  const kitnet = lista.find((k) => k.id === id);
  if (!kitnet) return false;
  kitnet.status = novoStatus;
  kitnet.statusTexto = novoStatus === "disponivel" ? "Disponível" : "Alugado";
  salvarListaKitnetsUsuario(lista);
  return true;
}

function removerKitnetUsuario(id) {
  const lista = obterKitnetsUsuario().filter((k) => k.id !== id);
  salvarListaKitnetsUsuario(lista);
}

// Fonte unica de todos os imoveis do site: as 3 kitnets ilustrativas (geradas
// por IA, ver dados-demo.js) mais as que o usuario cadastrou de verdade.
function obterTodasKitnets() {
  const demo = typeof KITNETS_DEMO !== "undefined" ? KITNETS_DEMO : [];
  return [...demo, ...obterKitnetsUsuario()];
}

function obterKitnetPorId(id) {
  return obterTodasKitnets().find((k) => k.id === id) || null;
}

function obterBairrosDisponiveis() {
  return [...new Set(obterTodasKitnets().map((k) => k.bairro).filter(Boolean))].sort((a, b) => a.localeCompare(b, "pt-BR"));
}

/*
  Sessao simulada (login). O SGLK ainda nao tem backend nem contas de
  verdade (ver a pagina entrar.html e js/site.js) - isso guarda so o TIPO de
  conta escolhido (locador ou locatario), nunca nome, e-mail, CPF ou senha.
  Serve so para simular as duas travas do site: anunciar uma kitnet exige
  entrar como locador, e falar no WhatsApp exige entrar como locatario. Nao
  e autenticacao de verdade - qualquer pessoa "entra" preenchendo qualquer
  CPF valido, porque nao ha nada real para conferir do outro lado.
*/
const CHAVE_SESSAO = "sglk_sessao_v1";

function obterSessao() {
  try {
    const bruto = localStorage.getItem(CHAVE_SESSAO);
    if (!bruto) return null;
    const sessao = JSON.parse(bruto);
    if (sessao && (sessao.tipo === "locador" || sessao.tipo === "locatario")) return sessao;
    return null;
  } catch (e) {
    return null;
  }
}

function definirSessao(tipo) {
  if (tipo !== "locador" && tipo !== "locatario") return false;
  try {
    localStorage.setItem(CHAVE_SESSAO, JSON.stringify({ tipo: tipo }));
    return true;
  } catch (e) {
    return false;
  }
}

function encerrarSessao() {
  try { localStorage.removeItem(CHAVE_SESSAO); } catch (e) {}
}
