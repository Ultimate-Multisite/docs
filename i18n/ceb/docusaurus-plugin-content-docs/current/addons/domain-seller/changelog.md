---
title: Tigbaligya og Domain nga Talaan sa mga Kausaban
sidebar_position: 99
_i18n_hash: 6b9be73c1503d8df8a806bb02b241873
---
# Changelog sa Domain Seller {#domain-seller-changelog}

Version 1.3.0 - Gipagawas niadtong 2026-06-02
- Bag-o: Gidugang ang network-admin nga pahimangno kung ang balanse sa HostAfrica reseller moubos na kaayo
- Bag-o: Gidugang ang awtomatikong pag-map sa bag-ong narehistrong mga domain ngadto sa network site
- Ayos: Gipadapat ang mga kinahanglanon sa field sa registrant lamang kung nagparehistro og bag-ong domain
- Ayos: Gihimong madismiss ang mga pahibalo sa monitor balance
- Ayos: Gisiguro nga mapreserbar ang WooCommerce registrant billing details
- Ayos: Gipatuman ang mga kinahanglanon sa kontak sa registrant panahon sa registration
- Ayos: Gipugngan ang mga produkto sa domain registration nga mahimo nga adunay 0% markup
- Ayos: Gipreserbar ang mga pinili nga domain ug presyo pinaagi sa checkout session flow
- Ayos: Gipalambo ang pagpakita sa currency sa HostAfrica domain pricing
- Ayos: Gipalambo ang pamatasan sa checkout form-action aron malikayan ang WP-core query-var mismatches
- Gipalambo: Gi-link ang dokumentasyon sa HostAfrica reseller configuration sa setup guidance

Version 1.2.0 - Gipagawas niadtong 2026-05-25
- Bag-o: Gidugang ang HostAfrica isip domain-selling integration nga adunay checkout, setup wizard, lookup, TLD/pricing, registration, renewal, transfer, nameserver, DNS, EPP code, registrar lock, ug ID protection support
- Bag-o: Gidugang ang Openprovider isip domain-selling integration nga adunay reseller pricing, registration, renewal, transfer, nameserver, DNS, EPP code, registrar lock, WHOIS privacy, ug TLD sync support
- Bag-o: Gidugang ang Hostinger isip domain-selling integration gamit ang shared Hostinger API token gikan sa core integration para sa availability checks, registration, nameserver updates, registrar lock, ug WHOIS privacy
- Gipalambo: Gidugang ang domain lifecycle action ug filter docblocks para sa developer integration guidance
- Gipalambo: Gi-update ang plugin compatibility metadata ngadto sa WordPress 7.0 sa addon readme
- Gipalambo: Gi-update ang planning templates nga gigamit para sa umaabot nga release coordination

Version 1.1.0 - Gipagawas niadtong 2026-05-08
- Bag-o: Gipatuman ang paghimo og DNS record (add_dns_record) para sa ResellerClub, Enom, ug OpenSRS registrars
- Ayos: Ang default DNS Records parser karon mosugot na sa {DOMAIN} ug {SITE_URL} tokens
- Ayos: Ang domain selection checkout field slugs gi-namespace aron mapugngan ang collision sa site_url

Version 1.0.8 - Gipagawas niadtong 2026-05-07
- Ayos: Ang ResellerClub domain pricing karon mokuha na og live cost prices gikan sa husto nga API endpoint

