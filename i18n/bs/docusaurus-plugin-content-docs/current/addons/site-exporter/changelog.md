---
title: Protokolje o promjenama Site Exporter-a
sidebar_position: 99
_i18n_hash: 6ce7f1a3c455b0afe71a841b7b82319a
---
# Dnevnik promjena Site Exporter-a

Version: 1.0.6 - Released on 2026-05-11
* Novo: Izvoz lokacije sada pakuje samostalno pokretljivi index.php, tako da se ZIP može instalirati na novom hostingu bez zasebnog instaliranja plugin-a.
* Novo: Izvoz mreže omogućava administratorima da izvezu sve podlokacije u jednoj arhivskoj zip-kompresiji sa admin stranice Site Export-a.

Version: 1.0.5 - Released on 2026-05-05
* Popravak: Dodao je __callStatic u WP_CLI polyfill stub kako bi se obradili metode koje nisu simulirane (mocked), poput get_config, spriječavajući neuspjeh pokretanja testova.

Version: 1.0.4 - Released on 2025-11-25

* Popravak kompatibilnosti sa Ultimate Multisite 2.4.

Version: 1.0.2 - Released on 2025-09-28

* Preimenovao prefiks na ultimate-multisite; ažurirao tekstualni domen; povećana verzija.

### Version 1.0.1 - Released on 2023-08-09 {#version-101---released-on-2023-08-09}

* Unapređeno: Sada osigurava da se dobije ispravan put do fajla uvezivača (importer).
* Popravak: Isključio je keš objekata kako bi se spriječili greške tokom uvoza.
* Popravak: Popravljen problem sa linkom za preuzimanje plugin-a uvezivača koji nije radio.

### Version 1.0.0 - Released on 2022-12-23 {#version-100---released-on-2022-12-23}

* Popravak: Popup za formular za izvoz nije učitavao;
* Popravak: Javascript fajlovi nisu učitavali na stranici za izvoz;
* Interno: Novi proces izgradnje (build process);

### Version 1.0.0-beta.4 - Released on 2022-01-13 {#version-100-beta4---released-on-2022-01-13}

* Interno: Dodat generator za hook-ove i filtere;
* Interno: Dodati WP Ultimo stubovi za poboljšanje radnog procesa developera;
