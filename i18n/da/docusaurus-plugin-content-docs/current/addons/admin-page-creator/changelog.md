---
title: Ændringslog for Admin Page Creator
sidebar_position: 99
_i18n_hash: 60442b433a1fe73d3624b115e3d153a5
---
# Changelog for Admin Page Creator

### Version 1.9.0 - Udgivet den 2026-01-18 {#version-190---released-on-2026-01-18}

* Fixet: Fatale fejl ved aktivering.
* Refaktoriseret: Indholdskildeklasser til at bruge Singleton trait med korrekt initialisering af forældrekonstruktoren
* Fixet: Vue.js template kompileringfejl, der forhindrede content type selector i at blive vist
* Fixet: Manglende Vue data-egenskaber (template_id, external_link_url_embedable, external_link_url_checking)
* Fixet: TinyMCE redaktør startede ikke korrekt ved indlæsning af siden
* Fixet: Divi supportfil blev ikke automatisk indlæst via Composer
* Fixet: Korrupt PHP-syntaks i Divi supportklassen
* Forbedret: JavaScript asset organisering og minificering
* Forbedret: Kompatibilitet med de nyeste WordPress- og page builder-versioner

= Version: 1.8.8 - Udgivet den 2025-09-28

* Navngivet præfiks til ultimate-multisite; opdateret tekstdomæne; version opgraderet.

### Version 1.8.7 - 04/10/2023 {#version-187---04102023}

* Fixet: Fatale fejl ved forsøg på at tilføje en ny admin side;
* Fixet: Konflikt med præfiks for Oxygen stylesheets;

### Version 1.8.6 - 09/08/2023 {#version-186---09082023}

* Tilføjet: Tilføjet et valg til at vise data fra hovedsitet eller det aktuelle sub-site.
* Tilføjet: Understøttelse af WordPress Block Editor (Gutenberg).
* Fixet: Udbedret problemet med Brizy sideassets, der ikke blev indlæst.

### Version 1.8.5 - 09/12/2020 {#version-185---09122020}

* Fixet: Problem med Screen Options til at skjule menuen, som ikke forsvandt;

### Version 1.8.4 - 11/11/2020 {#version-184---11112020}

* Fixet: Understøttelse af Multisite Ultimate v2;

### Version 1.8.3 - 01/10/2020 {#version-183---01102020}

* Fixet: Inkompatibiliteter med Beaver Builder fra tidligere bygning;
* Fixet: Margin-inkonsistenser med WP 5.5;

### Version 1.8.2 - 21/09/2020 {#version-182---21092020}

* Fixet: Små inkompatibiliteter med WP 5.5;

### Version 1.8.1 - 05/08/2020 {#version-181---05082020}

* Fixet: Inkompatibilitet med Brizy 2.0;
* Fixet: Små ydeevneproblemer ved opbygning af menuoversigten;

### Version 1.8.0 - 27/04/2020 {#version-180---27042020}

* Fixet: Meddelelser, der skjules under topbaren, når ingen margin-tilstand er valgt;
* Tilføjet: Custom sider kan nu erstatte flere WordPress admin top-niveau og under-sider på samme tid;
* Tilføjet: Admins kan nu skjule admin-sider ved hjælp af WP Admin Pages PRO;

### Version 1.7.9 - 01/04/2020 {#version-179---01042020}

* Fixet: Brizy 1.10.118 og opefter brydende SVG-understøttelse på admin-sider;

### Version 1.7.8 - 26/03/2020 {#version-178---26032020}

* Fixet: Escaping fejl, der ødelagde redigeringssiden ved brug af fransk;

### Version 1.7.7 - 04/03/2020 {#version-177---04032020}

* Fixet: Små inkompatibilitet med Brizy Builder;
* Forbedret: Opdateret Freemius SDK til 2.3.2;

### Version 1.7.6 - 10/02/2020 {#version-176---10022020}

* Fixet: Redigeringsknappen på nederste højre hjørne på Dashboard Widgets virker ikke;
* Fixet: Små inkompatibiliteter med Astra;
* Fixet: Ny version af Brizy bryder kompatibiliteten;