Version 1.0.7 - Gipagawas niadtong 2026-05-06
* Ayos: Ang ResellerClub test_connection nagpadala sa gikinahanglang tlds parameter (#224)

Version 1.0.6 - Gipagawas niadtong 2026-05-05
* Ayos: Ang ResellerClub domain registration karon molihok na sa husto uban sa gipalambo nga API response handling ug registry-driven provider routing
* Ayos: Mga pagpalambo sa UX sa Register Domain admin page
* Gitangtang: CyberPanel registrar integration

Version 1.0.5 - Gipagawas niadtong 2026-04-02
* Bag-o: GoDaddy registrar integration para sa domain registration ug management
* Bag-o: NameSilo registrar integration
* Bag-o: ResellerClub registrar integration
* Bag-o: Awtomatikong i-verify ang SES sending domain sa domain purchase ug mapping
* Ayos: Gibantayan ang plugin constants batok sa redefinition sa test environment
* Ayos: Ang MySQL flags husto nang ma-word-split sa install-wp-tests.sh

Version 1.0.4 - Gipagawas niadtong 2026-03-14
* **Ayos:** Pipila ka nawala nga css assets
* **Ayos:** Error nga may kalabotan sa dili available nga tlds

Version 1.0.3 - Gipagawas niadtong 2026-03-09
* **Ayos:** Vue reactive property errors (domain_option, selected_domain, domain_provider) kung gamiton ang legacy signup template uban sa checkout shortcode
* **Ayos:** Dili husto nga pagka-align sa subdomain input field ug sobra kadako nga text sa domain selection checkout field
* **Ayos:** Itago ang "Ang imong URL mahimong" preview block kung anaa ang domain selection field

Version 1.0.2 - Gipagawas niadtong 2026-03-01
* **Gipalambo:** Gitangtang ang global markup settings gikan sa settings page — ang pricing karon eksklusibo na matag produkto
* **Gipalambo:** Gidugang ang "Manage Domain Products" link sa settings page para sa dali nga navigation
* **Gipalambo:** Mas klaro nga mga field description ug tooltips para sa domain product settings (catch-all vs TLD-specific, markup types, introductory pricing)
* **Gipalambo:** Mas maayo nga mga description sa tibuok settings page (search TLDs, renewals, DNS, notifications)

Version 1.0.1 - Gipagawas niadtong 2026-02-27

* **Bag-o:** TLD import tool alang sa dinaghan nga pagdumala sa presyo
* **Bag-o:** Suporta sa pasiuna nga presyo alang sa mga domain product
* **Bag-o:** E2E test suite uban sa Cypress
* **Bag-o:** Mga email template alang sa mga pahibalo sa domain lifecycle
* **Bag-o:** Mga field sa address sa registrant sa admin domain registration modal, daan nang napun-an gikan sa settings
* **Bag-o:** Interface sa pagdumala sa DNS sa customer nga adunay suporta sa pagdugang, pag-edit, ug pagtangtang og record
* **Bag-o:** Opsyon sa checkout nga "Bring your own domain" uban sa awtomatikong domain mapping
* **Bag-o:** Awtomatikong paghimo og site URL gikan sa domain name atol sa checkout
* **Bag-o:** Default nga nameserver ug DNS record configuration sa settings
* **Bag-o:** Mga detalye sa domain registration ug pagdumala sa DNS sa core domain edit page
* **Bag-o:** Setup wizard awtomatikong mohimo og default domain product nga adunay makataronganong defaults
* **Bag-o:** Adlaw-adlaw nga awtomatikong TLD sync pinaagi sa cron sa tanang gi-configure nga providers
* **Bag-o:** WHOIS privacy protection uban sa per-product configuration (kanunay naka-on, pili sa customer, o gi-disable)
* **Bag-o:** WHOIS privacy checkout checkbox uban sa pagpakita sa presyo ug suporta sa dark mode
* **Bag-o:** Register Domain admin page alang sa manwal nga domain registration
* **Bag-o:** Awtomatikong plugin updates pinaagi sa Ultimate Multisite update server
* **Bag-o:** Domain product type filter tab sa product list table uban sa purple badge styling
* **Bag-o:** Mga field sa contact sa registrant (ngalan, address, siyudad, estado, postal code, nasod, telepono) sa domain checkout form
* **Bag-o:** Pag-validate sa field sa registrant sa wala pa tawagon ang registrar API uban sa klarong mga mensahe sa sayop
* **Bag-o:** Provider-specific log channels alang sa mga panghitabo sa domain registration (pananglitan domain-seller-namecheap.log)
* **Bag-o:** Mga field sa contact sa registrant sa pangunang registration/signup checkout form (ipakita kung nag-register og domain)
* **Gipauswag:** Gipulihan ang Domain Search checkout field sa hiniusang Domain Selection field nga nagsuporta sa subdomain, register, ug existing domain tabs
* **Gipauswag:** Ang domain product settings mo-render inline sa product edit page pinaagi sa core widget system
* **Gipauswag:** Ang customer domain info mo-hook sa core domain mapping widget imbes sa standalone metabox
* **Gipauswag:** Gipasimple ang TLD import wizard ngadto sa one-click sync gikan sa tanang providers
* **Gipauswag:** Ang pagka-available sa Namecheap domain naggamit og batch API call alang sa mas paspas nga pagpangita
* **Gipauswag:** Ang Namecheap pricing API naggamit og hustong parameters ug response parsing
* **Gipauswag:** Gi-centralize ang TLD storage sa usa ka network option
* **Gipauswag:** Domain activity logging alang sa mga kausaban sa DNS, transfers, ug config application
* **Gipauswag:** Full TLD sync alang sa OpenSRS gamit ang IANA master list uban sa batch validation
* **Gipauswag:** Full TLD sync alang sa Namecheap uban sa paginated API requests
* **Gipauswag:** Gipulihan ang legacy provider classes sa Integration Registry pattern
* **Gipauswag:** Settings panel uban sa DNS ug transfer configuration
* **Gipauswag:** Ang mga numero sa telepono awtomatikong gi-format ngadto sa +CC.NNN registrar format
* **Gipauswag:** Ang pag-validate sa phone field motangtang sa formatting characters sa wala pa ang submission
* **Gipauswag:** Gipataas ang kinahanglanon sa version ngadto sa Ultimate Multisite 2.4.12 uban sa mas klarong notice
* **Gipauswag:** Ang CI workflow naggamit og hustong checkout alang sa addon ug core plugin
* **Gipauswag:** prepare_registrant_info() mobasa gikan sa checkout-saved user meta uban sa billing address fallback
* **Giayo:** Domain search AJAX napakyas alang sa mga user nga wala naka-log in atol sa checkout
* **Giayo:** Domain pricing AJAX napakyas alang sa mga user nga wala naka-log in atol sa checkout
* **Giayo:** Fatal error sa Spyc class redeclaration kung magpadagan og WP-CLI commands
* **Giayo:** Namecheap sandbox API timeout mubo ra kaayo
* **Giayo:** Dili makita ang text sa Domain search Select button sa green nga background
* **Giayo:** Domain registration napakyas uban sa "RegistrantFirstName is Missing" nga sayop tungod sa nawala nga contact info
* **Giayo:** Domain record nahimo nga blog_id=0 kung ang site wala pa naglungtad sa panahon sa checkout
* **Giayo:** Default TLDs setting mibalik isip string imbes sa parsed array
* **Gitangtang:** Standalone Domain Management admin page — karon gidumala pinaagi sa core domain pages

Version 1.0.0 - Gipagawas niadtong 2025-09-28

**Dakong Pagsulat Pag-usab alang sa Ultimate Multisite v2**

* **Bag-o:** Kompletong pagsulat pag-usab uban sa modernong PHP 7.4+ architecture
* **Bag-o:** Seamless integration uban sa Ultimate Multisite v2 checkout system
* **Bag-o:** Pagdumala sa domain product uban sa flexible nga mga opsyon sa presyo
* **Bag-o:** Arkitektura sa suporta alang sa daghang domain provider
* **Bag-o:** Auto-renewal ug subscription integration
* **Bag-o:** Interface sa pagdumala sa domain sa customer
* **Bag-o:** Admin domain monitoring ug logs
* **Bag-o:** Suporta sa coupon alang sa domain products
* **Bag-o:** Komprehensibong pagdumala sa settings
* **Bag-o:** Developer-friendly nga extensible codebase
* **Gipauswag:** Gi-update nga OpenSRS provider uban sa full feature support
* **Gipauswag:** Modernong UI nga consistent sa Ultimate Multisite v2
* **Giayo:** Tanang deprecated v1 code gi-update ngadto sa v2 standards
* **Gitangtang:** Legacy v1 compatibility (breaking change)

### Miaging mga Version (v1 Legacy) {#previous-versions-v1-legacy}

### Version 0.0.3 - 20/08/2019 {#version-003---20082019}

* Giayo: Dili pagka-compatible sa Groundhogg CRM
* Pahinumdom: Kini ang katapusang v1-compatible nga release

### Version 0.0.2 - 07/12/2018 {#version-002---07122018}

* Giayo: Gitangtang ang License Key field
* Giayo: Nawala ang mga plan tab kung aktibo ang feature plugin
* Gipauswag: Gidugang ang skip button sa registration field

### Version 0.0.1 - Inisyal nga Release {#version-001---initial-release}

* Basic nga OpenSRS integration alang sa WP Ultimo v1
* Simple nga domain search ug registration
* Mga domain permission nga base sa plan
