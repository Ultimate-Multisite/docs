---
title: Admin Page Creator Changelog
sidebar_position: 99
_i18n_hash: 60442b433a1fe73d3624b115e3d153a5
---
# Admin Page Creator Changelog {#admin-page-creator-changelog}

### Version 1.9.0 - Released on 2026-01-18 {#version-190---released-on-2026-01-18}

* Fixed: Activating ചെയ്യുമ്പോൾ വരുന്ന fatal errors പരിഹരിച്ചു.
* Refactored: Content source classes എന്നിവ proper parent constructor initialization ഉപയോഗിച്ച് Singleton trait ഉപയോഗിക്കാൻ മാറ്റിയെടുത്തു.
* Fixed: Content type selector റെൻഡർ ചെയ്യാതിരിക്കാൻ കാരണം Vue.js template compilation errors ആയിരുന്നു; അത് പരിഹരിച്ചു.
* Fixed: Vue data properties (template_id, external_link_url_embedable, external_link_url_checking) നഷ്ടപ്പെട്ട പ്രശ്നം പരിഹരിച്ചു.
* Fixed: പേജ് ലോഡ് ചെയ്യുമ്പോൾ TinyMCE editor ശരിയായി initialize ആവാത്ത പ്രശ്നം പരിഹരിച്ചു.
* Fixed: Divi support file Composer വഴി autoload ആവാത്ത പ്രശ്നം പരിഹരിച്ചു.
* Fixed: Divi support class-ലെ corrupted PHP syntax പരിഹരിച്ചു.
* Improved: JavaScript asset organization, minification എന്നിവ മെച്ചപ്പെടുത്തി.
* Improved: ഏറ്റവും പുതിയ WordPress, page builder പതിപ്പുകളുമായുള്ള compatibility മെച്ചപ്പെടുത്തി.

= Version: 1.8.8 - Released on 2025-09-28

* Prefix ultimate-multisite എന്ന് മാറ്റുകയും; text domain അപ്ഡേറ്റ് ചെയ്യുകയും; version നമ്പർ വർദ്ധിപ്പിക്കുകയും ചെയ്തു.

### Version 1.8.7 - 04/10/2023 {#version-187---04102023}

* Fixed: പുതിയ admin page එක ചേർക്കാൻ ശ്രമിക്കുമ്പോൾ വരുന്ന fatal error പരിഹരിച്ചു;
* Fixed: Oxygen stylesheets prefix-മായി ഉണ്ടാകുന്ന conflict പരിഹരിച്ചു;

### Version 1.8.6 - 09/08/2023 {#version-186---09082023}

* Added: പ്രധാന സൈറ്റിൽ നിന്നുള്ള ഡാറ്റയോ നിലവിലെ സബ്-സൈറ്റിൽ നിന്നുള്ള ഡാറ്റയോ കാണിക്കാനുള്ള ഓപ്ഷൻ ചേർത്തു.
* Added: WordPress Block Editor (Gutenberg) പിന്തുണ ചേർത്തു.
* Fixed: Brizy page assets ലോഡ് ആവാത്ത പ്രശ്നം പരിഹരിച്ചു.

### Version 1.8.5 - 09/12/2020 {#version-185---09122020}

* Fixed: Screen Options ഉപയോഗിച്ച് മെനു മറയ്ക്കുന്നത് മാഞ്ഞുപോകാത്ത പ്രശ്നം പരിഹരിച്ചു;

### Version 1.8.4 - 11/11/2020 {#version-184---11112020}

* Fixed: Multisite Ultimate v2 പിന്തുണ ചേർത്തു;

### Version 1.8.3 - 01/10/2020 {#version-183---01102020}

* Fixed: മുൻ പതിപ്പിലെ Beaver Builder-വുമായുള്ള incompatibility പ്രശ്നങ്ങൾ പരിഹരിച്ചു;
* Fixed: WP 5.5-ലെ margin inconsistencies പരിഹരിച്ചു;

