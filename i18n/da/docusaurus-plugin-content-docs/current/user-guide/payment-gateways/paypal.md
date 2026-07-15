---
title: Opsætning af PayPal
sidebar_position: 10
_i18n_hash: 894ca1f2ca4ca589f3ef49c131e330d5
---
# Opsætning af PayPal Gateway (v2)

_**VIGTIG BEMÆRK: Denne artikel refererer til Ultimate Multisite version 2.x.**_

Du kan aktivere op til fire betalingsmetoder på din betalingsindstillingsside: Stripe, Stripe Checkout, PayPal og Manuel. I denne artikel ser vi, hvordan du integrerer med **PayPal**.

Ligesom Stripe bruges PayPal bredt til online betalinger, især på WordPress-websteder. Denne artikel guider dig i, hvordan du bruger PayPal som en betalingsmetode tilgængelig på dit netværk.

Bemærk, at du skal have en **PayPal Business konto** for at få API-oplysningerne, der er nødvendige for denne integration.

## Aktivering af PayPal på dit netværk {#enabling-paypal-on-your-network}

For at aktivere PayPal som en tilgængelig betalingsmetode på dit netværk, gå til **Ultimate Multisite > Indstillinger > Betalinger** og marker feltet ved siden af PayPal.

![Aktivering af PayPal i aktive betalingsgateways](/img/config/settings-payment-gateways.png)

## Brug af den guidede opsætningsassistent {#using-the-guided-setup-wizard}

Ultimate Multisite 2.10.0 tilføjer en guidede PayPal opsætningsassistent til indstillingerne for betalingsgatewayen. Når du har aktiveret PayPal, skal du bruge assistenten på **Ultimate Multisite > Indstillinger > Betalinger** til at vælge, hvordan du vil forbinde gatewayen, og bekræfte, hvilke oplysninger der stadig er nødvendige, før du gemmer.

Assistenten understøtter to opsætningsveje:

* **Manuel indtastning af legitimationsoplysninger**: Brug denne sti, hvis du allerede har PayPal API-legitimationer, hvis OAuth-opsætning ikke er tilgængelig for din konto, eller hvis du foretrækker selv at kopiere legitimationerne fra PayPal. Indtast API Username, API Password og API Signature i de relevante felter i PayPal, og gem derefter betalingsindstillingerne.
* **OAuth-forbindelsesport**: Brug denne sti kun, når OAuth-muligheden er tilgængelig og aktiveret for din installation. Wizardet viser OAuth-flowet bag en feature flag, så netværk uden flag fortsætter med at bruge felterne til manuel indtastning af legitimationsoplysninger.

Hvis du ikke ser OAuth-muligheden i wizardet, gennemfør derefter flowet for manuel indtastning af legitimationsoplysninger nedenfor. Gatewayen fungerer med de samme PayPal Business API-legitimationer som tidligere Ultimate Multisite 2.x udgivelser.

## Indhentning af PayPal API-legitimationer {#getting-the-paypal-api-credentials}

Når PayPal er aktiveret som betalingsgateway, skal du udfylde felterne for PayPal API **Username**, PayPal API **Password** og PayPal API **Signature**.

Du kan få disse ved at logge ind på din [Live](https://www.paypal.com/home) eller [Sandbox](https://www.sandbox.paypal.com/home) konto.

(Husk, at du kan bruge **sandbox-tilstand** til at teste betalinger og se, om gatewayen er korrekt opsat. Skift blot på den tilsvarende sektion.)

![PayPal API credentials fields and sandbox mode toggle](/img/config/settings-payment-gateways.png)

For at anmode om API Signature eller Certifikatlegitimationer til din PayPal-konto:

  1. Gå til dine [Account Settings](https://www.paypal.com/businessmanage/account/accountAccess).

  2. I sektionen **API access**, klik på **Update**.

3. Under **NVP/SOAP API integration (Classic)**, klik på **Manage API credentials**.
![PayPal NVP/SOAP API integration Manage API credentials](/img/config/settings-payment-gateways.png)

     * Hvis du allerede har genereret en API Signature eller et Certifikat, bliver du omdirigeret til en side, hvor du kan finde dine legitimationsoplysninger.

     * _**Bemærk:** Hvis du bliver bedt om at verificere din PayPal-konto, så følg de instruktioner på skærmen._

  4. Vælg _ét_ af følgende muligheder og klik på **Agree and Submit**.

     * **Request API Signature** – Vælg dette til API Signature autentificering.

     * **Request API Certificate** – Vælg dette til API Certifikat autentificering.

  5. PayPal genererer dine API-legitimationer som følger:
![PayPal generated API credentials](/img/config/settings-payment-gateways.png)

     * **API Signature legitimationsoplysninger** inkluderer et API Brugernavn, et API Adgangskode og en Signatur, som ikke udløber. Disse værdier er skjult som standard for ekstra sikkerhed. Klik på **Show/Hide** for at slå dem til eller fra. Når du er færdig, klik på **Done**.

     * **API Certifikat legitimationsoplysninger** inkluderer et API Brugernavn, et API Adgangskode og et Certifikat, som automatisk udløber efter tre år. Klik på **Download Certificate** for at gemme API-Certifikatet på dit skrivebord.

Det er det, din PayPal betalingsintegration er færdig!

Hvis du har spørgsmål vedrørende PayPal-indstillingerne, kan du henvende dig til Googles [Help Center](https://www.paypal.com/br/smarthelp/home).
