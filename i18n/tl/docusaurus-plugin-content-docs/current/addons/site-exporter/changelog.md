---
title: Talaan ng Pagbabago ng Site Exporter
sidebar_position: 99
_i18n_hash: 6ce7f1a3c455b0afe71a841b7b82319a
---
# Changelog ng Site Exporter {#site-exporter-changelog}

Bersyon: 1.0.6 - Inilabas noong 2026-05-11
* Bago: Isinasama na ngayon ng mga export ng site ang isang self-booting index.php upang ma-install ang ZIP sa isang bagong host nang walang hiwalay na pag-install ng plugin
* Bago: Pinapahintulutan ng export ng network ang mga administrator na i-export ang lahat ng subsite sa isang archive mula sa admin page ng Site Export

Bersyon: 1.0.5 - Inilabas noong 2026-05-05
* Ayos: Idinagdag ang __callStatic sa WP_CLI polyfill stub upang pangasiwaan ang mga hindi na-mock na method tulad ng get_config, na pumipigil sa mga pagkabigo ng test bootstrap

Bersyon: 1.0.4 - Inilabas noong 2025-11-25

* Ayos ang pagiging tugma sa Ultimate Multisite 2.4.

Bersyon: 1.0.2 - Inilabas noong 2025-09-28

* Palitan ang pangalan ng prefix sa ultimate-multisite; i-update ang text domain; pagtaas ng bersyon.

### Bersyon 1.0.1 - Inilabas noong 2023-08-09 {#version-101---released-on-2023-08-09}

* Pinahusay: Tinitiyak na ngayon na nakukuha ang tamang file path ng importer file.
* Naayos: Hindi pinagana ang object cache upang maiwasan ang mga error habang nag-i-import.
* Naayos: Naayos ang isyu kung saan hindi gumagana ang link sa pag-download ng importer plugin.

### Bersyon 1.0.0 - Inilabas noong 2022-12-23 {#version-100---released-on-2022-12-23}

* Naayos: Hindi naglo-load ang export form popup;
* Naayos: Hindi naglo-load ang mga Javascript file sa export page;
* Panloob: Bagong proseso ng build;

### Bersyon 1.0.0-beta.4 - Inilabas noong 2022-01-13 {#version-100-beta4---released-on-2022-01-13}

* Panloob: Idinagdag ang hooks at filters generator;
* Panloob: Idinagdag ang WP Ultimo stubs para sa developer quality of life;