### Version 1.7.5 - 14/12/2019 {#version-175---14122019}

* Tilføjet: En ny edge-case håndterer tilføjelse af menupunkter på Replace Page-muligheden;
* Fixet: Elementor skrifttyper virker ikke;
* Forbedret: Opdateret Freemius SDK til at understøtte skjuling af følsom information fra Account-siden;

### Version 1.7.4 - 29/11/2019 {#version-174---29112019}

* Udbedret: Inkompatibilitet med WooCommerce Memberships;
* Udbedret: Oxygen Builder tab component virker ikke;
* Udbedret: Beaver Themer virker ikke;

### Version 1.7.3 - 12/07/2019 {#version-173---12072019}

* Udbedret: Sider forsvinder, når deres forældre konverteres til en anden admin side-type;
* Forbedret: Bedre linjeseparatorer i tabeller mellem Admin Page typer;
* Forbedret: Sikkerhedsoversigt af hele pluginets kodebase;
* Forbedret: Bemærkning om Separator-fanen, når funktionen ikke er tilgængelig for en given menu/indholdskilde type.

### Version 1.7.2 - 01/07/2019 {#version-172---01072019}

* Udbedret: Opdateret Freemius SDK version til 2.3.0;
* Udbedret: Inkompatibilitetsproblem med Flywheel;

### Version 1.7.1 - 27/06/2019 {#version-171---27062019}

* Udbedret: Velkomstwidget vises nu for alle roller;
* Udbedret: Skærmmulighed til at skjule/vise Admin Pages menuen er ikke tilføjet, hvis menuen skjules via filter dokumenteret på https://docs.wpadminpagespro.com/knowledge-base/hiding-wp-admin-pages-pro-from-your-users/
* Forbedret: Skjulning af Admin Pages menuer gemmer nu også de skabeloner, der er lavet fra listen over gemte skabeloner fra Beaver Builder på byggergrænsefladen;
* Tilføjet: Mulighed for at aktivere og deaktivere admin sider i bulk;
* Tilføjet: Mulighed for at vise sider på hovedsiden også;
* Tilføjet: Mulighed for at ændre navnet på top- og underniveau menuetiketter i Replace mode.

### Version 1.7.0 - 04/06/2019 {#version-170---04062019}

* Fix: Problemer med, at Oxygen skabeloner ikke vises;
* Tilføjet: Understøttelse af Widget Creation!

### Version 1.6.1 - 22/05/2019 {#version-161---22052019}

* Rettet fejl: Typografiske fejl;
* Rettet fejl: Under-menu sider, der overskrevde tidligere under-menu elementer med samme rækkefølgeværdi;
* Rettet fejl: Duplikering nulstiller nu slug'en for den duplikerede side;
* Forbedret: Opdaterede pt_BR og es_ES po filer;
* Forbedret: Listen over tabeller viser nu navnet på de brugerdefinerede sider som forældre-sider også.

### Version 1.6.0 - 21/05/2019 {#version-160---21052019}

* Tilføjet: Eksterne links understøtter nu også iframe-indlæsning;

### Version 1.5.5 - 17/05/2019 {#version-155---17052019}

* Rettet fejl: Advarselsbesked, der blev kastet ved sletning eller duplikering af en side;
* Rettet fejl: Tilladelsesindstillinger blev ikke anvendt på Administratorer;

### Version 1.5.4 - 08/05/2019 {#version-154---08052019}

* Rettet fejl: Inkompatibiliteter med Sliced Invoices;
* Rettet fejl: Lille problem med Oxygen;
* Rettet fejl: Placeholder i det nye felt for titel på admin-siden gik ikke videre ved tastetryk;

### Version 1.5.3 - 03/05/2019 {#version-153---03052019}

* Rettet fejl: Inkompatibilitet med Advanced Custom Field option sider;
* Tilføjet: Mulighed for at tilføje specifikke brugere som mål for brugerdefinerede admin-sider;

### Version 1.5.2 - 30/04/2019 {#version-152---30042019}

