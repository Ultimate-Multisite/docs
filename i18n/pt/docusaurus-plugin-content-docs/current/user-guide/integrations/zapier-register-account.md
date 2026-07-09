---
title: Registrar uma Conta via Zapier
sidebar_position: 1
_i18n_hash: f452b2407a1eee1d88505abe1cff8f9e
---
# Evento: Registrar uma conta via Zapier {#event-register-an-account-via-zapier}

No artigo [Integrando Ultimate Multisite com Zapier](zapier.md), discutimos como usar o Zapier para realizar diferentes ações dentro do Ultimate Multisite com base em gatilhos e eventos. Neste artigo, mostraremos como você pode integrar aplicativos de terceiros. Usaremos o Google Sheets como fonte de dados e enviaremos as informações para o Ultimate Multisite registrar uma conta.

Antes de conectar o Zapier, vá para **Ultimate Multisite > Settings > API & Webhooks** e confirme se a API está habilitada. Copie a Chave da API (API Key) e o Segredo da API (API Secret) nesta tela quando o Zapier solicitar as credenciais da conta do Ultimate Multisite.

![Configurações de API e Webhooks com Chave da API, Segredo da API e Opções de Habilitar API](/img/admin/settings-api-webhooks.png)

Primeiro, você precisa criar uma **Google Sheet** no seu Google Drive. Certifique-se de definir corretamente cada coluna para que você possa mapear os dados facilmente mais tarde.

Depois de criar a planilha do Google Sheets, você pode fazer login na sua conta do Zapier e começar a criar um zap.

No campo de busca para **"App event"** (Evento do Aplicativo), selecione **"Google Sheets"**.

Em seguida, no campo "**Event**" (Evento), selecione "**New spreadsheet row**" (Nova linha da planilha) e clique em "**Continue**" (Continuar).

O próximo passo pedirá para você selecionar uma **Conta Google** onde a **Google Sheet** está salva. Então, apenas certifique-se de que a conta Google correta esteja especificada.

Em "**Set up trigger**" (Configurar gatilho), você precisará selecionar e especificar a planilha do Google Sheets e a aba (worksheet) que usará como fonte dos dados. Basta preencher esses campos e clicar em "**Continue**".

Em seguida, é para "**test your trigger**" (testar seu gatilho) para garantir que sua Google Sheet esteja conectada corretamente.

Se o seu teste for bem-sucedido, você deverá ver o resultado mostrando alguns valores das suas planilhas. Clique em "**Continue**" (Continuar) para prosseguir.

O próximo passo é configurar a segunda ação que criará ou registrará uma conta no Ultimate Multisite. No campo de busca, selecione "**Ultimate Multisite(2.0.2)** ".

No campo "**Event**", selecione "**Register an Account in Ultimate Multisite**" e clique no botão "**Continue**".

No campo "**Set up an action**", você verá diferentes campos disponíveis para dados do cliente, membros, produtos, etc. Você pode mapear os valores na sua planilha do Google e atribuí-los ao campo correto onde eles devem ser preenchidos, como mostrado na captura de tela abaixo.

Após mapear os valores, você poderá testar a ação.
