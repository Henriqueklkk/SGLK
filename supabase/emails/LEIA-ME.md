# Modelos de e-mail do SGLK

E-mails que o Supabase envia pelo SMTP da Brevo (remetente `nao-responda@sglk.site`). Cada arquivo `.html` desta pasta é colado no painel do Supabase; o site não usa esses arquivos.

Onde colar: **Authentication → Emails**, aba **Templates**. Em cada modelo, trocar o **Subject** pelo assunto abaixo, colar o conteúdo inteiro do arquivo no **Body** (aba "Source") e salvar.

| Modelo no painel | Arquivo | Assunto |
|---|---|---|
| Confirm sign up | `confirmar-cadastro.html` | Confirme seu e-mail no SGLK |
| Reset password | `redefinir-senha.html` | Redefina sua senha do SGLK |
| Password changed (seção "Security notifications"; precisa ser ligado) | `senha-alterada.html` | Sua senha do SGLK foi alterada |

No "Password changed", a chave **Enable notification** (quadro "Configuration", no alto da página do modelo) tem um botão **Save changes** só dela; sem clicar nele, a chave volta a ficar desligada.

Copiar o conteúdo direto do arquivo (abrir no Bloco de Notas, Ctrl+A, Ctrl+C), nunca um comando que copia o arquivo: o painel salva qualquer texto que for colado.

Os outros modelos (Invite user, Magic link, Change email address, Reauthentication e as demais notificações) não são usados pelo site e ficam como estão.

## Variáveis usadas

Preenchidas pelo Supabase na hora do envio; não trocar.

- `{{ .ConfirmationURL }}`: link de confirmação ou de recuperação. Volta para `entrar.html?confirmado=1` (cadastro) ou `entrar.html?modo=nova-senha` (senha nova), que precisam casar com as Redirect URLs de Authentication → URL Configuration.
- `{{ .Email }}`: e-mail da conta.
- `{{ .SiteURL }}`: Site URL do projeto (`https://www.sglk.site`). Usado no aviso de senha alterada, que leva a `entrar.html?modo=recuperar`.

## Visual

Segue o `specs/design.md`: fundo `#F2F1EF`, cartão branco com raio de 24px e faixa sálvia `#648B81` no topo, título `#0B2841` peso 800, botão `#0C3E66` com raio de 12px e texto branco (11,07:1), textos de apoio `#4F5D6B` com 14px. Layout em tabelas e estilos embutidos, que é o que os programas de e-mail entendem; abaixo de 480px o botão ocupa a largura toda.

O logo vem de `https://www.sglk.site/img/sglk-logo-horizontal.png`. Se esse arquivo mudar de nome ou de endereço, o logo some dos e-mails.
