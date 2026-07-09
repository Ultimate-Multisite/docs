---
title: Intern søgning
sidebar_position: 26
_i18n_hash: e0c88931760a1b490767e39aad86c70f
---
# Internetsøgning {#internet-search}

Gratis AI Agent v1.5.0 tilføjer en funktion til **Internetsøgning**, som lader AI-assistenten hente opdateret information fra nettet under samtalen. Dette drives af [Brave Search API](https://brave.com/search/api/) eller [Tavily API](https://tavily.com/).

## Sådan virker det {#how-it-works}

Når internetsøgning er aktiveret, kan assistenten automatisk forespørge din konfigurerede søgetjeneste, når den vurderer, at et spørgsmål kræver opdateret eller ekstern information – for eksempel nyheder, live priser eller dokumentation, der må have ændret sig siden modellens træningsstop.

Resultater hentes i realtid og indsættes i assistentens kontekst, før den genererer et svar. Assistenten angiver, hvornår den har brugt søgeresultater til at besvare et spørgsmål.

## Aktivering af Internetsøgning {#enabling-internet-search}

Internetsøgning kræver en API-nøgle fra din valgte søgetjeneste. For at konfigurere det:

1. Gå til **Gratis AI Agent → Indstillinger → Avanceret**.
2. Find rullemenuen **Internet Search Provider** og vælg enten **Brave Search** eller **Tavily**.
3. Indtast din API-nøgle i det tilsvarende felt. Tilmeldingslinks vises ved hvert felt.
4. Klik på **Gem indstillinger**.

Når nøglen er gemt, er Internetsøgning-funktionen automatisk tilgængelig for assistenten.

## Brave Search {#brave-search}

### Indhentning af en Brave Search API-nøgle {#obtaining-a-brave-search-api-key}

1. Besøg [Brave Search API siden](https://brave.com/search/api/).
2. Tilmeld dig en plan. Der er et gratis niveau tilgængeligt med en månedlig anmodningsgrænse.
3. Kopier din API-nøgle fra Brave Search developer dashboardet.
4. Indsæt den i feltet **Brave Search API Key** i Gratis AI Agent indstillingerne.

### Brugsbegrænsninger {#usage-limits}

Brug tæller af Brave Search baseret på antal forespørgsler. Hvert AI-svar, der udløser en søgning, tæller som én forespørgsel. Hold øje med dit forbrug i [Brave Search developer dashboard](https://brave.com/search/api/) for at undgå uventede opkrævninger.

## Tavily {#tavily}

Superdav AI Agent v1.10.0 tilføjer **Tavily** som en alternativ internet søgeudbyder, der tilbyder rigere søgeresultater og avancerede research-muligheder.

### Indhentning af en Tavily API Key {#obtaining-a-tavily-api-key}

1. Besøg [Tavily API siden](https://tavily.com/).
2. Opret en konto. Der er et gratis niveau tilgængeligt med en månedlig anmodningsgrænse.
3. Kopier din API key fra Tavily dashboardet.
4. Indsæt den i feltet **Tavily API Key** i Gratis AI Agent indstillingerne.

### Brugsbegrænsninger {#usage-limits-1}

Brug tæller af Tavily baseret på antal API-kald, der foretages. Hvert AI-svar, der udløser en søgning, tæller som ét kald. Hold øje med dit forbrug i [Tavily dashboardet](https://tavily.com/) for at undgå uventede opkrævninger.

## Deaktivering af Internetsøgning {#disabling-internet-search}

Fjern API-nøglen fra feltet for aktiv søgeudbyder og gem. Evnen til internetsøgning vil ikke længere blive tilbudt af assistenten.

:::note
Internetsøgning tilføjer ventetid til svar, fordi assistenten skal vente på søgeresultater, før den genererer et svar. For tidsfølsomme brugssituationer kan du overveje, om realtids-søgning er nødvendig eller om assistentens indbyggede viden er tilstrækkelig.
:::
