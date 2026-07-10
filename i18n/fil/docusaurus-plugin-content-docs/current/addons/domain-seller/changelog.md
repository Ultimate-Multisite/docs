---
title: Talaan ng Pagbabago ng Nagbebenta ng Domain
sidebar_position: 99
_i18n_hash: 6b9be73c1503d8df8a806bb02b241873
---
# Talaan ng Pagbabago ng Domain Seller {#domain-seller-changelog}

Bersyon 1.3.0 - Inilabas noong 2026-06-02
- Bago: Nagdagdag ng babala sa network-admin kapag masyadong bumababa ang balanse ng HostAfrica reseller
- Bago: Nagdagdag ng awtomatikong pagmamapa ng mga bagong rehistradong domain sa site ng network
- Ayos: Inilapat ang mga kinakailangan sa field ng registrant lamang kapag nagrerehistro ng bagong domain
- Ayos: Ginawang maaaring i-dismiss ang mga abiso sa pagmonitor ng balanse
- Ayos: Tiniyak na napapanatili ang mga detalye ng pagsingil ng WooCommerce registrant
- Ayos: Ipinatupad ang mga kinakailangan sa contact ng registrant habang nagrerehistro
- Ayos: Pinigilan ang mga produkto para sa pagpaparehistro ng domain na magawa nang may 0% markup
- Ayos: Pinanatili ang mga pagpili ng domain at pagpepresyo sa daloy ng session ng pag-checkout
- Ayos: Pinahusay ang pagpapakita ng currency ng pagpepresyo ng domain ng HostAfrica
- Ayos: Pinahusay ang gawi ng form-action sa pag-checkout upang maiwasan ang mga hindi pagtutugma ng query-var ng WP-core
- Pinahusay: Ini-link ang dokumentasyon ng configuration ng HostAfrica reseller sa gabay sa pag-setup

Bersyon 1.2.0 - Inilabas noong 2026-05-25
- Bago: Idinagdag ang HostAfrica bilang integration para sa pagbebenta ng domain na may suporta sa pag-checkout, setup wizard, lookup, TLD/pagpepresyo, pagpaparehistro, pag-renew, paglipat, nameserver, DNS, EPP code, registrar lock, at ID protection
- Bago: Idinagdag ang Openprovider bilang integration para sa pagbebenta ng domain na may suporta sa pagpepresyo ng reseller, pagpaparehistro, pag-renew, paglipat, nameserver, DNS, EPP code, registrar lock, WHOIS privacy, at TLD sync
- Bago: Idinagdag ang Hostinger bilang integration para sa pagbebenta ng domain gamit ang nakabahaging Hostinger API token mula sa core integration para sa mga pagsusuri ng availability, pagpaparehistro, mga update sa nameserver, registrar lock, at WHOIS privacy
- Pinahusay: Nagdagdag ng mga docblock para sa action at filter ng lifecycle ng domain para sa gabay sa integration ng developer
- Pinahusay: In-update ang metadata ng compatibility ng plugin sa WordPress 7.0 sa readme ng addon
- Pinahusay: In-update ang mga template sa pagpaplano na ginagamit para sa koordinasyon ng paparating na release

Bersyon 1.1.0 - Inilabas noong 2026-05-08
- Bago: Naipatupad ang paggawa ng DNS record (add_dns_record) para sa mga registrar na ResellerClub, Enom, at OpenSRS
- Ayos: Natitiis na ngayon ng default na parser ng DNS Records ang mga token na {DOMAIN} at {SITE_URL}
- Ayos: Nilagyan ng namespace ang mga slug ng field sa pag-checkout para sa pagpili ng domain upang maiwasan ang salpukan sa site_url

Bersyon 1.0.8 - Inilabas noong 2026-05-07
- Ayos: Kinukuha na ngayon ng pagpepresyo ng domain ng ResellerClub ang live na mga cost price mula sa tamang API endpoint

