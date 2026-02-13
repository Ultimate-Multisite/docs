---
title: Webhooks
sidebar_position: 15
_i18n_hash: 31948dc4c1b47114e296e95813b25348
---
# Una primera mirada a los Webhooks (v2)

_**ATENCIÓN: Tenga en cuenta que esta función o artículo es para usuarios avanzados.**_

Un **webhook** es una forma en que una aplicación o software como Ultimate Multisite puede proporcionar a otras aplicaciones información en tiempo real. Un webhook entrega datos o cargas útiles a otras aplicaciones a medida que ocurren, lo que significa que **obtienes datos inmediatamente.**

Esto es útil si necesitas integrar o pasar ciertos datos de Ultimate Multisite a otro CRM o sistema cada vez que se desencadena un evento. Por ejemplo, necesitas enviar el nombre y la dirección de correo electrónico del usuario a una lista de correo cada vez que se crea una nueva cuenta de usuario.

## Cómo crear un webhook

Para crear un webhook, ve al panel de administración de tu red. Haz clic en **Ultimate Multisite > Webhooks > Add New Webhook.**

![Webhooks list page with Add New Webhook button](/img/admin/webhooks-list.png)

Al crear un nuevo webhook, se te pedirá información como **Name, URL,** y **Event**. Puedes usar cualquier nombre que desees para tu webhook. Los campos más importantes son la URL y el Evento.

![New webhook form with Name, URL, and Event fields](/img/admin/webhooks-list.png)

URL es el **endpoint o el destino** al que Ultimate Multisite enviará la **payload o datos**. Esta es la aplicación que recibirá los datos.

Zapier es la solución más común que los usuarios utilizan para facilitar la integración con aplicaciones de terceros. Sin una plataforma como Zapier, tendrás que crear manualmente una función personalizada que capture los datos y los procese. Consulta este artículo sobre **cómo usar el webhook de Ultimate Multisite con Zapier.**

En este artículo, veremos el concepto básico de cómo funciona un webhook y los eventos disponibles en Ultimate Multisite. Utilizaremos un sitio de terceros llamado [requestbin.com](https://requestbin.com/). Este sitio nos permitirá crear un endpoint y capturar la carga útil sin hacer ningún código. _**Descargo de responsabilidad: todo lo que hará es mostrarnos que los datos han sido recibidos.**_ No habrá procesamiento ni ninguna acción realizada sobre la carga útil.

Ve a [requestbin.com](https://requestbin.com/) y haz clic en Create Request Bin.

![RequestBin website Create Request Bin button](/img/admin/webhooks-list.png)

Después de hacer clic en ese botón, te pedirá iniciar sesión si ya tienes una cuenta o registrarte. Si ya tienes una cuenta, te llevará directamente a su panel de control. En su panel de control, verás inmediatamente el endpoint o URL que puedes usar para crear tu webhook de Ultimate Multisite.

![RequestBin dashboard showing the endpoint URL](/img/admin/webhooks-list.png)

Continúa y copia la URL y vuelve a Ultimate Multisite. Coloca el endpoint en el campo URL y selecciona un evento del menú desplegable. En este ejemplo, seleccionaremos **Payment Received**.

Este evento se activa cada vez que un usuario realiza un pago. Todos los eventos disponibles, su descripción y cargas útiles se enumeran en la parte inferior de la página. Haz clic en el botón **Add New Webhook** para guardar el webhook.

![Webhook configured with Payment Received event](/img/admin/webhooks-list.png)

Ahora podemos enviar un evento de prueba al endpoint para ver si el webhook que creamos está funcionando. Podemos hacer esto haciendo clic en **Send Test Event** bajo el webhook que creamos.

![Send Test Event option under the webhook](/img/admin/webhooks-list.png)

Esto muestra una ventana de confirmación que indica que la prueba fue exitosa.

![Webhook test event successful confirmation](/img/admin/webhooks-list.png)

Ahora, si volvemos al sitio _Requestbin_, veremos que la carga útil ha sido recibida con algunos datos de prueba.

![RequestBin showing received webhook payload data](/img/admin/webhooks-list.png)

Este es el principio básico de cómo funcionan los webhooks y los endpoints. Si deseas crear un endpoint personalizado, tendrás que crear una función personalizada para procesar los datos que recibas de Ultimate Multisite.
