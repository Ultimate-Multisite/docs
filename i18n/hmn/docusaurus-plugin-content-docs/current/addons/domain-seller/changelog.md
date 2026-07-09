---
title: Daim ntawv teev kev hloov tshiab ntawm Tus Muag Domain
sidebar_position: 99
_i18n_hash: 6b9be73c1503d8df8a806bb02b241873
---
# Keeb kwm hloov tshiab rau Domain Seller

Version 1.3.0 - Tso tawm rau 2026-06-02
- Tshiab: Ntxiv lus ceeb toom hauv network-admin thaum HostAfrica reseller cov nyiaj tshuav qis dhau lawm
- Tshiab: Ntxiv kev map cia li ntawm cov npe sau uas nyuam qhuav sau npe mus rau lub site hauv network
- Kho: Siv cov kev cai ntawm registrant fields tsuas yog thaum sau npe ib npe sau tshiab xwb
- Kho: Ua kom cov ntawv ceeb toom txog monitor balance kaw tau
- Kho: Xyuas kom WooCommerce registrant billing details raug khaws cia
- Kho: Yuam kom muaj registrant contact requirements thaum sau npe
- Kho: Tiv thaiv kom tsis txhob tsim cov khoom sau npe npe sau nrog 0% markup
- Kho: Khaws cov kev xaiv npe sau thiab tus nqi cia dhau ntawm checkout session flow
- Kho: Txhim kho HostAfrica kev tso saib nyiaj txiag rau tus nqi npe sau
- Kho: Txhim kho checkout form-action tus cwj pwm kom tiv thaiv WP-core query-var tsis sib phim
- Txhim kho: Txuas HostAfrica reseller configuration ntaub ntawv qhia hauv setup guidance

Version 1.2.0 - Tso tawm rau 2026-05-25
- Tshiab: Ntxiv HostAfrica ua ib qho kev sib txuas muag npe sau nrog kev txhawb rau checkout, setup wizard, lookup, TLD/pricing, registration, renewal, transfer, nameserver, DNS, EPP code, registrar lock, thiab ID protection
- Tshiab: Ntxiv Openprovider ua ib qho kev sib txuas muag npe sau nrog kev txhawb rau reseller pricing, registration, renewal, transfer, nameserver, DNS, EPP code, registrar lock, WHOIS privacy, thiab TLD sync
- Tshiab: Ntxiv Hostinger ua ib qho kev sib txuas muag npe sau uas siv Hostinger API token sib koom los ntawm core integration rau availability checks, registration, nameserver updates, registrar lock, thiab WHOIS privacy
- Txhim kho: Ntxiv domain lifecycle action thiab filter docblocks rau developer integration guidance
- Txhim kho: Hloov tshiab plugin compatibility metadata mus rau WordPress 7.0 hauv addon readme
- Txhim kho: Hloov tshiab planning templates uas siv rau kev sib koom tes tso tawm yav tom ntej

Version 1.1.0 - Tso tawm rau 2026-05-08
- Tshiab: Kev tsim DNS record (add_dns_record) tau ua tiav rau ResellerClub, Enom, thiab OpenSRS registrars
- Kho: Default DNS Records parser tam sim no txais tau {DOMAIN} thiab {SITE_URL} tokens
- Kho: Domain selection checkout field slugs tau muab namespace kom tiv thaiv kev sib tsoo nrog site_url

Version 1.0.8 - Tso tawm rau 2026-05-07
- Kho: ResellerClub tus nqi npe sau tam sim no rub cov nqi cost prices tiag los ntawm API endpoint raug

