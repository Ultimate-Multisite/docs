---
title: Nhoroondo yeshanduko dzeMutengesi weDomaini
sidebar_position: 99
_i18n_hash: 6b9be73c1503d8df8a806bb02b241873
---
# Nhoroondo yeshanduko yeMutengesi weDomain

Version 1.3.0 - Yakaburitswa musi wa2026-06-02
- Zvitsva: Yakawedzera yambiro ye network-admin kana bharanzi remutengesi zvakare weHostAfrica radzikira zvakanyanya
- Zvitsva: Yakawedzera mepu otomatiki yemadomain achangobva kunyoreswa kusaiti yenetwork
- Gadziriso: Yakashandisa zvinodiwa zveminda yemunyoresi chete kana uchinyoresa domain itsva
- Gadziriso: Yakaita kuti zviziviso zvekutarisa bharanzi zvikwanise kuvharwa
- Gadziriso: Yakavimbisa kuti ruzivo rwekubhadharisa rwemunyoresi weWooCommerce rwachengetedzwa
- Gadziriso: Yakamanikidza zvinodiwa zvekutaurirana nemunyoresi panguva yekunyoresa
- Gadziriso: Yakadzivirira zvigadzirwa zvekunyoresa domain kugadzirwa ne0% markup
- Gadziriso: Yakachengetedza kusarudzwa kwemadomain nemitengo kuburikidza nekuyerera kwechikamu chekubhadhara
- Gadziriso: Yakavandudza kuratidzwa kwemari yemitengo yemadomain eHostAfrica
- Gadziriso: Yakavandudza maitiro eform-action yekubhadhara kudzivirira kusawirirana kweWP-core query-var
- Kuvandudzwa: Yakabatanidza magwaro ekugadzirisa emutengesi zvakare weHostAfrica mugwara rekumisikidza

Version 1.2.0 - Yakaburitswa musi wa2026-05-25
- Zvitsva: Yakawedzera HostAfrica sekubatanidzwa kwekutengesa madomain nerutsigiro rwekubhadhara, wizard yekumisikidza, kutsvaga, TLD/mitengo, kunyoresa, kuvandudza, kutamisa, nameserver, DNS, EPP code, registrar lock, uye ID protection
- Zvitsva: Yakawedzera Openprovider sekubatanidzwa kwekutengesa madomain nerutsigiro rwemitengo yemutengesi zvakare, kunyoresa, kuvandudza, kutamisa, nameserver, DNS, EPP code, registrar lock, WHOIS privacy, uye TLD sync
- Zvitsva: Yakawedzera Hostinger sekubatanidzwa kwekutengesa madomain ichishandisa Hostinger API token yakagovaniswa kubva pakubatanidzwa kwepakati pekutarisa kuwanikwa, kunyoresa, kugadzirisa nameserver, registrar lock, uye WHOIS privacy
- Kuvandudzwa: Yakawedzera domain lifecycle action uye filter docblocks yegwara rekubatanidza revagadziri
- Kuvandudzwa: Yakagadziridza metadata yekuenderana kweplugin kuWordPress 7.0 muaddon readme
- Kuvandudzwa: Yakagadziridza matemplate ekuronga anoshandiswa pakuronga kuburitswa kuri kuuya

Version 1.1.0 - Yakaburitswa musi wa2026-05-08
- Zvitsva: Kugadzirwa kweDNS record (add_dns_record) kwakaitwa kune ResellerClub, Enom, uye OpenSRS registrars
- Gadziriso: Default DNS Records parser ikozvino inobvuma {DOMAIN} ne{SITE_URL} tokens
- Gadziriso: Maslug emunda wekusarudza domain pakubhadhara akaiswa namespace kudzivirira kupindirana ne site_url

Version 1.0.8 - Yakaburitswa musi wa2026-05-07
- Gadziriso: Mitengo yemadomain eResellerClub ikozvino inotora mitengo yemutengo chaiyo kubva kuAPI endpoint chaiyo

