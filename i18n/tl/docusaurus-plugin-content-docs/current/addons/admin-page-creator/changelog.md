---
title: Talaan ng Pagbabago ng Admin Page Creator
sidebar_position: 99
_i18n_hash: 60442b433a1fe73d3624b115e3d153a5
---
# Talaan ng Pagbabago ng Tagalikha ng Admin Page

### Bersyon 1.9.0 - Inilabas noong 2026-01-18 {#version-190---released-on-2026-01-18}

* Naayos: Fatal errors kapag ina-activate.
* Ni-refactor: Mga class ng pinagmulan ng nilalaman para gamitin ang Singleton trait na may wastong initialization ng parent constructor
* Naayos: Mga error sa compilation ng Vue.js template na pumipigil sa pag-render ng selector ng uri ng nilalaman
* Naayos: Mga nawawalang Vue data properties (template_id, external_link_url_embedable, external_link_url_checking)
* Naayos: Hindi maayos na nag-i-initialize ang TinyMCE editor sa pag-load ng pahina
* Naayos: Ang Divi support file ay hindi awtomatikong nalo-load sa pamamagitan ng Composer
* Naayos: Sirang PHP syntax sa Divi support class
* Pinahusay: Organisasyon at minification ng JavaScript asset
* Pinahusay: Compatibility sa pinakabagong mga bersyon ng WordPress at page builder

= Bersyon: 1.8.8 - Inilabas noong 2025-09-28

* Palitan ang pangalan ng prefix sa ultimate-multisite; i-update ang text domain; pagtaas ng bersyon.

### Bersyon 1.8.7 - 04/10/2023 {#version-187---04102023}

* Naayos: Fatal error kapag sinusubukang magdagdag ng bagong pahina ng admin;
* Naayos: Conflict sa prefix ng Oxygen stylesheets;

### Bersyon 1.8.6 - 09/08/2023 {#version-186---09082023}

* Idinagdag: Nagdagdag ng opsyon para ipakita ang data mula sa pangunahing site o sa kasalukuyang sub-site.
* Idinagdag: Nagdagdag ng suporta para sa WordPress Block Editor (Gutenberg).
* Naayos: Naayos ang isyu sa hindi pag-load ng Brizy page assets.

### Bersyon 1.8.5 - 09/12/2020 {#version-185---09122020}

* Naayos: Isyu sa Screen Options para itago ang menu na hindi nawawala;

### Bersyon 1.8.4 - 11/11/2020 {#version-184---11112020}

* Naayos: Suporta sa Multisite Ultimate v2;

### Bersyon 1.8.3 - 01/10/2020 {#version-183---01102020}

* Naayos: Mga incompatibility sa Beaver Builder mula sa nakaraang build;
* Naayos: Mga hindi pagkakapare-pareho ng margin sa WP 5.5;

### Bersyon 1.8.2 - 21/09/2020 {#version-182---21092020}

* Naayos: Maliliit na incompatibility sa WP 5.5;

### Bersyon 1.8.1 - 05/08/2020 {#version-181---05082020}

* Naayos: Incompatibility sa Brizy 2.0;
* Naayos: Maliliit na isyu sa performance kapag binubuo ang listahan ng menu;

### Bersyon 1.8.0 - 27/04/2020 {#version-180---27042020}

* Naayos: Mga notice na natatago sa ilalim ng top-bar kapag walang napiling margin mode;
* Idinagdag: Maaari na ngayong palitan ng mga custom na pahina ang maraming WordPress admin top-level at sub-pages nang sabay-sabay;
* Idinagdag: Maaari na ngayong itago ng mga admin ang mga pahina ng admin gamit ang WP Admin Pages PRO;

### Bersyon 1.7.9 - 01/04/2020 {#version-179---01042020}

* Naayos: Brizy 1.10.118 pataas na sumisira sa suporta sa SVG sa mga pahina ng admin;

### Bersyon 1.7.8 - 26/03/2020 {#version-178---26032020}

* Naayos: Error sa escaping na sumisira sa pahina ng Editor kapag gumagamit ng French;

### Bersyon 1.7.7 - 04/03/2020 {#version-177---04032020}

* Naayos: Maliit na incompatibility sa Brizy Builder;
* Pinahusay: In-update ang Freemius SDK sa 2.3.2;

### Bersyon 1.7.6 - 10/02/2020 {#version-176---10022020}

