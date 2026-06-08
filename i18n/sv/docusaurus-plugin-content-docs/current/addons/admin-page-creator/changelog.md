---
title: Admin Page Creator Ändringslogg
sidebar_position: 99
_i18n_hash: 60442b433a1fe73d3624b115e3d153a5
---
# Admin Page Creator Versionshistorik

### Version 1.9.0 - Släppt den 2026-01-18

* Åtgärdat: Kritiska fel vid aktivering.
* Omstrukturerat: Innehållskällklasserna använder Singleton trait med korrekt initialisering av föräldrakonstruktorn.
* Åtgärdat: Fel i Vue.js-mallkompileringen som hindrade innehållstyckelselektorn från att rendera.
* Åtgärdat: Saknade Vue-dataegenskaper (template_id, external_link_url_embedable, external_link_url_checking).
* Åtgärdat: TinyMCE-editorn initialiserades inte korrekt vid sidladdning.
* Åtgärdat: Divi supportfilen laddades inte automatiskt via Composer.
* Åtgärdat: Korrupt PHP-syntax i Divi supportklassen.
* Förbättrat: Organisation och minifiering av JavaScript-resurser.
* Förbättrat: Kompatibilitet med de senaste versionerna av WordPress och page builders.

= Version: 1.8.8 - Släppt den 2025-09-28

* Bytt prefix till ultimate-multisite; uppdaterat textdomän; versionsökning.

### Version 1.8.7 - 04/10/2023

* Åtgärdat: Kritiskt fel vid försök att lägga till en ny admin-sida;
* Åtgärdat: Konflikt med Oxygen-stilbladsprefix;

### Version 1.8.6 - 09/08/2023

* Lägger till: Ett alternativ för att visa data från huvudwebbplatsen eller den aktuella underwebbplatsen.
* Lägger till: Stöd för WordPress Block Editor (Gutenberg).
* Åtgärdat: Fixade problemet med att Brizy-sidresurser inte laddades.

### Version 1.8.5 - 09/12/2020

* Åtgärdat: Problem med Screen Options för att dölja menyn som inte försvann;

### Version 1.8.4 - 11/11/2020

* Åtgärdat: Stöd för Multisite Ultimate v2;

### Version 1.8.3 - 01/10/2020

* Åtgärdat: Inkompatibiliteter med Beaver Builder från tidigare versioner;
* Åtgärdat: Marginalinkonsekvenser med WP 5.5;

### Version 1.8.2 - 21/09/2020

* Åtgärdat: Små inkompatibiliteter med WP 5.5;

### Version 1.8.1 - 05/08/2020

* Åtgärdat: Inkompatibilitet med Brizy 2.0;
* Åtgärdat: Små prestandaproblem vid byggandet av menylistan;

### Version 1.8.0 - 27/04/2020

* Åtgärdat: Meddelanden som döljs under toppfältet när inget marginalläge väljs;
* Lägger till: Anpassade sidor kan nu ersätta flera WordPress admin top-level- och sub-sidor samtidigt;
* Lägger till: Administratörer kan nu dölja admin-sidor med WP Admin Pages PRO;

### Version 1.7.9 - 01/04/2020

* Åtgärdat: Brizy 1.10.118 och senare bryter SVG-stödet på admin-sidor;

### Version 1.7.8 - 26/03/2020

* Åtgärdat: Escaping-fel som bröt Editor-sidan när man använde franska;

### Version 1.7.7 - 04/03/2020

* Åtgärdat: Små inkompatibiliteter med Brizy Builder;
* Förbättrat: Uppdaterade Freemius SDK till 2.3.2;

### Version 1.7.6 - 10/02/2020

* Åtgärdat: Redigeringsknappen för admin-sidan i nedre högra hörnet fungerade inte på Dashboard Widgets;
* Åtgärdat: Små inkompatibiliteter med Astra;
* Åtgärdat: Ny version av Brizy bröt kompatibiliteten;

### Version 1.7.5 - 14/12/2019

* Åtgärdat: Lägger till en ny hanterare för sällsynta fall för att fylla i menyalternativ på Replace Page-alternativet;
* Åtgärdat: Elementor-typsnittet fungerade inte;
* Förbättrat: Uppdaterade Freemius SDK för att stödja döljande av känslig information från Account-sidan;

### Version 1.7.4 - 29/11/2019

* Åtgärdat: Inkompatibilitet med WooCommerce Memberships;
* Åtgärdat: Oxygen Builder tab-komponent fungerade inte;
* Åtgärdat: Beaver Themer fungerade inte;

### Version 1.7.3 - 12/07/2019

* Åtgärdat: Sidor försvann när deras förälder konverterades till en annan admin-sidetyp;
* Förbättrat: Bättre listtabellavdelare mellan Admin Page-typer;
* Förbättrat: Säkerhetsgranskning av hela pluginets kodbas;
* Förbättrat: Notis om Separator-fliken när funktionen inte är tillgänglig för en given meny-/innehållskälltyp.

### Version 1.7.2 - 01/07/2019

* Åtgärdat: Uppdaterade Freemius SDK-versionen till 2.3.0;
* Åtgärdat: Inkompatibilitetsproblem med Flywheel;

### Version 1.7.1 - 27/06/2019

