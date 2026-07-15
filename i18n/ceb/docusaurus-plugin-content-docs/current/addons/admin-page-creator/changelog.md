---
title: Admin Page Creator Changelog
sidebar_position: 99
_i18n_hash: 60442b433a1fe73d3624b115e3d153a5
---
# Admin Page Creator Changelog

### Version 1.9.0 - Released on 2026-01-18 {#version-190---released-on-2026-01-18}

* Fixed: Grabe nga sayop pag-activate.
* Refactored: Gihimo ang content source classes nga mogamit og Singleton trait uban sa saktong parent constructor initialization
* Fixed: Vue.js template compilation errors nga nakapugong sa content type selector gikan sa pagpakita
* Fixed: Nawala nga Vue data properties (template_id, external_link_url_embedable, external_link_url_checking)
* Fixed: Ang TinyMCE editor dili ma-initialize og tarong pag-load sa page
* Fixed: Ang Divi support file wala na mo-autoload pinaagi sa Composer
* Fixed: Corrupted PHP syntax sa Divi support class
* Improved: Organisasyon ug minification sa JavaScript asset
* Improved: Pagka-compatible sa pinaka-latest nga mga bersyon sa WordPress ug page builder

= Version: 1.8.8 - Released on 2025-09-28

* Gibag-o ang prefix ngadto sa ultimate-multisite; gi-update ang text domain; ug gipa-bump ang bersyon.

### Version 1.8.7 - 04/10/2023 {#version-187---04102023}

* Fixed: Grabe nga sayop pagtinguha og dugang admin page;
* Fixed: Conflict sa Oxygen stylesheets prefix;

### Version 1.8.6 - 09/08/2023 {#version-186---09082023}

* Added: Nagdugang og option aron ipakita ang data gikan sa main site o sa kasamtangang sub-site.
* Added: Nagdugang og suporta alang sa WordPress Block Editor (Gutenberg).
* Fixed: Gitul-id ang isyu nga dili mo-load ang mga assets sa Brizy page.

### Version 1.8.5 - 09/12/2020 {#version-185---09122020}

* Fixed: Isyu sa Screen Options aron itago ang menu nga wala mawala;

### Version 1.8.4 - 11/11/2020 {#version-184---11112020}

* Fixed: Suporta alang sa Multisite Ultimate v2;

### Version 1.8.3 - 01/10/2020 {#version-183---01102020}

* Fixed: Mga dili compatible nga bahin sa Beaver Builder gikan sa miaging build;
* Fixed: Pagkalain-lain sa margin uban sa WP 5.5;

### Version 1.8.2 - 21/09/2020 {#version-182---21092020}

* Fixed: Gamay nga mga dili compatible bahin sa WP 5.5;

### Version 1.8.1 - 05/08/2020 {#version-181---05082020}

* Fixed: Pagka-incompatible sa Brizy 2.0;
* Fixed: Gamay nga performance issues paghimo sa menu list;

### Version 1.8.0 - 27/04/2020 {#version-180---27042020}

* Fixed: Mga notices nga gitago ubos sa top-bar kung walay margin mode ang napili;
* Added: Ang mga custom page makapuli na og daghang WordPress admin top-level ug sub-pages sa usa ka higayon;
* Added: Ang mga Admin makakatago na og admin pages gamit ang WP Admin Pages PRO;

### Version 1.7.9 - 01/04/2020 {#version-179---01042020}

* Fixed: Ang Brizy 1.10.118 ug pataas nga naguba sa SVG support sa admin pages;

### Version 1.7.8 - 26/03/2020 {#version-178---26032020}

* Fixed: Escaping error nga naguba sa Editor page kung naggamit og French;

### Version 1.7.7 - 04/03/2020 {#version-177---04032020}

* Fixed: Gamay nga incompatibility uban sa Brizy Builder;
* Improved: Gi-update ang Freemius SDK ngadto sa 2.3.2;

### Version 1.7.6 - 10/02/2020 {#version-176---10022020}

