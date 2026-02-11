---
title: Webhooks
sidebar_position: 15
_i18n_hash: 31948dc4c1b47114e296e95813b25348
---
# Um Primeiro Olhar sobre Webhooks (v2)

_**ATENÇÃO: Observe que este recurso ou artigo é para usuários avançados.**_

Um **webhook** é uma forma de um aplicativo ou software como Ultimate Multisite fornecer a outras aplicações informações em tempo real. Um webhook entrega dados ou payloads para outras aplicações assim que acontecem, significando que você **recebe os dados imediatamente.**

Isso é útil caso você precise integrar ou enviar determinados dados do Ultimate Multisite para outro CRM ou sistema sempre que um evento for acionado. Por exemplo, você precisa enviar o nome e o endereço de e-mail do usuário para uma lista de e-mails sempre que uma nova conta de usuário for criada.

## Como criar um webhook

Para criar um webhook, vá até o painel de administração da sua rede. Clique em **Ultimate Multisite > Webhooks > Add New Webhook.**

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-7cBdC7uhfX.png)

Ao criar um novo webhook, você será solicitado a fornecer informações como **Name, URL,** e **Event**. Você pode usar qualquer nome que desejar para o seu webhook. Os campos mais importantes são a URL e o Evento.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-7MmyV3wafK.png)

URL é o **endpoint ou destino** para o qual o Ultimate Multisite enviará o **payload ou dados**. Esta é a aplicação que receberá os dados.

Zapier é a solução mais comum que os usuários utilizam para facilitar a integração com aplicações de terceiros. Sem uma plataforma como o Zapier, você precisará criar manualmente uma função personalizada que capture os dados e os processe. Veja este artigo sobre **how to use Ultimate Multisite webhook with Zapier.**

Neste artigo, vamos analisar o conceito básico de como um webhook funciona e os eventos disponíveis no Ultimate Multisite. Usaremos um site de terceiros chamado [requestbin.com](https://requestbin.com/). Este site nos permitirá criar um endpoint e capturar o payload sem fazer qualquer codificação. _**Aviso: tudo o que ele fará é mostrar que os dados foram recebidos.**_ Não haverá processamento nem qualquer ação realizada sobre o payload.

Acesse [requestbin.com](https://requestbin.com/) e clique em Create Request Bin.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-J0e5FzS04g.png)

Após clicar nesse botão, ele solicitará que você faça login se já tiver uma conta ou se inscreva. Se você já tiver uma conta, ele o levará diretamente ao painel deles. No painel, você verá imediatamente o endpoint ou URL que pode usar na criação do seu webhook do Ultimate Multisite.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-M40kPMGsji.png)

Copie o URL e volte ao Ultimate Multisite. Coloque o endpoint no campo URL e selecione um evento no menu suspenso. Neste exemplo, selecionaremos **Payment Received**.

Este evento é acionado sempre que um usuário faz um pagamento. Todos os eventos disponíveis, suas descrições e payloads estão listados na parte inferior da página. Clique no botão **Add New Webhook** para salvar o webhook.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-1NwqQP4bP0.png)

Agora podemos enviar um evento de teste para o endpoint para verificar se o webhook que criamos está funcionando. Podemos fazer isso clicando em **Send Test Event** abaixo do webhook que criamos.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-zTDhrG4wlP.png)

Isso mostra uma janela de confirmação dizendo que o teste foi bem-sucedido.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-9jP9r7yRT9.png)

Agora, se voltarmos ao site _Requestbin_, veremos que o payload foi recebido contendo alguns dados de teste.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-RZke5xnrAg.png)

Este é o princípio básico de como webhooks e endpoints funcionam. Se você precisar criar um endpoint personalizado, precisará criar uma função personalizada para processar os dados que receber do Ultimate Multisite.
