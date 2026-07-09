---
title: Loga atharrachaidhean Neach-reic Àrainnean
sidebar_position: 99
_i18n_hash: 6b9be73c1503d8df8a806bb02b241873
---
# Loga Atharrachaidhean Neach-reic Àrainnean {#domain-seller-changelog}

Tionndadh 1.3.0 - Air fhoillseachadh air 2026-06-02
- Ùr: Chaidh rabhadh network-admin a chur ris nuair a dh’fhàsas cothromachadh ath-reiceadair HostAfrica ro ìosal
- Ùr: Chaidh mapadh fèin-obrachail de dh’àrainnean a chaidh a chlàradh o chionn ghoirid ris an làrach lìonraidh a chur ris
- Ceartachadh: Chaidh riatanasan raointean neach-clàraidh a chur an sàs a-mhàin nuair a thathar a’ clàradh àrainn ùr
- Ceartachadh: Chaidh brathan cothromachaidh sgrùdaidh a dhèanamh comasach an dùnadh
- Ceartachadh: Chaidh dèanamh cinnteach gu bheil mion-fhiosrachadh bileachaidh neach-clàraidh WooCommerce air a ghleidheadh
- Ceartachadh: Chaidh riatanasan conaltraidh neach-clàraidh a chur an gnìomh rè clàraidh
- Ceartachadh: Chaidh casg a chur air toraidhean clàraidh àrainnean a bhith air an cruthachadh le comharrachadh 0%
- Ceartachadh: Chaidh taghaidhean àrainnean agus prìsean a ghleidheadh tro shruth seisean checkout
- Ceartachadh: Chaidh taisbeanadh airgeadra prìsean àrainnean HostAfrica a leasachadh
- Ceartachadh: Chaidh giùlan form-action checkout a leasachadh gus mì-fhreagarrachd query-var WP-core a sheachnadh
- Leasaichte: Chaidh sgrìobhainnean rèiteachaidh ath-reiceadair HostAfrica a cheangal ann an stiùireadh rèiteachaidh

Tionndadh 1.2.0 - Air fhoillseachadh air 2026-05-25
- Ùr: Chaidh HostAfrica a chur ris mar amalachadh reic àrainnean le taic do checkout, draoidh rèiteachaidh, lorg, TLD/prìsean, clàradh, ùrachadh, gluasad, nameserver, DNS, còd EPP, glas registrar, agus dìon ID
- Ùr: Chaidh Openprovider a chur ris mar amalachadh reic àrainnean le taic do phrìsean ath-reiceadair, clàradh, ùrachadh, gluasad, nameserver, DNS, còd EPP, glas registrar, prìobhaideachd WHOIS, agus sioncronachadh TLD
- Ùr: Chaidh Hostinger a chur ris mar amalachadh reic àrainnean a’ cleachdadh an token Hostinger API co-roinnte bhon phrìomh amalachadh airson sgrùdaidhean ri fhaotainn, clàradh, ùrachaidhean nameserver, glas registrar, agus prìobhaideachd WHOIS
- Leasaichte: Chaidh gnìomh cuairt-beatha àrainn agus docblocks sìoltachain a chur ris airson stiùireadh amalachaidh luchd-leasachaidh
- Leasaichte: Chaidh metadata co-chòrdalachd plugin ùrachadh gu WordPress 7.0 ann an readme an addon
- Leasaichte: Chaidh teamplaidean planaidh ùrachadh a thathar a’ cleachdadh airson co-òrdanachadh fhoillseachaidhean ri thighinn

Tionndadh 1.1.0 - Air fhoillseachadh air 2026-05-08
- Ùr: Chaidh cruthachadh chlàran DNS (add_dns_record) a bhuileachadh airson registrars ResellerClub, Enom, agus OpenSRS
- Ceartachadh: Tha parser nan Clàran DNS Bunaiteach a-nis a’ fulang tokens {DOMAIN} agus {SITE_URL}
- Ceartachadh: Chaidh slugs raointean checkout taghadh àrainn a chur fo namespace gus casg a chur air bualadh ri site_url

Tionndadh 1.0.8 - Air fhoillseachadh air 2026-05-07
- Ceartachadh: Tha prìsean àrainnean ResellerClub a-nis a’ faighinn prìsean cosgais beò bhon endpoint API cheart

