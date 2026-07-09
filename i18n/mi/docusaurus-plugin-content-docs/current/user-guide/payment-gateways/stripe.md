---
title: Whakawhanainga Stripe
sidebar_position: 6
_i18n_hash: a73a808f5976fbabb54e2c9889334d00
---
# Whakawhanaungatanga me te Gateway o Stripe (v2) {#setting-up-the-stripe-gateway-v2}

_**Tohutohu WAIPA: Ko tēnei litanau e tino whakamahinga i Ultimate Multisite v2.x.**_

Ko te mea, he taea ana koe ki te ativa upaere pai waenga i au pito i te whakataki o te Stripe, Stripe Checkout, PayPal me Manual i te puta mai o ngā whakaritenga o te waiata (payment settings) o tātou. I tēnei litanau, ka whakaatu atu tātou i te mea he taea ai te whai wāhi ana ki **Stripe**.

## Whakawhanaungatanga Stripe {#enabling-stripe}

Kia whakawhanaunga i te Stripe mōna gateway o waiata e pātaki ana i runga i tō whenua (network), pono ki te **Ultimate Multisite > Settings > Payments** ā, whakaatu i te toggle (switch) i runga i te **Stripe** me te **Stripe Checkout** i te whakataki o ngā Active Payment Gateways.

![Whakawhanaungatanga Stripe i ngā gateway o waiata e pātaki ana](/img/config/settings-payment-gateways.png)

### Stripe vs Stripe Checkout: {#stripe-vs-stripe-checkout}

**Stripe:** Ko tēnei wahi e whakaatu i te wāhi ki te whiriwhiri te nambere o te credit card i roto i te checkout.

![Wāhi credit card inline i te checkout i runga i Stripe](/img/config/settings-payment-gateways.png)

**Stripe Checkout:** Ko tēnei wahi e whai whakaaro ki te whakawhiti te kōrero o te mea (customer) ki te puta mai o te Stripe Checkout page i roto i te checkout.

![Whakawhiti Stripe Checkout redirect page i te checkout](/img/config/settings-payment-gateways.png)

**Kia pahi i ngā API keys o tō Stripe**

I tōna whakatutuki, i roto i te mea he whakawhanaunga ana i te Stripe mōna gateway o waiata, ka taea e koe te whakamahi i ngā wāhi mō te **Stripe Publishable Key** me te **Stripe Secret Key**. Ko te mea, e taea ai koe te pahi ki tēnei mea i roto i te whakatū i tō account Stripe.

_**Tohutohu:** He taea ai koe te ativa i **Sandbox mode** mō te whakamārama ana ko he pēnei te mahi o te waiata._

![Wāhi API key o Stripe me Sandbox mode toggle](/img/config/settings-payment-gateways.png)

I tō dashboard o Stripe, whakatipu i **Developers** i te pito i te whakataki (top-right corner), ā, he **API Keys** i te menu i te tangata (left menu).

![Wāhi Developers o Stripe dashboard me API Keys](/img/config/settings-payment-gateways.png)

Kua taea e koe te whakamāhia **Test Data** (ko te whakamāhia mō te whakamātautanga kia whakaahua i te mahi o te whaiwhihi ki te wāhi production o koe) ahau, ahau ka taea hoki. Hei whakarē i tēnei mea, whakatika te toggle **Viewing test data**.

![Stripe Viewing test data toggle](/img/config/settings-payment-gateways.png)

Whakawatea te wāhi noa (value) mai i te **Publishable key** me te **Secret key**, mai i te kolomu **Token** ā, ka puta ake ki ngā faahi Stripe Gateway o Ultimate Multisite. Ka whakatika i te **Save Changes**.

![Stripe publishable and secret key values](/img/config/settings-payment-gateways.png)

![Pasting Stripe keys in Ultimate Multisite settings](/img/config/settings-payment-gateways.png)

## Whakawhanainga Stripe Webhook {#setting-up-stripe-webhook}

Ka tōnga i Stripe ngā webhook events (ngā pēpi whakaahu) ki te Ultimate Multisite ko te wāhi e whakahau ana i te mea e tūnga ana i runga i **koinei te account o koe i Stripe**.

Whakatika i **Developers** ā, he tino whaiaro i te item **Webhooks** i te menu pō. Ka puta ake ki te kanan i te **Add endpoint** *.*

![Stripe Webhooks page with Add endpoint button](/img/config/settings-payment-gateways.png)

Ka taea e koe te whakaingoa i he **Endpoint URL** *.* Ka whakamaoritia te Ultimate Multisite te Endpoint URL ko ka puta ake i te maha o ngā faahi i te whakatutuki i te kolomu **Webhook Listener URL** i te sampano **Ultimate Multisite Stripe Gateway**._._

![Webhook Listener URL field in Stripe gateway settings](/img/config/settings-payment-gateways.png)

Whakawatea te endpoint URL ko ka puta ake ki te faahi **Endpoint URL** o Stripe.

![Pasting endpoint URL in Stripe webhook setup](/img/config/settings-payment-gateways.png)

He mea nui te whaiaro i he **Event** *.* I roto i tēnei option, ka taea e koe te whakačaka i te bokoru **Select all events** ā, ka whakatika ki **Add events**. Ka puta ake i te klik **Add Endpoint** ko ka whakatutuki i ngā whakawhiti.

![Selecting all events and adding the Stripe endpoint](/img/config/settings-payment-gateways.png)

He, he, he, kawea mai! He pēke Stripe o koe he whakatō mai!
