/*
  supabase-config.js - Conexao do site com o Supabase (banco de dados e contas).

  A biblioteca fica no proprio site (js/vendor/supabase.js, supabase-js
  2.117.2, licenca MIT em js/vendor/supabase-js-LICENSE.txt), copiada de
  node_modules/@supabase/supabase-js/dist/umd/ - sem build e sem CDN.

  A URL do projeto e a chave publicavel foram feitas para ficar no
  navegador. Quem protege os dados sao as regras de acesso (RLS) do banco,
  versionadas em supabase/*.sql. Nunca colocar aqui a chave secreta
  (service_role).
*/

const SUPABASE_URL = "https://vqqgbbnxomqkqytgcbsb.supabase.co";
const SUPABASE_CHAVE_PUBLICAVEL = "sb_publishable_n8UgGXWgmsxJLVs6jHEYtQ_qXg02sjR";
const BUCKET_FOTOS = "fotos-kitnets";

// Chave em que a biblioteca guarda a sessao no localStorage. O script
// embutido de anunciar.html le so a existencia dela, para redirecionar
// quem nao entrou antes de a pagina aparecer.
const CHAVE_SESSAO_SUPABASE = "sb-vqqgbbnxomqkqytgcbsb-auth-token";

const clienteSupabase = (window.supabase && typeof window.supabase.createClient === "function")
  ? window.supabase.createClient(SUPABASE_URL, SUPABASE_CHAVE_PUBLICAVEL, {
      auth: { persistSession: true, autoRefreshToken: true, detectSessionInUrl: true }
    })
  : null;

if (!clienteSupabase) {
  console.error("SGLK: a biblioteca do Supabase nao carregou; o site mostra so as kitnets de demonstracao.");
}
