---
title: Talaan ng mga Pagbabago ng Nagbebenta ng Domain
sidebar_position: 99
_i18n_hash: 6b9be73c1503d8df8a806bb02b241873
---
# Tala ng Pagbabago ng Domain Seller

Bersyon 1.3.0 - Inilabas noong 2026-06-02
- Bago: Nagdagdag ng babala sa network-admin kapag masyadong mababa na ang balanse ng reseller ng HostAfrica
- Bago: Nagdagdag ng awtomatikong pagmamapa ng mga bagong rehistradong domain sa sityo ng network
- Ayos: Inilapat ang mga kinakailangan sa field ng registrant lamang kapag nagrerehistro ng bagong domain
- Ayos: Ginawang maaaring i-dismiss ang mga abiso sa pagsubaybay ng balanse
- Ayos: Tiniyak na napapanatili ang mga detalye sa pagsingil ng WooCommerce registrant
- Ayos: Ipinatupad ang mga kinakailangan sa contact ng registrant habang nagrerehistro
- Ayos: Pinigilan ang mga produkto ng pagpaparehistro ng domain na magawa nang may 0% markup
- Ayos: Pinanatili ang mga pagpili ng domain at pagpepresyo sa daloy ng checkout session
- Ayos: Pinahusay ang pagpapakita ng currency ng pagpepresyo ng domain ng HostAfrica
- Ayos: Pinahusay ang gawi ng form-action ng checkout upang maiwasan ang mga hindi pagtutugma sa WP-core query-var
- Pinahusay: Ini-link ang dokumentasyon ng configuration ng HostAfrica reseller sa gabay sa setup

Bersyon 1.2.0 - Inilabas noong 2026-05-25
- Bago: Idinagdag ang HostAfrica bilang integration sa pagbebenta ng domain na may suporta para sa checkout, setup wizard, lookup, TLD/pagpepresyo, pagpaparehistro, pag-renew, transfer, nameserver, DNS, EPP code, registrar lock, at ID protection
- Bago: Idinagdag ang Openprovider bilang integration sa pagbebenta ng domain na may suporta para sa pagpepresyo ng reseller, pagpaparehistro, pag-renew, transfer, nameserver, DNS, EPP code, registrar lock, WHOIS privacy, at TLD sync
- Bago: Idinagdag ang Hostinger bilang integration sa pagbebenta ng domain gamit ang shared Hostinger API token mula sa core integration para sa mga availability check, pagpaparehistro, mga update sa nameserver, registrar lock, at WHOIS privacy
- Pinahusay: Nagdagdag ng mga docblock para sa action at filter ng lifecycle ng domain para sa gabay sa integration ng developer
- Pinahusay: In-update ang metadata ng compatibility ng plugin sa WordPress 7.0 sa readme ng addon
- Pinahusay: In-update ang mga template ng pagpaplano na ginagamit para sa koordinasyon ng paparating na release

Bersyon 1.1.0 - Inilabas noong 2026-05-08
- Bago: Ipinatupad ang paggawa ng DNS record (add_dns_record) para sa mga registrar na ResellerClub, Enom, at OpenSRS
- Ayos: Tinatanggap na ngayon ng default na parser ng DNS Records ang mga token na {DOMAIN} at {SITE_URL}
- Ayos: Ni-namespace ang mga slug ng checkout field ng pagpili ng domain upang maiwasan ang banggaan sa site_url

Bersyon 1.0.8 - Inilabas noong 2026-05-07
- Ayos: Kinukuha na ngayon ng pagpepresyo ng domain ng ResellerClub ang mga live na presyo ng gastos mula sa tamang API endpoint

