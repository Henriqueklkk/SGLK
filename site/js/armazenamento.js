/*
  armazenamento.js - Acesso aos dados do SGLK no Supabase: contas, anuncios,
  fotos, WhatsApp, denuncias e moderacao. As 3 kitnets de demonstracao
  (js/dados-demo.js) continuam fora do banco e sao somadas aqui.

  As regras de quem pode ver ou mudar cada coisa ficam no banco (RLS, em
  supabase/*.sql), nao aqui: estas funcoes so fazem os pedidos e traduzem
  os erros para mensagens em portugues.

  Funcoes assincronas: devolvem Promise. Em caso de erro, lancam um Error
  cuja mensagem ja pode ser mostrada na tela.
*/

/* ============================= LIMPEZA DO SISTEMA ANTIGO ============================= */

// Antes do Supabase, o cadastro de kitnets e o login eram simulados no
// localStorage. Essas chaves nao sao mais usadas.
(function limparDadosAntigosDoNavegador() {
  try {
    ["sglk_kitnets_usuario_v1", "sglk_sessao_v1"].forEach((chave) => localStorage.removeItem(chave));
  } catch (e) {}
})();

/* ============================= ERROS ============================= */

function erroComMensagem(mensagem, original) {
  const erro = new Error(mensagem);
  if (original) erro.original = original;
  return erro;
}

function semConexao(erro) {
  const texto = String((erro && (erro.message || erro.details)) || "");
  return (erro && erro.name === "AuthRetryableFetchError") || /Failed to fetch|NetworkError|Load failed/i.test(texto);
}

function traduzirErroDados(erro, mensagemPadrao) {
  if (!erro) return erroComMensagem(mensagemPadrao);
  console.warn("SGLK:", erro);
  if (semConexao(erro)) return erroComMensagem("Sem conexão com o servidor. Confira sua internet e tente de novo.", erro);
  const texto = String(erro.message || "");
  if (erro.code === "42501" || /row-level security|permission denied|so a moderacao/i.test(texto)) {
    return erroComMensagem("Você não tem permissão para fazer isso.", erro);
  }
  if (erro.code === "23505") return erroComMensagem("Esse registro já existe.", erro);
  if (erro.code === "23514") return erroComMensagem("Algum dado está fora do formato aceito. Confira os campos e tente de novo.", erro);
  return erroComMensagem(mensagemPadrao, erro);
}

function traduzirErroConta(erro) {
  console.warn("SGLK:", erro);
  if (semConexao(erro)) return "Sem conexão com o servidor. Confira sua internet e tente de novo.";
  const codigo = erro.code || "";
  const texto = String(erro.message || "");
  if (codigo === "invalid_credentials" || /Invalid login credentials/i.test(texto)) return "E-mail ou senha incorretos.";
  if (codigo === "email_not_confirmed" || /Email not confirmed/i.test(texto)) return "Confirme seu e-mail pelo link que enviamos antes de entrar.";
  if (codigo === "user_already_exists" || /already registered/i.test(texto)) return "E-mail já cadastrado. Deseja fazer login?";
  if (codigo === "weak_password" || /password/i.test(texto) && /weak|short|characters/i.test(texto)) {
    return "Senha fraca. Use pelo menos 8 caracteres, misturando letras e números.";
  }
  if (erro.status === 429 || /rate limit/i.test(texto)) return "Muitas tentativas em pouco tempo. Espere alguns minutos e tente de novo.";
  if (codigo === "email_address_not_authorized" || /not authorized/i.test(texto)) {
    return "O envio de e-mails do SGLK ainda está em configuração e este endereço ainda não recebe a confirmação. Tente de novo mais tarde.";
  }
  if (codigo === "email_address_invalid" || /invalid.*email|email.*invalid/i.test(texto)) return "Confira o e-mail digitado.";
  if (codigo === "same_password" || /different from the old/i.test(texto)) return "A senha nova precisa ser diferente da senha atual.";
  if (codigo === "session_not_found" || erro.name === "AuthSessionMissingError") {
    return "O link de recuperação expirou ou já foi usado. Peça um novo.";
  }
  if (/Database error saving new user/i.test(texto) || codigo === "unexpected_failure") {
    return "Não foi possível criar a conta. Confira os dados. Se este CPF já foi usado em outra conta, entre com ela.";
  }
  return "Não foi possível concluir agora. Tente de novo em instantes.";
}