### Version 1.8.2 - 21/09/2020 {#version-182---21092020}

* Fixed: WP 5.5-ഉമായുള്ള ചെറിയ incompatibility പ്രശ്നങ്ങൾ പരിഹരിച്ചു;

### Version 1.8.1 - 05/08/2020 {#version-181---05082020}

* Fixed: Brizy 2.0-യുമായുള്ള incompatibility പരിഹരിച്ചു;
* Fixed: മെനു ലിസ്റ്റ് ഉണ്ടാക്കുമ്പോൾ ഉണ്ടാകുന്ന ചെറിയ performance പ്രശ്നങ്ങൾ പരിഹരിച്ചു;

### Version 1.8.0 - 27/04/2020 {#version-180---27042020}

* Fixed: margin mode തിരഞ്ഞെടുക്കാത്തപ്പോൾ top-bar-ന് താഴെ കാണുന്ന notices മറയ്ക്കുന്ന പ്രശ്നം പരിഹരിച്ചു;
* Added: കസ്റ്റം പേജുകൾക്ക് ഇപ്പോൾ ഒരേ സമയം ഒന്നിലധികം WordPress admin top-level, sub-pages എന്നിവ മാറ്റിസ്ഥാപിക്കാൻ കഴിയും;
* Added: WP Admin Pages PRO ഉപയോഗിച്ച് അഡ്മിൻ പേജുകൾ മറയ്ക്കാൻ ഇപ്പോൾ കഴിയും;

### Version 1.7.9 - 01/04/2020 {#version-179---01042020}

* Fixed: Brizy 1.10.118 ഉം അതിനുശേഷമുള്ള പതിപ്പുകളും admin pages-ലെ SVG പിന്തുണ തകരാറിലാക്കിയ പ്രശ്നം പരിഹരിച്ചു;

### Version 1.7.8 - 26/03/2020 {#version-178---26032020}

* Fixed: ഫ്രഞ്ച് ഭാഷ ഉപയോഗിക്കുമ്പോൾ Editor page തകരാറിലാക്കിയ escaping error പരിഹരിച്ചു;

### Version 1.7.7 - 04/03/2020 {#version-177---04032020}

* Fixed: Brizy Builder-യുമായുള്ള ചെറിയ incompatibility പ്രശ്നം പരിഹരിച്ചു;
* Improved: Freemius SDK 2.3.2 ലേക്ക് അപ്ഡേറ്റ് ചെയ്തു;

### Version 1.7.6 - 10/02/2020 {#version-176---10022020}

* Fixed: Dashboard Widgets-ൽ bottom-right corner-ലെ Admin Page edit button പ്രവർത്തിക്കാത്ത പ്രശ്നം പരിഹരിച്ചു;
* Fixed: Astra-യുമായുള്ള ചെറിയ incompatibility പ്രശ്നം പരിഹരിച്ചു;
* Fixed: Brizy-യുടെ പുതിയ പതിപ്പ് compatibility തകരാറിലാക്കിയ പ്രശ്നം പരിഹരിച്ചു;

### Version 1.7.5 - 14/12/2019 {#version-175---14122019}

* Fixed: Replace Page ഓപ്ഷനിൽ മെനു ഐറ്റങ്ങൾ populate ചെയ്യുന്നതിനായി ഒരു പുതിയ edge-case handler ചേർത്തു;
* Fixed: Elementor fonts പ്രവർത്തിക്കാത്ത പ്രശ്നം പരിഹരിച്ചു;
* Improved: Account page-ൽ നിന്ന് sensitive വിവരങ്ങൾ മറയ്ക്കാൻ Freemius SDK അപ്ഡേറ്റ് ചെയ്തു;

### Version 1.7.4 - 29/11/2019 {#version-174---29112019}

