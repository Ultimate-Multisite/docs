---
title: Loga Athruithe Díoltóra Fearainn
sidebar_position: 99
_i18n_hash: 6b9be73c1503d8df8a806bb02b241873
---
# Loga Athruithe Domain Seller {#domain-seller-changelog}

Leagan 1.3.0 - Eisithe ar 2026-06-02
- Nua: Cuireadh rabhadh network-admin leis nuair a éiríonn iarmhéid athdhíoltóra HostAfrica ró-íseal
- Nua: Cuireadh mapáil uathoibríoch ar fhearainn nuachláraithe chuig suíomh an líonra leis
- Ceartú: Cuireadh riachtanais réimsí an chláraí i bhfeidhm amháin agus fearann nua á chlárú
- Ceartú: Rinneadh fógraí iarmhéid monatóireachta in-díbhéilte
- Ceartú: Cinntíodh go gcaomhnaítear sonraí billeála cláraitheora WooCommerce
- Ceartú: Cuireadh riachtanais teagmhála cláraitheora i bhfeidhm le linn clárúcháin
- Ceartú: Cuireadh cosc ar tháirgí clárúcháin fearainn a chruthú le marcáil 0%
- Ceartú: Caomhnaíodh roghnúcháin fearainn agus praghsáil trí shreabhadh seisiúin checkout
- Ceartú: Feabhsaíodh taispeáint airgeadra praghsála fearainn HostAfrica
- Ceartú: Feabhsaíodh iompar form-action an checkout chun neamhréireachtaí query-var WP-core a chosc
- Feabhsaithe: Nascadh doiciméadú cumraíochta athdhíoltóra HostAfrica sa treoir socraithe

Leagan 1.2.0 - Eisithe ar 2026-05-25
- Nua: Cuireadh HostAfrica leis mar chomhtháthú díola fearainn le tacaíocht do checkout, draoi socraithe, cuardach, TLD/praghsáil, clárúchán, athnuachan, aistriú, nameserver, DNS, cód EPP, glas cláraitheora, agus cosaint ID
- Nua: Cuireadh Openprovider leis mar chomhtháthú díola fearainn le tacaíocht do phraghsáil athdhíoltóra, clárúchán, athnuachan, aistriú, nameserver, DNS, cód EPP, glas cláraitheora, príobháideachas WHOIS, agus sioncronú TLD
- Nua: Cuireadh Hostinger leis mar chomhtháthú díola fearainn ag úsáid an token API comhroinnte Hostinger ón gcroí-chomhtháthú le haghaidh seiceálacha infhaighteachta, clárúcháin, nuashonruithe nameserver, glas cláraitheora, agus príobháideachas WHOIS
- Feabhsaithe: Cuireadh docblocks gnímh agus scagaire saolré fearainn leis mar threoir do chomhtháthú forbróra
- Feabhsaithe: Nuashonraíodh meiteashonraí comhoiriúnachta plugin go WordPress 7.0 sa readme addon
- Feabhsaithe: Nuashonraíodh teimpléid phleanála a úsáidtear le haghaidh comhordú eisiúna atá le teacht

Leagan 1.1.0 - Eisithe ar 2026-05-08
- Nua: Cuireadh cruthú taifead DNS (add_dns_record) i bhfeidhm do chláraitheoirí ResellerClub, Enom, agus OpenSRS
- Ceartú: Glacann parsálaí réamhshocraithe Taifead DNS anois le tokens {DOMAIN} agus {SITE_URL}
- Ceartú: Cuireadh spás ainmneacha le slugaí réimse checkout roghnúcháin fearainn chun imbhuailtí le site_url a chosc

Leagan 1.0.8 - Eisithe ar 2026-05-07
- Ceartú: Faigheann praghsáil fearainn ResellerClub praghsanna costais bheo anois ón endpoint API ceart

