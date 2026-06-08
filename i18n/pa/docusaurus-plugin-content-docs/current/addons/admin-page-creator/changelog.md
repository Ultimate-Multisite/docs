---
title: ਐਡਮਿਨ ਪੇਜ ਕ੍ਰिएਟਰ ਚੇਂਜਲੌਗ
sidebar_position: 99
_i18n_hash: 60442b433a1fe73d3624b115e3d153a5
---
# Admin Page Creator ਚੇਂਜਲੌਗ

### Version 1.9.0 - Released on 2026-01-18

* Fixed: ਐਕਟੀਵੇਟ ਕਰਦੇ ਸਮੇਂ ਫੇਟਲ (Fatal) ਗਲਤੀਆਂ ਠੀਕ ਕੀਤੀਆਂ।
* Refactored: Content source classes ਨੂੰ proper parent constructor initialization ਨਾਲ Singleton trait ਵਰਤਣ ਲਈ ਬਦਲਿਆ।
* Fixed: Vue.js template compilation errors ਠੀਕ ਕੀਤੇ ਗਏ ਜਿਸ ਕਾਰਨ content type selector ਰੈਂਡਰ ਨਹੀਂ ਹੋ ਰਿਹਾ ਸੀ।
* Fixed: ਗਾਇਬ Vue data properties (template_id, external_link_url_embedable, external_link_url_checking) ਠੀਕ ਕੀਤੀਆਂ।
* Fixed: ਪੇਜ ਲੋਡ ਹੋਣ 'ਤੇ TinyMCE editor ਸਹੀ ਢੰਗ ਨਾਲ initialize ਨਹੀਂ ਹੋ ਰਿਹਾ ਸੀ।
* Fixed: Divi support file Composer ਰਾਹੀਂ autoload ਨਹੀਂ ਹੋ ਰਹੀ ਸੀ।
* Fixed: Divi support class ਵਿੱਚ corrupt PHP syntax ਠੀਕ ਕੀਤਾ।
* Improved: JavaScript asset organization ਅਤੇ minification ਵਿੱਚ ਸੁਧਾਰ ਕੀਤਾ।
* Improved: ਨਵੀਨਤਮ WordPress ਅਤੇ page builder versions ਨਾਲ compatibility ਵਿੱਚ ਸੁਧਾਰ ਕੀਤਾ।

= Version: 1.8.8 - Released on 2025-09-28

* Prefix ਨੂੰ ultimate-multisite ਕਰਕੇ ਨਾਮ ਬਦਲਿਆ; text domain ਨੂੰ ਅਪਡੇਟ ਕੀਤਾ; version bump ਕੀਤਾ।

### Version 1.8.7 - 04/10/2023

* Fixed: ਨਵੀਂ admin page ਜੋੜਨ ਦੀ ਕੋਸ਼ਿਸ਼ ਕਰਨ 'ਤੇ ਫੇਟਲ (Fatal) ਗਲਤੀ ਠੀਕ ਕੀਤੀ;
* Fixed: Oxygen stylesheets prefix ਨਾਲ conflict ਠੀਕ ਕੀਤਾ;

### Version 1.8.6 - 09/08/2023

* Added: ਮੇਨ ਸਾਈਟ ਜਾਂ ਮੌਜੂਦਾ ਸਬ-ਸਾਈਟ ਦਾ ਡਾਟਾ ਦਿਖਾਉਣ ਦਾ ਵਿਕਲਪ ਜੋੜਿਆ।
* Added: WordPress Block Editor (Gutenberg) ਲਈ ਸਪੋਰਟ ਜੋੜਿਆ।
* Fixed: Brizy page assets ਲੋਡ ਨਾ ਹੋਣ ਦੀ ਸਮੱਸਿਆ ਠੀਕ ਕੀਤੀ।

### Version 1.8.5 - 09/12/2020

* Fixed: Screen Options ਵਿੱਚ menu ਲੁਕਾਉਣ ਦੀ ਸਮੱਸਿਆ ਜੋ ਹਟ ਨਹੀਂ ਰਹੀ ਸੀ, ਠੀਕ ਕੀਤੀ;

### Version 1.8.4 - 11/11/2020

* Fixed: Multisite Ultimate v2 ਲਈ ਸਪੋਰਟ ਜੋੜਿਆ;

