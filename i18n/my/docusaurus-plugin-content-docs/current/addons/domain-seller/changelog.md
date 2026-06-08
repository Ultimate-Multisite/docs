---
title: ဒိုမိန်ရောင်းသူ ပြောင်းလဲမှုမှတ်တမ်း
sidebar_position: 99
_i18n_hash: bc3ab4e3f0076e80e8c38ed313f4430d
---
# Domain Seller Changelog

Version 1.1.0 - 2026-05-08 တွင် ထုတ်ဝေသည်
- New: ResellerClub, Enom, နဲ့ OpenSRS registrar တွေအတွက် DNS record အသစ်တွေ ဖန်တီးနိုင်အောင် (add_dns_record) လုပ်ပေးထားပါတယ်
- Fix: Default DNS Records parser က {DOMAIN} နဲ့ {SITE_URL} tokens တွေကို အခုဆိုရင် သည်းခံနိုင်ပြီ
- Fix: Domain ရွေးချယ်တဲ့ checkout field တွေရဲ့ slug တွေကို site_url နဲ့ မတူအောင် (collision မဖြစ်အောင်) နာမည်ပေးထားပါတယ်

Version 1.0.8 - 2026-05-07 တွင် ထုတ်ဝေသည်
- Fix: ResellerClub domain ရဲ့ ဈေးနှုန်းတွေဟာ မှန်ကန်တဲ့ API endpoint ကနေ လက်ရှိကုန်ကျစရိတ်တွေကို ယူလာပြီ

