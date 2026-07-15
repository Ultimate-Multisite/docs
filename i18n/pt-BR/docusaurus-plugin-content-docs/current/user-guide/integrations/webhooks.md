---
title: Webhooks
sidebar_position: 15
_i18n_hash: f8456622538d07af8f5aa36c1ec19249
---
# Uma primeira olhada em Webhooks (v2)

_**ATENÇÃO: observe que este recurso ou artigo é para usuários avançados.**_

Um **webhook** é uma forma de um app ou software como Ultimate Multisite fornecer informações em tempo real a outras aplicações. Um webhook entrega dados ou payloads a outras aplicações conforme isso acontece, ou seja, você **recebe os dados imediatamente.**

Isso é útil caso você precise integrar ou enviar determinados dados do Ultimate Multisite para outro CRM ou sistema toda vez que um evento for acionado. Por exemplo, você precisa enviar o nome e o endereço de email do usuário para uma lista de emails toda vez que uma nova conta de usuário é criada.

## Como criar um webhook {#how-to-create-a-webhook}

Para criar um webhook, acesse o Dashboard de admin da sua rede. Clique em **Ultimate Multisite > Webhooks > Add New Webhook.**

![Página de lista de Webhooks vazia com botão Add New Webhook](/img/admin/webhooks-list-empty.png)

Você pode então editar a configuração do webhook:

![Formulário Add New Webhook com campos Nome, Evento e URL](/img/admin/webhook-add-modal.png)

Ao criar um novo webhook, serão solicitadas informações como **Nome, URL,** e **Evento**. Você pode usar qualquer nome que quiser para o seu webhook. Os campos mais importantes são URL e Evento.

![Interface de edição de webhook mostrando o campo URL e a pré-visualização do payload](/img/admin/webhook-url-field.png)

URL é o **endpoint ou o destino** para o qual Ultimate Multisite enviará o **payload ou dados**. Esta é a aplicação que receberá os dados.

Zapier é a solução mais comum que o usuário usa para facilitar a integração com aplicações de terceiros. Sem uma plataforma como Zapier, você precisará criar manualmente uma função personalizada que capturará os dados e os processará. Veja este artigo sobre **como usar o webhook do Ultimate Multisite com Zapier.**

Neste artigo, veremos o conceito básico de como um webhook funciona e os eventos disponíveis no Ultimate Multisite. Usaremos um site de terceiros chamado [requestbin.com](https://requestbin.com/). Este site nos permitirá criar um endpoint e capturar o payload sem escrever nenhum código. _**Aviso: tudo o que ele fará é nos mostrar que os dados foram recebidos.**_ Não haverá processamento nem qualquer tipo de ação realizada no payload.

Acesse [requestbin.com](https://requestbin.com/) e clique em Create Request Bin.

Depois de clicar nesse botão, ele pedirá que você faça login, se já tiver uma conta, ou se cadastre. Se você já tiver uma conta, ele o levará diretamente ao Dashboard deles. No Dashboard deles, você verá imediatamente o endpoint ou URL que pode usar ao criar seu webhook do Ultimate Multisite.

Vá em frente, copie a URL e volte ao Ultimate Multisite. Coloque o endpoint no campo URL e selecione um evento no menu suspenso. Neste exemplo, selecionaremos **Pagamento Recebido**.

Este evento é acionado sempre que um usuário faz um pagamento. Todos os eventos disponíveis, suas descrições e payloads estão listados no final da página. Clique no botão **Add New Webhook** para salvar o webhook.

![Menu suspenso de evento de webhook com Payment Received selecionado](/img/admin/webhook-event-picker.png)

Agora podemos enviar um evento de teste para o endpoint para ver se o webhook que criamos está funcionando. Podemos fazer isso clicando em **Send Test Event** abaixo do webhook que criamos.

![Lista de Webhooks mostrando um webhook configurado e ação Send Test](/img/admin/webhooks-list-populated.png)

Isso mostra uma janela de confirmação dizendo que o teste foi bem-sucedido.

![Resultado do evento de teste do webhook após enviar um payload de teste](/img/admin/webhook-test-result.png)

Agora, se voltarmos ao site _Requestbin_, veremos que o payload foi recebido contendo alguns dados de teste.

Este é o princípio básico de como webhook e endpoints funcionam. Se você for criar um endpoint personalizado, precisará criar uma função personalizada para processar os dados que você recebe do Ultimate Multisite.