* Fixed: WooCommerce Memberships-യുമായുള്ള incompatibility പരിഹരിച്ചു;
* Fixed: Oxygen Builder tab component പ്രവർത്തിക്കാത്ത പ്രശ്നം പരിഹരിച്ചു;
* Fixed: Beaver Themer പ്രവർത്തിക്കാത്ത പ്രശ്നം പരിഹരിച്ചു;

### Version 1.7.3 - 12/07/2019 {#version-173---12072019}

* Fixed: ഒരു പേജിന്റെ parent മറ്റൊരു admin page type ആക്കി മാറ്റുമ്പോൾ പേജുകൾ കാണാതാകുന്ന പ്രശ്നം പരിഹരിച്ചു;
* Improved: Admin Page types-ന് ഇടയിൽ list table dividers മെച്ചപ്പെടുത്തി;
* Improved: പ്ലഗിൻ മുഴുവൻ codebase-ന്റെയും Security Review നടത്തി;
* Improved: ഒരു പ്രത്യേക menu/content source type-ന് ആ ഫീച്ചർ ലഭ്യമല്ലാത്തപ്പോൾ Separator tab-ൽ കാണിക്കുന്ന മുന്നറിയിപ്പ് കുറിച്ച് നൽകി;

### Version 1.7.2 - 01/07/2019 {#version-172---01072019}

* Fixed: Freemius SDK പതിപ്പ് 2.3.0 ലേക്ക് അപ്ഡേറ്റ് ചെയ്തു;
* Fixed: Flywheel-ഉമായുള്ള incompatibility പ്രശ്നം പരിഹരിച്ചു;

### Version 1.7.1 - 27/06/2019 {#version-171---27062019}

* Fixed: Welcome Widget എല്ലാ റോളുകൾക്കും കാണിക്കപ്പെടുന്നു;
* Fixed: https://docs.wpadminpagespro.com/knowledge-base/hiding-wp-admin-pages-pro-from-your-users/ എന്നതിൽ document ചെയ്ത ഫിൽട്ടർ വഴി മെനു മറയ്ക്കുമ്പോൾ Admin Pages menu hide/display ചെയ്യാനുള്ള Screen Option ചേർക്കുന്നില്ലായിരുന്നു; അത് പരിഹരിച്ചു.
* Improved: Admin Pages menus മറയ്ക്കുന്നത് ഇപ്പോൾ Beaver Builder saved templates list-ൽ നിന്ന് ഉണ്ടാക്കിയ templates കൂടി builder UI-ൽ മറയ്ക്കുന്നു;
* Added: admin pages കൂട്ടമായി activate ചെയ്യാനും deactivate ചെയ്യാനുമുള്ള ഓപ്ഷനുകൾ ചേർത്തു;
* Added: പ്രധാന സൈറ്റിൽ പേജുകൾ കാണിക്കാനുള്ള ഓപ്ഷൻ ചേർത്തു;
* Added: Replace mode-ൽ top, sub level menu labels എന്നിവയുടെ പേര് മാറ്റാനുള്ള ഓപ്ഷൻ ചേർത്തു;

### Version 1.7.0 - 04/06/2019 {#version-170---04062019}

* Fix: Oxygen templates കാണിക്കാത്ത പ്രശ്നങ്ങൾ പരിഹരിച്ചു;
* Added: Widget Creation പിന്തുണ ചേർത്തു!

### Version 1.6.1 - 22/05/2019 {#version-161---22052019}

* Fixed: അക്ഷരത്തെറ്റുകൾ (Typos) പരിഹരിച്ചു;
* Fixed: ഒരേ order value ഉള്ള മുൻ sub-menu items-നെ പുതിയ sub-menu pages ഓവർറൈഡ് ചെയ്യുന്ന പ്രശ്നം പരിഹരിച്ചു;
* Fixed: Duplication ഇപ്പോൾ duplicated page-ന്റെ slug reset ചെയ്യുന്നു;
* Improved: pt_BR, es_ES po files അപ്ഡേറ്റ് ചെയ്തു;
* Improved: list table ഇപ്പോൾ custom pages-ന്റെ പേര് parent pages ആയിട്ടായി ലിസ്റ്റ് ചെയ്യുന്നു;

