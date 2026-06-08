---
title: ডোমেইন বিক্ৰেতাৰ পৰিৱৰ্তনৰ তালিকা
sidebar_position: 99
_i18n_hash: bc3ab4e3f0076e80e8c38ed313f4430d
---
# ডোমেইন বিক্ৰেতাৰ Changelog

Version 1.1.0 - Released on 2026-05-08
- নতুন: ResellerClub, Enom, আৰু OpenSRS ৰেজিস্ট্ৰাৰৰ বাবে DNS record সৃষ্টি (add_dns_record) যোগ কৰা হ'ল
- সংশোধন: ডিফল্ট DNS Records parser এতিয়া {DOMAIN} আৰু {SITE_URL} টোকেনক সহন কৰে
- সংশোধন: site_url লগত সংঘাত এৰিবলৈ Domain selection checkout field slugs namespaced কৰা হ'ল

Version 1.0.8 - Released on 2026-05-07
- সংশোধন: ResellerClub ডোমেইন মূল্য এতিয়া সঠিক API endpoint ካৰ পৰা লাইভ cost price লৈ আহে

Version 1.0.7 - Released on 2026-05-06
* সংশোধন: ResellerClub test_connection এ প্ৰয়োজনীয় tlds parameter (#224) পঠিয়ায়

Version 1.0.6 - Released on 2026-05-05
* সংশোধন: ResellerClub ডোমেইন ৰেজিস্ট্ৰেচন এতিয়া উন্নত API response handling আৰু registry-driven provider routing লগত সঠিকভাৱে কাম কৰে
* সংশোধন: Register Domain admin page-ৰ UX উন্নত কৰা হ'ল
* অপৰিৱৰত: CyberPanel registrar ইন্টিগ্ৰেচন

Version 1.0.5 - Released on 2026-04-02
* নতুন: ডোমেইন ৰেজিস্ট্ৰেচন আৰু ব্যৱস্থাপনাৰ বাবে GoDaddy registrar ইন্টিগ্ৰেচন
* নতুন: NameSilo registrar ইন্টিগ্ৰেচন
* নতুন: ResellerClub registrar ইন্টিগ্ৰেচন
* নতুন: ডোমেইন ক্ৰয় আৰু ম্যাপ কৰাৰ সময়ত স্বয়ংক্রিয়ভাৱে SES পঠন কৰা ডোমেইন ভেরিফাই কৰা হয়
* সংশোধন: test environment ত redefinition হোৱাৰ পৰা Guard plugin constants ৰক্ষা কৰা হ'ল
* সংশোধন: install-wp-tests.sh ত MySQL flags word-split কৰে

Version 1.0.4 - Released on 2026-03-14
* **সংশোধন:** কিছুমান অনুপস্থিত css assets
* **সংশোধন:** উপলব্ধ tlds লগত সম্পৰ্কীয় ভুল

Version 1.0.3 - Released on 2026-03-09
* **সংশোধন:** checkout shortcode লগত legacy signup template ব্যৱহাৰ কৰোঁতে Vue reactive property errors (domain_option, selected_domain, domain_provider) সমাধান কৰা হ'ল
* **সংশোধন:** ডোমেইন selection checkout field ত সাবডোমেইন ইনপুট ফিল্ডৰ ভুল বিন্যাস আৰু অতি ডাঙৰ text সমাধান কৰা হ'ল
* **সংশোধন:** ডোমেইন selection field উপস্থিত থাকিলে "Your URL will be" preview block লুকুৱাই থোৱা হ'ল

Version 1.0.2 - Released on 2026-03-01
* **উন্নত:** settings page ৰ পৰা global markup settings আঁতৰাই দিয়া হ'ল — এতিয়া মূল্য কেৱল প্ৰডাক্ট-ভিত্তিক।
* **উন্নত:** settings page ত quick navigation কৰিবলৈ "Manage Domain Products" link যোগ কৰা হ'ল
* **উন্নত:** ডোমেইন প্ৰডাক্ট settings (catch-all বনাম TLD-specific, markup types, introductory pricing) ৰ বাবে অধিক স্পষ্ট ফিল্ড বিৱৰণ আৰু tooltips।
* **উন্নত:** settings page ত সৰু সৰু স্থানত উন্নত বিৱৰণ (search TLDs, renewals, DNS, notifications)

Version 1.0.1 - Released on 2026-02-27

* **নতুন:** bulk pricing management কৰিবলৈ TLD import tool
* **নতুন:** ডোমেইন প্ৰডাক্টৰ বাবে introductory pricing সমৰ্থন
* **নতুন:** Cypress লগত E2E test suite
* **নতুন:** ডোমেইন lifecycle notifications-ৰ বাবে Email templates
* **নতুন:** admin domain registration modal ত Registrant address fields, settings ካৰ পৰা pre-populated।
* **নতুন:** add, edit, আৰু delete record সমৰ্থন লগত Customer DNS management interface
* **নতুন:** স্বয়ংক্রিয় ডোমেইন ম্যাপ কৰাৰ লগত "Bring your own domain" checkout বিকল্প
* **নতুন:** checkout সময়ত ডোমেইন নামৰ পৰা site URL স্বয়ংক্রিয়ভাৱে সৃষ্টি কৰা হয়
* **নতুন:** settings ত default nameserver আৰু DNS record configuration
* **নতুন:** core domain edit page ত ডোমেইন ৰেজিস্ট্ৰেচন বিৱৰণ আৰু DNS management
* **নতুন:** Setup wizard এ sensible defaults লগত default domain product স্বয়ংক্রিয়ভাৱে সৃষ্টি কৰে
* **নতুন:** সকলো configure কৰা provider ত cron লগত দৈনিক স্বয়ংক্রিয় TLD sync
* **নতুন:** প্ৰডাক্ট-ভিত্তিক configuration লগত WHOIS privacy protection (always on, customer choice, বা disabled)
* **নতুন:** মূল্য প্ৰদৰ্শন আৰু dark mode সমৰ্থন লগত WHOIS privacy checkout checkbox
* **নতুন:** ম্যানুৱেল ডোমেইন ৰেজিস্ট্ৰেচনৰ বাবে Register Domain admin page
* **নতুন:** Ultimate Multisite update server লগত স্বয়ংক্রিয় plugin updates
* **নতুন:** product list table ত domain product type filter tab আৰু purple badge styling
* **নতুন:** ডোমেইন checkout form ত Registrant contact fields (name, address, city, state, postal code, country, phone)
* **নতুন:** registrar API কল কৰাৰ আগতে Registrant field validation লগত স্পষ্ট error messages
* **নতুন:** ডোমেইন ৰেজিস্ট্ৰেচন ইভেন্টৰ বাবে provider-specific log channels (e.g. domain-seller-namecheap.log)
* **নতুন:** মূল ৰেজিস্ট্ৰেচন/signup checkout form ত Registrant contact fields (ডোমেইন ৰেজিস্ট্ৰেচন কৰোঁতে দেখুৱাই হয়)
* **উন্নত:** Domain Search checkout field ক একত্ৰিত Domain Selection field লগত সলনি কৰা হ'ল, যিয়ে subdomain, register, আৰু existing domain tabs সমৰ্থন কৰে
* **উন্নত:** Domain product settings core widget system লগত product edit page ত inline render কৰা হয়
* **উন্নত:** Customer domain info standalone metabox বৰ পৰিৱৰ্তে core domain mapping widget লগত সংযোগ কৰা হয়
* **উন্নত:** TLD import wizard সকলো provider ካৰ পৰা এক-ক্লিক sync লৈ সৰল কৰা হ'ল
* **উন্নত:** Namecheap domain availability-এ অধিক দ্রুত অনুসন্ধানৰ বাবে batch API call ব্যৱহাৰ কৰে
* **উন্নত:** Namecheap pricing API সঠিক parameters আৰু response parsing ব্যৱহাৰ কৰে
* **উন্নত:** TLD একত্ৰিত সঞ্চয়স্থান (single network option) ত কৰা হয়
* **উন্নত:** DNS changes, transfers, আৰু config application-ৰ বাবে Domain activity logging
* **উন্নত:** IANA master list ব্যৱহাৰ কৰি batch validation লগত OpenSRS ৰ বাবে সম্পূৰ্ণ TLD sync
* **উন্নত:** paginated API requests লগত Namecheap ৰ বাবে সম্পূৰ্ণ TLD sync
* **উন্নত:** legacy provider classes ক Integration Registry pattern লগত সলনি কৰা হয়
* **উন্নত:** DNS আৰু transfer configuration লগত Settings panel
* **উন্নত:** ফোন নম্বৰ স্বয়ংক্রিয়ভাৱে +CC.NNN registrar format লৈ সাজু কৰা হয়
* **উন্নত:** ফোন ফিল্ড validation এ submission কৰাৰ আগতে formatting characters আঁতৰাই দিয়ে
* **উন্নত:** Version requirement Ultimate Multisite 2.4.12 লৈ বৃদ্ধি কৰা হয়, আৰু অধিক স্পষ্ট Notice যোগ কৰা হয়
* **উন্নত:** CI workflow এ addon আৰু core plugin দুয়োটাৰ বাবে সঠিক checkout ব্যৱহাৰ কৰে
* **উন্নত:** prepare_registrant_info() checkout-saved user meta ካৰ পৰা পঢ়ে, billing address fallback লগত
* **সংশোধন:** checkout সময়ত non-logged-in user-ৰ বাবে Domain search AJAX ব্যৱহাৰ কৰাত সমস্যা হ'ল
* **সংশোধন:** checkout সময়ত non-logged-in user-ৰ বাবে Domain pricing AJAX ব্যৱহাৰ কৰাত সমস্যা হ'ল
* **সংশোধন:** WP-CLI commands চলি থকা সময়ত Spyc class redeclaration fatal error
* **সংশোধন:** Namecheap sandbox API timeout অতি কম আছিল
* **সংশোধন:** Domain search Select button text green background ত দেখা নাযায়
* **সংশোধন:** contact info নথকাৰ বাবে "RegistrantFirstName is Missing" error লগত ডোমেইন ৰেজিস্ট্ৰেচন কৰাত সমস্যা হ'ল
* **সংশোধন:** checkout সময়ত site অস্তিত্ব নথকাৰ বাবে ডোমেইন record blog_id=0 লগত সৃষ্টি হয়
* **সংশোধন:** Default TLDs setting parsed array হিচাপে নহৈ string হিচাপে দিয়া হয়
* **অপৰিৱৰত:** Standalone Domain Management admin page — এতিয়া core domain pages লগত ব্যৱস্থাপিত হয়

Version 1.0.0 - Released on 2025-09-28

**Ultimate Multisite v2 ৰ বাবে ডাঙৰ পুনৰ্গঠন (Major Rewrite)**

* **নতুন:** আধুনিক PHP 7.4+ architecture লগত সম্পূৰ্ণ পুনৰ্গঠন
* **নতুন:** Ultimate Multisite v2 checkout system লগত নিৰৱচ্ছিন্ন ইন্টিগ্ৰেচন
* **নতুন:** নমনীয় মূল্য বিকল্প লগত ডোমেইন প্ৰডাক্ট ব্যৱস্থাপনা
* **নতুন:** বহুতো ডোমেইন প্ৰোভাইডেৰ সমৰ্থনৰ architecture
* **নতুন:** স্বয়ংক্রিয় পুনৰ-নিৰীক্ষণ (Auto-renewal) আৰু subscription ইন্টিগ্ৰেচন
* **নতুন:** Customer domain management interface
* **নতুন:** Admin domain monitoring আৰু logs
* **নতুন:** ডোমেইন প্ৰডাক্টৰ বাবে Coupon সমৰ্থন
* **নতুন:** বিস্তৃত settings management
* **নতুন:** Developer-friendly extensible codebase
* **উন্নত:** Ultimate Multisite v2 লগত সম্পূৰ্ণ বৈশিষ্ট্য সমৰ্থন লগত OpenSRS provider আপডেট কৰা হ'ল
* **উন্নত:** Ultimate Multisite v2 লগত সামঞ্জস্যপূৰ্ণ আধুনিক UI
* **সংশোধন:** সকলো deprecated v1 code ক v2 standards লৈ আপডেট কৰা হ'ল
* **অপৰিৱৰত:** Legacy v1 compatibility (breaking change)

### Previous Versions (v1 Legacy)

### Version 0.0.3 - 20/08/2019

* সংশোধন: Groundhogg CRM লগত অসামঞ্জস্যতা
* টোকা: এইটো আছিল শেষ v1-compatible release

### Version 0.0.2 - 07/12/2018

* সংশোধন: License Key field আঁতৰাই দিয়া হ'ল
* সংশোধন: feature plugin active থকা সময়ত Plan tabs হেৰুওৱা হ'ল
* উন্নত: registration field ত skip button যোগ কৰা হ'ল

### Version 0.0.1 - Initial Release

* WP Ultimo v1 লৈ Basic OpenSRS ইন্টিগ্ৰেচন
* সৰল ডোমেইন অনুসন্ধান আৰু ৰেজিস্ট্ৰেচন
* Plan-based domain permissions
