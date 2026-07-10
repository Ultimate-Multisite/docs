---
title: एडमिन पेज क्रिएटर चेंजलॉग
sidebar_position: 99
_i18n_hash: 60442b433a1fe73d3624b115e3d153a5
---
# Admin Page Creator Changelog {#admin-page-creator-changelog}

### Version 1.9.0 - Released on 2026-01-18 {#version-190---released-on-2026-01-18}

* Fixed: Activating करते समय होने वाली Fatal errors को ठीक किया गया।
* Refactored: Content source classes को Singleton trait का उपयोग करके और सही parent constructor initialization के साथ अपडेट किया गया।
* Fixed: Vue.js template compilation errors को ठीक किया गया, जिसके कारण content type selector render नहीं हो पा रहा था।
* Fixed: Vue data properties (template_id, external_link_url_embedable, external_link_url_checking) की कमी को ठीक किया गया।
* Fixed: पेज लोड होने पर TinyMCE editor ठीक से initialize नहीं हो रहा था।
* Fixed: Divi support file को Composer के माध्यम से autoload नहीं किया जा रहा था।
* Fixed: Divi support class में corrupted PHP syntax को ठीक किया गया।
* Improved: JavaScript asset organization और minification को बेहतर बनाया गया।
* Improved: latest WordPress और page builder versions के साथ compatibility को बेहतर बनाया गया।

= Version: 1.8.8 - Released on 2025-09-28

* Prefix को ultimate-multisite में rename किया गया; text domain अपडेट किया गया; और version bump किया गया।

### Version 1.8.7 - 04/10/2023 {#version-187---04102023}

* Fixed: नया admin page जोड़ने की कोशिश करने पर होने वाली Fatal error को ठीक किया गया;
* Fixed: Oxygen stylesheets prefix के साथ conflict को ठीक किया गया;

### Version 1.8.6 - 09/08/2023 {#version-186---09082023}

* Added: मुख्य साइट (main site) या वर्तमान सब-साइट (sub-site) से डेटा दिखाने का विकल्प जोड़ा गया।
* Added: WordPress Block Editor (Gutenberg) के लिए सपोर्ट जोड़ा गया।
* Fixed: Brizy page assets लोड न होने की समस्या को ठीक किया गया।

### Version 1.8.5 - 09/12/2020 {#version-185---09122020}

* Fixed: Screen Options में मेनू छिपाने की समस्या को ठीक किया गया, जो हट नहीं रहा था;

### Version 1.8.4 - 11/11/2020 {#version-184---11112020}

* Fixed: Multisite Ultimate v2 के लिए सपोर्ट जोड़ा गया;

### Version 1.8.3 - 01/10/2020 {#version-183---01102020}

* Fixed: पिछले build के Beaver Builder के साथ incompatibilities को ठीक किया गया;
* Fixed: WP 5.5 के साथ Margin inconsistencies को ठीक किया गया;

### Version 1.8.2 - 21/09/2020 {#version-182---21092020}

* Fixed: WP 5.5 के साथ छोटी incompatibilities को ठीक किया गया;

### Version 1.8.1 - 05/08/2020 {#version-181---05082020}

* Fixed: Brizy 2.0 के साथ incompatibility को ठीक किया गया;
* Fixed: मेनू लिस्ट बनाते समय छोटी performance issues को ठीक किया गया;

### Version 1.8.0 - 27/04/2020 {#version-180---27042020}

* Fixed: जब कोई margin mode select नहीं किया जाता था, तो notices को top-bar के नीचे छिपाया जा रहा था;
* Added: अब कस्टम पेज एक साथ कई WordPress admin top-level और sub-pages को replace कर सकते हैं;
* Added: Admins अब WP Admin Pages PRO का उपयोग करके admin pages को छिपा सकते हैं;

### Version 1.7.9 - 01/04/2020 {#version-179---01042020}

* Fixed: Brizy 1.10.118 और उससे ऊपर के वर्ज़न में admin pages पर SVG सपोर्ट टूटने की समस्या को ठीक किया गया;

### Version 1.7.8 - 26/03/2020 {#version-178---26032020}

* Fixed: French का उपयोग करते समय Editor page को तोड़ने वाली escaping error को ठीक किया गया;

### Version 1.7.7 - 04/03/2020 {#version-177---04032020}

* Fixed: Brizy Builder के साथ छोटी incompatibility को ठीक किया गया;
* Improved: Freemius SDK को 2.3.2 में अपडेट किया गया;