Tionndadh 1.0.7 - Air fhoillseachadh air 2026-05-06
* Ceartachadh: Bidh ResellerClub test_connection a’ cur a’ pharamadair tlds riatanach (#224)

Tionndadh 1.0.6 - Air fhoillseachadh air 2026-05-05
* Ceartachadh: Tha clàradh àrainnean ResellerClub a-nis ag obair gu ceart le làimhseachadh freagairt API leasaichte agus sligheachadh provider air a stiùireadh leis a’ registry
* Ceartachadh: Leasachaidhean UX air duilleag admin Register Domain
* Air a thoirt air falbh: Amalachadh registrar CyberPanel

Tionndadh 1.0.5 - Air fhoillseachadh air 2026-04-02
* Ùr: Amalachadh registrar GoDaddy airson clàradh is stiùireadh àrainnean
* Ùr: Amalachadh registrar NameSilo
* Ùr: Amalachadh registrar ResellerClub
* Ùr: Fèin-dhearbhadh àrainn cur SES nuair a cheannaichear is a mhapadh àrainn
* Ceartachadh: Dìon seasmhachan plugin an aghaidh ath-mhìneachaidh ann an àrainneachd deuchainn
* Ceartachadh: Bidh brataichean MySQL air an sgaradh nam faclan gu ceart ann an install-wp-tests.sh

Tionndadh 1.0.4 - Air fhoillseachadh air 2026-03-14
* **Ceartachadh:** Cuid de mhaoin css a bha a dhìth
* **Ceartachadh:** Mearachd co-cheangailte ri tlds nach eil ri fhaighinn

Tionndadh 1.0.3 - Air fhoillseachadh air 2026-03-09
* **Ceartachadh:** Mearachdan property reactive Vue (domain_option, selected_domain, domain_provider) nuair a thathar a’ cleachdadh teamplaid signup dhìleabach leis an shortcode checkout
* **Ceartachadh:** Mì-cho-thaobhadh raon cuir a-steach subdomain agus teacsa ro mhòr ann an raon checkout taghadh àrainn
* **Ceartachadh:** Falaich am bloc ro-sheallaidh "Bidh an URL agad" nuair a tha raon taghadh àrainn an làthair

Tionndadh 1.0.2 - Air fhoillseachadh air 2026-03-01
* **Leasaichte:** Chaidh roghainnean comharrachaidh cruinneil a thoirt air falbh bho dhuilleag nan roghainnean — tha prìsean a-nis a-mhàin gach toradh
* **Leasaichte:** Chaidh ceangal "Stiùirich Toraidhean Àrainnean" a chur ri duilleag nan roghainnean airson seòladh luath
* **Leasaichte:** Tuairisgeulan raointean agus tooltips nas soilleire airson roghainnean toraidh àrainn (catch-all vs sònraichte do TLD, seòrsaichean comharrachaidh, prìsean tòiseachaidh)
* **Leasaichte:** Tuairisgeulan nas fheàrr air feadh duilleag nan roghainnean (lorg TLDs, ùrachaidhean, DNS, brathan)

Tionndadh 1.0.1 - Air fhoillseachadh air 2026-02-27

* **Ùr:** Inneal ion-phortaidh TLD airson stiùireadh phrìsean ann am mòr-mheud
* **Ùr:** Taic do phrìsean tòiseachaidh airson batharan àrainnean
* **Ùr:** Sreath dheuchainnean E2E le Cypress
* **Ùr:** Teamplaidean post-d airson fiosan cearcall-beatha àrainnean
* **Ùr:** Raointean seòladh clàraiche air modal clàraidh àrainn an rianaire, air an ro-lìonadh bho na roghainnean
* **Ùr:** Eadar-aghaidh stiùireadh DNS do luchd-ceannach le taic airson clàran a chur ris, a dheasachadh agus a sguabadh às
* **Ùr:** Roghainn checkout “Thoir leat an àrainn agad fhèin” le mapadh àrainn fèin-obrachail
* **Ùr:** Cruthaich URL làraich gu fèin-obrachail bho ainm àrainn rè checkout
* **Ùr:** Rèiteachadh nameserver bunaiteach agus clàr DNS anns na roghainnean
* **Ùr:** Mion-fhiosrachadh clàraidh àrainn agus stiùireadh DNS air prìomh dhuilleag deasachaidh àrainn
* **Ùr:** Bidh draoidh-rèiteachaidh a’ cruthachadh bathar àrainn bunaiteach gu fèin-obrachail le roghainnean ciallach
* **Ùr:** Sioncronachadh TLD fèin-obrachail làitheil tro cron thar gach solaraiche rèitichte
* **Ùr:** Dìon prìobhaideachd WHOIS le rèiteachadh a rèir bathair (an-còmhnaidh air, roghainn an neach-ceannach, no à comas)
* **Ùr:** Bogsa-sgrùdaidh prìobhaideachd WHOIS aig checkout le taisbeanadh phrìsean agus taic do mhodh dorcha
* **Ùr:** Duilleag rianaire Register Domain airson clàradh àrainn le làimh
* **Ùr:** Ùrachaidhean plugin fèin-obrachail tro fhrithealaiche ùrachaidh Ultimate Multisite
* **Ùr:** Taba sìoltachain seòrsa bathair àrainn ann an clàr liosta nam bathar le stoidhle bràiste purpaidh
* **Ùr:** Raointean conaltraidh clàraiche (ainm, seòladh, baile, stàit, còd-puist, dùthaich, fòn) air foirm checkout àrainn
* **Ùr:** Dearbhadh raointean clàraiche mus gairmear API a’ chlàraiche le teachdaireachdan mearachd soilleir
* **Ùr:** Seanalan loga sònraichte do sholaraiche airson tachartasan clàraidh àrainn (m.e. domain-seller-namecheap.log)
* **Ùr:** Raointean conaltraidh clàraiche air prìomh fhoirm checkout clàraidh/soidhnidh suas (air an sealltainn nuair a thathar a’ clàradh àrainn)
* **Leasaichte:** Chaidh raon checkout Domain Search a chur na àite le raon aonaichte Taghadh Àrainn a’ toirt taic do thabaichean fo-àrainn, clàraich, agus àrainn a tha ann mu thràth
* **Leasaichte:** Bidh roghainnean bathair àrainn gan render inline air duilleag deasachaidh bathair tro phrìomh shiostam widget
* **Leasaichte:** Bidh fiosrachadh àrainn luchd-ceannach a’ ceangal ri prìomh widget mapadh àrainn an àite metabox fa leth
* **Leasaichte:** Chaidh draoidh ion-phortaidh TLD a dhèanamh nas sìmplidhe gu sioncronachadh aon-bhriogadh bho gach solaraiche
* **Leasaichte:** Bidh ruigsinneachd àrainn Namecheap a’ cleachdadh gairm API baidse airson rannsachadh nas luaithe
* **Leasaichte:** Bidh API phrìsean Namecheap a’ cleachdadh pharamadairean ceart agus parsadh freagairt
* **Leasaichte:** Stòradh TLD meadhanaichte ann an aon roghainn lìonra
* **Leasaichte:** Logadh gnìomhachd àrainn airson atharrachaidhean DNS, tar-chuiridhean, agus cur an sàs rèiteachaidh
* **Leasaichte:** Sioncronachadh TLD slàn airson OpenSRS a’ cleachdadh prìomh liosta IANA le dearbhadh baidse
* **Leasaichte:** Sioncronachadh TLD slàn airson Namecheap le iarrtasan API le duilleagachadh
* **Leasaichte:** Chaidh clasaichean solaraiche dìleab a chur nan àite le pàtran Integration Registry
* **Leasaichte:** Pannal roghainnean le rèiteachadh DNS agus tar-chuir
* **Leasaichte:** Àireamhan fòn air an fòrmatadh gu fèin-obrachail gu fòrmat clàraiche +CC.NNN
* **Leasaichte:** Bidh dearbhadh raon fòn a’ toirt air falbh caractaran fòrmataidh mus tèid a chur a-steach
* **Leasaichte:** Riatanas tionndaidh air àrdachadh gu Ultimate Multisite 2.4.12 le fios nas soilleire
* **Leasaichte:** Bidh sruth-obrach CI a’ cleachdadh checkout ceart airson an dà chuid addon agus prìomh plugin
* **Leasaichte:** Bidh prepare_registrant_info() a’ leughadh bho meta cleachdaiche a chaidh a shàbhaladh aig checkout le tuiteam-air-ais gu seòladh bileachaidh
* **Ceartaichte:** AJAX rannsachadh àrainn a’ fàiligeadh do luchd-cleachdaidh nach eil air logadh a-steach rè checkout
* **Ceartaichte:** AJAX phrìsean àrainn a’ fàiligeadh do luchd-cleachdaidh nach eil air logadh a-steach rè checkout
* **Ceartaichte:** Mearachd mharbhtach ath-fhoillseachadh clas Spyc nuair a thathar a’ ruith òrdughan WP-CLI
* **Ceartaichte:** Ùine-feitheimh API sandbox Namecheap ro ghoirid
* **Ceartaichte:** Teacsa putan Tagh ann an rannsachadh àrainn nach robh ri fhaicinn air cùl-raon uaine
* **Ceartaichte:** Clàradh àrainn a’ fàiligeadh le mearachd “RegistrantFirstName is Missing” air sgàth fiosrachadh conaltraidh a dhìth
* **Ceartaichte:** Clàr àrainn air a chruthachadh le blog_id=0 nuair nach robh an làrach ann fhathast aig àm checkout
* **Ceartaichte:** Roghainn TLDs bunaiteach air a thilleadh mar shreang an àite array parseichte
* **Air a thoirt air falbh:** Duilleag rianaire Stiùireadh Àrainn fa leth — a-nis air a làimhseachadh tro phrìomh dhuilleagan àrainn

Tionndadh 1.0.0 - Air fhoillseachadh air 2025-09-28

**Ath-sgrìobhadh mòr airson Ultimate Multisite v2**

* **Ùr:** Ath-sgrìobhadh iomlan le ailtireachd PHP 7.4+ ùr-nodha
* **Ùr:** Amalachadh rèidh le siostam checkout Ultimate Multisite v2
* **Ùr:** Stiùireadh bathair àrainn le roghainnean phrìsean sùbailte
* **Ùr:** Ailtireachd taic do dh’iomadh solaraiche àrainn
* **Ùr:** Amalachadh ùrachaidh fèin-obrachail agus subscription
* **Ùr:** Eadar-aghaidh stiùireadh àrainn do luchd-ceannach
* **Ùr:** Sgrùdadh agus logaichean àrainn rianaire
* **Ùr:** Taic coupon airson batharan àrainn
* **Ùr:** Stiùireadh roghainnean coileanta
* **Ùr:** Codebase leudachail càirdeil do luchd-leasachaidh
* **Leasaichte:** Solaraiche OpenSRS air ùrachadh le taic làn-fheartan
* **Leasaichte:** UI ùr-nodha co-chòrdail ri Ultimate Multisite v2
* **Ceartaichte:** A h-uile còd v1 seann-fhasanta air ùrachadh gu inbhean v2
* **Air a thoirt air falbh:** Co-chòrdalachd v1 dìleab (atharrachadh brisidh)

### Tionndaidhean Roimhe (Dìleab v1) {#previous-versions-v1-legacy}

### Tionndadh 0.0.3 - 20/08/2019 {#version-003---20082019}

* Ceartaichte: Neo-chòrdalachd le Groundhogg CRM
* Nota: B’ e seo an sgaoileadh mu dheireadh a bha co-chòrdail ri v1

### Tionndadh 0.0.2 - 07/12/2018 {#version-002---07122018}

* Ceartaichte: Chaidh raon License Key a thoirt air falbh
* Ceartaichte: Tabaichean plan a dhìth nuair a tha plugin an fheart gnìomhach
* Leasaichte: Chaidh putan leum seachad a chur ris an raon clàraidh

### Tionndadh 0.0.1 - Sgaoileadh Tùsail {#version-001---initial-release}

* Amalachadh bunaiteach OpenSRS airson WP Ultimo v1
* Rannsachadh agus clàradh àrainn sìmplidh
* Ceadan àrainn stèidhichte air plan
