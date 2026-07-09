---
title: Tlaleho ya Diphetoho ya Morekisi wa Domain
sidebar_position: 99
_i18n_hash: 6b9be73c1503d8df8a806bb02b241873
---
# Lenane la Diphetoho la Morekisi wa Domeine {#domain-seller-changelog}

Mofuta 1.3.0 - E lokollotswe ka 2026-06-02
- E ncha: Ho kentswe temoso ya network-admin ha balanse ya morekisi wa HostAfrica e theoha haholo
- E ncha: Ho kentswe ho hokahanya ka boiketsetso ha didomeine tse sa tswa ngodiswa le sebaka sa marangrang
- Tokiso: Ditlhoko tsa masimo a mongodisi di sebedisitswe feela ha ho ngodiswa domeine e ntjha
- Tokiso: Ditsebiso tsa ho lekola balanse di entswe hore di kgone ho hlakolwa
- Tokiso: Ho netefaditswe hore dintlha tsa tefiso tsa mongodisi wa WooCommerce di bolokwa
- Tokiso: Ho qobelletswe ditlhoko tsa kgokahano ya mongodisi nakong ya ngodiso
- Tokiso: Ho thibetswe hore dihlahiswa tsa ngodiso ya domeine di se ke tsa thehwa ka phaello ya 0%
- Tokiso: Ho bolokilwe dikgetho tsa domeine le ditheko nakong ya phallo ya seshene ya tefo
- Tokiso: Ho ntlafaditswe pontsho ya tjhelete ya ditheko tsa domeine tsa HostAfrica
- Tokiso: Ho ntlafaditswe boitshwaro ba form-action ya tefo ho thibela ho se tshwane ha query-var ya WP-core
- E ntlafaditswe: Ho hoketswe ditokomane tsa tlhophiso ya morekisi wa HostAfrica tataisong ya ho seta

Mofuta 1.2.0 - E lokollotswe ka 2026-05-25
- E ncha: Ho kentswe HostAfrica jwalo ka kopanyo ya ho rekisa didomeine e nang le tshehetso ya tefo, wizard ya ho seta, patlo, TLD/ditheko, ngodiso, ntjhafatso, phetiso, nameserver, DNS, khoutu ya EPP, senotlolo sa ngodisi, le tshireletso ya ID
- E ncha: Ho kentswe Openprovider jwalo ka kopanyo ya ho rekisa didomeine e nang le tshehetso ya ditheko tsa morekisi, ngodiso, ntjhafatso, phetiso, nameserver, DNS, khoutu ya EPP, senotlolo sa ngodisi, lekunutu la WHOIS, le kgokahanyo ya TLD
- E ncha: Ho kentswe Hostinger jwalo ka kopanyo ya ho rekisa didomeine e sebedisang token ya Hostinger API e arolelwang ho tswa kopanyong ya mantlha bakeng sa ditlhahlobo tsa ho fumaneha, ngodiso, dintlafatso tsa nameserver, senotlolo sa ngodisi, le lekunutu la WHOIS
- E ntlafaditswe: Ho kentswe docblocks tsa ketso le sefe ya potoloho ya bophelo ba domeine bakeng sa tataiso ya kopanyo ya bahlahisi
- E ntlafaditswe: Ho ntjhafaditswe metadata ya ho tsamaellana ha plugin ho WordPress 7.0 ho readme ya addon
- E ntlafaditswe: Ho ntjhafaditswe dithempleite tsa moralo tse sebediswang bakeng sa kgokahanyo ya tokollo e tlang

Mofuta 1.1.0 - E lokollotswe ka 2026-05-08
- E ncha: Ho theha rekoto ya DNS (add_dns_record) ho kentse tshebetsong bakeng sa bangodisi ba ResellerClub, Enom, le OpenSRS
- Tokiso: Parser ya Default DNS Records jwale e mamella ditoken tsa {DOMAIN} le {SITE_URL}
- Tokiso: Di-slug tsa masimo a kgetho ya domeine nakong ya tefo di filwe namespace ho thibela ho thulana le site_url

Mofuta 1.0.8 - E lokollotswe ka 2026-05-07
- Tokiso: Ditheko tsa domeine tsa ResellerClub jwale di lata ditheko tsa ditjeho tse phelang ho tswa ho endpoint e nepahetseng ya API