Version 1.0.7 - Tso tawm rau 2026-05-06
* Kho: ResellerClub test_connection xa tlds parameter uas yuav tsum muaj (#224)

Version 1.0.6 - Tso tawm rau 2026-05-05
* Kho: ResellerClub kev sau npe npe sau tam sim no ua haujlwm raug nrog kev tuav API response uas zoo dua thiab registry-driven provider routing
* Kho: Txhim kho Register Domain admin page UX
* Tshem tawm: CyberPanel registrar integration

Version 1.0.5 - Tso tawm rau 2026-04-02
* Tshiab: GoDaddy registrar integration rau kev sau npe thiab tswj npe sau
* Tshiab: NameSilo registrar integration
* Tshiab: ResellerClub registrar integration
* Tshiab: Auto-verify SES sending domain thaum yuav thiab map npe sau
* Kho: Tiv thaiv plugin constants kom tsis txhob redefinition hauv test environment
* Kho: MySQL flags word-split raug hauv install-wp-tests.sh

Version 1.0.4 - Tso tawm rau 2026-03-14
* **Kho:** Qee yam css assets uas ploj lawm
* **Kho:** Qhov yuam kev uas cuam tshuam rau tlds uas tsis muaj

Version 1.0.3 - Tso tawm rau 2026-03-09
* **Kho:** Vue reactive property errors (domain_option, selected_domain, domain_provider) thaum siv legacy signup template nrog checkout shortcode
* **Kho:** Subdomain input field tsis ncaj thiab ntawv loj dhau hauv domain selection checkout field
* **Kho:** Zais qhov preview block "Koj URL yuav yog" thaum muaj domain selection field

Version 1.0.2 - Tso tawm rau 2026-03-01
* **Txhim kho:** Tshem global markup settings ntawm settings page — pricing tam sim no yog per-product nkaus xwb
* **Txhim kho:** Ntxiv "Tswj cov khoom npe sau" link ntawm settings page rau kev mus ceev
* **Txhim kho:** Cov lus piav qhia field thiab tooltips meej dua rau domain product settings (catch-all vs TLD-specific, markup types, introductory pricing)
* **Txhim kho:** Cov lus piav qhia zoo dua thoob settings page (search TLDs, renewals, DNS, notifications)

Version 1.0.1 - Tso tawm rau 2026-02-27

* **Tshiab:** Cuab yeej import TLD rau kev tswj tus nqi ntau
* **Tshiab:** Kev txhawb tus nqi pib rau cov domain products
* **Tshiab:** Pawg xeem E2E nrog Cypress
* **Tshiab:** Email templates rau cov ntawv ceeb toom txog domain lifecycle
* **Tshiab:** Cov teb chaw nyob ntawm registrant hauv admin domain registration modal, sau ua ntej los ntawm settings
* **Tshiab:** Interface rau tus neeg siv tswj DNS nrog kev txhawb ntxiv, kho, thiab rho record tawm
* **Tshiab:** Kev xaiv checkout "Nqa koj tus kheej domain" nrog domain mapping tsis siv neeg
* **Tshiab:** Tsim site URL tsis siv neeg los ntawm domain name thaum checkout
* **Tshiab:** Default nameserver thiab DNS record configuration hauv settings
* **Tshiab:** Domain registration details thiab DNS management ntawm nplooj core domain edit
* **Tshiab:** Setup wizard tsim default domain product tsis siv neeg nrog default zoo tsim nyog
* **Tshiab:** TLD sync tsis siv neeg txhua hnub los ntawm cron thoob txhua provider uas tau teeb
* **Tshiab:** WHOIS privacy protection nrog kev teeb tsa ib product zuj zus (qhib tas li, tus neeg siv xaiv, lossis kaw)
* **Tshiab:** WHOIS privacy checkout checkbox nrog kev qhia tus nqi thiab dark mode support
* **Tshiab:** Register Domain admin page rau kev register domain manually
* **Tshiab:** Plugin updates tsis siv neeg los ntawm Ultimate Multisite update server
* **Tshiab:** Domain product type filter tab hauv product list table nrog purple badge styling
* **Tshiab:** Cov teb registrant contact (npe, chaw nyob, nroog, xeev, postal code, teb chaws, xov tooj) ntawm domain checkout form
* **Tshiab:** Kev validate registrant field ua ntej hu registrar API nrog cov lus yuam kev meej
* **Tshiab:** Provider-specific log channels rau domain registration events (piv txwv li domain-seller-namecheap.log)
* **Tshiab:** Cov teb registrant contact ntawm main registration/signup checkout form (pom thaum register ib domain)
* **Txhim kho:** Hloov Domain Search checkout field nrog Domain Selection field sib koom uas txhawb subdomain, register, thiab existing domain tabs
* **Txhim kho:** Domain product settings render inline ntawm product edit page los ntawm core widget system
* **Txhim kho:** Customer domain info hooks rau hauv core domain mapping widget es tsis yog standalone metabox
* **Txhim kho:** TLD import wizard yooj yim dua rau one-click sync los ntawm txhua provider
* **Txhim kho:** Namecheap domain availability siv batch API call kom nrhiav ceev dua
* **Txhim kho:** Namecheap pricing API siv parameters raug thiab response parsing
* **Txhim kho:** Muab TLD storage los khaws nruab nrab hauv ib qho network option xwb
* **Txhim kho:** Domain activity logging rau DNS changes, transfers, thiab config application
* **Txhim kho:** Full TLD sync rau OpenSRS siv IANA master list nrog batch validation
* **Txhim kho:** Full TLD sync rau Namecheap nrog paginated API requests
* **Txhim kho:** Hloov legacy provider classes nrog Integration Registry pattern
* **Txhim kho:** Settings panel nrog DNS thiab transfer configuration
* **Txhim kho:** Phone numbers format tsis siv neeg mus rau +CC.NNN registrar format
* **Txhim kho:** Phone field validation tshem formatting characters ua ntej submission
* **Txhim kho:** Version requirement nce mus rau Ultimate Multisite 2.4.12 nrog notice meej dua
* **Txhim kho:** CI workflow siv checkout raug rau ob qho addon thiab core plugin
* **Txhim kho:** prepare_registrant_info() nyeem los ntawm checkout-saved user meta nrog billing address fallback
* **Kho lawm:** Domain search AJAX poob rau cov users uas tsis tau logged in thaum checkout
* **Kho lawm:** Domain pricing AJAX poob rau cov users uas tsis tau logged in thaum checkout
* **Kho lawm:** Spyc class redeclaration fatal error thaum khiav WP-CLI commands
* **Kho lawm:** Namecheap sandbox API timeout luv dhau
* **Kho lawm:** Domain search Select button text tsis pom ntawm green background
* **Kho lawm:** Domain registration poob nrog yuam kev "RegistrantFirstName is Missing" vim contact info ploj
* **Kho lawm:** Domain record raug tsim nrog blog_id=0 thaum site tseem tsis tau muaj thaum lub sijhawm checkout
* **Kho lawm:** Default TLDs setting xa rov qab ua string es tsis yog parsed array
* **Tshem tawm:** Standalone Domain Management admin page — tam sim no tswj los ntawm core domain pages

Version 1.0.0 - Tso tawm rau 2025-09-28

**Kev Sau Dua Loj rau Ultimate Multisite v2**

* **Tshiab:** Sau dua tag nrho nrog PHP 7.4+ architecture niaj hnub
* **Tshiab:** Kev sib xyaw du lug nrog Ultimate Multisite v2 checkout system
* **Tshiab:** Domain product management nrog kev xaiv pricing yoog raws
* **Tshiab:** Architecture txhawb ntau domain provider
* **Tshiab:** Auto-renewal thiab subscription integration
* **Tshiab:** Customer domain management interface
* **Tshiab:** Admin domain monitoring thiab logs
* **Tshiab:** Coupon support rau domain products
* **Tshiab:** Comprehensive settings management
* **Tshiab:** Codebase extensible uas developer-friendly
* **Txhim kho:** Hloov tshiab OpenSRS provider nrog kev txhawb feature tag nrho
* **Txhim kho:** UI niaj hnub sib xws nrog Ultimate Multisite v2
* **Kho lawm:** Txhua deprecated v1 code hloov tshiab rau v2 standards
* **Tshem tawm:** Legacy v1 compatibility (kev hloov uas rhuav compatibility)

### Cov Version Dhau Los (v1 Legacy)

### Version 0.0.3 - 20/08/2019

* Kho lawm: Tsis sib xws nrog Groundhogg CRM
* Lus ceeb toom: Qhov no yog release kawg uas sib xws nrog v1

### Version 0.0.2 - 07/12/2018

* Kho lawm: Tshem tawm License Key field
* Kho lawm: Plan tabs ploj thaum feature plugin qhib
* Txhim kho: Ntxiv skip button ntawm registration field

### Version 0.0.1 - Initial Release

* Basic OpenSRS integration rau WP Ultimo v1
* Domain search thiab registration yooj yim
* Plan-based domain permissions