* Rettet fejl: Inkompatibiliteter med nyere versioner af Brizy;
* Tilføjet: Spansk oversættelse tilføjet – takket John Rozzo. Tak, John!
* Tilføjet: Beta-support til Oxygen Builder;

### Version 1.5.1 - 15/04/2019 {#version-151---15042019}

* Rettet fejl: Problem med placeholders i Normal og HTML redaktører;
* Rettet fejl: Admin-sider viste ikke under Tools -> Export;
* Rettet fejl: Indlæsning af scripts og styles kun på vores egne sider;
* Tilføjet: Superadministratorer kan nu duplikere admin-sider;

### Version 1.5.0 - 29/03/2019 {#version-150---29032019}

* Rettet fejl: Små bugs fanget af Sentry;
* Rettet fejl: Slet-knappen virker ikke på siden til redigering i admin-panelet;
* Forbedret: Ændret BeaverBuilder-knappen for tydeligt at angive, at Standard BB-licensen også understøttes;
* Tilføjet: Admins kan nu også bestemme rækkefølgen af undermenuerne;
* Tilføjet: Erstatningsside-tilstand har nu understøttelse for alle tilgængelige menupunkter.

### Version 1.4.0 - 14/02/2019 (standalone) & 27/02/2019 (add-on) {#version-140---14022019-stand-alone--27022019-add-on}

* Tilføjet: Lanceret som et standalone plugin på https://wpadminpagespro.com
* Tilføjet: Mulighed for at fjerne menupunktet "Admin Pages" fra menuen efter, at sideoprettelsesprocessen er færdig;
* Tilføjet: Mulighed for at fjerne admin-meddelelser fra admin-sider;
* Tilføjet: Indholdsprocessering, så du kan placere placeholders som `{{user:first_name}}` og få det automatisk erstattet med brugerens `first_name` meta-felt;
* Tilføjet: Inline Editor;
* Tilføjet: Konsolideret rodklasse for indholds-kildeforælderen for at gøre det nemmere at tilføje nye Page Builders/Content Sources i fremtiden;
* Tilføjet: Understøttelse af eksterne URL'er;

### Version 1.3.0 - 15/01/2019 {#version-130---15012019}

* Rettet fejl: Admin Pages vises ikke på hovedsiden i multisite-miljøer;
* Forbedret: Fjernet Multisite Ultimate custom post types fra eksporteringsskærmen for undersiderne;
* Tilføjet: Topbar med hurtig handling til netværksadministratorer ved oprettelse af sider;
* TILFØJET: HUGE! Elementor Support!
* TILFØJET: HUGE! Brizy Support!

### Version 1.2.1 - 17/11/2018 {#version-121---17112018}

* Rettet fejl: Gør plugin kompatibel med Multisite Ultimate 1.9.0;

### Version 1.2.0 - 10/09/2018 {#version-120---10092018}

* Tilføjet: PHP-understøttelse tilføjet, hvis `WU_APC_ALLOW_PHP_PROCESSING` er sat til true i wp-config.php. Dette bruger ikke PHP's eval, men det kan stadig føre til sikkerhedshuller. Brug dette med forsigtighed;
* Forbedret: Add-on plugin updater;
* Forbedret: Ny URL for opdateringsserveren;

### Version 1.1.2 - 16/08/2018 {#version-112---16082018}

* Udbedret: Lille problem med WP Engine;

### Version 1.1.1 - 16/08/2018 {#version-111---16082018}

* Udbedret: Tilladelser blev ikke korrekt anvendt ved udskiftning af sider;

### Version 1.1.0 - 15/08/2018 {#version-110---15082018}

* Tilføjet: Beaver Builder-templer understøttes nu! Du kan bruge dit yndlingssidebuilder til at skabe skræddersyede admin-sider;
* Tilføjet: Nu er det muligt at udskifte indholdet i WordPress' standardadmin-sider også;
* Tilføjet: Nu er det muligt at tilføje indhold, der er oprettet, øverst eller nederst på WordPress' standardadmin-sider også;

### 0.0.1 {#001}
- Indledende udgivelse
