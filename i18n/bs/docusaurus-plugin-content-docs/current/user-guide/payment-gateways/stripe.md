---
title: Podešavanje Stripe-a
sidebar_position: 6
_i18n_hash: a73a808f5976fbabb54e2c9889334d00
---
# Postavljanje Stripe Gateway-a (v2) {#setting-up-the-stripe-gateway-v2}

_**VAŽNA NAPOMENA: Ovaj članak se odnosi na Ultimate Multisite verziju 2.x.**_

Na našoj stranici za postavke plaćanja možete aktivirati do četiri metode plaćanja: Stripe, Stripe Checkout, PayPal i Ručno. U ovom članku ćemo vidjeti kako se integrirati sa **Stripe-om**.

## Omogućavanje Stripe-a {#enabling-stripe}

Da biste Stripe omogućili kao dostupni payment gateway na vašoj mreži, idite na **Ultimate Multisite > Settings > Payments** i označite preklopnik pored **Stripe** ili **Stripe Checkout** u sekciji Active Payment Gateways.

![Enabling Stripe in active payment gateways](/img/config/settings-payment-gateways.png)

### Stripe vs Stripe Checkout: {#stripe-vs-stripe-checkout}

**Stripe:** Ova metoda će prikazati prostor za unos broja kreditne kartice tokom procesa plaćanja.

![Stripe inline credit card field during checkout](/img/config/settings-payment-gateways.png)

**Stripe Checkout:** Ova metoda će proslijediti klijenta na Stripe Checkout stranicu tokom procesa plaćanja.

![Stripe Checkout redirect page during checkout](/img/config/settings-payment-gateways.png)

Dobivanje vaših Stripe API ključeva

Nakon što je Stripe omogućen kao payment gateway, bit će vam potrebno popuniti polja za **Stripe Publishable Key** i **Stripe Secret Key**. To možete dobiti prijavom na svoj Stripe račun.

_**Napomena:** možete aktivirati **Sandbox mode** kako biste testirali da li je metoda plaćanja funkcionalna._

![Stripe API key fields and sandbox mode toggle](/img/config/settings-payment-gateways.png)

Na vašem Stripe dashboardu, kliknite na **Developers** u gornjem desnom kutu, a zatim na **API Keys** u lijevom meniju.

![Stripe dashboard Developers section with API Keys](/img/config/settings-payment-gateways.png)

Možete koristiti **Test Data** (da testirate da li je integracija funkcionalna na vašem produkcionom sajtu) ili ne. Da biste to promijenili, preklopite preklopnik **Viewing test data**.

![Stripe Viewing test data toggle](/img/config/settings-payment-gateways.png)

Kopirajte vrijednost iz **Publishable key** i **Secret key**, iz kolone **Token** i zalijepite je u polja Ultimate Multisite Stripe Gateway. Zatim kliknite na **Save Changes**.

![Stripe publishable and secret key values](/img/config/settings-payment-gateways.png)

![Pasting Stripe keys in Ultimate Multisite settings](/img/config/settings-payment-gateways.png)

## Postavljanje Stripe Webhook-a {#setting-up-stripe-webhook}

Stripe šalje webhook događaje koji obavještavaju Ultimate Multisite svaki put kada se dogodi neki događaj na **vašem Stripe računu**.

Kliknite na **Developers** i zatim odaberite stavku **Webhooks** u lijevom meniju. Zatim desno kliknite **Add endpoint** *.*

![Stripe Webhooks page with Add endpoint button](/img/config/settings-payment-gateways.png)

Bit će vam potreban **Endpoint URL** *.* Ultimate Multisite automatski generira endpoint URL koji možete pronaći odmah ispod polja **Webhook Listener URL** u sekciji **Ultimate Multisite Stripe Gateway**.

![Webhook Listener URL field in Stripe gateway settings](/img/config/settings-payment-gateways.png)

**Kopirajte** endpoint URL i **zalijepite** ga u polje **Endpoint URL** na Stripe-u.

![Pasting endpoint URL in Stripe webhook setup](/img/config/settings-payment-gateways.png)

Sljedeći korak je odabir **Event** *.* Pod ovom opcijom, jednostavno trebate označiti kuticu **Select all events** i kliknuti na **Add events**. Nakon toga kliknite **Add Endpoint** da sačuvate promjene.

![Selecting all events and adding the Stripe endpoint](/img/config/settings-payment-gateways.png)

To je sve, vaša Stripe plaćanja integracija je gotova!