* Fixed: Ang Admin Page edit button sa bottom-right corner dili mo-andar sa Dashboard Widgets;
* Fixed: Gamay nga Incompatibility uban sa Astra;
* Fixed: Bag-ong bersyon sa Brizy nga naguba sa compatibility;

### Version 1.7.5 - 14/12/2019 {#version-175---14122019}

* Fixed: Nagdugang og bag-ong edge-case handler aron mapuno ang menu items sa Replace Page option;
* Fixed: Elementor fonts dili mo-andar;
* Improved: Gi-update ang Freemius SDK aron suportahan ang pagtago sa sensitibo nga impormasyon gikan sa Account page;

### Version 1.7.4 - 29/11/2019 {#version-174---29112019}

* Fixed: Pagka-incompatible uban sa WooCommerce Memberships;
* Fixed: Ang Oxygen Builder tab component dili mo-andar;
* Fixed: Wala maglihok ang Beaver Themer;

### Version 1.7.3 - 12/07/2019 {#version-173---12072019}

* Fixed: Nawala ang mga pages kung ang ilang parent gi-convert ngadto sa laing admin page type;
* Improved: Mas maayo nga list table dividers taliwala sa Admin Page types;
* Improved: Security Review sa tibuok codebase sa plugin;
* Improved: Pahinumdom bahin sa Separator tab warning kung wala kini og feature alang sa gihatag nga menu/content source type;

### Version 1.7.2 - 01/07/2019 {#version-172---01072019}

* Fixed: Gi-update ang Freemius SDK version ngadto sa 2.3.0;
* Fixed: Isyu sa incompatibility uban sa Flywheel;

### Version 1.7.1 - 27/06/2019 {#version-171---27062019}

* Fixed: Ang Welcome Widget karon makapakita na sa tanang roles;
* Fixed: Ang Screen Option aron itago/ipakita ang Admin Pages menu wala na magdugang kung ang menu gitago pinaagi sa filter nga nadokumento sa https://docs.wpadminpagespro.com/knowledge-base/hiding-wp-admin-pages-pro-from-your-users/
* Improved: Ang pagtago sa Admin Pages menus karon makatago usab sa mga templates nga gihimo gikan sa Beaver Builder saved templates list sa builder UI;
* Added: Mga option aron bulk activate ug deactivate ang admin pages;
* Added: Option aron ipakita ang pages sa main site pud;
* Added: Option aron usbon ang ngalan sa top ug sub level menu labels sa Replace mode;

### Version 1.7.0 - 04/06/2019 {#version-170---04062019}

* Fix: Mga isyu sa Oxygen templates nga wala makita;
* Added: Suporta alang sa Widget Creation!

### Version 1.6.1 - 22/05/2019 {#version-161---22052019}

* Fixed: Typo;
* Fixed: Ang sub-menu pages nag-override sa miaging sub-menu items nga adunay parehas nga order value;
* Fixed: Ang Duplication karon mag-reset sa slug sa duplicated page;
* Improved: Gi-update ang pt_BR ug es_ES po files;
* Improved: Ang list table karon makalista na usab sa ngalan sa custom pages isip parent pages.

### Version 1.6.0 - 21/05/2019 {#version-160---21052019}

* Added: Ang External Links karon suporta na usab ang iframe loading;

### Version 1.5.5 - 17/05/2019 {#version-155---17052019}

* Fixed: Warning message nga mo-throw kung ang page gi-delete o duplicated;
* Fixed: Ang permission settings wala ma-apply sa Admins;

### Version 1.5.4 - 08/05/2019 {#version-154---08052019}

* Fixed: Pagka-incompatible uban sa Sliced Invoices;
* Fixed: Gamay nga isyu sa Oxygen;
* Fixed: Ang Placeholder sa bag-ong admin page title field wala mawala pag-key-up;

### Version 1.5.3 - 03/05/2019 {#version-153---03052019}

* Fixed: Pagka-incompatible uban sa Advanced Custom Field option pages;
* Added: Option aron dugangan ang piho nga mga user isip targets sa custom admin pages;