Bersyon 1.0.7 - Inilabas noong 2026-05-06
* Ayos: Nagpapadala ang ResellerClub test_connection ng kinakailangang parameter na tlds (#224)

Bersyon 1.0.6 - Inilabas noong 2026-05-05
* Ayos: Gumagana na ngayon nang tama ang pagpaparehistro ng domain sa ResellerClub gamit ang pinahusay na paghawak sa tugon ng API at routing ng provider na pinapatakbo ng registry
* Ayos: Mga pagpapahusay sa UX ng admin page na Register Domain
* Inalis: Integration ng CyberPanel registrar

Bersyon 1.0.5 - Inilabas noong 2026-04-02
* Bago: Integration ng GoDaddy registrar para sa pagpaparehistro at pamamahala ng domain
* Bago: Integration ng NameSilo registrar
* Bago: Integration ng ResellerClub registrar
* Bago: Awtomatikong i-verify ang domain na nagpapadala ng SES sa pagbili at pagmamapa ng domain
* Ayos: Pinrotektahan ang mga constant ng plugin laban sa muling pagde-define sa test environment
* Ayos: Tama nang nahahati sa salita ang mga flag ng MySQL sa install-wp-tests.sh

Bersyon 1.0.4 - Inilabas noong 2026-03-14
* **Ayos:** Ilang nawawalang css asset
* **Ayos:** Error na may kaugnayan sa mga hindi available na tld

Bersyon 1.0.3 - Inilabas noong 2026-03-09
* **Ayos:** Mga error sa reactive property ng Vue (domain_option, selected_domain, domain_provider) kapag ginagamit ang legacy signup template kasama ang checkout shortcode
* **Ayos:** Maling pagkakahanay ng input field ng subdomain at sobrang laki ng teksto sa field ng pag-checkout para sa pagpili ng domain
* **Ayos:** Itago ang preview block na "Ang iyong URL ay magiging" kapag naroroon ang field ng pagpili ng domain

Bersyon 1.0.2 - Inilabas noong 2026-03-01
* **Pinahusay:** Inalis ang global na mga setting ng markup mula sa settings page — ang pagpepresyo ay eksklusibo na ngayong per-product
* **Pinahusay:** Nagdagdag ng link na "Pamahalaan ang mga Produkto ng Domain" sa settings page para sa mabilis na pag-navigate
* **Pinahusay:** Mas malinaw na mga paglalarawan ng field at tooltip para sa mga setting ng produkto ng domain (catch-all kumpara sa partikular sa TLD, mga uri ng markup, panimulang pagpepresyo)
* **Pinahusay:** Mas magagandang paglalarawan sa buong settings page (paghahanap ng mga TLD, mga pag-renew, DNS, mga notification)

Bersyon 1.0.1 - Inilabas noong 2026-02-27

* **Bago:** TLD import tool para sa maramihang pamamahala ng presyo
* **Bago:** Suporta sa panimulang presyo para sa mga produktong domain
* **Bago:** E2E test suite gamit ang Cypress
* **Bago:** Mga email template para sa mga abiso sa lifecycle ng domain
* **Bago:** Mga field ng address ng registrant sa admin domain registration modal, paunang napunan mula sa settings
* **Bago:** Interface sa pamamahala ng DNS ng customer na may suporta sa pagdagdag, pag-edit, at pagtanggal ng record
* **Bago:** Opsyon sa checkout na "Dalhin ang sarili mong domain" na may awtomatikong domain mapping
* **Bago:** Awtomatikong pagbuo ng URL ng site mula sa pangalan ng domain habang nagche-checkout
* **Bago:** Default na nameserver at configuration ng DNS record sa settings
* **Bago:** Mga detalye ng pagpaparehistro ng domain at pamamahala ng DNS sa pangunahing pahina ng pag-edit ng domain
* **Bago:** Setup wizard na awtomatikong gumagawa ng default na produktong domain na may makatuwirang mga default
* **Bago:** Araw-araw na awtomatikong TLD sync sa pamamagitan ng cron sa lahat ng naka-configure na provider
* **Bago:** Proteksyon sa privacy ng WHOIS na may configuration kada produkto (palaging naka-on, pagpili ng customer, o naka-disable)
* **Bago:** Checkbox ng WHOIS privacy sa checkout na may pagpapakita ng presyo at suporta sa dark mode
* **Bago:** Admin page na Register Domain para sa manu-manong pagpaparehistro ng domain
* **Bago:** Awtomatikong plugin updates sa pamamagitan ng Ultimate Multisite update server
* **Bago:** Tab ng filter para sa uri ng produktong domain sa talahanayan ng listahan ng produkto na may purple badge styling
* **Bago:** Mga field ng contact ng registrant (pangalan, address, lungsod, estado, postal code, bansa, telepono) sa checkout form ng domain
* **Bago:** Pag-validate ng field ng registrant bago tawagin ang registrar API na may malinaw na mga mensahe ng error
* **Bago:** Mga log channel na partikular sa provider para sa mga kaganapan sa pagpaparehistro ng domain (hal. domain-seller-namecheap.log)
* **Bago:** Mga field ng contact ng registrant sa pangunahing registration/signup checkout form (ipinapakita kapag nagpaparehistro ng domain)
* **Pinahusay:** Pinalitan ang checkout field na Domain Search ng pinag-isang field na Domain Selection na sumusuporta sa mga tab para sa subdomain, register, at existing domain
* **Pinahusay:** Ipinapakita nang inline ang settings ng produktong domain sa pahina ng pag-edit ng produkto sa pamamagitan ng core widget system
* **Pinahusay:** Ang impormasyon ng domain ng customer ay nakakabit sa core domain mapping widget sa halip na standalone metabox
* **Pinahusay:** Pinasimple ang TLD import wizard sa one-click sync mula sa lahat ng provider
* **Pinahusay:** Gumagamit ang availability ng Namecheap domain ng batch API call para sa mas mabilis na paghahanap
* **Pinahusay:** Gumagamit ang Namecheap pricing API ng tamang mga parameter at pag-parse ng response
* **Pinahusay:** Sentralisadong imbakan ng TLD sa iisang network option
* **Pinahusay:** Pag-log ng aktibidad ng domain para sa mga pagbabago sa DNS, mga transfer, at paglalapat ng config
* **Pinahusay:** Buong TLD sync para sa OpenSRS gamit ang IANA master list na may batch validation
* **Pinahusay:** Buong TLD sync para sa Namecheap na may paginated API requests
* **Pinahusay:** Pinalitan ang mga lumang provider class ng Integration Registry pattern
* **Pinahusay:** Settings panel na may configuration ng DNS at transfer
* **Pinahusay:** Awtomatikong nafo-format ang mga numero ng telepono sa format ng registrar na +CC.NNN
* **Pinahusay:** Tinatanggal ng validation ng phone field ang mga character sa formatting bago isumite
* **Pinahusay:** Itinaas ang kinakailangang version sa Ultimate Multisite 2.4.12 na may mas malinaw na abiso
* **Pinahusay:** Gumagamit ang CI workflow ng tamang checkout para sa parehong addon at core plugin
* **Pinahusay:** Binabasa ng prepare_registrant_info() ang user meta na na-save sa checkout na may fallback sa billing address
* **Naayos:** Nabibigo ang AJAX ng paghahanap ng domain para sa mga user na hindi naka-log in habang nagche-checkout
* **Naayos:** Nabibigo ang AJAX ng presyo ng domain para sa mga user na hindi naka-log in habang nagche-checkout
* **Naayos:** Fatal error sa redeclaration ng Spyc class kapag nagpapatakbo ng mga WP-CLI command
* **Naayos:** Masyadong maikli ang timeout ng Namecheap sandbox API
* **Naayos:** Hindi nakikita ang text ng button na Select sa paghahanap ng domain sa berdeng background
* **Naayos:** Nabibigo ang pagpaparehistro ng domain dahil sa error na "RegistrantFirstName is Missing" dulot ng nawawalang impormasyon sa contact
* **Naayos:** Nagawa ang domain record na may blog_id=0 kapag hindi pa umiiral ang site sa oras ng checkout
* **Naayos:** Ibinalik ang default TLDs setting bilang string sa halip na parsed array
* **Inalis:** Standalone na admin page na Domain Management — ngayon ay pinangangasiwaan sa pamamagitan ng mga pangunahing pahina ng domain

Version 1.0.0 - Inilabas noong 2025-09-28

**Malaking Pagsulat Muli para sa Ultimate Multisite v2**

* **Bago:** Kumpletong pagsulat muli gamit ang modernong arkitektura ng PHP 7.4+
* **Bago:** Seamless na integrasyon sa checkout system ng Ultimate Multisite v2
* **Bago:** Pamamahala ng produktong domain na may flexible na mga opsyon sa pagpepresyo
* **Bago:** Arkitektura ng suporta para sa maraming domain provider
* **Bago:** Integrasyon ng auto-renewal at subscription
* **Bago:** Interface ng customer para sa pamamahala ng domain
* **Bago:** Pagsubaybay at mga log ng admin domain
* **Bago:** Suporta sa coupon para sa mga produktong domain
* **Bago:** Komprehensibong pamamahala ng settings
* **Bago:** Codebase na extensible at maginhawa para sa developer
* **Pinahusay:** Na-update na OpenSRS provider na may buong suporta sa feature
* **Pinahusay:** Modernong UI na pare-pareho sa Ultimate Multisite v2
* **Naayos:** Lahat ng deprecated na v1 code ay na-update sa mga pamantayan ng v2
* **Inalis:** Legacy v1 compatibility (breaking change)

### Mga Nakaraang Version (v1 Legacy) {#previous-versions-v1-legacy}

### Version 0.0.3 - 20/08/2019 {#version-003---20082019}

* Naayos: Incompatibility sa Groundhogg CRM
* Tala: Ito ang huling release na compatible sa v1

### Version 0.0.2 - 07/12/2018 {#version-002---07122018}

* Naayos: Inalis ang field na License Key
* Naayos: Nawawala ang mga tab ng plan kapag aktibo ang feature plugin
* Pinahusay: Nagdagdag ng skip button sa field ng pagpaparehistro

### Version 0.0.1 - Paunang Release {#version-001---initial-release}

* Pangunahing integrasyon ng OpenSRS para sa WP Ultimo v1
* Simpleng paghahanap at pagpaparehistro ng domain
* Mga pahintulot sa domain na batay sa plan
