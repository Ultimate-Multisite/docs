---
title: Configuración de Stripe
sidebar_position: 6
_i18n_hash: 44043734d0965a10c4e4b848dfed3f0b
---
# Configuración del Gateway Stripe (v2)

_**NOTA IMPORTANTE: Este artículo se refiere a la versión 2.x de Ultimate Multisite.**_

Puedes activar hasta cuatro métodos de pago en nuestra página de configuración de pagos: Stripe, Stripe Checkout, PayPal y Manual. En este artículo, veremos cómo integrar con **Stripe**.

## Habilitar Stripe

Para habilitar Stripe como un gateway de pago disponible en tu red, ve a **Ultimate Multisite > Settings > Payments** y marca el interruptor junto a **Stripe** o **Stripe Checkout** en la sección Gateways de Pago Activos.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-UUtLaJgx7R.png)

### Stripe vs Stripe Checkout:

**Stripe:** Este método mostrará un espacio para insertar el número de tarjeta de crédito durante el proceso de pago.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-k73ZUl1hTW.png)

**Stripe Checkout:** Este método redirigirá al cliente a una página de Stripe Checkout durante el proceso de pago.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-PCZ16DhYrj.png)

## Obtener tus claves API de Stripe

Una vez que Stripe esté habilitado como gateway de pago, deberás completar los campos para **Stripe Publishable Key** y **Stripe Secret Key**. Puedes obtenerlos iniciando sesión en tu cuenta de Stripe.

_**Nota:** puedes activar el **Modo Sandbox** para probar si el método de pago funciona._

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-dhnvBN03ii.png)

En tu panel de Stripe, haz clic en **Developers** en la esquina superior derecha, y luego en **API Keys** en el menú izquierdo.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-HVqsu1SXuE.png)

Puedes usar **Test Data** (para probar si la integración funciona en tu sitio de producción) o no. Para cambiar esto, cambia el interruptor **Viewing test data**.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-kdVC3W8Bsr.png)

Copia el valor de la **Publishable key** y la **Secret key**, de la columna **Token**, y pégalo en los campos del Gateway Stripe de Ultimate Multisite. Luego haz clic en **Save Changes**.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-JyAifSGNOn.png)

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-4rFGxkXr1K.png)

## Configurar el Webhook de Stripe

Stripe envía eventos de webhook que notifican a Ultimate Multisite cada vez que ocurre un evento en **tu cuenta de Stripe**.

Haz clic en **Developers** y luego selecciona el elemento **Webhooks** en el menú izquierdo. Luego, en el lado derecho, haz clic en **Add endpoint** *.*

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-LmYsdylNdd.png)

Necesitarás una **Endpoint URL** *.* Ultimate Multisite genera automáticamente la URL del endpoint, que puedes encontrar justo debajo del campo **Webhook Listener URL** en la sección **Ultimate Multisite Stripe Gateway**_.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-sZrCX9OZaw.png)

**Copy** la URL del endpoint y **paste** en el campo **Endpoint URL** de Stripe.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-tMlomo8gx1.png)

A continuación, selecciona un **Event** *.* Bajo esta opción, simplemente debes marcar la casilla **Select all events** y hacer clic en **Add events**. Después, haz clic en **Add Endpoint** para guardar los cambios.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-Hv8KzaGMrq.png)

¡Eso es todo, tu integración de pagos con Stripe está completa!
