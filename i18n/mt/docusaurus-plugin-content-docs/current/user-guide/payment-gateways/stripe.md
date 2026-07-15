---
title: Aħjar il-Stripe
sidebar_position: 6
_i18n_hash: a73a808f5976fbabb54e2c9889334d00
---
# Ażżawil tal-Stripe (v2)

_**NOTA IMPORTANTI: Danitra tista'dha l-versjoni 2.x ta Ultimate Multisite.**_

Tista'k attivaw ukoll quattro metodi di pagamenti fuq pajla impostazzjonijiet tat-pagamenti tagħna: Stripe, Stripe Checkout, PayPal u Manuali. F'dinja, nista' nfermu kif nistabbilixhom ma' **Stripe**.

## Attivazzjoni tal-Stripe {#enabling-stripe}

Biex tistabbilixxi l-Stripe bħala gateway ta pagamenti disponibbli fuq la-rete tiegħek, għandi tmur għand **Ultimate Multisite > Settings > Payments** u tagħmel il-tick fuq il-toggle li jikkontrolla l-Stripe jew Stripe Checkout f'sezzjoni Active Payment Gateways.

![Attivazzjoni tal-Stripe fil-gateway ta pagamenti attivi](/img/config/settings-payment-gateways.png)

### Stripe vs Stripe Checkout: {#stripe-vs-stripe-checkout}

**Stripe:** Metodu huwa li juri spazzju biex tinsert il-numru tal-kartetta di kreditu klawża fl-checkout.

![Campo kartetta di kreditu inline ta'Stripe klawża fl-checkout](/img/config/settings-payment-gateways.png)

**Stripe Checkout:** Metodu huwa li jreidirek il-customer għal pajja Stripe Checkout klawża fl-checkout.

![Pajja reidiretta tal-Stripe Checkout klawża fl-checkout](/img/config/settings-payment-gateways.png)

Għandu t-tlob l-API keys ta'Stripe

Wara li tistabbilixxi l-Stripe bħala gateway ta pagamenti, għandek ti riempili l-field għall-**Stripe Publishable Key** u **Stripe Secret Key**. Tista' tgħandu dan billi tmur għal loggi-in fil-account tiegħek ta'Stripe.

_**Nota:** tista' tagħmel attivazzjoni tal-**Sandbox mode** biex ti testi jekk il-metodu ta pagament qed jaħdem.**_

![Field API key ta'Stripe u toggle tal-sandbox mode](/img/config/settings-payment-gateways.png)

Fuq dashboard ta'Stripe tiegħek, għalqa fuq **Developers** fil-kunsill ta'l-top-destra, u poi **API Keys** f'il-menu sejjeb.

![Sezzjoni Developers tal-dashboard ta'Stripe ma' API Keys](/img/config/settings-payment-gateways.png)

Tista' puoi ista **Test Data** (għax tqesser se l-integrà funziona fuq il sito prodottu tiegħek) jew la. Per li tforzi xi ħaġa, twitch il toggle **Viewing test data**.

![Stripe Viewing test data toggle](/img/config/settings-payment-gateways.png)

Kopi l-valur mill-**Publishable key** u **Secret key**, mill-kolonna **Token** u incollalo fil-campi Stripe Gateway ta Ultimate Multisite. Poi clicka għal **Save Changes**.

![Stripe publishable and secret key values](/img/config/settings-payment-gateways.png)

![Pasting Stripe keys in Ultimate Multisite settings](/img/config/settings-payment-gateways.png)

## Aħjar il-Webhook ta Stripe {#setting-up-stripe-webhook}

Stripe trabbil event ta webhook li jgħinu l-Ultimate Multisite ogni volta li passiert xi ħaġa fuq **kont attivar tiegħek fuq stripe**.

Clicka fuq **Developers** u poi għal opzjoni **Webhooks** fil-menu sejn. Poi fl-mejn, clicka fuq **Add endpoint** *.*

![Stripe Webhooks page with Add endpoint button](/img/config/settings-payment-gateways.png)

Tidħselha biex tkun għandek **Endpoint URL** *.* Ultimate Multisite jġenera awtomatic l-endpoint URL li tista' tgħallu qudd ta' l-campiu **Webhook Listener URL** fil-sezzjoni **Ultimate Multisite Stripe Gateway**_._

![Webhook Listener URL field in Stripe gateway settings](/img/config/settings-payment-gateways.png)

**Kopi** l-endpoint URL u **incollalo** fil-campiu **Endpoint URL** ta' Stripe.

![Pasting endpoint URL in Stripe webhook setup](/img/config/settings-payment-gateways.png)

Il-pass sevju huwa li tsegw l-**Event** *.* Ta'd din, għandek biex tsegwi l-box **Select all events** u clicka għal **Add events**. Wara dan, clicka fuq **Add Endpoint** biex ti savi l-għażliet.

![Selecting all events and adding the Stripe endpoint](/img/config/settings-payment-gateways.png)

Il-integrà tal-pagamenti ta' Stripe għal WordPress jkun kumplitu!
