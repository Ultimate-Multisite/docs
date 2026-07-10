---
title: Changelog sa Site Exporter
sidebar_position: 99
_i18n_hash: 6ce7f1a3c455b0afe71a841b7b82319a
---
Version 1.0.6 - Gi-release niadtong 2026-05-11
* New: Ang site exports karon naglakip na og self-booting index.php aron ang ZIP makapahimo o ma-install sa bag-ong host nga walay kinahanglan pa’g separate plugin install.
* New: Nagtugot na ang Network export sa mga administrator nga i-export tanang subsites sa usa ka archive gikan sa Site Export admin page.

Version: 1.0.5 - Gi-release niadtong 2026-05-05
* Fix: Gidugang ang __callStatic sa WP_CLI polyfill stub aron ma-handle ang mga methods nga wala pa na-mock sama sa get_config, nga makapugong sa pagkapakyas sa test bootstrap.

Version: 1.0.4 - Gi-release niadtong 2025-11-25

* Fix compatibility with Ultimate Multisite 2.4.

Version: 1.0.2 - Gi-release niadtong 2025-09-28

* Gitawag og ultimate-multisite ang prefix; gi-update ang text domain; ug gipa-bump ang version.

### Version 1.0.1 - Gi-release niadtong 2023-08-09 {#site-exporter-changelog}

* Improved: Karon, sigurado na nga makuha ang saktong file path sa importer file.
* Fixed: Gipatay ang object cache aron malikayan ang mga error atol sa pag-import.
* Fixed: Gitul-id ang isyu diin dili mo-andar ang download link sa importer plugin.

### Version 1.0.0 - Gi-release niadtong 2022-12-23 {#version-101---released-on-2023-08-09}

* Fixed: Dili ma-load ang popup form sa export;
* Fixed: Ang mga Javascript files wala na mag-load sa export page;
* Internal: Bag-o nga build process;

### Version 1.0.0-beta.4 - Gi-release niadtong 2022-01-13 {#version-100---released-on-2022-12-23}

* Internal: Gidugang ang hooks and filters generator;
* Internal: Gidugang ang WP Ultimo stubs para sa developer quality of life;
