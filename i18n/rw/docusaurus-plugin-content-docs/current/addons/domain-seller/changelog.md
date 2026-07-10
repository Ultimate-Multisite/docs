---
title: Urutonde rw'Impinduka z'Umugurisha wa Domeni
sidebar_position: 99
_i18n_hash: 6b9be73c1503d8df8a806bb02b241873
---
# Amateka y'impinduka ya Domain Seller {#domain-seller-changelog}

Version 1.3.0 - Yasohotse ku wa 2026-06-02
- Gishya: Hyongewemo umuburo wa network-admin igihe amafaranga asigaye kuri konti y'umucuruzi wa HostAfrica abaye make cyane
- Gishya: Hyongewemo guhuza mu buryo bwikora domains nshya zanditswe na site ya network
- Gukosora: Ibisabwa ku mirima y'uwiyandikisha byashyizweho gusa igihe handikwa domain nshya
- Gukosora: Amatangazo yo kugenzura amafaranga asigaye yashyizweho ku buryo ashobora guhishwa
- Gukosora: Byemejwe ko amakuru y'uwiyandikisha yo kwishyura muri WooCommerce agumaho
- Gukosora: Ibisabwa ku makuru y'itumanaho y'uwiyandikisha byashyizwe mu bikorwa mu gihe cyo kwiyandikisha
- Gukosora: Byabujijwe ko ibicuruzwa byo kwandikisha domain bikoranwa inyungu ya 0%
- Gukosora: Amahitamo ya domain n'ibiciro byagumishijwe mu rugendo rwa session yo kwishyura
- Gukosora: Kwerekana ifaranga ry'ibiciro bya domain za HostAfrica byanonosowe
- Gukosora: Imikorere ya form-action yo kwishyura yanojejwe kugira ngo hirindwe kudahuza kwa query-var za WP-core
- Byanonosowe: Inyandiko z'iboneza ry'umucuruzi wa HostAfrica zahujwe mu mabwiriza yo gutangiza

Version 1.2.0 - Yasohotse ku wa 2026-05-25
- Gishya: HostAfrica yongewemo nk'ihuzwa ryo kugurisha domains rifite ubufasha bwo kwishyura, umufasha wo gutangiza, gushakisha, TLD/ibiciro, kwandikisha, kongerera igihe, kwimura, nameserver, DNS, EPP code, gufunga registrar, no kurinda ID
- Gishya: Openprovider yongewemo nk'ihuzwa ryo kugurisha domains rifite ubufasha bw'ibiciro by'umucuruzi, kwandikisha, kongerera igihe, kwimura, nameserver, DNS, EPP code, gufunga registrar, ubuzima bwite bwa WHOIS, no guhuza TLD
- Gishya: Hostinger yongewemo nk'ihuzwa ryo kugurisha domains rikoresha Hostinger API token isangiwe ivuye mu ihuzwa ry'ibanze, ku igenzura ry'uko iboneka, kwandikisha, kuvugurura nameserver, gufunga registrar, n'ubuzima bwite bwa WHOIS
- Byanonosowe: Hyongewemo docblocks z'ibikorwa n'amasakuzo y'ubuzima bwa domain kugira ngo bifashe abatekinisiye mu ihuzwa
- Byanonosowe: Metadata y'ubwuzuzanye bwa plugin yavuguruwe kuri WordPress 7.0 muri readme ya addon
- Byanonosowe: Inyandikorugero z'igenamigambi zikoreshwa mu guhuza isohoka rizaza zavuguruwe

Version 1.1.0 - Yasohotse ku wa 2026-05-08
- Gishya: Gukora DNS record (add_dns_record) byashyizwe mu bikorwa kuri registrars za ResellerClub, Enom, na OpenSRS
- Gukosora: Umusesenguzi wa Default DNS Records ubu yemera tokens za {DOMAIN} na {SITE_URL}
- Gukosora: Slugs z'umurima wo guhitamo domain mu kwishyura zashyizwe muri namespace kugira ngo hatabaho kugongana na site_url

Version 1.0.8 - Yasohotse ku wa 2026-05-07
- Gukosora: Ibiciro bya domain bya ResellerClub ubu bizana ibiciro by'ikiguzi bya live bivuye kuri endpoint ya API ikwiye

