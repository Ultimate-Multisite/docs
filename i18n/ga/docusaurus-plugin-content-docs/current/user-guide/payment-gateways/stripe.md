---
title: An t-aonadh Stripe
sidebar_position: 6
_i18n_hash: a73a808f5976fbabb54e2c9889334d00
---
# Setadh an Gaeatrach Stripe (v2) {#setting-up-the-stripe-gateway-v2}

_**NOTE CRUCIAL: Tá an curte seo ag cur ábhar Ultimate Multisite version 2.x.**_

Is féidir leat activaithe go leat na céad chéim de chuid meicmeais de chuid fáilteacht ar na stocht de fáilteacht: Stripe, Stripe Checkout, PayPal agus Manual. I an curte seo, beidh munaí linn a fheiceáil conas a bheith ag teacht ar **Stripe**.

## Fáilteadh le Stripe {#enabling-stripe}

Leat chun Stripe a bheith ag fáilteacht mar gaeatrach de chuid meicmeais ar do ngrú, cur isteach i **Ultimate Multisite > Settings > Payments** agus cur an t-toggle seo ag teacht le chéile le **Stripe** nó **Stripe Checkout** ar na seachtain Activating Payment Gateways.

![Enabling Stripe in active payment gateways](/img/config/settings-payment-gateways.png)

### Stripe vs Stripe Checkout: {#stripe-vs-stripe-checkout}

**Stripe:** Dara miontáil a chur i gceart card leat ag an t-checkout.

![Stripe inline credit card field during checkout](/img/config/settings-payment-gateways.png)

**Stripe Checkout:** Dara an custaiméir go cur isteach ar curte Stripe Checkout ag an t-checkout.

![Stripe Checkout redirect page during checkout](/img/config/settings-payment-gateways.png)

Gníomh a fháil le do chluaincheana API de Stripe

Agairm go leat nach bhfuil Stripe ag fáilteacht mar gaeatrach de chuid meicmeais, beidh tú ag cur i bhfíth na feidhmí ar **Stripe Publishable Key** agus **Stripe Secret Key**. Is féidir leat é seo a fháil ag logáil ina chuid account Stripe.

_**Note:** Leat é a activaithe **Sandbox mode** chun a fheiceáil an t-meicmeais ag eanglaith._

![Stripe API key fields and sandbox mode toggle](/img/config/settings-payment-gateways.png)

Ar do dashboard Stripe, cur i bhfíth **Developers** ar an chuid uile a bhunaithe ar an chuid uile, agus ansin **API Keys** ag an meán leat.

![Stripe dashboard Developers section with API Keys](/img/config/settings-payment-gateways.png)

Leat atá tú a bhealach a bhfáthach chun **Test Data** a úsáid (chun a shonadh an t-aontú ar do site prod), nó ní. Chun é seo a athrú, twitch an toggle **Viewing test data**.

![Stripe Viewing test data toggle](/img/config/settings-payment-gateways.png)

Copáil an chuid as an **Publishable key** agus an **Secret key**, ó chuid **Token** agus pasteáil é ar na feidhmachais Stripe Gateway de Ultimate Multisite. Ansin click chun **Save Changes**.

![Stripe publishable and secret key values](/img/config/settings-payment-gateways.png)

![Pasting Stripe keys in Ultimate Multisite settings](/img/config/settings-payment-gateways.png)

## Déanáil an Stripe Webhook {#setting-up-stripe-webhook}

Ag curtiaid Stripe webhook events a bheith ag curtuim Ultimate Multisite ag aon am áit a tháir ar **do account stripe**.

Click ar **Developers** agus ansin chun an t-aontú **Webhooks** a chur i bhfeicme ar an meán. Ansin ar an chuid oir, click ar **Add endpoint** *.*

![Stripe Webhooks page with Add endpoint button](/img/config/settings-payment-gateways.png)

Beidh tú ag teacht ar **Endpoint URL** *.* Ag curtiaid Ultimate Multisite an Endpoint URL a chur i bhfeicme, a bhfuil sé ag curtha ar an chuid oir leathas ar an t-aontú **Webhook Listener URL** i seastú **Ultimate Multisite Stripe Gateway**._

![Webhook Listener URL field in Stripe gateway settings](/img/config/settings-payment-gateways.png)

Copáil an Endpoint URL agus pasteáil é ar an feidhmachais Stripe **Endpoint URL**.

![Pasting endpoint URL in Stripe webhook setup](/img/config/settings-payment-gateways.png)

An t-aontú sin is é a chur i bhfeicme an **Event** *.* Ar an t-aontú seo, ag curtiaid, níl aon rud eile ag curtuim, deicimigh an **Select all events** agus click chun **Add events**. Tar é sin, click ar **Add Endpoint** chun na athrú a shonadh.

![Selecting all events and adding the Stripe endpoint](/img/config/settings-payment-gateways.png)

Tá sé seachaint, tá an cur chuigéad Stripe duit leat de bhaint!
