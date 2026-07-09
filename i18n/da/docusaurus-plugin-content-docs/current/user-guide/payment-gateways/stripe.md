---
title: Opsætning af Stripe
sidebar_position: 6
_i18n_hash: a73a808f5976fbabb54e2c9889334d00
---
# Opsætning af Stripe Gateway (v2) {#setting-up-the-stripe-gateway-v2}

_**VIGTIG BEMÆRK: Denne artikel henviser til Ultimate Multisite version 2.x.**_

Du kan aktivere op til fire betalingsmetoder på din betalingsindstillingsside: Stripe, Stripe Checkout, PayPal og Manuel. I denne artikel ser vi hvordan du integrerer med **Stripe**.

## Aktivering af Stripe {#enabling-stripe}

For at aktivere Stripe som en tilgængelig betalingsgateway på dit netværk skal du gå til **Ultimate Multisite > Indstillinger > Betalinger** og sætte flueben ved knappen ved siden af **Stripe** eller **Stripe Checkout** i sektionen Aktive betalingsgateways.

![Aktivering af Stripe i aktive betalingsgateways](/img/config/settings-payment-gateways.png)

### Stripe vs Stripe Checkout: {#stripe-vs-stripe-checkout}

**Stripe:** Denne metode vil vise et felt til indtastning af kreditkortnummeret under kassen.

![Inline kreditkortfelt med Stripe under kassen](/img/config/settings-payment-gateways.png)

**Stripe Checkout:** Denne metode vil omdirigere kunden til en Stripe Checkout-side under kassen.

![Omdirigeringsside til Stripe Checkout under kassen](/img/config/settings-payment-gateways.png)

## Få dine Stripe API-nøgler {#setting-up-stripe-webhook}

Når Stripe er aktiveret som betalingsgateway, skal du udfylde felterne for **Stripe Publishable Key** og **Stripe Secret Key**. Du kan få disse ved at logge ind på din Stripe-konto.

_**Bemærk:** Du kan aktivere **Sandbox mode** til at teste, om betalingsmetoden virker._

![Felter til Stripe API nøgler og Sandbox mode taster](/img/config/settings-payment-gateways.png)

På dit Stripe dashboard skal du klikke på **Developers** øverst til højre, og derefter på **API Keys** i menuen til venstre.

![Stripe dashboard Developers sektion med API nøgler](/img/config/settings-payment-gateways.png)

Du kan enten bruge **Testdata** (til at teste, om integrationen virker på din produktionsside) eller ikke. For at ændre dette skal du slå på knappen **Viewing test data**.

![Stripe Viewing test data toggle](/img/config/settings-payment-gateways.png)

Kopier værdien fra **Publishable key** og **Secret key**, fra kolonnen **Token**, og indsæt den i felterne for Ultimate Multisite Stripe Gateway. Klik derefter på **Save Changes**.

![Stripe publishable and secret key values](/img/config/settings-payment-gateways.png)

![Pasting Stripe keys in Ultimate Multisite settings](/img/config/settings-payment-gateways.png)

## Opsætning af Stripe Webhook

Stripe sender webhook events, som fortæller Ultimate Multisite, når der sker noget på **din stripe konto**.

Klik på **Developers** og vælg derefter elementet **Webhooks** i venstremenuen. Klik derefter til højre på **Add endpoint** *.

![Stripe Webhooks page with Add endpoint button](/img/config/settings-payment-gateways.png)

Du skal bruge en **Endpoint URL** *. Ultimate Multisite genererer automatisk Endpoint URL'en, som du kan finde lige under feltet **Webhook Listener URL** i sektionen **Ultimate Multisite Stripe Gateway**._

![Webhook Listener URL field in Stripe gateway settings](/img/config/settings-payment-gateways.png)

**Kopier** endpoint URL'en og **indsæt** den i feltet **Endpoint URL** på Stripe.

![Pasting endpoint URL in Stripe webhook setup](/img/config/settings-payment-gateways.png)

Næste trin er at vælge en **Event** *. Under denne mulighed skal du blot markere afkrydsningsfeltet **Select all events** og klikke på **Add events**. Klik derefter på **Add Endpoint** for at gemme ændringerne.

![Selecting all events and adding the Stripe endpoint](/img/config/settings-payment-gateways.png)

Det er det! Din betalingsintegration med Stripe er nu færdig!
