---
title: Podešavanje Stripe-a
sidebar_position: 6
_i18n_hash: a73a808f5976fbabb54e2c9889334d00
---
# Podeš postaviti Stripe gateway (v2)

_**VAŽNA NAPOMENA: Ovaj članak se odnosi na Ultimate Multisite verziju 2.x.**_

Možete aktivirati do četiri načina plaćanja na stranici podešavanja plaćanja: Stripe, Stripe Checkout, PayPal i Ručno. U ovom članku ćemo videti kako da se integrišete sa **Stripe**.

## Omogućavanje Stripe-a {#enabling-stripe}

Da biste omogućili Stripe kao dostupnu platnu kapiju na vašoj mreži, idite u **Ultimate Multisite > Settings > Payments** (Podešavanja > Plaćanja) i obavezite prekidač pored opcije **Stripe** ili **Stripe Checkout** u sekciji Aktive платеne kapije.

![Omogućavanje Stripe-a u aktivnim platnim kapijama](/img/config/settings-payment-gateways.png)

### Stripe naspram Stripe Checkout: {#stripe-vs-stripe-checkout}

**Stripe:** Ova metoda će prikazati prostor gde se unosi broj kreditne kartice tokom plaćanja (checkout).

![Inline polje za kreditnu karticu na Stripe-u tokom plaćanja](/img/config/settings-payment-gateways.png)

**Stripe Checkout:** Ova metoda će preusmeriti klijenta na stranicu Stripe Checkout tokom plaćanja.

![Preusmerena stranica Stripe Checkout tokom plaćanja](/img/config/settings-payment-gateways.png)

Dobijanje vaših Stripe API ključeva

Kada je Stripe omogućen kao platna kapija, moraćete da popunite polja za **Stripe Publishable Key** i **Stripe Secret Key**. Možete ih dobiti tako što se ulogujete na svoj Stripe nalog.

_**Napomena:** možete aktivirati **Sandbox mode** (Sandboks režim) da biste testirali da li je metoda plaćanja funkcionalna._

![Polja za Stripe API ključeve i prekidač za sandbox mode](/img/config/settings-payment-gateways.png)

Na vašem Stripe dashboardu, kliknite na **Developers** (Programeri) u gornjem desnom uglu, a zatim na **API Keys** (API Ključići) u levom meniju.

![Sekcija Developers na Stripe dashboardu sa API ključevima](/img/config/settings-payment-gateways.png)

Možete koristiti **Test Data** (da proverite da li integracija radi na vašem produkcionom sajtu) ili ne. Da biste ovo promenili, prebacite prekidač **Viewing test data**.

![Stripe Viewing test data toggle](/img/config/settings-payment-gateways.png)

Kopirajte vrednost iz polja **Publishable key** i **Secret key**, iz kolone **Token**, zalepite je u polja Ultimate Multisite Stripe Gateway. Zatim kliknite da sačuvate promene.

![Stripe publishable and secret key values](/img/config/settings-payment-gateways.png)

![Pasting Stripe keys in Ultimate Multisite settings](/img/config/settings-payment-gateways.png)

## Podešavanje Stripe Webhooka {#setting-up-stripe-webhook}

Stripe šalje webhook događaje koji obaveštavaju Ultimate Multisite svaki put kada se nešto desi na **vašem stripe nalogu**.

Kliknite na **Developers** i zatim izaberite stavku **Webhooks** u levom meniju. Zatim sa desne strane kliknite na **Add endpoint** *.

![Stripe Webhooks page with Add endpoint button](/img/config/settings-payment-gateways.png)

Potrebno vam je **Endpoint URL** *. Ultimate Multisite automatski generiše Endpoint URL koji možete pronaći odmah ispod polja **Webhook Listener URL** u sekciji **Ultimate Multisite Stripe Gateway**._

![Webhook Listener URL field in Stripe gateway settings](/img/config/settings-payment-gateways.png)

**Kopirajte** endpoint URL i **zalepite ga** u polje **Endpoint URL** na Stripeu.

![Pasting endpoint URL in Stripe webhook setup](/img/config/settings-payment-gateways.png)

Slede korak je izbor **Event** *. Pod ovom opcijom jednostavno proverite polje **Select all events** i kliknite da dodate događaje (**Add events**). Nakon toga kliknite na **Add Endpoint** da sačuvate promene.

![Selecting all events and adding the Stripe endpoint](/img/config/settings-payment-gateways.png)

To je to, tvoja integracija za plaćanje preko Stripe je gotova!
