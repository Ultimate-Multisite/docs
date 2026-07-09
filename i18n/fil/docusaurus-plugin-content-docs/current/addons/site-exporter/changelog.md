---
title: Changelog ng Site Exporter
sidebar_position: 99
_i18n_hash: 6ce7f1a3c455b0afe71a841b7b82319a
---
# Changelog ng Site Exporter {#site-exporter-changelog}

Version: 1.0.6 - Released on 2026-05-11
* Bago: Ang mga site export ngayon ay may kasamang self-booting index.php para ang ZIP ay ma-install sa isang bagong host nang hindi nangangailangan ng hiwalay na pag-install ng plugin
* Bago: Ang Network export ay nagpapahintulot sa mga administrator na i-export ang lahat ng subsites sa iisang archive mula sa admin page ng Site Export

Version: 1.0.5 - Released on 2026-05-05
* Ayos: Idinagdag ang __callStatic sa WP_CLI polyfill stub para ma-handle ang mga methods na hindi na-mock tulad ng get_config, na pumipigil sa pagkabigo ng test bootstrap

Version: 1.0.4 - Released on 2025-11-25

* Ayos: Inayos ang compatibility sa Ultimate Multisite 2.4.

Version: 1.0.2 - Released on 2025-09-28

* Binago ang prefix sa ultimate-multisite; in-update ang text domain; at nag-bump ng version.

### Version 1.0.1 - Released on 2023-08-09 {#version-101---released-on-2023-08-09}

* Pinaganda: Tinitiyak na nakukuha na ngayon ang tamang file path ng importer file.
* Inayos: Dinisable ang object cache para maiwasan ang mga error habang nag-iimport.
* Inayos: Inayos ang isyu kung saan hindi gumagana ang download link ng importer plugin.

### Version 1.0.0 - Released on 2022-12-23 {#version-100---released-on-2022-12-23}

* Inayos: Hindi naglo-load ang popup ng export form;
* Inayos: Hindi naglo-load ang mga Javascript file sa export page;
* Panloob: Bagong build process;

### Version 1.0.0-beta.4 - Released on 2022-01-13 {#version-100-beta4---released-on-2022-01-13}

* Panloob: Idinagdag ang hooks and filters generator;
* Panloob: Idinagdag ang WP Ultimo stubs para sa kalidad ng buhay ng developer;
