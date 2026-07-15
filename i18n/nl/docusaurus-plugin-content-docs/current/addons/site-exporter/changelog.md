---
title: Site Exporter-wijzigingslog
sidebar_position: 99
_i18n_hash: 6ce7f1a3c455b0afe71a841b7b82319a
---
# Site Exporter Changelog

Versie: 1.0.6 - Uitgebracht op 2026-05-11
* Nieuw: site-exports bundelen nu een zelfstartende index.php, zodat de ZIP op een nieuwe host kan worden geïnstalleerd zonder aparte plugin-installatie
* Nieuw: netwerkexport laat beheerders alle subsites in één archief exporteren vanaf de Site Export-beheerpagina

Versie: 1.0.5 - Uitgebracht op 2026-05-05
* Fix: __callStatic toegevoegd aan de WP_CLI polyfill stub om niet-gemockte methoden zoals get_config af te handelen, waardoor test-bootstrap-fouten worden voorkomen

Versie: 1.0.4 - Uitgebracht op 2025-11-25

* Compatibiliteit met Ultimate Multisite 2.4 opgelost.

Versie: 1.0.2 - Uitgebracht op 2025-09-28

* Prefix hernoemd naar ultimate-multisite; text domain bijgewerkt; versieverhoging.

### Versie 1.0.1 - Uitgebracht op 2023-08-09 {#version-101---released-on-2023-08-09}

* Verbeterd: zorgt er nu voor dat het juiste bestandspad van het importer-bestand wordt verkregen.
* Opgelost: objectcache uitgeschakeld om fouten tijdens import te voorkomen.
* Opgelost: het probleem verholpen waarbij de downloadlink van de importer-plugin niet werkte.

### Versie 1.0.0 - Uitgebracht op 2022-12-23 {#version-100---released-on-2022-12-23}

* Opgelost: exportformulier-pop-up laadde niet;
* Opgelost: Javascript-bestanden laadden niet op de exportpagina;
* Intern: nieuw buildproces;

### Versie 1.0.0-beta.4 - Uitgebracht op 2022-01-13 {#version-100-beta4---released-on-2022-01-13}

* Intern: hooks- en filtersgenerator toegevoegd;
* Intern: WP Ultimo-stubs toegevoegd voor betere levenskwaliteit voor ontwikkelaars;
