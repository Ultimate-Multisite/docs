---
title: Admin Page Creator ၏ ပြောင်းလဲမှု မှတ်တမ်း
sidebar_position: 99
_i18n_hash: 60442b433a1fe73d3624b115e3d153a5
---
# Admin Page Creator Changelog

### Version 1.9.0 - Released on 2026-01-18

* Fixed: activate လုပ်တဲ့အခါ ဖြစ်ပေါ်တဲ့ အမှားအယွင်းကြီးတွေကို ပြင်ဆင်ခဲ့ပါတယ်။
* Refactored: Content source classes တွေကို Singleton trait နဲ့ မှန်ကန်တဲ့ parent constructor initialization ကို အသုံးပြုအောင် ပြင်ဆင်ခဲ့ပါတယ်။
* Fixed: content type selector ကို ပေါ်လာအောင် တားဆီးနေတဲ့ Vue.js template compilation errors တွေကို ပြင်ဆင်ခဲ့ပါတယ်။
* Fixed: Vue data properties (template_id, external_link_url_embedable, external_link_url_checking) တွေ ပျောက်နေတာကို ပြင်ဆင်ခဲ့ပါတယ်။
* Fixed: page load လုပ်တဲ့အခါ TinyMCE editor က မှန်ကန်စွာ စတင်မလုပ်နိုင်တဲ့ ပြဿနာကို ပြင်ဆင်ခဲ့ပါတယ်။
* Fixed: Divi support file ကို Composer ကနေ autoload မလုပ်နိုင်တဲ့ ပြဿနာကို ပြင်ဆင်ခဲ့ပါတယ်။
* Fixed: Divi support class ထဲက ပျက်နေတဲ့ PHP syntax ကို ပြင်ဆင်ခဲ့ပါတယ်။
* Improved: JavaScript asset တွေကို စုစည်းမှုနဲ့ minification လုပ်ဆောင်မှုတွေကို ပိုမိုကောင်းမွန်အောင် လုပ်ဆောင်ခဲ့ပါတယ်။
* Improved: နောက်ဆုံးပေါ် WordPress နဲ့ page builder version တွေနဲ့ တွဲဖက်အသုံးပြုနိုင်မှုကို ပိုမိုကောင်းမွန်အောင် လုပ်ဆောင်ခဲ့ပါတယ်။

= Version: 1.8.8 - Released on 2025-09-28

* Prefix ကို ultimate-multisite အဖြစ် ပြောင်းလဲခဲ့ပြီး၊ text domain ကိုလည်း update လုပ်ခဲ့ကာ version ကို တိုးမြှင့်ခဲ့ပါတယ်။

### Version 1.8.7 - 04/10/2023

* Fixed: admin page အသစ်ထည့်ဖို့ ကြိုးစားတဲ့အခါ ဖြစ်ပေါ်တဲ့ အမှားအယွင်းကြီးကို ပြင်ဆင်ခဲ့ပါတယ်။
* Fixed: Oxygen stylesheets prefix နဲ့ ပဋိပက္ခဖြစ်တာကို ပြင်ဆင်ခဲ့ပါတယ်။

### Version 1.8.6 - 09/08/2023

* Added: အဓိက site က data ကို ပြသဖို့ ဒါမှမဟုတ် လက်ရှိ sub-site က data ကို ပြသဖို့ ရွေးချယ်စရာ option တစ်ခု ထည့်သွင်းခဲ့ပါတယ်။
* Added: WordPress Block Editor (Gutenberg) အတွက် ပံ့ပိုးမှု ထည့်သွင်းခဲ့ပါတယ်။
* Fixed: Brizy page assets တွေ မပေါ်တာကို ပြင်ဆင်ခဲ့ပါတယ်။

### Version 1.8.5 - 09/12/2020

* Fixed: menu ကို ဖျောက်ထားဖို့ Screen Options မှာ ပြဿနာရှိနေတာကို ပြင်ဆင်ခဲ့ပါတယ်။

### Version 1.8.4 - 11/11/2020

* Fixed: Multisite Ultimate v2 အတွက် ပံ့ပိုးမှု ထည့်သွင်းခဲ့ပါတယ်။

### Version 1.8.3 - 01/10/2020

