---
title: Internet Zoeken
sidebar_position: 26
_i18n_hash: e0c88931760a1b490767e39aad86c70f
---
# Internet Zoeken

Gratis AI Agent v1.5.0 voegt een functionaliteit toe genaamd **Internet Zoeken** waarmee de AI-assistent actuele informatie van het web kan ophalen tijdens een gesprek. Dit wordt mogelijk gemaakt door de [Brave Search API](https://brave.com/search/api/) of de [Tavily API](https://tavily.com/).

## Hoe Het Werkt {#how-it-works}

Wanneer internet zoeken ingeschakeld is, kan de assistent automatisch uw geconfigureerde zoekprovider raadplegen wanneer deze vaststelt dat een vraag actuele of externe informatie vereist — bijvoorbeeld recente nieuwsberichten, actuele prijzen of documentatie die sindsdien van de trainingsdatum van het model kan zijn veranderd.

De resultaten worden in real time opgehaald en in de context van de assistent ingebracht voordat deze een antwoord genereert. De assistent geeft aan wanneer deze zoekresultaten heeft gebruikt om een vraag te beantwoorden.

## Internet Zoeken Inschakelen {#enabling-internet-search}

Internet zoeken vereist een API-sleutel van uw gekozen zoekprovider. Om dit in te stellen:

1. Ga naar **Gratis AI Agent → Instellingen → Geavanceerd**.
2. Zoek de dropdown **Internet Search Provider** en selecteer ofwel **Brave Search** of **Tavily**.
3. Voer uw API-sleutel in het corresponderende veld in. Links om u te registreren worden naast elk veld weergegeven.
4. Klik op **Instellingen Opslaan**.

Zodra de sleutel is opgeslagen, is de functionaliteit Internet Zoeken automatisch beschikbaar voor de assistent.

## Brave Search {#brave-search}

### Een Brave Search API-sleutel Verkrijgen {#obtaining-a-brave-search-api-key}

1. Bezoek de [Brave Search API pagina](https://brave.com/search/api/).
2. Meld u aan voor een plan. Er is een gratis niveau beschikbaar met een maandelijks verzoeklimiet.
3. Kopieer uw API-sleutel van het Brave Search developer dashboard.
4. Plak deze in het veld **Brave Search API Key** in de Gratis AI Agent instellingen.

### Gebruikslimieten {#usage-limits}

Het gebruik wordt door Brave Search in rekening gebracht op basis van het aantal uitgevoerde zoekopdrachten. Elk AI-antwoord dat een zoekopdracht triggert, telt als één zoekopdracht. Houd uw gebruik in de [Brave Search developer dashboard](https://brave.com/search/api/) in de gaten om onverwachte kosten te voorkomen.

## Tavily {#tavily}

Superdav AI Agent v1.10.0 voegt **Tavily** toe als een alternatieve internet zoekprovider, die rijkere zoekresultaten en geavanceerde onderzoeksmogelijkheden biedt.

### Een Tavily API-sleutel Verkrijgen {#obtaining-a-tavily-api-key}

1. Bezoek de [Tavily API pagina](https://tavily.com/).
2. Meld u aan voor een account. Er is een gratis niveau beschikbaar met een maandelijks verzoeklimiet.
3. Kopieer uw API-sleutel van het Tavily dashboard.
4. Plak deze in het veld **Tavily API Key** in de Gratis AI Agent instellingen.

### Gebruikslimieten {#usage-limits-1}

Het gebruik wordt door Tavily in rekening gebracht op basis van het aantal API-aanroepen. Elk AI-antwoord dat een zoekopdracht triggert, telt als één aanroep. Houd uw gebruik in de [Tavily dashboard](https://tavily.com/) in de gaten om onverwachte kosten te voorkomen.

## Internet Zoeken Uitschakelen {#disabling-internet-search}

Verwijder de API-sleutel uit het actieve zoekproviderveld en sla op. De functionaliteit Internet Zoeken wordt dan niet meer aangeboden aan de assistent.

:::note
Internet zoeken voegt latentie toe aan antwoorden, omdat de assistent moet wachten op zoekresultaten voordat deze een antwoord genereert. Overweeg voor tijdgevoelige toepassingen of real-time zoeken echt nodig is, of dat de ingebouwde kennis van de assistent voldoende is.
:::