Mofuta 1.0.7 - E lokollotswe ka 2026-05-06
* Tokiso: ResellerClub test_connection e romela paramethara e hlokehang ya tlds (#224)

Mofuta 1.0.6 - E lokollotswe ka 2026-05-05
* Tokiso: Ngodiso ya domeine ya ResellerClub jwale e sebetsa ka nepo ka tshwaro e ntlafaditsweng ya karabelo ya API le ho tsamaisa mofani ho laolwang ke registry
* Tokiso: Dintlafatso tsa UX tsa leqephe la tsamaiso la Register Domain
* Ho tlositswe: Kopanyo ya ngodisi wa CyberPanel

Mofuta 1.0.5 - E lokollotswe ka 2026-04-02
* E ncha: Kopanyo ya ngodisi wa GoDaddy bakeng sa ngodiso le taolo ya domeine
* E ncha: Kopanyo ya ngodisi wa NameSilo
* E ncha: Kopanyo ya ngodisi wa ResellerClub
* E ncha: Ho netefatsa ka boiketsetso domeine ya ho romela ya SES ha ho rekwa le ho hokahanywa domeine
* Tokiso: Ho sireletsa constants tsa plugin kgahlanong le ho hlaloswa hape tikolohong ya teko
* Tokiso: Difolakha tsa MySQL di arolwa ka mantswe ka nepo ho install-wp-tests.sh

Mofuta 1.0.4 - E lokollotswe ka 2026-03-14
* **Tokiso:** Matlotlo a mang a css a haellang
* **Tokiso:** Phoso e amanang le tlds tse sa fumaneheng

Mofuta 1.0.3 - E lokollotswe ka 2026-03-09
* **Tokiso:** Diphoso tsa thepa ya Vue reactive (domain_option, selected_domain, domain_provider) ha ho sebediswa thempleite ya kgale ya ho ingodisa mmoho le shortcode ya tefo
* **Tokiso:** Ho se lekane ha lebala la ho kenya subdomain le mongolo o moholo haholo lebaleng la kgetho ya domeine nakong ya tefo
* **Tokiso:** Pata boloko ba ponelopele ba "URL ya hao e tla ba" ha lebala la kgetho ya domeine le le teng

Mofuta 1.0.2 - E lokollotswe ka 2026-03-01
* **E ntlafaditswe:** Ho tlositswe di-setting tsa phaello ya kakaretso leqepheng la di-setting — ditheko jwale di ya ka sehlahisoa feela
* **E ntlafaditswe:** Ho kentswe sehokelo sa "Laola Dihlahiswa tsa Domeine" leqepheng la di-setting bakeng sa ho tsamaya kapele
* **E ntlafaditswe:** Ditlhaloso tsa masimo le ditlhahiso tse hlakileng haholoanyane bakeng sa di-setting tsa sehlahisoa sa domeine (catch-all kgahlanong le TLD-specific, mefuta ya phaello, ditheko tsa selelekela)
* **E ntlafaditswe:** Ditlhaloso tse betere ho pholletsa le leqephe la di-setting (batla TLDs, dintjhafatso, DNS, ditsebiso)

Mofuta 1.0.1 - E lokollotswe ka 2026-02-27

* **E ntjha:** Sesebediswa sa ho kenya TLD bakeng sa taolo ya ditheko ka bongata
* **E ntjha:** Tshehetso ya ditheko tsa selelekela bakeng sa dihlahiswa tsa domain
* **E ntjha:** Sehlopha sa diteko tsa E2E ka Cypress
* **E ntjha:** Dithempleite tsa imeile bakeng sa ditsebiso tsa potoloho ya bophelo ya domain
* **E ntjha:** Masimo a aterese ya mongodisi ho modal ya ngodiso ya domain ya motsamaisi, a tlatsitsweng esale pele ho tswa ho disetting
* **E ntjha:** Sehokelo sa taolo ya DNS sa moreki se nang le tshehetso ya ho eketsa, ho hlophisa, le ho hlakola direkoto
* **E ntjha:** Kgetho ya checkout ya "Tlisa domain ya hao" e nang le ho hokahanya domain ka boiketsetso
* **E ntjha:** Iketsetse URL ya saete ho tswa lebitsong la domain nakong ya checkout
* **E ntjha:** Tlhophiso ya nameserver ya kamehla le rekoto ya DNS ho disetting
* **E ntjha:** Dintlha tsa ngodiso ya domain le taolo ya DNS leqepheng la mantlha la ho hlophisa domain
* **E ntjha:** Wizard ya setup e iketsetsa sehlahiswa sa domain sa kamehla se nang le dikgetho tsa motheo tse utlwahlalang
* **E ntjha:** Khokahanyo ya TLD ya letsatsi le letsatsi ka boiketsetso ka cron ho bafani bohle ba hlophisitsweng
* **E ntjha:** Tshireletso ya lekunutu la WHOIS ka tlhophiso ya sehlahiswa ka seng (e dula e buletswe, kgetho ya moreki, kapa e timilwe)
* **E ntjha:** Lebokose la ho tshwaya la checkout la lekunutu la WHOIS le pontsho ya theko le tshehetso ya dark mode
* **E ntjha:** Leqephe la motsamaisi la Register Domain bakeng sa ngodiso ya domain ka letsoho
* **E ntjha:** Dintlafatso tsa plugin ka boiketsetso ka seva ya dintlafatso ya Ultimate Multisite
* **E ntjha:** Tabo ya sefahla sa mofuta wa sehlahiswa sa domain tafoleng ya lenane la dihlahiswa e nang le setaele sa beche e pherese
* **E ntjha:** Masimo a kgokahano ya mongodisi (lebitso, aterese, toropo, profense, khoutu ya poso, naha, mohala) foromong ya checkout ya domain
* **E ntjha:** Netefatso ya masimo a mongodisi pele ho letsetsa API ya registrar ka melaetsa ya diphoso e hlakileng
* **E ntjha:** Dikanale tsa log tse ikgethileng ho mofani bakeng sa diketsahalo tsa ngodiso ya domain (mohl. domain-seller-namecheap.log)
* **E ntjha:** Masimo a kgokahano ya mongodisi foromong e ka sehloohong ya checkout ya ngodiso/signup (a bontshwa ha ho ngodiswa domain)
* **E ntlafaditswe:** Ho nkelwe sebaka lebala la checkout la Domain Search ka lebala le kopaneng la Domain Selection le tshehetsang ditabo tsa subdomain, ngodisa, le domain e seng e le teng
* **E ntlafaditswe:** Disetting tsa sehlahiswa sa domain di bontshwa ka hare leqepheng la ho hlophisa sehlahiswa ka tsamaiso ya mantlha ya widget
* **E ntlafaditswe:** Dihook tsa tlhahisoleseding ya domain ya moreki di hokahana le widget ya mantlha ya domain mapping ho ena le metabox e ikemetseng
* **E ntlafaditswe:** Wizard ya ho kenya TLD e nolofaditswe ho ba kgokahanyo ya konopo e le nngwe ho tswa ho bafani bohle
* **E ntlafaditswe:** Ho fumaneha ha domain ya Namecheap ho sebedisa pitso ya API ya batch bakeng sa patlo e potlakileng
* **E ntlafaditswe:** API ya ditheko ya Namecheap e sebedisa diparamethara tse nepahetseng le ho sekaseka karabo
* **E ntlafaditswe:** Polokelo ya TLD e bohareng kgethong e le nngwe ya netweke
* **E ntlafaditswe:** Ho ngolwa ha mesebetsi ya domain bakeng sa diphetoho tsa DNS, diphetiso, le tshebediso ya tlhophiso
* **E ntlafaditswe:** Khokahanyo e feletseng ya TLD bakeng sa OpenSRS ka lenane la sehlooho la IANA le netefatso ya batch
* **E ntlafaditswe:** Khokahanyo e feletseng ya TLD bakeng sa Namecheap ka dikopo tsa API tse nang le maqephe
* **E ntlafaditswe:** Ho nkelwe sebaka ditlelase tsa mofani tsa kgale ka paterone ya Integration Registry
* **E ntlafaditswe:** Phanele ya disetting e nang le tlhophiso ya DNS le phetiso
* **E ntlafaditswe:** Dinomoro tsa mohala di fomatewa ka boiketsetso ho fomate ya registrar ya +CC.NNN
* **E ntlafaditswe:** Netefatso ya lebala la mohala e tlosa ditlhaku tsa fomate pele ho romelwa
* **E ntlafaditswe:** Tlhoko ya mofuta e nyolotswe ho Ultimate Multisite 2.4.12 ka tsebiso e hlakileng haholoanyane
* **E ntlafaditswe:** Tshebetso ya CI e sebedisa checkout e nepahetseng bakeng sa addon le core plugin ka bobedi
* **E ntlafaditswe:** prepare_registrant_info() e bala ho tswa ho meta ya mosebedisi e bolokilweng ke checkout ka tshehetso ya aterese ya billing
* **E lokisitswe:** AJAX ya patlo ya domain e hloleha bakeng sa basebedisi ba sa kenang nakong ya checkout
* **E lokisitswe:** AJAX ya ditheko tsa domain e hloleha bakeng sa basebedisi ba sa kenang nakong ya checkout
* **E lokisitswe:** Phoso e bolaeang ya phatlalatso hape ya sehlopha sa Spyc ha ho tsamaiswa ditaelo tsa WP-CLI
* **E lokisitswe:** Nako ya ho fela ya API ya sandbox ya Namecheap e kgutshwane haholo
* **E lokisitswe:** Mongolo wa konopo ya Select ya patlo ya domain ha o bonahale mokokotlong o motala
* **E lokisitswe:** Ngodiso ya domain e hloleha ka phoso ya "RegistrantFirstName is Missing" ka lebaka la tlhahisoleseding ya kgokahano e haellang
* **E lokisitswe:** Rekoto ya domain e entswe ka blog_id=0 ha saete e ne e eso be teng ka nako ya checkout
* **E lokisitswe:** Setting ya TLDs tsa kamehla e kgutlisitswe e le string ho ena le array e sekasekilweng
* **E tlositswe:** Leqephe le ikemetseng la motsamaisi la Domain Management — jwale le sebetswa ka maqephe a mantlha a domain

Mofuta 1.0.0 - E lokollotswe ka 2025-09-28

**Ho ngolwa hape ho hoholo bakeng sa Ultimate Multisite v2**

* **E ntjha:** Ho ngolwa hape ka botlalo ka sebopeho sa morao-rao sa PHP 7.4+
* **E ntjha:** Kopanyo e se nang mathata le tsamaiso ya checkout ya Ultimate Multisite v2
* **E ntjha:** Taolo ya dihlahiswa tsa domain ka dikgetho tsa ditheko tse feto-fetohang
* **E ntjha:** Sebopeho sa tshehetso ya bafani ba bangata ba domain
* **E ntjha:** Kopanyo ya auto-renewal le subscription
* **E ntjha:** Sehokelo sa taolo ya domain sa moreki
* **E ntjha:** Tlhokomelo ya domain ya motsamaisi le dilog
* **E ntjha:** Tshehetso ya coupon bakeng sa dihlahiswa tsa domain
* **E ntjha:** Taolo e akaretsang ya disetting
* **E ntjha:** Codebase e atolosehang e loketseng bahlahisi
* **E ntlafaditswe:** Mofani wa OpenSRS o ntjhafaditswe ka tshehetso e feletseng ya dikarolo
* **E ntlafaditswe:** UI ya morao-rao e tsamaellanang le Ultimate Multisite v2
* **E lokisitswe:** Khoutu yohle ya v1 e seng e sa sebediswe e ntjhafaditswe ho maemo a v2
* **E tlositswe:** Tshebedisano le v1 ya kgale (phetoho e senyang)

### Mefuta e Fetileng (v1 ya Kgale) {#previous-versions-v1-legacy}

### Mofuta 0.0.3 - 20/08/2019 {#version-003---20082019}

* E lokisitswe: Ho se tsamaellane le Groundhogg CRM
* Tlhokomeliso: Ena e ne e le tokollo ya ho qetela e tsamaellanang le v1

### Mofuta 0.0.2 - 07/12/2018 {#version-002---07122018}

* E lokisitswe: Ho tlositswe lebala la License Key
* E lokisitswe: Ditabo tsa plan di haella ha plugin ya karolo e sebetsa
* E ntlafaditswe: Ho ekeditswe konopo ya ho tlola lebaleng la ngodiso

### Mofuta 0.0.1 - Tokollo ya Pele {#version-001---initial-release}

* Kopanyo ya motheo ya OpenSRS bakeng sa WP Ultimo v1
* Patlo le ngodiso e bonolo ya domain
* Ditumello tsa domain tse itshetlehileng ka plan
