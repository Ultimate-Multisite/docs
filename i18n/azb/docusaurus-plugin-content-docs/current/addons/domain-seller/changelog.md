---
title: Domain Seller Changelog
sidebar_position: 99
_i18n_hash: bc3ab4e3f0076e80e8c38ed313f4430d
---
# Domain Seller ka Changelog

Version 1.1.0 - Tarikh-e-ikhraj: 2026-05-08
- Naya: ResellerClub, Enom, aur OpenSRS registrars ke liye DNS record banana (add_dns_record) implement kiya gaya
- Fix: Default DNS Records parser ab {DOMAIN} aur {SITE_URL} tokens ko handle kar leta hai
- Fix: Domain selection checkout field slugs ko namespace kiya gaya taaki site_url se takraav (collision) na ho

Version 1.0.8 - Tarikh-e-ikhraj: 2026-05-07
- Fix: ResellerClub domain pricing ab sahi API endpoint se live cost prices fetch karta hai

Version 1.0.7 - Tarikh-e-ikhraj: 2026-05-06
* Fix: ResellerClub test_connection ko zaroori tlds parameter (#224) bhejna padta hai

Version 1.0.6 - Tarikh-e-ikhraj: 2026-05-05
* Fix: ResellerClub domain registration ab behtar API response handling aur registry-driven provider routing ke saath theek se kaam karta hai
* Fix: Register Domain admin page ke UX mein sudhaar
* Hataya gaya: CyberPanel registrar integration

Version 1.0.5 - Tarikh-e-ikhraj: 2026-04-02
* Naya: Domain registration aur management ke liye GoDaddy registrar integration
* Naya: NameSilo registrar integration
* Naya: ResellerClub registrar integration
* Naya: Domain kharidne aur map karne par auto-verify SES sending domain
* Fix: Test environment mein redefinition se Guard plugin constants ko bachaya gaya
* Fix: MySQL flags ko install-wp-tests.sh mein sahi tarah se word-split kiya gaya

Version 1.0.4 - Tarikh-e-ikhraj: 2026-03-14
* **Fix:** Kuch missing css assets
* **Fix:** Unavailable tlds se mutalliq error

Version 1.0.3 - Tarikh-e-ikhraj: 2026-03-09
* **Fix:** Legacy signup template ke saath checkout shortcode istemal karte waqt Vue reactive property errors (domain_option, selected_domain, domain_provider) ko theek kiya gaya
* **Fix:** Domain selection checkout field mein subdomain input field ka misalignment aur zyada size ka text
* **Fix:** Domain selection field maujood hone par "Your URL will be" preview block ko chupa diya gaya

Version 1.0.2 - Tarikh-e-ikhraj: 2026-03-01
* **Improvement:** Settings page se global markup settings hataye gaye — ab pricing sirf per-product hai
* **Improvement:** Settings page par quick navigation ke liye "Manage Domain Products" link joda gaya
* **Improvement:** Domain product settings ke liye zyada saaf field descriptions aur tooltips (catch-all vs TLD-specific, markup types, introductory pricing)
* **Improvement:** Settings page par behtar descriptions (search TLDs, renewals, DNS, notifications)

Version 1.0.1 - Tarikh-e-ikhraj: 2026-02-27

* **Naya:** Bulk pricing management ke liye TLD import tool
* **Naya:** Domain products ke liye introductory pricing support
* **Naya:** Cypress ke saath E2E test suite
* **Naya:** Domain lifecycle notifications ke liye Email templates
* **Naya:** Admin domain registration modal par Registrant address fields, jo settings se pre-populate hote hain
* **Naya:** Add, edit, aur delete record support ke saath Customer DNS management interface
* **Naya:** Automatic domain mapping ke saath "Bring your own domain" checkout option
* **Naya:** Checkout ke dauran domain name se auto-generate site URL
* **Naya:** Settings mein default nameserver aur DNS record configuration
* **Naya:** Core domain edit page par Domain registration details aur DNS management
* **Naya:** Setup wizard default domain product ko sensible defaults ke saath auto-create karta hai
* **Naya:** Sabhi configured providers par cron ke zariye daily automatic TLD sync
* **Naya:** Per-product configuration ke saath WHOIS privacy protection (hamesha on, customer choice, ya disabled)
* **Naya:** Pricing display aur dark mode support ke saath WHOIS privacy checkout checkbox
* **Naya:** Manual domain registration ke liye Register Domain admin page
* **Naya:** Ultimate Multisite update server ke zariye automatic plugin updates
* **Naya:** Product list table mein Domain product type filter tab, purple badge styling ke saath
* **Naya:** Domain checkout form par Registrant contact fields (name, address, city, state, postal code, country, phone)
* **Naya:** Registrar API ko call karne se pehle Registrant field validation, saaf error messages ke saath
* **Naya:** Domain registration events ke liye provider-specific log channels (maslan: domain-seller-namecheap.log)
* **Naya:** Main registration/signup checkout form par Registrant contact fields (jab domain register kiya ja raha ho)
* **Improvement:** Domain Search checkout field ko unified Domain Selection field se badla gaya, jo subdomain, register, aur existing domain tabs ko support karta hai
* **Improvement:** Domain product settings ko product edit page par core widget system ke zariye inline render kiya gaya
* **Improvement:** Customer domain info ko standalone metabox ki bajaye core domain mapping widget se joda gaya
* **Improvement:** TLD import wizard ko sabhi providers se one-click sync tak aasan banaya gaya
* **Improvement:** Namecheap domain availability ke liye faster search ke liye batch API call istemal kiya gaya
* **Improvement:** Namecheap pricing API ne sahi parameters aur response parsing istemal kiya
* **Improvement:** TLD storage ko ek single network option mein centralize kiya gaya
* **Improvement:** DNS changes, transfers, aur config application ke liye Domain activity logging
* **Improvement:** OpenSRS ke liye IANA master list ke saath full TLD sync aur batch validation
* **Improvement:** Namecheap ke liye paginated API requests ke saath full TLD sync
* **Improvement:** Legacy provider classes ko Integration Registry pattern se badla gaya
* **Improvement:** DNS aur transfer configuration ke saath Settings panel
* **Improvement:** Phone numbers ko automatically +CC.NNN registrar format mein format kiya gaya
* **Improvement:** Phone field validation submission se pehle formatting characters hata deta hai
* **Improvement:** Version requirement ko Ultimate Multisite 2.4.12 tak badhaya gaya, jiske saath saaf notice bhi hai
* **Improvement:** CI workflow ne addon aur core plugin dono ke liye proper checkout istemal kiya
* **Improvement:** prepare_registrant_info() checkout-saved user meta se padhta hai, billing address fallback ke saath
* **Fixed:** Checkout ke dauran non-logged-in users ke liye Domain search AJAX fail ho raha tha
* **Fixed:** Checkout ke dauran non-logged-in users ke liye Domain pricing AJAX fail ho raha tha
* **Fixed:** Spyc class redeclaration fatal error jab WP-CLI commands chalaye jaate hain
* **Fixed:** Namecheap sandbox API timeout bahut kam tha
* **Fixed:** Domain search Select button text green background par visible nahi tha
* **Fixed:** Domain registration "RegistrantFirstName is Missing" error ke saath fail ho raha tha kyunki contact info missing thi
* **Fixed:** Domain record blog_id=0 ke saath create ho raha tha jab checkout ke waqt site maujood nahi thi
* **Fixed:** Default TLDs setting ko parsed array ki bajaye string ke taur par return kiya ja raha tha
* **Removed:** Standalone Domain Management admin page — ab core domain pages ke zariye handle hota hai

Version 1.0.0 - Tarikh-e-ikhraj: 2025-09-28

**Ultimate Multisite v2 ke liye Major Rewrite**

* **Naya:** Modern PHP 7.4+ architecture ke saath complete rewrite
* **Naya:** Ultimate Multisite v2 checkout system ke saath seamless integration
* **Naya:** Flexible pricing options ke saath Domain product management
* **Naya:** Multiple domain provider support architecture
* **Naya:** Auto-renewal aur subscription integration
* **Naya:** Customer domain management interface
* **Naya:** Admin domain monitoring aur logs
* **Naya:** Domain products ke liye Coupon support
* **Naya:** Comprehensive settings management
* **Naya:** Developer-friendly extensible codebase
* **Improvement:** OpenSRS provider ko full feature support ke saath update kiya gaya
* **Improvement:** Ultimate Multisite v2 ke saath consistent modern UI
* **Fixed:** Saare deprecated v1 code ko v2 standards tak update kiya gaya
* **Removed:** Legacy v1 compatibility (breaking change)

### Previous Versions (v1 Legacy)

### Version 0.0.3 - 20/08/2019

* Fixed: Groundhogg CRM ke saath incompatibility
* Note: Yeh aakhri v1-compatible release tha

### Version 0.0.2 - 07/12/2018

* Fixed: License Key field hata diya gaya
* Fixed: Plan tabs missing the jab feature plugin active hota hai
* Improved: Registration field par skip button joda gaya

### Version 0.0.1 - Initial Release

* WP Ultimo v1 ke liye basic OpenSRS integration
* Simple domain search aur registration
* Plan-based domain permissions