Leagan 1.0.7 - Eisithe ar 2026-05-06
* Ceartú: Seolann ResellerClub test_connection an paraiméadar tlds riachtanach (#224)

Leagan 1.0.6 - Eisithe ar 2026-05-05
* Ceartú: Oibríonn clárúchán fearainn ResellerClub i gceart anois le láimhseáil freagartha API fheabhsaithe agus ródú soláthraí faoi stiúir na clárlainne
* Ceartú: Feabhsuithe UX ar leathanach admin Register Domain
* Bainte: Comhtháthú cláraitheora CyberPanel

Leagan 1.0.5 - Eisithe ar 2026-04-02
* Nua: Comhtháthú cláraitheora GoDaddy le haghaidh clárúchán agus bainistíocht fearainn
* Nua: Comhtháthú cláraitheora NameSilo
* Nua: Comhtháthú cláraitheora ResellerClub
* Nua: Uath-fhíoraigh fearann seolta SES ar cheannach agus mapáil fearainn
* Ceartú: Cosain tairisigh plugin ar athshainiú i dtimpeallacht tástála
* Ceartú: Roinntear focail bhratacha MySQL i gceart in install-wp-tests.sh

Leagan 1.0.4 - Eisithe ar 2026-03-14
* **Ceartú:** Roinnt sócmhainní css ar iarraidh
* **Ceartú:** Earráid a bhaineann le tlds nach bhfuil ar fáil

Leagan 1.0.3 - Eisithe ar 2026-03-09
* **Ceartú:** Earráidí airí Vue imoibríocha (domain_option, selected_domain, domain_provider) agus an teimpléad sínithe suas oidhreachta á úsáid leis an shortcode checkout
* **Ceartú:** Mí-ailíniú réimse ionchuir fofhearainn agus téacs rómhór sa réimse checkout roghnúcháin fearainn
* **Ceartú:** Folaigh an bloc réamhamhairc "Is é a bheidh i do URL" nuair atá an réimse roghnúcháin fearainn i láthair

Leagan 1.0.2 - Eisithe ar 2026-03-01
* **Feabhsaithe:** Baineadh socruithe marcála domhanda den leathanach socruithe — tá praghsáil anois in aghaidh an táirge amháin
* **Feabhsaithe:** Cuireadh nasc "Bainistigh Táirgí Fearainn" leis ar an leathanach socruithe le haghaidh nascleanúint thapa
* **Feabhsaithe:** Cur síos níos soiléire ar réimsí agus leideanna uirlisí do shocruithe táirgí fearainn (catch-all vs TLD-shonrach, cineálacha marcála, praghsáil tosaigh)
* **Feabhsaithe:** Cur síos níos fearr ar fud an leathanaigh socruithe (cuardaigh TLDanna, athnuachaintí, DNS, fógraí)

Leagan 1.0.1 - Eisithe ar 2026-02-27

* **Nua:** Uirlis iompórtála TLD le haghaidh bainistiú praghsála ar an mórchóir
* **Nua:** Tacaíocht praghsála tosaigh do tháirgí fearainn
* **Nua:** Sraith tástálacha E2E le Cypress
* **Nua:** Teimpléid ríomhphoist d’fhógraí shaolré fearainn
* **Nua:** Réimsí seolta an chláraitheora ar mhódal clárúcháin fearainn an riarthóra, réamhlíonta ó shocruithe
* **Nua:** Comhéadan bainistíochta DNS do chustaiméirí le tacaíocht chun taifid a chur leis, a chur in eagar, agus a scriosadh
* **Nua:** Rogha seiceáil amach "Tabhair leat d’fhearann féin" le mapáil uathoibríoch fearainn
* **Nua:** URL suímh a ghiniúint go huathoibríoch ó ainm fearainn le linn seiceáil amach
* **Nua:** Cumraíocht réamhshocraithe ainmfhreastalaí agus taifid DNS i socruithe
* **Nua:** Sonraí clárúcháin fearainn agus bainistíocht DNS ar leathanach eagarthóireachta croífhearainn
* **Nua:** Cruthaíonn an draoi socraithe táirge fearainn réamhshocraithe go huathoibríoch le réamhshocruithe ciallmhara
* **Nua:** Sioncronú uathoibríoch laethúil TLD trí cron ar fud na soláthraithe cumraithe go léir
* **Nua:** Cosaint phríobháideachais WHOIS le cumraíocht in aghaidh an táirge (i gcónaí ar siúl, rogha an chustaiméara, nó díchumasaithe)
* **Nua:** Ticbhosca príobháideachais WHOIS ag seiceáil amach le taispeáint praghsála agus tacaíocht mód dorcha
* **Nua:** Leathanach riarthóra Cláraigh Fearann le haghaidh clárú fearainn de láimh
* **Nua:** Nuashonruithe uathoibríocha breiseáin trí fhreastalaí nuashonraithe Ultimate Multisite
* **Nua:** Cluaisín scagaire cineáil táirge fearainn i dtábla liosta táirgí le stíliú suaitheantais chorcra
* **Nua:** Réimsí teagmhála cláraitheora (ainm, seoladh, cathair, stát, cód poist, tír, guthán) ar fhoirm seiceáil amach fearainn
* **Nua:** Bailíochtú réimsí cláraitheora sula nglaofar ar API cláraitheora le teachtaireachtaí earráide soiléire
* **Nua:** Cainéil logála shonracha don soláthraí d’imeachtaí clárúcháin fearainn (m.sh. domain-seller-namecheap.log)
* **Nua:** Réimsí teagmhála cláraitheora ar an bpríomhfhoirm clárúcháin/sínithe suas agus seiceáil amach (taispeánta nuair a chláraítear fearann)
* **Feabhsaithe:** Cuireadh réimse aontaithe Roghnú Fearainn in ionad réimse seiceáil amach Cuardach Fearainn, le tacaíocht do chluaisíní fofhearainn, clárúcháin, agus fearainn atá ann cheana
* **Feabhsaithe:** Rindreálann socruithe táirge fearainn inlíne ar leathanach eagarthóireachta táirge trí chóras giuirléidí an chroí
* **Feabhsaithe:** Ceanglaíonn faisnéis fearainn an chustaiméara isteach i ngiuirléid mhapála fearainn an chroí in ionad metabox neamhspleách
* **Feabhsaithe:** Simplíodh draoi iompórtála TLD go sioncronú aonchliceáil ó gach soláthraí
* **Feabhsaithe:** Úsáideann infhaighteacht fearainn Namecheap glao API baisce le haghaidh cuardach níos tapa
* **Feabhsaithe:** Úsáideann API praghsála Namecheap paraiméadair chearta agus parsáil freagartha cheart
* **Feabhsaithe:** Stóráil láraithe TLD i rogha líonra amháin
* **Feabhsaithe:** Logáil gníomhaíochta fearainn d’athruithe DNS, aistrithe, agus cur i bhfeidhm cumraíochta
* **Feabhsaithe:** Sioncronú iomlán TLD do OpenSRS ag úsáid máistirliosta IANA le bailíochtú baisce
* **Feabhsaithe:** Sioncronú iomlán TLD do Namecheap le hiarratais API leathanaithe
* **Feabhsaithe:** Cuireadh patrún Chlárlann Comhtháthaithe in ionad aicmí oidhreachta soláthraithe
* **Feabhsaithe:** Painéal socruithe le cumraíocht DNS agus aistrithe
* **Feabhsaithe:** Formáidítear uimhreacha gutháin go huathoibríoch go formáid chláraitheora +CC.NNN
* **Feabhsaithe:** Baineann bailíochtú réimse gutháin carachtair fhormáidithe roimh chur isteach
* **Feabhsaithe:** Ardaíodh riachtanas leagain go Ultimate Multisite 2.4.12 le fógra níos soiléire
* **Feabhsaithe:** Úsáideann sreabhadh oibre CI an seiceáil amach ceart don bhreiseán breise agus don chroíbhreiseán araon
* **Feabhsaithe:** Léann prepare_registrant_info() ó mheitea úsáideora sábháilte ón seiceáil amach le cúlchiste seolta billeála
* **Ceartaithe:** AJAX cuardaigh fearainn ag teip d’úsáideoirí nach bhfuil logáilte isteach le linn seiceáil amach
* **Ceartaithe:** AJAX praghsála fearainn ag teip d’úsáideoirí nach bhfuil logáilte isteach le linn seiceáil amach
* **Ceartaithe:** Earráid mharfach athdhearbhaithe aicme Spyc agus orduithe WP-CLI á rith
* **Ceartaithe:** Teorainn ama API bosca gainimh Namecheap ró-ghearr
* **Ceartaithe:** Téacs an chnaipe Roghnaigh i gcuardach fearainn dofheicthe ar chúlra glas
* **Ceartaithe:** Clárú fearainn ag teip leis an earráid "RegistrantFirstName is Missing" mar gheall ar easpa faisnéise teagmhála
* **Ceartaithe:** Taifead fearainn cruthaithe le blog_id=0 nuair nach raibh an suíomh ann fós ag am seiceáil amach
* **Ceartaithe:** Socrú TLDanna réamhshocraithe á thabhairt ar ais mar theaghrán in ionad eagair pharsáilte
* **Bainte:** Leathanach neamhspleách riarthóra Bainistíocht Fearainn — láimhseáiltear anois é trí leathanaigh chroífhearainn

Leagan 1.0.0 - Eisithe ar 2025-09-28

**Athscríobh Mór do Ultimate Multisite v2**

* **Nua:** Athscríobh iomlán le hailtireacht nua-aimseartha PHP 7.4+
* **Nua:** Comhtháthú gan uaim le córas seiceáil amach Ultimate Multisite v2
* **Nua:** Bainistíocht táirgí fearainn le roghanna praghsála solúbtha
* **Nua:** Ailtireacht tacaíochta do sholáthraithe fearainn iolracha
* **Nua:** Comhtháthú uath-athnuachana agus síntiúis
* **Nua:** Comhéadan bainistíochta fearainn do chustaiméirí
* **Nua:** Monatóireacht agus logaí fearainn don riarthóir
* **Nua:** Tacaíocht cúpóin do tháirgí fearainn
* **Nua:** Bainistíocht chuimsitheach socruithe
* **Nua:** Bunachar cód insínte atá cairdiúil d’fhorbróirí
* **Feabhsaithe:** Soláthraí OpenSRS nuashonraithe le tacaíocht iomlán gnéithe
* **Feabhsaithe:** UI nua-aimseartha atá comhsheasmhach le Ultimate Multisite v2
* **Ceartaithe:** Gach cód dímholta v1 nuashonraithe go caighdeáin v2
* **Bainte:** Comhoiriúnacht oidhreachta v1 (athrú bristeach)

### Leaganacha Roimhe Seo (Oidhreacht v1) {#previous-versions-v1-legacy}

### Leagan 0.0.3 - 20/08/2019 {#version-003---20082019}

* Ceartaithe: Neamh-chomhoiriúnacht le Groundhogg CRM
* Nóta: Ba é seo an t-eisiúint dheireanach a bhí comhoiriúnach le v1

### Leagan 0.0.2 - 07/12/2018 {#version-002---07122018}

* Ceartaithe: Baineadh an réimse Eochair Cheadúnais
* Ceartaithe: Cluaisíní plean in easnamh nuair atá an breiseán gné gníomhach
* Feabhsaithe: Cuireadh cnaipe scipeála leis an réimse clárúcháin

### Leagan 0.0.1 - Eisiúint Tosaigh {#version-001---initial-release}

* Comhtháthú bunúsach OpenSRS do WP Ultimo v1
* Cuardach agus clárú simplí fearainn
* Ceadanna fearainn bunaithe ar phlean
