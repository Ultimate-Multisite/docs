---
title: Cofnod Newidiadau Gwerthwr Parthau
sidebar_position: 99
_i18n_hash: 6b9be73c1503d8df8a806bb02b241873
---
# Cofnod Newidiadau Domain Seller

Fersiwn 1.3.0 - Rhyddhawyd ar 2026-06-02
- Newydd: Ychwanegwyd rhybudd network-admin pan fydd balans ailwerthwr HostAfrica yn mynd yn rhy isel
- Newydd: Ychwanegwyd mapio awtomatig o barthau newydd eu cofrestru i'r safle rhwydwaith
- Cywiriad: Cymhwyswyd gofynion meysydd cofrestrydd dim ond wrth gofrestru parth newydd
- Cywiriad: Gwnaethpwyd hysbysiadau monitro balans yn rhai y gellir eu cau
- Cywiriad: Sicrhawyd bod manylion bilio cofrestrydd WooCommerce yn cael eu cadw
- Cywiriad: Gorfodwyd gofynion cyswllt cofrestrydd yn ystod cofrestru
- Cywiriad: Ataliwyd cynhyrchion cofrestru parthau rhag cael eu creu gyda marcio i fyny o 0%
- Cywiriad: Cadwyd dewisiadau parthau a phrisiau drwy lif sesiwn talu
- Cywiriad: Gwellwyd dangosiad arian cyfred prisiau parthau HostAfrica
- Cywiriad: Gwellwyd ymddygiad form-action y ddesg dalu i atal anghysondebau query-var WP-core
- Gwellwyd: Cysylltwyd dogfennaeth ffurfweddu ailwerthwr HostAfrica yn y canllawiau gosod

Fersiwn 1.2.0 - Rhyddhawyd ar 2026-05-25
- Newydd: Ychwanegwyd HostAfrica fel integreiddiad gwerthu parthau gyda chymorth ar gyfer desg dalu, dewin gosod, chwilio, TLD/prisio, cofrestru, adnewyddu, trosglwyddo, nameserver, DNS, cod EPP, clo cofrestrydd, a diogelwch ID
- Newydd: Ychwanegwyd Openprovider fel integreiddiad gwerthu parthau gyda chymorth ar gyfer prisio ailwerthwr, cofrestru, adnewyddu, trosglwyddo, nameserver, DNS, cod EPP, clo cofrestrydd, preifatrwydd WHOIS, a chydamseru TLD
- Newydd: Ychwanegwyd Hostinger fel integreiddiad gwerthu parthau gan ddefnyddio'r token API Hostinger a rennir o'r integreiddiad craidd ar gyfer gwiriadau argaeledd, cofrestru, diweddariadau nameserver, clo cofrestrydd, a phreifatrwydd WHOIS
- Gwellwyd: Ychwanegwyd docblocks gweithred a hidlydd cylch oes parth ar gyfer canllawiau integreiddio i ddatblygwyr
- Gwellwyd: Diweddarwyd metadata cydnawsedd plugin i WordPress 7.0 yn readme yr addon
- Gwellwyd: Diweddarwyd templedi cynllunio a ddefnyddir ar gyfer cydlynu rhyddhau sydd ar ddod

Fersiwn 1.1.0 - Rhyddhawyd ar 2026-05-08
- Newydd: Gweithredwyd creu cofnod DNS (add_dns_record) ar gyfer cofrestrwyr ResellerClub, Enom, ac OpenSRS
- Cywiriad: Mae parser Rhagosodedig Cofnodion DNS bellach yn goddef tocynnau {DOMAIN} a {SITE_URL}
- Cywiriad: Slugiau meysydd desg dalu dewis parth wedi'u rhoi mewn namespace i atal gwrthdrawiad â site_url

Fersiwn 1.0.8 - Rhyddhawyd ar 2026-05-07
- Cywiriad: Mae prisio parthau ResellerClub bellach yn nôl prisiau cost byw o'r endpoint API cywir

