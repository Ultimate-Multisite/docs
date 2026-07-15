---
title: Ŝanĝoprotokolo de Domajna Vendisto
sidebar_position: 99
_i18n_hash: 6b9be73c1503d8df8a806bb02b241873
---
# Domain Seller Ŝanĝoprotokolo

Versio 1.3.0 - Eldonita je 2026-06-02
- Nova: Aldonita averto por reta administranto kiam la saldo de HostAfrica revendisto fariĝas tro malalta
- Nova: Aldonita aŭtomata mapado de nove registritaj domajnoj al la reta retejo
- Korekto: Aplikitaj postuloj pri kampoj de registranto nur dum registrado de nova domajno
- Korekto: Igitaj avizoj pri monitorado de saldo forigeblaj
- Korekto: Certigis ke la fakturaj detaloj de WooCommerce registranto estas konservataj
- Korekto: Devigitaj postuloj pri kontakto de registranto dum registrado
- Korekto: Malhelpis kreadon de domajnoregistraj produktoj kun 0% kromprezo
- Korekto: Konservitaj domajnaj elektoj kaj prezoj tra la pagfina sesia fluo
- Korekto: Plibonigita valutomontro de HostAfrica domajnaj prezoj
- Korekto: Plibonigita konduto de la pagfina formulara ago por malhelpi miskongruojn de query-var de WP-core
- Plibonigita: Ligita dokumentado pri agordo de HostAfrica revendisto en agorda gvidado

Versio 1.2.0 - Eldonita je 2026-05-25
- Nova: Aldonita HostAfrica kiel domajnvenda integriĝo kun subteno por pagfino, agorda asistanto, serĉo, TLD/prezoj, registrado, renovigo, transigo, nomservilo, DNS, EPP kodo, registrista ŝloso kaj ID-protekto
- Nova: Aldonita Openprovider kiel domajnvenda integriĝo kun subteno por revendistaj prezoj, registrado, renovigo, transigo, nomservilo, DNS, EPP kodo, registrista ŝloso, WHOIS privateco kaj TLD sinkronigo
- Nova: Aldonita Hostinger kiel domajnvenda integriĝo uzanta la komunan Hostinger API token de la kerna integriĝo por disponeblecaj kontroloj, registrado, nomservilaj ĝisdatigoj, registrista ŝloso kaj WHOIS privateco
- Plibonigita: Aldonitaj docblocks por domajna vivocikla ago kaj filtrilo por gvidado de programista integriĝo
- Plibonigita: Ĝisdatigitaj kongruecaj metadatenoj de kromprogramo al WordPress 7.0 en la addon readme
- Plibonigita: Ĝisdatigitaj planaj ŝablonoj uzataj por kunordigo de venontaj eldonoj

Versio 1.1.0 - Eldonita je 2026-05-08
- Nova: Kreo de DNS registroj (add_dns_record) efektivigita por ResellerClub, Enom kaj OpenSRS registristoj
- Korekto: Defaŭlta analizilo de DNS registroj nun toleras {DOMAIN} kaj {SITE_URL} tokens
- Korekto: Slugs de pagfina kampo por domajna elekto nomspacigitaj por malhelpi kolizion kun site_url

Versio 1.0.8 - Eldonita je 2026-05-07
- Korekto: ResellerClub domajnaj prezoj nun prenas vivajn kostoprezojn de la ĝusta API finpunkto

