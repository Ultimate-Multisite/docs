---
title: Webhooks
sidebar_position: 15
_i18n_hash: f8456622538d07af8f5aa36c1ec19249
---
# Un Primer Olhar nos Webhooks (v2)

_**ATENCIÓN: Ten em conta que esta función ou artigo son para usuarios avanzados.**_

Un **webhook** é unha forma de unha aplicación ou software como o Ultimate Multisite de proporcionar información en tempo real a outras aplicacións. Un webhook entrega datos ou *payloads* a outras aplicacións en o momento, o que significa que **obténs os datos inmediatamente**.

Isto é útil se precisas integrar ou pasar certos datos do Ultimate Multisite a outro CRM ou sistema cada vez que se active un evento. Por exemplo, necesitas enviar o nome e o correo electrónico do usuario a unha lista de correo cada vez que se crea unha nova conta de usuario.

## Como crear un webhook

Para crear un webhook, diríxete ao teu *dashboard* de administrador da rede. Clica en **Ultimate Multisite > Webhooks > Add New Webhook.**

![Página en branco de lista de webhooks con el botón Add New Webhook](/img/admin/webhooks-list-empty.png)

Aí podes editar a configuración do webhook:

![Formulario para añadir un nuevo webhook con los campos Nome, Evento y URL](/img/admin/webhook-add-modal.png)

Ao crear un novo webhook te pedirán información como **Nome, URL** e **Evento**. Podás usar calquera nome que queiras para o teu webhook. Os campos máis importantes son a URL e o Evento.

![Interfaz de edición do webhook mostrando o campo URL e a vista previa do payload](/img/admin/webhook-url-field.png)

A URL é o **ponto final ou o destino** ao cual Ultimate Multisite enviará o **payload ou os datos**. É a aplicación que recibirá os datos.

Zapier é a solución máis común que os usuarios utilizan para facilitar a integración con aplicacións de terceiros. Sen unha plataforma como Zapier, terás que crear manualmente unha función personalizada que capture os datos e procesne. Vede este artigo sobre **como usar o webhook do Ultimate Multisite con Zapier.**

N nala artigo, vamos ver o concepto básico de como funciona un webhook e os eventos disponíveis no Ultimate Multisite. Vamos usar un sitio de terceiros chamado [requestbin.com](https://requestbin.com/). Este sitio permitirá que creemos un endpoint e captemos o payload sen ter que codificar nada. _**Aviso: todo o que fará é mostrarnos que os datos foram recibidos.**_ Non terá ningún proceso ou acción feita no payload.

Vaya a [requestbin.com](https://requestbin.com/) e clique en Create Request Bin (Crear Webhook).

Depois de clicar nesse botão, pedirá para iniciar sesión se já tiver uma conta ou registar-se. Se já tiver uma conta, irá levá-lo diretamente ao vosso dashboard. No vosso dashboard, verá imediatamente o endpoint ou URL que pode usar na criação do webhook do Ultimate Multisite.

Copie a URL e volte ao Ultimate Multisite. Coloque o endpoint no campo URL e selecione um evento no menu suspenso. Neste exemplo, vamos selecionar **Payment Received** (Pagamento Recebido).

Este evento é acionado sempre que un utilizador faz um pagamento. Todos os eventos disponíveis, a súa descripción e os payloads están listados na parte inferior da página. Clique no botão **Add New Webhook** (Adicionar Novo Webhook) para guardar o webhook.

![Webhook event dropdown with Payment Received selected](/img/admin/webhook-event-picker.png)

Agora podemos enviar un evento de teste ao endpoint para vermos se o webhook que creamos está a funcionar. Podemos hacer isto clicando en **Send Test Event** (Enviar Evento de Teste) debaixo do webhook que creamos.

![Webhooks list showing one configured webhook and Send Test action](/img/admin/webhooks-list-populated.png)

Isto mostra unha ventana de confirmación que dice que o teste foi exitoso.

![Webhook test event result after sending a test payload](/img/admin/webhook-test-result.png)

Agora, se voltarmos ao sitio _Requestbin_, veremos que o payload foi recebido contendo alguns dados de teste.

Este é o princípio básico de como funcionam os webhooks e os endpoints. Se quiser criar um endpoint personalizado, terá de criar uma função personalizada para processar os dados que recebe do Ultimate Multisite.
