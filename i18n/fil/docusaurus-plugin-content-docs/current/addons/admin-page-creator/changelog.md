---
title: Changelog ng Admin Page Creator
sidebar_position: 99
_i18n_hash: 60442b433a1fe73d3624b115e3d153a5
---
# Changelog ng Admin Page Creator

### Version 1.9.0 - Released on 2026-01-18

* Fixed: Malalang error kapag nag-a-activate.
* Refactored: Ang mga content source class ay gumagamit na ng Singleton trait na may tamang pag-i-initialize ng parent constructor.
* Fixed: Mga error sa pag-compile ng Vue.js template na pumipigil sa pag-render ng content type selector.
* Fixed: Nawawalang Vue data properties (template_id, external_link_url_embedable, external_link_url_checking).
* Fixed: Hindi maayos na nag-i-initialize ang TinyMCE editor pag-load ng page.
* Fixed: Ang Divi support file ay hindi na-autoload gamit ang Composer.
* Fixed: May sira o corrupted na PHP syntax sa Divi support class.
* Improved: Organisasyon at minification ng JavaScript assets.
* Improved: Pagkakatugma sa pinakabagong bersyon ng WordPress at page builder.

= Version: 1.8.8 - Released on 2025-09-28

* Binago ang prefix para maging ultimate-multisite; in-update ang text domain; at nag-bump ng version.

### Version 1.8.7 - 04/10/2023

* Fixed: Malalang error kapag sinusubukang magdagdag ng bagong admin page;
* Fixed: Conflict sa prefix ng Oxygen stylesheets;

### Version 1.8.6 - 09/08/2023

* Added: Nagdagdag ng opsyon para ipakita ang data mula sa main site o sa kasalukuyang sub-site.
* Added: Nagdagdag ng suporta para sa WordPress Block Editor (Gutenberg).
* Fixed: Inayos ang isyu sa pag-load ng assets ng Brizy page.

### Version 1.8.5 - 09/12/2020

* Fixed: Ang isyu sa Screen Options na nagtatago ng menu ay hindi nawawala;

### Version 1.8.4 - 11/11/2020

* Fixed: Suporta para sa Multisite Ultimate v2;

### Version 1.8.3 - 01/10/2020

* Fixed: Mga hindi pagtutugma (incompatibilities) sa Beaver Builder mula sa nakaraang build;
* Fixed: Mga hindi pagkakapare-pareho (inconsistencies) sa margin sa WP 5.5;

### Version 1.8.2 - 21/09/2020

* Fixed: Maliit na hindi pagtutugma sa WP 5.5;

### Version 1.8.1 - 05/08/2020

* Fixed: Hindi pagtutugma sa Brizy 2.0;
* Fixed: Maliit na isyu sa performance kapag ginagawa ang menu list;

### Version 1.8.0 - 27/04/2020

* Fixed: Ang mga notices ay natatago sa top-bar kapag walang napiling margin mode;
* Added: Ang mga custom page ay makakapagpalit na ngayon ng maraming top-level at sub-pages ng WordPress admin nang sabay-sabay;
* Added: Ang mga admin ay makakapagtago na ng admin pages gamit ang WP Admin Pages PRO;

### Version 1.7.9 - 01/04/2020

* Fixed: Ang Brizy 1.10.118 pataas ay nagpapabagsak sa suporta ng SVG sa admin pages;

### Version 1.7.8 - 26/03/2020

* Fixed: Ang error sa escaping na pumipigil sa Editor page kapag gumagamit ng French;

### Version 1.7.7 - 04/03/2020

* Fixed: Maliit na hindi pagtutugma sa Brizy Builder;
* Improved: In-update ang Freemius SDK sa 2.3.2;

### Version 1.7.6 - 10/02/2020

* Fixed: Ang admin page edit button sa bottom-right corner ay hindi gumagana sa Dashboard Widgets;
* Fixed: Maliit na hindi pagtutugma sa Astra;
* Fixed: Ang bagong bersyon ng Brizy ay nagpapabagsak ng compatibility;

### Version 1.7.5 - 14/12/2019

* Fixed: Nagdagdag ng bagong edge-case handler para mapuno ang mga menu item sa Replace Page option;
* Fixed: Hindi gumagana ang mga font ng Elementor;
* Improved: In-update ang Freemius SDK para suportahan ang pagtatago ng sensitibong impormasyon mula sa Account page;

### Version 1.7.4 - 29/11/2019

* Fixed: Hindi pagtutugma sa WooCommerce Memberships;
* Fixed: Hindi gumagana ang tab component ng Oxygen Builder;
* Fixed: Hindi gumagana ang Beaver Themer;

### Version 1.7.3 - 12/07/2019

* Fixed: Ang mga page ay naglalaho kapag ang parent nito ay ginawang ibang admin page type;
* Improved: Mas magandang list table dividers sa pagitan ng Admin Page types;
* Improved: Security Review sa buong codebase ng plugin;
* Improved: Paalala sa Separator tab warning kapag ang feature ay hindi available para sa isang menu/content source type;

### Version 1.7.2 - 01/07/2019

* Fixed: In-update ang bersyon ng Freemius SDK sa 2.3.0;
* Fixed: Isyu sa hindi pagtutugma sa Flywheel;

### Version 1.7.1 - 27/06/2019