### Version 1.6.0 - 21/05/2019 {#version-160---21052019}

* Added: External Links-ന് iframe loading പിന്തുണ കൂടി ചേർത്തു;

### Version 1.5.5 - 17/05/2019 {#version-155---17052019}

* Fixed: ഒരു പേജ് delete ചെയ്യുകയോ duplicate ചെയ്യുകയോ ചെയ്യുമ്പോൾ warning message വരുന്ന പ്രശ്നം പരിഹരിച്ചു;
* Fixed: Admins-ന് permission settings ലഭിക്കാത്ത പ്രശ്നം പരിഹരിച്ചു;

### Version 1.5.4 - 08/05/2019 {#version-154---08052019}

* Fixed: Sliced Invoices-യുമായുള്ള incompatibility പരിഹരിച്ചു;
* Fixed: Oxygen-ൽ ചെറിയ പ്രശ്നം പരിഹരിച്ചു;
* Fixed: പുതിയ admin page title field-ലെ placeholder key-up ചെയ്യുമ്പോൾ മാഞ്ഞുപോകാത്ത പ്രശ്നം പരിഹരിച്ചു;

### Version 1.5.3 - 03/05/2019 {#version-153---03052019}

* Fixed: Advanced Custom Field option pages-യുമായുള്ള incompatibility പരിഹരിച്ചു;
* Added: കസ്റ്റം admin pages-ന്റെ ടാർഗെറ്റായി പ്രത്യേക ഉപയോക്താക്കളെ ചേർക്കാനുള്ള ഓപ്ഷൻ ചേർത്തു;

### Version 1.5.2 - 30/04/2019 {#version-152---30042019}

* Fixed: Brizy-യുടെ പുതിയ പതിപ്പുകളുമായുള്ള incompatibility പരിഹരിച്ചു;
* Added: സ്പാനിഷ് പരിഭാഷ ചേർത്തു - John Rozzo-യുടെ സഹായത്താൽ. നന്ദി, John!
* Added: Oxygen Builder-ന് Beta പിന്തുണ ചേർത്തു;

### Version 1.5.1 - 15/04/2019 {#version-151---15042019}

* Fixed: Normal, HTML editors-ലെ placeholders-മായി ബന്ധപ്പെട്ട പ്രശ്നം പരിഹരിച്ചു;
* Fixed: Tools -> Export-ൽ Admin Pages കാണിക്കാത്ത പ്രശ്നം പരിഹരിച്ചു;
* Fixed: ഞങ്ങളുടെ സ്വന്തം പേജുകളിൽ മാത്രം scripts, styles എന്നിവ ലോഡ് ചെയ്യുന്ന രീതിയിലേക്ക് മാറ്റിയെടുത്തു;
* Added: Super Admins-ന് ഇപ്പോൾ Admin Pages duplicate ചെയ്യാൻ കഴിയും;

### Version 1.5.0 - 29/03/2019 {#version-150---29032019}

* Fixed: Sentry വഴി പിടിച്ചെടുത്ത ചെറിയ bugs പരിഹരിച്ചു;
* Fixed: Edit Admin page screen-ൽ delete button പ്രവർത്തിക്കാത്ത പ്രശ്നം പരിഹരിച്ചു;
* Improved: Standard BB license-ഉം പിന്തുണയ്ക്കുന്നു എന്ന് വ്യക്തമാക്കാൻ BeaverBuilder button മാറ്റിയെടുത്തു;
* Added: submenus-ന്റെ order സെറ്റ് ചെയ്യാൻ ഇപ്പോൾ കഴിയും;
* Added: Replace page mode-ന് ഇപ്പോൾ ലഭ്യമായ എല്ലാ മെനു ഐറ്റങ്ങൾക്കും പിന്തുണ നൽകുന്നു;