### Version 1.5.2 - 30/04/2019 {#version-152---30042019}

* Fixed: Mga pagka-incompatible uban sa mas bag-ong bersyon sa Brizy;
* Added: Gidugang ang Spanish translation - kaluoy ni John Rozzo. Salamat, John!
* Added: Beta support ngadto sa Oxygen Builder;

### Version 1.5.1 - 15/04/2019 {#version-151---15042019}

* Fixed: Isyu sa placeholders sa Normal ug HTML editors;
* Fixed: Ang Admin Pages wala makita sa Tools -> Export;
* Fixed: Pag-load sa scripts ug styles lang sa atong kaugalingon nga mga pages;
* Added: Ang Super Admins makadoble na og Admin Pages;

### Version 1.5.0 - 29/03/2019 {#version-150---29032019}

* Fixed: Mga gamay nga bugs nga nadakpan sa Sentry;
* Fixed: Ang Delete button dili mo-andar sa Edit Admin page screen;
* Improved: Giusab ang BeaverBuilder button aron klaro nga suportado usab ang Standard BB license;
* Added: Ang mga Admins makoset sa order sa submenus pud;
* Added: Ang Replace page mode karon adunay suporta sa tanang menu items nga magamit;

### Version 1.4.0 - 14/02/2019 (stand-alone) & 27/02/2019 (add-on) {#version-140---14022019-stand-alone--27022019-add-on}

* Added: Gilunsad isip Stand-alone plugin sa https://wpadminpagespro.com
* Added: Option aron tangtangon ang Admin Pages menu item gikan sa menu pagkahuman sa page creation process;
* Added: Option aron tangtangon ang admin notices gikan sa admin pages;
* Added: Content processing, mao nga makapwesto ka og mga placeholders sama sa {{user:first_name}} ug kini awtomatikong mapuli sa user first_name meta field;
* Added: Inline Editor;
* Added: Gi-consolidate ang content source parent class aron dali ra magdugang og bag-ong Page Builders/Content Sources sa umaabot;
* Added: Suporta alang sa External URLs;

### Version 1.3.0 - 15/01/2019 {#version-130---15012019}

* Fixed: Ang Admin Pages wala makita sa main-site sa multisite environments;
* Improved: Gitangtang ang Multisite Ultimate custom post types gikan sa export screen sa subsites;
* Added: Top-bar nga adunay quick actions alang sa network admins sa paghimo og pages;
* Added: DAKO! Elementor Support!
* Added: DAKO! Brizy Support!

### Version 1.2.1 - 17/11/2018 {#version-121---17112018}

* Fixed: Paghimo sa plugin nga compatible uban sa Multisite Ultimate 1.9.0;

### Version 1.2.0 - 10/09/2018 {#version-120---10092018}

* Added: Gi-dugang ang PHP support kung ang WU_APC_ALLOW_PHP_PROCESSING gi-set ngadto sa true sa wp-config.php. Wala kini mogamit og PHP's eval, apan mahimo pa gihapon kining mosangpot sa security holes. Gamita kini nga maayo;
* Improved: Add-on plugin updater;
* Improved: Bag-ong URL alang sa updates server;

### Version 1.1.2 - 16/08/2018 {#version-112---16082018}

* Fixed: Gamay nga isyu uban sa WP Engine;

### Version 1.1.1 - 16/08/2018 {#version-111---16082018}

* Fixed: Ang permissions wala ma-apply og tarong sa replace pages;

### Version 1.1.0 - 15/08/2018 {#version-110---15082018}

* Added: Ang Beaver Builder templates karon suportado na! Mahimo kang mogamit sa imong paborito nga page builder aron makahimo og custom admin pages;
* Added: Karon posible na pud ang pagpuli sa content sa default WordPress admin pages;
* Added: Karon posible pud ang pagdugang sa content nga gihimo sa ibabaw o ubos sa default WordPress admin pages;

### 0.0.1 {#001}
- Initial Release
