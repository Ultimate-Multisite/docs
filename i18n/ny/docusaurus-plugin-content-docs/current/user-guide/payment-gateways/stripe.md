---
title: Kufunga Stripe
sidebar_position: 6
_i18n_hash: a73a808f5976fbabb54e2c9889334d00
---
# Kufuna Mwayi wa Stripe (v2)

_**KUFUNDI CHONJE: Izirozi izi zikufandra na Ultimate Multisite version 2.x.**_

Mungathe kukhazikira njira zikuphasa mwayi ku kwawo kwa chitsogo cha mwayi wanu: Stripe, Stripe Checkout, PayPal ndi Manual. M'mwayi wamba uliyi ndi uliyi mudzindikira m'mwayi wamba wathu, muthandizira kuti muwone kudziwitsa n'Stripe.

## Kufuna Kukhazikira Stripe {#enabling-stripe}

Kuti utseke Stripe mwayi wanu wosonyeza mwayi wopasa kwa wanu, ndi ulimbikire **Ultimate Multisite > Settings > Payments** ndikupatsa chithunzi (tick) kusonyeza n'Stripe kapena Stripe Checkout ku msonkhano wa Active Payment Gateways.

![Kufuna Kukhazikira Stripe mwayi wopasa](/img/config/settings-payment-gateways.png)

### Stripe vs Stripe Checkout: {#stripe-vs-stripe-checkout}

**Stripe:** Njira iyi idzindikira malo kuti mwayi wopasa (credit card number) uonde m'mwayi wosonyeza (checkout).

![Mwayi wopasa wa Stripe m'mwayi wosonyeza](/img/config/settings-payment-gateways.png)

**Stripe Checkout:** Njira iyi idzindikira wamene uonde pa Stripe Checkout page m'mwayi wosonyeza (checkout).

![Mwayi wopasa wa Stripe Checkout m'mwayi wosonyeza](/img/config/settings-payment-gateways.png)

Kupatsa API keys za Stripe

Poyamba Stripe ikukhazikira mwayi wopasa, mukufuna kulemba malo kwa **Stripe Publishable Key** ndi **Stripe Secret Key**. Mungathe kupata izi monga mukupeza kuti muli m'konto wanu wa Stripe.

_**Kufunsa:** mungatseke Sandbox mode kuti muwone ngati njira ya mwayi ikukonza.**_

![Malo a API key za Stripe ndi sandbox mode toggle](/img/config/settings-payment-gateways.png)

Pa dashboard yanu ya Stripe, chonde kulemba **Developers** ku m'malo wopanda m'malo (top-right corner), ndipo pano kulemba **API Keys** ku msonkhano wa m'malo wopanda m'malo (left menu).

![Msonkhano wa Developers pa dashboard ya Stripe ndi API Keys](/img/config/settings-payment-gateways.png)

Kodi muli muli utendeka **Test Data** (kuti mutengo kuti muwone kungakhale integration ikufuna kutendeka pa site yanu ya production) kapena osati. Kuti utenge, twitche toggle ya **Viewing test data**.

![Stripe Viewing test data toggle](/img/config/settings-payment-gateways.png)

Kopya muli muli wa **Publishable key** na **Secret key**, ku muli wa column ya **Token** ndi kopyala pa fields za Ultimate Multisite Stripe Gateway. Kodi muli woneza kuti muchezi **Save Changes**.

![Stripe publishable and secret key values](/img/config/settings-payment-gateways.png)

![Pasting Stripe keys in Ultimate Multisite settings](/img/config/settings-payment-gateways.png)

## Kufotokoza Stripe Webhook {#setting-up-stripe-webhook}

Stripe imapeto webhook events zomwe zimaphatikizira Ultimate Multisite nthawi yomwe kuli kukhala chinthu kumene kuli pa **stripe account** ya inu.

Kuti muli ndi **Developers** ndipo muli woneza item ya **Webhooks** m'malo wa lero. Kodi muli woneza kuti **Add endpoint** pamwamba. *.*

![Stripe Webhooks page with Add endpoint button](/img/config/settings-payment-gateways.png)

Muli ndi **Endpoint URL** *.* Ultimate Multisite imapanga Endpoint URL yomwe muli woneza kuwona m'malo wa lero pa field ya **Webhook Listener URL** m'malo wa Ultimate Multisite Stripe Gateway_._

![Webhook Listener URL field in Stripe gateway settings](/img/config/settings-payment-gateways.png)

Kopya Endpoint URL ndipo **kopyala** pa field ya Stripe **Endpoint URL**.

![Pasting endpoint URL in Stripe webhook setup](/img/config/settings-payment-gateways.png)

Mmodzi ndi kukhonza **Event** *.* M'malo muli, muli woneza kuti muli woneza box ya **Select all events** ndipo muli woneza kuti **Add events**. Ndipo muli woneza kuti **Add Endpoint** kuti mutenge changa.

![Selecting all events and adding the Stripe endpoint](/img/config/settings-payment-gateways.png)

Kodi, ndipo! Kuliye kopeza, integration ya Stripe imekamilika!
