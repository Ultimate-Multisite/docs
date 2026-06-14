---
title: Internet-Suche
sidebar_position: 26
_i18n_hash: e0c88931760a1b490767e39aad86c70f
---
# Internet Such

Gratis AI Agent v1.5.0 füegt e Fähigkeit vo **Internet Such** bi, wo de KI-Assistent erlaubt, aktuelli Informatione us em Web während em Gspräch z'hole. Das wird dur d' [Brave Search API](https://brave.com/search/api/) oder d' [Tavily API](https://tavily.com/) aagtriibe.

## Wie funktioniert das?

Wenn Internet Such aktiviert isch, chan de Assistent automatisch din konfigurierti Suchdienst abfrage, wenn er feststellt, dass e Frog aktuelli oder externi Informatione brucht – zum Bischpil neui News, live Priise oder Dokumentation, wo sit em Trainingsabschluss vom Modell chönnt gänderet si.

D'Resultat wärde in Echtzit abgoholt und vor de Generierig vo ere Antwort i de Kontext vom Assistent integriert. De Assistent zeigt a, wenn er Suchresultat brucht het, um e Frog z'beantworte.

## Internet Such aktivieren

Internet Such bruucht en API-Schlüssel vo dim gwählte Suchdienst. Um das z'konfiguriere:

1. Gang zu **Gratis AI Agent → Settings → Advanced**.
2. Find de Dropdown-Menü **Internet Search Provider** und wähl entweder **Brave Search** oder **Tavily** us.
3. Gib din API-Schlüssel i s'entsprechendi Feld ii. S'Anmelde-Links sind neben jedem Feld aazig.
4. Klick uf **Save Settings**.

Sobald de Schlüssel gspeicheret isch, isch d'Internet Such Fähigkeit automatisch für de Assistent verfügbar.

## Brave Search

### Brave Search API-Schlüssel erhalte

1. Besuech d' [Brave Search API Seite](https://brave.com/search/api/).
2. Melde dich für en Plan a. Es git e gratis Stufe mit eme monatliche Anforderigslimit.
3. Kopier din API-Schlüssel us em Brave Search Developer Dashboard.
4. Füeg ihn i s'Feld **Brave Search API Key** in de Gratis AI Agent Settings ii.

### Nutzigsbeschränkige

De gebruiks wordt gefactureerd door Brave Search op basis van het aantal uitgevoerde queries. Elke AI-respons die een zoekopdracht triggert, telt als één query. Monitor uw gebruik in het [Brave Search developer dashboard](https://brave.com/search/api/) om onverwachte kosten te voorkomen.

## Tavily

Superdav AI Agent v1.10.0 voegt **Tavily** toe als alternatieve internetzoekprovider, die rijkere zoekresultaten en geavanceerde onderzoeksmogelijkheden biedt.

### Een Tavily API-sleutel verkrijgen

1. Ga naar de [Tavily API pagina](https://tavily.com/).
2. Meld u aan voor een account. Er is een gratis niveau beschikbaar met een maandelijkse limiet aan verzoeken.
3. Kopieer uw API-sleutel uit het Tavily dashboard.
4. Plak deze in het veld **Tavily API Key** in de instellingen van Gratis AI Agent.

### Gebruiksbeperkingen

Het gebruik wordt gefactureerd door Tavily op basis van het aantal API-oproepen dat wordt gedaan. Elke AI-respons die een zoekopdracht triggert, telt als één oproep. Monitor uw gebruik in het [Tavily dashboard](https://tavily.com/) om onverwachte kosten te voorkomen.

## Internetzoek uitschakelen

Verwijder de API-sleutel uit het veld voor de actieve zoekprovider en sla op. De mogelijkheid tot internetzoeken wordt dan niet meer aangeboden aan de assistent.

:::note
Internetzoeken voegt latentie toe aan reacties omdat de assistent moet wachten op de zoekresultaten voordat hij een antwoord genereert. Voor tijdgevoelige use cases, overweeg of realtime zoeken nodig is of of de ingebouwde kennis van de assistent voldoende is.
:::