### Version 1.7.6 - 10/02/2020 {#version-176---10022020}

* Fixed: Dashboard Widgets पर bottom-right corner में Admin Page edit button काम नहीं कर रहा था;
* Fixed: Astra के साथ छोटी Incompatibility को ठीक किया गया;
* Fixed: Brizy के नए वर्ज़न के कारण compatibility टूटने की समस्या को ठीक किया गया;

### Version 1.7.5 - 14/12/2019 {#version-175---14122019}

* Fixed: Replace Page option पर menu items को populate करने के लिए एक नया edge-case handler जोड़ा गया;
* Fixed: Elementor fonts काम नहीं कर रहे थे;
* Improved: Account page से sensitive info को छिपाने के लिए Freemius SDK को अपडेट किया गया;

### Version 1.7.4 - 29/11/2019 {#version-174---29112019}

* Fixed: WooCommerce Memberships के साथ incompatibility को ठीक किया गया;
* Fixed: Oxygen Builder tab component काम नहीं कर रहा था;
* Fixed: Beaver Themer काम नहीं कर रहा था;

### Version 1.7.3 - 12/07/2019 {#version-173---12072019}

* Fixed: जब किसी पेज के parent को किसी अन्य admin page type में बदला जाता था, तो पेज गायब हो जाते थे;
* Improved: Admin Page types के बीच list table dividers को बेहतर बनाया गया;
* Improved: प्लगइन के पूरे codebase का Security Review किया गया;
* Improved: Separator tab warning पर नोट जोड़ा गया, जब यह सुविधा किसी दिए गए menu/content source type के लिए उपलब्ध नहीं होती है;

### Version 1.7.2 - 01/07/2019 {#version-172---01072019}

* Fixed: Freemius SDK वर्ज़न को 2.3.0 में अपडेट किया गया;
* Fixed: Flywheel के साथ incompatibility issue को ठीक किया गया;

### Version 1.7.1 - 27/06/2019 {#version-171---27062019}

* Fixed: Welcome Widget अब सभी roles को दिखाया जाता है;
* Fixed: Screen Option to hide/display the Admin Pages menu तब नहीं जोड़ा जाता था, जब मेनू को https://docs.wpadminpagespro.com/knowledge-base/hiding-wp-admin-pages-pro-from-your-users/ पर document किए गए filter के माध्यम से छिपाया जा रहा होता था।
* Improved: Admin Pages menus को छिपाने से अब builder UI पर Beaver Builder saved templates list से बनाए गए templates भी छिप जाते हैं;
* Added: admin pages को bulk activate और deactivate करने के विकल्प जोड़े गए;
* Added: main site पर pages को display करने का विकल्प जोड़ा गया;
* Added: Replace mode पर top और sub level menu labels को rename करने का विकल्प जोड़ा गया;

### Version 1.7.0 - 04/06/2019 {#version-170---04062019}

* Fix: Oxygen templates न दिखने की समस्या को ठीक किया गया;
* Added: Widget Creation के लिए सपोर्ट जोड़ा गया!

### Version 1.6.1 - 22/05/2019 {#version-161---22052019}

* Fixed: Typos को ठीक किया गया;
* Fixed: Sub-menu pages द्वारा समान order value वाले पिछले sub-menu items को override करने की समस्या को ठीक किया गया;
* Fixed: Duplication अब duplicated page का slug reset करता है;
* Improved: pt_BR और es_ES po files को अपडेट किया गया;
* Improved: List table अब custom pages का नाम parent pages के रूप में भी सूचीबद्ध करता है;

### Version 1.6.0 - 21/05/2019 {#version-160---21052019}

* Added: External Links अब iframe loading को भी सपोर्ट करते हैं;

### Version 1.5.5 - 17/05/2019 {#version-155---17052019}

* Fixed: जब कोई पेज delete या duplicate होता था, तो warning message आ रहा था;
* Fixed: Admins को Permission settings लागू नहीं हो रही थीं;

### Version 1.5.4 - 08/05/2019 {#version-154---08052019}

* Fixed: Sliced Invoices के साथ incompatibilities को ठीक किया गया;
* Fixed: Oxygen में छोटी समस्या को ठीक किया गया;
* Fixed: नए admin page title field पर placeholder key-up पर नहीं हट रहा था;

### Version 1.5.3 - 03/05/2019 {#version-153---03052019}

