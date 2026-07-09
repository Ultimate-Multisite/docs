---
title: ডমেইন বিক্ৰেতাৰ পৰিবৰ্তনলগ
sidebar_position: 99
_i18n_hash: 6b9be73c1503d8df8a806bb02b241873
---
# Domain Seller পৰিৱৰ্তন-তালিকা

সংস্কৰণ 1.3.0 - 2026-06-02 তাৰিখে মুকলি কৰা হৈছে
- নতুন: HostAfrica ৰিছেলাৰ বেলেঞ্চ অত্যন্ত কম হ'লে network-admin সতৰ্কবাণী যোগ কৰা হৈছে
- নতুন: নতুনকৈ পঞ্জীয়ন কৰা ড'মেইনসমূহ network site-লৈ স্বয়ংক্ৰিয় মেপিং যোগ কৰা হৈছে
- সংশোধন: নতুন ড'মেইন পঞ্জীয়ন কৰাৰ সময়তহে পঞ্জীয়ক ক্ষেত্ৰৰ প্ৰয়োজনীয়তা প্ৰয়োগ কৰা হৈছে
- সংশোধন: মনিটৰ বেলেঞ্চ জাননীসমূহ খাৰিজ কৰিব পৰা কৰা হৈছে
- সংশোধন: WooCommerce পঞ্জীয়ক বিলিং বিৱৰণ সংৰক্ষিত হৈ থকাটো নিশ্চিত কৰা হৈছে
- সংশোধন: পঞ্জীয়নৰ সময়ত পঞ্জীয়ক যোগাযোগৰ প্ৰয়োজনীয়তা বলৱৎ কৰা হৈছে
- সংশোধন: 0% markup-ৰে ড'মেইন পঞ্জীয়ন সামগ্ৰী সৃষ্টি হোৱাটো প্ৰতিৰোধ কৰা হৈছে
- সংশোধন: checkout session flow জুৰি ড'মেইন নিৰ্বাচন আৰু মূল্য সংৰক্ষণ কৰা হৈছে
- সংশোধন: HostAfrica ড'মেইন মূল্যৰ মুদ্ৰা প্ৰদৰ্শন উন্নত কৰা হৈছে
- সংশোধন: WP-core query-var অমিল প্ৰতিৰোধ কৰিবলৈ checkout form-action আচৰণ উন্নত কৰা হৈছে
- উন্নত: setup guidance-ত HostAfrica ৰিছেলাৰ configuration documentation লিংক কৰা হৈছে

সংস্কৰণ 1.2.0 - 2026-05-25 তাৰিখে মুকলি কৰা হৈছে
- নতুন: checkout, setup wizard, lookup, TLD/pricing, registration, renewal, transfer, nameserver, DNS, EPP code, registrar lock, আৰু ID protection support-সহ ড'মেইন-বিক্ৰী integration হিচাপে HostAfrica যোগ কৰা হৈছে
- নতুন: reseller pricing, registration, renewal, transfer, nameserver, DNS, EPP code, registrar lock, WHOIS privacy, আৰু TLD sync support-সহ ড'মেইন-বিক্ৰী integration হিচাপে Openprovider যোগ কৰা হৈছে
- নতুন: availability checks, registration, nameserver updates, registrar lock, আৰু WHOIS privacy-ৰ বাবে core integration-ৰ shared Hostinger API token ব্যৱহাৰ কৰি ড'মেইন-বিক্ৰী integration হিচাপে Hostinger যোগ কৰা হৈছে
- উন্নত: developer integration guidance-ৰ বাবে ড'মেইন lifecycle action আৰু filter docblocks যোগ কৰা হৈছে
- উন্নত: addon readme-ত plugin compatibility metadata WordPress 7.0-লৈ আপডেট কৰা হৈছে
- উন্নত: upcoming release coordination-ৰ বাবে ব্যৱহৃত planning templates আপডেট কৰা হৈছে

সংস্কৰণ 1.1.0 - 2026-05-08 তাৰিখে মুকলি কৰা হৈছে
- নতুন: ResellerClub, Enom, আৰু OpenSRS registrar-ৰ বাবে DNS record creation (add_dns_record) কাৰ্যকৰী কৰা হৈছে
- সংশোধন: Default DNS Records parser-এ এতিয়া {DOMAIN} আৰু {SITE_URL} token সহ্য কৰে
- সংশোধন: site_url-ৰ সৈতে সংঘৰ্ষ প্ৰতিৰোধ কৰিবলৈ ড'মেইন selection checkout field slugs namespaced কৰা হৈছে

