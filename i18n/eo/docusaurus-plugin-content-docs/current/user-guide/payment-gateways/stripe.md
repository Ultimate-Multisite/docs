---
title: Konfigurado de Stripe
sidebar_position: 6
_i18n_hash: a73a808f5976fbabb54e2c9889334d00
---
# La Konfiguracio de la Pasarela Stripe (v2) {#setting-up-the-stripe-gateway-v2}

_**NOTO IMPORTANTE: Esta artikolo se refere a Ultimate Multisite versio 2.x.**_

Pudi aktivigi hasta kvin metodo de pago en la página de configuración de pagos: Stripe, Stripe Checkout, PayPal kaj Manua. En ĉi tiu artikolo, ni viduion kiel integriĝi kun **Stripe**.

## Aktivado de Stripe {#enabling-stripe}

Por aktivi Stripe kiel disponabla metodo de pago sur via retejo, dirigi al **Ultimate Multisite > Settings > Payments** kaj marku la interŝaltilon apud **Stripe** aŭ **Stripe Checkout** en la seksa "Active Payment Gateways".

![Aktivado de Stripe en aktifaj metodoj de pago](/img/config/settings-payment-gateways.png)

### Stripe kontra Stripe Checkout: {#stripe-vs-stripe-checkout}

**Stripe:** Ĉi tiu metodo montros riĉan spacon por inkluzi la numeron de kredito karto dum la checkout.

![Stripe campo de kredito karto en linio dum checkout](/img/config/settings-payment-gateways.png)

**Stripe Checkout:** Ĉi tiu metodo redirekte la klienton al Stripe Checkout paĝo dum la checkout.

![Redirekto paĝo de Stripe Checkout dum checkout](/img/config/settings-payment-gateways.png)

Agi vian API-chiavoj

Unfoje Stripe kiel metodon de pago, vi bezonas pleni la kampojn por **Stripe Publishable Key** kaj **Stripe Secret Key**. Vi povas akiri ĉi tiujn per logi in al via konto de Stripe.

_**Notado:** vi povas aktivi **Sandbox mode** por testigi se la metodo de pago funkcias._

![Kampoj de API-chiavoj de Stripe kaj interŝaltilo de sandbox mode](/img/config/settings-payment-gateways.png)

Sur via Stripe dashboard, kliku sur **Developers** en la malalta digita de la malalta digita de la malalta digita de la malalta digita de la malalta digita de la malalta digita de la malalta digita de la malalta digita de la malalta digita de la malalta digita de la malalta digita de la malalta digita de la malalta digita de la malalta digita de la malalta digita de la malalta digita de la malalta digita de la malalta digita de la malalta digita de la malalta digita de la malalta digita de la malalta digita de la malalta digita de la malalta digita de la malalta digita de la malalta digita de la malalta digita de la malalta digita de la malalta digita de la malalta digita de la malalta digita de la malalta digita de la malalta digita de la malalta digita de la malalta digita de la malalta digita de la malalta digita de la malalta digita de la malalta digita de la malalta digita de la malalta digita de la malalta digita de la malalta digita de la malalta digita de la malalta digita de la malalta digita de la malalta digita de la malalta digita de la malalta digita de la malalta digita de la malalta digita de la malalta digita de la malalta digita de la malalta digita de la malalta digita de la malalta digita de la malalta digita de la malalta digita de la malalta digita de la malalta digita de la malalta digita de la malalta digita de la malalta digita de la malalta digita de la malalta digita de la malalta digita de la malalta digita de la malalta digita de la malalta digita de la malalta digita de la malalta digita de la malalta digita de la malalta digita de la malalta digita de la malalta digita de la malalta digita de la malalta digita de la malalta digita de la malalta digita de la malalta digita de la malalta digita de la malalta digita de la malalta digita de la malalta digita de la malalta digita de la malalta digita de la malalta digita de la malalta digita de la malalta digita de la malalta digita de la malalta digita de la malalta digita de la malalta digita de la malalta digita de la malalta digita de la malalta digita de la malalta digita de la malalta digita de la malalta digita de la malalta digita de la malalta digita de la malalta digita de la malalta digita de la malalta digita de la malalta digita de la malalta digita de la malalta digita de la malalta digita de la malalta digita de la malalta digita de la malalta digita de la malalta digita de la malalta digita de la malalta digita de la malalta digita de la malalta digita de la malalta digita de la malalta digita de la malalta digita de la malalta digita de la malalta digita de la malalta digita de la malalta digita de la malalta digita de la malalta digita de la malalta digita de la malalta digita

Vi povas uzi **Test Data** (testi, ĉu la integriĝo funkcias sur via produkcia sitio) aŭ ne. Por ŝanĝi tion, movu la interŝaltilon **Viewing test data**.

![Stripe Viewing test data toggle](/img/config/settings-payment-gateways.png)

Kopi la valoron el la kolono **Publishable key** kaj **Secret key**, el la kolono **Token** kaj atimi ĝin al la fieldoj de Ultimate Multisite Stripe Gateway. Tiam kliku por **Save Changes**.

![Stripe publishable and secret key values](/img/config/settings-payment-gateways.png)

![Pasting Stripe keys in Ultimate Multisite settings](/img/config/settings-payment-gateways.png)

## Konfigurado de Stripe Webhook {#setting-up-stripe-webhook}

Stripe sendas webhook eventojn, kiuj informas Ultimate Multisite ĉiam, kiam okazas evento sur **via stripe konto**.

Kliku sur **Developers** kaj tiam elektu la itemon **Webhooks** en la malaj menuj. Tiam sur la destra kliku sur **Add endpoint** *.*

![Stripe Webhooks page with Add endpoint button](/img/config/settings-payment-gateways.png)

Vi bezonas **Endpoint URL** *.* Ultimate Multisite generas la endpoint URL aŭtomate, kiun vi povas trovi tute en la fieldo **Webhook Listener URL** en la sekcio **Ultimate Multisite Stripe Gateway**_._

![Webhook Listener URL field in Stripe gateway settings](/img/config/settings-payment-gateways.png)

**Kopi** la endpoint URL kaj **atimi** ĝin al la fieldo **Endpoint URL** de Stripe.

![Pasting endpoint URL in Stripe webhook setup](/img/config/settings-payment-gateways.png)

Tiam vi elektas **Event** *.* Sub ĉi tiu opcio, vi nur bezonas kontroli la kutimon **Select all events** kaj kliki por **Add events**. Post tio kliku sur **Add Endpoint** por konservi la ŝanĝojn.

![Selecting all events and adding the Stripe endpoint](/img/config/settings-payment-gateways.png)

Ita estas ĝiaŭ, via integriĝo de pagoj per Stripe estas kompleta!
