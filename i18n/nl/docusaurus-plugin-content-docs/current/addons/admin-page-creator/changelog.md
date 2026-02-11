---
title: Admin Page Creator Wijzigingslog
sidebar_position: 99
_i18n_hash: 60442b433a1fe73d3624b115e3d153a5
---
# Admin Page Creator Changelog

### Version 1.9.0 - Released on 2026-01-18

* Opgelost: Fatale fouten bij activeren.
* Herzien: Content source classes om Singleton trait te gebruiken met juiste parent constructor initialisatie
* Opgelost: Vue.js template compilatiefouten die de content type selector verhinderen te renderen
* Opgelost: Ontbrekende Vue data eigenschappen (template_id, external_link_url_embedable, external_link_url_checking)
* Opgelost: TinyMCE editor initialiseert niet correct bij paginaverkenning
* Opgelost: Divi support bestand wordt niet automatisch geladen via Composer
* Opgelost: Corrupt PHP syntax in Divi support class
* Verbeterd: JavaScript asset organisatie en minificatie
* Verbeterd: Compatibiliteit met nieuwste WordPress en page builder versies

= Version: 1.8.8 - Released on 2025-09-28

* Prefix hernoemd naar ultimate-multisite; tekstdomein bijgewerkt; versie verhoogd.

### Version 1.8.7 - 04/10/2023

* Opgelost: Fatale fout bij het proberen toevoegen van een nieuwe admin pagina;
* Opgelost: Conflict met Oxygen stylesheets prefix;

### Version 1.8.6 - 09/08/2023

* Toegevoegd: Optie om data van de hoofdsite of de huidige sub-site weer te geven.
* Toegevoegd: Ondersteuning voor de WordPress Block Editor (Gutenberg).
* Opgelost: Probleem met Brizy pagina assets die niet laden opgelost.

### Version 1.8.5 - 09/12/2020

* Opgelost: Probleem met Schermopties om het menu te verbergen die niet verdwijnen;

### Version 1.8.4 - 11/11/2020

* Opgelost: Ondersteuning voor Multisite Ultimate v2;

### Version 1.8.3 - 01/10/2020

* Opgelost: Incompatibiliteiten met Beaver Builder uit vorige build;
* Opgelost: Marge inconsistenties met WP 5.5;

### Version 1.8.2 - 21/09/2020

* Opgelost: Kleine incompatibiliteiten met WP 5.5;

### Version 1.8.1 - 05/08/2020

* Opgelost: Incompatibiliteit met Brizy 2.0;
* Opgelost: Kleine prestatieproblemen bij het bouwen van de menu lijst;

### Version 1.8.0 - 27/04/2020

* Opgelost: Meldingen verborgen onder de top-bar wanneer geen margemodus is geselecteerd;
* Toegevoegd: Aangepaste pagina's kunnen nu meerdere WordPress admin top-level en sub-pagina's tegelijk vervangen.
* Toegevoegd: Beheerders kunnen nu admin pagina's verbergen met WP Admin Pages PRO;

### Version 1.7.9 - 01/04/2020

* Opgelost: Brizy 1.10.118 en hoger breekt SVG ondersteuning op admin pagina's;

### Version 1.7.8 - 26/03/2020

* Opgelost: Escaping fout die de Editor pagina breekt bij gebruik van Frans;

### Version 1.7.7 - 04/03/2020

* Opgelost: Kleine incompatibiliteit met Brizy Builder;
* Verbeterd: Freemius SDK bijgewerkt naar 2.3.2;

### Version 1.7.6 - 10/02/2020

* Opgelost: Admin Page bewerkknop in rechteronderhoek werkt niet op Dashboard Widgets;
* Opgelost: Kleine incompatibiliteit met Astra;
* Opgelost: Nieuwe versie van Brizy breekt compatibiliteit;

### Version 1.7.5 - 14/12/2019

* Opgelost: Nieuwe edge-case handler toegevoegd om menu items te vullen op de Replace Page optie;
* Opgelost: Elementor fonts werken niet;
* Verbeterd: Freemius SDK bijgewerkt om gevoelige info te verbergen op de Account pagina;

### Version 1.7.4 - 29/11/2019

* Opgelost: Incompatibiliteit met WooCommerce Memberships;
* Opgelost: Oxygen Builder tab component werkt niet;
* Opgelost: Beaver Themer werkt niet;

### Version 1.7.3 - 12/07/2019

* Opgelost: Pagina's verdwijnen wanneer hun ouder wordt geconverteerd naar een ander admin pagina type;
* Verbeterd: Betere lijst tabel scheidingen tussen Admin Page types;
* Verbeterd: Beveiligingsreview van de gehele codebase van de plugin;
* Verbeterd: Opmerking over Separator tab waarschuwing wanneer de functie niet beschikbaar is voor een bepaald menu/content source type;

### Version 1.7.2 - 01/07/2019

* Opgelost: Freemius SDK versie bijgewerkt naar 2.3.0;
* Opgelost: Incompatibiliteitsprobleem met Flywheel;

### Version 1.7.1 - 27/06/2019

