---
title: Internetsoektog
sidebar_position: 26
_i18n_hash: e0c88931760a1b490767e39aad86c70f
---
# Internetsoektog

Gratis AI Agent v1.5.0 voeg 'n **Internetsoektog**-funksie by wat die AI-assistent toelaat om op-datum inligting van die web te haal tydens 'n gesprek. Dit word aangedryf deur die [Brave Search API](https://brave.com/search/api/) of die [Tavily API](https://tavily.com/).

## Hoe Dit Werk

Wanneer internetsoektog ingskakel is, kan die assistent outomaties jou gekonfigureerde soekverskaffer navraag doen wanneer dit bepaal dat 'n vraag huidige of eksterne inligting benodig — byvoorbeeld, onlangse nuus, lewendige pryse, of dokumentasie wat sedert die model se opleidingsafkaping verander het.

Resultate word in real-time ingesamel en in die assistent se konteks ingesluit voordat dit 'n antwoord genereer. Die assistent dui aan wanneer dit soekresultate gebruik het om 'n vraag te beantwoord.

## Internetsoektog Inskakel

Internetsoektog vereis 'n API-sleutel van jou gekose soekverskaffer. Om dit te konfigureer:

1. Gaan na **Gratis AI Agent → Settings → Advanced**.
2. Lokaliseer die **Internet Search Provider**-dropdown en kies óf **Brave Search** óf **Tavily**.
3. Voer jou API-sleutel in die ooreenstemmende veld in. Aanmeldingsskakels word langs elke veld getoon.
4. Klik op **Save Settings**.

Sodra die sleutel gestoor is, is die Internetsoektog-funksie outomaties beskikbaar vir die assistent.

## Brave Search

### Verkry 'n Brave Search API Sleutel

1. Besoek die [Brave Search API bladsy](https://brave.com/search/api/).
2. Meld aan vir 'n plan. 'n Gratis vlak is beskikbaar met 'n maandelikse aanvraaglimiet.
3. Kopieer jou API-sleutel van die Brave Search developer dashboard.
4. Plak dit in die **Brave Search API Key**-veld in die Gratis AI Agent-instellings.

### Gebruiksbeperkings

Gebruik word deur Brave Search gefaktureer op grond van die aantal navrae wat gemaak word. Elke AI-antwoord wat 'n soektog uitlokke, tel as een navraag. Monitor jou gebruik in die [Brave Search developer dashboard](https://brave.com/search/api/) om onverwagte heffings te vermy.

## Tavily

Superdav AI Agent v1.10.0 voeg **Tavily** by as 'n alternatiewe internetsoekverskaffer, wat rykere soekresultate en gevorderde navorsingsvermoë beskik.

### Verkry 'n Tavily API Sleutel

1. Besoek die [Tavily API bladsy](https://tavily.com/).
2. Meld aan vir 'n rekening. 'n Gratis vlak is beskikbaar met 'n maandelikse aanvraaglimiet.
3. Kopieer jou API-sleutel van die Tavily dashboard.
4. Plak dit in die **Tavily API Key**-veld in die Gratis AI Agent-instellings.

### Gebruiksbeperkings

Gebruik word deur Tavily gefaktureer op grond van die aantal API-aanroepe wat gemaak word. Elke AI-antwoord wat 'n soektog uitlokke, tel as een aanroep. Monitor jou gebruik in die [Tavily dashboard](https://tavily.com/) om onverwagte heffings te vermy.

## Internetsoektog Uskakel

Verwyder die API-sleutel van die aktiewe soekverskafferveld en stoor. Die Internetsoektog-funksie sal nie meer aan die assistent aangebied word nie.

:::note
Internetsoektog voeg latentie by aan antwoorde omdat die assistent moet wag vir soekresultate voordat dit 'n antwoord genereer. Vir tydgevoelige gebruikssake, oorweeg of real-time soektog nodig is of of die assistent se ingeboude kennis voldoende is.
:::
