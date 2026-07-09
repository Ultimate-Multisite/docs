---
title: Ændringslog for Site Exporter
sidebar_position: 99
_i18n_hash: 6ce7f1a3c455b0afe71a841b7b82319a
---
# Site Exporter-ændringslog {#site-exporter-changelog}

Version: 1.0.6 - Udgivet den 2026-05-11
* Ny: Site-eksporter samler nu en selvstartende index.php, så ZIP-filen kan installeres på en ny host uden en separat plugin-installation
* Ny: Netværkseksport lader administratorer eksportere alle subsites i et enkelt arkiv fra Site Export-adminsiden

Version: 1.0.5 - Udgivet den 2026-05-05
* Rettelse: Tilføjede __callStatic til WP_CLI polyfill-stub for at håndtere ikke-mockede metoder som get_config, hvilket forhindrer fejl i test-bootstrap

Version: 1.0.4 - Udgivet den 2025-11-25

* Rettelse af kompatibilitet med Ultimate Multisite 2.4.

Version: 1.0.2 - Udgivet den 2025-09-28

* Omdøb præfiks til ultimate-multisite; opdater tekstdomæne; versionsløft.

### Version 1.0.1 - Udgivet den 2023-08-09 {#version-101---released-on-2023-08-09}

* Forbedret: Sikrer nu, at den korrekte filsti til importørfilen hentes.
* Rettet: Deaktiverede objektcache for at forhindre fejl under import.
* Rettet: Rettede problemet med, at downloadlinket til importør-pluginet ikke virkede.

### Version 1.0.0 - Udgivet den 2022-12-23 {#version-100---released-on-2022-12-23}

* Rettet: Popup til eksportformular indlæses ikke;
* Rettet: Javascript-filer indlæses ikke på eksportsiden;
* Internt: Ny buildproces;

### Version 1.0.0-beta.4 - Udgivet den 2022-01-13 {#version-100-beta4---released-on-2022-01-13}

* Internt: Tilføjede hooks- og filters-generator;
* Internt: Tilføjede WP Ultimo-stubs for bedre udviklerlivskvalitet;
