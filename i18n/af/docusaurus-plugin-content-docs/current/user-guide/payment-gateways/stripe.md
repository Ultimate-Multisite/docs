---
title: Installeer Stripe
sidebar_position: 6
_i18n_hash: a73a808f5976fbabb54e2c9889334d00
---
# Opstel van die Stripe Gateway (v2) {#setting-up-the-stripe-gateway-v2}

_**BELANGRIKIEKE OPMERKING: Hierdie artikel verwys na Ultimate Multisite weergawe 2.x.**_

Jy kan tot vier betalingsmetodes op ons betalingsinstellingsblad aktiveer: Stripe, Stripe Checkout, PayPal en Handmatig. In hierdie artikel sal ons kyk hoe om te integreer met **Stripe**.

## Aktivering van Stripe {#enabling-stripe}

Om Stripe as 'n beskikbare betalingshek op jou netwerk te aktiveer, gaan na **Ultimate Multisite > Settings > Payments** en merk die omskakelaar langs **Stripe** of **Stripe Checkout** aan in die Aktiewe Betalingshekke afdeling.

![Enabling Stripe in active payment gateways](/img/config/settings-payment-gateways.png)

### Stripe teenoor Stripe Checkout: {#stripe-vs-stripe-checkout}

**Stripe:** Hierdie metode sal 'n plek wys om die kredietkaartnommer tydens die afrekening in te voer.

![Stripe inline credit card field during checkout](/img/config/settings-payment-gateways.png)

**Stripe Checkout:** Hierdie metode sal die kliënt na 'n Stripe Checkout-blad omdirigeer tydens die afrekening.

![Stripe Checkout redirect page during checkout](/img/config/settings-payment-gateways.png)

Jou Stripe API-sleutels verkry

Sodra Stripe as 'n betalingshek geaktiveer is, sal jy die velde vir die **Stripe Publishable Key** en **Stripe Secret Key** moet invul. Jy kan dit kry deur in jou Stripe-rekening aan te meld.

_**Let wel:** jy kan **Sandbox mode** aktiveer om te toets of die betalingsmetode werk._

![Stripe API key fields and sandbox mode toggle](/img/config/settings-payment-gateways.png)

Op jou Stripe-dashboard, klik op **Developers** in die boonste reghoek, en dan op **API Keys** in die linkermenu.

![Stripe dashboard Developers section with API Keys](/img/config/settings-payment-gateways.png)

Jy kan óf **Test Data** gebruik (om te toets of die integrasie op jou produksie-webwerf werk) óf nie. Om dit te verander, skakel die **Viewing test data** omskakelaar.

![Stripe Viewing test data toggle](/img/config/settings-payment-gateways.png)

Kopieer die waarde van die **Publishable key** en **Secret key**, uit die **Token** kolom en plak dit in die Ultimate Multisite Stripe Gateway velde. Klik dan op **Save Changes**.

![Stripe publishable and secret key values](/img/config/settings-payment-gateways.png)

![Pasting Stripe keys in Ultimate Multisite settings](/img/config/settings-payment-gateways.png)

## Opstel van Stripe Webhook {#setting-up-stripe-webhook}

Stripe stuur webhook-gebeurtenisse wat Ultimate Multisite laat weet enige keer wanneer 'n gebeurtenis op **jou Stripe-rekening** plaasvind.

Klik op **Developers** en kies dan die item **Webhooks** in die linkermenu. Klik dan aan die regterkant op **Add endpoint** *.*

![Stripe Webhooks page with Add endpoint button](/img/config/settings-payment-gateways.png)

Jy sal 'n **Endpoint URL** nodig hê *.* Ultimate Multisite genereer outomaties die endpoint URL wat jy reg onder die **Webhook Listener URL** veld in die **Ultimate Multisite Stripe Gateway** afdeling kan vind_._

![Webhook Listener URL field in Stripe gateway settings](/img/config/settings-payment-gateways.png)

**Kopieer** die endpoint URL en **plak** dit in die Stripe **Endpoint URL** veld.

![Pasting endpoint URL in Stripe webhook setup](/img/config/settings-payment-gateways.png)

Volgende is om 'n **Event** te kies *.* Onder hierdie opsie, moet jy bloot die **Select all events**-boks aankruis en op **Add events** klik. Daarna klik jy op **Add Endpoint** om die veranderinge te stoor.

![Selecting all events and adding the Stripe endpoint](/img/config/settings-payment-gateways.png)

Dit is dit, jou Stripe-betalingsintegrasie is voltooi!
