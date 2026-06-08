---
title: Changelog ng Domain Seller
sidebar_position: 99
_i18n_hash: bc3ab4e3f0076e80e8c38ed313f4430d
---
# Kasaysayan ng Pagbabago ng Domain Seller

Version 1.1.0 - Inilabas noong 2026-05-08
- Bago: Nag-implement ng paggawa ng DNS record (add_dns_record) para sa mga registrar na ResellerClub, Enom, at OpenSRS
- Ayos: Ang default DNS Records parser ay ngayon ay tumatanggap na ng {DOMAIN} at {SITE_URL} tokens
- Ayos: Ang mga slug ng field sa domain selection checkout ay na-namespace para maiwasan ang pagbangga sa site_url

Version 1.0.8 - Inilabas noong 2026-05-07
- Ayos: Ang pagpepresyo ng domain sa ResellerClub ay ngayon ay kumukuha na ng live cost prices mula sa tamang API endpoint

Version 1.0.7 - Inilabas noong 2026-05-06
* Ayos: Ang test_connection ng ResellerClub ay nagpapadala na ng kinakailangang tlds parameter (#224)

Version 1.0.6 - Inilabas noong 2026-05-05
* Ayos: Ang pagrehistro ng domain sa ResellerClub ay gumagana na nang tama ngayon sa pamamagitan ng pinabuting paghawak ng API response at registry-driven provider routing
* Ayos: Pagpapaganda ng UX sa admin page ng Register Domain
* Tinanggal: Ang integrasyon ng CyberPanel registrar

Version 1.0.5 - Inilabas noong 2026-04-02
* Bago: Integrasyon ng registrar na GoDaddy para sa pagrehistro at pamamahala ng domain
* Bago: Integrasyon ng registrar na NameSilo
* Bago: Integrasyon ng registrar na ResellerClub
* Bago: Awtomatikong pag-verify ng SES sending domain sa pagbili at pag-map ng domain
* Ayos: Pag-iingat sa mga constant ng plugin na Guard laban sa redefinition sa test environment
* Ayos: Tama nang na-split ng MySQL flags sa install-wp-tests.sh

Version 1.0.4 - Inilabas noong 2026-03-14
* **Ayos:** May ilang nawawalang css assets
* **Ayos:** Error na may kaugnayan sa hindi available na tlds

Version 1.0.3 - Inilabas noong 2026-03-09
* **Ayos:** Mga error sa Vue reactive property (domain_option, selected_domain, domain_provider) kapag ginagamit ang legacy signup template kasama ang checkout shortcode
* **Ayos:** Pag-aayos ng misalignment ng input field ng subdomain at sobrang laki ng text sa domain selection checkout field
* **Ayos:** Itinatago ang "Your URL will be" preview block kapag naroroon ang domain selection field

Version 1.0.2 - Inilabas noong 2026-03-01
* **Pinaganda:** Tinanggal ang global markup settings mula sa settings page — ang pagpepresyo ay eksklusibong per-product na ngayon
* **Pinaganda:** Nagdagdag ng link na "Manage Domain Products" sa settings page para sa mabilis na pag-navigate
* **Pinaganda:** Mas malinaw na paglalarawan ng field at tooltips para sa domain product settings (catch-all vs TLD-specific, markup types, introductory pricing)
* **Pinaganda:** Mas mahusay na paglalarawan sa buong settings page (search TLDs, renewals, DNS, notifications)

Version 1.0.1 - Inilabas noong 2026-02-27

* **Bago:** TLD import tool para sa bulk pricing management
* **Bago:** Suporta sa introductory pricing para sa domain products
* **Bago:** E2E test suite gamit ang Cypress
* **Bago:** Email templates para sa domain lifecycle notifications
* **Bago:** Registrant address fields sa admin domain registration modal, na pre-populated mula sa settings
* **Bago:** Customer DNS management interface na may suporta sa pagdagdag, pag-edit, at pagtanggal ng record
* **Bago:** "Bring your own domain" checkout option na may awtomatikong domain mapping
* **Bago:** Awtomatikong pag-generate ng site URL mula sa domain name habang nasa checkout
* **Bago:** Default nameserver at DNS record configuration sa settings
* **Bago:** Domain registration details at DNS management sa core domain edit page
* **Bago:** Ang setup wizard ay awtomatikong lumilikha ng default domain product na may makatuwirang defaults
* **Bago:** Pang-araw-araw na awtomatikong TLD sync via cron sa lahat ng naka-configure na providers
* **Bago:** WHOIS privacy protection na may per-product configuration (always on, customer choice, o disabled)
* **Bago:** WHOIS privacy checkout checkbox na may pagpapakita ng pagpepresyo at suporta sa dark mode
* **Bago:** Admin page ng Register Domain para sa manual domain registration
* **Bago:** Awtomatikong pag-update ng plugin via Ultimate Multisite update server
* **Bago:** Domain product type filter tab sa product list table na may purple badge styling
* **Bago:** Registrant contact fields (name, address, city, state, postal code, country, phone) sa domain checkout form
* **Bago:** Registrant field validation bago tawagin ang registrar API na may malinaw na error messages
* **Bago:** Provider-specific log channels para sa domain registration events (hal. domain-seller-namecheap.log)
* **Bago:** Registrant contact fields sa main registration/signup checkout form (ipinapakita kapag nagre-register ng domain)
* **Pinaganda:** Pinalitan ang Domain Search checkout field ng unified Domain Selection field na sumusuporta sa subdomain, register, at existing domain tabs
* **Pinaganda:** Ang domain product settings ay ipinapakita nang inline sa product edit page sa pamamagitan ng core widget system
* **Pinaganda:** Ang customer domain info ay kumokonekta sa core domain mapping widget sa halip na standalone metabox
* **Pinaganda:** Ang TLD import wizard ay pinasimple sa one-click sync mula sa lahat ng providers
* **Pinaganda:** Gumagamit ng batch API call ang Namecheap domain availability para sa mas mabilis na paghahanap
* **Pinaganda:** Gumagamit ng tamang parameters at response parsing ang Namecheap pricing API
* **Pinaganda:** Sentralisadong TLD storage sa isang network option
* **Pinaganda:** Domain activity logging para sa mga pagbabago sa DNS, transfers, at paglalapat ng config
* **Pinaganda:** Buong TLD sync para sa OpenSRS gamit ang IANA master list na may batch validation
* **Pinaganda:** Buong TLD sync para sa Namecheap na may pag-page ng API requests
* **Pinaganda:** Pinalitan ang legacy provider classes ng Integration Registry pattern
* **Pinaganda:** Settings panel na may DNS at transfer configuration
* **Pinaganda:** Ang mga numero ng telepono ay awtomatikong naka-format sa +CC.NNN registrar format
* **Pinaganda:** Ang field validation ng telepono ay nagtatanggal ng formatting characters bago ang pagpasa (submission)
* **Pinaganda:** Ang version requirement ay itinaas sa Ultimate Multisite 2.4.12 na may mas malinaw na notice
* **Pinaganda:** Ang CI workflow ay gumagamit ng tamang checkout para sa addon at core plugin
* **Pinaganda:** Ang prepare_registrant_info() ay kumukuha mula sa checkout-saved user meta na may billing address fallback
* **Naayos:** Ang Domain search AJAX ay nagkakaroon ng failure para sa mga user na hindi naka-log-in habang nasa checkout
* **Naayos:** Ang Domain pricing AJAX ay nagkakaroon ng failure para sa mga user na hindi naka-log-in habang nasa checkout
* **Naayos:** Ang Spyc class redeclaration fatal error kapag nagpapatakbo ng WP-CLI commands
* **Naayos:** Ang Namecheap sandbox API timeout ay masyadong maikli
* **Naayos:** Ang text ng Select button ng Domain search ay hindi nakikita sa green background
* **Naayos:** Ang pagrehistro ng domain ay nagkakaroon ng failure na may error na "RegistrantFirstName is Missing" dahil sa nawawalang contact info
* **Naayos:** Ang domain record ay nililikha na may blog_id=0 kapag hindi pa umiiral ang site sa oras ng checkout
* **Naayos:** Ang default TLDs setting ay ibinabalik bilang string sa halip na parsed array
* **Tinanggal:** Ang standalone Domain Management admin page — ngayon ay hinahawakan sa pamamagitan ng core domain pages

Version 1.0.0 - Inilabas noong 2025-09-28

**Major Rewrite para sa Ultimate Multisite v2**

* **Bago:** Kumpletong rewrite gamit ang modern PHP 7.4+ architecture
* **Bago:** Seamless integration sa Ultimate Multisite v2 checkout system
* **Bago:** Domain product management na may flexible pricing options
* **Bago:** Multiple domain provider support architecture
* **Bago:** Auto-renewal at subscription integration
* **Bago:** Customer domain management interface
* **Bago:** Admin domain monitoring at logs
* **Bago:** Coupon support para sa domain products
* **Bago:** Comprehensive settings management
* **Bago:** Developer-friendly extensible codebase
* **Pinaganda:** In-update ang OpenSRS provider na may full feature support
* **Pinaganda:** Modern UI na consistent sa Ultimate Multisite v2
* **Naayos:** Lahat ng deprecated v1 code ay na-update sa v2 standards
* **Tinanggal:** Legacy v1 compatibility (breaking change)

### Mga Nakaraang Bersyon (v1 Legacy)

### Version 0.0.3 - 20/08/2019

* Naayos: Incompatibility sa Groundhogg CRM
* Paalala: Ito ang huling v1-compatible release

### Version 0.0.2 - 07/12/2018

* Naayos: Tinanggal ang License Key field
* Naayos: Ang Plan tabs ay nawawala kapag active ang feature plugin
* Pinaganda: Nagdagdag ng skip button sa registration field

### Version 0.0.1 - Initial Release

* Basic OpenSRS integration para sa WP Ultimo v1
* Simple domain search at registration
* Plan-based domain permissions