* Fixed: ယခင် build ကနေ ရလာတဲ့ Beaver Builder နဲ့ မကိုက်ညီမှုတွေကို ပြင်ဆင်ခဲ့ပါတယ်။
* Fixed: WP 5.5 နဲ့ margin မညီညာမှုတွေကို ပြင်ဆင်ခဲ့ပါတယ်။

### Version 1.8.2 - 21/09/2020

* Fixed: WP 5.5 နဲ့ သေးငယ်တဲ့ မကိုက်ညီမှုတွေကို ပြင်ဆင်ခဲ့ပါတယ်။

### Version 1.8.1 - 05/08/2020

* Fixed: Brizy 2.0 နဲ့ မကိုက်ညီမှုရှိတာကို ပြင်ဆင်ခဲ့ပါတယ်။
* Fixed: menu list ကို တည်ဆောက်တဲ့အခါ စွမ်းဆောင်ရည်ဆိုင်ရာ ပြဿနာငယ်လေးတွေကို ပြင်ဆင်ခဲ့ပါတယ်။

### Version 1.8.0 - 27/04/2020

* Fixed: margin mode မရွေးထားတဲ့အခါ top-bar အောက်မှာ notice တွေ ပုန်းနေတာကို ပြင်ဆင်ခဲ့ပါတယ်။
* Added: Custom pages တွေက WordPress admin top-level နဲ့ sub-pages အများအပြားကို တစ်ပြိုင်နက် အစားထိုးနိုင်ပြီ ဖြစ်ပါတယ်။
* Added: WP Admin Pages PRO ကို အသုံးပြုပြီး admin pages တွေကို ဖျောက်ထားနိုင်ပြီ ဖြစ်ပါတယ်။

### Version 1.7.9 - 01/04/2020

* Fixed: Brizy 1.10.118 နဲ့ အထက်မှာ admin pages ပေါ်က SVG support ကို ပျက်စေတဲ့ ပြဿနာကို ပြင်ဆင်ခဲ့ပါတယ်။

### Version 1.7.8 - 26/03/2020

* Fixed: French ဘာသာစကားကို အသုံးပြုတဲ့အခါ Editor page ကို ပျက်စေတဲ့ escaping error ကို ပြင်ဆင်ခဲ့ပါတယ်။

### Version 1.7.7 - 04/03/2020

* Fixed: Brizy Builder နဲ့ သေးငယ်တဲ့ မကိုက်ညီမှုရှိတာကို ပြင်ဆင်ခဲ့ပါတယ်။
* Improved: Freemius SDK ကို ၂.၃.၂ အထိ update လုပ်ခဲ့ပါတယ်။

### Version 1.7.6 - 10/02/2020

* Fixed: Dashboard Widgets ပေါ်က Admin Page edit button က အလုပ်မလုပ်တာကို ပြင်ဆင်ခဲ့ပါတယ်။
* Fixed: Astra နဲ့ သေးငယ်တဲ့ မကိုက်ညီမှုရှိတာကို ပြင်ဆင်ခဲ့ပါတယ်။
* Fixed: Brizy ရဲ့ version အသစ်က မကိုက်ညီမှုဖြစ်စေတာကို ပြင်ဆင်ခဲ့ပါတယ်။

### Version 1.7.5 - 14/12/2019

* Fixed: Replace Page option မှာ menu items တွေကို ဖြည့်ဆည်းပေးဖို့ edge-case handler အသစ်တစ်ခု ထည့်သွင်းခဲ့ပါတယ်။
* Fixed: Elementor fonts တွေ အလုပ်မလုပ်တာကို ပြင်ဆင်ခဲ့ပါတယ်။
* Improved: Account page ကနေ sensitive info တွေကို ဖျောက်ထားဖို့ support လုပ်နိုင်အောင် Freemius SDK ကို update လုပ်ခဲ့ပါတယ်။

### Version 1.7.4 - 29/11/2019

* Fixed: WooCommerce Memberships နဲ့ မကိုက်ညီမှုရှိတာကို ပြင်ဆင်ခဲ့ပါတယ်။
* Fixed: Oxygen Builder tab component က အလုပ်မလုပ်တာကို ပြင်ဆင်ခဲ့ပါတယ်။
* Fixed: Beaver Themer က အလုပ်မလုပ်တာကို ပြင်ဆင်ခဲ့ပါတယ်။

