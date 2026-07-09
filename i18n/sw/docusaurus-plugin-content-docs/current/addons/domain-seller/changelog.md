---
title: Kumbukumbu ya Mabadiliko ya Domain Seller
sidebar_position: 99
_i18n_hash: 6b9be73c1503d8df8a806bb02b241873
---
# Kumbukumbu ya Mabadiliko ya Domain Seller

Toleo 1.3.0 - Limetolewa tarehe 2026-06-02
- Mpya: Imeongeza onyo la network-admin wakati salio la muuzaji wa HostAfrica linapokuwa chini sana
- Mpya: Imeongeza uunganishaji otomatiki wa domain zilizosajiliwa upya kwenye tovuti ya mtandao
- Marekebisho: Imetumia mahitaji ya sehemu za msajiliwa tu wakati wa kusajili domain mpya
- Marekebisho: Imefanya arifa za kufuatilia salio ziweze kufutwa
- Marekebisho: Imehakikisha maelezo ya malipo ya msajiliwa wa WooCommerce yanahifadhiwa
- Marekebisho: Imetekeleza mahitaji ya mawasiliano ya msajiliwa wakati wa usajili
- Marekebisho: Imezuia bidhaa za usajili wa domain kuundwa zikiwa na ongezeko la bei la 0%
- Marekebisho: Imehifadhi chaguo za domain na bei kupitia mtiririko wa kipindi cha checkout
- Marekebisho: Imeboresha uonyeshaji wa sarafu ya bei za domain za HostAfrica
- Marekebisho: Imeboresha tabia ya form-action ya checkout ili kuzuia kutolingana kwa query-var za WP-core
- Imeboreshwa: Imeunganisha nyaraka za usanidi wa muuzaji wa HostAfrica katika mwongozo wa usanidi

Toleo 1.2.0 - Limetolewa tarehe 2026-05-25
- Mpya: Imeongeza HostAfrica kama muunganisho wa kuuza domain wenye msaada wa checkout, mchawi wa usanidi, utafutaji, TLD/bei, usajili, usasishaji, uhamisho, nameserver, DNS, msimbo wa EPP, registrar lock, na ulinzi wa ID
- Mpya: Imeongeza Openprovider kama muunganisho wa kuuza domain wenye msaada wa bei za muuzaji, usajili, usasishaji, uhamisho, nameserver, DNS, msimbo wa EPP, registrar lock, faragha ya WHOIS, na usawazishaji wa TLD
- Mpya: Imeongeza Hostinger kama muunganisho wa kuuza domain unaotumia tokeni ya pamoja ya Hostinger API kutoka muunganisho wa msingi kwa ukaguzi wa upatikanaji, usajili, masasisho ya nameserver, registrar lock, na faragha ya WHOIS
- Imeboreshwa: Imeongeza docblock za vitendo na vichujio vya mzunguko wa maisha wa domain kwa mwongozo wa muunganisho wa wasanidi
- Imeboreshwa: Imesasisha metadata ya uoanifu wa plugin hadi WordPress 7.0 katika readme ya addon
- Imeboreshwa: Imesasisha violezo vya upangaji vinavyotumika kwa uratibu wa toleo lijalo

Toleo 1.1.0 - Limetolewa tarehe 2026-05-08
- Mpya: Uundaji wa rekodi za DNS (add_dns_record) umetekelezwa kwa wasajili wa ResellerClub, Enom, na OpenSRS
- Marekebisho: Kichanganuzi chaguomsingi cha Rekodi za DNS sasa kinavumilia tokeni za {DOMAIN} na {SITE_URL}
- Marekebisho: Slug za sehemu ya checkout ya uteuzi wa domain zimewekewa namespace ili kuzuia mgongano na site_url

Toleo 1.0.8 - Limetolewa tarehe 2026-05-07
- Marekebisho: Bei za domain za ResellerClub sasa huchota bei za gharama za moja kwa moja kutoka endpoint sahihi ya API