Versio 1.0.7 - Eldonita je 2026-05-06
* Korekto: ResellerClub test_connection sendas postulatan tlds parametron (#224)

Versio 1.0.6 - Eldonita je 2026-05-05
* Korekto: ResellerClub domajnoregistrado nun funkcias ĝuste kun plibonigita traktado de API respondoj kaj registraĵe stirata provizanta vojigo
* Korekto: UX plibonigoj de la administra paĝo Register Domain
* Forigita: CyberPanel registrista integriĝo

Versio 1.0.5 - Eldonita je 2026-04-02
* Nova: GoDaddy registrista integriĝo por domajnoregistrado kaj administrado
* Nova: NameSilo registrista integriĝo
* Nova: ResellerClub registrista integriĝo
* Nova: Aŭtomate kontroli SES sendan domajnon ĉe domajna aĉeto kaj mapado
* Korekto: Protekti kromprogramajn konstantojn kontraŭ redifino en testa medio
* Korekto: MySQL flags vorto-disdividiĝas ĝuste en install-wp-tests.sh

Versio 1.0.4 - Eldonita je 2026-03-14
* **Korekto:** Iuj mankantaj css havaĵoj
* **Korekto:** Eraro rilata al nedisponeblaj tlds

Versio 1.0.3 - Eldonita je 2026-03-09
* **Korekto:** Vue reaktivaj proprietaj eraroj (domain_option, selected_domain, domain_provider) kiam oni uzas la heredan aliĝan ŝablonon kun la pagfina shortcode
* **Korekto:** Misvicigo de subdomajna eniga kampo kaj trogranda teksto en la pagfina kampo por domajna elekto
* **Korekto:** Kaŝi la antaŭrigardan blokon "Via URL estos" kiam la domajna elekta kampo ĉeestas

Versio 1.0.2 - Eldonita je 2026-03-01
* **Plibonigita:** Forigitaj tutmondaj kromprezaj agordoj de la agorda paĝo — prezoj nun estas ekskluzive po-produkta
* **Plibonigita:** Aldonita ligilo "Administri domajnajn produktojn" en agorda paĝo por rapida navigado
* **Plibonigita:** Pli klaraj kampopriskriboj kaj konsiletoj por agordoj de domajnaj produktoj (ĉiokapta kontraŭ TLD-specifa, kromprezaj tipoj, enkondukaj prezoj)
* **Plibonigita:** Pli bonaj priskriboj tra la agorda paĝo (serĉi TLD-ojn, renovigoj, DNS, sciigoj)

Versio 1.0.1 - Eldonita je 2026-02-27

* **Nova:** TLD-importa ilo por amasa prezadministro
* **Nova:** Enkonduka prezsubteno por domajnaj produktoj
* **Nova:** E2E-testa serio kun Cypress
* **Nova:** Retpoŝtaj ŝablonoj por sciigoj pri domajna vivociklo
* **Nova:** Kampoj de registranta adreso en administra modala fenestro por domajna registrado, antaŭplenigitaj el agordoj
* **Nova:** Interfaco por klienta DNS-administrado kun subteno por aldoni, redakti kaj forigi rikordojn
* **Nova:** "Kunportu vian propran domajnon" checkout-opcio kun aŭtomata domajna mapado
* **Nova:** Aŭtomate generi retejan URL el domajna nomo dum checkout
* **Nova:** Defaŭlta nameserver kaj DNS-rikorda agordo en agordoj
* **Nova:** Detaloj pri domajna registrado kaj DNS-administrado en la kerna domajna redakta paĝo
* **Nova:** Agorda sorĉisto aŭtomate kreas defaŭltan domajnan produkton kun prudentaj defaŭltoj
* **Nova:** Ĉiutaga aŭtomata TLD-sinkronigo per cron tra ĉiuj agorditaj provizantoj
* **Nova:** WHOIS-privateca protekto kun laŭprodukta agordo (ĉiam aktiva, klienta elekto, aŭ malŝaltita)
* **Nova:** WHOIS-privateca checkout-markobutono kun prezmontrado kaj subteno por malhela reĝimo
* **Nova:** Administra paĝo Registri Domajnon por mana domajna registrado
* **Nova:** Aŭtomataj plugin-ĝisdatigoj per Ultimate Multisite ĝisdatiga servilo
* **Nova:** Filtrila langeto por domajna produkta tipo en produkta listotabelo kun purpura insigna stilo
* **Nova:** Kampoj de registranta kontakto (nomo, adreso, urbo, ŝtato, poŝtkodo, lando, telefono) en domajna checkout-formularo
* **Nova:** Validigo de registrantaj kampoj antaŭ alvoko al registrara API kun klaraj erarmesaĝoj
* **Nova:** Provizanto-specifaj protokolaj kanaloj por domajnaj registradeventoj (ekz. domain-seller-namecheap.log)
* **Nova:** Kampoj de registranta kontakto en ĉefa registriĝa/signup checkout-formularo (montrataj kiam oni registras domajnon)
* **Plibonigita:** Anstataŭigis checkout-kampon Domajna Serĉo per unuigita kampo Domajna Elekto subtenanta langetojn por subdomajno, registrado kaj ekzistanta domajno
* **Plibonigita:** Domajnaj produktaj agordoj bildiĝas enlinie en produkta redakta paĝo per kerna widget-sistemo
* **Plibonigita:** Klienta domajna informo hokiĝas en kernan domajnan mapadan widget anstataŭ memstara metabox
* **Plibonigita:** TLD-importa sorĉisto simpligita al unu-klaka sinkronigo el ĉiuj provizantoj
* **Plibonigita:** Domajna havebleco de Namecheap uzas batch-API-alvokon por pli rapida serĉo
* **Plibonigita:** Prez-API de Namecheap uzas ĝustajn parametrojn kaj respondan analizadon
* **Plibonigita:** Centralizita TLD-stokado en unu sola reta opcio
* **Plibonigita:** Domajna agada protokolado por DNS-ŝanĝoj, transigoj kaj agorda apliko
* **Plibonigita:** Plena TLD-sinkronigo por OpenSRS uzante ĉefan liston de IANA kun batch-validigo
* **Plibonigita:** Plena TLD-sinkronigo por Namecheap kun paĝigitaj API-petoj
* **Plibonigita:** Anstataŭigis heredajn provizantajn klasojn per ŝablono Integration Registry
* **Plibonigita:** Agorda panelo kun DNS- kaj transiga agordo
* **Plibonigita:** Telefonnumeroj aŭtomate formatitaj al registrara formato +CC.NNN
* **Plibonigita:** Validigo de telefona kampo forigas formatigajn signojn antaŭ sendo
* **Plibonigita:** Versia postulo altigita al Ultimate Multisite 2.4.12 kun pli klara avizo
* **Plibonigita:** CI-laborfluo uzas taŭgan checkout por kaj aldonaĵo kaj kerna plugin
* **Plibonigita:** prepare_registrant_info() legas el checkout-konservita uzanta meta kun fakturadadresa rezervo
* **Korektita:** Domajna serĉa AJAX malsukcesis por ne-ensalutintaj uzantoj dum checkout
* **Korektita:** Domajna preza AJAX malsukcesis por ne-ensalutintaj uzantoj dum checkout
* **Korektita:** Mortiga eraro de Spyc-klasa redeklaro dum rulado de WP-CLI-komandoj
* **Korektita:** Namecheap sandbox API-tempoelĉerpiĝo tro mallonga
* **Korektita:** Teksto de butono Elekti en domajna serĉo ne videbla sur verda fono
* **Korektita:** Domajna registrado malsukcesis kun eraro "RegistrantFirstName is Missing" pro mankantaj kontaktinformoj
* **Korektita:** Domajna rikordo kreita kun blog_id=0 kiam retejo ankoraŭ ne ekzistis je checkout-tempo
* **Korektita:** Defaŭlta TLD-agordo revenis kiel ĉeno anstataŭ analizita tabelo
* **Forigita:** Memstara administra paĝo Domajna Administrado — nun pritraktata per kernaj domajnaj paĝoj

Versio 1.0.0 - Eldonita je 2025-09-28

**Grava Reverko por Ultimate Multisite v2**

* **Nova:** Kompleta reverko kun moderna PHP 7.4+-arkitekturo
* **Nova:** Seninterrompa integriĝo kun Ultimate Multisite v2 checkout-sistemo
* **Nova:** Domajna produkta administrado kun flekseblaj prezopcioj
* **Nova:** Arkitekturo por subteno de pluraj domajnaj provizantoj
* **Nova:** Aŭtomata renovigo kaj abonintegriĝo
* **Nova:** Klienta domajna administra interfaco
* **Nova:** Administra domajna monitorado kaj protokoloj
* **Nova:** Kupona subteno por domajnaj produktoj
* **Nova:** Ampleksa agorda administrado
* **Nova:** Programist-amika etendebla kodbazo
* **Plibonigita:** Ĝisdatigita OpenSRS-provizanto kun plena funkcia subteno
* **Plibonigita:** Moderna UI kongrua kun Ultimate Multisite v2
* **Korektita:** Ĉiu malaktuala v1-kodo ĝisdatigita al v2-normoj
* **Forigita:** Hereda v1-kongrueco (rompa ŝanĝo)

### Antaŭaj Versioj (v1 Hereda) {#previous-versions-v1-legacy}

### Versio 0.0.3 - 20/08/2019 {#version-003---20082019}

* Korektita: Nekongrueco kun Groundhogg CRM
* Noto: Ĉi tio estis la lasta v1-kongrua eldono

### Versio 0.0.2 - 07/12/2018 {#version-002---07122018}

* Korektita: Forigis la kampon License Key
* Korektita: Plan-langetoj mankis kiam la funkcia plugin estas aktiva
* Plibonigita: Aldonis preterpasan butonon en la registra kampo

### Versio 0.0.1 - Komenca Eldono {#version-001---initial-release}

* Baza OpenSRS-integriĝo por WP Ultimo v1
* Simpla domajna serĉo kaj registrado
* Plan-bazitaj domajnaj permesoj