### Version 1.8.3 - 01/10/2020

* Fixed: ਪਿਛਲੇ build ਦੇ Beaver Builder ਨਾਲ incompatibility ਠੀਕ ਕੀਤੀ;
* Fixed: WP 5.5 ਨਾਲ margin inconsistencies ਠੀਕ ਕੀਤੀ;

### Version 1.8.2 - 21/09/2020

* Fixed: WP 5.5 ਨਾਲ ਛੋਟੀਆਂ incompatibility ਠੀਕ ਕੀਤੀਆਂ;

### Version 1.8.1 - 05/08/2020

* Fixed: Brizy 2.0 ਨਾਲ incompatibility ਠੀਕ ਕੀਤੀ;
* Fixed: menu list ਬਣਾਉਣ 'ਤੇ ਛੋਟੀਆਂ performance issues ਠੀਕ ਕੀਤੀਆਂ;

### Version 1.8.0 - 27/04/2020

* Fixed: ਜਦੋਂ ਕੋਈ margin mode ਨਹੀਂ ਚੁਣਿਆ ਜਾਂਦਾ ਤਾਂ top-bar ਹੇਠਾਂ ਲੁਕ ਰਹੇ notices ਠੀਕ ਕੀਤੇ ਗਏ;
* Added: ਹੁਣ custom pages ਇੱਕੋ ਸਮੇਂ ਕਈ WordPress admin top-level ਅਤੇ sub-pages ਨੂੰ replace ਕਰ ਸਕਦੇ ਹਨ;
* Added: Admins ਹੁਣ WP Admin Pages PRO ਦੀ ਵਰਤੋਂ ਕਰਕੇ admin pages ਨੂੰ ਲੁਕਾ ਸਕਦੇ ਹਨ;

### Version 1.7.9 - 01/04/2020

* Fixed: Brizy 1.10.118 ਅਤੇ ਇਸ ਤੋਂ ਉੱਪਰ ਦੇ ਸੰਸਕਰਣਾਂ ਵਿੱਚ admin pages 'ਤੇ SVG ਸਪੋਰਟ ਟੁੱਟਣ ਦੀ ਸਮੱਸਿਆ ਠੀਕ ਕੀਤੀ;

### Version 1.7.8 - 26/03/2020

* Fixed: French ਵਰਤਣ 'ਤੇ Editor page ਨੂੰ ਤੋੜਨ ਵਾਲੀ escaping error ਠੀਕ ਕੀਤੀ;

### Version 1.7.7 - 04/03/2020

* Fixed: Brizy Builder ਨਾਲ ਛੋਟੀ incompatibility ਠੀਕ ਕੀਤੀ;
* Improved: Freemius SDK ਨੂੰ 2.3.2 ਤੱਕ ਅਪਡੇਟ ਕੀਤਾ;

### Version 1.7.6 - 10/02/2020

* Fixed: Dashboard Widgets 'ਤੇ bottom-right corner 'ਤੇ Admin Page edit button ਕੰਮ ਨਹੀਂ ਕਰ ਰਿਹਾ ਸੀ;
* Fixed: Astra ਨਾਲ ਛੋਟੀ Incompatibility ਠੀਕ ਕੀਤੀ;
* Fixed: Brizy ਦੇ ਨਵੇਂ version ਨਾਲ compatibility ਟੁੱਟਣ ਦੀ ਸਮੱਸਿਆ ਠੀਕ ਕੀਤੀ;

### Version 1.7.5 - 14/12/2019

* Fixed: Replace Page option 'ਤੇ menu items ਨੂੰ populate ਕਰਨ ਲਈ ਇੱਕ ਨਵਾਂ edge-case handler ਜੋੜਿਆ;
* Fixed: Elementor fonts ਕੰਮ ਨਹੀਂ ਕਰ ਰਹੇ ਸਨ;
* Improved: Account page ਤੋਂ sensitive info ਲੁਕਾਉਣ ਲਈ Freemius SDK ਨੂੰ ਅਪਡੇਟ ਕੀਤਾ;

### Version 1.7.4 - 29/11/2019

* Fixed: WooCommerce Memberships ਨਾਲ incompatibility ਠੀਕ ਕੀਤੀ;
* Fixed: Oxygen Builder tab component ਕੰਮ ਨਹੀਂ ਕਰ ਰਿਹਾ ਸੀ;
* Fixed: Beaver Themer ਕੰਮ ਨਹੀਂ ਕਰ ਰਿਹਾ ਸੀ;