* Naayos: Hindi gumagana ang edit button ng Admin Page sa kanang ibabang sulok sa Dashboard Widgets;
* Naayos: Maliit na incompatibility sa Astra;
* Naayos: Bagong bersyon ng Brizy na sumisira sa compatibility;

### Bersyon 1.7.5 - 14/12/2019 {#version-175---14122019}

* Naayos: Nagdagdag ng bagong edge-case handler para punan ang mga item ng menu sa opsyong Replace Page;
* Naayos: Hindi gumagana ang Elementor fonts;
* Pinahusay: In-update ang Freemius SDK para suportahan ang pagtatago ng sensitibong impormasyon mula sa Account page;

### Bersyon 1.7.4 - 29/11/2019 {#version-174---29112019}

* Naayos: Incompatibility sa WooCommerce Memberships;
* Naayos: Hindi gumagana ang Oxygen Builder tab component;
* Naayos: Hindi gumagana ang Beaver Themer;

### Bersyon 1.7.3 - 12/07/2019 {#version-173---12072019}

* Naayos: Nawawala ang mga pahina kapag ang parent nila ay kino-convert sa ibang uri ng pahina ng admin;
* Pinahusay: Mas mahusay na mga divider ng list table sa pagitan ng mga uri ng Admin Page;
* Pinahusay: Security Review ng buong codebase ng plugin;
* Pinahusay: Paalala sa babala ng Separator tab kapag hindi available ang feature para sa ibinigay na uri ng menu/pinagmulan ng nilalaman;

### Bersyon 1.7.2 - 01/07/2019 {#version-172---01072019}

* Naayos: In-update ang bersyon ng Freemius SDK sa 2.3.0;
* Naayos: Isyu sa incompatibility sa Flywheel;

### Bersyon 1.7.1 - 27/06/2019 {#version-171---27062019}

* Naayos: Ipinapakita na ngayon ang Welcome Widget sa lahat ng role;
* Naayos: Hindi idinadagdag ang Screen Option para itago/ipakita ang menu ng Admin Pages kung ang menu ay itinatago sa pamamagitan ng filter na dokumentado sa https://docs.wpadminpagespro.com/knowledge-base/hiding-wp-admin-pages-pro-from-your-users/
* Pinahusay: Ang pagtatago ng mga menu ng Admin Pages ay nagtatago na rin ngayon ng mga template na ginawa mula sa listahan ng saved templates ng Beaver Builder sa builder UI;
* Idinagdag: Mga opsyon para bulk na i-activate at i-deactivate ang mga pahina ng admin;
* Idinagdag: Opsyon para ipakita rin ang mga pahina sa pangunahing site;
* Idinagdag: Opsyon para palitan ang pangalan ng mga label ng top at sub level menu sa Replace mode;

### Bersyon 1.7.0 - 04/06/2019 {#version-170---04062019}

* Naayos: Mga isyu sa hindi paglitaw ng Oxygen templates;
* Idinagdag: Suporta sa Widget Creation!

### Bersyon 1.6.1 - 22/05/2019 {#version-161---22052019}

* Naayos: Mga typo;
* Naayos: Mga sub-menu page na ino-override ang dating mga sub-menu item na may parehong order value;
* Naayos: Nire-reset na ngayon ng duplication ang slug ng na-duplicate na pahina;
* Pinahusay: In-update ang pt_BR at es_ES po files;
* Pinahusay: Inililista na rin ngayon ng list table ang pangalan ng mga custom na pahina bilang mga parent page;

### Bersyon 1.6.0 - 21/05/2019 {#version-160---21052019}

* Idinagdag: Sinusuportahan na rin ngayon ng External Links ang iframe loading;

### Bersyon 1.5.5 - 17/05/2019 {#version-155---17052019}

* Naayos: Warning message na lumalabas kapag ang isang pahina ay na-delete o na-duplicate;
* Naayos: Mga permission setting na hindi nailalapat sa mga Admin;

### Bersyon 1.5.4 - 08/05/2019 {#version-154---08052019}

* Naayos: Mga incompatibility sa Sliced Invoices;
* Naayos: Maliit na isyu sa Oxygen;
* Naayos: Placeholder sa title field ng bagong pahina ng admin na hindi nawawala sa key-up;

### Bersyon 1.5.3 - 03/05/2019 {#version-153---03052019}

* Naayos: Incompatibility sa Advanced Custom Field option pages;
* Idinagdag: Opsyon para magdagdag ng mga partikular na user bilang target ng mga custom na pahina ng admin;