### Version 1.4.0 - 14/02/2019 (stand-alone) & 27/02/2019 (add-on) {#version-140---14022019-stand-alone--27022019-add-on}

* Added: https://wpadminpagespro.com-ൽ Stand-alone plugin ആയി പുറത്തിറക്കി;
* Added: page creation process കഴിഞ്ഞ ശേഷം Admin Pages menu item നീക്കം ചെയ്യാനുള്ള ഓപ്ഷൻ ചേർത്തു;
* Added: admin pages-ൽ നിന്ന് admin notices നീക്കം ചെയ്യാനുള്ള ഓപ്ഷൻ ചേർത്തു;
* Added: Content processing, അതിനാൽ {{user:first_name}} പോലുള്ള placeholders വെച്ച്, അത് user first_name meta field ഉപയോഗിച്ച് ഓട്ടോമാറ്റിക്കായി മാറ്റിസ്ഥാപിക്കാൻ കഴിയും;
* Added: Inline Editor;
* Added: ഭാവിയിൽ പുതിയ Page Builders/Content Sources എളുപ്പത്തിൽ ചേർക്കുന്നതിനായി Consolidated content source parent class ചേർത്തു;
* Added: External URLs-ന് പിന്തുണ ചേർത്തു;

### Version 1.3.0 - 15/01/2019 {#version-130---15012019}

* Fixed: multisite environments-ൽ main-site-ൽ Admin Pages കാണിക്കാത്ത പ്രശ്നം പരിഹരിച്ചു;
* Improved: subsites-ന്റെ export screen-ൽ നിന്ന് Multisite Ultimate custom post types നീക്കം ചെയ്തു;
* Added: create pages-ൽ network admins-ന് വേണ്ടി quick actions ഉള്ള top-bar ചേർത്തു;
* Added: വലിയ മാറ്റം! Elementor Support!
* Added: വലിയ മാറ്റം! Brizy Support!

### Version 1.2.1 - 17/11/2018 {#version-121---17112018}

* Fixed: പ്ലഗിൻ Multisite Ultimate 1.9.0-മായി compatible ആക്കി;

### Version 1.2.0 - 10/09/2018 {#version-120---10092018}

* Added: wp-config.php-ൽ WU_APC_ALLOW_PHP_PROCESSING true എന്ന് set ചെയ്താൽ PHP support ചേർത്തു. ഇത് PHP-യുടെ eval ഉപയോഗിക്കുന്നില്ല, എങ്കിലും ഇത് സുരക്ഷാ പ്രശ്നങ്ങൾക്ക് കാരണമായേക്കാം. ഇത് ശ്രദ്ധയോടെ ഉപയോഗിക്കുക;
* Improved: Add-on plugin updater;
* Improved: updates server-ന് പുതിയ URL നൽകി;

### Version 1.1.2 - 16/08/2018 {#version-112---16082018}

* Fixed: WP Engine-ൽ ചെറിയ പ്രശ്നം പരിഹരിച്ചു;

### Version 1.1.1 - 16/08/2018 {#version-111---16082018}

* Fixed: replace pages-ന് permission ശരിയായി ലഭിക്കാത്ത പ്രശ്നം പരിഹരിച്ചു;

### Version 1.1.0 - 15/08/2018 {#version-110---15082018}

* Added: Beaver Builder templates ഇപ്പോൾ പിന്തുണയ്ക്കുന്നു! നിങ്ങൾക്ക് ഇഷ്ടമുള്ള page builder ഉപയോഗിച്ച് കസ്റ്റം admin pages ഉണ്ടാക്കാം;
* Added: WordPress default admin pages-ന്റെ content മാറ്റിസ്ഥാപിക്കാൻ ഇപ്പോൾ സാധിക്കും;
* Added: default WordPress admin pages-ന്റെ മുകളിലോ താഴെയോ content ചേർക്കാൻ ഇപ്പോൾ സാധിക്കും;

### 0.0.1 {#001}
- Initial Release
