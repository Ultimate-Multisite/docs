---
title: Webhooks
sidebar_position: 15
_i18n_hash: f8456622538d07af8f5aa36c1ec19249
---
# Uma Visão Geral dos Webhooks (v2) {#a-first-look-on-webhooks-v2}

_**ATENÇÃO: Observe que este recurso ou artigo é para usuários avançados.**_

Um **webhook** é uma maneira de um aplicativo ou software como o Ultimate Multisite fornecer informações em tempo real para outros aplicativos. Um webhook envia dados ou payloads para outros aplicativos assim que eles acontecem, o que significa que você **recebe os dados imediatamente**.

Isso é útil se você precisar integrar ou passar certos dados do Ultimate Multisite para outro CRM ou sistema toda vez que um evento for acionado. Por exemplo, você precisa enviar o nome e o endereço de e-mail do usuário para uma lista de e-mails toda vez que uma nova conta de usuário for criada.

## Como criar um webhook {#how-to-create-a-webhook}

Para criar um webhook, vá para o painel de administração da sua rede. Clique em **Ultimate Multisite > Webhooks > Adicionar Novo Webhook**.

![Página de lista de Webhooks vazia com botão Adicionar Novo Webhook](/img/admin/webhooks-list-empty.png)

Em seguida, você pode editar a configuração do webhook:

![Formulário Adicionar Novo Webhook com campos Nome, Evento e URL](/img/admin/webhook-add-modal.png)

Ao criar um novo webhook, você será solicitado informações como **Nome, URL** e **Evento**. Você pode usar qualquer nome que desejar para o seu webhook. Os campos mais importantes são a URL e o Evento.

![Interface de edição do Webhook mostrando o campo URL e prévia do payload](/img/admin/webhook-url-field.png)

A URL é o **endpoint ou o destino** para onde o Ultimate Multisite enviará o **payload ou os dados**. Este é o aplicativo que receberá os dados.

O Zapier é a solução mais comum que os usuários usam para facilitar a integração com aplicativos de terceiros. Sem uma plataforma como o Zapier, você precisará criar manualmente uma função personalizada que capture e processe os dados. Veja este artigo sobre **como usar webhook do Ultimate Multisite com Zapier**.

N neste artigo, vamos ver o conceito básico de como funciona um webhook e os eventos disponíveis no Ultimate Multisite. Vamos usar um site de terceiros chamado [requestbin.com](https://requestbin.com/). Este site nos permitirá criar um endpoint e capturar a carga (payload) sem precisar fazer nenhum código. _**Aviso: tudo o que ele fará é nos mostrar que os dados foram recebidos.**_ Não haverá processamento ou qualquer tipo de ação feita com a carga.

Vá para [requestbin.com](https://requestbin.com/) e clique em Create Request Bin (Criar Webhook).

Depois de clicar nesse botão, ele pedirá para você fazer login se já tiver uma conta ou se cadastrar. Se você já tem uma conta, ele o levará direto para o dashboard deles. No dashboard, você verá imediatamente o endpoint ou URL que pode usar na criação do seu webhook do Ultimate Multisite.

Copie a URL e volte ao Ultimate Multisite. Coloque o endpoint no campo URL e selecione um evento no menu suspenso. Neste exemplo, vamos selecionar **Payment Received** (Pagamento Recebido).

Este evento é acionado sempre que um usuário realiza um pagamento. Todos os eventos disponíveis, suas descrições e cargas são listados na parte inferior da página. Clique no botão **Add New Webhook** (Adicionar Novo Webhook) para salvar o webhook.

![Dropdown de eventos do Webhook com Payment Received selecionado](/img/admin/webhook-event-picker.png)

Agora podemos enviar um evento de teste para o endpoint para vermos se o webhook que criamos está funcionando. Podemos fazer isso clicando em **Send Test Event** (Enviar Evento de Teste) abaixo do webhook que criamos.

![Lista de webhooks mostrando um webhook configurado e a ação Enviar Teste](/img/admin/webhooks-list-populated.png)

Isso mostra uma janela de confirmação dizendo que o teste foi bem-sucedido.

![Resultado do evento de teste do webhook após enviar uma carga de teste](/img/admin/webhook-test-result.png)

Agora, se voltarmos para o site _Requestbin_, veremos que a carga útil (payload) foi recebida contendo alguns dados de teste.

Este é o princípio básico de como webhooks e endpoints funcionam. Se você for criar um endpoint personalizado, precisará criar uma função personalizada para processar os dados que recebe do Ultimate Multisite.
