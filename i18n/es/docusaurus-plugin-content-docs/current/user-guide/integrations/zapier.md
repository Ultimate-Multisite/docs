---
title: Integración con Zapier
sidebar_position: 12
_i18n_hash: cf4bbd6dfae0fa99b3d009298cad3f19
---
# Integrando Ultimate Multisite con Zapier

En uno de los artículos, hablamos de [Webhooks](webhooks.md) y cómo se pueden usar para integrarse con aplicaciones de terceros.

Usar webhooks es un poco complicado ya que requiere conocimientos avanzados de programación y captura de cargas útiles. Usar **Zapier** es una forma de evitar eso.

Zapier tiene integración con más de 5000 aplicaciones, lo que facilita la comunicación entre distintas aplicaciones.

Puedes crear **Triggers** que se activarán cuando ocurran eventos en tu red (por ejemplo, se crea una cuenta y dispara el evento account_create) o generar **Actions** en tu red reaccionando a eventos externos (por ejemplo, crear una nueva membresía de cuenta en tu red Ultimate Multisite).

Esto es posible porque los **triggers** y acciones de Ultimate Multisite Zapier están impulsados por la [REST API](https://developer.ultimatemultisite.com/api/docs/).

## Cómo empezar

Primero, busca Ultimate Multisite en la lista de aplicaciones de Zapier. Alternativamente, puedes hacer clic en [este enlace](https://zapier.com/apps/wp-ultimo/integrations).

Ve a tu panel de control y presiona el botón **+** **Create Zap** en la barra lateral izquierda para configurar un nuevo Zap.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-kyu5ufUXOv.png)

Serás redirigido a la página de creación de Zap.

En el cuadro de búsqueda escribe "wp ultimo". Haz clic para elegir la opción de versión **Beta**.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-BrOYbp7dSE.png)

Después de seleccionar nuestra aplicación, elige el evento disponible: **New Ultimate Multisite Event**.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-srblXqJnQE.png)

Ahora necesitamos dar acceso a Zapier a **tu red**. Al hacer clic en **Sign in** se abrirá una nueva ventana que requerirá las **API credentials**.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-HcULsQoFpZ.png)

Ve al panel de administración de tu red y navega a **Ultimate Multisite > Settings** > **API & Webhooks** y busca la sección de Configuración de API.

Selecciona la opción **Enable API** ya que es necesaria para que esta conexión funcione.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-l7KbeKUkPX.png)

Usa el icono **Copy to Clipboard** en los campos API Key y API Secret y pega esos valores en la pantalla de integración.

En el campo URL, coloca la URL completa de tu red, incluyendo el protocolo (HTTP o HTTPS).

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-4UVPQAlzYk.png)

Haz clic en el botón **Yes, Continue** para avanzar al siguiente paso. Si todo funciona, deberías ver tu nueva cuenta conectada. Haz clic en **Continue** para crear un nuevo trigger.

## Cómo crear un nuevo Trigger

Ahora que tu cuenta está conectada, puedes ver los eventos disponibles. Elijamos el evento **payment_received** para este tutorial.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-jZE7WgSGw8.png)

Una vez seleccionado el evento y haces clic en **continue**, aparecerá un **test step**.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-SWo5wbMkgZ.png)

En esta etapa, Zapier probará si tu Zap puede **fetch the specific payload to that event**. En eventos futuros del mismo tipo, se enviará información con la misma estructura.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-CVCJxhN3ai.png)

En nuestro tutorial la prueba fue **completed successfully** y devolvió la información de ejemplo de la carga útil. Esta información de ejemplo será útil para guiarnos al crear acciones. Tu trigger ya está creado y listo para conectarse a otras aplicaciones.

## Cómo crear Actions

Las Actions utilizan información de otros triggers para crear nuevas entradas en tu red.

En el paso **creating an action step** elegirás Ultimate Multisite **Beta** y la opción **Create Items on Ultimate Multisite**.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-swCbHP8jNG.png)

En el siguiente paso crearás tu autenticación, al igual que hicimos en **How to start**, o seleccionarás una autenticación ya creada. En este tutorial elegiremos la misma autenticación creada previamente.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-iRSFnhpoHv.png)

### Configuración de la Action

Este es el **main step of the action** y aquí las cosas son un poco diferentes. La primera información que elegirás es el **Item**. Item es el **information model** de tu red, como **Customers, Payments, Sites, Emails** y otros.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-GC4iHxBn4e.png)

Al seleccionar un item, el formulario se **rearrange to bring the required and optional fields** para el item seleccionado.

Por ejemplo, al seleccionar el item **Customer**, los campos del formulario mostrarán todo lo necesario para crear un nuevo Customer en la red.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-4xpHH5xTaf.png)

Después de completar todos los campos marcados como **required** y hacer clic en continue, una pantalla final mostrará los campos completados y los que quedaron sin rellenar.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-JLPq56npV6.png)

Una vez que tu prueba se complete y sea exitosa, tu action estará configurada. También es importante verificar en tu red si el item se creó con la prueba de tu action.