Version 1.0.7 - Yakaburitswa musi wa2026-05-06
* Gadziriso: ResellerClub test_connection inotumira parameter inodiwa ye tlds (#224)

Version 1.0.6 - Yakaburitswa musi wa2026-05-05
* Gadziriso: Kunyoresa domain kweResellerClub ikozvino kunoshanda nemazvo nekubata mhinduro dzeAPI kwakavandudzwa uye nzira dzeprovider dzinotungamirwa neregistry
* Gadziriso: Kuvandudzwa kweUX yepeji re admin reNyoresa Domain
* Zvakabviswa: Kubatanidzwa kweCyberPanel registrar

Version 1.0.5 - Yakaburitswa musi wa2026-04-02
* Zvitsva: Kubatanidzwa kweGoDaddy registrar kwekunyoresa nekutonga madomain
* Zvitsva: Kubatanidzwa kweNameSilo registrar
* Zvitsva: Kubatanidzwa kweResellerClub registrar
* Zvitsva: Kuzvisimbisira otomatiki domain yekutumira yeSES pakutenga nekumepwa kwe domain
* Gadziriso: Yakadzivirira ma constants eplugin kuti asatsanangurwazve munzvimbo yekuyedza
* Gadziriso: MySQL flags word-split nemazvo mu install-wp-tests.sh

Version 1.0.4 - Yakaburitswa musi wa2026-03-14
* **Gadziriso:** Zvimwe zviwanikwa zvecss zvaishayikwa
* **Gadziriso:** Kukanganisa kwakabatana nema tlds asiri kuwanikwa

Version 1.0.3 - Yakaburitswa musi wa2026-03-09
* **Gadziriso:** Zvikanganiso zveVue reactive property (domain_option, selected_domain, domain_provider) kana uchishandisa template yekare yekusaina ine checkout shortcode
* **Gadziriso:** Kusarurama kwekumira kwemunda wekuisa subdomain uye mavara akakura kupfuura zvakakodzera mumunda wekusarudza domain pakubhadhara
* **Gadziriso:** Viga bhuroko rekuona pamberi re "URL yako ichava" kana munda wekusarudza domain uripo

Version 1.0.2 - Yakaburitswa musi wa2026-03-01
* **Kuvandudzwa:** Yakabvisa marongero eglobal markup kubva papeji rezvirongwa — mitengo ikozvino iri pachigadzirwa chimwe nechimwe chete
* **Kuvandudzwa:** Yakawedzera link ye "Tonga Zvigadzirwa zveDomain" papeji rezvirongwa yekufamba nekukurumidza
* **Kuvandudzwa:** Tsananguro dzeminda dzakajeka uye tooltips dzemagadzirirwo ezvigadzirwa zve domain (catch-all vs TLD-specific, mhando dze markup, mitengo yekutanga)
* **Kuvandudzwa:** Tsananguro dziri nani pese papeji rezvirongwa (tsvaga maTLD, kuvandudzwa, DNS, zviziviso)

Version 1.0.1 - Yakaburitswa musi wa2026-02-27

* **Chitsva:** Chishandiso chekupinza TLD chekugadzirisa mitengo yakawanda
* **Chitsva:** Rutsigiro rwemitengo yekutanga yezvigadzirwa zvemadomain
* **Chitsva:** E2E test suite ine Cypress
* **Chitsva:** Matemplate eemail ezviziviso zvehupenyu hwedomain
* **Chitsva:** Mafield ekero yemunyoresi pa admin domain registration modal, akazadzwa kare kubva mumasettings
* **Chitsva:** Interface yemutengi yekutarisira DNS ine rutsigiro rwekuwedzera, kugadzirisa, nekudzima marecord
* **Chitsva:** Sarudzo yecheckout ye "Uya nedomain yako" ine automatic domain mapping
* **Chitsva:** Kugadzira otomatiki URL yesaiti kubva pazita redomain panguva yecheckout
* **Chitsva:** Kugadziriswa kwenameserver yekutanga neDNS record mumasettings
* **Chitsva:** Mashoko ekunyoresa domain uye kutarisira DNS papeji huru yekugadzirisa domain
* **Chitsva:** Setup wizard inogadzira otomatiki chigadzirwa chedomain chekutanga chine zvigadziriso zvine musoro
* **Chitsva:** Automatic TLD sync yezuva nezuva kuburikidza necron kune vese providers vakagadziriswa
* **Chitsva:** Kudzivirirwa kwekuvanzika kweWHOIS nekugadziriswa pachigadzirwa chimwe nechimwe (nguva dzose yakabatidzwa, sarudzo yemutengi, kana yakadzimwa)
* **Chitsva:** WHOIS privacy checkout checkbox ine kuratidzwa kwemutengo nerutsigiro rwe dark mode
* **Chitsva:** Peji reRegister Domain admin rekunyoresa domain nemaoko
* **Chitsva:** Kugadziridzwa kweplugin otomatiki kuburikidza neUltimate Multisite update server
* **Chitsva:** Tabhu yefirita yerudzi rwechigadzirwa chedomain mutafura yerondedzero yezvigadzirwa ine purple badge styling
* **Chitsva:** Mafield ekutaurirana nemunyoresi (zita, kero, guta, dunhu, postal code, nyika, foni) pa domain checkout form
* **Chitsva:** Kuongorora mafiedhi emunyoresi usati wadaidza registrar API nemameseji akajeka ezvikanganiso
* **Chitsva:** Log channels dzakanangana neprovider dzezviitiko zvekunyoresa domain (semuenzaniso domain-seller-namecheap.log)
* **Chitsva:** Mafield ekutaurirana nemunyoresi pa main registration/signup checkout form (anoratidzwa kana uchinyoresa domain)
* **Chakavandudzwa:** Yakatsiva Domain Search checkout field neDomain Selection field yakabatana inotsigira subdomain, register, uye existing domain tabs
* **Chakavandudzwa:** Settings dzechigadzirwa chedomain dzinoratidzwa inline papeji yekugadzirisa chigadzirwa kuburikidza necore widget system
* **Chakavandudzwa:** Hooks dzemashoko edomain yemutengi dzinopinda mu core domain mapping widget panzvimbo pe standalone metabox
* **Chakavandudzwa:** TLD import wizard yakarerutswa kuita one-click sync kubva kuvese providers
* **Chakavandudzwa:** Kuwanikwa kweNamecheap domain kunoshandisa batch API call yekutsvaga nekukurumidza
* **Chakavandudzwa:** Namecheap pricing API inoshandisa parameters dzakarurama uye response parsing
* **Chakavandudzwa:** Kuchengetwa kweTLD kwakaiswa pakati mu single network option
* **Chakavandudzwa:** Domain activity logging yeDNS changes, transfers, uye config application
* **Chakavandudzwa:** Full TLD sync yeOpenSRS ichishandisa IANA master list ine batch validation
* **Chakavandudzwa:** Full TLD sync yeNamecheap ine paginated API requests
* **Chakavandudzwa:** Yakatsiva legacy provider classes neIntegration Registry pattern
* **Chakavandudzwa:** Settings panel ine DNS uye transfer configuration
* **Chakavandudzwa:** Nhamba dzefoni dzinogadziridzwa otomatiki kuita +CC.NNN registrar format
* **Chakavandudzwa:** Phone field validation inobvisa mavara ekufomata isati yatumirwa
* **Chakavandudzwa:** Chinodiwa cheversion chakwidzwa kuUltimate Multisite 2.4.12 nechiziviso chakajeka
* **Chakavandudzwa:** CI workflow inoshandisa checkout yakakodzera kune addon ne core plugin
* **Chakavandudzwa:** prepare_registrant_info() inoverenga kubva kucheckout-saved user meta ine billing address fallback
* **Chakagadziriswa:** Domain search AJAX yaitadza kuvashandisi vasina kupinda panguva yecheckout
* **Chakagadziriswa:** Domain pricing AJAX yaitadza kuvashandisi vasina kupinda panguva yecheckout
* **Chakagadziriswa:** Spyc class redeclaration fatal error pakumhanyisa WP-CLI commands
* **Chakagadziriswa:** Namecheap sandbox API timeout yaiva pfupi zvakanyanya
* **Chakagadziriswa:** Mavara eDomain search Select button aisavoneka pa green background
* **Chakagadziriswa:** Kunyoresa domain kwaitadza nekukanganisa kwe "RegistrantFirstName is Missing" nekuda kwekushaikwa kwemashoko ekutaurirana
* **Chakagadziriswa:** Domain record yakagadzirwa ne blog_id=0 apo saiti yakanga isati yavapo panguva yecheckout
* **Chakagadziriswa:** Setting yeDefault TLDs yaidzoka setambo panzvimbo pe parsed array
* **Chakabviswa:** Peji reStandalone Domain Management admin — ikozvino rinoitwa kuburikidza nemapeji ecore domain

Version 1.0.0 - Yakaburitswa musi wa2025-09-28

**Kunyora Patsva Kukuru kweUltimate Multisite v2**

* **Chitsva:** Kunyora patsva kwakazara neazvino PHP 7.4+ architecture
* **Chitsva:** Kubatana kusina musono neUltimate Multisite v2 checkout system
* **Chitsva:** Kutarisira chigadzirwa chedomain chine sarudzo dzemitengo dzinochinjika
* **Chitsva:** Architecture yerutsigiro rwevazhinji domain providers
* **Chitsva:** Auto-renewal uye subscription integration
* **Chitsva:** Interface yemutengi yekutarisira domain
* **Chitsva:** Admin domain monitoring uye logs
* **Chitsva:** Rutsigiro rwecoupon yezvigadzirwa zvemadomain
* **Chitsva:** Kutarisira settings kwakazara
* **Chitsva:** Codebase iri nyore kuvadeveloper uye inowedzerwa
* **Chakavandudzwa:** OpenSRS provider yakagadziridzwa nerutsigiro rwakazara rwezvinhu
* **Chakavandudzwa:** UI yemazuva ano inoenderana neUltimate Multisite v2
* **Chakagadziriswa:** Kodhi yese ye v1 yakare yakagadziridzwa kuzviyero zve v2
* **Chakabviswa:** Legacy v1 compatibility (shanduko inotyora)

### Maversion Apfuura (v1 Legacy)

### Version 0.0.3 - 20/08/2019

* Chakagadziriswa: Kusawirirana neGroundhogg CRM
* Chiziviso: Iyi yaiva release yekupedzisira inowirirana ne v1

### Version 0.0.2 - 07/12/2018

* Chakagadziriswa: Yakabvisa field reLicense Key
* Chakagadziriswa: Matabhu ePlan aishaikwa kana feature plugin yakabatidzwa
* Chakavandudzwa: Yakawedzera bhatani rekusvetuka pa registration field

### Version 0.0.1 - Kuburitswa Kwekutanga

* Basic OpenSRS integration yeWP Ultimo v1
* Kutsvaga nekunyoresa domain kuri nyore
* Mvumo dzedomain dzakavakirwa paPlan
