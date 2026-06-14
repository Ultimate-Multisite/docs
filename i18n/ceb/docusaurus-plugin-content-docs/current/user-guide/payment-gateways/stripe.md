---
title: Pag-set up sa Stripe
sidebar_position: 6
_i18n_hash: a73a808f5976fbabb54e2c9889334d00
---
# Pag-set Up sa Stripe Gateway (v2)

_**MAHINONG PAHIBALO: Kini nga article nagrefer sa Ultimate Multisite version 2.x.**_

Mahimo nimong i-activate hangtod upat ka pamaagi sa pagbayad sa among payment settings page: Stripe, Stripe Checkout, PayPal ug Manual. Niining article, makita nato unsaon ang pag-integrate gamit ang **Stripe**.

## Pag-enable sa Stripe

Aron ma-enable ang Stripe isip available nga payment gateway sa inyong network, pumunta sa **Ultimate Multisite > Settings > Payments** ug i-tick ang toggle tupad sa **Stripe** o **Stripe Checkout** sa Active Payment Gateways section.

![Enabling Stripe in active payment gateways](/img/config/settings-payment-gateways.png)

### Stripe vs Stripe Checkout:

**Stripe:** Kini nga pamaagi magpakita og lugar para i-insert ang credit card number panahon sa checkout.

![Stripe inline credit card field during checkout](/img/config/settings-payment-gateways.png)

**Stripe Checkout:** Kini nga pamaagi mag-redirect sa customer ngadto sa Stripe Checkout page panahon sa checkout.

![Stripe Checkout redirect page during checkout](/img/config/settings-payment-gateways.png)

Pagkuha sa inyong Stripe API keys

Human ma-enable ang Stripe isip payment gateway, kinahanglan ninyong pun-on ang mga field para sa **Stripe Publishable Key** ug **Stripe Secret Key**. Mahimo ninyo kini makuha pinaagi sa pag-login sa inyong Stripe account.

_**Nota:** mahimo nimong i-activate ang **Sandbox mode** aron masulayi kung nagtrabaho ba ang pamaagi sa pagbayad._

![Stripe API key fields and sandbox mode toggle](/img/config/settings-payment-gateways.png)

Sa inyong Stripe dashboard, i-click ang **Developers** sa top-right corner, ug unya ang **API Keys** sa left menu.

![Stripe dashboard Developers section with API Keys](/img/config/settings-payment-gateways.png)

Pwede nimo gamiton ang **Test Data** (para masulayi kung nagtrabaho ba ang integration sa inyong production site) o dili. Aron usbon kini, i-twitch lang ang toggle nga **Viewing test data**.

![Stripe Viewing test data toggle](/img/config/settings-payment-gateways.png)

Kopyaha ang value gikan sa **Publishable key** ug **Secret key**, gikan sa column nga **Token** ug i-paste kini sa mga field sa Ultimate Multisite Stripe Gateway. Unya i-click para **Save Changes**.

![Stripe publishable and secret key values](/img/config/settings-payment-gateways.png)

![Pasting Stripe keys in Ultimate Multisite settings](/img/config/settings-payment-gateways.png)

## Pag-set up sa Stripe Webhook

Nagpadala ang Stripe og webhook events nga magpahibalo sa Ultimate Multisite kanunay kung adunay mahitabo sa **iyong stripe account**.

I-click ang **Developers** ug unya pilia ang item nga **Webhooks** sa left menu. Unya sa right side i-click ang **Add endpoint** *.

![Stripe Webhooks page with Add endpoint button](/img/config/settings-payment-gateways.png)

Kinahanglan nimo og usa ka **Endpoint URL** *. Ang Ultimate Multisite awtomatikong maghimo og endpoint URL nga makita nimo sa ubos sa field nga **Webhook Listener URL** sa seksyon sa **Ultimate Multisite Stripe Gateway**._

![Webhook Listener URL field in Stripe gateway settings](/img/config/settings-payment-gateways.png)

**Kopyaha** ang endpoint URL ug **i-paste** kini sa field nga **Endpoint URL** sa Stripe.

![Pasting endpoint URL in Stripe webhook setup](/img/config/settings-payment-gateways.png)

Sunod mao ang pagpili og usa ka **Event** *. Ubos niini, kinahanglan nimo lang i-check ang box nga **Select all events** ug i-click para sa **Add events**. Human nato kini i-click ang **Add Endpoint** aron ma-save ang mga kausaban.

![Selecting all events and adding the Stripe endpoint](/img/config/settings-payment-gateways.png)

Maayo na! Ang imong Stripe payment integration kay kompleto na!
