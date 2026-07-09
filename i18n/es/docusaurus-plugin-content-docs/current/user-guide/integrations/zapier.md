---
title: Integración con Zapier
sidebar_position: 12
_i18n_hash: 7f23136e0e69417e244a9930f9620e95
---
# Integrar Ultimate Multisite con Zapier {#integrating-ultimate-multisite-with-zapier}

En uno de los artículos, hablamos sobre [Webhooks](webhooks.md) y cómo se pueden usar para integrarse con aplicaciones de terceros.

Usar webhooks es un poco complicado, ya que requiere conocimientos avanzados de programación y captura de payloads. Usar **Zapier** es una forma de evitar eso.

Zapier tiene integración con más de 5000 apps, lo que facilita la comunicación entre diferentes aplicaciones.

Puedes crear **Triggers** que se activarán cuando ocurran eventos en tu red (por ejemplo, se crea una Account y se activa el evento account_create) o generar **Actions** en tu red en respuesta a eventos externos (por ejemplo, crear una nueva membership de Account en tu red Ultimate Multisite).

Esto es posible porque **los triggers de Ultimate Multisite Zapier** y las actions funcionan con la [REST API](https://developer.ultimatemultisite.com/api/docs/).

## Cómo empezar {#how-to-start}

Primero, busca Ultimate Multisite en la lista de apps de Zapier. Como alternativa, puedes hacer clic en [este enlace](https://zapier.com/apps/wp-ultimo/integrations).

Ve a tu Dashboard y pulsa el botón **+** **Create Zap** en la barra lateral izquierda para configurar un nuevo Zap.

![Dashboard de Zapier con el botón Create Zap](/img/admin/webhooks-list.png)

Serás redirigido a la página de creación de Zap.

En el cuadro de búsqueda escribe "wp ultimo". Haz clic para elegir la opción de versión **Beta**.

![Buscando WP Ultimo en la lista de apps de Zapier](/img/admin/webhooks-list.png)

Después de seleccionar nuestra app, elige el evento disponible: **New Ultimate Multisite Event**.

![Seleccionando el trigger New Ultimate Multisite Event](/img/admin/webhooks-list.png)

Ahora necesitamos dar a Zapier acceso a **tu red**. Al hacer clic en **Sign in** se abrirá una nueva ventana que requiere las **credenciales de API**.

![Mensaje de Sign in de Zapier para credenciales de API](/img/admin/webhooks-list.png)

Ve al panel de administración de tu red y navega a **Ultimate Multisite > Settings** > **API & Webhooks** y busca la sección API Settings.

Selecciona la opción **Enable API**, ya que es necesaria para que esta conexión funcione.

![Ajustes de API and Webhooks con opciones API Settings y Enable API](/img/admin/settings-api-webhooks.png)

Usa el icono **Copy to Clipboard** en los campos API Key y API Secret y pega esos valores en la pantalla de integración.

En el campo URL, coloca la URL completa de tu red, incluyendo el protocolo (HTTP o HTTPS).

![Pantalla de integración de Zapier con campos API Key, Secret y URL](/img/admin/webhooks-list.png)

Haz clic en el botón **Yes, Continue** para pasar al siguiente paso. Si todo funciona, ¡deberías recibir el saludo de tu nueva Account conectada! Haz clic en **Continue** para crear un nuevo trigger.

## Cómo crear un nuevo Trigger {#how-to-create-a-new-trigger}

Ahora que tu Account está conectada, puedes ver los eventos disponibles. Elijamos el evento **payment_received** para este tutorial.

![Seleccionando el evento payment_received en el trigger de Zapier](/img/admin/webhooks-list.png)

Una vez seleccionado el evento y al hacer clic en **continue**, aparecerá un **paso de prueba**.

![Paso de prueba de Zapier para el trigger](/img/admin/webhooks-list.png)

En esta etapa, Zapier probará si tu Zap puede **obtener el payload específico para ese evento**. En futuros eventos del mismo tipo, se enviará información con esta misma estructura.

![Prueba del trigger de Zapier completada correctamente con payload](/img/admin/webhooks-list.png)

En nuestro tutorial, la prueba se **completó correctamente** y devolvió la información de ejemplo del payload. Esta información de ejemplo será útil para guiarnos al crear actions. Tu trigger ya está creado y listo para conectarse a otras aplicaciones.

## Cómo crear Actions {#how-to-create-actions}

Las actions usan información de otros triggers para crear nuevas entradas en tu red.

En el **paso de crear una action**, elegirás Ultimate Multisite **Beta** y la opción **Create Items on Ultimate Multisite**.

![Creando una action con Create Items on Ultimate Multisite](/img/admin/webhooks-list.png)

En el siguiente paso crearás tu autenticación, tal como hicimos en **Cómo empezar**, o seleccionarás una autenticación creada. En este tutorial elegiremos la misma autenticación creada previamente.

![Seleccionando autenticación para la action de Zapier](/img/admin/webhooks-list.png)

### Configurar la Action {#setting-up-the-action}

Este es el **paso principal de la action** y aquí las cosas son un poco diferentes. La primera información que elegirás es el **Item**. Item es el **modelo de información** de tu red, como **Customers, Payments, Sites, Emails** y otros.

![Eligiendo el tipo de Item para la action de Zapier](/img/admin/webhooks-list.png)

Al seleccionar un item, el formulario se **reorganizará para mostrar los campos obligatorios y opcionales** del item seleccionado.

Por ejemplo, al seleccionar el item **Customer**, los campos del formulario mostrarán todo lo necesario para crear un nuevo Customer en la red.

![Campos del item Customer en la configuración de la action de Zapier](/img/admin/webhooks-list.png)

Después de completar todos los campos marcados como **required** y hacer clic en continue, una última pantalla te mostrará los campos completados y los campos que se dejaron sin completar.

![Prueba de action de Zapier que muestra campos completados y sin completar](/img/admin/webhooks-list.png)

Tan pronto como tu prueba se complete correctamente, tu action estará configurada. También es importante comprobar en tu red si el item se creó con la prueba de tu action.
