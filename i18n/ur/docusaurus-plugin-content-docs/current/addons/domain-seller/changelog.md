---
title: ڈومین سیلر چینج لاگ
sidebar_position: 99
_i18n_hash: bc3ab4e3f0076e80e8c38ed313f4430d
---
# Domain Seller تبدیلیوں کا ریکارڈ (Changelog)

Version 1.1.0 - ریلیز ہونے کی تاریخ: 2026-05-08
- نیا: ResellerClub, Enom, اور OpenSRS registrars کے لیے DNS ریکارڈ بنانے کی سہولت (add_dns_record) شامل کی گئی ہے۔
- ٹھیک کیا: Default DNS Records parser اب {DOMAIN} اور {SITE_URL} ٹوکنز کو برداشت کرتا ہے۔
- ٹھیک کیا: Domain selection checkout field کے slugs کو نام-سپیس کیا گیا ہے تاکہ site_url کے ساتھ ٹکراؤ (collision) سے بچا جا سکے۔

Version 1.0.8 - ریلیز ہونے کی تاریخ: 2026-05-07
- ٹھیک کیا: ResellerClub domain کی قیمتیں اب صحیح API endpoint سے لائیو لاگت (live cost prices) حاصل کرتی ہیں۔

Version 1.0.7 - ریلیز ہونے کی تاریخ: 2026-05-06
* ٹھیک کیا: ResellerClub test_connection اب مطلوبہ tlds پیرامیٹر (#224) بھیجتا ہے۔

Version 1.0.6 - ریلیز ہونے کی تاریخ: 2026-05-05
* ٹھیک کیا: ResellerClub domain کی رجسٹریشن اب بہتر API response handling اور registry-driven provider routing کے ساتھ صحیح طریقے سے کام کرتی ہے۔
* ٹھیک کیا: Register Domain ایڈمن پیج کے استعمال کے تجربے (UX) میں بہتری۔
* ہٹایا گیا: CyberPanel registrar کا انضمام (integration)۔

Version 1.0.5 - ریلیز ہونے کی تاریخ: 2026-04-02
* نیا: domain registration اور management کے لیے GoDaddy registrar کا انضمام۔
* نیا: NameSilo registrar کا انضمام۔
* نیا: ResellerClub registrar کا انضمام۔
* نیا: domain خریدنے اور map کرنے پر SES بھیجنے والے domain کی خودکار تصدیق (Auto-verify)۔
* ٹھیک کیا: ٹیسٹ ماحول میں Guard plugin constants کو دوبارہ تعریف (redefinition) ہونے سے بچایا گیا۔
* ٹھیک کیا: MySQL flags کو install-wp-tests.sh میں صحیح طریقے سے word-split کیا گیا۔

Version 1.0.4 - ریلیز ہونے کی تاریخ: 2026-03-14
* **ٹھیک کیا:** کچھ گمشدہ css assets۔
* **ٹھیک کیا:** دستیاب tlds سے متعلق غلطی (Error)۔

Version 1.0.3 - ریلیز ہونے کی تاریخ: 2026-03-09
* **ٹھیک کیا:** جب checkout shortcode کے ساتھ legacy signup template استعمال کیا جاتا ہے تو Vue reactive property errors (domain_option, selected_domain, domain_provider)۔
* **ٹھیک کیا:** domain selection checkout field میں subdomain input field کی بے ترتیب جگہ بندی اور بہت بڑا ٹیکسٹ۔
* **ٹھیک کیا:** جب domain selection field موجود ہوتا ہے تو "Your URL will be" پریویو بلاک کو چھپا دیا گیا ہے۔

Version 1.0.2 - ریلیز ہونے کی تاریخ: 2026-03-01
* **بہتر کیا:** سیٹنگز پیج سے گلوبل مارک اپ سیٹنگز ہٹا دی گئی ہیں — اب قیمتیں صرف ہر پروڈکٹ کے لحاظ سے ہیں۔
* **بہتر کیا:** سیٹنگز پیج پر فوری نیویگیشن کے لیے "Manage Domain Products" لنک شامل کیا گیا ہے۔
* **بہتر کیا:** domain product settings کے لیے واضح فیلڈ تفصیلات اور ٹولٹپس (catch-all vs TLD-specific, markup types, introductory pricing)۔
* **بہتر کیا:** سیٹنگز پیج پر ہر جگہ بہتر تفصیلات (search TLDs, renewals, DNS, notifications)۔

Version 1.0.1 - ریلیز ہونے کی تاریخ: 2026-02-27

* **نیا:** bulk pricing management کے لیے TLD import ٹول۔
* **نیا:** domain products کے لیے ابتدائی قیمتوں (Introductory pricing) کی سہولت۔
* **نیا:** Cypress کے ساتھ E2E ٹیسٹ سوٹ۔
* **نیا:** domain lifecycle notifications کے لیے ای میل ٹیمپلیٹس۔
* **نیا:** ایڈمن domain registration modal پر Registrant address fields، جو سیٹنگز سے پہلے سے بھرے ہوئے (pre-populated) آتے ہیں۔
* **نیا:** add, edit, اور delete ریکارڈ سپورٹ کے ساتھ Customer DNS management interface۔
* **نیا:** خودکار domain mapping کے ساتھ "Bring your own domain" checkout آپشن۔
* **نیا:** checkout کے دوران domain name سے site URL خودکار طور پر بنانا۔
* **نیا:** سیٹنگز میں default nameserver اور DNS record کی ترتیب۔
* **نیا:** core domain edit page پر domain registration details اور DNS management۔
* **نیا:** Setup wizard خودکار طور پر مناسب default کے ساتھ ایک default domain product بناتا ہے۔
* **نیا:** تمام configure کردہ providers پر cron کے ذریعے روزانہ خودکار TLD sync۔
* **نیا:** per-product configuration کے ساتھ WHOIS privacy protection (always on, customer choice, یا disabled)۔
* **نیا:** WHOIS privacy checkout checkbox جس میں قیمت کی نمائش اور dark mode سپورٹ ہے۔
* **نیا:** دستی domain registration کے لیے Register Domain ایڈمن پیج۔
* **نیا:** Ultimate Multisite update server کے ذریعے خودکار plugin updates۔
* **نیا:** product list table میں domain product type filter tab جس میں purple badge styling ہے۔
* **نیا:** domain checkout form پر Registrant contact fields (name, address, city, state, postal code, country, phone)۔
* **نیا:** registrar API کو کال کرنے سے پہلے Registrant field validation کے ساتھ واضح error messages۔
* **نیا:** domain registration events کے لیے provider-specific log channels (جیسے domain-seller-namecheap.log)۔
* **نیا:** main registration/signup checkout form پر Registrant contact fields (جب domain رجسٹر کیا جا رہا ہو تو دکھائے جاتے ہیں)۔
* **بہتر کیا:** Domain Search checkout field کو unified Domain Selection field سے تبدیل کیا گیا ہے جو subdomain, register, اور existing domain tabs کو سپورٹ کرتا ہے۔
* **بہتر کیا:** Domain product settings کو product edit page پر core widget system کے ذریعے inline render کیا جاتا ہے۔
* **بہتر کیا:** Customer domain info کو standalone metabox کے بجائے core domain mapping widget میں hook کیا گیا ہے۔
* **بہتر کیا:** TLD import wizard کو تمام providers سے ایک کلک کے ساتھ sync کرنے کے لیے آسان بنایا گیا ہے۔
* **بہتر کیا:** Namecheap domain availability کے لیے تیز تلاش کے لیے batch API call استعمال ہوتا ہے۔
* **بہتر کیا:** Namecheap pricing API صحیح پیرامیٹرز اور response parsing استعمال کرتا ہے۔
* **بہتر کیا:** TLD کی مرکزی اسٹوریج کو ایک ہی network option میں رکھا گیا ہے۔
* **بہتر کیا:** DNS changes, transfers, اور config application کے لیے Domain activity logging۔
* **بہتر کیا:** OpenSRS کے لیے IANA master list کے ساتھ full TLD sync اور batch validation۔
* **بہتر کیا:** Namecheap کے لیے paginated API requests کے ساتھ full TLD sync۔
* **بہتر کیا:** legacy provider classes کو Integration Registry pattern سے تبدیل کیا گیا ہے۔
* **بہتر کیا:** DNS اور transfer configuration کے ساتھ سیٹنگز پینل۔
* **بہتر کیا:** فون نمبرز کو خودکار طور پر +CC.NNN registrar format میں فارمیٹ کیا جاتا ہے۔
* **بہتر کیا:** فون فیلڈ validation جمع کرانے سے پہلے formatting characters کو ہٹا دیتا ہے۔
* **بہتر کیا:** Version requirement کو Ultimate Multisite 2.4.12 تک بڑھایا گیا ہے جس کے ساتھ واضح نوٹس ہے۔
* **بہتر کیا:** CI workflow addon اور core plugin دونوں کے لیے صحیح checkout استعمال کرتا ہے۔
* **بہتر کیا:** prepare_registrant_info() checkout-saved user meta سے پڑھتا ہے جس میں billing address fallback ہوتا ہے۔
* **ٹھیک کیا:** checkout کے دوران non-logged-in صارفین کے لیے Domain search AJAX ناکام ہو رہا تھا۔
* **ٹھیک کیا:** checkout کے دوران non-logged-in صارفین کے لیے Domain pricing AJAX ناکام ہو رہا تھا۔
* **ٹھیک کیا:** WP-CLI کمانڈز چلانے پر Spyc class redeclaration fatal error۔
* **ٹھیک کیا:** Namecheap sandbox API timeout بہت کم تھا۔
* **ٹھیک کیا:** Domain search Select button کا ٹیکسٹ green background پر نظر نہیں آ رہا تھا۔
* **ٹھیک کیا:** "RegistrantFirstName is Missing" غلطی کی وجہ سے domain registration ناکام ہو رہا تھا کیونکہ رابطہ کی معلومات موجود نہیں تھیں۔
* **ٹھیک کیا:** جب site checkout کے وقت موجود نہیں تھی تو domain record blog_id=0 کے ساتھ بن رہا تھا۔
* **ٹھیک کیا:** Default TLDs setting کو parsed array کے بجائے string کے طور پر واپس کیا جا رہا تھا۔
* **ہٹایا گیا:** Standalone Domain Management admin page — اب core domain pages کے ذریعے ہینڈل کیا جاتا ہے۔

Version 1.0.0 - ریلیز ہونے کی تاریخ: 2025-09-28

**Ultimate Multisite v2 کے لیے بڑا ری‌رائٹ**

* **نیا:** جدید PHP 7.4+ architecture کے ساتھ مکمل ری‌رائٹ۔
* **نیا:** Ultimate Multisite v2 checkout system کے ساتھ ہموار انضمام۔
* **نیا:** لچکدار قیمتوں کے آپشنز کے ساتھ domain product management۔
* **نیا:** متعدد domain provider سپورٹ architecture۔
* **نیا:** خودکار تجدید (Auto-renewal) اور subscription انضمام۔
* **نیا:** Customer domain management interface۔
* **نیا:** ایڈمن domain monitoring اور logs۔
* **نیا:** domain products کے لیے Coupon سپورٹ۔
* **نیا:** جامع سیٹنگز مینجمنٹ۔
* **نیا:** Developer-friendly extensible codebase۔
* **بہتر کیا:** OpenSRS provider کو مکمل فیچر سپورٹ کے ساتھ اپ ڈیٹ کیا گیا۔
* **بہتر کیا:** Ultimate Multisite v2 کے مطابق جدید UI۔
* **ٹھیک کیا:** تمام deprecated v1 کوڈ کو v2 معیارات میں اپ ڈیٹ کیا گیا۔
* **ہٹایا گیا:** Legacy v1 compatibility (breaking change)۔

### پچھلے ورژن (v1 Legacy)

### Version 0.0.3 - 20/08/2019

* ٹھیک کیا: Groundhogg CRM کے ساتھ عدم مطابقت (Incompatibility)۔
* نوٹ: یہ آخری v1-compatible ریلیز تھی۔

### Version 0.0.2 - 07/12/2018

* ٹھیک کیا: License Key فیلڈ ہٹا دیا گیا۔
* ٹھیک کیا: Plan tabs غائب تھے جب فیچر plugin فعال تھا۔
* بہتر کیا: رجسٹریشن فیلڈ پر ایک skip بٹن شامل کیا گیا۔

### Version 0.0.1 - ابتدائی ریلیز

* WP Ultimo v1 کے لیے بنیادی OpenSRS انضمام۔
* سادہ domain search اور رجسٹریشن۔
* Plan پر مبنی domain permissions۔
