---
title: Admin Page Creator Veranderingslog
sidebar_position: 99
_i18n_hash: 60442b433a1fe73d3624b115e3d153a5
---
# Admin Page Creator Veranderingslog

### Versie 1.9.0 - Uitgereik op 2026-01-18

* Gefiks: Fatale foute tydens aktivering.
* Gerefactoreer: Inhoudbron klasse gebruik Singleton-kenmerk met behoorlike ouer-konstruksie-initialisering.
* Gefiks: Vue.js-sjabloon-kompilasiefoute wat die inhoudstype-kiezer hinderd om te vertoon.
* Gefiks: Ontbrekende Vue-data-eienskappe (template_id, external_link_url_embedable, external_link_url_checking).
* Gefiks: TinyMCE-redigeerder initialiseer nie behoorlik op bladsylaai nie.
* Gefiks: Divi-ondersteuningslêer word nie outolaai via Composer nie.
* Gefiks: Verkrampte PHP-sintaksie in Divi-ondersteuningsklas.
* Verbeterd: JavaScript-middelorganisasie en minifikasie.
* Verbeterd: Kompatibiliteit met die nuutste WordPress en bladsybouversies.

= Versie: 1.8.8 - Uitgereik op 2025-09-28

* Hernoem voorvoegsel na ultimate-multisite; werk teksdomein by; verhoog weergawe.

### Versie 1.8.7 - 04/10/2023

* Gefiks: Fatale fout tydens poging om nuwe admin-bladsy by te voeg;
* Gefiks: Konflik met Oxygen-stylesheets voorvoegsel;

### Versie 1.8.6 - 09/08/2023

* Toegevoeg: Toegevoeg 'n opsie om data vanaf die hoofwebwerf of die huidige sub-webwerf te vertoon.
* Toegevoeg: Ondersteuning vir die WordPress Block Editor (Gutenberg).
* Gefiks: Probleem met Brizy-bladsy-middel nie laai nie.

### Versie 1.8.5 - 09/12/2020

* Gefiks: Probleem met Skermopsies om die menu te verberg wat nie weggaan nie;

### Versie 1.8.4 - 11/11/2020

* Gefiks: Ondersteuning vir Multisite Ultimate v2;

### Versie 1.8.3 - 01/10/2020

* Gefiks: Inkompatibiliteite met Beaver Builder van vorige bou;
* Gefiks: Margin-inkonsistenties met WP 5.5;

### Versie 1.8.2 - 21/09/2020

* Gefiks: Klein inkompatibiliteite met WP 5.5;

### Versie 1.8.1 - 05/08/2020

* Gefiks: Inkompatibiliteit met Brizy 2.0;
* Gefiks: Klein prestasieprobleme tydens bou van die menu-lis;

### Versie 1.8.0 - 27/04/2020

* Gefiks: Kennisgewende onder die topbalk wanneer geen margin-modus gekies is nie;
* Toegevoeg: Aangepaste bladsye kan nou verskeie WordPress admin top-level en sub-bladsye terselfdertyd vervang;
* Toegevoeg: Admins kan nou admin-bladsye verberg deur WP Admin Pages PRO;

### Versie 1.7.9 - 01/04/2020

* Gefiks: Brizy 1.10.118 en hoër breek SVG-ondersteuning op admin-bladsye;

### Versie 1.7.8 - 26/03/2020

* Gefiks: Escaping-fout breek die Editor-bladsy wanneer Frans gebruik word;

### Versie 1.7.7 - 04/03/2020

* Gefiks: Klein inkompatibiliteit met Brizy Builder;
* Verbeterd: Freemius SDK op 2.3.2 opgedateer;

### Versie 1.7.6 - 10/02/2020

* Gefiks: Admin Page redigeerknoppie in die onder-rechts hoek werk nie op Dashboard Widgets nie;
* Gefiks: Klein inkompatibiliteit met Astra;
* Gefiks: Nuwe weergawe van Brizy breek kompatibiliteit;