function exigirCliente() {
  if (!clienteSupabase) throw erroComMensagem("Não foi possível conectar ao SGLK agora. Recarregue a página.");
  return clienteSupabase;
}

/* ============================= KITNETS: FORMATO USADO NO SITE ============================= */

const TEXTO_STATUS = { disponivel: "Disponível", alugado: "Alugado" };
const CAMPOS_KITNET = "id, locador_id, nome, descricao, bairro, preco, area, quartos, banheiros, comodidades, status, criado_em";
const CAMPOS_FOTOS = "kitnet_fotos(id, caminho, texto_alternativo, ordem)";

function urlPublicaFoto(caminho) {
  return clienteSupabase.storage.from(BUCKET_FOTOS).getPublicUrl(caminho).data.publicUrl;
}

// Converte uma linha do banco no mesmo objeto que as kitnets de
// demonstracao usam (dados-demo.js), para os cards e paginas servirem aos dois.
function mapearKitnet(linha) {
  const fotos = (linha.kitnet_fotos || [])
    .slice()
    .sort((a, b) => a.ordem - b.ordem)
    .map((f) => ({ id: f.id, caminho: f.caminho, src: urlPublicaFoto(f.caminho), alt: f.texto_alternativo }));
  return {
    id: linha.id,
    origem: "usuario",
    locadorId: linha.locador_id,
    nome: linha.nome,
    bairro: linha.bairro,
    preco: linha.preco,
    area: linha.area,
    quartos: linha.quartos,
    banheiros: linha.banheiros,
    comodidades: linha.comodidades || [],
    status: linha.status,
    statusTexto: TEXTO_STATUS[linha.status] || linha.status,
    descricao: linha.descricao,
    moderacao: linha.moderacao || "ativo",
    motivoModeracao: linha.motivo_moderacao || null,
    criadoEm: linha.criado_em,
    locador: linha.perfis || null,
    fotos: fotos,
    capa: fotos.length ? fotos[0].src : null,
    capaAlt: fotos.length ? "Foto do anúncio " + linha.nome + "." : "",
    galeria: fotos.map((f) => ({ src: f.src, alt: f.alt })),
    mensagemWhatsapp: "Olá! Vi a " + linha.nome + " no " + linha.bairro + " pelo SGLK e gostaria de mais informações."
  };
}

// Decisao de 2026-09-29: kitnets alugadas continuam na busca, mas sempre
// depois das disponiveis. O sort() e estavel, entao cada grupo mantem a
// ordem original (demonstracao primeiro, depois as cadastradas mais novas).
function ordenarDisponiveisPrimeiro(lista) {
  return lista.slice().sort((a, b) => (a.status === "alugado") - (b.status === "alugado"));
}

function kitnetsDemonstracao() {
  return typeof KITNETS_DEMO !== "undefined" ? KITNETS_DEMO.slice() : [];
}

function obterBairros(lista) {
  return [...new Set(lista.map((k) => k.bairro).filter(Boolean))].sort((a, b) => a.localeCompare(b, "pt-BR"));
}

function pareceIdDoBanco(id) {
  return /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(String(id || ""));
}

/* ============================= CATALOGO PUBLICO ============================= */

// Catalogo da Home e de Imoveis: as 3 de demonstracao mais os anuncios
// publicos do banco (vista kitnets_publicas: anuncio ativo de locador
// aprovado e com conta ativa). Se o banco falhar, devolve so a demonstracao
// e o erro, para a pagina avisar sem quebrar.
async function listarCatalogo() {
  const demo = kitnetsDemonstracao();
  if (!clienteSupabase) return { kitnets: ordenarDisponiveisPrimeiro(demo), erro: erroComMensagem("sem cliente") };
  const { data, error } = await clienteSupabase
    .from("kitnets_publicas")
    .select(CAMPOS_KITNET + ", " + CAMPOS_FOTOS)
    .order("criado_em", { ascending: false });
  if (error) {
    console.warn("SGLK: catalogo do banco indisponivel.", error);
    return { kitnets: ordenarDisponiveisPrimeiro(demo), erro: error };
  }
  return { kitnets: ordenarDisponiveisPrimeiro([...demo, ...data.map(mapearKitnet)]), erro: null };
}

