---
title: Sette opp PayPal
sidebar_position: 10
_i18n_hash: cb5153acc4c60b39af9d73311a5b3b44
---
# Sette opp PayPal-betalingsløsningen (v2)

_**VIKTIG MERKNAD: Denne artikkelen gjelder Ultimate Multisite versjon 2.x.**_

Du kan aktivere opptil fire betalingsmetoder på vår betalingsinnstillinger-side: Stripe, Stripe Checkout, PayPal og Manuell. I denne artikkelen skal vi se hvordan du integrerer med **PayPal**.

I likhet med Stripe er PayPal mye brukt for nettbetalinger, spesielt på WordPress-nettsteder. Denne artikkelen veileder deg i hvordan du bruker PayPal som en tilgjengelig betalingsmetode på nettverket ditt.

Merk at du trenger en **PayPal Business-konto** for å få API-legitimasjonen som kreves for denne integrasjonen.

## Aktivere PayPal på nettverket ditt

For å aktivere PayPal som en tilgjengelig betalingsmetode på nettverket ditt, gå til **Ultimate Multisite > Settings > Payments**-fanen og kryss av i boksen ved siden av PayPal.

![Aktivering av PayPal i aktive betalingsløsninger](/img/config/settings-payment-gateways.png)

## Hente PayPal API-legitimasjon

Når PayPal er aktivert som betalingsløsning, må du fylle inn feltene for PayPal API **Username**, PayPal API **Password** og PayPal API **Signature**.

Du får disse ved å logge inn på din PayPal [Live](https://www.paypal.com/home)- eller [Sandbox](https://www.sandbox.paypal.com/home)-konto.

(Husk at du kan bruke **sandbox-modus** for å teste betalinger og se om betalingsløsningen er riktig konfigurert. Bare slå på den tilhørende seksjonen.)

![Felter for PayPal API-legitimasjon og sandbox-modus-bryter](/img/config/settings-payment-gateways.png)

For å be om API Signature- eller Certificate-legitimasjon for PayPal-kontoen din:

  1. Gå til [Account Settings](https://www.paypal.com/businessmanage/account/accountAccess).

  2. I seksjonen **API access** klikker du på **Update**.  
![PayPal Account Settings med API access-seksjon](/img/config/settings-payment-gateways.png)

  3. Under **NVP/SOAP API integration (Classic)** klikker du på **Manage API credentials**.  
![PayPal NVP/SOAP API integration Manage API credentials](/img/config/settings-payment-gateways.png)

     * Hvis du allerede har generert en API Signature eller Certificate, blir du videresendt til en side hvor du finner legitimasjonen din.

     * _**Merk:** Hvis du blir bedt om å verifisere PayPal-kontoen din, følg instruksjonene på skjermen._

  4. Velg _ett_ av følgende alternativer, og klikk deretter på **Agree and Submit**.

     * **Request API Signature** – Velg dette for API Signature-autentisering.

     * **Request API Certificate** – Velg dette for API Certificate-autentisering.

  5. PayPal genererer API-legitimasjonen din slik:  
![PayPal-generert API-legitimasjon](/img/config/settings-payment-gateways.png)

     * **API Signature-legitimasjon** inkluderer et API Username, API Password og Signature, som ikke utløper. Disse verdiene er skjult som standard for økt sikkerhet. Klikk på **Show/Hide** for å vise eller skjule dem. Når du er ferdig, klikker du på **Done**.

     * **API Certificate-legitimasjon** inkluderer et API Username, API Password og Certificate, som utløper automatisk etter tre år. Klikk på **Download Certificate** for å lagre API Certificate på skrivebordet ditt.

Det var det, PayPal-betalingsintegrasjonen din er fullført!

Hvis du har spørsmål om PayPal-innstillinger, kan du se PayPals [Help Center](https://www.paypal.com/br/smarthelp/home).
