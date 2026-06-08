---
title: Admin Page Creator endringslogg
sidebar_position: 99
_i18n_hash: 60442b433a1fe73d3624b115e3d153a5
---
# Admin Page Creator Endringslogg

### Versjon 1.9.0 - Utgitt 2026-01-18

* Løst: Fatal feil ved aktivering.
* Refaktorisert: Innholdskildeklasser bruker nå Singleton-trait med korrekt initialisering av foreldrekonstruktoren
* Løst: Feil i Vue.js-malutviklingen som hindret at velgeren for innholdstype ble gjengitt
* Løst: Manglende Vue-dataegenskaper (template_id, external_link_url_embedable, external_link_url_checking)
* Løst: TinyMCE-editoren initialiserte ikke riktig ved lasting av siden
* Løst: Divi-støttefilen ble ikke lastet automatisk via Composer
* Løst: Korrupt PHP-syntaks i Divi-støtteklassen
* Forbedret: Organisering og minifisering av JavaScript-ressurser
* Forbedret: Kompatibilitet med de nyeste versjonene av WordPress og page builders

= Versjon: 1.8.8 - Utgitt 2025-09-28

* Endret prefiks til ultimate-multisite; oppdaterte tekstdomene; versjonsøkning.

### Versjon 1.8.7 - 04/10/2023

* Løst: Fatal feil ved forsøk på å legge til en ny admin-side;
* Løst: Konflikt med Oxygen-arkets prefix;

### Versjon 1.8.6 - 09/08/2023

* Lagt til: Mulighet til å vise data fra hovednettstedet eller det aktuelle undernettstedet.
* Lagt til: Støtte for WordPress Block Editor (Gutenberg).
* Løst: Løste problemet med at Brizy-side-ressurser ikke lastet.

### Versjon 1.8.5 - 09/12/2020

* Løst: Problemet med at "Screen Options" for å skjule menyen ikke forsvant;

### Versjon 1.8.4 - 11/11/2020

* Løst: Støtte for Multisite Ultimate v2;

### Versjon 1.8.3 - 01/10/2020

* Løst: Inkompatibiliteter med Beaver Builder fra tidligere versjoner;
* Løst: Margin-inkonsistenser med WP 5.5;

### Versjon 1.8.2 - 21/09/2020

* Løst: Små inkompatibiliteter med WP 5.5;

### Versjon 1.8.1 - 05/08/2020

* Løst: Inkompatibilitet med Brizy 2.0;
* Løst: Små ytelsesproblemer ved bygging av menylisten;

### Versjon 1.8.0 - 27/04/2020

* Løst: Varsler som ble skjult under topplinjen når ingen marginmodus var valgt;
* Lagt til: Tilpassede sider kan nå erstatte flere WordPress admin toppnivå- og undernivåsider samtidig;
* Lagt til: Administratorer kan nå skjule admin-sider ved hjelp av WP Admin Pages PRO;

### Versjon 1.7.9 - 01/04/2020

* Løst: Brizy 1.10.118 og nyere ødela SVG-støtten på admin-sider;

### Versjon 1.7.8 - 26/03/2020

* Løst: Escaping-feil som ødela Editor-siden når man brukte fransk;

### Versjon 1.7.7 - 04/03/2020

* Løst: Liten inkompatibilitet med Brizy Builder;
* Forbedret: Oppdatert Freemius SDK til 2.3.2;

### Versjon 1.7.6 - 10/02/2020

* Løst: Redigeringsknappen for Admin Page i nedre høyre hjørne fungerte ikke på Dashboard Widgets;
* Løst: Liten inkompatibilitet med Astra;
* Løst: Ny versjon av Brizy ødela kompatibiliteten;

### Versjon 1.7.5 - 14/12/2019

* Løst: Lagt til en ny håndterer for kanttilfeller for å fylle ut menyelementer i "Replace Page"-alternativet;
* Løst: Elementor-fonter fungerte ikke;
* Forbedret: Oppdatert Freemius SDK for å støtte skjuling av sensitiv informasjon fra Account-siden;

### Versjon 1.7.4 - 29/11/2019

* Løst: Inkompatibilitet med WooCommerce Memberships;
* Løst: Oxygen Builder tab-komponent fungerte ikke;
* Løst: Beaver Themer fungerte ikke;

### Versjon 1.7.3 - 12/07/2019

* Løst: Sider forsvant når deres forelder ble konvertert til en annen admin-side-type;
* Forbedret: Bedre skillelinjer i tabellvisningen mellom Admin Page-typer;
* Forbedret: Sikkerhetsgjennomgang av hele plugin-koden;
* Forbedret: Merknad om advarsel i Separator-fanen når funksjonen ikke er tilgjengelig for en gitt meny-/innholdskilde-type;

### Versjon 1.7.2 - 01/07/2019

* Løst: Oppdatert Freemius SDK-versjon til 2.3.0;
* Løst: Inkompatibilitetsproblem med Flywheel;

### Versjon 1.7.1 - 27/06/2019

* Løst: Welcome Widget vises nå for alle roller;
* Løst: Screen Option for å skjule/vise Admin Pages-menyen legges ikke til hvis menyen skjules via filteret dokumentert på https://docs.wpadminpagespro.com/knowledge-base/hiding-wp-admin-pages-pro-from-your-users/
* Forbedret: Skjuling av Admin Pages-menyer skjuler nå også malene som er opprettet fra listen over lagrede maler i Beaver Builder UI;
* Lagt til: Alternativer for masseaktivering og deaktivering av admin-sider;
* Lagt til: Alternativ for å vise sider på hovednettstedet også;
* Lagt til: Alternativ for å omdøpe topp- og undernivåmenyelementer i Replace-modus;