* Opgelost: Welcome Widget wordt nu weergegeven aan alle rollen;
* Opgelost: Schermoptie om het Admin Pages menu te verbergen/weergeven wordt niet toegevoegd als het menu verborgen wordt via de filter gedocumenteerd op https://docs.wpadminpagespro.com/knowledge-base/hiding-wp-admin-pages-pro-from-your-users/
* Verbeterd: Verbergen van de Admin Pages menu's verbergt nu ook de templates gemaakt vanuit de Beaver Builder opgeslagen templates lijst op de builder UI.
* Toegevoegd: Opties om admin pagina's in bulk te activeren en deactiveren.
* Toegevoegd: Optie om pagina's op de hoofdsite weer te geven.
* Toegevoegd: Optie om top- en subniveau menu labels te hernoemen in Replace mode;

### Version 1.7.0 - 04/06/2019

* Opgelost: Problemen met Oxygen templates die niet verschijnen.
* Toegevoegd: Ondersteuning voor Widget Creation!

### Version 1.6.1 - 22/05/2019

* Opgelost: Typfouten.
* Opgelost: Sub-menu pagina's overschrijven eerdere sub-menu items met dezelfde orderwaarde.
* Opgelost: Dubbel maken reset nu de slug van de gedupliceerde pagina.
* Verbeterd: pt_BR en es_ES po bestanden bijgewerkt.
* Verbeterd: Lijst tabel toont nu de naam van aangepaste pagina's als ouder pagina's ook.

### Version 1.6.0 - 21/05/2019

* Toegevoegd: Externe Links ondersteunen nu ook iframe laden.

### Version 1.5.5 - 17/05/2019

* Opgelost: Waarschuwing bericht wordt getoond wanneer een pagina werd verwijderd of gedupliceerd.
* Opgelost: Permissie instellingen worden niet toegepast op Admins.

### Version 1.5.4 - 08/05/2019

* Opgelost: Incompatibiliteiten met Sliced Invoices.
* Opgelost: Kleine probleem met de Oxygen.
* Opgelost: Placeholder op nieuw admin pagina titel veld gaat niet weg bij key-up.

### Version 1.5.3 - 03/05/2019

* Opgelost: Incompatibiliteit met Advanced Custom Field optie pagina's.
* Toegevoegd: Optie om specifieke gebruikers toe te voegen als doel van aangepaste admin pagina's.

### Version 1.5.2 - 30/04/2019

* Opgelost: Incompatibiliteiten met nieuwere versies van Brizy.
* Toegevoegd: Spaanse vertaling toegevoegd - dank aan John Rozzo. Bedankt, John!
* Toegevoegd: Beta ondersteuning voor Oxygen Builder.

### Version 1.5.1 - 15/04/2019

* Opgelost: Probleem met placeholders op de Normal en HTML editors.
* Opgelost: Admin Pages verschijnen niet op Tools -> Export.
* Opgelost: Scripts en styles laden alleen op onze eigen pagina's.
* Toegevoegd: Super Admins kunnen nu Admin Pages dupliceren.

### Version 1.5.0 - 29/03/2019

* Opgelost: Kleine bugs opgevangen door Sentry.
* Opgelost: Delete knop werkt niet op het Edit Admin pagina scherm.
* Verbeterd: BeaverBuilder knop gewijzigd om duidelijk te maken dat de Standard BB licentie ook ondersteund wordt.
* Toegevoegd: Admins kunnen ook de volgorde van submenus instellen.
* Toegevoegd: Replace page mode heeft nu ondersteuning voor alle beschikbare menu items.

### Version 1.4.0 - 14/02/2019 (stand-alone) & 27/02/2019 (add-on)

* Toegevoegd: Gelanceerd als Stand-alone plugin in https://wpadminpagespro.com
* Toegevoegd: Optie om het Admin Pages menu item te verwijderen uit het menu nadat het paginaverkenningsproces is voltooid.
* Toegevoegd: Optie om admin notices te verwijderen van admin pagina's.
* Toegevoegd: Content verwerking, zodat je placeholders zoals {{user:first_name}} kunt plaatsen en automatisch vervangen met de user first_name meta veld.
* Toegevoegd: Inline Editor.
* Toegevoegd: Consolidated content source parent class om het toevoegen van nieuwe Page Builders/Content Sources in de toekomst te vergemakkelijken.
* Toegevoegd: Ondersteuning voor External URLs.

### Version 1.3.0 - 15/01/2019

* Opgelost: Admin Pages verschijnen niet op de hoofdsite in multisite omgevingen.
* Verbeterd: Multisite Ultimate custom post types verwijderd van het export scherm van subsites.
* Toegevoegd: Top-bar met snelle acties voor netwerk admins op de create pagina's.
* Toegevoegd: GROOT! Elementor Support!
* Toegevoegd: GROOT! Brizy Support!

### Version 1.2.1 - 17/11/2018

* Opgelost: Plugin compatibel maken met Multisite Ultimate 1.9.0.

### Version 1.2.0 - 10/09/2018

* Toegevoegd: PHP ondersteuning toegevoegd als WU_APC_ALLOW_PHP_PROCESSING is ingesteld op true in wp-config.php. Dit gebruikt geen PHP eval, maar kan nog steeds beveiligingslekken veroorzaken. Gebruik dit voorzichtig.
* Verbeterd: Add-on plugin updater.
* Verbeterd: Nieuwe URL voor de updates server.

### 0.0.1

- Initiële Release