### Version 1.7.3 - 12/07/2019

* Fixed: ਜਦੋਂ ਕਿਸੇ ਪੇਜ ਦੇ parent ਨੂੰ ਕਿਸੇ ਹੋਰ admin page type ਵਿੱਚ ਬਦਲਿਆ ਜਾਂਦਾ ਸੀ ਤਾਂ ਪੇਜ ਗਾਇਬ ਹੋ ਜਾਂਦੇ ਸਨ;
* Improved: Admin Page types ਵਿਚਕਾਰ list table dividers ਨੂੰ ਬਿਹਤਰ ਬਣਾਇਆ;
* Improved: ਪਲੱਗਇਨ ਦੇ ਪੂਰੇ codebase ਦੀ Security Review ਕੀਤੀ;
* Improved: Separator tab warning ਬਾਰੇ ਨੋਟ ਜੋੜਿਆ ਜਦੋਂ ਇਹ feature ਕਿਸੇ ਦਿੱਤੇ ਗਏ menu/content source type ਲਈ ਉਪਲਬਧ ਨਹੀਂ ਹੁੰਦਾ;

### Version 1.7.2 - 01/07/2019

* Fixed: Freemius SDK version ਨੂੰ 2.3.0 ਤੱਕ ਅਪਡੇਟ ਕੀਤਾ;
* Fixed: Flywheel ਨਾਲ incompatibility issue ਠੀਕ ਕੀਤਾ;

### Version 1.7.1 - 27/06/2019

* Fixed: Welcome Widget ਹੁਣ ਸਾਰੇ roles ਨੂੰ ਦਿਖਾਈ ਦਿੰਦਾ ਹੈ;
* Fixed: Screen Option to hide/display the Admin Pages menu ਨਹੀਂ ਜੋੜਿਆ ਜਾਂਦਾ ਜੇ menu ਨੂੰ https://docs.wpadminpagespro.com/knowledge-base/hiding-wp-admin-pages-pro-from-your-users/ 'ਤੇ document ਕੀਤੇ filter ਰਾਹੀਂ ਲੁਕਾਇਆ ਜਾ ਰਿਹਾ ਹੋਵੇ।
* Improved: Admin Pages menus ਨੂੰ ਲੁਕਾਉਣ ਨਾਲ ਹੁਣ Beaver Builder saved templates list ਤੋਂ ਬਣੇ templates ਨੂੰ ਵੀ builder UI 'ਤੇ ਲੁਕਾਇਆ ਜਾਂਦਾ ਹੈ;
* Added: admin pages ਨੂੰ bulk activate ਅਤੇ deactivate ਕਰਨ ਦੇ ਵਿਕਲਪ ਜੋੜੇ;
* Added: ਮੇਨ ਸਾਈਟ 'ਤੇ pages ਨੂੰ ਦਿਖਾਉਣ ਦਾ ਵਿਕਲਪ ਜੋੜਿਆ;
* Added: Replace mode 'ਤੇ top ਅਤੇ sub level menu labels ਨੂੰ rename ਕਰਨ ਦਾ ਵਿਕਲਪ ਜੋੜਿਆ;

### Version 1.7.0 - 04/06/2019

* Fix: Oxygen templates ਨਾ ਦਿਖਣ ਦੀ ਸਮੱਸਿਆ ਠੀਕ ਕੀਤੀ;
* Added: Widget Creation ਲਈ ਸਪੋਰਟ ਜੋੜਿਆ!

### Version 1.6.1 - 22/05/2019

* Fixed: Typos ਠੀਕ ਕੀਤੇ;
* Fixed: Sub-menu pages ਜੋ ਪਹਿਲਾਂ ਵਾਲੇ sub-menu items ਨੂੰ ਇੱਕੋ order value ਨਾਲ override ਕਰ ਰਹੇ ਸਨ, ਠੀਕ ਕੀਤੇ;
* Fixed: Duplication ਹੁਣ duplicated page ਦਾ slug reset ਕਰਦਾ ਹੈ;
* Improved: pt_BR ਅਤੇ es_ES po files ਨੂੰ ਅਪਡੇਟ ਕੀਤਾ;
* Improved: List table ਹੁਣ custom pages ਦੇ ਨਾਮ ਨੂੰ parent pages ਵਜੋਂ ਵੀ ਲਿਸਟ ਕਰਦਾ ਹੈ;

