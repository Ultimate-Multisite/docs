---
title: ডোমেইন সেলার পরিবর্তন লগ
sidebar_position: 99
_i18n_hash: bc3ab4e3f0076e80e8c38ed313f4430d
---
# Domain Seller Changelog

Version 1.1.0 - Released on 2026-05-08
- New: ResellerClub, Enom, এবং OpenSRS এই রেজিষ্ট্রারগুলোর জন্য DNS record তৈরি করার সুবিধা (add_dns_record) যোগ করা হয়েছে।
- Fix: ডিফল্ট DNS Records parser এখন {DOMAIN} এবং {SITE_URL} টোকেনগুলো সহ্য করতে পারে।
- Fix: site_url-এর সাথে সংঘর্ষ এড়াতে Domain selection checkout field-এর slug-এর নাম পরিবর্তন করা হয়েছে।

Version 1.0.8 - Released on 2026-05-07
- Fix: ResellerClub-এর ডোমেইন মূল্য এখন সঠিক API endpoint থেকে লাইভ খরচ মূল্য নিয়ে আসে।

Version 1.0.7 - Released on 2026-05-06
* Fix: ResellerClub test_connection প্রয়োজনীয় tlds প্যারামিটার (#224) পাঠায়।

Version 1.0.6 - Released on 2026-05-05
* Fix: ResellerClub ডোমেইন রেজিস্ট্রেশন এখন উন্নত API response handling এবং registry-driven provider routing-এর সাথে সঠিকভাবে কাজ করে।
* Fix: Register Domain অ্যাডমিন পেজের ব্যবহারকারীর অভিজ্ঞতা (UX) উন্নত করা হয়েছে।
* Removed: CyberPanel registrar integration সরিয়ে ফেলা হয়েছে।

Version 1.0.5 - Released on 2026-04-02
* New: ডোমেইন রেজিস্ট্রেশন এবং পরিচালনার জন্য GoDaddy registrar integration যোগ করা হয়েছে।
* New: NameSilo registrar integration যোগ করা হয়েছে।
* New: ResellerClub registrar integration যোগ করা হয়েছে।
* New: ডোমেইন কেনার সময় এবং ম্যাপ করার সময় স্বয়ংক্রিয়ভাবে SES পাঠানোর ডোমেইন যাচাই করা হয়।
* Fix: test environment-এ redefinition থেকে Guard plugin constants রক্ষা করা হয়েছে।
* Fix: install-wp-tests.sh-এ MySQL flags word-split সঠিকভাবে হয়।

Version 1.0.4 - Released on 2026-03-14
* **Fix:** কিছু অনুপস্থিত css asset ঠিক করা হয়েছে।
* **Fix:** অনুপলব্ধ tlds সম্পর্কিত ত্রুটি ঠিক করা হয়েছে।

Version 1.0.3 - Released on 2026-03-09
* **Fix:** checkout shortcode সহ legacy signup template ব্যবহার করার সময় Vue reactive property errors (domain_option, selected_domain, domain_provider) ঠিক করা হয়েছে।
* **Fix:** ডোমেইন selection checkout field-এ সাবডোমেইন ইনপুট ফিল্ডের ভুল অ্যালাইনমেন্ট এবং অতিরিক্ত বড় টেক্সট ঠিক করা হয়েছে।
* **Fix:** ডোমেইন selection field উপস্থিত থাকলে "Your URL will be" প্রিভিউ ব্লকটি লুকিয়ে রাখা হয়েছে।

Version 1.0.2 - Released on 2026-03-01
* **Improved:** সেটিংস পেজ থেকে গ্লোবাল মার্কআপ সেটিংস সরিয়ে ফেলা হয়েছে — এখন মূল্য শুধুমাত্র প্রতি-পণ্যের ভিত্তিতে নির্ধারিত হয়।
* **Improved:** দ্রুত নেভিগেশনের জন্য সেটিংস পেজে "Manage Domain Products" লিঙ্ক যোগ করা হয়েছে।
* **Improved:** ডোমেইন প্রোডাক্ট সেটিংসের জন্য ফিল্ড বর্ণনা এবং টুলটিপ আরও স্পষ্ট করা হয়েছে (catch-all বনাম TLD-specific, markup types, introductory pricing)।
* **Improved:** সেটিংস পেজ জুড়ে আরও ভালো বর্ণনা দেওয়া হয়েছে (search TLDs, renewals, DNS, notifications)।

Version 1.0.1 - Released on 2026-02-27

* **New:** বাল্ক মূল্য ব্যবস্থাপনার জন্য TLD import tool।
* **New:** ডোমেইন প্রোডাক্টের জন্য Introductory pricing সাপোর্ট।
* **New:** Cypress সহ E2E test suite।
* **New:** ডোমেইন লাইফসাইকেল নোটিফিকেশনের জন্য Email templates।
* **New:** অ্যাডমিন ডোমেইন রেজিস্ট্রেশন মডাল-এ Registrant address fields, যা সেটিংস থেকে pre-populate হয়।
* **New:** add, edit, এবং delete record সাপোর্ট সহ Customer DNS management interface।
* **New:** স্বয়ংক্রিয় ডোমেইন ম্যাপিং সহ "Bring your own domain" checkout অপশন।
* **New:** checkout করার সময় ডোমেইন নাম থেকে স্বয়ংক্রিয়ভাবে site URL তৈরি করা হয়।
* **New:** সেটিংস-এ ডিফল্ট nameserver এবং DNS record কনফিগারেশন।
* **New:** core domain edit page-এ ডোমেইন রেজিস্ট্রেশন বিবরণ এবং DNS ব্যবস্থাপনা।
* **New:** সেটআপ উইজার্ড স্বয়ংক্রিয়ভাবে একটি ডিফল্ট ডোমেইন প্রোডাক্ট তৈরি করে, যা যুক্তিসঙ্গত ডিফল্ট মান দিয়ে থাকে।
* **New:** সমস্ত কনফিগার করা প্রোভাইডার জুড়ে cron এর মাধ্যমে দৈনিক স্বয়ংক্রিয় TLD sync।
* **New:** প্রতি-পণ্যের কনফিগারেশন সহ WHOIS privacy protection (always on, customer choice, বা disabled)।
* **New:** মূল্য প্রদর্শন এবং dark mode সাপোর্ট সহ WHOIS privacy checkout checkbox।
* **New:** ম্যানুয়াল ডোমেইন রেজিস্ট্রেশনের জন্য Register Domain অ্যাডমিন পেজ।
* **New:** Ultimate Multisite update server এর মাধ্যমে স্বয়ংক্রিয় plugin আপডেট।
* **New:** product list table-এ Domain product type filter tab, যা purple badge styling সহ থাকে।
* **New:** ডোমেইন checkout ফর্মের উপর Registrant contact fields (name, address, city, state, postal code, country, phone)।
* **New:** registrar API কল করার আগে Registrant field validation এবং স্পষ্ট error message।
* **New:** ডোমেইন রেজিস্ট্রেশন ইভেন্টের জন্য প্রোভাইডার-নির্দিষ্ট log channels (যেমন: domain-seller-namecheap.log)।
* **New:** প্রধান রেজিস্ট্রেশন/signup checkout ফর্মের উপর Registrant contact fields (ডোমেইন রেজিস্টার করার সময় দেখানো হয়)।
* **Improved:** Domain Search checkout field কে একটি একীভূত Domain Selection field দিয়ে প্রতিস্থাপন করা হয়েছে, যা subdomain, register, এবং existing domain ট্যাব সাপোর্ট করে।
* **Improved:** Domain product settings এখন core widget system এর মাধ্যমে product edit page-এ inline রেন্ডার হয়।
* **Improved:** Customer domain info এখন standalone metabox এর পরিবর্তে core domain mapping widget-এ যুক্ত হয়।
* **Improved:** TLD import wizard কে সমস্ত প্রোভাইডার থেকে এক-ক্লিক sync-এ সরল করা হয়েছে।
* **Improved:** Namecheap domain availability এখন দ্রুত অনুসন্ধানের জন্য batch API call ব্যবহার করে।
* **Improved:** Namecheap pricing API সঠিক প্যারামিটার এবং response parsing ব্যবহার করে।
* **Improved:** TLD স্টোরেজ একটি একক network option-এ কেন্দ্রীভূত করা হয়েছে।
* **Improved:** DNS পরিবর্তন, ট্রান্সফার এবং কনফিগারেশন প্রয়োগের জন্য Domain activity logging।
* **Improved:** IANA master list ব্যবহার করে OpenSRS-এর জন্য সম্পূর্ণ TLD sync এবং batch validation।
* **Improved:** paginated API requests সহ Namecheap-এর জন্য সম্পূর্ণ TLD sync।
* **Improved:** legacy provider classes কে Integration Registry pattern দিয়ে প্রতিস্থাপন করা হয়েছে।
* **Improved:** DNS এবং transfer কনফিগারেশন সহ সেটিংস প্যানেল।
* **Improved:** ফোন নম্বরগুলো স্বয়ংক্রিয়ভাবে +CC.NNN registrar ফরম্যাটে সাজানো হয়।
* **Improved:** ফোন ফিল্ড ভ্যালিডেশন সাবমিশনের আগে formatting characters সরিয়ে দেয়।
* **Improved:** Version requirement কে Ultimate Multisite 2.4.12 এ বাড়ানো হয়েছে এবং আরও স্পষ্ট নোটিশ দেওয়া হয়েছে।
* **Improved:** CI workflow এখন addon এবং core plugin উভয়ের জন্য সঠিক checkout ব্যবহার করে।
* **Improved:** prepare_registrant_info() checkout-saved user meta থেকে পড়ে এবং billing address fallback ব্যবহার করে।
* **Fixed:** checkout করার সময় non-logged-in ব্যবহারকারীদের জন্য Domain search AJAX ব্যর্থ হচ্ছিল।
* **Fixed:** checkout করার সময় non-logged-in ব্যবহারকারীদের জন্য Domain pricing AJAX ব্যর্থ হচ্ছিল।
* **Fixed:** WP-CLI কমান্ড চালানোর সময় Spyc class redeclaration fatal error ঠিক করা হয়েছে।
* **Fixed:** Namecheap sandbox API timeout খুব কম ছিল।
* **Fixed:** সবুজ ব্যাকগ্রাউন্ডে Domain search Select বাটন টেক্সট দেখা যাচ্ছিল না।
* **Fixed:** প্রয়োজনীয় কন্টাক্ট তথ্য অনুপস্থিত থাকার কারণে "RegistrantFirstName is Missing" ত্রুটির সাথে ডোমেইন রেজিস্ট্রেশন ব্যর্থ হচ্ছিল।
* **Fixed:** checkout করার সময় সাইট বিদ্যমান না থাকলে ডোমেইন record blog_id=0 দিয়ে তৈরি হচ্ছিল।
* **Fixed:** ডিফল্ট TLDs সেটিংস একটি parsed array হিসাবে না থেকে string হিসাবে ফেরত আসছিল।
* **Removed:** Standalone Domain Management অ্যাডমিন পেজ — এখন core domain pages এর মাধ্যমে হ্যান্ডেল করা হয়।

Version 1.0.0 - Released on 2025-09-28

**Ultimate Multisite v2 এর জন্য বড় পরিবর্তন (Major Rewrite)**

* **New:** আধুনিক PHP 7.4+ আর্কিটেকচার সহ সম্পূর্ণ নতুন করে লেখা হয়েছে।
* **New:** Ultimate Multisite v2 checkout সিস্টেমের সাথে নির্বিঘ্ন ইন্টিগ্রেশন।
* **New:** নমনীয় মূল্য বিকল্প সহ ডোমেইন প্রোডাক্ট ব্যবস্থাপনা।
* **New:** একাধিক ডোমেইন প্রোভাইডার সাপোর্ট আর্কিটেকচার।
* **New:** স্বয়ংক্রিয় রিনিউয়াল এবং সাবস্ক্রিপশন ইন্টিগ্রেশন।
* **New:** কাস্টমার ডোমেইন ম্যানেজমেন্ট ইন্টারফেস।
* **New:** অ্যাডমিন ডোমেইন মনিটরিং এবং লগ।
* **New:** ডোমেইন প্রোডাক্টের জন্য Coupon সাপোর্ট।
* **New:** ব্যাপক সেটিংস ব্যবস্থাপনা।
* **New:** ডেভেলপার-বান্ধব এক্সটেনসিবল কোডবেস।
* **Improved:** সম্পূর্ণ ফিচার সাপোর্ট সহ OpenSRS প্রোভাইডার আপডেট করা হয়েছে।
* **Improved:** Ultimate Multisite v2 এর সাথে সামঞ্জস্যপূর্ণ আধুনিক UI।
* **Fixed:** সমস্ত Deprecated v1 কোড v2 স্ট্যান্ডার্ডে আপডেট করা হয়েছে।
* **Removed:** Legacy v1 compatibility (breaking change)।

### Previous Versions (v1 Legacy)

### Version 0.0.3 - 20/08/2019

* Fixed: Groundhogg CRM এর সাথে অসামঞ্জস্যতা ঠিক করা হয়েছে।
* Note: এটি ছিল শেষ v1-compatible রিলিজ।

### Version 0.0.2 - 07/12/2018

* Fixed: License Key ফিল্ড সরানো হয়েছে।
* Fixed: ফিচার plugin সক্রিয় থাকলে Plan ট্যাবগুলো অনুপস্থিত ছিল।
* Improved: রেজিস্ট্রেশন ফিল্ডে একটি skip বাটন যোগ করা হয়েছে।

### Version 0.0.1 - Initial Release

* WP Ultimo v1 এর জন্য বেসিক OpenSRS ইন্টিগ্রেশন।
* সাধারণ ডোমেইন অনুসন্ধান এবং রেজিস্ট্রেশন।
* Plan-ভিত্তিক ডোমেইন অনুমতি।