Version 1.0.7 - Yasohotse ku wa 2026-05-06
* Gukosora: ResellerClub test_connection yohereza parameter ya tlds isabwa (#224)

Version 1.0.6 - Yasohotse ku wa 2026-05-05
* Gukosora: Kwandikisha domain muri ResellerClub ubu bikora neza hakoreshejwe uburyo bunoze bwo gukemura igisubizo cya API n'iyohereza ry'umutanga rigengwa na registry
* Gukosora: Kunonosora UX y'urupapuro rwa admin rwo Kwandikisha Domain
* Byavanyweho: Ihuzwa rya CyberPanel registrar

Version 1.0.5 - Yasohotse ku wa 2026-04-02
* Gishya: Ihuzwa rya GoDaddy registrar ryo kwandikisha no gucunga domain
* Gishya: Ihuzwa rya NameSilo registrar
* Gishya: Ihuzwa rya ResellerClub registrar
* Gishya: Kwemeza mu buryo bwikora domain yohereza SES igihe domain iguzwe kandi ihujwe
* Gukosora: Kurinda constants za plugin kongera gusobanurwa mu bidukikije by'igerageza
* Gukosora: MySQL flags zigabanywa amagambo neza muri install-wp-tests.sh

Version 1.0.4 - Yasohotse ku wa 2026-03-14
* **Gukosora:** Assets zimwe za css zari zibuze
* **Gukosora:** Ikosa rijyanye na tlds zitaboneka

Version 1.0.3 - Yasohotse ku wa 2026-03-09
* **Gukosora:** Amakosa ya Vue reactive property (domain_option, selected_domain, domain_provider) igihe hakoreshejwe inyandikorugero ya legacy signup hamwe na shortcode yo kwishyura
* **Gukosora:** Kudahuza k'umurima wo kwinjizamo subdomain n'inyandiko nini cyane mu murima wo guhitamo domain mu kwishyura
* **Gukosora:** Hisha igice cy'ibanze cya "URL yawe izaba" igihe umurima wo guhitamo domain uhari

Version 1.0.2 - Yasohotse ku wa 2026-03-01
* **Byanonosowe:** Igenamiterere rusange ry'inyungu ryavanywe ku rupapuro rw'igenamiterere — ibiciro ubu ni ibya buri gicuruzwa gusa
* **Byanonosowe:** Hyongewemo ihuza rya "Gucunga Ibicuruzwa bya Domain" ku rupapuro rw'igenamiterere kugira ngo kugendamo byihute
* **Byanonosowe:** Ibisobanuro by'imirima n'udufasha two hejuru bisobanutse kurushaho ku igenamiterere ry'ibicuruzwa bya domain (catch-all vs TLD-specific, ubwoko bw'inyungu, ibiciro by'ibanze)
* **Byanonosowe:** Ibisobanuro byiza kurushaho ku rupapuro rw'igenamiterere hose (gushaka TLDs, kongerera igihe, DNS, amatangazo)

Version 1.0.1 - Yasohotse ku wa 2026-02-27

* **Gishya:** Igikoresho cyo kwinjiza TLD cyo gucunga ibiciro ku bwinshi
* **Gishya:** Ubufasha bw’ibiciro by’intangiriro ku bicuruzwa bya domaine
* **Gishya:** Urutonde rw’ibizamini bya E2E hakoreshejwe Cypress
* **Gishya:** Inyandikorugero za email ku bumenyeshajwe bw’inzira y’ubuzima bwa domaine
* **Gishya:** Imyanya y’aderesi y’uwiyandikisha kuri modal yo kwandikisha domaine mu buyobozi, yuzuzwa mbere hakurikijwe amasetingi
* **Gishya:** Imigaragarire y’umukiriya yo gucunga DNS ifite ubufasha bwo kongeramo, guhindura, no gusiba records
* **Gishya:** Ihitamo rya checkout rya "Zana domaine yawe" rifite guhuza domaine mu buryo bwikora
* **Gishya:** Gukora site URL mu buryo bwikora uhereye ku izina rya domaine mu gihe cya checkout
* **Gishya:** Iboneza rya nameserver isanzwe na DNS record mu masetingi
* **Gishya:** Ibisobanuro byo kwandikisha domaine no gucunga DNS ku rupapuro rw’ingenzi rwo guhindura domaine
* **Gishya:** Setup wizard yikorera igicuruzwa cya domaine gisanzwe gifite amahitamo asanzwe yumvikana
* **Gishya:** Guhuza TLD buri munsi mu buryo bwikora binyuze muri cron ku batanga serivisi bose babonejwe
* **Gishya:** Kurinda ubuzima bwite bwa WHOIS bifite iboneza kuri buri gicuruzwa (bihora bifunguye, ihitamo ry’umukiriya, cyangwa byahagaritswe)
* **Gishya:** Akazu ko guhitamo ubuzima bwite bwa WHOIS kuri checkout gafite kugaragaza igiciro n’ubufasha bwa dark mode
* **Gishya:** Urupapuro rw’ubuyobozi rwa Register Domain rwo kwandikisha domaine intoki
* **Gishya:** Kuvugurura plugin mu buryo bwikora binyuze kuri server y’amavugurura ya Ultimate Multisite
* **Gishya:** Tab yo kuyungurura ubwoko bw’igicuruzwa cya domaine mu mbonerahamwe y’urutonde rw’ibicuruzwa ifite imiterere ya badge y’umuhondo wijimye
* **Gishya:** Imyanya y’amakuru y’uwiyandikisha (izina, aderesi, umujyi, leta, kode y’iposita, igihugu, telefone) kuri form ya checkout ya domaine
* **Gishya:** Kugenzura imyanya y’uwiyandikisha mbere yo guhamagara API y’umwanditsi wa domaine, hamwe n’ubutumwa bw’amakosa busobanutse
* **Gishya:** Imiyoboro ya log yihariye ku mutanga serivisi ku byabaye mu kwandikisha domaine (urugero: domain-seller-namecheap.log)
* **Gishya:** Imyanya y’amakuru y’uwiyandikisha kuri form nyamukuru ya checkout yo kwiyandikisha/gufungura konti (igaragazwa iyo wandikisha domaine)
* **Byanonosowe:** Umwanya wa checkout wa Domain Search wasimbujwe umwanya umwe wa Domain Selection ushyigikira tabs za subdomain, kwandikisha, na domaine isanzwe ihari
* **Byanonosowe:** Amasetingi y’igicuruzwa cya domaine agaragazwa imbere ku rupapuro rwo guhindura igicuruzwa binyuze muri sisitemu y’ingenzi ya widget
* **Byanonosowe:** Amakuru ya domaine y’umukiriya ahuzwa na widget y’ingenzi yo guhuza domaine aho kuba metabox yigenga
* **Byanonosowe:** Wizard yo kwinjiza TLD yoroshyijwe iba guhuza rimwe gusa riturutse ku batanga serivisi bose
* **Byanonosowe:** Kuboneka kwa domaine ya Namecheap gukoresha ihamagara rya batch API kugira ngo ishakisha ryihute
* **Byanonosowe:** API y’ibiciro ya Namecheap ikoresha parameters nyazo no gusesengura igisubizo neza
* **Byanonosowe:** Ububiko bwa TLD bwashyizwe hamwe muri network option imwe
* **Byanonosowe:** Kwandika ibikorwa bya domaine muri log ku mpinduka za DNS, transfers, no gushyira mu bikorwa iboneza
* **Byanonosowe:** Guhuza TLD kuzuye kwa OpenSRS hakoreshejwe urutonde nyamukuru rwa IANA rufite kugenzura kwa batch
* **Byanonosowe:** Guhuza TLD kuzuye kwa Namecheap hakoreshejwe ibisabwa bya API bifite pagination
* **Byanonosowe:** Classes z’abatanga serivisi za kera zasimbujwe uburyo bwa Integration Registry
* **Byanonosowe:** Panel y’amasetingi ifite iboneza rya DNS na transfer
* **Byanonosowe:** Nimero za telefone zihindurwa mu buryo bwikora ku format y’umwanditsi wa domaine ya +CC.NNN
* **Byanonosowe:** Kugenzura umwanya wa telefone gukuramo inyuguti z’imitunganyirize mbere yo kohereza
* **Byanonosowe:** Icyifuzo cya verisiyo cyazamuwe kuri Ultimate Multisite 2.4.12 gifite itangazo risobanutse kurushaho
* **Byanonosowe:** CI workflow ikoresha checkout ikwiye kuri addon na plugin y’ingenzi
* **Byanonosowe:** prepare_registrant_info() isoma muri user meta yabitswe na checkout, ikagira billing address fallback
* **Byakosowe:** Domain search AJAX yananiwe ku bakoresha batinjiye muri konti mu gihe cya checkout
* **Byakosowe:** Domain pricing AJAX yananiwe ku bakoresha batinjiye muri konti mu gihe cya checkout
* **Byakosowe:** Ikosa rikomeye rya Spyc class redeclaration igihe hakoreshwa amategeko ya WP-CLI
* **Byakosowe:** Igihe cya timeout cya Namecheap sandbox API cyari gito cyane
* **Byakosowe:** Umwandiko wa buto ya Select mu gushakisha domaine ntiwagaragaraga ku ibara ry’icyatsi
* **Byakosowe:** Kwandikisha domaine byananirwaga n’ikosa rya "RegistrantFirstName is Missing" bitewe n’amakuru y’itumanaho abura
* **Byakosowe:** Domain record yakozwe ifite blog_id=0 igihe site yari itarabaho mu gihe cya checkout
* **Byakosowe:** Isetingi ya TLDs zisanzwe yagarukaga nka string aho kuba array yasesenguwe
* **Byakuweho:** Urupapuro rw’ubuyobozi rwa Domain Management rwigenga — ubu bicungwa binyuze mu mpapuro z’ingenzi za domaine

Verisiyo 1.0.0 - Yasohotse ku wa 2025-09-28

**Kongera kwandika bikomeye kuri Ultimate Multisite v2**

* **Gishya:** Kongera kwandika byuzuye hakoreshejwe imyubakire igezweho ya PHP 7.4+
* **Gishya:** Kwihuza nta nkomyi na sisitemu ya checkout ya Ultimate Multisite v2
* **Gishya:** Gucunga ibicuruzwa bya domaine bifite amahitamo y’ibiciro ahinduka
* **Gishya:** Imyubakire ishyigikira abatanga serivisi ba domaine benshi
* **Gishya:** Kwivugurura mu buryo bwikora no kwihuza na subscription
* **Gishya:** Imigaragarire y’umukiriya yo gucunga domaine
* **Gishya:** Gukurikirana domaine n’amalog mu buyobozi
* **Gishya:** Ubufasha bwa coupon ku bicuruzwa bya domaine
* **Gishya:** Gucunga amasetingi mu buryo bwuzuye
* **Gishya:** Codebase yagurwa byoroshye kandi ibereye abategura porogaramu
* **Byanonosowe:** Umutanga serivisi wa OpenSRS yavuguruwe afite ubufasha bw’ibiranga bwuzuye
* **Byanonosowe:** UI igezweho ihuye na Ultimate Multisite v2
* **Byakosowe:** Code yose ya v1 itagikoreshwa yavuguruwe ku bipimo bya v2
* **Byakuweho:** Guhuza na v1 ya kera (impinduka isenya ibihari)

### Verisiyo Zabanjirijeho (v1 ya Kera) {#previous-versions-v1-legacy}

### Verisiyo 0.0.3 - 20/08/2019 {#version-003---20082019}

* Byakosowe: Kudahuza na Groundhogg CRM
* Icyitonderwa: Iyi ni yo yasohotse bwa nyuma ihuza na v1

### Verisiyo 0.0.2 - 07/12/2018 {#version-002---07122018}

* Byakosowe: Umwanya wa License Key wakuweho
* Byakosowe: Tabs za gahunda zaburaga igihe feature plugin iba ifunguye
* Byanonosowe: Hyongewemo buto yo gusimbuka ku mwanya wo kwiyandikisha

### Verisiyo 0.0.1 - Isohora rya Mbere {#version-001---initial-release}

* Kwihuza kw’ibanze kwa OpenSRS kuri WP Ultimo v1
* Gushakisha no kwandikisha domaine byoroshye
* Uburenganzira bwa domaine bushingiye kuri gahunda