// Uma kitnet pelo id: da demonstracao ou do banco. No banco, o RLS so
// devolve o anuncio publico, ou tambem o proprio (para o dono) e qualquer
// um (para a moderacao); "publica" diz se ele aparece para todo mundo.
async function buscarKitnet(id) {
  const demo = kitnetsDemonstracao().find((k) => k.id === id);
  if (demo) return Object.assign({ publica: true }, demo);
  if (!pareceIdDoBanco(id)) return null;
  const cliente = exigirCliente();
  const { data, error } = await cliente
    .from("kitnets")
    .select(CAMPOS_KITNET + ", moderacao, motivo_moderacao, " + CAMPOS_FOTOS)
    .eq("id", id)
    .maybeSingle();
  if (error) throw traduzirErroDados(error, "Não foi possível carregar este anúncio agora.");
  if (!data) return null;
  const kitnet = mapearKitnet(data);
  const publica = await cliente.from("kitnets_publicas").select("id").eq("id", id).maybeSingle();
  kitnet.publica = !publica.error && !!publica.data;
  return kitnet;
}

// WhatsApp do anuncio: so volta para quem tem conta ativa (RLS).
async function buscarWhatsappKitnet(id) {
  const { data, error } = await exigirCliente()
    .from("kitnets_contato")
    .select("whatsapp")
    .eq("kitnet_id", id)
    .maybeSingle();
  if (error) throw traduzirErroDados(error, "Não foi possível carregar o contato agora.");
  return data ? data.whatsapp : null;
}

/* ============================= CONTA ============================= */

let promessaConta = null;

// { usuario, perfil, ehAdmin } de quem esta conectado, ou null. Fica em
// cache durante a visita a pagina; forcar = true busca de novo.
function obterContaAtual(forcar) {
  if (!clienteSupabase) return Promise.resolve(null);
  if (!promessaConta || forcar) promessaConta = carregarConta();
  return promessaConta;
}

async function carregarConta() {
  const { data, error } = await clienteSupabase.auth.getSession();
  if (error || !data.session) return null;
  const usuario = data.session.user;
  const resposta = await clienteSupabase
    .from("perfis")
    .select("id, tipo, nome, telefone, ocupacao, situacao, motivo_suspensao, aprovacao")
    .eq("id", usuario.id)
    .maybeSingle();
  if (resposta.error) console.warn("SGLK: perfil indisponivel.", resposta.error);
  return {
    usuario: usuario,
    perfil: resposta.data || null,
    // Vem de app_metadata, que so o banco altera (ver supabase/moderacao.sql).
    ehAdmin: !!(usuario.app_metadata && usuario.app_metadata.papel === "admin")
  };
}

// dados: { tipo, nome, email, cpf, telefone, ocupacao, senha }
async function cadastrarConta(dados) {
  const { data, error } = await exigirCliente().auth.signUp({
    email: dados.email,
    password: dados.senha,
    options: {
      emailRedirectTo: new URL("entrar.html?confirmado=1", window.location.href).href,
      // O banco grava tipo, nome, ocupacao e telefone no perfil e o CPF numa
      // area protegida, e tira CPF e telefone destes metadados
      // (gatilho sglk_criar_perfil em auth.users).
      data: { tipo: dados.tipo, nome: dados.nome, cpf: dados.cpf, telefone: dados.telefone, ocupacao: dados.ocupacao || "" }
    }
  });
  if (error) {
    const mensagem = traduzirErroConta(error);
    return { ok: false, mensagem: mensagem, emailJaCadastrado: /já cadastrado/.test(mensagem) };
  }
  // Com a confirmacao de e-mail ligada, o Supabase nao conta que o e-mail
  // ja existe: devolve um usuario sem identidades.
  if (data.user && Array.isArray(data.user.identities) && data.user.identities.length === 0) {
    return { ok: false, mensagem: "E-mail já cadastrado. Deseja fazer login?", emailJaCadastrado: true };
  }
  promessaConta = null;
  return { ok: true, precisaConfirmar: !data.session };
}

