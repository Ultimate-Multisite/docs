---
title: Gerenciando e-mails do sistema
sidebar_position: 13
_i18n_hash: 6dc6899342f363987fd7307df698a5bb
---
# Gerenciando Emails do Sistema {#managing-system-emails}

Ultimate Multisite envia vários emails do sistema para eventos como confirmações de cadastro, recibos de pagamento e alterações de membership. Você pode personalizar esses templates de email para combinar com sua marca.

## Visualizando Emails do Sistema {#viewing-system-emails}

Navegue até **Ultimate Multisite → Settings** e clique na aba **Emails** para ver as configurações relacionadas a email.

![Aba Settings - Emails](/img/admin/settings-emails.png)

A partir daí, você pode acessar a página **System Emails** para ver todos os templates de email.

![Lista de System Emails](/img/admin/system-emails-list.png)

Você também pode editar templates de email individuais usando o editor de emails do sistema:

![Editor de email do sistema](/img/admin/system-email-editor.png)

## Importando Novos Templates de Email {#importing-new-email-templates}

Novas versões e add-ons do Ultimate Multisite podem registrar novos templates de email. Para evitar conflitos, novos templates não são adicionados automaticamente — você precisa importá-los manualmente.

Para importar novos templates de email:

1. Vá para a página **System Emails**
2. Clique no botão **Reset & Import** no topo da página
3. Ative a opção **Import Emails** para ver os templates disponíveis
4. Selecione os templates que deseja importar e confirme

## Redefinindo Templates de Email {#resetting-email-templates}

Se você personalizou um template de email e quer reverter para o conteúdo padrão, há duas opções:

1. **Excluir e reimportar** — Exclua o email do sistema e importe-o novamente (isso apaga as métricas de envio)
2. **Redefinir pela ferramenta** — Use a ferramenta **Reset & Import**, ative a opção **Reset** e selecione os emails que deseja redefinir

A opção Reset é preferida, pois preserva métricas de envio e outros metadados enquanto restaura o conteúdo padrão.