Toleo 1.0.7 - Limetolewa tarehe 2026-05-06
* Marekebisho: ResellerClub test_connection hutuma kigezo kinachohitajika cha tlds (#224)

Toleo 1.0.6 - Limetolewa tarehe 2026-05-05
* Marekebisho: Usajili wa domain wa ResellerClub sasa hufanya kazi ipasavyo kwa ushughulikiaji ulioboreshwa wa majibu ya API na uelekezaji wa mtoa huduma unaoendeshwa na registry
* Marekebisho: Maboresho ya UX ya ukurasa wa admin wa Register Domain
* Imeondolewa: Muunganisho wa registrar wa CyberPanel

Toleo 1.0.5 - Limetolewa tarehe 2026-04-02
* Mpya: Muunganisho wa registrar wa GoDaddy kwa usajili na usimamizi wa domain
* Mpya: Muunganisho wa registrar wa NameSilo
* Mpya: Muunganisho wa registrar wa ResellerClub
* Mpya: Thibitisha kiotomatiki domain ya kutuma ya SES wakati wa ununuzi na uunganishaji wa domain
* Marekebisho: Linda constants za plugin dhidi ya kufafanuliwa upya katika mazingira ya majaribio
* Marekebisho: Bendera za MySQL hugawanywa maneno kwa usahihi katika install-wp-tests.sh

Toleo 1.0.4 - Limetolewa tarehe 2026-03-14
* **Marekebisho:** Baadhi ya rasilimali za css zilizokosekana
* **Marekebisho:** Hitilafu inayohusiana na tlds zisizopatikana

Toleo 1.0.3 - Limetolewa tarehe 2026-03-09
* **Marekebisho:** Hitilafu za sifa tendaji za Vue (domain_option, selected_domain, domain_provider) wakati wa kutumia kiolezo cha zamani cha kujisajili pamoja na shortcode ya checkout
* **Marekebisho:** Kutopangika kwa sehemu ya kuingiza subdomain na maandishi makubwa kupita kiasi katika sehemu ya checkout ya uteuzi wa domain
* **Marekebisho:** Ficha kizuizi cha hakikisho cha "URL yako itakuwa" wakati sehemu ya uteuzi wa domain ipo

Toleo 1.0.2 - Limetolewa tarehe 2026-03-01
* **Imeboreshwa:** Imeondoa mipangilio ya jumla ya ongezeko la bei kutoka ukurasa wa mipangilio — bei sasa ni kwa kila bidhaa pekee
* **Imeboreshwa:** Imeongeza kiungo cha "Dhibiti Bidhaa za Domain" kwenye ukurasa wa mipangilio kwa urambazaji wa haraka
* **Imeboreshwa:** Maelezo ya sehemu na vidokezo vya zana yaliyo wazi zaidi kwa mipangilio ya bidhaa za domain (catch-all dhidi ya maalum kwa TLD, aina za ongezeko la bei, bei ya utangulizi)
* **Imeboreshwa:** Maelezo bora zaidi katika ukurasa mzima wa mipangilio (tafuta TLD, usasishaji, DNS, arifa)

Toleo 1.0.1 - Limetolewa tarehe 2026-02-27

* **Mpya:** Zana ya kuingiza TLD kwa usimamizi wa bei kwa wingi
* **Mpya:** Usaidizi wa bei za utangulizi kwa bidhaa za domain
* **Mpya:** Seti ya majaribio ya E2E kwa Cypress
* **Mpya:** Violezo vya barua pepe kwa arifa za mzunguko wa maisha wa domain
* **Mpya:** Sehemu za anwani ya msajili kwenye modal ya usajili wa domain ya admin, zilizojazwa mapema kutoka kwenye mipangilio
* **Mpya:** Kiolesura cha usimamizi wa DNS cha mteja chenye usaidizi wa kuongeza, kuhariri, na kufuta rekodi
* **Mpya:** Chaguo la checkout la "Leta domain yako mwenyewe" lenye uunganishaji otomatiki wa domain
* **Mpya:** Tengeneza kiotomatiki URL ya site kutoka kwa jina la domain wakati wa checkout
* **Mpya:** Usanidi chaguomsingi wa nameserver na rekodi ya DNS katika mipangilio
* **Mpya:** Maelezo ya usajili wa domain na usimamizi wa DNS kwenye ukurasa mkuu wa kuhariri domain
* **Mpya:** Mchawi wa usanidi huunda kiotomatiki bidhaa chaguomsingi ya domain yenye chaguo-msingi zinazofaa
* **Mpya:** Usawazishaji wa kila siku wa kiotomatiki wa TLD kupitia cron kwa watoa huduma wote waliosanidiwa
* **Mpya:** Ulinzi wa faragha wa WHOIS wenye usanidi kwa kila bidhaa (imewashwa kila wakati, chaguo la mteja, au imezimwa)
* **Mpya:** Kisanduku cha kuteua faragha ya WHOIS kwenye checkout chenye onyesho la bei na usaidizi wa hali ya giza
* **Mpya:** Ukurasa wa admin wa Register Domain kwa usajili wa domain kwa mkono
* **Mpya:** Masasisho ya kiotomatiki ya plugin kupitia seva ya masasisho ya Ultimate Multisite
* **Mpya:** Kichupo cha kichujio cha aina ya bidhaa ya domain kwenye jedwali la orodha ya bidhaa chenye mtindo wa beji ya zambarau
* **Mpya:** Sehemu za mawasiliano ya msajili (jina, anwani, jiji, jimbo, msimbo wa posta, nchi, simu) kwenye fomu ya checkout ya domain
* **Mpya:** Uthibitishaji wa sehemu za msajili kabla ya kuita API ya msajili domain wenye ujumbe wazi wa hitilafu
* **Mpya:** Njia za kumbukumbu mahususi kwa mtoa huduma kwa matukio ya usajili wa domain (mf. domain-seller-namecheap.log)
* **Mpya:** Sehemu za mawasiliano ya msajili kwenye fomu kuu ya checkout ya usajili/kujisajili (huonyeshwa wakati wa kusajili domain)
* **Imeboreshwa:** Sehemu ya checkout ya Utafutaji wa Domain imebadilishwa na kuwa sehemu iliyounganishwa ya Uteuzi wa Domain inayounga mkono vichupo vya subdomain, sajili, na domain iliyopo
* **Imeboreshwa:** Mipangilio ya bidhaa ya domain huonyeshwa ndani ya mstari kwenye ukurasa wa kuhariri bidhaa kupitia mfumo mkuu wa widget
* **Imeboreshwa:** Hooks za taarifa za domain ya mteja zimeunganishwa kwenye widget kuu ya uunganishaji wa domain badala ya metabox huru
* **Imeboreshwa:** Mchawi wa kuingiza TLD umerahisishwa kuwa usawazishaji wa mbofyo mmoja kutoka kwa watoa huduma wote
* **Imeboreshwa:** Upatikanaji wa domain wa Namecheap hutumia mwito wa API wa batch kwa utafutaji wa haraka zaidi
* **Imeboreshwa:** API ya bei ya Namecheap hutumia vigezo sahihi na uchanganuzi wa majibu
* **Imeboreshwa:** Hifadhi ya TLD imewekwa katikati katika chaguo moja la mtandao
* **Imeboreshwa:** Uwekaji kumbukumbu wa shughuli za domain kwa mabadiliko ya DNS, uhamisho, na utekelezaji wa usanidi
* **Imeboreshwa:** Usawazishaji kamili wa TLD kwa OpenSRS kwa kutumia orodha kuu ya IANA yenye uthibitishaji wa batch
* **Imeboreshwa:** Usawazishaji kamili wa TLD kwa Namecheap wenye maombi ya API yaliyogawanywa kwa kurasa
* **Imeboreshwa:** Madarasa ya zamani ya watoa huduma yamebadilishwa na muundo wa Integration Registry
* **Imeboreshwa:** Paneli ya mipangilio yenye usanidi wa DNS na uhamisho
* **Imeboreshwa:** Nambari za simu hupangiliwa kiotomatiki kuwa muundo wa msajili domain wa +CC.NNN
* **Imeboreshwa:** Uthibitishaji wa sehemu ya simu huondoa herufi za upangiliaji kabla ya kuwasilisha
* **Imeboreshwa:** Sharti la toleo limepandishwa hadi Ultimate Multisite 2.4.12 lenye ilani iliyo wazi zaidi
* **Imeboreshwa:** Mtiririko wa kazi wa CI hutumia checkout sahihi kwa addon na plugin kuu
* **Imeboreshwa:** prepare_registrant_info() husoma kutoka meta ya mtumiaji iliyohifadhiwa wakati wa checkout pamoja na fallback ya anwani ya malipo
* **Imerekebishwa:** AJAX ya utafutaji wa domain kushindwa kwa watumiaji ambao hawajaingia wakati wa checkout
* **Imerekebishwa:** AJAX ya bei ya domain kushindwa kwa watumiaji ambao hawajaingia wakati wa checkout
* **Imerekebishwa:** Hitilafu mbaya ya kutangaza upya darasa la Spyc wakati wa kuendesha amri za WP-CLI
* **Imerekebishwa:** Muda wa kusubiri wa Namecheap sandbox API ulikuwa mfupi mno
* **Imerekebishwa:** Maandishi ya kitufe cha Select cha utafutaji wa domain hayaonekani kwenye mandharinyuma ya kijani
* **Imerekebishwa:** Usajili wa domain kushindwa kwa hitilafu ya "RegistrantFirstName is Missing" kwa sababu ya taarifa za mawasiliano kukosekana
* **Imerekebishwa:** Rekodi ya domain kuundwa na blog_id=0 wakati site haikuwepo bado wakati wa checkout
* **Imerekebishwa:** Mpangilio chaguomsingi wa TLDs ulirejeshwa kama string badala ya array iliyochanganuliwa
* **Imeondolewa:** Ukurasa huru wa admin wa Usimamizi wa Domain — sasa hushughulikiwa kupitia kurasa kuu za domain

Toleo 1.0.0 - Lililotolewa tarehe 2025-09-28

**Uandishi Upya Mkubwa kwa Ultimate Multisite v2**

* **Mpya:** Uandishi upya kamili wenye usanifu wa kisasa wa PHP 7.4+
* **Mpya:** Uunganishaji laini na mfumo wa checkout wa Ultimate Multisite v2
* **Mpya:** Usimamizi wa bidhaa za domain wenye chaguo rahisi za bei
* **Mpya:** Usanifu wa usaidizi wa watoa huduma wengi wa domain
* **Mpya:** Uunganishaji wa usasishaji otomatiki na subscription
* **Mpya:** Kiolesura cha usimamizi wa domain cha mteja
* **Mpya:** Ufuatiliaji na kumbukumbu za domain za admin
* **Mpya:** Usaidizi wa kuponi kwa bidhaa za domain
* **Mpya:** Usimamizi mpana wa mipangilio
* **Mpya:** Codebase inayopanulika na rafiki kwa developers
* **Imeboreshwa:** Mtoa huduma wa OpenSRS amesasishwa kwa usaidizi kamili wa vipengele
* **Imeboreshwa:** UI ya kisasa inayolingana na Ultimate Multisite v2
* **Imerekebishwa:** Code yote ya v1 iliyopitwa na wakati imesasishwa kufuata viwango vya v2
* **Imeondolewa:** Utangamano wa zamani wa v1 (badiliko linalovunja utangamano)

### Matoleo ya Awali (v1 Legacy)

### Toleo 0.0.3 - 20/08/2019

* Imerekebishwa: Kutopatana na Groundhogg CRM
* Kumbuka: Hili lilikuwa toleo la mwisho linaloendana na v1

### Toleo 0.0.2 - 07/12/2018

* Imerekebishwa: Sehemu ya License Key imeondolewa
* Imerekebishwa: Vichupo vya mpango kukosekana wakati plugin ya kipengele ikiwa amilifu
* Imeboreshwa: Kitufe cha kuruka kimeongezwa kwenye sehemu ya usajili

### Toleo 0.0.1 - Toleo la Kwanza

* Uunganishaji wa msingi wa OpenSRS kwa WP Ultimo v1
* Utafutaji na usajili rahisi wa domain
* Ruhusa za domain zinazotegemea mpango