### Version 1.7.3 - 12/07/2019

* Fixed: parent ကို admin page အမျိုးအစား အခြားတစ်ခုအဖြစ် ပြောင်းတဲ့အခါ pages တွေ ပျောက်သွားတာကို ပြင်ဆင်ခဲ့ပါတယ်။
* Improved: Admin Page အမျိုးအစားတွေကြား list table dividers တွေကို ပိုမိုကောင်းမွန်အောင် လုပ်ဆောင်ခဲ့ပါတယ်။
* Improved: plugin ရဲ့ codebase အားလုံးကို Security Review လုပ်ဆောင်ခဲ့ပါတယ်။
* Improved: menu/content source အမျိုးအစားတစ်ခုအတွက် feature မရရှိတဲ့အခါ Separator tab warning နဲ့ ပတ်သက်တဲ့ မှတ်ချက်ကို ထည့်သွင်းခဲ့ပါတယ်။

### Version 1.7.2 - 01/07/2019

* Fixed: Freemius SDK version ကို ၂.၃.၀ အထိ update လုပ်ခဲ့ပါတယ်။
* Fixed: Flywheel နဲ့ မကိုက်ညီမှုပြဿနာကို ပြင်ဆင်ခဲ့ပါတယ်။

### Version 1.7.1 - 27/06/2019

* Fixed: Welcome Widget ကို role အားလုံးအတွက် ပြသပေးနိုင်အောင် ပြင်ဆင်ခဲ့ပါတယ်။
* Fixed: menu ကို filter မှာ document လုပ်ထားတဲ့ https://docs.wpadminpagespro.com/knowledge-base/hiding-wp-admin-pages-pro-from-your-users/ ကနေ ဖျောက်ထားတဲ့အခါ Admin Pages menu ကို hide/display လုပ်တဲ့ Screen Option မထည့်ပေးနိုင်တဲ့ ပြဿနာကို ပြင်ဆင်ခဲ့ပါတယ်။
* Improved: Admin Pages menu တွေကို ဖျောက်ထားတဲ့အခါ Beaver Builder saved templates list ကနေ တည်ဆောက်ထားတဲ့ templates တွေကိုလည်း hide လုပ်ပေးနိုင်အောင် လုပ်ဆောင်ခဲ့ပါတယ်။
* Added: admin pages တွေကို bulk အသုံးပြုပြီး activate/deactivate လုပ်နိုင်တဲ့ option တွေ ထည့်သွင်းခဲ့ပါတယ်။
* Added: main site ပေါ်မှာလည်း pages တွေကို ပြသနိုင်တဲ့ option ထည့်သွင်းခဲ့ပါတယ်။
* Added: Replace mode မှာ top နဲ့ sub level menu labels တွေကို ပြောင်းလဲနိုင်တဲ့ option ထည့်သွင်းခဲ့ပါတယ်။

### Version 1.7.0 - 04/06/2019

* Fix: Oxygen templates တွေ မပေါ်တာကို ပြင်ဆင်ခဲ့ပါတယ်။
* Added: Widget Creation အတွက် ပံ့ပိုးမှု ထည့်သွင်းခဲ့ပါတယ်။

### Version 1.6.1 - 22/05/2019

* Fixed: စာလုံးပေါင်းအမှား (Typos) တွေကို ပြင်ဆင်ခဲ့ပါတယ်။
* Fixed: တူညီတဲ့ order value ရှိတဲ့ sub-menu pages တွေက ယခင် sub-menu items တွေကို နေရာယူတာကို ပြင်ဆင်ခဲ့ပါတယ်။
* Fixed: Duplication လုပ်တဲ့အခါ slug ကို reset လုပ်ပေးနိုင်အောင် ပြင်ဆင်ခဲ့ပါတယ်။
* Improved: pt_BR နဲ့ es_ES po files တွေကို update လုပ်ခဲ့ပါတယ်။
* Improved: list table မှာ custom pages တွေကို parent pages အဖြစ်လည်း စာရင်းလုပ်ပြပေးနိုင်အောင် လုပ်ဆောင်ခဲ့ပါတယ်။

### Version 1.6.0 - 21/05/2019

