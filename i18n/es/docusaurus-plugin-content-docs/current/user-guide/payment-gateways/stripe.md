---
title: Configuración de Stripe
sidebar_position: 6
_i18n_hash: a73a808f5976fbabb54e2c9889334d00
---
# Configuración de Stripe Gateway (v2)

_**NOTA IMPORTANTE: Este artículo se refiere a Ultimate Multisite versión 2.x.**_

Puedes activar hasta cuatro métodos de pago en nuestra página de ajustes de pago: Stripe, Stripe Checkout, PayPal y Manual. En este artículo, veremos cómo integrarlo con **Stripe**.

## Habilitar Stripe

Para habilitar Stripe como una pasarela de pago disponible en tu red, ve a **Ultimate Multisite > Settings > Payments** y marca el interruptor junto a **Stripe** o **Stripe Checkout** en la sección Active Payment Gateways.

![Habilitar Stripe en las pasarelas de pago activas](/img/config/settings-payment-gateways.png)

### Stripe vs Stripe Checkout:

**Stripe:** Este método mostrará un espacio para insertar el número de tarjeta de crédito durante el proceso de pago.

![Campo de tarjeta de crédito integrado de Stripe durante el proceso de pago](/img/config/settings-payment-gateways.png)

**Stripe Checkout:** Este método redirigirá al cliente a una página de Stripe Checkout durante el proceso de pago.

![Página de redirección de Stripe Checkout durante el proceso de pago](/img/config/settings-payment-gateways.png)

Obtener tus claves de API de Stripe

Una vez que Stripe esté habilitado como pasarela de pago, tendrás que completar los campos **Stripe Publishable Key** y **Stripe Secret Key** . Puedes obtenerlos iniciando sesión en tu Account de Stripe.

_**Nota:** puedes activar **Sandbox mode** para probar si el método de pago funciona._

![Campos de clave de API de Stripe e interruptor de modo sandbox](/img/config/settings-payment-gateways.png)

En tu Dashboard de Stripe, haz clic en **Developers** en la esquina superior derecha y luego en **API Keys** en el menú de la izquierda.

![Sección Developers del Dashboard de Stripe con API Keys](/img/config/settings-payment-gateways.png)

Puedes usar **Test Data** (para probar si la integración funciona en tu sitio de producción) o no. Para cambiar esto, activa el interruptor **Viewing test data**.

![Interruptor Viewing test data de Stripe](/img/config/settings-payment-gateways.png)

Copia el valor de **Publishable key** y **Secret key** , desde la columna **Token** y pégalo en los campos de Ultimate Multisite Stripe Gateway. Luego haz clic en **Save Changes**.

![Valores de clave publicable y clave secreta de Stripe](/img/config/settings-payment-gateways.png)

![Pegar las claves de Stripe en los ajustes de Ultimate Multisite](/img/config/settings-payment-gateways.png)

## Configurar Stripe Webhook

Stripe envía eventos de webhook que notifican a Ultimate Multisite cada vez que ocurre un evento en **tu cuenta de stripe**.

Haz clic en **Developers** y luego elige el elemento **Webhooks** en el menú de la izquierda. Luego, en el lado derecho, haz clic en **Add endpoint** *.*

![Página Webhooks de Stripe con el botón Add endpoint](/img/config/settings-payment-gateways.png)

Necesitarás una **Endpoint URL** *.* Ultimate Multisite genera automáticamente la URL del endpoint, que puedes encontrar justo debajo del campo **Webhook Listener URL** en la sección **Ultimate Multisite Stripe Gateway**_._

![Campo Webhook Listener URL en los ajustes de Stripe Gateway](/img/config/settings-payment-gateways.png)

**Copia** la URL del endpoint y **pégala** en el campo **Endpoint URL** de Stripe.

![Pegar la URL del endpoint en la configuración del webhook de Stripe](/img/config/settings-payment-gateways.png)

A continuación, debes seleccionar un **Event** *.* En esta opción, simplemente tienes que marcar la casilla **Select all events** y hacer clic en **Add events**. Después, haz clic en **Add Endpoint** para guardar los cambios.

![Seleccionar todos los eventos y añadir el endpoint de Stripe](/img/config/settings-payment-gateways.png)

¡Eso es todo, tu integración de pagos con Stripe está completa!
