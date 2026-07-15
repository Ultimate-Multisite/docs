---
title: Stripe se pealt
sidebar_position: 6
_i18n_hash: a73a808f5976fbabb54e2c9889334d00
---
# Stripe Vebliuti (v2) konfiguratsioonide seadistamine

_**TÄHTIS NOTE: See artikli viitab Ultimate Multisite versioonile 2.x.**_

Te saate aktiveerida kuni nelja maksutrimme makseasetustes: Stripe, Stripe Checkout, PayPal ja Manuaalne. Selle artiklis näeme, kuidas **Stripe'iga** integreerida.

## Stripe aktiveerimine {#enabling-stripe}

Et aktivere Stripe kasutamata maksukättesaadavaks teie võrku, külastage **Ultimate Multisite > Settings > Payments** ja lülitage sisse (tick) lühendi kõrval **Stripe** või **Stripe Checkout** Active Payment Gateways - osas.

![Stripe aktiveerimine aktiivset maksukättesaadavaks](/img/config/settings-payment-gateways.png)

### Stripe vs Stripe Checkout: {#stripe-vs-stripe-checkout}

**Stripe:** See meetod näitab ruumi, kus saab sisestada krediitkaarti numbril ostukogemuse ajal.

![Stripe inline krediitkaardi väljend ostukogemuse ajal](/img/config/settings-payment-gateways.png)

**Stripe Checkout:** See meetod suunab klienta Stripe Checkout lehel ostukogemuse ajal.

![Stripe Checkout suunajalehe ostukogemuse ajal](/img/config/settings-payment-gateways.png)

### Stripe API võtmete saamine {#setting-up-stripe-webhook}

Kui Stripe on aktiveeritud maksukättesaadavaks, peate täita **Stripe Publishable Key** ja **Stripe Secret Key** väljad. Saada need saate sisse logi oma Stripe kontole.

_**Tehniline märkus:** Sa saate aktivere **Sandbox mode**, et testida, kas makseviis toimib._

![Stripe API võtmete väljad ja sandbox režiimi lülitamine](/img/config/settings-payment-gateways.png)

Oma Stripe dashboardil klõpsake ülemise oleva **Developers** (Arengurid) välja, ja siis vasakust menüüst **API Keys** (API võtmed).

![Stripe dashboard Arengurite osas API võtmed](/img/config/settings-payment-gateways.png)

Võimalik on kasutada **Testdata** (testida, kas integreerimine toimib teie tootmisplatil), või mitte. Selle muutmine saab teha **Viewing test data** lühendit (toggle).

![Stripe Viewing test data toggle](/img/config/settings-payment-gateways.png)

Kopiertege väärtus **Publishable key** ja **Secret key** väljast, **Token** kolonnist, ja liigutage see Ultimate Multisite Stripe Gateway seadmete pakutamise (fields) välja. Seejärel klõpsake **Save Changes**.

![Stripe publishable and secret key values](/img/config/settings-payment-gateways.png)

![Pasting Stripe keys in Ultimate Multisite settings](/img/config/settings-payment-gateways.png)

## Stripe Webhooki seadistamine

Stripe lähevad webhooki sündmusi, mis teavitavad Ultimate Multisite iga kord selle kohta, kui juhtum on toimunud **teie stripe-kontos**.

Klõpsake **Developers** ja valige vasakust menu **Webhooks** -punkt. Seejärel klõpsake paremal pool **Add endpoint** (Lisaindpunkt) välja. *

![Stripe Webhooks page with Add endpoint button](/img/config/settings-payment-gateways.png)

Teie jaoks on vaja **Endpoint URL**-i. Ultimate Multisite genereerib Endpoint URL-i automaatselt, mida saate leida just pärast **Webhook Listener URL** -välja lafeld **Ultimate Multisite Stripe Gateway** osas._

![Webhook Listener URL field in Stripe gateway settings](/img/config/settings-payment-gateways.png)

**Kopiertege** endpoint URL ja **liigutage** see Stripe **Endpoint URL** välja.

![Pasting endpoint URL in Stripe webhook setup](/img/config/settings-payment-gateways.png)

Järgmine on valida **Event** (Sündmus). Selle valikuga peate lihtsalt tähistama **Select all events** (Vali kõik sündmused) lause ja klõpsama **Add events** (Lisa sündmusi). Seejärel klõpsake **Add Endpoint** (Lisaindpunkt), et muud tegemisi salvestada.

![Selecting all events and adding the Stripe endpoint](/img/config/settings-payment-gateways.png)

See, teie Stripe maksuküsimuste integreerimine on lõpmine!