* Added: External Links တွေက iframe loading ကိုလည်း ပံ့ပိုးပေးနိုင်ပြီ ဖြစ်ပါတယ်။

### Version 1.5.5 - 17/05/2019

* Fixed: page တစ်ခုကို delete လုပ်လိုက်တာ ဒါမှမဟုတ် duplicate လုပ်လိုက်တာနဲ့ ပတ်သက်ပြီး warning message ပစ်လွှတ်တာကို ပြင်ဆင်ခဲ့ပါတယ်။
* Fixed: Permission settings တွေကို Admins တွေဆီ အသုံးမပြုနိုင်တာကို ပြင်ဆင်ခဲ့ပါတယ်။

### Version 1.5.4 - 08/05/2019

* Fixed: Sliced Invoices နဲ့ မကိုက်ညီမှုရှိတာကို ပြင်ဆင်ခဲ့ပါတယ်။
* Fixed: Oxygen မှာ သေးငယ်တဲ့ ပြဿနာတစ်ခုကို ပြင်ဆင်ခဲ့ပါတယ်။
* Fixed: new admin page title field ပေါ်က placeholder က key-up လုပ်တဲ့အခါ မပျောက်တာကို ပြင်ဆင်ခဲ့ပါတယ်။

### Version 1.5.3 - 03/05/2019

* Fixed: Advanced Custom Field option pages နဲ့ မကိုက်ညီမှုရှိတာကို ပြင်ဆင်ခဲ့ပါတယ်။
* Added: custom admin pages တွေရဲ့ target အဖြစ် သီးသန့် user တွေကို ထည့်သွင်းနိုင်တဲ့ option ထည့်သွင်းခဲ့ပါတယ်။

### Version 1.5.2 - 30/04/2019

* Fixed: Brizy ရဲ့ version အသစ်တွေနဲ့ မကိုက်ညီမှုရှိတာကို ပြင်ဆင်ခဲ့ပါတယ်။
* Added: John Rozzo ရဲ့ ကျေးဇူးနဲ့ Spanish translation ကို ထည့်သွင်းခဲ့ပါတယ်။ ကျေးဇူးတင်ပါတယ်၊ John!
* Added: Oxygen Builder အတွက် Beta support ထည့်သွင်းခဲ့ပါတယ်။

### Version 1.5.1 - 15/04/2019

* Fixed: Normal နဲ့ HTML editors ပေါ်က placeholders တွေနဲ့ ပတ်သက်တဲ့ ပြဿနာကို ပြင်ဆင်ခဲ့ပါတယ်။
* Fixed: Admin Pages တွေ Tools -> Export မှာ မပေါ်တာကို ပြင်ဆင်ခဲ့ပါတယ်။
* Fixed: scripts နဲ့ styles တွေကို ကိုယ်ပိုင် pages တွေမှာပဲ load လုပ်ပေးနိုင်အောင် ပြင်ဆင်ခဲ့ပါတယ်။
* Added: Super Admins တွေက Admin Pages တွေကို duplicate လုပ်နိုင်ပြီ ဖြစ်ပါတယ်။

### Version 1.5.0 - 29/03/2019

* Fixed: Sentry က ဖမ်းမိတဲ့ ပြဿနာငယ်လေးတွေကို ပြင်ဆင်ခဲ့ပါတယ်။
* Fixed: Edit Admin page screen ပေါ်က delete button က အလုပ်မလုပ်တာကို ပြင်ဆင်ခဲ့ပါတယ်။
* Improved: BeaverBuilder button ကို Standard BB license ကိုလည်း ပံ့ပိုးတယ်ဆိုတာ ရှင်းရှင်းလင်းလင်း သိသာအောင် ပြောင်းလဲခဲ့ပါတယ်။
* Added: submenus တွေရဲ့ order ကိုလည်း set လုပ်နိုင်ပြီ ဖြစ်ပါတယ်။
* Added: Replace page mode မှာ menu items အားလုံးကို support လုပ်နိုင်ပြီ ဖြစ်ပါတယ်။

### Version 1.4.0 - 14/02/2019 (stand-alone) & 27/02/2019 (add-on)

