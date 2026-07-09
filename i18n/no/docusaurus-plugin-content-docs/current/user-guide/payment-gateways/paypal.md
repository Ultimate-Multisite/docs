---
title: Sette opp PayPal
sidebar_position: 10
_i18n_hash: 894ca1f2ca4ca589f3ef49c131e330d5
---
# Sette opp PayPal-gatewayen (v2)

_**VIKTIG MERKNAD: Denne artikkelen viser til Ultimate Multisite versjon 2.x.**_

Du kan aktivere opptil fire betalingsmetoder på siden vår for betalingsinnstillinger: Stripe, Stripe Checkout, PayPal og Manuell. I denne artikkelen skal vi se hvordan du integrerer med **PayPal**.

Akkurat som Stripe er PayPal mye brukt for nettbetalinger, spesielt på WordPress-nettsteder. Denne artikkelen veileder deg i hvordan du bruker PayPal som en betalingsmetode tilgjengelig på nettverket ditt.

Merk at du må ha en **PayPal Business-konto** for å få API-legitimasjonen som trengs for denne integrasjonen.

## Aktivere PayPal på nettverket ditt

For å aktivere PayPal som en tilgjengelig betalingsmetode på nettverket ditt, går du til fanen **Ultimate Multisite > Innstillinger > Betalinger** og krysser av i boksen ved siden av PayPal.

![Aktivere PayPal i aktive betalingsgatewayer](/img/config/settings-payment-gateways.png)

## Bruke den veiledede oppsettsveiviseren

Ultimate Multisite 2.10.0 legger til en veiledet PayPal-oppsettsveiviser i innstillingene for betalingsgatewayen. Etter at du har aktivert PayPal, bruker du veiviseren på **Ultimate Multisite > Innstillinger > Betalinger** for å velge hvordan du vil koble til gatewayen og bekrefte hvilke legitimasjoner som fortsatt trengs før du lagrer.

Veiviseren støtter to oppsettsbaner:

* **Manuell inntasting av legitimasjon**: Bruk denne banen når du allerede har PayPal API-legitimasjon, når OAuth-oppsett ikke er tilgjengelig for kontoen din, eller når du foretrekker å kopiere legitimasjon fra PayPal selv. Skriv inn API-brukernavn, API-passord og API-signatur i PayPal-feltene, og lagre deretter betalingsinnstillingene.
* **OAuth-tilkoblingsport**: Bruk denne banen bare når OAuth-alternativet er tilgjengelig og aktivert for installasjonen din. Veiviseren viser OAuth-flyten bak et funksjonsflagg, slik at nettverk uten flagget fortsetter å bruke feltene for manuell inntasting av legitimasjon.

Hvis du ikke ser OAuth-alternativet i veiviseren, fullfører du flyten for manuell inntasting av legitimasjon nedenfor. Gatewayen fungerer med den samme PayPal Business API-legitimasjonen som tidligere Ultimate Multisite 2.x-utgivelser.

## Hente PayPal API-legitimasjonen

Når PayPal er aktivert som betalingsgateway, må du fylle ut feltene for PayPal API **Brukernavn** , PayPal API **Passord** og PayPal API **Signatur**.

Du kan få dette ved å logge inn på PayPal [Live](https://www.paypal.com/home)- eller [Sandbox](https://www.sandbox.paypal.com/home)-kontoen din.

(Husk at du kan bruke **sandbox-modus** til å teste betalinger og se om gatewayen er riktig satt opp. Bare slå på den tilhørende seksjonen.)

![PayPal API-legitimasjonsfelt og bryter for sandbox-modus](/img/config/settings-payment-gateways.png)

Slik ber du om API-signatur- eller sertifikatlegitimasjon for PayPal-kontoen din:

  1. Gå til [Account Settings](https://www.paypal.com/businessmanage/account/accountAccess).

  2. I seksjonen **API-tilgang** klikker du på **Oppdater**.
![PayPal Account Settings med seksjon for API-tilgang](/img/config/settings-payment-gateways.png)

  3. Under **NVP/SOAP API-integrasjon (Classic)** klikker du på **Administrer API-legitimasjon**.
![PayPal NVP/SOAP API-integrasjon Administrer API-legitimasjon](/img/config/settings-payment-gateways.png)

     * Hvis du allerede har generert en API-signatur eller et sertifikat, blir du omdirigert til en side der du kan finne legitimasjonen din.

     * _**Merk:** Hvis du blir bedt om å bekrefte PayPal-kontoen din, følger du instruksjonene på skjermen._

  4. Velg _ett_ av følgende alternativer, og klikk deretter på **Godta og send inn**.

     * **Be om API-signatur** – Velg for API-signaturautentisering.

     * **Be om API-sertifikat** – Velg for API-sertifikatautentisering.

  5. PayPal genererer API-legitimasjonen din som følger:
![PayPal-generert API-legitimasjon](/img/config/settings-payment-gateways.png)

     * **API-signaturlegitimasjon** inkluderer et API-brukernavn, API-passord og signatur, som ikke utløper. Disse verdiene er skjult som standard for økt sikkerhet. Klikk på **Vis/skjul** for å slå dem av og på. Når du er ferdig, klikker du på **Ferdig**.

     * **API-sertifikatlegitimasjon** inkluderer et API-brukernavn, API-passord og sertifikat, som utløper automatisk etter tre år. Klikk på **Last ned sertifikat** for å lagre API-sertifikatet på skrivebordet ditt.

Det var det, PayPal-betalingsintegrasjonen din er fullført!

Hvis du har spørsmål om PayPal-innstillinger, kan du se PayPals [Hjelpesenter](https://www.paypal.com/br/smarthelp/home).
