---
title: ڊومين وڪرو ڪندڙ تبديلي لاگ
sidebar_position: 99
_i18n_hash: 6b9be73c1503d8df8a806bb02b241873
---
# ڊومين وڪرو ڪندڙ تبديلي نامو {#domain-seller-changelog}

نسخو 1.3.0 - 2026-06-02 تي جاري ٿيو
- نئون: جڏهن HostAfrica reseller balance تمام گهٽ ٿئي ته network-admin وارننگ شامل ڪئي وئي
- نئون: نون رجسٽر ٿيل ڊومينن جي network سائيٽ سان خودڪار ميپنگ شامل ڪئي وئي
- درستگي: رجسٽرنٽ ميدان جون گهرجون صرف نئون ڊومين رجسٽر ڪرڻ وقت لاڳو ڪيون ويون
- درستگي: monitor balance نوٽيسن کي dismissible بڻايو ويو
- درستگي: يقيني بڻايو ويو ته WooCommerce رجسٽرنٽ بلنگ تفصيل محفوظ رهن
- درستگي: رجسٽريشن دوران رجسٽرنٽ رابطي جون گهرجون لاڳو ڪيون ويون
- درستگي: ڊومين رجسٽريشن پيداوارن کي 0% markup سان ٺهڻ کان روڪيو ويو
- درستگي: چيڪ آئوٽ سيشن وهڪري دوران ڊومين چونڊون ۽ قيمت بندي محفوظ رکي وئي
- درستگي: HostAfrica ڊومين قيمت بندي جي ڪرنسي ڏيک بهتر ڪئي وئي
- درستگي: WP-core query-var بي ميلين کان بچڻ لاءِ چيڪ آئوٽ form-action رويو بهتر ڪيو ويو
- بهتر: سيٽ اپ رهنمائي ۾ HostAfrica reseller configuration دستاويزن کي ڳنڍيو ويو

نسخو 1.2.0 - 2026-05-25 تي جاري ٿيو
- نئون: HostAfrica کي ڊومين وڪرو ڪرڻ واري integration طور شامل ڪيو ويو، جنهن ۾ چيڪ آئوٽ، سيٽ اپ وزرڊ، lookup، TLD/قيمت بندي، رجسٽريشن، تجديد، منتقلي، nameserver، DNS، EPP code، registrar lock، ۽ ID تحفظ جي سپورٽ شامل آهي
- نئون: Openprovider کي ڊومين وڪرو ڪرڻ واري integration طور شامل ڪيو ويو، جنهن ۾ reseller قيمت بندي، رجسٽريشن، تجديد، منتقلي، nameserver، DNS، EPP code، registrar lock، WHOIS privacy، ۽ TLD sync سپورٽ شامل آهي
- نئون: Hostinger کي ڊومين وڪرو ڪرڻ واري integration طور شامل ڪيو ويو، جيڪا core integration مان مشترڪ Hostinger API token استعمال ڪري availability checks، رجسٽريشن، nameserver updates، registrar lock، ۽ WHOIS privacy لاءِ ڪم ڪري ٿي
- بهتر: developer integration رهنمائي لاءِ ڊومين lifecycle action ۽ filter docblocks شامل ڪيا ويا
- بهتر: addon readme ۾ پلگ ان compatibility metadata کي WordPress 7.0 تائين اپڊيٽ ڪيو ويو
- بهتر: ايندڙ رليز coordination لاءِ استعمال ٿيندڙ planning templates اپڊيٽ ڪيا ويا

نسخو 1.1.0 - 2026-05-08 تي جاري ٿيو
- نئون: DNS record creation (add_dns_record) ResellerClub، Enom، ۽ OpenSRS registrars لاءِ لاڳو ڪئي وئي
- درستگي: Default DNS Records parser هاڻي {DOMAIN} ۽ {SITE_URL} tokens برداشت ڪري ٿو
- درستگي: ڊومين چونڊ چيڪ آئوٽ ميدان slugs کي site_url سان collision روڪڻ لاءِ namespaced ڪيو ويو

نسخو 1.0.8 - 2026-05-07 تي جاري ٿيو
- درستگي: ResellerClub ڊومين قيمت بندي هاڻي صحيح API endpoint مان live cost prices حاصل ڪري ٿي