async function entrarNaConta(email, senha) {
  const { error } = await exigirCliente().auth.signInWithPassword({ email: email, password: senha });
  if (error) return { ok: false, mensagem: traduzirErroConta(error) };
  promessaConta = null;
  return { ok: true };
}

// "Esqueci minha senha": o Supabase manda o e-mail de recuperação. Por
// seguranca ele responde do mesmo jeito exista ou nao uma conta com esse
// e-mail, entao a pagina tambem nao diz se a conta existe.
async function pedirLinkRecuperacao(email) {
  const { error } = await exigirCliente().auth.resetPasswordForEmail(email, {
    redirectTo: new URL("entrar.html?modo=nova-senha", window.location.href).href
  });
  if (error) return { ok: false, mensagem: traduzirErroConta(error) };
  return { ok: true };
}

// Grava a senha nova. Funciona na sessao aberta pelo link de recuperacao.
async function definirNovaSenha(senha) {
  const { error } = await exigirCliente().auth.updateUser({ password: senha });
  if (error) return { ok: false, mensagem: traduzirErroConta(error) };
  promessaConta = null;
  return { ok: true };
}

async function sairDaConta() {
  if (clienteSupabase) await clienteSupabase.auth.signOut({ scope: "local" });
  promessaConta = null;
}

/* ============================= MEUS ANUNCIOS ============================= */

async function listarMinhasKitnets(idUsuario) {
  const { data, error } = await exigirCliente()
    .from("kitnets")
    .select(CAMPOS_KITNET + ", moderacao, motivo_moderacao, " + CAMPOS_FOTOS)
    .eq("locador_id", idUsuario)
    .order("criado_em", { ascending: false });
  if (error) throw traduzirErroDados(error, "Não foi possível carregar seus imóveis agora.");
  return data.map(mapearKitnet);
}

// Kitnet + WhatsApp, para preencher o formulario de edicao.
async function buscarKitnetParaEdicao(id) {
  const kitnet = await buscarKitnet(id);
  if (!kitnet || kitnet.origem !== "usuario") return null;
  kitnet.whatsapp = await buscarWhatsappKitnet(id);
  return kitnet;
}

async function enviarFoto(idUsuario, idKitnet, blob) {
  const id = (window.crypto && crypto.randomUUID) ? crypto.randomUUID() : Date.now().toString(36) + Math.random().toString(36).slice(2);
  const caminho = idUsuario + "/" + idKitnet + "/" + id + ".jpg";
  const { error } = await clienteSupabase.storage.from(BUCKET_FOTOS).upload(caminho, blob, {
    contentType: "image/jpeg",
    cacheControl: "31536000",
    upsert: false
  });
  if (error) throw traduzirErroDados(error, "Não foi possível enviar uma das fotos.");
  return caminho;
}

async function apagarArquivosDeFotos(caminhos) {
  if (!caminhos.length) return;
  const { error } = await clienteSupabase.storage.from(BUCKET_FOTOS).remove(caminhos);
  if (error) console.warn("SGLK: fotos que ficaram no Storage sem anuncio:", caminhos, error);
}

