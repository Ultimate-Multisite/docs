---
title: Zoznam zmien
sidebar_position: 5
_i18n_hash: 9747e37b1fd831941c9f86e6c3f85c81
---
# Denník zmien

## 1.18.0 — Vydané 2026-06-29

### Nové

- **Nástroje Google Calendar** — čítajú nakonfigurované kalendáre a udalosti pre automatizácie zohľadňujúce rozvrh
- **Mapovanie kontaktov a pomocníci pre účastníkov** — priraďujú účastníkov kalendára k používateľom a kontaktom webu
- **Brány ľudského schválenia a záznamy pripomienok** — pozastavia automatizácie na kontrolu a zabránia duplicitným upozorneniam
- **Poskytovateľ TextBee SMS** — odosielajte nakonfigurované upozornenia textovými správami cez TextBee
- **Pokročilý sprievodný balík** — pridáva nástroje dôveryhodného vývojára pre súborový systém, databázu, WP-CLI, REST dispečer, tvorbu pluginov, git snímky, správu používateľov a benchmarky, distribuované oddelene od zostavy WordPress.org

### Vylepšené

- **Nastavenie spravovanej služby Superdav** — pridáva koncové body hostovanej služby a automatické zriaďovanie pripojenia pre podporované weby
- **Balenie vydania** — zostavuje samostatné core a pokročilé ZIPy, publikuje oba na GitHub a na WordPress.org odosiela iba core balík

### Opravené

- **Spoľahlivosť AI požiadaviek** — vylepšuje výber modelu, časové limity požiadaviek, predvolený model nastavenia, spracovanie textu uvažovania a pokyny na opakovanie pri neplatných volaniach nástrojov
- **Spevnenie kalendára a pripomienok** — posilňuje Google Calendar tokeny a deduplikáciu pripomienok
- **Onboarding a pokračovania po schválení** — opravuje spúšťanie front-endového onboardingu a pokračovania potvrdených schopností
- **Problémy kontroly balenia WordPress.org** — rieši spätnú väzbu z kontroly balenia pre core vydanie

## 1.16.0 — Vydané 2026-05-20

### Nové

- **Schopnosť Generate Logo SVG** — Theme Builder teraz dokáže generovať a vkladať vlastné SVG logá so sanitizáciou bezpečnou pre namespace
- **Nahrávanie fotografií v objavovacom rozhovore** — objavovací rozhovor Theme Builder teraz obsahuje krok nahrania fotografie pre bohatší dizajnový kontext
- **Schopnosť Validate Palette Contrast** — kontroluje páry farieb z hľadiska súladu s WCAG pred ich použitím v téme
- **Menu pre pohostinstvo** — Theme Builder teraz dokáže generovať štruktúrované stránky jedálnych a nápojových lístkov pre pohostinské podniky
- **Vykresľovanie náhľadu pre desktop a mobil** — zobrazte si náhľad svojho dizajnu na desktopových a mobilných zariadeniach počas výberu dizajnového smerovania
- **Parameter navigačného štítku** — schopnosť Create Menu teraz podporuje samostatný `navigation_label` oddelený od názvu stránky
- **Dostupnosť nástroja úrovne 1** — sd-ai-agent/site-scrape je teraz nástroj úrovne 1 dostupný predvolene v Theme Builder

### Opravené

- **Vyrovnávacia pamäť AI Client** — teraz je podporená transientmi pre perzistenciu medzi požiadavkami, čím zabraňuje strate dát pri dlhotrvajúcich úlohách agenta
- **Odkazy akcií v riadku pluginu** — opravené a premenované kvôli zrozumiteľnosti

## 1.10.0 — Vydané 2026-05-05

### Nové

- **Internetové vyhľadávanie Tavily** — pridáva Tavily ako poskytovateľa vyhľadávania pre bohatšie výsledky internetového vyhľadávania popri Brave Search
- **Vstavané zručnosti zohľadňujúce tému** — príručky zručností pre blokové témy, klasické témy, Kadence Blocks a Kadence Theme sa teraz dodávajú s pluginom
- **Schopnosť kontaktného formulára tvorcu webu** — pridajte kontaktný formulár na ľubovoľnú stránku priamo z rozhrania chatu

### Vylepšené

- **Integrácia WooCommerce refaktorovaná** — teraz používa natívne WooCommerce API pre lepšiu spoľahlivosť a kompatibilitu
- **Zoznam poskytovateľov sa obnovuje automaticky** — keď je aktivovaný alebo deaktivovaný ľubovoľný plugin

### Opravené

- **Schopnosť navigate-to** — opravená nekonečná slučka opätovného načítania na niektorých administračných stránkach
- **Schopnosť list-posts** — teraz správne prevádza názvy kategórií a značiek na slugy
- **Príkazy WP-CLI** — obnovené chýbajúce aliasy namespace po predchádzajúcom refaktorovaní
- **Automatizácia udalostí** — elegantne spracúva weby, kde tabuľky automatizácie ešte nie sú vytvorené
- **Schopnosť memory-save** — teraz používa správny prefix namespace v zostavovači systémových pokynov
- **Skalárne výsledky nástrojov** — teraz sú pred vrátením AI správne zabalené
- **Štatistiky používania** — teraz pri prechode zo starších verzií správne spracúvajú starší formát kľúča schopnosti
