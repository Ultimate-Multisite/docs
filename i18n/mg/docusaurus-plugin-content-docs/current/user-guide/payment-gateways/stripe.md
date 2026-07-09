---
title: Fanomanana ny Stripe
sidebar_position: 6
_i18n_hash: a73a808f5976fbabb54e2c9889334d00
---
# Fanamboana ny Gateway Stripe (v2) {#setting-up-the-stripe-gateway-v2}

_**FANAMARI-MANA: Ity lahatsoratra ity dia manondro ny Ultimate Multisite version 2.x.**_

Afaka mampandeha fomba fandoavam-bola hatramin'ny efatra amin'ireo fomba fandoavam-bola azo atao ao amin'ny pejy fandrindrana fandoavam-bola (payment settings) dia Stripe, Stripe Checkout, PayPal ary Manokana. Amin'ity lahatsoratra ity, ho jerena ny fomba hampifandraisana amin'ny **Stripe**.

## Famahana ny Stripe {#enabling-stripe}

Mba hanombohana ny Stripe ho fitaovana fandoavam-bola azo ampiasaina eo amin'ny tambajotranareo, dia mandehin'ny **Ultimate Multisite > Settings > Payments** ary tsindrio ilay toggle eo anilany hoe **Stripe** na **Stripe Checkout** ao amin'ny faritra Active Payment Gateways.

![Famahana ny Stripe ao amin'ny fitaovana fandoavam-bola mavitrika](/img/config/settings-payment-gateways.png)

### Stripe vs Stripe Checkout: {#stripe-vs-stripe-checkout}

**Stripe:** Ity fomba ity dia haneho toerana ahafahanao manampy ny laharan-tarika (credit card number) mandritra ny famakiana (checkout).

![Fandrefesana laharan-tarika anaty checkout amin'ny alalan'ny Stripe](/img/config/settings-payment-gateways.png)

**Stripe Checkout:** Ity fomba ity dia handefitra ny mpanjifa mankany amin'ny pejy Stripe Checkout mandritra ny famakiana (checkout).

![Pejy fandefasana an'ny Stripe Checkout mandritra ny checkout](/img/config/settings-payment-gateways.png)

Fanomezana ireo API keys an'ny Stripe

Rehefa voafahana ny Stripe ho gateway fandoavam-bola, dia mila mameno ireo toerana ho an'ny **Stripe Publishable Key** sy **Stripe Secret Key** ianao. Afaka mahazo izany amin'ny alalan'ny fidirana ao amin'ny kaontinao Stripe.

_**Fanamarihana:** afaka mampandeha ny **Sandbox mode** ianao mba hanandratana raha miasa tsara ny fomba fandoavam-bola.**_

![Toerana API key an'ny Stripe sy ny toggle sandbox mode](/img/config/settings-payment-gateways.png)

Ao amin'ny dashboard an'ny Stripe, tsindrio **Developers** eo amin'ny zoro ambony any havia, ary avy eo **API Keys** ao amin'ny menio anaty menio havia.

![Faritra Developers ao amin'ny dashboard an'ny Stripe miaraka amin'ny API Keys](/img/config/settings-payment-gateways.png)

Mba afaka ny **Test Data** (mba hanamarina raha miasa tsara amin'ny toerana fampandrosoana anareo izany) na tsy hampiasa azy ianao. Mba hanovana izany, tsindrio ny toggle hoe **Viewing test data**.

![Stripe Viewing test data toggle](/img/config/settings-payment-gateways.png)

Ataovy ao amin'ny **Publishable key** sy **Secret key**, avy ao amin'ilay lafiny Token ary apetraho eo amin'ny sehatry ny Stripe Gateway an'i Ultimate Multisite. Avy eo dia tsindrio mba **Save Changes**.

![Stripe publishable and secret key values](/img/config/settings-payment-gateways.png)

![Pasting Stripe keys in Ultimate Multisite settings](/img/config/settings-payment-gateways.png)

## Fametrahana Webhook an'ny Stripe {#setting-up-stripe-webhook}

Ny webhook dia alefa avy amin'ny Stripe izay manambara ny Ultimate Multisite rehefa misy zava-nitranga eo amin'ny **kaontinao ao amin'ny stripe**.

Tsindrio ny **Developers** ary safidio ilay fizarana **Webhooks** ao amin'ny menio anaty menio. Avy eo, eo an-kanan-tselany dia tsindrio hoe **Add endpoint** (*.*).

![Stripe Webhooks page with Add endpoint button](/img/config/settings-payment-gateways.png)

Ilainao ny **Endpoint URL** (*.*). Ny Ultimate Multisite dia mamorona ny Endpoint URL ho anao ho azy izay hita eo ambanin'ny lafiny hoe **Webhook Listener URL** ao amin'ny faritra **Ultimate Multisite Stripe Gateway**._

![Webhook Listener URL field in Stripe gateway settings](/img/config/settings-payment-gateways.png)

**Ataovy** ny endpoint URL ary **apetraho** eo amin'ilay lafiny hoe **Endpoint URL** an'ny Stripe.

![Pasting endpoint URL in Stripe webhook setup](/img/config/settings-payment-gateways.png)

Avy eo dia safidio ny **Event** (*.*). Eo ambanin'ity safidy ity, mila manamarina fotsiny ianao ny bokotra hoe **Select all events** ary tsindrio mba **Add events**. Aorian'izay dia tsindrio **Add Endpoint** mba hitahirizana ny fanovana.

![Selecting all events and adding the Stripe endpoint](/img/config/settings-payment-gateways.png)

Izany no fotsiny, vita ny fampidirana famatsiana an'ny Stripe anao!