Fersiwn 1.0.7 - Rhyddhawyd ar 2026-05-06
* Cywiriad: Mae test_connection ResellerClub yn anfon paramedr tlds gofynnol (#224)

Fersiwn 1.0.6 - Rhyddhawyd ar 2026-05-05
* Cywiriad: Mae cofrestru parthau ResellerClub bellach yn gweithio'n gywir gyda thrin ymateb API wedi'i wella a llwybro darparwr a yrrir gan y gofrestrfa
* Cywiriad: Gwelliannau UX i dudalen weinyddol Register Domain
* Tynnwyd: Integreiddiad cofrestrydd CyberPanel

Fersiwn 1.0.5 - Rhyddhawyd ar 2026-04-02
* Newydd: Integreiddiad cofrestrydd GoDaddy ar gyfer cofrestru a rheoli parthau
* Newydd: Integreiddiad cofrestrydd NameSilo
* Newydd: Integreiddiad cofrestrydd ResellerClub
* Newydd: Gwirio'n awtomatig barth anfon SES wrth brynu a mapio parth
* Cywiriad: Gwarchod cysonion plugin rhag ailddiffinio mewn amgylchedd prawf
* Cywiriad: Mae baneri MySQL yn cael eu rhannu'n eiriau'n gywir yn install-wp-tests.sh

Fersiwn 1.0.4 - Rhyddhawyd ar 2026-03-14
* **Cywiriad:** Rhai asedau css ar goll
* **Cywiriad:** Gwall yn ymwneud â tlds nad ydynt ar gael

Fersiwn 1.0.3 - Rhyddhawyd ar 2026-03-09
* **Cywiriad:** Gwallau priodweddau adweithiol Vue (domain_option, selected_domain, domain_provider) wrth ddefnyddio'r templed cofrestru etifeddol gyda'r shortcode desg dalu
* **Cywiriad:** Camaliniad maes mewnbwn is-barth a thestun rhy fawr yn y maes desg dalu dewis parth
* **Cywiriad:** Cuddio'r bloc rhagolwg "Bydd eich URL yn" pan fydd y maes dewis parth yn bresennol

Fersiwn 1.0.2 - Rhyddhawyd ar 2026-03-01
* **Gwellwyd:** Tynnwyd gosodiadau marcio i fyny byd-eang o'r dudalen gosodiadau — mae prisio bellach yn ôl cynnyrch yn unig
* **Gwellwyd:** Ychwanegwyd dolen "Rheoli Cynhyrchion Parth" ar y dudalen gosodiadau ar gyfer llywio cyflym
* **Gwellwyd:** Disgrifiadau meysydd a chynghorion offer cliriach ar gyfer gosodiadau cynnyrch parth (catch-all yn erbyn penodol i TLD, mathau marcio i fyny, prisio rhagarweiniol)
* **Gwellwyd:** Disgrifiadau gwell drwy gydol y dudalen gosodiadau (chwilio TLDs, adnewyddiadau, DNS, hysbysiadau)

Fersiwn 1.0.1 - Rhyddhawyd ar 2026-02-27

* **Newydd:** Offeryn mewnforio TLD ar gyfer rheoli prisiau mewn swmp
* **Newydd:** Cymorth prisio rhagarweiniol ar gyfer cynhyrchion parth
* **Newydd:** Cyfres profion E2E gyda Cypress
* **Newydd:** Templedi e-bost ar gyfer hysbysiadau cylch oes parth
* **Newydd:** Meysydd cyfeiriad cofrestrydd ar foddal cofrestru parth gweinyddol, wedi’u cyn-lenwi o’r gosodiadau
* **Newydd:** Rhyngwyneb rheoli DNS cwsmer gyda chymorth ar gyfer ychwanegu, golygu, a dileu cofnodion
* **Newydd:** Opsiwn talu "dewch â’ch parth eich hun" gyda mapio parth awtomatig
* **Newydd:** Cynhyrchu URL safle yn awtomatig o enw parth yn ystod talu
* **Newydd:** Ffurfweddiad nameserver a chofnod DNS diofyn yn y gosodiadau
* **Newydd:** Manylion cofrestru parth a rheoli DNS ar dudalen olygu parth graidd
* **Newydd:** Dewin gosod yn creu cynnyrch parth diofyn yn awtomatig gyda rhagosodiadau synhwyrol
* **Newydd:** Cysoni TLD awtomatig dyddiol drwy cron ar draws yr holl ddarparwyr wedi’u ffurfweddu
* **Newydd:** Diogelu preifatrwydd WHOIS gyda ffurfweddiad fesul cynnyrch (bob amser ymlaen, dewis y cwsmer, neu wedi’i analluogi)
* **Newydd:** Blwch ticio preifatrwydd WHOIS wrth dalu gydag arddangosfa brisio a chymorth modd tywyll
* **Newydd:** Tudalen weinyddol Cofrestru Parth ar gyfer cofrestru parth â llaw
* **Newydd:** Diweddariadau plugin awtomatig drwy weinydd diweddaru Ultimate Multisite
* **Newydd:** Tab hidlo math cynnyrch parth yn nhabl rhestr cynhyrchion gyda steilio bathodyn porffor
* **Newydd:** Meysydd cyswllt cofrestrydd (enw, cyfeiriad, dinas, talaith, cod post, gwlad, ffôn) ar ffurflen talu parth
* **Newydd:** Dilysu maes cofrestrydd cyn galw API cofrestrydd gyda negeseuon gwall clir
* **Newydd:** Sianeli log penodol i ddarparwr ar gyfer digwyddiadau cofrestru parth (e.e. domain-seller-namecheap.log)
* **Newydd:** Meysydd cyswllt cofrestrydd ar y brif ffurflen cofrestru/ymuno a thalu (a ddangosir wrth gofrestru parth)
* **Gwell:** Disodlwyd maes talu Chwilio Parth â maes Dewis Parth unedig sy’n cefnogi tabiau is-barth, cofrestru, a pharth presennol
* **Gwell:** Gosodiadau cynnyrch parth yn rendro’n fewnol ar dudalen olygu cynnyrch drwy system teclynnau graidd
* **Gwell:** Gwybodaeth parth cwsmer yn cysylltu â theclyn mapio parth graidd yn lle metabox annibynnol
* **Gwell:** Dewin mewnforio TLD wedi’i symleiddio i gysoni un clic o bob darparwr
* **Gwell:** Argaeledd parth Namecheap yn defnyddio galwad API swp ar gyfer chwilio cyflymach
* **Gwell:** API prisio Namecheap yn defnyddio paramedrau cywir a dosrannu ymatebion
* **Gwell:** Storio TLD wedi’i ganoli mewn un opsiwn rhwydwaith
* **Gwell:** Cofnodi gweithgarwch parth ar gyfer newidiadau DNS, trosglwyddiadau, a chymhwyso ffurfweddiad
* **Gwell:** Cysoni TLD llawn ar gyfer OpenSRS gan ddefnyddio prif restr IANA gyda dilysu swp
* **Gwell:** Cysoni TLD llawn ar gyfer Namecheap gyda cheisiadau API wedi’u tudalennu
* **Gwell:** Disodlwyd dosbarthiadau darparwr etifeddol â phatrwm Integration Registry
* **Gwell:** Panel gosodiadau gyda ffurfweddiad DNS a throsglwyddo
* **Gwell:** Rhifau ffôn wedi’u fformatio’n awtomatig i fformat cofrestrydd +CC.NNN
* **Gwell:** Dilysu maes ffôn yn tynnu nodau fformatio cyn cyflwyno
* **Gwell:** Gofyniad fersiwn wedi’i godi i Ultimate Multisite 2.4.12 gyda hysbysiad cliriach
* **Gwell:** Llif gwaith CI yn defnyddio checkout priodol ar gyfer addon a’r plugin craidd
* **Gwell:** prepare_registrant_info() yn darllen o feta defnyddiwr a gadwyd wrth dalu gyda chyfeiriad bilio wrth gefn
* **Wedi’i drwsio:** AJAX chwilio parth yn methu ar gyfer defnyddwyr heb fewngofnodi yn ystod talu
* **Wedi’i drwsio:** AJAX prisio parth yn methu ar gyfer defnyddwyr heb fewngofnodi yn ystod talu
* **Wedi’i drwsio:** Gwall angheuol ailddatgan dosbarth Spyc wrth redeg gorchmynion WP-CLI
* **Wedi’i drwsio:** Terfyn amser API blwch tywod Namecheap yn rhy fyr
* **Wedi’i drwsio:** Testun botwm Dewis chwilio parth ddim yn weladwy ar gefndir gwyrdd
* **Wedi’i drwsio:** Cofrestru parth yn methu gyda gwall "RegistrantFirstName is Missing" oherwydd gwybodaeth gyswllt ar goll
* **Wedi’i drwsio:** Cofnod parth wedi’i greu gyda blog_id=0 pan nad oedd y safle’n bodoli eto adeg talu
* **Wedi’i drwsio:** Gosodiad TLDs diofyn yn dychwelyd fel llinyn yn lle arae wedi’i dosrannu
* **Wedi’i dynnu:** Tudalen weinyddol Rheoli Parth annibynnol — bellach yn cael ei thrin drwy dudalennau parth craidd

Fersiwn 1.0.0 - Rhyddhawyd ar 2025-09-28

**Ailysgrifennu Mawr ar gyfer Ultimate Multisite v2**

* **Newydd:** Ailysgrifennu cyflawn gyda phensaernïaeth fodern PHP 7.4+
* **Newydd:** Integreiddio di-dor â system dalu Ultimate Multisite v2
* **Newydd:** Rheoli cynhyrchion parth gydag opsiynau prisio hyblyg
* **Newydd:** Pensaernïaeth cymorth ar gyfer sawl darparwr parth
* **Newydd:** Integreiddio adnewyddu awtomatig a thanysgrifiadau
* **Newydd:** Rhyngwyneb rheoli parth cwsmer
* **Newydd:** Monitro parthau gweinyddol a logiau
* **Newydd:** Cymorth cwponau ar gyfer cynhyrchion parth
* **Newydd:** Rheoli gosodiadau cynhwysfawr
* **Newydd:** Codfa estynadwy sy’n gyfeillgar i ddatblygwyr
* **Gwell:** Darparwr OpenSRS wedi’i ddiweddaru gyda chymorth nodweddion llawn
* **Gwell:** UI modern sy’n gyson ag Ultimate Multisite v2
* **Wedi’i drwsio:** Pob cod v1 anghymeradwy wedi’i ddiweddaru i safonau v2
* **Wedi’i dynnu:** Cydnawsedd v1 etifeddol (newid sy’n torri cydnawsedd)

### Fersiynau Blaenorol (v1 Etifeddol) {#previous-versions-v1-legacy}

### Fersiwn 0.0.3 - 20/08/2019 {#version-003---20082019}

* Wedi’i drwsio: Anghydnawsedd â Groundhogg CRM
* Nodyn: Hwn oedd y datganiad olaf a oedd yn gydnaws â v1

### Fersiwn 0.0.2 - 07/12/2018 {#version-002---07122018}

* Wedi’i drwsio: Tynnwyd y maes License Key
* Wedi’i drwsio: Tabiau cynllun ar goll pan fo’r plugin nodwedd yn weithredol
* Gwell: Ychwanegwyd botwm hepgor ar y maes cofrestru

### Fersiwn 0.0.1 - Datganiad Cychwynnol {#version-001---initial-release}

* Integreiddio OpenSRS sylfaenol ar gyfer WP Ultimo v1
* Chwilio a chofrestru parth syml
* Caniatâdau parth yn seiliedig ar gynllun