* Fixed: Advanced Custom Field option pages के साथ incompatibility को ठीक किया गया;
* Added: कस्टम admin pages के targets के रूप में विशिष्ट users को जोड़ने का विकल्प जोड़ा गया;

### Version 1.5.2 - 30/04/2019 {#version-152---30042019}

* Fixed: Brizy के नए वर्ज़न के साथ incompatibilities को ठीक किया गया;
* Added: Spanish translation जोड़ा गया - John Rozzo की मेहरबानी। धन्यवाद, जॉन!
* Added: Oxygen Builder के लिए Beta support जोड़ा गया;

### Version 1.5.1 - 15/04/2019 {#version-151---15042019}

* Fixed: Normal और HTML editors पर placeholders की समस्या को ठीक किया गया;
* Fixed: Admin Pages Tools -> Export पर दिखाई नहीं दे रहे थे;
* Fixed: केवल हमारे own pages पर scripts और styles लोड करना;
* Added: Super Admins अब Admin Pages को duplicate कर सकते हैं;

### Version 1.5.0 - 29/03/2019 {#version-150---29032019}

* Fixed: Sentry द्वारा पकड़ी गई छोटी bugs को ठीक किया गया;
* Fixed: Edit Admin page screen पर delete button काम नहीं कर रहा था;
* Improved: BeaverBuilder button को बदला गया ताकि यह स्पष्ट हो सके कि Standard BB license भी supported है;
* Added: Admins अब submenus का order भी सेट कर सकते हैं;
* Added: Replace page mode में अब सभी available menu items का support है;

### Version 1.4.0 - 14/02/2019 (stand-alone) & 27/02/2019 (add-on) {#version-140---14022019-stand-alone--27022019-add-on}

* Added: https://wpadminpagespro.com पर Stand-alone plugin के रूप में लॉन्च किया गया
* Added: page creation process पूरा होने के बाद Admin Pages menu item को menu से हटाने का विकल्प जोड़ा गया;
* Added: admin pages से admin notices हटाने का विकल्प जोड़ा गया;
* Added: Content processing, ताकि आप {{user:first_name}} जैसे placeholders लगा सकें और यह स्वचालित रूप से user first_name meta field से replace हो जाए;
* Added: Inline Editor;
* Added: भविष्य में नए Page Builders/Content Sources को जोड़ना आसान बनाने के लिए Consolidated content source parent class जोड़ा गया;
* Added: External URLs के लिए सपोर्ट जोड़ा गया;

### Version 1.3.0 - 15/01/2019 {#version-130---15012019}

* Fixed: multisite environments पर Admin Pages main-site पर दिखाई नहीं दे रहे थे;
* Improved: subsites के export screen से Multisite Ultimate custom post types हटा दिए गए;
* Added: create pages पर network admins के लिए quick actions के साथ Top-bar जोड़ा गया;
* Added: HUGE! Elementor Support!
* Added: HUGE! Brizy Support!

### Version 1.2.1 - 17/11/2018 {#version-121---17112018}

* Fixed: प्लगइन को Multisite Ultimate 1.9.0 के साथ compatible बनाना;

### Version 1.2.0 - 10/09/2018 {#version-120---10092018}

* Added: PHP support जोड़ा गया यदि wp-config.php पर WU_APC_ALLOW_PHP_PROCESSING को true पर सेट किया जाता है। यह PHP का eval उपयोग नहीं करता है, लेकिन फिर भी इससे security holes हो सकते हैं। इसका उपयोग सावधानी से करें;
* Improved: Add-on plugin updater;
* Improved: updates server के लिए नया URL;

### Version 1.1.2 - 16/08/2018 {#version-112---16082018}

* Fixed: WP Engine के साथ छोटी समस्या को ठीक किया गया;

### Version 1.1.1 - 16/08/2018 {#version-111---16082018}

* Fixed: replace pages पर Permissions सही से लागू नहीं हो रहे थे;

### Version 1.1.0 - 15/08/2018 {#version-110---15082018}

* Added: Beaver Builder templates अब supported हैं! आप कस्टम admin pages बनाने के लिए अपने पसंदीदा page builder का उपयोग कर सकते हैं;
* Added: अब WordPress default admin pages की content को replace करना भी संभव है;
* Added: अब default WordPress admin pages के top या bottom में content append करना भी संभव है;

### 0.0.1 {#001}
- Initial Release