* Added: https://wpadminpagespro.com မှာ Stand-alone plugin အဖြစ် စတင်ထုတ်ဝေခဲ့ပါတယ်။
* Added: page creation process ပြီးသွားတဲ့အခါ menu ကနေ Admin Pages menu item ကို ဖယ်ရှားနိုင်တဲ့ option ထည့်သွင်းခဲ့ပါတယ်။
* Added: admin pages တွေကနေ admin notices တွေကို ဖယ်ရှားနိုင်တဲ့ option ထည့်သွင်းခဲ့ပါတယ်။
* Added: Content processing ကို ထည့်သွင်းခဲ့လို့ {{user:first_name}} လို placeholders တွေ ထည့်နိုင်ပြီး user first_name meta field နဲ့ အလိုအလျောက် အစားထိုးပေးနိုင်ပါတယ်။
* Added: Inline Editor ကို ထည့်သွင်းခဲ့ပါတယ်။
* Added: Page Builders/Content Sources အသစ်တွေ အနာဂတ်မှာ ထည့်ရလွယ်ကူစေဖို့ consolidated content source parent class ကို ထည့်သွင်းခဲ့ပါတယ်။
* Added: External URLs အတွက် ပံ့ပိုးမှု ထည့်သွင်းခဲ့ပါတယ်။

### Version 1.3.0 - 15/01/2019

* Fixed: multisite environment တွေမှာ Admin Pages တွေ main-site ပေါ်မှာ မပေါ်တာကို ပြင်ဆင်ခဲ့ပါတယ်။
* Improved: subsites ရဲ့ export screen ကနေ Multisite Ultimate custom post types တွေကို ဖယ်ရှားခဲ့ပါတယ်။
* Added: create pages ပေါ်မှာ network admins တွေအတွက် quick actions ပါတဲ့ top-bar ထည့်သွင်းခဲ့ပါတယ်။
* Added: ကြီးမားတဲ့ အရာ! Elementor Support!
* Added: ကြီးမားတဲ့ အရာ! Brizy Support!

### Version 1.2.1 - 17/11/2018

* Fixed: plugin ကို Multisite Ultimate 1.9.0 နဲ့ ကိုက်ညီအောင် လုပ်ဆောင်ခဲ့ပါတယ်။

### Version 1.2.0 - 10/09/2018

* Added: wp-config.php မှာ WU_APC_ALLOW_PHP_PROCESSING ကို true အဖြစ် set လုပ်ထားရင် PHP support ထည့်သွင်းပေးပါတယ်။ ဒါက PHP ရဲ့ eval ကို မသုံးပေမယ့်လည်း လုံခြုံရေး အပေါက်တွေ ဖြစ်စေနိုင်တာကြောင့် သတိထားအသုံးပြုပါ။
* Improved: Add-on plugin updater ကို ပိုမိုကောင်းမွန်အောင် လုပ်ဆောင်ခဲ့ပါတယ်။
* Improved: updates server အတွက် URL အသစ်တစ်ခု ထည့်သွင်းခဲ့ပါတယ်။

### Version 1.1.2 - 16/08/2018

* Fixed: WP Engine နဲ့ သေးငယ်တဲ့ ပြဿနာတစ်ခုကို ပြင်ဆင်ခဲ့ပါတယ်။

### Version 1.1.1 - 16/08/2018

* Fixed: replace pages တွေဆီ Permission တွေ မှန်ကန်စွာ အသုံးမပြုနိုင်တာကို ပြင်ဆင်ခဲ့ပါတယ်။

### Version 1.1.0 - 15/08/2018

* Added: Beaver Builder templates တွေကို အခု ပံ့ပိုးပေးပြီ ဖြစ်ပါတယ်။ ကိုယ်အကြိုက်ဆုံး page builder ကို အသုံးပြုပြီး custom admin pages တွေ ဖန်တီးနိုင်ပါပြီ။
* Added: WordPress default admin pages ရဲ့ content တွေကိုလည်း အစားထိုးနိုင်ပြီ ဖြစ်ပါတယ်။
* Added: default WordPress admin pages တွေရဲ့ အပေါ် ဒါမှမဟုတ် အောက်မှာ content အသစ်ထည့်နိုင်ပြီ ဖြစ်ပါတယ်။

### 0.0.1
- စတင်ထုတ်ဝေခြင်း
