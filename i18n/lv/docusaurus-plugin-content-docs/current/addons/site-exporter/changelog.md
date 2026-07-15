---
title: Vietnes eksportētāja izmaiņu žurnāls
sidebar_position: 99
_i18n_hash: 6ce7f1a3c455b0afe71a841b7b82319a
---
# Site Exporter izmaiņu žurnāls

Versija: 1.0.6 - Izlaista 2026-05-11
* Jauns: Vietņu eksporti tagad iekļauj pašpalaižamu index.php, lai ZIP varētu instalēt uz jauna hosta bez atsevišķas plugin instalēšanas
* Jauns: Tīkla eksports ļauj administratoriem eksportēt visas apakšvietnes vienā arhīvā no Site Export administratora lapas

Versija: 1.0.5 - Izlaista 2026-05-05
* Labojums: WP_CLI polyfill stub pievienots __callStatic, lai apstrādātu nemockotās metodes, piemēram, get_config, novēršot testa bootstrap kļūmes

Versija: 1.0.4 - Izlaista 2025-11-25

* Labojums saderībai ar Ultimate Multisite 2.4.

Versija: 1.0.2 - Izlaista 2025-09-28

* Pārdēvēts prefikss uz ultimate-multisite; atjaunināts teksta domēns; versijas paaugstinājums.

### Versija 1.0.1 - Izlaista 2023-08-09 {#version-101---released-on-2023-08-09}

* Uzlabots: Tagad nodrošina, ka tiek iegūts pareizais importētāja faila ceļš.
* Labots: Atspējota objektu kešatmiņa, lai novērstu kļūdas importēšanas laikā.
* Labots: Novērsta problēma, ka importētāja plugin lejupielādes saite nedarbojas.

### Versija 1.0.0 - Izlaista 2022-12-23 {#version-100---released-on-2022-12-23}

* Labots: Eksporta veidlapas uznirstošais logs netika ielādēts;
* Labots: Javascript faili netika ielādēti eksporta lapā;
* Iekšēji: Jauns būvēšanas process;

### Versija 1.0.0-beta.4 - Izlaista 2022-01-13 {#version-100-beta4---released-on-2022-01-13}

* Iekšēji: Pievienots hooks un filters ģenerators;
* Iekšēji: Pievienoti WP Ultimo stubs izstrādātāju darba ērtībai;
