---
title: Internett-søk
sidebar_position: 26
_i18n_hash: e0c88931760a1b490767e39aad86c70f
---
# Internett-søk {#internet-search}

Gratis AI Agent v1.5.0 legger til en funksjon for **Internett-søk** som lar AI-assistenten hente oppdatert informasjon fra nettet under en samtale. Dette er drevet av [Brave Search API](https://brave.com/search/api/) eller [Tavily API](https://tavily.com/).

## Hvordan det fungerer {#how-it-works}

Når internett-søk er aktivert, kan assistenten automatisk spørre din konfigurerte søkjedeleverandør når den bestemmer at et spørsmål krever aktuell eller ekstern informasjon – for eksempel nylige nyheter, live priser eller dokumentasjon som kan ha endret seg siden modellens treningsgrense.

Resultatene hentes i sanntid og injiseres i assistentens kontekst før den genererer et svar. Assistenten indikerer når den har brukt søkeresultater for å svare på et spørsmål.

## Aktivering av Internett-søk {#enabling-internet-search}

Internett-søk krever en API-nøkkel fra din valgte søkjedeleverandør. For å konfigurere det:

1. Gå til **Gratis AI Agent → Settings → Advanced**.
2. Finn nedtrekksmenyen **Internet Search Provider** og velg enten **Brave Search** eller **Tavily**.
3. Skriv inn API-nøkkelen din i tilsvarende felt. Lenker for registrering vises ved siden av hvert felt.
4. Klikk på **Save Settings**.

Når nøkkelen er lagret, er Internett-søk-funksjonen automatisk tilgjengelig for assistenten.

## Brave Search {#brave-search}

### Hvordan du får en Brave Search API Key {#obtaining-a-brave-search-api-key}

1. Besøk [Brave Search API page](https://brave.com/search/api/).
2. Registrer deg for en plan. Det er tilgjengelig et gratis nivå med et månedlig forespørselsgrense.
3. Kopier API-nøkkelen din fra Brave Search developer dashboard.
4. Lim den inn i feltet **Brave Search API Key** i Gratis AI Agent-innstillingene.

### Bruksgrenser {#usage-limits}

Bruk av Brave Search faktureres basert på antall spørringer som gjøres. Hvert AI-svar som utløser et søk, teller som én spørring. Overvåk bruken din i [Brave Search developer dashboard](https://brave.com/search/api/) for å unngå uventede kostnader.

## Tavily {#tavily}

Superdav AI Agent v1.10.0 legger til **Tavily** som en alternativ internett-søkjedeleverandør, og tilbyr rikere søkeresultater og avanserte forskningsfunksjoner.

### Hvordan du får en Tavily API Key {#obtaining-a-tavily-api-key}

1. Besøk [Tavily API page](https://tavily.com/).
2. Registrer deg for en konto. Det er tilgjengelig et gratis nivå med et månedlig forespørselsgrense.
3. Kopier API-nøkkelen din fra Tavily dashboard.
4. Lim den inn i feltet **Tavily API Key** i Gratis AI Agent-innstillingene.

### Bruksgrenser {#usage-limits-1}

Bruk av Tavily faktureres basert på antall API-kall som gjøres. Hvert AI-svar som utløser et søk, teller som ett kall. Overvåk bruken din i [Tavily dashboard](https://tavily.com/) for å unngå uventede kostnader.

## Deaktivering av Internett-søk {#disabling-internet-search}

Fjern API-nøkkelen fra det aktive søkjedeleverandørfeltet og lagre. Internett-søk-funksjonen vil da ikke lenger bli tilbudt til assistenten.

:::note
Internett-søk legger til ventetid i svarene fordi assistenten må vente på søkeresultater før den genererer et svar. For tidssensitive bruksområder, vurder om sanntidssøk er nødvendig, eller om assistentens innebygde kunnskap er tilstrekkelig.
:::
