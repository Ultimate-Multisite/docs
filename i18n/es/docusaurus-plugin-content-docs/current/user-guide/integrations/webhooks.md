---
title: Webhooks
sidebar_position: 15
_i18n_hash: f8456622538d07af8f5aa36c1ec19249
---
# Primer vistazo a Webhooks (v2)

_**ATENCIÓN: Ten en cuenta que esta función o artículo es para usuarios avanzados.**_

Un **webhook** es una forma en que una app o software como Ultimate Multisite proporciona información en tiempo real a otras aplicaciones. Un webhook entrega datos o payloads a otras aplicaciones a medida que ocurre, lo que significa que **obtienes datos inmediatamente.**

Esto es útil si necesitas integrar o pasar ciertos datos desde Ultimate Multisite hacia otro CRM o sistema cada vez que se activa un evento. Por ejemplo, necesitas enviar el nombre y la dirección de correo electrónico del usuario a una lista de correo cada vez que se crea una nueva cuenta de usuario.

## Cómo crear un webhook {#how-to-create-a-webhook}

Para crear un webhook, ve a tu Dashboard de administración de red. Haz clic en **Ultimate Multisite > Webhooks > Add New Webhook.**

![Página de lista de Webhooks vacía con botón Add New Webhook](/img/admin/webhooks-list-empty.png)

Luego puedes editar la configuración del webhook:

![Formulario Add New Webhook con campos Name, Event y URL](/img/admin/webhook-add-modal.png)

Al crear un nuevo webhook, se te pedirá información como **Name, URL,** y **Event**. Puedes usar cualquier nombre que quieras para tu webhook. Los campos más importantes son la URL y Event.

![Interfaz de edición de webhook que muestra el campo URL y la vista previa del payload](/img/admin/webhook-url-field.png)

URL es el **endpoint o el destino** al que Ultimate Multisite enviará el **payload o datos**. Esta es la aplicación que recibirá los datos.

Zapier es la solución más común que el usuario utiliza para facilitar la integración con aplicaciones de terceros. Sin una plataforma como Zapier, tendrás que crear manualmente una función personalizada que capture los datos y los procese. Consulta este artículo sobre **cómo usar el webhook de Ultimate Multisite con Zapier.**

En este artículo, veremos el concepto básico de cómo funciona un webhook y los eventos disponibles en Ultimate Multisite. Usaremos un sitio de terceros llamado [requestbin.com](https://requestbin.com/). Este sitio nos permitirá crear un endpoint y capturar el payload sin escribir código. _**Aviso legal: lo único que hará es mostrarnos que los datos se han recibido.**_ No habrá procesamiento ni ningún tipo de acción aplicada al payload.

Ve a [requestbin.com](https://requestbin.com/) y haz clic en Create Request Bin.

Después de hacer clic en ese botón, te pedirá que inicies sesión si ya tienes una cuenta o que te registres. Si ya tienes una cuenta, te llevará directamente a su Dashboard. En su Dashboard, verás inmediatamente el endpoint o la URL que puedes usar al crear tu webhook de Ultimate Multisite.

Copia la URL y vuelve a Ultimate Multisite. Coloca el endpoint en el campo URL y selecciona un evento en el desplegable. En este ejemplo, seleccionaremos **Payment Received**.

Este evento se activa cada vez que un usuario realiza un pago. Todos los eventos disponibles, su descripción y payloads se enumeran al final de la página. Haz clic en el botón **Add New Webhook** para guardar el webhook.

![Desplegable de eventos de webhook con Payment Received seleccionado](/img/admin/webhook-event-picker.png)

Ahora podemos enviar un evento de prueba al endpoint para ver si el webhook que creamos funciona. Podemos hacerlo haciendo clic en **Send Test Event** debajo del webhook que creamos.

![Lista de Webhooks que muestra un webhook configurado y la acción Send Test](/img/admin/webhooks-list-populated.png)

Esto muestra una ventana de confirmación que indica que la prueba se realizó correctamente.

![Resultado del evento de prueba del webhook después de enviar un payload de prueba](/img/admin/webhook-test-result.png)

Ahora, si volvemos al sitio _Requestbin_, veremos que se ha recibido el payload que contiene algunos datos de prueba.

Este es el principio básico de cómo funcionan los webhook y los endpoints. Si vas a crear un endpoint personalizado, tendrás que crear una función personalizada para procesar los datos que recibas de Ultimate Multisite.
