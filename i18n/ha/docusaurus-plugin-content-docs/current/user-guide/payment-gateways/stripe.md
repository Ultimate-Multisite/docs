---
title: Kafa Stripe
sidebar_position: 6
_i18n_hash: a73a808f5976fbabb54e2c9889334d00
---
# Shiga Stripe Gateway (v2)

_**MUHIMMANA MA'ALAKA: Wannan makala ya danganta Ultimate Multisite versiyau 2.x.**_

Za ka iya samar da hanyoyi huɗu na karɓar kuɗi a shafin tsarin kuɗinmu: Stripe, Stripe Checkout, PayPal da Manual. A wannan makalan, za mu gani yadda ake haɗawa da **Stripe**.

## Shiga Stripe {#enabling-stripe}

Don ƙarfafa Stripe a matsayin hanyar karɓar kuɗi da ke nan a cikin shafin ka, tafiya zuwa **Ultimate Multisite > Settings > Payments** kuma ka danna toggle (wanda ke nuna) da ke kusa da **Stripe** ko **Stripe Checkout** a sashi na Active Payment Gateways.

![Shiga Stripe a hanyoyin karɓar kuɗi masu aiki](/img/config/settings-payment-gateways.png)

### Stripe vs Stripe Checkout: {#stripe-vs-stripe-checkout}

**Stripe:** Wannan hanya za ta nuna wuri don shigar lambar katin kuɗi bayan an fara sayarwa (checkout).

![Wurin katin kuɗin Stripe a lokacin sayarwa](/img/config/settings-payment-gateways.png)

**Stripe Checkout:** Wannan hanya za ta canza abokin ciniki zuwa shafin Stripe Checkout a lokacin sayarwa.

![Shigar Stripe Checkout wajen sayarwa](/img/config/settings-payment-gateways.png)

Samun kunci API na Stripe

Bayan an ƙarfafa Stripe a matsayin hanyar karɓar kuɗi, za ka buƙaci cika makoron don **Stripe Publishable Key** da **Stripe Secret Key**. Za ka iya samun su ta hanyar shiga asusunka na Stripe.

_**Gargaɗi:** za ka iya ƙarfafa **Sandbox mode** don gwada idan hanyar karɓar kuɗin tana aiki._

![Makoron kunci API na Stripe da Sandbox mode toggle](/img/config/settings-payment-gateways.png)

A dashboard ɗinka na Stripe, danna **Developers** a ƙasa yana kan wajen kowane, sannan ka danna **API Keys** a cikin menu na ƙasa.

![Sashi na Developers a dashboard na Stripe da API Keys](/img/config/settings-payment-gateways.png)

Kuna za amfani da za'ura. Kuna iya ka yi amfani da **Test Data** (don yin tsari don bincike idan haɗin gona yana aiki a wajen wurin aiki na ku) ko ba ka yi. Don canza wannan, kawai shiga cikin toggle na **Viewing test data**.

![Stripe Viewing test data toggle](/img/config/settings-payment-gateways.png)

Kopi ƙima daga **Publishable key** da **Secret key**, daga sashi na **Token** kuma ka dabba shi a kan makamakin Stripe Gateway na Ultimate Multisite. Sannan ka danna don **Save Changes**.

![Stripe publishable and secret key values](/img/config/settings-payment-gateways.png)

![Pasting Stripe keys in Ultimate Multisite settings](/img/config/settings-payment-gateways.png)

## Shigar Stripe Webhook {#setting-up-stripe-webhook}

Stripe yana aiko wa hotun webhook (webhook events) wanda ke sanin Ultimate Multisite duk lokacin da wani abu ya faru a **kaunanki na stripe**.

Danna **Developers** sannan ka zaɓi abin da ake kira **Webhooks** a menu na ƙasa. Sannan a kan gefen hagu danna **Add endpoint** *.*

![Stripe Webhooks page with Add endpoint button](/img/config/settings-payment-gateways.png)

Za ka buƙaci **Endpoint URL** *.* Ultimate Multisite ya samar da Endpoint URL ne kai tsaye wanda za ka iya samunsa a ƙasa na sashi na **Webhook Listener URL** a cikin sashi na **Ultimate Multisite Stripe Gateway**._

![Webhook Listener URL field in Stripe gateway settings](/img/config/settings-payment-gateways.png)

Ka **kopi** Endpoint URL kuma **dabba shi** a kan sashi na **Endpoint URL** na Stripe.

![Pasting endpoint URL in Stripe webhook setup](/img/config/settings-payment-gateways.png)

Na gaba, dole ne ka zaɓi wani **Event** *.* A ƙaramin wannan zaɓin, kana buƙatar kawai a duba babban haske na **Select all events** kuma ka danna don **Add events**. Bayan haka danna **Add Endpoint** don a tsara canje-canje.

![Selecting all events and adding the Stripe endpoint](/img/config/settings-payment-gateways.png)

Wannan shi ne, shigarwar biyan ku ta Stripe ta kammala!