### Version 1.6.0 - 21/05/2019

* Added: External Links ਹੁਣ iframe loading ਨੂੰ ਵੀ ਸਪੋਰਟ ਕਰਦੇ ਹਨ;

### Version 1.5.5 - 17/05/2019

* Fixed: ਜਦੋਂ ਕੋਈ page delete ਜਾਂ duplicate ਹੋ ਜਾਂਦਾ ਸੀ ਤਾਂ warning message ਆ ਰਹੀ ਸੀ, ਠੀਕ ਕੀਤੀ;
* Fixed: Admins ਨੂੰ Permission settings ਲਾਗੂ ਨਹੀਂ ਹੋ ਰਹੇ ਸਨ;

### Version 1.5.4 - 08/05/2019

* Fixed: Sliced Invoices ਨਾਲ incompatibility ਠੀਕ ਕੀਤੀ;
* Fixed: Oxygen ਨਾਲ ਛੋਟੀ ਸਮੱਸਿਆ ਠੀਕ ਕੀਤੀ;
* Fixed: ਨਵੇਂ admin page title field 'ਤੇ key-up 'ਤੇ placeholder ਨਹੀਂ ਹਟ ਰਿਹਾ ਸੀ;

### Version 1.5.3 - 03/05/2019

* Fixed: Advanced Custom Field option pages ਨਾਲ incompatibility ਠੀਕ ਕੀਤੀ;
* Added: Custom admin pages ਦੇ targets ਵਜੋਂ specific users ਨੂੰ ਜੋੜਨ ਦਾ ਵਿਕਲਪ ਜੋੜਿਆ;

### Version 1.5.2 - 30/04/2019

* Fixed: Brizy ਦੇ ਨਵੇਂ versions ਨਾਲ incompatibility ਠੀਕ ਕੀਤੀ;
* Added: Spanish translation ਜੋੜਿਆ - John Rozzo ਦੀ ਮਿਹਰਬਾਨੀ ਨਾਲ। ਧੰਨਵਾਦ, John!
* Added: Oxygen Builder ਲਈ Beta support ਜੋੜਿਆ;

### Version 1.5.1 - 15/04/2019

* Fixed: Normal ਅਤੇ HTML editors 'ਤੇ placeholders ਨਾਲ ਸਮੱਸਿਆ ਠੀਕ ਕੀਤੀ;
* Fixed: Admin Pages Tools -> Export 'ਤੇ ਨਹੀਂ ਦਿਖ ਰਹੇ ਸਨ;
* Fixed: ਸਿਰਫ਼ ਸਾਡੇ ਆਪਣੇ pages 'ਤੇ scripts ਅਤੇ styles ਲੋਡ ਕਰਨਾ;
* Added: Super Admins ਹੁਣ Admin Pages ਨੂੰ duplicate ਕਰ ਸਕਦੇ ਹਨ;

### Version 1.5.0 - 29/03/2019

* Fixed: Sentry ਦੁਆਰਾ ਫੜੀਆਂ ਗਈਆਂ ਛੋਟੀਆਂ bugs ਠੀਕ ਕੀਤੀਆਂ;
* Fixed: Edit Admin page screen 'ਤੇ Delete button ਕੰਮ ਨਹੀਂ ਕਰ ਰਿਹਾ ਸੀ;
* Improved: BeaverBuilder button ਨੂੰ ਬਦਲਿਆ ਤਾਂ ਜੋ ਇਹ ਸਪੱਸ਼ਟ ਹੋ ਸਕੇ ਕਿ Standard BB license ਵੀ ਸਪੋਰਟ ਕੀਤਾ ਜਾਂਦਾ ਹੈ;
* Added: Admins ਹੁਣ submenus ਦਾ order ਵੀ set ਕਰ ਸਕਦੇ ਹਨ;
* Added: Replace page mode ਹੁਣ ਸਾਰੇ available menu items ਨੂੰ ਸਪੋਰਟ ਕਰਦਾ ਹੈ;

### Version 1.4.0 - 14/02/2019 (stand-alone) & 27/02/2019 (add-on)