### Versie 1.7.5 - 14/12/2019

* Gefiks: Toegevoeg 'n nuwe randgeval-hanter om menu-items op die Vervang Bladsy-optie te vul;
* Gefiks: Elementor-lettertipes werk nie;
* Verbeterd: Freemius SDK opgedateer om sensitiewe inligting van die Rekening-bladsy te verberg;

### Versie 1.7.4 - 29/11/2019

* Gefiks: Inkompatibiliteit met WooCommerce Memberships;
* Gefiks: Oxygen Builder-tabel-komponent werk nie;
* Gefiks: Beaver Themer werk nie;

### Versie 1.7.3 - 12/07/2019

* Gefiks: Bladsye verdwyn wanneer hul ouer na 'n ander admin-bladsy-tipe omskakel;
* Verbeterd: Beter tabelkrytings tussen Admin Page-tipes;
* Verbeterd: Sekuriteitsbeoordeling van die hele kodebasis van die plugin;
* Verbeterd: Nota oor Separator-tabel waarskuwing wanneer die funksie nie beskikbaar is vir 'n gegewe menu/inhoudbron-tipe nie;

### Versie 1.7.2 - 01/07/2019

* Gefiks: Freemius SDK weergawe op 2.3.0 opgedateer;
* Gefiks: Inkompatibiliteitprobleem met Flywheel;

### Versie 1.7.1 - 27/06/2019

* Gefiks: Welkom-widget vertoon nou vir alle rolle;
* Gefiks: Skermopsie om die Admin Pages-menu te verberg/vertoon word nie bygevoeg as die menu deur die filter gedokumenteer op https://docs.wpadminpagespro.com/knowledge-base/hiding-wp-admin-pages-pro-from-your-users/ nie;
* Verbeterd: Verberg van die Admin Pages-menus verberg nou ook die templates geskep uit die Beaver Builder gestoor templates-lis op die bou UI;
* Toegevoeg: Opsies om admin-bladsye in bulk te aktiveer en deaktiveer;
* Toegevoeg: Opsie om bladsye op die hoofwebwerf ook te vertoon;
* Toegevoeg: Opsie om top- en sub-level menu-etikette op Vervang-modus te hernoem;

### Versie 1.7.0 - 04/06/2019

* Oplossing: Probleme met Oxygen-sjablone wat nie vertoon nie;
* Toegevoeg: Ondersteuning vir Widget Skep!

### Versie 1.6.1 - 22/05/2019

* Gefiks: Typfoute;
* Gefiks: Sub-menu bladsye oorskryf vorige sub-menu-items met dieselfde volgorde-waarde;
* Gefiks: Duplisering herstel nou die slug van die gedupliceerde bladsy;
* Verbeterd: pt_BR en es_ES po-lêers opgedateer;
* Verbeterd: Tabellys noem nou die naam van aangepaste bladsye as ouer-bladsye ook;

### Versie 1.6.0 - 21/05/2019

* Toegevoeg: Eksterne Skakels ondersteun nou iframe-laai ook;

### Versie 1.5.5 - 17/05/2019

* Gefiks: Waarskuwingboodskap word gegiet wanneer 'n bladsy geskrap of gedupliceer is;
* Gefiks: Toestemmingsinstellings word nie op Admins toegepas nie;

### Versie 1.5.4 - 08/05/2019

* Gefiks: Inkompatibiliteite met Sliced Invoices;
* Gefiks: Klein probleem met Oxygen;
* Gefiks: Placeholder op nuwe admin-bladsy-titelveld gaan nie weg op key-up nie;

### Versie 1.5.3 - 03/05/2019

* Gefiks: Inkompatibiliteit met Advanced Custom Field opsie-bladsye;
* Toegevoeg: Opsie om spesifieke gebruikers as doelwitte van aangepaste admin-bladsye by te voeg;

### Versie 1.5.2 - 30/04/2019