نسخو 1.0.7 - 2026-05-06 تي جاري ٿيو
* درستگي: ResellerClub test_connection گھربل tlds parameter موڪلي ٿو (#224)

نسخو 1.0.6 - 2026-05-05 تي جاري ٿيو
* درستگي: ResellerClub ڊومين رجسٽريشن هاڻي بهتر API response handling ۽ registry-driven provider routing سان صحيح ڪم ڪري ٿي
* درستگي: Register Domain admin page UX بهتريون
* هٽايو ويو: CyberPanel registrar integration

نسخو 1.0.5 - 2026-04-02 تي جاري ٿيو
* نئون: ڊومين رجسٽريشن ۽ انتظام لاءِ GoDaddy registrar integration
* نئون: NameSilo registrar integration
* نئون: ResellerClub registrar integration
* نئون: ڊومين خريداري ۽ ميپنگ تي SES sending domain جي خودڪار تصديق
* درستگي: test environment ۾ پلگ ان constants کي redefinition کان بچايو ويو
* درستگي: MySQL flags install-wp-tests.sh ۾ صحيح word-split ٿين ٿا

نسخو 1.0.4 - 2026-03-14 تي جاري ٿيو
* **درستگي:** ڪجهه گم ٿيل css assets
* **درستگي:** unavailable tlds سان لاڳاپيل غلطي

نسخو 1.0.3 - 2026-03-09 تي جاري ٿيو
* **درستگي:** checkout shortcode سان legacy signup template استعمال ڪرڻ وقت Vue reactive property errors (domain_option, selected_domain, domain_provider)
* **درستگي:** ڊومين چونڊ چيڪ آئوٽ ميدان ۾ Subdomain input field جي misalignment ۽ oversized text
* **درستگي:** جڏهن ڊومين چونڊ ميدان موجود هجي ته "توهان جو URL هوندو" preview block لڪايو

نسخو 1.0.2 - 2026-03-01 تي جاري ٿيو
* **بهتر:** settings page مان global markup settings هٽايون ويون — قيمت بندي هاڻي رڳو في-پيداوار آهي
* **بهتر:** تيز navigation لاءِ settings page تي "ڊومين پيداوارون سنڀاليو" لنڪ شامل ڪئي وئي
* **بهتر:** ڊومين پيداوار settings لاءِ وڌيڪ صاف ميدان وضاحتون ۽ tooltips (catch-all بمقابله TLD-specific، markup types، introductory pricing)
* **بهتر:** settings page ۾ بهتر وضاحتون (search TLDs، renewals، DNS، notifications)

نسخو 1.0.1 - 2026-02-27 تي جاري ٿيو

* **نئون:** وڏي پيماني تي قيمت جي انتظام لاءِ TLD درآمد اوزار
* **نئون:** ڊومين پيداوارن لاءِ تعارفي قيمت جي مدد
* **نئون:** Cypress سان E2E ٽيسٽ سوٽ
* **نئون:** ڊومين جي زندگي چڪر جي اطلاعن لاءِ Email ٽيمپليٽس
* **نئون:** admin ڊومين رجسٽريشن modal تي رجسٽر ڪندڙ جي پتي جا خانا، settings مان اڳواٽ ڀريل
* **نئون:** گراهڪ DNS انتظام انٽرفيس، record شامل ڪرڻ، سنوارڻ، ۽ حذف ڪرڻ جي مدد سان
* **نئون:** خودڪار ڊومين mapping سان "پنهنجو ڊومين پاڻ آڻيو" checkout آپشن
* **نئون:** checkout دوران ڊومين نالي مان site URL خودڪار طور ٺاهيو
* **نئون:** settings ۾ ڊفالٽ nameserver ۽ DNS record ترتيب
* **نئون:** core ڊومين edit صفحي تي ڊومين رجسٽريشن تفصيل ۽ DNS انتظام
* **نئون:** Setup wizard سمجھدار ڊفالٽس سان هڪ ڊفالٽ ڊومين پيداوار خودڪار ٺاهي ٿو
* **نئون:** cron ذريعي سڀني ترتيب ڏنل providers ۾ روزاني خودڪار TLD sync
* **نئون:** هر پيداوار جي ترتيب سان WHOIS privacy protection (هميشه چالو، گراهڪ جي چونڊ، يا غير فعال)
* **نئون:** قيمت ڏيکاءَ ۽ dark mode مدد سان WHOIS privacy checkout checkbox
* **نئون:** هٿرادو ڊومين رجسٽريشن لاءِ Register Domain admin صفحو
* **نئون:** Ultimate Multisite update server ذريعي خودڪار plugin updates
* **نئون:** product list table ۾ purple badge styling سان ڊومين product type filter tab
* **نئون:** ڊومين checkout form تي رجسٽر ڪندڙ جا رابطي جا خانا (نالو، پتو، شهر، رياست، postal code، ملڪ، phone)
* **نئون:** registrar API کي سڏڻ کان اڳ رجسٽر ڪندڙ جي خانن جي validation، واضح error messages سان
* **نئون:** ڊومين رجسٽريشن واقعن لاءِ provider-specific log channels (مثال طور domain-seller-namecheap.log)
* **نئون:** مکيه registration/signup checkout form تي رجسٽر ڪندڙ جا رابطي جا خانا (ڊومين رجسٽر ڪرڻ وقت ڏيکاريل)
* **بهتر:** Domain Search checkout field کي متحد Domain Selection field سان تبديل ڪيو، جيڪو subdomain، register، ۽ existing domain tabs کي سپورٽ ڪري ٿو
* **بهتر:** ڊومين product settings، core widget system ذريعي product edit page تي inline render ٿين ٿيون
* **بهتر:** گراهڪ ڊومين info standalone metabox بدران core domain mapping widget ۾ hooks ڪري ٿي
* **بهتر:** TLD import wizard سڀني providers مان one-click sync لاءِ سادو ڪيو ويو
* **بهتر:** Namecheap ڊومين availability تيز search لاءِ batch API call استعمال ڪري ٿي
* **بهتر:** Namecheap pricing API صحيح parameters ۽ response parsing استعمال ڪري ٿي
* **بهتر:** هڪ واحد network option ۾ مرڪزي TLD storage
* **بهتر:** DNS تبديليون، transfers، ۽ config application لاءِ ڊومين activity logging
* **بهتر:** OpenSRS لاءِ IANA master list استعمال ڪندي batch validation سان مڪمل TLD sync
* **بهتر:** Namecheap لاءِ paginated API requests سان مڪمل TLD sync
* **بهتر:** legacy provider classes کي Integration Registry pattern سان تبديل ڪيو
* **بهتر:** DNS ۽ transfer configuration سان settings panel
* **بهتر:** Phone numbers خودڪار طور +CC.NNN registrar format ۾ format ٿين ٿا
* **بهتر:** Phone field validation submission کان اڳ formatting characters هٽائي ٿي
* **بهتر:** Version requirement Ultimate Multisite 2.4.12 تائين وڌائي وئي، وڌيڪ واضح notice سان
* **بهتر:** CI workflow addon ۽ core plugin ٻنهي لاءِ مناسب checkout استعمال ڪري ٿي
* **بهتر:** prepare_registrant_info() checkout-saved user meta مان پڙهي ٿو، billing address fallback سان
* **درست:** checkout دوران لاگ ان نه ٿيل users لاءِ Domain search AJAX ناڪام ٿي رهيو هو
* **درست:** checkout دوران لاگ ان نه ٿيل users لاءِ Domain pricing AJAX ناڪام ٿي رهيو هو
* **درست:** WP-CLI commands هلائڻ وقت Spyc class redeclaration fatal error
* **درست:** Namecheap sandbox API timeout تمام ننڍو هو
* **درست:** Domain search Select button text سائي background تي نظر نه اچي رهيو هو
* **درست:** رابطي جي معلومات نه هجڻ سبب "RegistrantFirstName is Missing" error سان ڊومين رجسٽريشن ناڪام ٿي رهي هئي
* **درست:** جڏهن checkout وقت site اڃا موجود نه هئي ته blog_id=0 سان Domain record ٺهيو
* **درست:** Default TLDs setting parsed array بدران string طور موٽي
* **هٽايو ويو:** Standalone Domain Management admin page — هاڻي core domain pages ذريعي سنڀاليو وڃي ٿو

Version 1.0.0 - 2025-09-28 تي جاري ڪيو ويو

**Ultimate Multisite v2 لاءِ وڏي نئين سر لکائي**

* **نئون:** جديد PHP 7.4+ architecture سان مڪمل نئين سر لکائي
* **نئون:** Ultimate Multisite v2 checkout system سان بي رڪاوٽ integration
* **نئون:** لچڪدار pricing options سان ڊومين product management
* **نئون:** ڪيترن ئي ڊومين provider support architecture
* **نئون:** Auto-renewal ۽ subscription integration
* **نئون:** گراهڪ ڊومين management interface
* **نئون:** Admin ڊومين monitoring ۽ logs
* **نئون:** ڊومين products لاءِ Coupon support
* **نئون:** جامع settings management
* **نئون:** developer-friendly extensible codebase
* **بهتر:** مڪمل feature support سان OpenSRS provider کي update ڪيو
* **بهتر:** Ultimate Multisite v2 سان هم آهنگ جديد UI
* **درست:** سڀ deprecated v1 code v2 standards تي update ڪيو ويو
* **هٽايو ويو:** Legacy v1 compatibility (breaking change)

### اڳوڻا نسخا (v1 Legacy) {#previous-versions-v1-legacy}

### Version 0.0.3 - 20/08/2019 {#version-003---20082019}

* درست: Groundhogg CRM سان عدم مطابقت
* نوٽ: هي آخري v1-compatible release هئي

### Version 0.0.2 - 07/12/2018 {#version-002---07122018}

* درست: License Key field هٽايو ويو
* درست: feature plugin فعال هئڻ وقت Plan tabs غائب هئا
* بهتر: registration field تي skip button شامل ڪيو ويو

### Version 0.0.1 - شروعاتي رليز {#version-001---initial-release}

* WP Ultimo v1 لاءِ بنيادي OpenSRS integration
* سادي ڊومين search ۽ registration
* Plan-based ڊومين permissions