* Fixed: Ang Welcome Widget ay ipinapakita na ngayon sa lahat ng roles;
* Fixed: Ang Screen Option para itago/ipakita ang Admin Pages menu ay hindi naidagdag kung ang menu ay tinatago gamit ang filter na idinokumento sa https://docs.wpadminpagespro.com/knowledge-base/hiding-wp-admin-pages-pro-from-your-users/
* Improved: Ang pagtatago ng Admin Pages menus ay nagtatago na rin ng mga template na nilikha mula sa Beaver Builder saved templates list sa builder UI;
* Added: Mga opsyon para i-bulk activate at i-deactivate ang admin pages;
* Added: Opsyon para ipakita ang mga page sa main site din;
* Added: Opsyon para palitan ang pangalan ng top at sub level menu labels sa Replace mode;

### Version 1.7.0 - 04/06/2019

* Fix: Mga isyu sa Oxygen templates na hindi lumalabas;
* Added: Suporta para sa Widget Creation!

### Version 1.6.1 - 22/05/2019

* Fixed: Mga typo;
* Fixed: Ang sub-menu pages ay nag-o-override sa mga naunang sub-menu items na may parehong order value;
* Fixed: Ang duplication ay nagre-reset na ngayon ng slug ng duplicated page;
* Improved: In-update ang pt_BR at es_ES po files;
* Improved: Ang list table ay naglilista na rin ng pangalan ng custom pages bilang parent pages;

### Version 1.6.0 - 21/05/2019

* Added: Ang External Links ay sumusuporta na rin sa iframe loading;

### Version 1.5.5 - 17/05/2019

* Fixed: Warning message na ipinapasa kapag ang isang page ay tinanggal o dinuplicate;
* Fixed: Ang mga setting ng permission ay hindi inilalapat sa Admins;

### Version 1.5.4 - 08/05/2019

* Fixed: Hindi pagtutugma sa Sliced Invoices;
* Fixed: Maliit na isyu sa Oxygen;
* Fixed: Ang placeholder sa bagong admin page title field ay hindi nawawala sa key-up;

### Version 1.5.3 - 03/05/2019

* Fixed: Hindi pagtutugma sa Advanced Custom Field option pages;
* Added: Opsyon para magdagdag ng mga tiyak na user bilang target ng custom admin pages;

### Version 1.5.2 - 30/04/2019

* Fixed: Hindi pagtutugma sa mas bagong bersyon ng Brizy;
* Added: Nagdagdag ng Spanish translation - courtesy of John Rozzo. Thanks, John!
* Added: Beta support sa Oxygen Builder;

### Version 1.5.1 - 15/04/2019

* Fixed: Isyu sa placeholders sa Normal at HTML editors;
* Fixed: Ang Admin Pages ay hindi lumalabas sa Tools -> Export;
* Fixed: Paglo-load ng scripts at styles lang sa sarili nating pages;
* Added: Ang Super Admins ay makakapag-duplicate na ng Admin Pages;

### Version 1.5.0 - 29/03/2019

* Fixed: Mga maliliit na bug na nahuli ng Sentry;
* Fixed: Ang delete button ay hindi gumagana sa Edit Admin page screen;
* Improved: Binago ang BeaverBuilder button para linawin na sinusuportahan din ang Standard BB license;
* Added: Ang mga admin ay makakapag-set na ng order ng submenus;
* Added: Ang Replace page mode ay sumusuporta na sa lahat ng available na menu items;

### Version 1.4.0 - 14/02/2019 (stand-alone) & 27/02/2019 (add-on)

* Added: Inilunsad bilang Stand-alone plugin sa https://wpadminpagespro.com
* Added: Opsyon para alisin ang Admin Pages menu item mula sa menu pagkatapos ng page creation process;
* Added: Opsyon para alisin ang admin notices mula sa admin pages;
* Added: Content processing, kaya maaari kang maglagay ng placeholders tulad ng {{user:first_name}} at ito ay awtomatikong papalitan ng user first_name meta field;
* Added: Inline Editor;
* Added: Consolidated content source parent class para madaling magdagdag ng mga bagong Page Builders/Content Sources sa hinaharap;
* Added: Suporta para sa External URLs;

### Version 1.3.0 - 15/01/2019

* Fixed: Ang Admin Pages ay hindi lumalabas sa main-site sa multisite environments;
* Improved: Tinanggal ang Multisite Ultimate custom post types mula sa export screen ng subsites;
* Added: Top-bar na may quick actions para sa network admins sa create pages;
* Added: MALAKI! Elementor Support!
* Added: MALAKI! Brizy Support!

### Version 1.2.1 - 17/11/2018

* Fixed: Ginawang compatible ang plugin sa Multisite Ultimate 1.9.0;

### Version 1.2.0 - 10/09/2018

* Added: Nagdagdag ng PHP support kung ang WU_APC_ALLOW_PHP_PROCESSING ay itinakda sa true sa wp-config.php. Hindi ito gumagamit ng PHP's eval, ngunit maaari pa rin itong magdulot ng security holes. Gamitin ito nang maingat;
* Improved: Add-on plugin updater;
* Improved: Bagong URL para sa updates server;

### Version 1.1.2 - 16/08/2018

* Fixed: Maliit na isyu sa WP Engine;

### Version 1.1.1 - 16/08/2018

* Fixed: Ang mga permission ay hindi naipapahiwatig nang tama sa replace pages;

### Version 1.1.0 - 15/08/2018

* Added: Ang Beaver Builder templates ay sinusuportahan na! Maaari mong gamitin ang paborito mong page builder para gumawa ng custom admin pages;
* Added: Ngayon ay posible na palitan din ang content ng default WordPress admin pages;
* Added: Ngayon ay posible ring magdagdag ng content na nilikha sa itaas o ibaba ng default WordPress admin pages;

### 0.0.1
- Initial Release
