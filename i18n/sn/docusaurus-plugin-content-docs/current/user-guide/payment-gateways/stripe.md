---
title: Kupanga Stripe
sidebar_position: 6
_i18n_hash: a73a808f5976fbabb54e2c9889334d00
---
# Kuita Kufamba ne Stripe Gateway (v2)

_**CHINARI CHINARI: Iriweiri iri rinore referera ku Ultimate Multisite version 2.x.**_

Kune zvinhu zvakawanda, unogona kuitanisa nzira dzirai dzakawanda dzehupenyu pamwe chete pa settings dzako dzehupenyu: Stripe, Stripe Checkout, PayPal uye Manual. Muirongo iri, tiri kuona sei kutanisa ne **Stripe**.

## Kuva NeKuti Stripe Ione {#enabling-stripe}

Kuti utange Stripe kubva mhando inogona kushandiswa dzehupenyu pamwe chete mu network yako, ndichida kuti uenda ku **Ultimate Multisite > Settings > Payments** uye utange (tick) toggle inotevera ne **Stripe** kana **Stripe Checkout** munzira ya Active Payment Gateways.

![Enabling Stripe in active payment gateways](/img/config/settings-payment-gateways.png)

### Stripe vs Stripe Checkout: {#stripe-vs-stripe-checkout}

**Stripe:** Iri shanduro rinonyanya rine chakanangwa (space) kuti uingire namba dze credit card nguva inozvikira checkout.

![Stripe inline credit card field during checkout](/img/config/settings-payment-gateways.png)

**Stripe Checkout:** Iri shanduro rinogona kunge kune kuratidza (redirect) mutundu wese wekudya ku Stripe Checkout page nguva inozvikira checkout.

![Stripe Checkout redirect page during checkout](/img/config/settings-payment-gateways.png)

Kuti uone API keys dzako dze Stripe, unofanira kutaura (populate) nzvimbo dzinotsanangurwa kuti **Stripe Publishable Key** uye **Stripe Secret Key**. Unogona kuita iyi nzira nekuita login mu account yako ya Stripe.

_**Chinhu:** Unga shandisa **Sandbox mode** kuti uone kuti mhando dzehupenyu inogona kushanda kana yakaiwa._

![Stripe API key fields and sandbox mode toggle](/img/config/settings-payment-gateways.png)

Pa dashboard yako ya Stripe, kutaura **Developers** pa chiviri chiri chine kuita (top-right corner), uye ndokuti **API Keys** munzira yakanaka (left menu).

![Stripe dashboard Developers section with API Keys](/img/config/settings-payment-gateways.png)

Unogona kana kuita **Test Data** (kuti kuti uone kuti integration inoratidza zvakanaka munzira yako yekuti inedarira munzira yako yekuti inedarira), kana usina. Kuti urambe uri pano, ndichida kuti upereke **Viewing test data** toggle.

![Stripe Viewing test data toggle](/img/config/settings-payment-gateways.png)

Chinjisa value yekuita munzira **Publishable key** uye **Secret key**, kubva mu column ya **Token** uye chinjisa pamwe mabhurangi (fields) ekuti Ultimate Multisite Stripe Gateway. Ndipo uchikumbira kuti uone kuti **Save Changes**.

![Stripe publishable and secret key values](/img/config/settings-payment-gateways.png)

![Pasting Stripe keys in Ultimate Multisite settings](/img/config/settings-payment-gateways.png)

## Kuita Webhook ya Stripe {#setting-up-stripe-webhook}

Stripe inenge inedarira webhook events kuti Ultimate Multisite inozivisa mazuva onozivisa zvinhu zvakawanda munzira yako yekuti inozivisa (your stripe account).

Chinjisa **Developers** uye ndipo chine chine **Webhooks** mu menu ya kumira. Ndipo pamwe munzira, chinjisa **Add endpoint** *.*

![Stripe Webhooks page with Add endpoint button](/img/config/settings-payment-gateways.png)

Utaura nemunhu anoda **Endpoint URL** *.* Ultimate Multisite inogona kuita iendpoint URL yakanaka, uye unogona kuona pamwe nefield ya **Webhook Listener URL** mu section ya **Ultimate Multisite Stripe Gateway**.

![Webhook Listener URL field in Stripe gateway settings](/img/config/settings-payment-gateways.png)

Chinjisa endpoint URL uye chinjisa pamwe munzira ya **Endpoint URL** ya Stripe.

![Pasting endpoint URL in Stripe webhook setup](/img/config/settings-payment-gateways.png)

Zvinotevera, unofanira kutenga **Event** *.* Pamwe neoption iye, unofanira kutaura (check) box ya **Select all events** uye chinjisa kuti **Add events**. Mushure, chinjisa **Add Endpoint** kuti uone zvinhu zakaipa.

![Selecting all events and adding the Stripe endpoint](/img/config/settings-payment-gateways.png)

Iyi ndiri yese, kune chine chako chekuti chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine chine ch