সংস্কৰণ 1.0.8 - 2026-05-07 তাৰিখে মুকলি কৰা হৈছে
- সংশোধন: ResellerClub ড'মেইন মূল্যই এতিয়া সঠিক API endpoint-ৰ পৰা live cost prices আনে

সংস্কৰণ 1.0.7 - 2026-05-06 তাৰিখে মুকলি কৰা হৈছে
* সংশোধন: ResellerClub test_connection-এ প্ৰয়োজনীয় tlds parameter পঠিয়ায় (#224)

সংস্কৰণ 1.0.6 - 2026-05-05 তাৰিখে মুকলি কৰা হৈছে
* সংশোধন: উন্নত API response handling আৰু registry-driven provider routing-ৰ সৈতে ResellerClub ড'মেইন পঞ্জীয়নে এতিয়া সঠিকভাৱে কাম কৰে
* সংশোধন: Register Domain admin page UX উন্নয়ন
* আঁতৰোৱা হৈছে: CyberPanel registrar integration

সংস্কৰণ 1.0.5 - 2026-04-02 তাৰিখে মুকলি কৰা হৈছে
* নতুন: ড'মেইন পঞ্জীয়ন আৰু ব্যৱস্থাপনাৰ বাবে GoDaddy registrar integration
* নতুন: NameSilo registrar integration
* নতুন: ResellerClub registrar integration
* নতুন: ড'মেইন ক্ৰয় আৰু mapping-ত SES sending domain স্বয়ং-verify
* সংশোধন: test environment-ত পুনৰ-সংজ্ঞায়নৰ পৰা plugin constants সুৰক্ষিত কৰা হৈছে
* সংশোধন: install-wp-tests.sh-ত MySQL flags word-split সঠিকভাৱে কৰা হৈছে

সংস্কৰণ 1.0.4 - 2026-03-14 তাৰিখে মুকলি কৰা হৈছে
* **সংশোধন:** কিছুমান অনুপস্থিত css assets
* **সংশোধন:** উপলব্ধ নোহোৱা tlds-ৰ সৈতে সম্পৰ্কিত ত্ৰুটি

সংস্কৰণ 1.0.3 - 2026-03-09 তাৰিখে মুকলি কৰা হৈছে
* **সংশোধন:** checkout shortcode-ৰ সৈতে legacy signup template ব্যৱহাৰ কৰোঁতে Vue reactive property errors (domain_option, selected_domain, domain_provider)
* **সংশোধন:** ড'মেইন selection checkout field-ত subdomain input field-ৰ misalignment আৰু অত্যধিক ডাঙৰ text
* **সংশোধন:** ড'মেইন selection field উপস্থিত থাকিলে "Your URL will be" preview block লুকুৱাওক

সংস্কৰণ 1.0.2 - 2026-03-01 তাৰিখে মুকলি কৰা হৈছে
* **উন্নত:** settings page-ৰ পৰা global markup settings আঁতৰোৱা হৈছে — মূল্য এতিয়া কেৱল প্ৰতি-সামগ্ৰী ভিত্তিক
* **উন্নত:** দ্ৰুত navigation-ৰ বাবে settings page-ত "Manage Domain Products" link যোগ কৰা হৈছে
* **উন্নত:** ড'মেইন product settings-ৰ বাবে অধিক স্পষ্ট field descriptions আৰু tooltips (catch-all বনাম TLD-specific, markup types, introductory pricing)
* **উন্নত:** settings page জুৰি উন্নত descriptions (search TLDs, renewals, DNS, notifications)

সংস্কৰণ 1.0.1 - 2026-02-27 তাৰিখে

* **নতুন:** বাল্ক মূল্য পৰিচালনাৰ বাবে TLD আমদানি সঁজুলি
* **নতুন:** ডোমেইন সামগ্ৰীৰ বাবে পৰিচয়মূলক মূল্য সমৰ্থন
* **নতুন:** Cypress সহ E2E পৰীক্ষা সমষ্টি
* **নতুন:** ডোমেইন জীৱনচক্ৰ জাননীৰ বাবে ইমেইল টেমপ্লেট
* **নতুন:** admin ডোমেইন পঞ্জীয়ন modal-ত Registrant ঠিকনাৰ ক্ষেত্ৰসমূহ, settings-ৰ পৰা আগতীয়াকৈ পূৰণ কৰা
* **নতুন:** ৰেকৰ্ড যোগ, সম্পাদনা, আৰু মচা সমৰ্থনসহ গ্ৰাহক DNS পৰিচালনা interface
* **নতুন:** স্বয়ংক্ৰিয় ডোমেইন mapping সহ "নিজৰ ডোমেইন আনক" checkout বিকল্প
* **নতুন:** checkout-ৰ সময়ত ডোমেইন নামৰ পৰা স্বয়ংক্ৰিয়ভাৱে site URL সৃষ্টি
* **নতুন:** settings-ত default nameserver আৰু DNS ৰেকৰ্ড configuration
* **নতুন:** core ডোমেইন edit page-ত ডোমেইন পঞ্জীয়ন বিৱৰণ আৰু DNS পৰিচালনা
* **নতুন:** Setup wizard-এ যুক্তিযুক্ত default সহ এটা default ডোমেইন সামগ্ৰী স্বয়ংক্ৰিয়ভাৱে সৃষ্টি কৰে
* **নতুন:** সকলো configured provider-ৰ জৰিয়তে cron-ৰ মাধ্যমে দৈনিক স্বয়ংক্ৰিয় TLD sync
* **নতুন:** প্ৰতি-সামগ্ৰী configuration সহ WHOIS privacy protection (সদায় চালু, গ্ৰাহকৰ পছন্দ, বা disabled)
* **নতুন:** মূল্য প্ৰদৰ্শন আৰু dark mode সমৰ্থনসহ WHOIS privacy checkout checkbox
* **নতুন:** হাতেৰে ডোমেইন পঞ্জীয়নৰ বাবে Register Domain admin page
* **নতুন:** Ultimate Multisite update server-ৰ জৰিয়তে স্বয়ংক্ৰিয় plugin updates
* **নতুন:** বেঙুনীয়া badge styling সহ product list table-ত ডোমেইন সামগ্ৰীৰ type filter tab
* **নতুন:** ডোমেইন checkout form-ত Registrant যোগাযোগ ক্ষেত্ৰসমূহ (নাম, ঠিকনা, চহৰ, ৰাজ্য, ডাক কোড, দেশ, ফোন)
* **নতুন:** স্পষ্ট ভুল বাৰ্তাসহ registrar API কল কৰাৰ আগতে Registrant field validation
* **নতুন:** ডোমেইন পঞ্জীয়ন ঘটনাৰ বাবে provider-specific log channels (যেনে domain-seller-namecheap.log)
* **নতুন:** মুখ্য registration/signup checkout form-ত Registrant যোগাযোগ ক্ষেত্ৰসমূহ (ডোমেইন পঞ্জীয়ন কৰোঁতে দেখুওৱা হয়)
* **উন্নত:** Domain Search checkout field সলনি কৰি subdomain, register, আৰু existing domain tab সমৰ্থন কৰা একীভূত Domain Selection field কৰা হৈছে
* **উন্নত:** core widget system-ৰ জৰিয়তে product edit page-ত ডোমেইন product settings inline render হয়
* **উন্নত:** গ্ৰাহক ডোমেইন তথ্য standalone metabox-ৰ সলনি core domain mapping widget-ত hook কৰে
* **উন্নত:** TLD import wizard সকলো provider-ৰ পৰা one-click sync-লৈ সৰল কৰা হৈছে
* **উন্নত:** Namecheap ডোমেইন উপলব্ধতাই দ্ৰুত অনুসন্ধানৰ বাবে batch API call ব্যৱহাৰ কৰে
* **উন্নত:** Namecheap pricing API-য়ে সঠিক parameters আৰু response parsing ব্যৱহাৰ কৰে
* **উন্নত:** এটা একক network option-ত কেন্দ্ৰীভূত TLD storage
* **উন্নত:** DNS পৰিবর্তন, transfer, আৰু config application-ৰ বাবে ডোমেইন activity logging
* **উন্নত:** batch validation সহ IANA master list ব্যৱহাৰ কৰি OpenSRS-ৰ বাবে সম্পূৰ্ণ TLD sync
* **উন্নত:** paginated API requests সহ Namecheap-ৰ বাবে সম্পূৰ্ণ TLD sync
* **উন্নত:** legacy provider classes সলনি কৰি Integration Registry pattern কৰা হৈছে
* **উন্নত:** DNS আৰু transfer configuration সহ settings panel
* **উন্নত:** ফোন নম্বৰ স্বয়ংক্ৰিয়ভাৱে +CC.NNN registrar format-লৈ format কৰা হয়
* **উন্নত:** জমা দিয়াৰ আগতে Phone field validation-এ formatting characters আঁতৰায়
* **উন্নত:** অধিক স্পষ্ট notice সহ version requirement Ultimate Multisite 2.4.12-লৈ বৃদ্ধি কৰা হৈছে
* **উন্নত:** CI workflow-এ addon আৰু core plugin দুয়োটাৰ বাবে proper checkout ব্যৱহাৰ কৰে
* **উন্নত:** prepare_registrant_info() checkout-saved user meta-ৰ পৰা billing address fallback সহ পঢ়ে
* **ঠিক কৰা হৈছে:** checkout-ৰ সময়ত logged-in নোহোৱা ব্যৱহাৰকাৰীৰ বাবে Domain search AJAX বিফল হোৱা
* **ঠিক কৰা হৈছে:** checkout-ৰ সময়ত logged-in নোহোৱা ব্যৱহাৰকাৰীৰ বাবে Domain pricing AJAX বিফল হোৱা
* **ঠিক কৰা হৈছে:** WP-CLI commands চলাওঁতে Spyc class redeclaration fatal error
* **ঠিক কৰা হৈছে:** Namecheap sandbox API timeout অত্যন্ত কম
* **ঠিক কৰা হৈছে:** সবুজ পটভূমিত Domain search Select button text দৃশ্যমান নোহোৱা
* **ঠিক কৰা হৈছে:** যোগাযোগ তথ্য নোহোৱাৰ বাবে "RegistrantFirstName is Missing" ভুলৰ সৈতে ডোমেইন পঞ্জীয়ন বিফল হোৱা
* **ঠিক কৰা হৈছে:** checkout সময়ত site এতিয়াও নথকাৰ সময়ত blog_id=0 সহ Domain record সৃষ্টি হোৱা
* **ঠিক কৰা হৈছে:** Default TLDs setting parsed array-ৰ সলনি string হিচাপে উভতাই দিয়া
* **আঁতৰোৱা হৈছে:** Standalone Domain Management admin page — এতিয়া core domain pages-ৰ জৰিয়তে পৰিচালিত

Version 1.0.0 - 2025-09-28-ত মুকলি কৰা হৈছে

**Ultimate Multisite v2-ৰ বাবে মুখ্য পুনৰলিখন**

* **নতুন:** আধুনিক PHP 7.4+ architecture সহ সম্পূৰ্ণ পুনৰলিখন
* **নতুন:** Ultimate Multisite v2 checkout system-ৰ সৈতে নিৰৱচ্ছিন্ন integration
* **নতুন:** নমনীয় pricing options সহ ডোমেইন product management
* **নতুন:** একাধিক ডোমেইন provider support architecture
* **নতুন:** Auto-renewal আৰু subscription integration
* **নতুন:** গ্ৰাহক ডোমেইন management interface
* **নতুন:** Admin ডোমেইন monitoring আৰু logs
* **নতুন:** ডোমেইন products-ৰ বাবে coupon support
* **নতুন:** বিস্তৃত settings management
* **নতুন:** developer-friendly extensible codebase
* **উন্নত:** সম্পূৰ্ণ feature support সহ OpenSRS provider update কৰা হৈছে
* **উন্নত:** Ultimate Multisite v2-ৰ সৈতে সামঞ্জস্যপূর্ণ আধুনিক UI
* **ঠিক কৰা হৈছে:** সকলো deprecated v1 code v2 standards-লৈ update কৰা হৈছে
* **আঁতৰোৱা হৈছে:** Legacy v1 compatibility (breaking change)

### আগৰ Versions (v1 Legacy)

### Version 0.0.3 - 20/08/2019

* ঠিক কৰা হৈছে: Groundhogg CRM-ৰ সৈতে অসামঞ্জস্য
* টোকা: এইটো আছিল শেষ v1-compatible release

### Version 0.0.2 - 07/12/2018

* ঠিক কৰা হৈছে: License Key field আঁতৰোৱা হৈছে
* ঠিক কৰা হৈছে: feature plugin সক্ৰিয় থাকিলে Plan tabs নথকা
* উন্নত: registration field-ত এটা skip button যোগ কৰা হৈছে

### Version 0.0.1 - Initial Release

* WP Ultimo v1-ৰ বাবে Basic OpenSRS integration
* সৰল ডোমেইন search আৰু registration
* Plan-based ডোমেইন permissions
