---
title: Sette opp Stripe
sidebar_position: 6
_i18n_hash: a73a808f5976fbabb54e2c9889334d00
---
# Sette opp Stripe-betalingsløsningen (v2)

_**VIKTIG: Denne artikkelen gjelder Ultimate Multisite versjon 2.x.**_

Du kan aktivere opptil fire betalingsmetoder på siden for betalingsinnstillinger: Stripe, Stripe Checkout, PayPal og Manuell. I denne artikkelen ser vi på hvordan du integrerer med **Stripe**.

## Aktivere Stripe

For å aktivere Stripe som en tilgjengelig betalingsløsning på nettverket ditt, går du til **Ultimate Multisite > Innstillinger > Betalinger** og slår på bryteren ved siden av **Stripe** eller **Stripe Checkout** i seksjonen for aktive betalingsløsninger.

![Aktivere Stripe i aktive betalingsløsninger](/img/config/settings-payment-gateways.png)

### Stripe vs Stripe Checkout:

**Stripe:** Denne metoden viser et felt for å fylle inn kredittkortnummeret under betalingen.

![Stripe innebygd kredittkortfelt under betaling](/img/config/settings-payment-gateways.png)

**Stripe Checkout:** Denne metoden videresender kunden til en Stripe Checkout-side under betalingen.

![Stripe Checkout-viderekobling under betaling](/img/config/settings-payment-gateways.png)

Hente Stripe API-nøklene dine

Når Stripe er aktivert som betalingsløsning, må du fylle ut feltene for **Stripe Publishable Key** og **Stripe Secret Key**. Du får disse ved å logge inn på Stripe-kontoen din.

_**Merk:** Du kan aktivere **Sandbox-modus** for å teste om betalingsmetoden fungerer._

![Stripe API-nøkkelfelt og bryter for sandbox-modus](/img/config/settings-payment-gateways.png)

På Stripe-dashbordet klikker du på **Developers** øverst til høyre, og deretter på **API Keys** i venstremenyen.

![Stripe-dashbord Developers-seksjon med API Keys](/img/config/settings-payment-gateways.png)

Du kan enten bruke **Test Data** (for å teste om integrasjonen fungerer på produksjonssiden din) eller ikke. For å endre dette, slår du av eller på bryteren **Viewing test data**.

![Stripe Viewing test data-bryter](/img/config/settings-payment-gateways.png)

Kopier verdien fra **Publishable key** og **Secret key** fra **Token**-kolonnen, og lim den inn i Stripe Gateway-feltene i Ultimate Multisite. Klikk deretter på **Lagre endringer**.

![Stripe publishable og secret key-verdier](/img/config/settings-payment-gateways.png)

![Lime inn Stripe-nøkler i Ultimate Multisite-innstillinger](/img/config/settings-payment-gateways.png)

## Sette opp Stripe Webhook

Stripe sender webhook-hendelser som varsler Ultimate Multisite hver gang noe skjer på **Stripe-kontoen din**.

Klikk på **Developers** og velg deretter **Webhooks** i venstremenyen. Klikk så på **Add endpoint** på høyre side.

![Stripe Webhooks-side med Add endpoint-knapp](/img/config/settings-payment-gateways.png)

Du trenger en **Endpoint URL**. Ultimate Multisite genererer automatisk endpoint-URL-en, som du finner rett under feltet **Webhook Listener URL** i seksjonen **Ultimate Multisite Stripe Gateway**.

![Webhook Listener URL-felt i Stripe gateway-innstillinger](/img/config/settings-payment-gateways.png)

**Kopier** endpoint-URL-en og **lim den inn** i feltet **Endpoint URL** i Stripe.

![Lime inn endpoint-URL i Stripe webhook-oppsett](/img/config/settings-payment-gateways.png)

Neste steg er å velge en **Event**. Her krysser du bare av for boksen **Select all events** og klikker på **Add events**. Deretter klikker du på **Add Endpoint** for å lagre endringene.

![Velge alle hendelser og legge til Stripe-endepunktet](/img/config/settings-payment-gateways.png)

Da er du ferdig – Stripe-betalingsintegrasjonen din er fullført!
