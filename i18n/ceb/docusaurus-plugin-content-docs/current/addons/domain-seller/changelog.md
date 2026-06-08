---
title: Log sa mga Pagbag-o sa Domain Seller
sidebar_position: 99
_i18n_hash: bc3ab4e3f0076e80e8c38ed313f4430d
---
# Domain Seller Changelog

Version 1.1.0 - Gi-release niadtong 2026-05-08
- New: Naka-implement na ang paghimo og DNS record (add_dns_record) para sa ResellerClub, Enom, ug OpenSRS registrars
- Fix: Ang Default DNS Records parser karon makadawat (tolerates) sa mga token nga {DOMAIN} ug {SITE_URL}
- Fix: Gihimo nga namespaced ang domain selection checkout field slugs aron malikayan ang pagbangga sa site_url

Version 1.0.8 - Gi-release niadtong 2026-05-07
- Fix: Ang pagpresyo sa domain sa ResellerClub karon makakuha og aktuwal nga presyo gikan sa husto nga API endpoint

Version 1.0.7 - Gi-release niadtong 2026-05-06
* Fix: Ang ResellerClub test_connection nagpadala na sa gikinahanglang tlds parameter (#224)

Version 1.0.6 - Gi-release niadtong 2026-05-05
* Fix: Ang domain registration sa ResellerClub karon nagtrabaho na og tarong nga may pagpaayo sa pagdumala sa API response ug sa provider routing base sa registry.
* Fix: Pagpaayo sa UX sa admin page sa Register Domain.
* Removed: CyberPanel registrar integration

Version 1.0.5 - Gi-release niadtong 2026-04-02
* New: GoDaddy registrar integration para sa domain registration ug pagdumala.
* New: NameSilo registrar integration.
* New: ResellerClub registrar integration.
* New: Automatic verification sa SES sending domain pagpalit og domain ug pag-map niini.
* Fix: Pagprotekta sa Guard plugin constants batok sa redefinition sa test environment.
* Fix: Ang MySQL flags word-split nga husto sa install-wp-tests.sh.

Version 1.0.4 - Gi-release niadtong 2026-03-14
* **Fix:** Pipirme nga nawala nga CSS assets.
* **Fix:** Error nga may kalabutan sa wala'y ma-available nga TLDs.

Version 1.0.3 - Gi-release niadtong 2026-03-09
* **Fix:** Mga error sa Vue reactive property (domain_option, selected_domain, domain_provider) kung mogamit og daan nga signup template uban sa checkout shortcode.
* **Fix:** Pag-align sa input field sa subdomain ug pagpahiangay sa dagkong text sa domain selection checkout field.
* **Fix:** Itago ang "Your URL will be" preview block kung naa ang domain selection field.

Version 1.0.2 - Gi-release niadtong 2026-03-01
* **Improved:** Gikuha na ang global markup settings gikan sa settings page — ang pagpresyo karon eksklusibo nga kada produkto (per-product).
* **Improved:** Gipadugang ang "Manage Domain Products" link sa settings page para dali kaayo makadto.
* **Improved:** Mas klaro nga field descriptions ug tooltips alang sa domain product settings (catch-all vs TLD-specific, markup types, introductory pricing).
* **Improved:** Mas maayong paghulagway sa tibuok settings page (search TLDs, renewals, DNS, notifications).

Version 1.0.1 - Gi-release niadtong 2026-02-27

* **New:** Tool sa TLD import para sa pagdumala og presyo nga daghan (bulk pricing management).
* **New:** Suporta sa introductory pricing alang sa domain products.
* **New:** E2E test suite gamit ang Cypress.
* **New:** Email templates para sa mga pahibalo sa domain lifecycle.
* **New:** Registrant address fields sa admin domain registration modal, nga nag-pre-populate gikan sa settings.
* **New:** Customer DNS management interface uban sa suporta sa pagdugang, pag-edit, ug pagtangtang og record.
* **New:** "Bring your own domain" checkout option nga may automatic domain mapping.
* **New:** Automaticong paghimo (auto-generate) og site URL gikan sa domain name at panahon sa checkout.
* **New:** Default nameserver ug DNS record configuration sa settings.
* **New:** Domain registration details ug DNS management sa core domain edit page.
* **New:** Ang Setup wizard automaticong nagmugna og default domain product nga may maayo nga defaults.
* **New:** Adlaw-adlaw nga automatic TLD sync pinaagi sa cron sa tanang configured providers.
* **New:** WHOIS privacy protection uban sa per-product configuration (always on, customer choice, o disabled).
* **New:** WHOIS privacy checkout checkbox nga may pagpakita og presyo ug suporta sa dark mode.
* **New:** Admin page sa Register Domain para manual domain registration.
* **New:** Automatic plugin updates pinaagi sa Ultimate Multisite update server.
* **New:** Domain product type filter tab sa product list table nga adunay purple badge styling.
* **New:** Registrant contact fields (name, address, city, state, postal code, country, phone) sa domain checkout form.
* **New:** Pag-validate sa registrant field sa dili pa tawagon ang registrar API uban sa klaro nga error messages.
* **New:** Provider-specific log channels para sa domain registration events (e.g. domain-seller-namecheap.log).
* **New:** Registrant contact fields sa main registration/signup checkout form (ipakita kung nagrehistro og domain).
* **Improved:** Gipuli ang Domain Search checkout field sa unified Domain Selection field nga suportado ang subdomain, register, ug existing domain tabs.
* **Improved:** Ang domain product settings mag-render inline sa product edit page pinaagi sa core widget system.
* **Improved:** Ang customer domain info mo-hook sa core domain mapping widget imbes nga standalone metabox.
* **Improved:** Gipasimple ang TLD import wizard ngadto sa one-click sync gikan sa tanang providers.
* **Improved:** Ang Namecheap domain availability naggamit og batch API call para mas paspas nga search.
* **Improved:** Ang Namecheap pricing API naggamit na og husto nga parameters ug response parsing.
* **Improved:** Centralized TLD storage sa usa ka network option lang.
* **Improved:** Domain activity logging alang sa mga pagbag-o sa DNS, transfers, ug config application.
* **Improved:** Full TLD sync para sa OpenSRS gamit ang IANA master list nga may batch validation.
* **Improved:** Full TLD sync para sa Namecheap nga adunay pagpina (paginated) API requests.
* **Improved:** Gipuli ang legacy provider classes sa Integration Registry pattern.
* **Improved:** Settings panel uban sa DNS ug transfer configuration.
* **Improved:** Ang mga phone numbers automaticong gi-format ngadto sa +CC.NNN registrar format.
* **Improved:** Ang phone field validation magtangtang (strips) sa formatting characters sa dili pa i-submit.
* **Improved:** Ang Version requirement gipataas ngadto sa Ultimate Multisite 2.4.12 nga adunay mas klaro nga pahibalo.
* **Improved:** Ang CI workflow naggamit og husto nga checkout alang sa addon ug core plugin.
* **Improved:** prepare_registrant_info() magbasa gikan sa checkout-saved user meta uban sa billing address fallback.
* **Fixed:** Ang Domain search AJAX mo-fail para sa mga dili naka-log-in users at panahon sa checkout.
* **Fixed:** Ang Domain pricing AJAX mo-fail para sa mga dili naka-log-in users at panahon sa checkout.
* **Fixed:** Spyc class redeclaration fatal error kung magpadagan og WP-CLI commands.
* **Fixed:** Ang Namecheap sandbox API timeout madiin kaayo (too short).
* **Fixed:** Ang Domain search Select button text dili makita sa green background.
* **Fixed:** Ang domain registration mo-fail nga adunay "RegistrantFirstName is Missing" error tungod kay walay contact info.
* **Fixed:** Ang domain record nanggawas nga blog_id=0 kung wala pa ang site at panahon sa checkout.
* **Fixed:** Ang Default TLDs setting gi-return nga string imbes nga parsed array.
* **Removed:** Standalone Domain Management admin page — karon gihimo pinaagi sa core domain pages.

Version 1.0.0 - Gi-release niadtong 2025-09-28

**Major Rewrite para sa Ultimate Multisite v2**

* **New:** Kompleto nga pag-rewrite gamit ang moderno nga PHP 7.4+ architecture.
* **New:** Hapsay nga pag-integrate sa Ultimate Multisite v2 checkout system.
* **New:** Domain product management uban sa flexible pricing options.
* **New:** Multiple domain provider support architecture.
* **New:** Auto-renewal ug subscription integration.
* **New:** Customer domain management interface.
* **New:** Admin domain monitoring ug logs.
* **New:** Coupon support para sa domain products.
* **New:** Comprehensive settings management.
* **New:** Developer-friendly extensible codebase.
* **Improved:** Gi-update ang OpenSRS provider nga may full feature support.
* **Improved:** Modern UI nga consistent sa Ultimate Multisite v2.
* **Fixed:** Ang tanang deprecated v1 code gi-update ngadto sa v2 standards.
* **Removed:** Legacy v1 compatibility (breaking change).

### Previous Versions (v1 Legacy)

### Version 0.0.3 - 20/08/2019

* Fixed: Pagdili-konektar (Incompatibility) sa Groundhogg CRM.
* Note: Kini ang katapusang v1-compatible release.

### Version 0.0.2 - 07/12/2018

* Fixed: Gitangtang ang License Key field.
* Fixed: Nawala nga Plan tabs kung active ang feature plugin.
* Improved: Gipadugang ang skip button sa registration field.

### Version 0.0.1 - Initial Release

* Basic OpenSRS integration para sa WP Ultimo v1.
* Simple domain search ug registration.
* Domain permissions base sa plan.
