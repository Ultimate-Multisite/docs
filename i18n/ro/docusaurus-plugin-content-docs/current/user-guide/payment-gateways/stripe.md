---
title: Configurarea Stripe
sidebar_position: 6
_i18n_hash: a73a808f5976fbabb54e2c9889334d00
---
# Configurarea gateway-ului Stripe (v2)

_**NOTĂ IMPORTANTĂ: Acest articol se referă la Ultimate Multisite versiunea 2.x.**_

Poți activa până la patru metode de plată pe pagina de setări pentru plăți: Stripe, Stripe Checkout, PayPal și Manual. În acest articol, vom vedea cum să integrezi **Stripe**.

## Activarea Stripe

Pentru a activa Stripe ca gateway de plată disponibil în rețeaua ta, mergi la **Ultimate Multisite > Settings > Payments** și bifează comutatorul de lângă **Stripe** sau **Stripe Checkout** în secțiunea Active Payment Gateways.

![Activarea Stripe în gateway-urile de plată active](/img/config/settings-payment-gateways.png)

### Stripe vs Stripe Checkout:

**Stripe:** Această metodă va afișa un câmp pentru introducerea numărului cardului de credit în timpul finalizării comenzii.

![Câmp inline pentru card de credit Stripe în timpul checkout-ului](/img/config/settings-payment-gateways.png)

**Stripe Checkout:** Această metodă va redirecționa clientul către o pagină Stripe Checkout în timpul finalizării comenzii.

![Pagina de redirecționare Stripe Checkout în timpul checkout-ului](/img/config/settings-payment-gateways.png)

Obținerea cheilor API Stripe

După ce Stripe este activat ca gateway de plată, va trebui să completezi câmpurile pentru **Stripe Publishable Key** și **Stripe Secret Key**. Le poți obține conectându-te la contul tău Stripe.

_**Notă:** poți activa **Sandbox mode** pentru a testa dacă metoda de plată funcționează._

![Câmpurile pentru cheile API Stripe și comutatorul sandbox mode](/img/config/settings-payment-gateways.png)

În dashboard-ul Stripe, dă clic pe **Developers** în colțul din dreapta sus, apoi pe **API Keys** în meniul din stânga.

![Secțiunea Developers din dashboard-ul Stripe cu API Keys](/img/config/settings-payment-gateways.png)

Poți folosi fie **Test Data** (pentru a testa dacă integrarea funcționează pe site-ul tău de producție), fie nu. Pentru a schimba acest lucru, comută butonul **Viewing test data**.

![Comutatorul Viewing test data în Stripe](/img/config/settings-payment-gateways.png)

Copiază valoarea din **Publishable key** și **Secret key**, din coloana **Token** și lipește-le în câmpurile Ultimate Multisite Stripe Gateway. Apoi dă clic pe **Save Changes**.

![Valorile cheilor publishable și secret din Stripe](/img/config/settings-payment-gateways.png)

![Lipirea cheilor Stripe în setările Ultimate Multisite](/img/config/settings-payment-gateways.png)

## Configurarea Webhook-ului Stripe

Stripe trimite evenimente webhook care notifică Ultimate Multisite de fiecare dată când se întâmplă un eveniment în **contul tău Stripe**.

Dă clic pe **Developers** și apoi alege elementul **Webhooks** din meniul din stânga. Apoi, în partea dreaptă, dă clic pe **Add endpoint**.

![Pagina Webhooks din Stripe cu butonul Add endpoint](/img/config/settings-payment-gateways.png)

Vei avea nevoie de un **Endpoint URL**. Ultimate Multisite generează automat URL-ul endpoint pe care îl poți găsi chiar sub câmpul **Webhook Listener URL** în secțiunea **Ultimate Multisite Stripe Gateway**.

![Câmpul Webhook Listener URL în setările gateway-ului Stripe](/img/config/settings-payment-gateways.png)

**Copiază** URL-ul endpoint și **lipește-l** în câmpul **Endpoint URL** din Stripe.

![Lipirea URL-ului endpoint în configurarea webhook-ului Stripe](/img/config/settings-payment-gateways.png)

Următorul pas este să selectezi un **Event**. La această opțiune, trebuie doar să bifezi caseta **Select all events** și să dai clic pe **Add events**. După aceea, dă clic pe **Add Endpoint** pentru a salva modificările.

![Selectarea tuturor evenimentelor și adăugarea endpoint-ului Stripe](/img/config/settings-payment-gateways.png)

Asta e tot, integrarea ta cu Stripe este completă!