* Åtgärdat: Welcome Widget visas nu för alla roller;
* Åtgärdat: Screen Option för att dölja/visa Admin Pages-menyn läggs inte till om menyn döljs via filtret på https://docs.wpadminpagespro.com/knowledge-base/hiding-wp-admin-pages-pro-from-your-users/
* Förbättrat: Döljandet av Admin Pages-menyer döljer nu även mallarna som skapats från Beaver Builder saved templates-listan i builder-gränssnittet;
* Lägger till: Alternativ för att massaktivera och inaktivera admin-sidor;
* Lägger till: Alternativ för att visa sidor på huvudwebbplatsen också;
* Lägger till: Alternativ att byta namn på topp- och undernivåmenylappar i Replace-läget;

### Version 1.7.0 - 04/06/2019

* Fix: Problem med att Oxygen-mallar inte visades;
* Lägger till: Stöd för Widget-skapande!

### Version 1.6.1 - 22/05/2019

* Åtgärdat: Stavfel;
* Åtgärdat: Undermeny-sidor överskrev tidigare undermenyalternativ med samma ordningsvärde;
* Åtgärdat: Duplicering återställer nu slugen för den duplicerade sidan;
* Förbättrat: Uppdaterade pt_BR och es_ES po-filer;
* Förbättrat: Listtabellen listar nu namnet på anpassade sidor som föräldrasidor också;

### Version 1.6.0 - 21/05/2019

* Lägger till: Externa länkar stöder nu ifram-laddning också;

### Version 1.5.5 - 17/05/2019

* Åtgärdat: Varningsmeddelande som kastades när en sida raderades eller duplicerades;
* Åtgärdat: Behörighetseinställningar tillämpades inte på Administratörer;

### Version 1.5.4 - 08/05/2019

* Åtgärdat: Inkompatibiliteter med Sliced Invoices;
* Åtgärdat: Små problem med Oxygen;
* Åtgärdat: Placeholder i nytt admin-sidtitelfält försvann inte vid key-up;

### Version 1.5.3 - 03/05/2019

* Åtgärdat: Inkompatibilitet med Advanced Custom Field option pages;
* Lägger till: Alternativ att lägga till specifika användare som mål för anpassade admin-sidor;

### Version 1.5.2 - 30/04/2019

* Åtgärdat: Inkompatibiliteter med nyare versioner av Brizy;
* Lägger till: Spansk översättning tillagd – tack till John Rozzo. Tack, John!
* Lägger till: Beta-stöd för Oxygen Builder;

### Version 1.5.1 - 15/04/2019

* Åtgärdat: Problem med placeholders i Normal- och HTML-editorerna;
* Åtgärdat: Admin Pages visas inte på Tools -> Export;
* Åtgärdat: Laddar scripts och stilar endast på våra egna sidor;
* Lägger till: Super-administratörer kan nu duplicera Admin Pages;

### Version 1.5.0 - 29/03/2019

* Åtgärdat: Små buggar fångade av Sentry;
* Åtgärdat: Radera-knappen fungerade inte på Edit Admin-sidan;
* Förbättrat: Ändrade BeaverBuilder-knappen för att göra det tydligt att Standard BB-licensen också stöds;
* Lägger till: Administratörer kan också ställa in ordningen på undermenyerna;
* Lägger till: Replace Page-läget har nu stöd för alla tillgängliga menyalternativ;

### Version 1.4.0 - 14/02/2019 (stand-alone) & 27/02/2019 (add-on)

* Lägger till: Lanserades som ett fristående plugin på https://wpadminpagespro.com
* Lägger till: Alternativ att ta bort Admin Pages-menyelementet från menyn efter att sidskapandet är klart;
* Lägger till: Alternativ att ta bort admin-meddelanden från admin-sidor;
* Lägger till: Innehållsprocessering, så du kan placera placeholders som {{user:first_name}} och få det automatiskt ersatt med användarens first_name meta-fält;
* Lägger till: Inline Editor;
* Lägger till: Konsoliderad innehållskällföräldraklass för att göra det enkelt att lägga till nya Page Builders/Content Sources i framtiden;
* Lägger till: Stöd för externa URL:er;

### Version 1.3.0 - 15/01/2019

* Åtgärdat: Admin Pages visas inte på huvudwebbplatsen i multisite-miljöer;
* Förbättrat: Tog bort Multisite Ultimate custom post types från exportskärmen för underwebbplatser;
* Lägger till: Toppfält med snabba åtgärder för nätverksadministratörer på skapningssidorna;
* Lägger till: STORT! Elementor-stöd!
* Lägger till: STORT! Brizy-stöd!

### Version 1.2.1 - 17/11/2018

* Åtgärdat: Gjorde pluginet kompatibelt med Multisite Ultimate 1.9.0;

### Version 1.2.0 - 10/09/2018

* Lägger till: PHP-stöd tillagd om WU_APC_ALLOW_PHP_PROCESSING är satt till true i wp-config.php. Detta använder inte PHP:s eval, men det kan fortfarande leda till säkerhetshål. Använd detta med försiktighet;
* Förbättrat: Add-on plugin updater;
* Förbättrat: Ny URL för uppdateringsservern;

### Version 1.1.2 - 16/08/2018

* Åtgärdat: Små problem med WP Engine;

### Version 1.1.1 - 16/08/2018

* Åtgärdat: Behörigheter tillämpades inte korrekt på ersättningssidor;

### Version 1.1.0 - 15/08/2018

* Lägger till: Beaver Builder-mallar stöds nu! Du kan använda din favorit page builder för att skapa anpassade admin-sidor;
* Lägger till: Nu är det möjligt att ersätta innehållet i WordPress standardadmin-sidor också;
* Lägger till: Nu är det möjligt att lägga till innehåll som skapats i toppen eller botten av standard WordPress admin-sidor också;

### 0.0.1
- Initial utgivning
