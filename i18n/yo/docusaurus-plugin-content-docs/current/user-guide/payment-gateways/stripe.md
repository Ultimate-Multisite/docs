---
title: Ṣíṣètò Stripe
sidebar_position: 6
_i18n_hash: a73a808f5976fbabb54e2c9889334d00
---
# Ṣíṣe Àgbékalẹ̀ Ẹnu-ọna Stripe (v2)

_**ÀKÍYÈSÍ PÀTÀKÌ: Àpilẹ̀kọ yìí tọ́ka sí Ultimate Multisite ẹ̀dà 2.x.**_

O lè muu ṣiṣẹ́ tó ọ̀nà isanwo mẹ́rin lórí ojú-ewé ètò isanwo wa: Stripe, Stripe Checkout, PayPal àti Afọwọ́ṣe. Nínú àpilẹ̀kọ yìí, a ó rí bí a ṣe lè ṣepọ̀ pẹ̀lú **Stripe**.

## Mímuu Stripe ṣiṣẹ́ {#enabling-stripe}

Láti muu Stripe ṣiṣẹ́ gẹ́gẹ́ bí ẹnu-ọna isanwo tó wà lórí nẹ́tíwọ́ọ̀kì rẹ, lọ sí **Ultimate Multisite > Ètò > Àwọn Isanwo** kí o sì samisi toggle lẹ́gbẹ̀ẹ́ **Stripe** tàbí **Stripe Checkout** ní abala Àwọn Ẹnu-ọna Isanwo Tó Ṣiṣẹ́.

![Mímuu Stripe ṣiṣẹ́ nínú àwọn ẹnu-ọna isanwo tó ṣiṣẹ́](/img/config/settings-payment-gateways.png)

### Stripe vs Stripe Checkout: {#stripe-vs-stripe-checkout}

**Stripe:** Ọ̀nà yìí yóò fi ààyè kan hàn láti fi nọ́ńbà káàdì kirẹ́dìtì sínú nígbà checkout.

![Ààyè káàdì kirẹ́dìtì Stripe inline nígbà checkout](/img/config/settings-payment-gateways.png)

**Stripe Checkout:** Ọ̀nà yìí yóò darí oníbàárà lọ sí ojú-ewé Stripe Checkout nígbà checkout.

![Ojú-ewé ìdarípadà Stripe Checkout nígbà checkout](/img/config/settings-payment-gateways.png)

Gbígba àwọn kọ́kọ́rọ́ Stripe API rẹ

Lẹ́yìn tí Stripe bá ti ṣiṣẹ́ gẹ́gẹ́ bí ẹnu-ọna isanwo, ìwọ yóò nílò láti kún àwọn pápá fún **Stripe Publishable Key** àti **Stripe Secret Key** . O lè gba èyí nípa wíwọlé sí account Stripe rẹ.

_**Àkíyèsí:** o lè muu **ìpo Sandbox** ṣiṣẹ́ láti dán wò bóyá ọ̀nà isanwo náà ń ṣiṣẹ́._

![Àwọn pápá kọ́kọ́rọ́ Stripe API àti toggle ìpo sandbox](/img/config/settings-payment-gateways.png)

Lórí dashboard Stripe rẹ, tẹ **Àwọn Olùgbéejáde** ní igun òkè-ọtún, àti lẹ́yìn náà **Àwọn Kọ́kọ́rọ́ API** nínú menu apá òsì.

![Abala Àwọn Olùgbéejáde ní dashboard Stripe pẹ̀lú Àwọn Kọ́kọ́rọ́ API](/img/config/settings-payment-gateways.png)

O lè lo **Dátà Ìdánwò** (láti dán wò bóyá ìṣepọ̀ náà ń ṣiṣẹ́ lórí site production rẹ) tàbí kí o má ṣe bẹ́ẹ̀. Láti yí èyí padà, yí toggle **Wíwo dátà ìdánwò**.

![Toggle Wíwo dátà ìdánwò Stripe](/img/config/settings-payment-gateways.png)

Da iye náà kọ láti **Publishable key** àti **Secret key** , láti kọ́lọ̀mù **Token** kí o sì lẹ̀ ẹ́ mọ́ àwọn pápá Ultimate Multisite Stripe Gateway. Lẹ́yìn náà tẹ **Fi Àwọn Ìyípadà Pamọ́**.

![Àwọn iye publishable àti secret key Stripe](/img/config/settings-payment-gateways.png)

![Lílẹ̀ àwọn kọ́kọ́rọ́ Stripe mọ́ ètò Ultimate Multisite](/img/config/settings-payment-gateways.png)

## Ṣíṣe àgbékalẹ̀ Stripe Webhook {#setting-up-stripe-webhook}

Stripe ń fi àwọn ìṣẹ̀lẹ̀ webhook ránṣẹ́ tí ń fi tó Ultimate Multisite létí nígbàkigbà tí ìṣẹ̀lẹ̀ kan bá ṣẹlẹ̀ lórí **account stripe rẹ**.

Tẹ **Àwọn Olùgbéejáde** lẹ́yìn náà yan ohun kan **Webhooks** nínú menu apá òsì. Lẹ́yìn náà ní apá ọ̀tún tẹ **Fi endpoint kún** *.*

![Ojú-ewé Stripe Webhooks pẹ̀lú bọ́tìnì Fi endpoint kún](/img/config/settings-payment-gateways.png)

Ìwọ yóò nílò **Endpoint URL** *.* Ultimate Multisite máa ń ṣe àgbéjáde endpoint URL fúnra rẹ, èyí tí o lè rí ní ìsàlẹ̀ gan-an pápá **Webhook Listener URL** nínú abala **Ultimate Multisite Stripe Gateway**_._

![Pápá Webhook Listener URL nínú ètò ẹnu-ọna Stripe](/img/config/settings-payment-gateways.png)

**Daakọ** endpoint URL náà kí o sì **lẹ̀ ẹ́ mọ́** pápá **Endpoint URL** ní Stripe.

![Lílẹ̀ endpoint URL mọ́ àgbékalẹ̀ Stripe webhook](/img/config/settings-payment-gateways.png)

Ohun tó kàn ni láti yan **Ìṣẹ̀lẹ̀** *.* Lábẹ́ aṣàyàn yìí, o kan nílò láti ṣàyẹ̀wò àpótí **Yan gbogbo àwọn ìṣẹ̀lẹ̀** kí o sì tẹ **Fi àwọn ìṣẹ̀lẹ̀ kún**. Lẹ́yìn ìyẹn tẹ **Fi Endpoint kún** láti fi àwọn ìyípadà pamọ́.

![Yíyan gbogbo àwọn ìṣẹ̀lẹ̀ àti fífi Stripe endpoint kún](/img/config/settings-payment-gateways.png)

Ìyẹn ni, ìṣepọ̀ isanwo Stripe rẹ ti pé!
