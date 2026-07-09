---
title: Postavljanje Stripe-a
sidebar_position: 6
_i18n_hash: a73a808f5976fbabb54e2c9889334d00
---
# Postavljanje Stripe Gatewaya (v2) {#setting-up-the-stripe-gateway-v2}

_**VAŽNA NAPOMENA: Ovaj članak se odnosi na Ultimate Multisite verziju 2.x.**_

Možete aktivirati do četiri načina plaćanja na stranici za postavke plaćanja: Stripe, Stripe Checkout, PayPal i Ručno. U ovom članku ćemo vidjeti kako se integrirati s **Stripeom**.

## Aktiviranje Stripea {#enabling-stripe}

Da biste omogućili Stripe kao dostupni način plaćanja na vašoj mreži, idite u **Ultimate Multisite > Settings > Payments** i označite prekidač pored **Stripe** ili **Stripe Checkout** u odjeljku Aktivi gateway plaćanja.

![Aktiviranje Stripea u aktivnim gateway plaćanja](/img/config/settings-payment-gateways.png)

### Stripe naspram Stripe Checkout: {#stripe-vs-stripe-checkout}

**Stripe:** Ovaj način prikazuje prostor za unos broja kreditne kartice tijekom procesa kupnje (checkout).

![Inline polje za kreditnu kartu na Stripeu tijekom kupnje](/img/config/settings-payment-gateways.png)

**Stripe Checkout:** Ovaj način preusmjerava klijenta na stranicu Stripe Checkout tijekom procesa kupnje.

![Preusmjera na stranici Stripe Checkout tijekom kupnje](/img/config/settings-payment-gateways.png)

Dobivanje vaših Stripe API ključeva

Nakon što je Stripe aktiviran kao gateway plaćanja, trebat će vam popuniti polja za **Stripe Publishable Key** i **Stripe Secret Key**. Možete dobiti te podatke prijavivanjem na svoj Stripe račun.

_**Napomena:** možete aktivirati **Sandbox mode** kako biste testirali je li način plaćanja funkcionalan._

![Polja za Stripe API ključeve i prekidač sandbox moda](/img/config/settings-payment-gateways.png)

Na vašoj Stripe dashboardu, kliknite na **Developers** u gornjem desnom kutu, a zatim na **API Keys** u lijevom meniju.

![Odjeljak Developers na Stripe dashboardu s API ključevima](/img/config/settings-payment-gateways.png)

Možete koristiti **Test Data** (da testirate je li integracija ispravno na vašoj produkcijskoj lokaciji) ili ne. Da biste to promijenili, prebacite prekidač **Viewing test data**.

![Stripe Viewing test data toggle](/img/config/settings-payment-gateways.png)

Kopirajte vrijednosti iz polja **Publishable key** i **Secret key**, iz kolone **Token** i zalijepite ih u polja Ultimate Multisite Stripe Gateway. Zatim kliknite na **Save Changes**.

![Stripe publishable and secret key values](/img/config/settings-payment-gateways.png)

![Pasting Stripe keys in Ultimate Multisite settings](/img/config/settings-payment-gateways.png)

## Postavljanje Stripe Webhooka {#setting-up-stripe-webhook}

Stripe šalje webhook događaje koji obavještavaju Ultimate Multisite svaki put kada se dogodi neki događaj na **vašem stripe računu**.

Kliknite na **Developers** i zatim odaberite stavku **Webhooks** u lijevom meniju. Zatim na desnoj strani kliknite na **Add endpoint** *.

![Stripe Webhooks page with Add endpoint button](/img/config/settings-payment-gateways.png)

Potrebno vam je **Endpoint URL** *. Ultimate Multisite automatski generira Endpoint URL koji možete pronaći odmah ispod polja **Webhook Listener URL** u odjeljku **Ultimate Multisite Stripe Gateway**._

![Webhook Listener URL field in Stripe gateway settings](/img/config/settings-payment-gateways.png)

**Kopirajte** endpoint URL i **zalijepite ga** u polje **Endpoint URL** na Stripeu.

![Pasting endpoint URL in Stripe webhook setup](/img/config/settings-payment-gateways.png)

Slijedi odabir **Event** *. Pod ovom opcijom jednostavno trebate označiti polje **Select all events** i kliknuti na **Add events**. Nakon toga kliknite na **Add Endpoint** da biste spremili promjene.

![Selecting all events and adding the Stripe endpoint](/img/config/settings-payment-gateways.png)

Sve, integracija plaćanja putem Stripea je gotova!
