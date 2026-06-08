---
title: डोमेन सेलर चेंजलॉग
sidebar_position: 99
_i18n_hash: bc3ab4e3f0076e80e8c38ed313f4430d
---
# Domain Seller Changelog

Version 1.1.0 - Released on 2026-05-08
- New: ResellerClub, Enom, और OpenSRS registrars के लिए DNS record creation (add_dns_record) लागू किया गया
- Fix: Default DNS Records parser अब {DOMAIN} और {SITE_URL} टोकन को सहन करता है
- Fix: Domain selection checkout field slugs को collision से बचाने के लिए namespaced किया गया, site_url के साथ

Version 1.0.8 - Released on 2026-05-07
- Fix: ResellerClub domain pricing अब सही API endpoint से लाइव लागत मूल्य प्राप्त करता है

Version 1.0.7 - Released on 2026-05-06
* Fix: ResellerClub test_connection आवश्यक tlds parameter (#224) भेजता है

Version 1.0.6 - Released on 2026-05-05
* Fix: ResellerClub domain registration अब बेहतर API response handling और registry-driven provider routing के साथ सही ढंग से काम करता है
* Fix: Register Domain admin page पर UX सुधार
* Removed: CyberPanel registrar integration

Version 1.0.5 - Released on 2026-04-02
* New: domain registration और management के लिए GoDaddy registrar integration
* New: NameSilo registrar integration
* New: ResellerClub registrar integration
* New: domain purchase और mapping पर Auto-verify SES sending domain
* Fix: test environment में redefinition के खिलाफ Guard plugin constants
* Fix: MySQL flags word-split correctly in install-wp-tests.sh

Version 1.0.4 - Released on 2026-03-14
* **Fix:** कुछ गुम हुए css assets
* **Fix:** अनुपलब्ध tlds से संबंधित त्रुटि

Version 1.0.3 - Released on 2026-03-09
* **Fix:** checkout shortcode के साथ legacy signup template का उपयोग करते समय Vue reactive property errors (domain_option, selected_domain, domain_provider)
* **Fix:** domain selection checkout field में सबडोमेन इनपुट फ़ील्ड का गलत संरेखण और बहुत बड़ा टेक्स्ट
* **Fix:** जब domain selection field मौजूद होता है तो "Your URL will be" preview block को छिपा दिया गया

Version 1.0.2 - Released on 2026-03-01
* **Improved:** सेटिंग्स पेज से global markup सेटिंग्स हटा दी गईं — अब मूल्य निर्धारण केवल प्रति-उत्पाद (per-product) है
* **Improved:** quick navigation के लिए सेटिंग्स पेज पर "Manage Domain Products" लिंक जोड़ा गया
* **Improved:** domain product settings के लिए स्पष्ट फ़ील्ड विवरण और टूलटिप्स (catch-all vs TLD-specific, markup types, introductory pricing)
* **Improved:** सेटिंग्स पेज पर बेहतर विवरण (search TLDs, renewals, DNS, notifications)

Version 1.0.1 - Released on 2026-02-27

* **New:** bulk pricing management के लिए TLD import tool
* **New:** domain products के लिए introductory pricing support
* **New:** Cypress के साथ E2E test suite
* **New:** domain lifecycle notifications के लिए Email templates
* **New:** admin domain registration modal पर Registrant address fields, सेटिंग्स से pre-populated
* **New:** add, edit, और delete record support के साथ Customer DNS management interface
* **New:** automatic domain mapping के साथ "Bring your own domain" checkout option
* **New:** checkout के दौरान domain name से site URL को auto-generate करना
* **New:** सेटिंग्स में default nameserver और DNS record configuration
* **New:** core domain edit page पर Domain registration details और DNS management
* **New:** Setup wizard sensible defaults के साथ एक default domain product auto-create करता है
* **New:** सभी configured providers पर cron के माध्यम से दैनिक automatic TLD sync
* **New:** per-product configuration के साथ WHOIS privacy protection (always on, customer choice, या disabled)
* **New:** pricing display और dark mode support के साथ WHOIS privacy checkout checkbox
* **New:** manual domain registration के लिए Register Domain admin page
* **New:** Ultimate Multisite update server के माध्यम से automatic plugin updates
* **New:** product list table में domain product type filter tab with purple badge styling
* **New:** domain checkout form पर Registrant contact fields (name, address, city, state, postal code, country, phone)
* **New:** registrar API को कॉल करने से पहले स्पष्ट error messages के साथ Registrant field validation
* **New:** domain registration events के लिए Provider-specific log channels (e.g. domain-seller-namecheap.log)
* **New:** main registration/signup checkout form पर Registrant contact fields (जब domain register किया जा रहा हो तो दिखाया जाता है)
* **Improved:** Domain Search checkout field को unified Domain Selection field से बदला गया, जो subdomain, register, और existing domain tabs को सपोर्ट करता है
* **Improved:** Domain product settings को core widget system के माध्यम से product edit page पर inline render किया गया
* **Improved:** Customer domain info को standalone metabox के बजाय core domain mapping widget में hook किया गया
* **Improved:** TLD import wizard को सभी providers से one-click sync तक सरल बनाया गया
* **Improved:** Namecheap domain availability के लिए तेज़ search हेतु batch API call का उपयोग करता है
* **Improved:** Namecheap pricing API सही parameters और response parsing का उपयोग करता है
* **Improved:** एक single network option में TLD storage को केंद्रीकृत किया गया
* **Improved:** DNS changes, transfers, और config application के लिए Domain activity logging
* **Improved:** batch validation के साथ IANA master list का उपयोग करके OpenSRS के लिए full TLD sync
* **Improved:** paginated API requests के साथ Namecheap के लिए full TLD sync
* **Improved:** legacy provider classes को Integration Registry pattern से बदला गया
* **Improved:** DNS और transfer configuration के साथ सेटिंग्स पैनल
* **Improved:** फ़ोन नंबरों को स्वचालित रूप से +CC.NNN registrar format में फॉर्मेट किया गया
* **Improved:** फ़ोन फ़ील्ड validation submission से पहले formatting characters को हटा देता है
* **Improved:** Version requirement को Ultimate Multisite 2.4.12 तक बढ़ाया गया, जिसमें स्पष्ट नोटिस है
* **Improved:** CI workflow addon और core plugin दोनों के लिए proper checkout का उपयोग करता है
* **Improved:** prepare_registrant_info() checkout-saved user meta से पढ़ता है, जिसमें billing address fallback है
* **Fixed:** checkout के दौरान non-logged-in users के लिए Domain search AJAX विफल हो रहा था
* **Fixed:** checkout के दौरान non-logged-in users के लिए Domain pricing AJAX विफल हो रहा था
* **Fixed:** WP-CLI commands चलाते समय Spyc class redeclaration fatal error
* **Fixed:** Namecheap sandbox API timeout बहुत कम था
* **Fixed:** Domain search Select button text green background पर दिखाई नहीं दे रहा था
* **Fixed:** संपर्क जानकारी गुम होने के कारण "RegistrantFirstName is Missing" त्रुटि के साथ Domain registration विफल हो रहा था
* **Fixed:** checkout समय पर साइट मौजूद न होने पर Domain record blog_id=0 के साथ बनाया गया था
* **Fixed:** Default TLDs setting को parsed array के बजाय string के रूप में लौटाया जा रहा था
* **Removed:** Standalone Domain Management admin page — अब core domain pages के माध्यम से संभाला जाता है

Version 1.0.0 - Released on 2025-09-28

**Ultimate Multisite v2 के लिए Major Rewrite**

* **New:** आधुनिक PHP 7.4+ आर्किटेक्चर के साथ पूर्ण पुनर्लेखन (Complete rewrite)
* **New:** Ultimate Multisite v2 checkout system के साथ सहज एकीकरण
* **New:** लचीले मूल्य निर्धारण विकल्पों के साथ Domain product management
* **New:** Multiple domain provider support architecture
* **New:** Auto-renewal और subscription integration
* **New:** Customer domain management interface
* **New:** Admin domain monitoring और logs
* **New:** domain products के लिए Coupon support
* **New:** Comprehensive settings management
* **New:** Developer-friendly extensible codebase
* **Improved:** OpenSRS provider को full feature support के साथ अपडेट किया गया
* **Improved:** Ultimate Multisite v2 के अनुरूप आधुनिक UI
* **Fixed:** सभी deprecated v1 कोड को v2 मानकों में अपडेट किया गया
* **Removed:** Legacy v1 compatibility (breaking change)

### Previous Versions (v1 Legacy)

### Version 0.0.3 - 20/08/2019

* Fixed: Groundhogg CRM के साथ असंगति
* Note: यह अंतिम v1-compatible release था

### Version 0.0.2 - 07/12/2018

* Fixed: License Key फ़ील्ड हटा दिया गया
* Fixed: Plan tabs गायब थे जब feature plugin सक्रिय था
* Improved: registration field पर एक skip button जोड़ा गया

### Version 0.0.1 - Initial Release

* WP Ultimo v1 के लिए basic OpenSRS integration
* सरल domain search और registration
* Plan-based domain permissions