* Gefiks: Inkompatibiliteite met nuwe Brizy-werke;
* Toegevoeg: Spaans vertaling bygevoeg - dankie aan John Rozzo. Dankie, John!
* Toegevoeg: Beta-ondersteuning vir Oxygen Builder;

### Versie 1.5.1 - 15/04/2019

* Gefiks: Probleem met placeholders op die Normale en HTML-redigeerders;
* Gefiks: Admin Pages vertoon nie op Tools -> Export nie;
* Gefiks: Laai scripts en styles net op ons eie bladsye;
* Toegevoeg: Super Admins kan nou Admin Pages dupliseer;

### Versie 1.5.0 - 29/03/2019

* Gefiks: Klein foute gevang deur Sentry;
* Gefiks: Delete-knoppie werk nie op die Edit Admin-bladsy-skerm nie;
* Verbeterd: Verander die BeaverBuilder-knoppie om duidelik te maak dat die standaard BB-lisensie ook ondersteun word;
* Toegevoeg: Admins kan nou die volgorde van submenus ook stel;
* Toegevoeg: Vervang-bladsy-modus het nou ondersteuning vir alle beskikbare menu-items;

### Versie 1.4.0 - 14/02/2019 (stand-alone) & 27/02/2019 (add-on)

* Toegevoeg: Gestart as 'n stand-alone plugin in https://wpadminpagespro.com
* Toegevoeg: Opsie om die Admin Pages-menu-item uit die menu te verwyder nadat die bladsy-skepproses voltooi is;
* Toegevoeg: Opsie om admin-kennisgewende van admin-bladsye te verwyder;
* Toegevoeg: Inhoudverwerking, sodat jy placeholders soos {{user:first_name}} kan plaas en dit outomaties met die gebruiker first_name-meta-veld vervang;
* Toegevoeg: Inline Editor;
* Toegevoeg: Geëntegreerde inhoudbron ouer-klasse om die toevoeging van nuwe Page Builders/Content Sources in die toekoms maklik te maak;
* Toegevoeg: Ondersteuning vir Eksterne URLs;

### Versie 1.3.0 - 15/01/2019

* Gefiks: Admin Pages verskyn nie op die hoofwebwerf op multisite-omgewings nie;
* Verbeterd: Multisite Ultimate aangepaste pos-tipes uit die export-skerm van subsites verwyder;
* Toegevoeg: Topbalk met vinnige aksies vir netwerkadmins op die skep-bladsye;
* Toegevoeg: GROOT! Elementor-ondersteuning!
* Toegevoeg: GROOT! Brizy-ondersteuning!

### Versie 1.2.1 - 17/11/2018

* Gefiks: Maak die plugin verenigbaar met Multisite Ultimate 1.9.0;

### Versie 1.2.0 - 10/09/2018

* Toegevoeg: PHP-ondersteuning bygevoeg indien WU_APC_ALLOW_PHP_PROCESSING op wp-config.php op 'true' gestel is. Dit gebruik nie PHP's eval nie, maar dit kan steeds sekuriteitslekke lei. Gebruik dit sorgvuldig;
* Verbeterd: Add-on plugin updater;
* Verbeterd: Nuwe URL vir die updates-bediener;

### Versie 1.1.2 - 16/08/2018

* Gefiks: Klein probleem met WP Engine;

### Versie 1.1.1 - 16/08/2018

* Gefiks: Toestemmings word nie korrek toegepas op vervang-bladsye nie;

### Versie 1.1.0 - 15/08/2018

* Toegevoeg: Beaver Builder-sjablone word nou ondersteun! Jy kan jou gunsteling bladsybou gebruik om aangepaste admin-bladsye te skep;
* Toegevoeg: Nou is dit moontlik om die inhoud van die WordPress standaard admin-bladsye ook te vervang;
* Toegevoeg: Nou is dit moontlik om die geskepte inhoud aan die top of bottom van standaard WordPress admin-bladsye toe te voeg;

### 0.0.1
- Eerste uitreiking