### Bersyon 1.5.2 - 30/04/2019 {#version-152---30042019}

* Naayos: Mga incompatibility sa mas bagong mga bersyon ng Brizy;
* Idinagdag: Idinagdag ang salin sa Spanish - sa kabutihang-loob ni John Rozzo. Salamat, John!
* Idinagdag: Beta support sa Oxygen Builder;

### Bersyon 1.5.1 - 15/04/2019 {#version-151---15042019}

* Naayos: Isyu sa mga placeholder sa Normal at HTML editors;
* Naayos: Hindi lumalabas ang Admin Pages sa Tools -> Export;
* Naayos: Pag-load ng mga script at style sa sarili lang naming mga pahina;
* Idinagdag: Maaari na ngayong i-duplicate ng Super Admins ang Admin Pages;

### Bersyon 1.5.0 - 29/03/2019 {#version-150---29032019}

* Inayos: Maliliit na bug na nahuli ng Sentry;
* Inayos: Hindi gumagana ang Delete button sa screen ng Edit Admin page;
* Pinahusay: Binago ang BeaverBuilder button upang gawing malinaw na sinusuportahan din ang Standard BB license;
* Idinagdag: Maaari ring itakda ng mga admin ang pagkakasunod-sunod ng mga submenu;
* Idinagdag: Sinusuportahan na ngayon ng replace page mode ang lahat ng available na menu item;

### Bersyon 1.4.0 - 14/02/2019 (stand-alone) & 27/02/2019 (add-on) {#version-140---14022019-stand-alone--27022019-add-on}

* Idinagdag: Inilunsad bilang Stand-alone plugin sa https://wpadminpagespro.com
* Idinagdag: Opsyon upang alisin ang Admin Pages menu item mula sa menu pagkatapos matapos ang proseso ng paggawa ng page;
* Idinagdag: Opsyon upang alisin ang mga admin notice mula sa mga admin page;
* Added: Content processing, so you can place placeholders like {{user:first_name}} and have it be automatically replaced with the user first_name meta field;
* Idinagdag: Inline Editor;
* Idinagdag: Pinagsamang parent class ng content source upang gawing madali ang pagdaragdag ng mga bagong Page Builder/Content Source sa hinaharap;
* Idinagdag: Suporta sa mga External URL;

### Bersyon 1.3.0 - 15/01/2019 {#version-130---15012019}

* Inayos: Hindi lumalabas ang Admin Pages sa main-site sa mga multisite environment;
* Pinahusay: Inalis ang mga custom post type ng Multisite Ultimate mula sa export screen ng mga subsite;
* Idinagdag: Top-bar na may quick actions para sa mga network admin sa paggawa ng mga page;
* Idinagdag: MALAKI! Suporta sa Elementor!
* Idinagdag: MALAKI! Suporta sa Brizy!

### Bersyon 1.2.1 - 17/11/2018 {#version-121---17112018}

* Inayos: Ginawang compatible ang plugin sa Multisite Ultimate 1.9.0;

### Bersyon 1.2.0 - 10/09/2018 {#version-120---10092018}

* Idinagdag: Idinagdag ang suporta sa PHP kung ang WU_APC_ALLOW_PHP_PROCESSING ay nakatakda sa true sa wp-config.php. Hindi nito ginagamit ang eval ng PHP, ngunit maaari pa rin itong magdulot ng mga butas sa seguridad. Gamitin ito nang maingat;
* Pinahusay: Add-on plugin updater;
* Pinahusay: Bagong URL para sa updates server;

### Bersyon 1.1.2 - 16/08/2018 {#version-112---16082018}

* Inayos: Maliit na isyu sa WP Engine;

### Bersyon 1.1.1 - 16/08/2018 {#version-111---16082018}

* Inayos: Hindi wastong nailalapat ang mga pahintulot sa mga replace page;

### Bersyon 1.1.0 - 15/08/2018 {#version-110---15082018}

* Idinagdag: Sinusuportahan na ngayon ang mga Beaver Builder template! Maaari mong gamitin ang paborito mong page builder upang gumawa ng mga custom admin page;
* Idinagdag: Posible na ring palitan ang nilalaman ng mga default admin page ng WordPress;
* Idinagdag: Posible na ring idagdag ang ginawang nilalaman sa itaas o ibaba ng mga default na WordPress admin page;

### 0.0.1 {#001}
- Paunang Paglabas
