---
title: Internet Search
sidebar_position: 26
_i18n_hash: e0c88931760a1b490767e39aad86c70f
---
# Internet Search {#internet-search}

Gratis AI Agent v1.5.0 lägger till en funktion för **Internet Search** som låter AI-assistenten hämta uppdaterad information från webben under ett samtal. Detta drivs av [Brave Search API](https://brave.com/search/api/) eller [Tavily API](https://tavily.com/).

## Hur det fungerar {#how-it-works}

När internet search är aktiverat kan assistenten automatiskt fråga din konfigurerade sökleverantör när den bedömer att en fråga kräver aktuell eller extern information – till exempel senaste nyheter, aktuella priser eller dokumentation som kan ha ändrats sedan modellens träningsdatum.

Resultaten hämtas i realtid och matas in i assistentens kontext innan den genererar ett svar. Assistenten informerar om den har använt sökresultat för att besvara en fråga.

## Aktivera Internet Search {#enabling-internet-search}

Internet search kräver en API-nyckel från din valda sökleverantör. För att konfigurera det:

1. Gå till **Gratis AI Agent → Settings → Advanced**.
2. Leta upp rullgardinsmenyn **Internet Search Provider** och välj antingen **Brave Search** eller **Tavily**.
3. Ange din API-nyckel i motsvarande fält. Länkar för registrering visas bredvid varje fält.
4. Klicka på **Save Settings**.

När nyckeln har sparats är Internet Search-funktionen automatiskt tillgänglig för assistenten.

## Brave Search {#brave-search}

### Hämta en Brave Search API Key {#obtaining-a-brave-search-api-key}

1. Besök [Brave Search API page](https://brave.com/search/api/).
2. Registrera dig för ett abonnemang. En gratis nivå finns tillgänglig med en månatlig begäranlimit.
3. Kopiera din API-nyckel från Brave Search developer dashboard.
4. Klistra in den i fältet **Brave Search API Key** i Gratis AI Agent-inställningarna.

### Användningsbegränsningar {#usage-limits}

Användningen debiteras av Brave Search baserat på antalet sökningar som görs. Varje AI-svar som utlöser en sökning räknas som en sökning. Övervaka din användning i [Brave Search developer dashboard](https://brave.com/search/api/) för att undvika oväntade kostnader.

## Tavily {#tavily}

Superdav AI Agent v1.10.0 lägger till **Tavily** som en alternativ internet search provider, vilket erbjuder rikare sökresultat och avancerade forskningsmöjligheter.

### Hämta en Tavily API Key {#obtaining-a-tavily-api-key}

1. Besök [Tavily API page](https://tavily.com/).
2. Registrera dig för ett konto. En gratis nivå finns tillgänglig med en månatlig begäranlimit.
3. Kopiera din API-nyckel från Tavily dashboard.
4. Klistra in den i fältet **Tavily API Key** i Gratis AI Agent-inställningarna.

### Användningsbegränsningar {#usage-limits-1}

Användningen debiteras av Tavily baserat på antalet API-anrop som görs. Varje AI-svar som utlöser en sökning räknas som ett anrop. Övervaka din användning i [Tavily dashboard](https://tavily.com/) för att undvika oväntade kostnader.

## Inaktivera Internet Search {#disabling-internet-search}

Ta bort API-nyckeln från det aktiva sökleverantörfältet och spara. Internet Search-funktionen kommer då inte längre att erbjudas assistenten.

:::note
Internet search lägger till latens i svaren eftersom assistenten måste vänta på sökresultat innan den genererar ett svar. För tidskritiska användningsfall, överväg om realtidsökning är nödvändig eller om assistentens inbyggda kunskap räcker.
:::