* Added: https://wpadminpagespro.com 'ਤੇ Stand-alone plugin ਵਜੋਂ ਲਾਂਚ ਕੀਤਾ ਗਿਆ;
* Added: page creation process ਪੂਰਾ ਹੋਣ ਤੋਂ ਬਾਅਦ Admin Pages menu item ਨੂੰ ਹਟਾਉਣ ਦਾ ਵਿਕਲਪ ਜੋੜਿਆ;
* Added: admin pages ਤੋਂ admin notices ਹਟਾਉਣ ਦਾ ਵਿਕਲਪ ਜੋੜਿਆ;
* Added: Content processing, ਤਾਂ ਜੋ ਤੁਸੀਂ {{user:first_name}} ਵਰਗੇ placeholders ਰੱਖ ਸਕੋ ਅਤੇ ਇਹ user first_name meta field ਨਾਲ ਆਪਣੇ ਆਪ replace ਹੋ ਜਾਵੇ;
* Added: Inline Editor;
* Added: Future ਵਿੱਚ ਨਵੇਂ Page Builders/Content Sources ਨੂੰ ਜੋੜਨਾ ਆਸਾਨ ਬਣਾਉਣ ਲਈ Consolidated content source parent class ਜੋੜਿਆ;
* Added: External URLs ਲਈ ਸਪੋਰਟ ਜੋੜਿਆ;

### Version 1.3.0 - 15/01/2019

* Fixed: Multisite environments 'ਤੇ Admin Pages main-site 'ਤੇ ਨਹੀਂ ਦਿਖ ਰਹੇ ਸਨ;
* Improved: subsites ਦੇ export screen ਤੋਂ Multisite Ultimate custom post types ਹਟਾਏ;
* Added: create pages 'ਤੇ network admins ਲਈ quick actions ਵਾਲਾ top-bar ਜੋੜਿਆ;
* Added: HUGE! Elementor Support!
* Added: HUGE! Brizy Support!

### Version 1.2.1 - 17/11/2018

* Fixed: ਪਲੱਗਇਨ ਨੂੰ Multisite Ultimate 1.9.0 ਨਾਲ compatible ਬਣਾਇਆ;

### Version 1.2.0 - 10/09/2018

* Added: PHP support ਜੋੜਿਆ ਜੇ wp-config.php 'ਤੇ WU_APC_ALLOW_PHP_PROCESSING ਨੂੰ true set ਕੀਤਾ ਜਾਂਦਾ ਹੈ। ਇਹ PHP's eval ਦੀ ਵਰਤੋਂ ਨਹੀਂ ਕਰਦਾ, ਪਰ ਫਿਰ ਵੀ ਇਹ security holes ਦਾ ਕਾਰਨ ਬਣ ਸਕਦਾ ਹੈ। ਇਸਦੀ ਵਰਤੋਂ ਸਾਵਧਾਨੀ ਨਾਲ ਕਰੋ;
* Improved: Add-on plugin updater;
* Improved: updates server ਲਈ ਨਵਾਂ URL;

### Version 1.1.2 - 16/08/2018

* Fixed: WP Engine ਨਾਲ ਛੋਟੀ ਸਮੱਸਿਆ ਠੀਕ ਕੀਤੀ;

### Version 1.1.1 - 16/08/2018

* Fixed: replace pages ਨੂੰ ਸਹੀ ਢੰਗ ਨਾਲ permissions ਨਹੀਂ ਮਿਲ ਰਹੇ ਸਨ;

### Version 1.1.0 - 15/08/2018

* Added: Beaver Builder templates ਹੁਣ ਸਪੋਰਟ ਕੀਤੇ ਜਾਂਦੇ ਹਨ! ਤੁਸੀਂ custom admin pages ਬਣਾਉਣ ਲਈ ਆਪਣੇ ਮਨਪਸੰਦ page builder ਦੀ ਵਰਤੋਂ ਕਰ ਸਕਦੇ ਹੋ;
* Added: ਹੁਣ WordPress default admin pages ਦੀ content ਨੂੰ replace ਕਰਨਾ ਸੰਭਵ ਹੈ;
* Added: ਹੁਣ default WordPress admin pages ਦੇ top ਜਾਂ bottom 'ਤੇ content append ਕਰਨਾ ਵੀ ਸੰਭਵ ਹੈ;

### 0.0.1
- Initial Release
