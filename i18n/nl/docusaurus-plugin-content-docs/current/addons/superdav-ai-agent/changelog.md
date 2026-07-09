---
title: Changelog
sidebar_position: 5
_i18n_hash: 9747e37b1fd831941c9f86e6c3f85c81
---
# Wijzigingslog {#changelog}

## 1.18.0 — Uitgebracht op 2026-06-29 {#1180--released-on-2026-06-29}

### Nieuw {#new}

- **Google Calendar-tools** — lees geconfigureerde agenda's en evenementen voor planningsbewuste automatiseringen
- **Contacttoewijzing en deelnemershelpers** — koppel agendadeelnemers aan sitegebruikers en contacten
- **Goedkeuringspoorten door mensen en herinneringsrecords** — pauzeer automatiseringen voor beoordeling en voorkom dubbele meldingen
- **TextBee SMS-provider** — verstuur geconfigureerde tekstberichtmeldingen via TextBee
- **Geavanceerd begeleidend pakket** — voeg tools toe voor vertrouwde ontwikkelaars voor bestandssysteem, database, WP-CLI, REST-dispatcher, pluginbouwer, git-snapshot, gebruikersbeheer en benchmarks, apart gedistribueerd van de WordPress.org-build

### Verbeterd {#improved}

- **Beheerde Superdav-service-instelling** — voeg gehoste service-endpoints en automatische verbindingsprovisioning toe voor ondersteunde sites
- **Releaseverpakking** — bouw aparte ZIP's voor kern en Advanced, publiceer beide op GitHub en stuur alleen het kernpakket naar WordPress.org

### Opgelost {#fixed}

- **Betrouwbaarheid van AI-verzoeken** — verbeter modelselectie, time-outs voor verzoeken, standaard instelmodel, verwerking van redeneertekst en retry-begeleiding voor ongeldige toolaanroepen
- **Verharding van agenda en herinneringen** — versterk Google Calendar-tokens en ontdubbeling van herinneringen
- **Onboarding en hervattingen na goedkeuring** — herstel lanceringen van frontend-onboarding en hervattingen van bevestigde vaardigheden
- **Reviewproblemen met WordPress.org-verpakking** — verwerk feedback uit de verpakkingsreview voor de kernrelease

## 1.16.0 — Uitgebracht op 2026-05-20 {#1160--released-on-2026-05-20}

### Nieuw {#new-1}

- **Logo-SVG genereren-vaardigheid** — Theme Builder kan nu aangepaste logo-SVG's genereren en insluiten met namespace-veilige opschoning
- **Foto-upload in ontdekkingsinterview** — het ontdekkingsinterview van Theme Builder bevat nu een foto-uploadstap voor rijkere ontwerpcontext
- **Paletcontrast valideren-vaardigheid** — controleer kleurparen op WCAG-naleving voordat ze op een theme worden toegepast
- **Hospitality-menu's** — Theme Builder kan nu gestructureerde pagina's voor eten- en drankenmenu's genereren voor hospitalitybedrijven
- **Desktop- en mobiele previewweergave** — bekijk een preview van je ontwerp op desktop- en mobiele apparaten tijdens de selectie van de ontwerprichting
- **Navigatielabelparameter** — de Menu maken-vaardigheid ondersteunt nu een afzonderlijke `navigation_label`, los van de paginatitel
- **Beschikbaarheid van Tier 1-tools** — sd-ai-agent/site-scrape is nu een Tier 1-tool die standaard beschikbaar is in Theme Builder

### Opgelost {#fixed-1}

- **AI-clientcache** — wordt nu ondersteund door transients voor persistentie tussen verzoeken, waardoor gegevensverlies bij langlopende agenttaken wordt voorkomen
- **Actielinks in pluginrij** — gecorrigeerd en hernoemd voor duidelijkheid

## 1.10.0 — Uitgebracht op 2026-05-05 {#1100--released-on-2026-05-05}

### Nieuw {#new-2}

- **Tavily-internetzoekfunctie** — voeg Tavily toe als zoekprovider voor rijkere internetzoekresultaten naast Brave Search
- **Theme-bewuste ingebouwde vaardigheden** — vaardigheidsgidsen voor Block Themes, Classic Themes, Kadence Blocks en Kadence Theme worden nu met de plugin meegeleverd
- **Contactformulier-vaardigheid voor sitebouwer** — voeg rechtstreeks vanuit de chatinterface een contactformulier toe aan elke pagina

### Verbeterd {#improved-1}

- **WooCommerce-integratie gerefactord** — gebruikt nu native WooCommerce-API's voor betere betrouwbaarheid en compatibiliteit
- **Providerlijst wordt automatisch vernieuwd** — wanneer een plugin wordt geactiveerd of gedeactiveerd

### Opgelost {#fixed-2}

- **navigate-to-vaardigheid** — oneindige herlaadlus op sommige beheerpagina's opgelost
- **list-posts-vaardigheid** — lost nu categorie- en tagnamen correct op naar slugs
- **WP-CLI-commando's** — ontbrekende namespace-aliassen hersteld na een eerdere refactor
- **Evenementautomatisering** — verwerkt sites soepel waar automatiseringstabellen nog niet zijn aangemaakt
- **memory-save-vaardigheid** — gebruikt nu het juiste namespace-voorvoegsel in de bouwer voor systeeminstructies
- **Scalaire toolresultaten** — worden nu correct ingepakt voordat ze naar de AI worden teruggestuurd
- **Gebruiksstatistieken** — verwerken nu correct het verouderde vaardigheidssleutelformaat bij een upgrade vanaf oudere versies
