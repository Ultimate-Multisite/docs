---
title: ਡੋਮੇਨ ਵਿਕਰੇਤਾ ਚੇਂਜ ਲੌਗ
sidebar_position: 99
_i18n_hash: bc3ab4e3f0076e80e8c38ed313f4430d
---
# Domain Seller Updates Ki Soochi (Changelog)

Version 1.1.0 - 2026-05-08 nu release hoya
- Naya: ResellerClub, Enom, aur OpenSRS registrars ke liye DNS record banane ka option (add_dns_record) add kiya gaya
- Fix: Default DNS Records parser ab {DOMAIN} aur {SITE_URL} tokens ko bhi handle kar leta hai
- Fix: Domain selection checkout field ke slugs ko naam diya gaya (namespaced) taaki woh site_url se takra naein

Version 1.0.8 - 2026-05-07 nu release hoya
- Fix: ResellerClub domain pricing ab sahi API endpoint se live cost prices laata hai

Version 1.0.7 - 2026-05-06 nu release hoya
* Fix: ResellerClub test_connection ko zaroori tlds parameter (#224) bhejna shamil kiya gaya

Version 1.0.6 - 2026-05-05 nu release hoya
* Fix: ResellerClub domain registration ab behtar API response handling aur registry-driven provider routing ke saath sahi tarah se kaam karta hai
* Fix: Register Domain admin page par user experience (UX) mein sudhaar
* Removed: CyberPanel registrar integration

Version 1.0.5 - 2026-04-02 nu release hoya
* Naya: Domain registration aur management ke liye GoDaddy registrar integration
* Naya: NameSilo registrar integration
* Naya: ResellerClub registrar integration
* Naya: Domain kharidne aur map karne par auto-verify SES sending domain
* Fix: Test environment mein Guard plugin constants ko redefinition se bachaya gaya
* Fix: MySQL flags word-split ko install-wp-tests.sh mein sahi tarah se karta hai

Version 1.0.4 - 2026-03-14 nu release hoya
* **Fix:** Kuch missing css assets ko theek kiya gaya
* **Fix:** Unavailable tlds se related error ko theek kiya gaya

Version 1.0.3 - 2026-03-09 nu release hoya
* **Fix:** Checkout shortcode ke saath legacy signup template istemal karte waqt Vue reactive property errors (domain_option, selected_domain, domain_provider) ko theek kiya gaya
* **Fix:** Domain selection checkout field mein subdomain input field ki misalignment aur zyada size ka text theek kiya gaya
* **Fix:** Jab domain selection field maujood ho, toh "Your URL will be" preview block ko chhipa diya gaya

Version 1.0.2 - 2026-03-01 nu release hoya
* **Improved:** Settings page se global markup settings hata diye gaye — ab pricing sirf product-wise hai
* **Improved:** Settings page par quick navigation ke liye "Manage Domain Products" link add kiya gaya
* **Improved:** Domain product settings ke liye zyada saaf field descriptions aur tooltips (catch-all vs TLD-specific, markup types, introductory pricing)
* **Improved:** Settings page par behtar descriptions (search TLDs, renewals, DNS, notifications)

Version 1.0.1 - 2026-02-27 nu release hoya

* **New:** Bulk pricing management ke liye TLD import tool
* **New:** Domain products ke liye introductory pricing support
* **New:** Cypress ke saath E2E test suite
* **New:** Domain lifecycle notifications ke liye Email templates
* **New:** Admin domain registration modal par Registrant address fields, jo settings se pre-populate hote hain
* **New:** Add, edit, aur delete record support ke saath Customer DNS management interface
* **New:** Automatic domain mapping ke saath "Bring your own domain" checkout option
* **New:** Checkout ke dauran domain name se auto-generate site URL
* **New:** Settings mein default nameserver aur DNS record configuration
* **New:** Core domain edit page par Domain registration details aur DNS management
* **New:** Setup wizard ek default domain product auto-create karta hai jismein samajhdari se default values hoti hain
* **New:** Sabhi configured providers par cron ke zariye daily automatic TLD sync
* **New:** Per-product configuration ke saath WHOIS privacy protection (hamesha on, customer choice, ya disabled)
* **New:** Pricing display aur dark mode support ke saath WHOIS privacy checkout checkbox
* **New:** Manual domain registration ke liye Register Domain admin page
* **New:** Ultimate Multisite update server ke zariye automatic plugin updates
* **New:** Product list table mein domain product type filter tab jiske saath purple badge styling hai
* **New:** Domain checkout form par Registrant contact fields (name, address, city, state, postal code, country, phone)
* **New:** Registrar API ko call karne se pehle Registrant field validation, jiske saath saaf error messages hain
* **New:** Domain registration events ke liye provider-specific log channels (jaise. domain-seller-namecheap.log)
* **New:** Main registration/signup checkout form par Registrant contact fields (jab domain register kiya ja raha ho toh dikhte hain)
* **Improved:** Domain Search checkout field ko unified Domain Selection field se badla gaya, jo subdomain, register, aur existing domain tabs ko support karta hai
* **Improved:** Domain product settings ko product edit page par core widget system ke zariye inline render kiya gaya
* **Improved:** Customer domain info ko standalone metabox ki jagah core domain mapping widget mein hook kiya gaya
* **Improved:** TLD import wizard ko sabhi providers se ek-click sync tak saral banaya gaya
* **Improved:** Namecheap domain availability ab tez search ke liye batch API call istemal karta hai
* **Improved:** Namecheap pricing API sahi parameters aur response parsing istemal karta hai
* **Improved:** TLD storage ko ek single network option mein centralize kiya gaya
* **Improved:** DNS changes, transfers, aur config application ke liye Domain activity logging
* **Improved:** OpenSRS ke liye IANA master list ke saath full TLD sync aur batch validation
* **Improved:** Namecheap ke liye paginated API requests ke saath full TLD sync
* **Improved:** Legacy provider classes ko Integration Registry pattern se badla gaya
* **Improved:** DNS aur transfer configuration ke saath Settings panel
* **Improved:** Phone numbers ko automatically +CC.NNN registrar format mein format kiya gaya
* **Improved:** Phone field validation submission se pehle formatting characters hata deta hai
* **Improved:** Version requirement ko Ultimate Multisite 2.4.12 tak badhaya gaya jiske saath saaf notice hai
* **Improved:** CI workflow addon aur core plugin dono ke liye proper checkout istemal karta hai
* **Improved:** prepare_registrant_info() checkout-saved user meta se padhta hai, jismein billing address fallback hai
* **Fixed:** Checkout ke dauran non-logged-in users ke liye Domain search AJAX fail ho raha tha
* **Fixed:** Checkout ke dauran non-logged-in users ke liye Domain pricing AJAX fail ho raha tha
* **Fixed:** Spyc class redeclaration fatal error jab WP-CLI commands chalaye jaate hain
* **Fixed:** Namecheap sandbox API timeout bahut kam tha
* **Fixed:** Domain search Select button text green background par visible nahi tha
* **Fixed:** Domain registration "RegistrantFirstName is Missing" error ke saath fail ho raha tha kyunki contact info missing thi
* **Fixed:** Domain record blog_id=0 ke saath create ho raha tha jab checkout time par site maujood nahi thi
* **Fixed:** Default TLDs setting ko parsed array ki jagah string ke roop mein return kiya ja raha tha
* **Removed:** Standalone Domain Management admin page — ab core domain pages ke zariye handle hota hai

Version 1.0.0 - 2025-09-28 nu release hoya

**Ultimate Multisite v2 ke liye Major Rewrite**

* **New:** Modern PHP 7.4+ architecture ke saath poora rewrite
* **New:** Ultimate Multisite v2 checkout system ke saath seamless integration
* **New:** Flexible pricing options ke saath Domain product management
* **New:** Multiple domain provider support architecture
* **New:** Auto-renewal aur subscription integration
* **New:** Customer domain management interface
* **New:** Admin domain monitoring aur logs
* **New:** Domain products ke liye Coupon support
* **New:** Comprehensive settings management
* **New:** Developer-friendly extensible codebase
* **Improved:** OpenSRS provider ko full feature support ke saath update kiya gaya
* **Improved:** Ultimate Multisite v2 ke saath consistent modern UI
* **Fixed:** Saare deprecated v1 code ko v2 standards tak update kiya gaya
* **Removed:** Legacy v1 compatibility (breaking change)

### Previous Versions (v1 Legacy)

### Version 0.0.3 - 20/08/2019

* Fixed: Groundhogg CRM ke saath incompatibility
* Note: Yeh aakhri v1-compatible release tha

### Version 0.0.2 - 07/12/2018

* Fixed: License Key field hata diya gaya
* Fixed: Plan tabs missing the jab feature plugin active hota hai
* Improved: Registration field par skip button add kiya gaya

### Version 0.0.1 - Initial Release

* WP Ultimo v1 ke liye basic OpenSRS integration
* Simple domain search aur registration
* Plan-based domain permissions
