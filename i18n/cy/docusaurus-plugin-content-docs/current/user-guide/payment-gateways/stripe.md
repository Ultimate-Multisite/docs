---
title: Cyflwyno Stripe
sidebar_position: 6
_i18n_hash: a73a808f5976fbabb54e2c9889334d00
---
# Ymddio'r Gweithredoedd Stripe (v2) {#setting-up-the-stripe-gateway-v2}

_**NOTIADOLIA CRYTID: Mae'r ail ddefnyddiol hwn yn cyfeiriad i Ultimate Multisite ffurf 2.x.**_

Gallwch chi gwneud cyflwyniad i'r pethau ymdrechion ar gyfer ystafell ymdrechion eich gweithredoedd: Stripe, Stripe Checkout, PayPal a Manwl. Yn y ail ddefnyddiol hwn, byddwn yn gweld sut i gysylltu â **Stripe**.

## Gofyn Stride {#enabling-stripe}

I'r gael Stripe fel weithrediad ymdrechion ar gyfer eich rheol, mynd i **Ultimate Multisite > Settings > Payments** a chwilio (tick) y cyfathrebu yn y cyfnod Active Payment Gateways yn y cyflwyniad o **Stripe** neu **Stripe Checkout**.

![Gofyn Stripe mewn weithrediad ymdrechion ar gyfer y rheol](/img/config/settings-payment-gateways.png)

### Stripe vs Stripe Checkout: {#stripe-vs-stripe-checkout}

**Stripe:** Mae'r ffordd hwn yn dangos lle i gynnwys rhif card cyflwrdd yn ystafell ymdrechion.

![Ffylch card cyflwrdd Stripe yn ystafell ymdrechion](/img/config/settings-payment-gateways.png)

**Stripe Checkout:** Mae'r ffordd hwn yn rediryddu'r cleient i wefan Stripe Checkout yn ystafell ymdrechion.

![Peth rediryddu Stripe Checkout yn ystafell ymdrechion](/img/config/settings-payment-gateways.png)

Gael eich cyfrannau API Stripe

Ar ôl cael Stripe fel weithrediad ymdrechion, byddwch yn angen i ddatblygu'r ffeiliau ar gyfer **Stripe Publishable Key** a **Stripe Secret Key**. Gallwch chi gael hyn gan ddefnyddio cyflwyniad i eich cyfrann Stripe.

_**Noti:** gallwch chi gwneud **Sandbox mode** i gweld os yw'r ffordd ymdrechion yn gweithio._

![Ffeiliau API Stripe a sandbox mode](/img/config/settings-payment-gateways.png)

Ar eich dashboard Stripe, chwilio ar **Developers** ar yr oer uchel, ac yna **API Keys** yn y menu lleol.

![Cyfnod Developers dashboard Stripe gyda API Keys](/img/config/settings-payment-gateways.png)

Gallai eich **Test Data** (i'r i'wyl testwch iddo gweithio'r cyfathrebu ar eich safle proddefionol) neu nid. Iechyddu hyn, twch y toggel **Viewing test data**.

![Stripe Viewing test data toggle](/img/config/settings-payment-gateways.png)

Copwch y gael o'r **Publishable key** a'r **Secret key**, o'r collinell **Token** a chwarae, a rhedeg yn y ffeiliau Stripe ar gyfer Ultimate Multisite. Yna cliwch i **Save Changes**.

![Stripe publishable and secret key values](/img/config/settings-payment-gateways.png)

![Pasting Stripe keys in Ultimate Multisite settings](/img/config/settings-payment-gateways.png)

## Rheoli Stripe Webhook {#setting-up-stripe-webhook}

Mae Stripe yn anfon evaintau webhook sy'n cyflwyno Ultimate Multisite unrhyw peth sydd ar ffurf ar eich **cyfathreg stripe**.

Cliwch ar **Developers** aethau i wybello'r item **Webhooks** yn y menu lleol. Yna ar y ochr ddefnyddwyr, cliwch ar **Add endpoint** *.*

![Stripe Webhooks page with Add endpoint button](/img/config/settings-payment-gateways.png)

Byddwch yn angen i'r **Endpoint URL** *.* Mae Ultimate Multisite yn cyfathri'r Endpoint URL yn awtomatig, a gallwch ei ddod o fewn isod y ffeiliau **Webhook Listener URL** yn y sefyllfa **Ultimate Multisite Stripe Gateway**._

![Webhook Listener URL field in Stripe gateway settings](/img/config/settings-payment-gateways.png)

Copwch y Endpoint URL a rhedeg i'r ffeiliau **Endpoint URL** ar Stripe.

![Pasting endpoint URL in Stripe webhook setup](/img/config/settings-payment-gateways.png)

Yna mae angen i wybello'r **Event** *.* Yn ôl y opsiwn hwn, byddwch yn angen i gweld y collinell **Select all events** a cliwch i **Add events**. Ar ôl hyn cliwch ar **Add Endpoint** i sicrhau'r newidiadau.

![Selecting all events and adding the Stripe endpoint](/img/config/settings-payment-gateways.png)

Mae'n ddigon, mae eich cyfathriad peidiad Stripe yn gwbl!
