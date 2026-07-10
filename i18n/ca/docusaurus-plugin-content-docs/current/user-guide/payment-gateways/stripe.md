---
title: Configurar Stripe
sidebar_position: 6
_i18n_hash: a73a808f5976fbabb54e2c9889334d00
---
# Configurar la Pasarela de Pago Stripe (v2) {#setting-up-the-stripe-gateway-v2}

_**NOTA IMPORTANTE: Este artículo se refiere a Ultimate Multisite versión 2.x.**_

Puedes activar hasta cuatro métodos de pago en nuestra página de configuración de pagos: Stripe, Stripe Checkout, PayPal y Manual. En este artículo, veremos cómo integrarse con **Stripe**.

## Habilitar Stripe {#enabling-stripe}

Para habilitar Stripe como pasarela de pago disponible en tu red, ve a **Ultimate Multisite > Configuración > Pagos** y marca el interruptor junto a **Stripe** o **Stripe Checkout** en la sección Pasarelas de Pago Activas.

![Habilitando Stripe en las pasarelas de pago activas](/img/config/settings-payment-gateways.png)

### Stripe vs Stripe Checkout: {#stripe-vs-stripe-checkout}

**Stripe:** Este método mostrará un espacio para insertar el número de tarjeta de crédito durante el proceso de compra (checkout).

![Campo de tarjeta de crédito incrustado de Stripe durante el checkout](/img/config/settings-payment-gateways.png)

**Stripe Checkout:** Este método redirigirá al cliente a una página de Stripe Checkout durante el proceso de compra.

![Página de redirección de Stripe Checkout durante el checkout](/img/config/settings-payment-gateways.png)

Obtener tus claves API de Stripe

Una vez que hayas habilitado Stripe como pasarela de pago, deberás rellenar los campos para la **Clave Pública de Stripe (Stripe Publishable Key)** y la **Clave Secreta de Stripe (Stripe Secret Key)**. Puedes obtenerlas iniciando sesión en tu cuenta de Stripe.

_**Nota:** puedes activar el **Modo Sandbox** para probar si el método de pago funciona._

![Campos de clave API de Stripe y control del modo sandbox](/img/config/settings-payment-gateways.png)

A la teva dashboard de Stripe, fes clic a **Developers** a l'esquina superior dreta, i després a **API Keys** al menú de la sinistra.

![Secció Developers del dashboard de Stripe amb API Keys](/img/config/settings-payment-gateways.png)

 Pots utilitzar **Test Data** (per saber si la integració funciona al teu lloc de producció) o no. Per canviar això, activa el interruptor **Viewing test data**.

![Interruptor Viewing test data de Stripe](/img/config/settings-payment-gateways.png)

 Copia el valor del **Publishable key** i **Secret key**, de la columna **Token**, i pegués-lo als camps de Ultimate Multisite Stripe Gateway. Després fes clic a **Save Changes**.

![Valors de les clefs Publishable i Secret de Stripe](/img/config/settings-payment-gateways.png)

![Peguant les clefs de Stripe en les configuracions d'Ultimate Multisite](/img/config/settings-payment-gateways.png)

## Configuració del Webhook de Stripe {#setting-up-stripe-webhook}

Stripe envia esdeveniments webhook que notifiquen Ultimate Multisite cada vegada que passa un esdeveniment a **la teva compte de stripe**.

Fes clic a **Developers** i després selecciona l'article **Webhooks** al menú de la sinistra. Després, a la dreta fes clic a **Add endpoint** *.

![Pàgina Webhooks de Stripe amb el bot Add endpoint](/img/config/settings-payment-gateways.png)

Tureu necessitat d'una **Endpoint URL** *. Ultimate Multisite genera automàticament l'URL de l'endpoint, que pots trobar just a sota del camp **Webhook Listener URL** en la secció **Ultimate Multisite Stripe Gateway**._

![Campos de URL del Webhook Listener en la configuración de la pasarela Stripe](/img/config/settings-payment-gateways.png)

**Copia** l'URL del endpoint i **pega-la** al campo **Endpoint URL** de Stripe.

![Pegar l'endpoint URL en la configuración del webhook de Stripe](/img/config/settings-payment-gateways.png)

A continuació, selecciona un **Event** *. Sota aquesta opció, només has de marcar la casella **Select all events** i fer clic en **Add events**. Després fes clic a **Add Endpoint** per guardar els canvis.

![Seleccionar tots els events i afegir l'endpoint de Stripe](/img/config/settings-payment-gateways.png)

Després Això, la teva integració de pagaments amb Stripe està completa!
