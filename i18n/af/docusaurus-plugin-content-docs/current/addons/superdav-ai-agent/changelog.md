---
title: Veranderingslog
sidebar_position: 5
_i18n_hash: 9747e37b1fd831941c9f86e6c3f85c81
---
# Veranderingslog

## 1.18.0 — Vrygestel op 2026-06-29 {#1180--released-on-2026-06-29}

### Nuut {#new}

- **Google Calendar-nutsmiddels** — lees gekonfigureerde kalenders en geleenthede vir skedulebewuste outomatiserings
- **Kontakkartering en deelnemerhulpe** — pas kalenderdeelnemers by site-gebruikers en kontakte
- **Menslike-goedkeuringshekke en herinneringrekords** — onderbreek outomatiserings vir hersiening en vermy duplikaatkennisgewings
- **TextBee SMS-verskaffer** — stuur gekonfigureerde teksboodskapkennisgewings deur TextBee
- **Gevorderde metgeselpakket** — voeg nutsmiddels vir vertroude-ontwikkelaar-lêerstelsel, databasis, WP-CLI, REST-versender, plugin-bouer, git-momentopname, gebruikerbestuur en maatstaf by wat apart van die WordPress.org-bou versprei word

### Verbeter {#improved}

- **Bestuurde Superdav-diensopstelling** — voeg gehuisveste diens-endpoints en outomatiese verbindingsvoorsiening vir ondersteunde sites by
- **Vrystellingverpakking** — bou aparte kern- en Gevorderde ZIPs, publiseer albei op GitHub, en stuur slegs die kernpakket na WordPress.org

### Reggestel {#fixed}

- **AI-versoekbetroubaarheid** — verbeter modelkeuse, versoek-uitteltye, verstekopstellingsmodel, hantering van redenasieteks, en herprobeerleiding vir ongeldige hulpmiddeloproepe
- **Kalender- en herinneringverharding** — versterk Google Calendar-tokens en herinnering-ontdubbeling
- **Aanboording en goedkeuringshervattings** — herstel frontend-aanboordingsbekendstellings en bevestigde vermoëhervattings
- **WordPress.org-verpakkinghersieningskwessies** — spreek verpakkinghersieningterugvoer vir die kernvrystelling aan

## 1.16.0 — Vrygestel op 2026-05-20 {#1160--released-on-2026-05-20}

### Nuut {#new-1}

- **Generate Logo SVG-vermoë** — Theme Builder kan nou pasgemaakte logo-SVGs genereer en inbed met naamruimte-veilige sanitering
- **Foto-oplaai in ontdekkingsonderhoud** — Theme Builder-ontdekkingsonderhoud sluit nou ’n foto-oplaaistap in vir ryker ontwerpkonteks
- **Validate Palette Contrast-vermoë** — kontroleer kleurpare vir WCAG-nakoming voordat dit op ’n theme toegepas word
- **Gasvryheidspyskaarte** — Theme Builder kan nou gestruktureerde kos- en drankspyskaartbladsye vir gasvryheidsbesighede genereer
- **Werkskerm- en mobiele voorskouweergawe** — voorskou jou ontwerp op werkskerm- en mobiele toestelle tydens ontwerprigtingkeuse
- **Navigasie-etiketparameter** — Create Menu-vermoë ondersteun nou ’n afsonderlike `navigation_label` apart van die bladsytitel
- **Tier 1-hulpmiddelbeskikbaarheid** — sd-ai-agent/site-scrape is nou ’n Tier 1-hulpmiddel wat by verstek in Theme Builder beskikbaar is

### Reggestel {#fixed-1}

- **AI Client-kas** — word nou deur transients gerugsteun vir volharding oor versoeke heen, wat dataverlies op langlopende agent-take voorkom
- **Plugin-ryaksieskakels** — reggestel en hernoem vir duidelikheid

## 1.10.0 — Vrygestel op 2026-05-05 {#1100--released-on-2026-05-05}

### Nuut {#new-2}

- **Tavily-internetsoektog** — voeg Tavily as ’n soekverskaffer by vir ryker internetsoekresultate saam met Brave Search
- **Theme-bewuste ingeboude vaardighede** — Block Themes, Classic Themes, Kadence Blocks en Kadence Theme-vaardigheidsgidse word nou saam met die plugin verskaf
- **Site-bouer-kontakvormvermoë** — voeg ’n kontakvorm direk vanaf die kletskoppelvlak by enige bladsy

### Verbeter {#improved-1}

- **WooCommerce-integrasie hergefaktoreer** — gebruik nou inheemse WooCommerce APIs vir beter betroubaarheid en versoenbaarheid
- **Verskafferlys verfris outomaties** — wanneer enige plugin geaktiveer of gedeaktiveer word

### Reggestel {#fixed-2}

- **navigate-to-vermoë** — oneindige herlaailus op sommige admin-bladsye reggestel
- **list-posts-vermoë** — los nou kategorie- en merkername korrek na slugs op
- **WP-CLI-opdragte** — ontbrekende namespace-aliase herstel ná ’n vorige herfaktorering
- **Geleentheidoutomatisering** — hanteer sites waar outomatiseringstabelle nog nie geskep is nie grasieus
- **memory-save-vermoë** — gebruik nou die korrekte namespace-voorvoegsel in die stelselinstruksiebouer
- **Skalêre hulpmiddelresultate** — nou korrek toegedraai voordat dit aan die AI teruggestuur word
- **Gebruiksstatistieke** — hanteer nou korrek die verouderde vermoësleutelformaat tydens opgradering vanaf ouer weergawes