Bersyon 1.0.7 - Inilabas noong 2026-05-06
* Ayos: Nagpapadala ang ResellerClub test_connection ng kinakailangang parameter na tlds (#224)

Bersyon 1.0.6 - Inilabas noong 2026-05-05
* Ayos: Gumagana na ngayon nang tama ang pagpaparehistro ng domain ng ResellerClub na may pinahusay na paghawak sa tugon ng API at routing ng provider na pinapatakbo ng registry
* Ayos: Mga pagpapahusay sa UX ng admin page ng Register Domain
* Inalis: Integration ng CyberPanel registrar

Bersyon 1.0.5 - Inilabas noong 2026-04-02
* Bago: Integration ng GoDaddy registrar para sa pagpaparehistro at pamamahala ng domain
* Bago: Integration ng NameSilo registrar
* Bago: Integration ng ResellerClub registrar
* Bago: Awtomatikong i-verify ang SES sending domain sa pagbili at pagmamapa ng domain
* Ayos: Binantayan ang mga constant ng plugin laban sa muling pagdeklara sa test environment
* Ayos: Tamang na-word-split ang mga flag ng MySQL sa install-wp-tests.sh

Bersyon 1.0.4 - Inilabas noong 2026-03-14
* **Ayos:** Ilang nawawalang css asset
* **Ayos:** Error na may kaugnayan sa hindi available na mga tld

Bersyon 1.0.3 - Inilabas noong 2026-03-09
* **Ayos:** Mga error sa Vue reactive property (domain_option, selected_domain, domain_provider) kapag ginagamit ang legacy signup template kasama ang checkout shortcode
* **Ayos:** Hindi pagkakapantay ng subdomain input field at sobrang laking teksto sa checkout field ng pagpili ng domain
* **Ayos:** Itago ang preview block na "Ang iyong URL ay magiging" kapag naroroon ang field ng pagpili ng domain

Bersyon 1.0.2 - Inilabas noong 2026-03-01
* **Pinahusay:** Inalis ang global na mga setting ng markup mula sa settings page — ang pagpepresyo ay eksklusibo na ngayon kada produkto
* **Pinahusay:** Nagdagdag ng link na "Pamahalaan ang Mga Produkto ng Domain" sa settings page para sa mabilis na pag-navigate
* **Pinahusay:** Mas malinaw na mga paglalarawan ng field at tooltip para sa mga setting ng produkto ng domain (catch-all kumpara sa TLD-specific, mga uri ng markup, panimulang pagpepresyo)
* **Pinahusay:** Mas magagandang paglalarawan sa buong settings page (paghahanap ng mga TLD, mga pag-renew, DNS, mga notification)

Bersyon 1.0.1 - Inilabas noong 2026-02-27

* **Bago:** TLD import tool para sa maramihang pamamahala ng pagpepresyo
* **Bago:** Suporta sa panimulang pagpepresyo para sa mga produktong domain
* **Bago:** E2E test suite gamit ang Cypress
* **Bago:** Mga template ng email para sa mga notification ng lifecycle ng domain
* **Bago:** Mga field ng address ng registrant sa admin modal ng pagpaparehistro ng domain, paunang napunan mula sa settings
* **Bago:** Interface ng pamamahala ng DNS ng customer na may suporta sa pagdagdag, pag-edit, at pagbura ng record
* **Bago:** Opsyon sa checkout na "Dalhin ang sarili mong domain" na may awtomatikong pagmamapa ng domain
* **Bago:** Awtomatikong pagbuo ng URL ng site mula sa pangalan ng domain habang nagche-checkout
* **Bago:** Default na nameserver at configuration ng DNS record sa settings
* **Bago:** Mga detalye ng pagpaparehistro ng domain at pamamahala ng DNS sa pangunahing pahina ng pag-edit ng domain
* **Bago:** Awtomatikong lumilikha ang setup wizard ng default na produktong domain na may makatuwirang mga default
* **Bago:** Pang-araw-araw na awtomatikong pag-sync ng TLD sa pamamagitan ng cron sa lahat ng naka-configure na provider
* **Bago:** Proteksyon sa privacy ng WHOIS na may configuration bawat produkto (palaging naka-on, pagpili ng customer, o naka-disable)
* **Bago:** Checkbox ng checkout para sa privacy ng WHOIS na may display ng pagpepresyo at suporta sa dark mode
* **Bago:** Admin page na Register Domain para sa manu-manong pagpaparehistro ng domain
* **Bago:** Mga awtomatikong update ng plugin sa pamamagitan ng update server ng Ultimate Multisite
* **Bago:** Tab ng filter ng uri ng produktong domain sa talahanayan ng listahan ng produkto na may estilong purple badge
* **Bago:** Mga field ng contact ng registrant (pangalan, address, lungsod, estado, postal code, bansa, telepono) sa form ng checkout ng domain
* **Bago:** Pag-validate ng field ng registrant bago tawagin ang registrar API na may malinaw na mga mensahe ng error
* **Bago:** Mga log channel na partikular sa provider para sa mga event ng pagpaparehistro ng domain (hal. domain-seller-namecheap.log)
* **Bago:** Mga field ng contact ng registrant sa pangunahing form ng registration/signup checkout (ipinapakita kapag nagrerehistro ng domain)
* **Pinahusay:** Pinalitan ang field na Domain Search sa checkout ng pinag-isang field na Domain Selection na sumusuporta sa mga tab na subdomain, register, at umiiral na domain
* **Pinahusay:** Ang settings ng produktong domain ay nagre-render inline sa pahina ng pag-edit ng produkto sa pamamagitan ng pangunahing widget system
* **Pinahusay:** Ang impormasyon ng domain ng customer ay kumakabit sa pangunahing domain mapping widget sa halip na standalone na metabox
* **Pinahusay:** Pinasimple ang TLD import wizard sa one-click sync mula sa lahat ng provider
* **Pinahusay:** Gumagamit ang availability ng domain ng Namecheap ng batch API call para sa mas mabilis na paghahanap
* **Pinahusay:** Gumagamit ang pricing API ng Namecheap ng tamang mga parameter at pag-parse ng response
* **Pinahusay:** Sentralisadong imbakan ng TLD sa iisang network option
* **Pinahusay:** Pag-log ng aktibidad ng domain para sa mga pagbabago sa DNS, transfer, at paglalapat ng config
* **Pinahusay:** Buong pag-sync ng TLD para sa OpenSRS gamit ang IANA master list na may batch validation
* **Pinahusay:** Buong pag-sync ng TLD para sa Namecheap na may paginated API requests
* **Pinahusay:** Pinalitan ang mga legacy provider class ng pattern na Integration Registry
* **Pinahusay:** Panel ng settings na may configuration ng DNS at transfer
* **Pinahusay:** Awtomatikong na-format ang mga numero ng telepono sa format ng registrar na +CC.NNN
* **Pinahusay:** Tinatanggal ng validation ng phone field ang mga character ng formatting bago isumite
* **Pinahusay:** Itinaas ang kinakailangang bersyon sa Ultimate Multisite 2.4.12 na may mas malinaw na abiso
* **Pinahusay:** Gumagamit ang CI workflow ng wastong checkout para sa parehong addon at core plugin
* **Pinahusay:** Binabasa ng prepare_registrant_info() mula sa user meta na naka-save sa checkout na may fallback sa billing address
* **Naayos:** Nabibigo ang AJAX ng paghahanap ng domain para sa mga user na hindi naka-log in habang nagche-checkout
* **Naayos:** Nabibigo ang AJAX ng pagpepresyo ng domain para sa mga user na hindi naka-log in habang nagche-checkout
* **Naayos:** Fatal error sa muling deklarasyon ng Spyc class kapag nagpapatakbo ng mga WP-CLI command
* **Naayos:** Masyadong maikli ang timeout ng Namecheap sandbox API
* **Naayos:** Hindi nakikita ang text ng Select button sa paghahanap ng domain sa berdeng background
* **Naayos:** Nabibigo ang pagpaparehistro ng domain dahil sa error na "RegistrantFirstName is Missing" sanhi ng nawawalang impormasyon sa contact
* **Naayos:** Nilikha ang domain record na may blog_id=0 kapag hindi pa umiiral ang site sa oras ng checkout
* **Naayos:** Ibinalik ang setting ng default na TLDs bilang string sa halip na parsed array
* **Inalis:** Standalone na admin page ng Domain Management — pinangangasiwaan na ngayon sa pamamagitan ng mga pangunahing pahina ng domain

Bersyon 1.0.0 - Inilabas noong 2025-09-28

**Malaking Muling Pagsulat para sa Ultimate Multisite v2**

* **Bago:** Kumpletong muling pagsulat gamit ang modernong arkitekturang PHP 7.4+
* **Bago:** Seamless na integrasyon sa checkout system ng Ultimate Multisite v2
* **Bago:** Pamamahala ng produktong domain na may nababagong mga opsyon sa pagpepresyo
* **Bago:** Arkitektura ng suporta para sa maraming domain provider
* **Bago:** Integrasyon ng auto-renewal at subscription
* **Bago:** Interface ng pamamahala ng domain ng customer
* **Bago:** Pagsubaybay at logs ng admin sa domain
* **Bago:** Suporta sa coupon para sa mga produktong domain
* **Bago:** Komprehensibong pamamahala ng settings
* **Bago:** Extensible na codebase na friendly sa developer
* **Pinahusay:** Na-update na OpenSRS provider na may buong suporta sa feature
* **Pinahusay:** Modernong UI na naaayon sa Ultimate Multisite v2
* **Naayos:** Lahat ng deprecated na v1 code ay na-update sa mga pamantayan ng v2
* **Inalis:** Legacy na compatibility sa v1 (breaking change)

### Mga Nakaraang Bersyon (v1 Legacy)

### Bersyon 0.0.3 - 20/08/2019

* Naayos: Incompatibility sa Groundhogg CRM
* Tala: Ito ang huling release na compatible sa v1

### Bersyon 0.0.2 - 07/12/2018

* Naayos: Inalis ang field na License Key
* Naayos: Nawawala ang mga tab ng plan kapag aktibo ang feature plugin
* Pinahusay: Nagdagdag ng skip button sa registration field

### Bersyon 0.0.1 - Paunang Release

* Pangunahing integrasyon ng OpenSRS para sa WP Ultimo v1
* Simpleng paghahanap at pagpaparehistro ng domain
* Mga permiso sa domain batay sa plan