// Cadastra (sem id) ou atualiza (com id) um anuncio.
//   dados: { nome, descricao, bairro, preco, area, quartos, banheiros, comodidades, status }
//   whatsapp: so digitos, com 55
//   fotosNovas: [Blob] (JPEG ja comprimido); fotosRemovidas: [{ id, caminho }]
//   idsFotosMantidas: ids das fotos que ficam, na ordem da tela (so na edicao)
// Devolve o id do anuncio.
async function salvarKitnet({ id, idUsuario, dados, whatsapp, fotosNovas, fotosRemovidas, idsFotosMantidas }) {
  const cliente = exigirCliente();

  if (!id) {
    const inserido = await cliente.from("kitnets").insert(dados).select("id").single();
    if (inserido.error) throw traduzirErroDados(inserido.error, "Não foi possível cadastrar o imóvel agora.");
    const novoId = inserido.data.id;
    const enviados = [];
    try {
      for (const blob of fotosNovas) enviados.push(await enviarFoto(idUsuario, novoId, blob));
      const linhasFotos = enviados.map((caminho, indice) => ({ kitnet_id: novoId, caminho: caminho, ordem: indice, texto_alternativo: "Foto do anúncio " + dados.nome + "." }));
      const fotos = await cliente.from("kitnet_fotos").insert(linhasFotos);
      if (fotos.error) throw traduzirErroDados(fotos.error, "Não foi possível registrar as fotos.");
      const contato = await cliente.from("kitnets_contato").insert({ kitnet_id: novoId, whatsapp: whatsapp });
      if (contato.error) throw traduzirErroDados(contato.error, "Não foi possível salvar o WhatsApp.");
    } catch (erro) {
      // Nao deixa anuncio pela metade: apaga o que foi criado.
      await apagarArquivosDeFotos(enviados);
      await cliente.from("kitnets").delete().eq("id", novoId);
      throw erro;
    }
    return novoId;
  }

  const atualizado = await cliente.from("kitnets").update(dados).eq("id", id).select("id");
  if (atualizado.error) throw traduzirErroDados(atualizado.error, "Não foi possível salvar as alterações agora.");
  if (!atualizado.data.length) throw erroComMensagem("Você não tem permissão para editar este anúncio.");

  const contato = await cliente.from("kitnets_contato").update({ whatsapp: whatsapp }).eq("kitnet_id", id).select("kitnet_id");
  if (contato.error) throw traduzirErroDados(contato.error, "Não foi possível salvar o WhatsApp.");
  if (!contato.data.length) {
    const novoContato = await cliente.from("kitnets_contato").insert({ kitnet_id: id, whatsapp: whatsapp });
    if (novoContato.error) throw traduzirErroDados(novoContato.error, "Não foi possível salvar o WhatsApp.");
  }

  if (fotosRemovidas.length) {
    const removidas = await cliente.from("kitnet_fotos").delete().in("id", fotosRemovidas.map((f) => f.id));
    if (removidas.error) throw traduzirErroDados(removidas.error, "Não foi possível remover as fotos.");
    await apagarArquivosDeFotos(fotosRemovidas.map((f) => f.caminho));
  }

  // Renumera as fotos que ficaram (0, 1, 2...) para a ordem nunca passar do
  // limite do banco depois de varias edicoes.
  const mantidas = idsFotosMantidas || [];
  for (let indice = 0; indice < mantidas.length; indice++) {
    const ordem = await cliente.from("kitnet_fotos").update({ ordem: indice }).eq("id", mantidas[indice]);
    if (ordem.error) throw traduzirErroDados(ordem.error, "Não foi possível reorganizar as fotos.");
  }

  if (fotosNovas.length) {
    const enviados = [];
    for (const blob of fotosNovas) enviados.push(await enviarFoto(idUsuario, id, blob));
    const linhasFotos = enviados.map((caminho, indice) => ({ kitnet_id: id, caminho: caminho, ordem: mantidas.length + indice, texto_alternativo: "Foto do anúncio " + dados.nome + "." }));
    const fotos = await cliente.from("kitnet_fotos").insert(linhasFotos);
    if (fotos.error) {
      await apagarArquivosDeFotos(enviados);
      throw traduzirErroDados(fotos.error, "Não foi possível registrar as fotos novas.");
    }
  }
  return id;
}

async function alterarStatusKitnet(id, status) {
  const { data, error } = await exigirCliente().from("kitnets").update({ status: status }).eq("id", id).select("id");
  if (error) throw traduzirErroDados(error, "Não foi possível mudar o status agora.");
  if (!data.length) throw erroComMensagem("Você não tem permissão para mudar este anúncio.");
}