Version 1.0.7 - 2026-05-06 တွင် ထုတ်ဝေသည်
* Fix: ResellerClub test_connection က လိုအပ်တဲ့ tlds parameter (#224) ကို ပို့ပေးပြီ

Version 1.0.6 - 2026-05-05 တွင် ထုတ်ဝေသည်
* Fix: ResellerClub domain မှတ်ပုံတင်မှုဟာ API response ကို ပိုကောင်းအောင် ကိုင်တွယ်နိုင်မှုနဲ့ registry-driven provider routing တို့နဲ့ အခုဆိုရင် မှန်ကန်စွာ အလုပ်လုပ်ပြီ
* Fix: Register Domain admin page ရဲ့ အသုံးပြုရလွယ်ကူမှု (UX) ကို ပိုမိုကောင်းမွန်အောင် လုပ်ပေးထားပါတယ်
* Removed: CyberPanel registrar integration ကို ဖယ်ရှားလိုက်ပါပြီ

Version 1.0.5 - 2026-04-02 တွင် ထုတ်ဝေသည်
* New: domain မှတ်ပုံတင်ခြင်းနဲ့ စီမံခန့်ခွဲမှုအတွက် GoDaddy registrar integration အသစ်ထည့်ပေးထားပါတယ်
* New: NameSilo registrar integration အသစ်ထည့်ပေးထားပါတယ်
* New: ResellerClub registrar integration အသစ်ထည့်ပေးထားပါတယ်
* New: domain ဝယ်ယူပြီး domain mapping လုပ်တဲ့အခါ SES ပို့တဲ့ domain ကို အလိုအလျောက် စစ်ဆေးပေးခြင်း
* Fix: test environment မှာ guard plugin constants တွေ ပြန်လည်သတ်မှတ်တာကို ကာကွယ်ပေးလိုက်ပါတယ်
* Fix: MySQL flags တွေကို install-wp-tests.sh မှာ စကားလုံးခွဲတာကို မှန်ကန်စွာ လုပ်ပေးလိုက်ပါတယ်

Version 1.0.4 - 2026-03-14 တွင် ထုတ်ဝေသည်
* **Fix:** ပျောက်ဆုံးနေတဲ့ css assets အချို့ကို ပြင်ဆင်ပေးထားပါတယ်
* **Fix:** မရနိုင်တဲ့ tlds နဲ့ ပတ်သက်တဲ့ အမှားတွေကို ပြင်ဆင်ပေးထားပါတယ်

Version 1.0.3 - 2026-03-09 တွင် ထုတ်ဝေသည်
* **Fix:** checkout shortcode နဲ့ legacy signup template ကို အသုံးပြုတဲ့အခါ Vue reactive property အမှားများ (domain_option, selected_domain, domain_provider) ကို ပြင်ဆင်ပေးထားပါတယ်
* **Fix:** domain ရွေးချယ်တဲ့ checkout field မှာ subdomain input field ရဲ့ နေရာမမှန်တာနဲ့ စာသားကြီးလွန်းတာတွေကို ပြင်ဆင်ပေးထားပါတယ်
* **Fix:** domain ရွေးချယ်တဲ့ field ရှိနေရင် "Your URL will be" preview block ကို ပုန်းခိုင်းလိုက်ပါတယ်

Version 1.0.2 - 2026-03-01 တွင် ထုတ်ဝေသည်
* **Improved:** settings page ကနေ global markup settings တွေကို ဖယ်ရှားလိုက်ပါတယ် — ဈေးနှုန်းတွေဟာ အခုဆိုရင် product တစ်ခုချင်းစီအတွက်ပဲ ဖြစ်ပါတယ်
* **Improved:** settings page မှာ "Manage Domain Products" link ကို ထပ်ထည့်ပေးလိုက်ပါတယ်၊ ဒါမှ အလွယ်တကူ သွားနိုင်မှာပါ
* **Improved:** domain product settings တွေအတွက် field description တွေနဲ့ tooltips တွေ ပိုရှင်းလင်းသွားပါတယ် (catch-all vs TLD-specific, markup types, introductory pricing)
* **Improved:** settings page တစ်ခုလုံးမှာ (search TLDs, renewals, DNS, notifications) ဖော်ပြချက်တွေကို ပိုကောင်းအောင် လုပ်ပေးထားပါတယ်

Version 1.0.1 - 2026-02-27 တွင် ထုတ်ဝေသည်

* **New:** bulk pricing စီမံခန့်ခွဲဖို့ TLD import tool အသစ်
* **New:** domain products အတွက် introductory pricing ပံ့ပိုးမှုအသစ်
* **New:** Cypress နဲ့ E2E test suite အသစ်
* **New:** domain lifecycle notification အတွက် email templates အသစ်များ
* **New:** admin domain registration modal မှာ registrant address fields တွေ ထည့်ပေးထားပါတယ်၊ ဒါတွေက settings ကနေ အလိုအလျောက် ဖြည့်ပေးမှာပါ
* **New:** add, edit, နဲ့ delete record support ပါတဲ့ customer DNS management interface အသစ်
* **New:** domain အလိုအလျောက် mapping လုပ်တဲ့ "Bring your own domain" checkout option အသစ်
* **New:** checkout လုပ်တဲ့အချိန်မှာ domain name ကနေ site URL ကို အလိုအလျောက် ထုတ်ပေးခြင်း
* **New:** settings မှာ default nameserver နဲ့ DNS record configuration အသစ်
* **New:** core domain edit page မှာ domain registration details နဲ့ DNS management အသစ်
* **New:** Setup wizard က အဓိပ္ပာယ်ရှိတဲ့ default တွေနဲ့ default domain product ကို အလိုအလျောက် ဖန်တီးပေးခြင်း
* **New:** configured provider အားလုံးမှာ cron ကနေ နေ့စဉ် TLD sync အလိုအလျောက် လုပ်ပေးခြင်း
* **New:** WHOIS privacy protection ကို product တစ်ခုချင်းစီအလိုက် စီမံခန့်ခွဲနိုင်ခြင်း (always on, customer choice, or disabled)
* **New:** WHOIS privacy checkout checkbox နဲ့ ဈေးနှုန်းပြသမှု၊ dark mode support ပါဝင်ခြင်း
* **New:** manual domain registration အတွက် Register Domain admin page အသစ်
* **New:** Ultimate Multisite update server ကနေ plugin အဆင့်မြှင့်တင်မှုတွေကို အလိုအလျောက် လုပ်ပေးခြင်း
* **New:** product list table မှာ domain product type filter tab နဲ့ purple badge styling ပါဝင်ခြင်း
* **New:** domain checkout form မှာ registrant contact fields (name, address, city, state, postal code, country, phone) အသစ်
* **New:** registrar API ကို ခေါ်မမီခင် registrant field validation လုပ်ပြီး ရှင်းလင်းတဲ့ error message တွေ ပြပေးခြင်း
* **New:** domain registration events အတွက် provider-specific log channels များ (ဥပမာ- domain-seller-namecheap.log)
* **New:** main registration/signup checkout form မှာ registrant contact fields (domain မှတ်ပုံတင်တဲ့အခါ ပြသသည်)
* **Improved:** Domain Search checkout field ကို subdomain, register, နဲ့ existing domain tabs တွေကို ပံ့ပိုးပေးတဲ့ unified Domain Selection field နဲ့ အစားထိုးလိုက်ပါတယ်
* **Improved:** Domain product settings တွေကို product edit page မှာ core widget system ကနေ inline အဖြစ် ပြသပေးနိုင်ပြီ
* **Improved:** Customer domain info ကို standalone metabox အစား core domain mapping widget နဲ့ ချိတ်ဆက်ပေးလိုက်ပါတယ်
* **Improved:** TLD import wizard ကို provider အားလုံးကနေ တစ်ချက်နှိပ်ရုံနဲ့ sync လုပ်နိုင်အောင် ရိုးရှင်းအောင် လုပ်ပေးလိုက်ပါတယ်
* **Improved:** Namecheap domain availability က ပိုမြန်တဲ့ search အတွက် batch API call ကို အသုံးပြုလာပါတယ်
* **Improved:** Namecheap pricing API က မှန်ကန်တဲ့ parameters နဲ့ response parsing ကို အသုံးပြုလာပါတယ်
* **Improved:** TLD storage ကို single network option မှာ စုစည်းထားပါတယ်
* **Improved:** DNS changes, transfers, နဲ့ config application အတွက် domain activity logging လုပ်ပေးနိုင်ပြီ
* **Improved:** OpenSRS အတွက် IANA master list နဲ့ batch validation ကို အသုံးပြုပြီး TLD sync အပြည့်အဝ လုပ်ပေးနိုင်ပြီ
* **Improved:** Namecheap အတွက် paginated API requests နဲ့ TLD sync အပြည့်အဝ လုပ်ပေးနိုင်ပြီ
* **Improved:** legacy provider classes တွေကို Integration Registry pattern နဲ့ အစားထိုးလိုက်ပါတယ်
* **Improved:** DNS နဲ့ transfer configuration ပါတဲ့ Settings panel အသစ်
* **Improved:** ဖုန်းနံပါတ်တွေကို +CC.NNN registrar format အတိုင်း အလိုအလျောက် ပုံစံထုတ်ပေးပါတယ်
* **Improved:** Phone field validation က submit မလုပ်ခင် format characters တွေကို ဖယ်ရှားပေးပါတယ်
* **Improved:** Version requirement ကို Ultimate Multisite 2.4.12 ကို တိုးမြှင့်ပြီး ပိုရှင်းလင်းတဲ့ အသိပေးချက် ထည့်ပေးလိုက်ပါတယ်
* **Improved:** CI workflow က addon နဲ့ core plugin နှစ်ခုစလုံးအတွက် proper checkout ကို အသုံးပြုပါတယ်
* **Improved:** prepare_registrant_info() က checkout-saved user meta ကနေ ဖတ်ပြီး billing address ကို fallback အဖြစ် အသုံးပြုပါတယ်
* **Fixed:** checkout လုပ်နေတဲ့ non-logged-in user တွေအတွက် Domain search AJAX မအောင်မြင်တာကို ပြင်ဆင်ပေးထားပါတယ်
* **Fixed:** checkout လုပ်နေတဲ့ non-logged-in user တွေအတွက် Domain pricing AJAX မအောင်မြင်တာကို ပြင်ဆင်ပေးထားပါတယ်
* **Fixed:** WP-CLI command တွေ run တဲ့အခါ Spyc class redeclaration fatal error ကို ပြင်ဆင်ပေးထားပါတယ်
* **Fixed:** Namecheap sandbox API timeout က အရမ်းတိုလွန်းတာကို ပြင်ဆင်ပေးထားပါတယ်
* **Fixed:** Domain search Select button text ကို green background ပေါ်မှာ မမြင်ရတာကို ပြင်ဆင်ပေးထားပါတယ်
* **Fixed:** contact info မရှိလို့ "RegistrantFirstName is Missing" error နဲ့ domain မှတ်ပုံတင်တာ မအောင်မြင်တာကို ပြင်ဆင်ပေးထားပါတယ်
* **Fixed:** site မရှိသေးတဲ့အချိန်မှာ checkout လုပ်တဲ့အခါ domain record ကို blog_id=0 နဲ့ ဖန်တီးမိတာကို ပြင်ဆင်ပေးထားပါတယ်
* **Fixed:** Default TLDs setting ကို parsed array အစား string အနေနဲ့ ပြန်ပေးနေတာကို ပြင်ဆင်ပေးထားပါတယ်
* **Removed:** Standalone Domain Management admin page ကို ဖယ်ရှားလိုက်ပါတယ် — အခုဆိုရင် core domain pages ကနေ စီမံခန့်ခွဲပေးမှာပါ

Version 1.0.0 - 2025-09-28 တွင် ထုတ်ဝေသည်

**Ultimate Multisite v2 အတွက် အကြီးအကျယ် ပြန်လည်ရေးသားခြင်း**

* **New:** ခေတ်မီ PHP 7.4+ architecture နဲ့ အလုံးစုံ ပြန်လည်ရေးသားထားပါတယ်
* **New:** Ultimate Multisite v2 checkout system နဲ့ ချောမွေ့စွာ ပေါင်းစပ်ထားပါတယ်
* **New:** ဈေးနှုန်းရွေးချယ်မှုများနဲ့ domain product စီမံခန့်ခွဲမှုအသစ်
* **New:** domain provider အမျိုးမျိုးကို ပံ့ပိုးပေးနိုင်တဲ့ architecture အသစ်
* **New:** အလိုအလျောက် သက်တမ်းတိုးခြင်းနဲ့ subscription ပေါင်းစပ်မှုအသစ်
* **New:** Customer domain management interface အသစ်
* **New:** Admin domain monitoring နဲ့ logs အသစ်
* **New:** domain products အတွက် Coupon support အသစ်
* **New:** comprehensive settings management အသစ်
* **New:** developer-friendly extensible codebase အသစ်
* **Improved:** OpenSRS provider ကို full feature support နဲ့ အဆင့်မြှင့်တင်ပေးထားပါတယ်
* **Improved:** Ultimate Multisite v2 နဲ့ ကိုက်ညီတဲ့ ခေတ်မီ UI ကို အသုံးပြုထားပါတယ်
* **Fixed:** အဟောင်းဖြစ်တဲ့ v1 code အားလုံးကို v2 စံနှုန်းတွေနဲ့ အဆင့်မြှင့်ပေးထားပါတယ်
* **Removed:** Legacy v1 compatibility (breaking change) ကို ဖယ်ရှားလိုက်ပါတယ်

### Previous Versions (v1 Legacy)

### Version 0.0.3 - 20/08/2019

* Fixed: Groundhogg CRM နဲ့ မကိုက်ညီမှုတွေကို ပြင်ဆင်ပေးထားပါတယ်
* Note: ဒါဟာ v1 နဲ့ ကိုက်ညီတဲ့ နောက်ဆုံးထုတ်ဝေမှု ဖြစ်ပါတယ်

### Version 0.0.2 - 07/12/2018

* Fixed: License Key field ကို ဖယ်ရှားလိုက်ပါတယ်
* Fixed: feature plugin ကို အသုံးပြုတဲ့အခါ Plan tabs တွေ ပျောက်နေတာကို ပြင်ဆင်ပေးထားပါတယ်
* Improved: registration field ပေါ်မှာ skip button တစ်ခု ထပ်ထည့်ပေးလိုက်ပါတယ်

### Version 0.0.1 - Initial Release

* WP Ultimo v1 အတွက် basic OpenSRS integration
* ရိုးရှင်းတဲ့ domain search နဲ့ မှတ်ပုံတင်မှု
* Plan အခြေခံ domain ခွင့်ပြုချက်များ