### Versjon 1.7.0 - 04/06/2019

* Løst: Problemer med at Oxygen-maler ikke vises;
* Lagt til: Støtte for Widget Creation!

### Versjon 1.6.1 - 22/05/2019

* Løst: Skrivefeil;
* Løst: Under-menyesider overstyrer tidligere under-menyelementer med samme rekkefølgeverdi;
* Løst: Duplisering tilbakestiller nå slug-en til den dupliserte siden;
* Forbedret: Oppdatert pt_BR og es_ES po-filer;
* Forbedret: Listetabellen lister nå navnet på tilpassede sider som foreldre-sider også;

### Versjon 1.6.0 - 21/05/2019

* Lagt til: Eksterne lenker støtter nå iframelasting også;

### Versjon 1.5.5 - 17/05/2019

* Løst: Advarselmelding som ble kastet når en side ble slettet eller duplisert;
* Løst: Tillatelsesinnstillinger ble ikke anvendt på administratorer;

### Versjon 1.5.4 - 08/05/2019

* Løst: Inkompatibiliteter med Sliced Invoices;
* Løst: Lite problem med Oxygen;
* Løst: Placeholder i nytt admin-sidetittel-felt forsvant ikke ved tastetrykk;

### Versjon 1.5.3 - 03/05/2019

* Løst: Inkompatibilitet med Advanced Custom Field option pages;
* Lagt til: Alternativ for å legge til spesifikke brukere som mål for tilpassede admin-sider;

### Versjon 1.5.2 - 30/04/2019

* Løst: Inkompatibiliteter med nyere versjoner av Brizy;
* Lagt til: Spansk oversettelse lagt til – takket være John Rozzo. Takk, John!
* Lagt til: Beta-støtte for Oxygen Builder;

### Versjon 1.5.1 - 15/04/2019

* Løst: Problem med plassholdere i Normal- og HTML-editorer;
* Løst: Admin Pages vises ikke på Tools -> Export;
* Løst: Laster kun scripts og stiler på våre egne sider;
* Lagt til: Super Administratorer kan nå duplisere Admin Pages;

### Versjon 1.5.0 - 29/03/2019

* Løst: Små feil fanget av Sentry;
* Løst: Sletteknappen fungerte ikke på Edit Admin-side-skjermen;
* Forbedret: Endret BeaverBuilder-knappen for å klargjøre at Standard BB-lisensen også støttes;
* Lagt til: Administratorer kan nå sette rekkefølgen på under-menyer også;
* Lagt til: Replace Page-modus har nå støtte for alle tilgjengelige menyelementer;

### Versjon 1.4.0 - 14/02/2019 (stand-alone) & 27/02/2019 (add-on)

* Lagt til: Lansert som stand-alone plugin på https://wpadminpagespro.com
* Lagt til: Alternativ for å fjerne Admin Pages-menyelementet fra menyen etter at sideopprettingen er fullført;
* Lagt til: Alternativ for å fjerne admin-varsler fra admin-sider;
* Lagt til: Innholdsprosessering, slik at du kan plassere plassholdere som {{user:first_name}} og få det automatisk erstattet med brukerens first_name meta-felt;
* Lagt til: Inline Editor;
* Lagt til: Konsolidert innholdskilde-foreldreklasse for å gjøre det enkelt å legge til nye Page Builders/Content Sources i fremtiden;
* Lagt til: Støtte for External URLs;

### Versjon 1.3.0 - 15/01/2019

* Løst: Admin Pages vises ikke på hovednettstedet i multisite-miljøer;
* Forbedret: Fjernet Multisite Ultimate custom post types fra eksportskjermen for undernettsteder;
* Lagt til: Topplinje med hurtighandlinger for nettverksadministratorer på opprettelsessidene;
* Lagt til: STORT! Elementor-støtte!
* Lagt til: STORT! Brizy-støtte!

### Versjon 1.2.1 - 17/11/2018

* Løst: Gjorde pluginet kompatibelt med Multisite Ultimate 1.9.0;

### Versjon 1.2.0 - 10/09/2018

* Lagt til: PHP-støtte lagt til hvis WU_APC_ALLOW_PHP_PROCESSING er satt til true i wp-config.php. Dette bruker ikke PHP's eval, men det kan fortsatt føre til sikkerhetshull. Bruk dette med forsiktighet;
* Forbedret: Add-on plugin-oppdaterer;
* Forbedret: Ny URL for oppdateringsserveren;

### Versjon 1.1.2 - 16/08/2018

* Løst: Lite problem med WP Engine;

### Versjon 1.1.1 - 16/08/2018

* Løst: Tillatelser ble ikke korrekt anvendt på erstatningssider;

### Versjon 1.1.0 - 15/08/2018

* Lagt til: Beaver Builder-maler støttes nå! Du kan bruke din favoritt page builder til å lage tilpassede admin-sider;
* Lagt til: Nå er det mulig å erstatte innholdet i WordPress' standard admin-sider også;
* Lagt til: Nå er det mulig å legge til innholdet som er opprettet i toppen eller bunnen av standard WordPress admin-sider også;

### 0.0.1
- Opprinnelig utgivelse