async function excluirKitnet(kitnet) {
  const { data, error } = await exigirCliente().from("kitnets").delete().eq("id", kitnet.id).select("id");
  if (error) throw traduzirErroDados(error, "Não foi possível excluir o anúncio agora.");
  if (!data.length) throw erroComMensagem("Você não tem permissão para excluir este anúncio.");
  await apagarArquivosDeFotos((kitnet.fotos || []).map((f) => f.caminho));
}

/* ============================= DENUNCIAS ============================= */

const MOTIVOS_DENUNCIA = {
  golpe: "Golpe ou tentativa de fraude",
  informacoes_falsas: "Informações falsas no anúncio",
  fotos_falsas: "Fotos que não são deste imóvel",
  outro: "Outro motivo"
};

async function temDenunciaAberta(idKitnet) {
  const { data, error } = await exigirCliente()
    .from("denuncias")
    .select("id")
    .eq("kitnet_id", idKitnet)
    .eq("situacao", "aberta")
    .limit(1);
  if (error) return false;
  return data.length > 0;
}

async function enviarDenuncia(idKitnet, motivo, detalhes) {
  const { error } = await exigirCliente().from("denuncias").insert({ kitnet_id: idKitnet, motivo: motivo, detalhes: detalhes });
  if (error && error.code === "23505") throw erroComMensagem("Você já denunciou este anúncio. A moderação está analisando.");
  if (error) throw traduzirErroDados(error, "Não foi possível enviar a denúncia agora.");
}

/* ============================= MODERACAO (so administradores) ============================= */

async function moderacaoListarContas() {
  const { data, error } = await exigirCliente().rpc("moderacao_listar_contas");
  if (error) throw traduzirErroDados(error, "Não foi possível carregar as contas.");
  return data;
}

// campos: { aprovacao } ou { situacao, motivo_suspensao }
async function moderacaoAtualizarConta(id, campos) {
  const { data, error } = await exigirCliente().from("perfis").update(campos).eq("id", id).select("id");
  if (error) throw traduzirErroDados(error, "Não foi possível atualizar a conta.");
  if (!data.length) throw erroComMensagem("Você não tem permissão para atualizar esta conta.");
}

async function moderacaoListarKitnets() {
  const { data, error } = await exigirCliente()
    .from("kitnets")
    .select(CAMPOS_KITNET + ", moderacao, motivo_moderacao, perfis(nome, aprovacao, situacao), " + CAMPOS_FOTOS)
    .order("criado_em", { ascending: false });
  if (error) throw traduzirErroDados(error, "Não foi possível carregar os anúncios.");
  return data.map(mapearKitnet);
}

async function moderacaoModerarKitnet(id, moderacao, motivo) {
  const campos = moderacao === "inativo" ? { moderacao: "inativo", motivo_moderacao: motivo } : { moderacao: "ativo" };
  const { data, error } = await exigirCliente().from("kitnets").update(campos).eq("id", id).select("id");
  if (error) throw traduzirErroDados(error, "Não foi possível atualizar o anúncio.");
  if (!data.length) throw erroComMensagem("Você não tem permissão para moderar este anúncio.");
}

async function moderacaoListarDenuncias() {
  const { data, error } = await exigirCliente()
    .from("denuncias")
    .select("id, motivo, detalhes, situacao, criado_em, analisada_em, kitnet_id, kitnets(id, nome, bairro, moderacao, perfis(nome)), autor:perfis!denuncias_autor_id_fkey(nome)")
    .order("criado_em", { ascending: false });
  if (error) throw traduzirErroDados(error, "Não foi possível carregar as denúncias.");
  return data;
}

async function moderacaoAnalisarDenuncia(id, situacao) {
  const { data, error } = await exigirCliente().from("denuncias").update({ situacao: situacao }).eq("id", id).select("id");
  if (error) throw traduzirErroDados(error, "Não foi possível atualizar a denúncia.");
  if (!data.length) throw erroComMensagem("Você não tem permissão para analisar denúncias.");
}
