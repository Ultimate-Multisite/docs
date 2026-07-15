---
title: Domeinu-saltzailearen aldaketen erregistroa
sidebar_position: 99
_i18n_hash: 6b9be73c1503d8df8a806bb02b241873
---
# Domeinu-saltzailearen aldaketa-erregistroa

1.3.0 bertsioa - 2026-06-02an argitaratua
- Berria: network-admin abisu bat gehitu da HostAfrica birsaltzailearen saldoa baxuegi geratzen denean
- Berria: Erregistratu berri diren domeinuak sareko gunera automatikoki mapatzea gehitu da
- Konponketa: Erregistratzailearen eremu-eskakizunak domeinu berri bat erregistratzean bakarrik aplikatu dira
- Konponketa: Saldoaren jarraipen-oharrak baztergarri bihurtu dira
- Konponketa: WooCommerce erregistratzailearen fakturazio-xehetasunak gordetzen direla bermatu da
- Konponketa: Erregistratzailearen kontaktu-eskakizunak erregistroan zehar betearazi dira
- Konponketa: Domeinu-erregistroko produktuak %0ko markarekin sortzea eragotzi da
- Konponketa: Domeinu-hautaketak eta prezioak mantendu dira checkout saio-fluxuan zehar
- Konponketa: HostAfrica domeinu-prezioen monetaren bistaratzea hobetu da
- Konponketa: Checkout inprimaki-ekintzaren portaera hobetu da WP-core query-var desadostasunak saihesteko
- Hobetua: HostAfrica birsaltzailearen konfigurazio-dokumentazioa lotu da konfigurazio-gidan

1.2.0 bertsioa - 2026-05-25ean argitaratua
- Berria: HostAfrica gehitu da domeinu-salmentarako integrazio gisa, checkout, konfigurazio-morroi, bilaketa, TLD/prezio, erregistro, berritze, transferentzia, nameserver, DNS, EPP code, registrar lock eta ID babesaren euskarriarekin
- Berria: Openprovider gehitu da domeinu-salmentarako integrazio gisa, birsaltzaile-prezio, erregistro, berritze, transferentzia, nameserver, DNS, EPP code, registrar lock, WHOIS pribatutasun eta TLD sinkronizazioaren euskarriarekin
- Berria: Hostinger gehitu da domeinu-salmentarako integrazio gisa, core integrazioko partekatutako Hostinger API tokena erabiliz erabilgarritasun-egiaztapenetarako, erregistrorako, nameserver eguneratzeetarako, registrar lock eta WHOIS pribatutasunerako
- Hobetua: Domeinuaren bizi-zikloko ekintza- eta iragazki-docblockak gehitu dira garatzaileentzako integrazio-gidaritzarako
- Hobetua: Pluginaren bateragarritasun-metadatuak WordPress 7.0ra eguneratu dira gehigarriaren readme fitxategian
- Hobetua: Datozen argitalpenen koordinaziorako erabilitako plangintza-txantiloiak eguneratu dira

1.1.0 bertsioa - 2026-05-08an argitaratua
- Berria: DNS erregistroen sorrera (add_dns_record) inplementatu da ResellerClub, Enom eta OpenSRS erregistratzaileentzat
- Konponketa: DNS Records analizatzaile lehenetsiak orain {DOMAIN} eta {SITE_URL} tokenak onartzen ditu
- Konponketa: Domeinu-hautaketako checkout eremu-slugak namespaced egin dira site_url-rekin talka saihesteko

1.0.8 bertsioa - 2026-05-07an argitaratua
- Konponketa: ResellerClub domeinu-prezioek orain zuzeneko kostu-prezioak API endpoint zuzenetik eskuratzen dituzte

1.0.7 bertsioa - 2026-05-06an argitaratua
* Konponketa: ResellerClub test_connection-ek beharrezko tlds parametroa bidaltzen du (#224)

1.0.6 bertsioa - 2026-05-05ean argitaratua
* Konponketa: ResellerClub domeinu-erregistroak orain behar bezala funtzionatzen du, API erantzunen kudeaketa hobearekin eta erregistroak gidatutako hornitzaile-bideratzearekin
* Konponketa: Register Domain admin orriaren UX hobekuntzak
* Kendua: CyberPanel erregistratzaile-integrazioa

1.0.5 bertsioa - 2026-04-02an argitaratua
* Berria: GoDaddy erregistratzaile-integrazioa domeinu-erregistrorako eta kudeaketarako
* Berria: NameSilo erregistratzaile-integrazioa
* Berria: ResellerClub erregistratzaile-integrazioa
* Berria: SES bidalketa-domeinua automatikoki egiaztatzea domeinua eroste eta mapatzean
* Konponketa: Plugin konstanteak birdefinizioaren aurka babestu dira proba-ingurunean
* Konponketa: MySQL banderak behar bezala word-split egiten dira install-wp-tests.sh-en

1.0.4 bertsioa - 2026-03-14an argitaratua
* **Konponketa:** Falta ziren css asset batzuk
* **Konponketa:** Erabilgarri ez dauden tld-ekin lotutako errorea

1.0.3 bertsioa - 2026-03-09an argitaratua
* **Konponketa:** Vue propietate erreaktiboen erroreak (domain_option, selected_domain, domain_provider) checkout shortcode-arekin ondareko erregistro-txantiloia erabiltzean
* **Konponketa:** Azpidomeinuaren sarrera-eremuaren lerrokatze okerra eta testu handiegia domeinu-hautaketako checkout eremuan
* **Konponketa:** Ezkutatu "Your URL will be" aurrebista-blokea domeinu-hautaketako eremua presente dagoenean

1.0.2 bertsioa - 2026-03-01ean argitaratua
* **Hobetua:** Marka-ezarpen globalak ezabatu dira ezarpenen orritik — prezioak orain produktu bakoitzeko bakarrik dira
* **Hobetua:** "Manage Domain Products" esteka gehitu da ezarpenen orrian nabigazio azkarrerako
* **Hobetua:** Domeinu-produktuaren ezarpenetarako eremu-deskribapen eta argibide argiagoak (catch-all vs TLD-specific, marka motak, sarrerako prezioak)
* **Hobetua:** Deskribapen hobeak ezarpenen orri osoan (bilatu TLDak, berritzeak, DNS, jakinarazpenak)

1.0.1 bertsioa - 2026-02-27an argitaratua

* **Berria:** TLD inportatzeko tresna, prezioen kudeaketa masiborako
* **Berria:** Hasierako prezioen euskarria domeinu-produktuentzat
* **Berria:** E2E proba-multzoa Cypress-ekin
* **Berria:** Domeinuaren bizi-zikloko jakinarazpenetarako email txantiloiak
* **Berria:** Erregistratzailearen helbide-eremuak administratzailearen domeinu-erregistroko modalean, ezarpenetatik aurrez beteta
* **Berria:** Bezeroentzako DNS kudeaketa-interfazea, erregistroak gehitzeko, editatzeko eta ezabatzeko euskarriarekin
* **Berria:** "Ekarri zure domeinua" ordainketa-aukera, domeinu-mapatze automatikoarekin
* **Berria:** Gunearen URLa automatikoki sortzea domeinu-izenetik ordainketan zehar
* **Berria:** Nameserver lehenetsia eta DNS erregistroen konfigurazioa ezarpenetan
* **Berria:** Domeinu-erregistroaren xehetasunak eta DNS kudeaketa oinarrizko domeinua editatzeko orrian
* **Berria:** Konfigurazio-morroiak domeinu-produktu lehenetsi bat automatikoki sortzen du, lehenespen zentzudunekin
* **Berria:** Eguneroko TLD sinkronizazio automatikoa cron bidez konfiguratutako hornitzaile guztietan
* **Berria:** WHOIS pribatutasun-babesa produktu bakoitzeko konfigurazioarekin (beti aktibatuta, bezeroaren aukera edo desgaituta)
* **Berria:** WHOIS pribatutasuneko ordainketa-laukia, prezioen bistaratzearekin eta modu ilunerako euskarriarekin
* **Berria:** Register Domain administrazio-orria eskuzko domeinu-erregistrorako
* **Berria:** Pluginaren eguneratze automatikoak Ultimate Multisite eguneratze-zerbitzariaren bidez
* **Berria:** Domeinu-produktu motaren iragazki-fitxa produktuen zerrenda-taulan, bereizgarri morearen estiloarekin
* **Berria:** Erregistratzailearen kontaktu-eremuak (izena, helbidea, hiria, estatua, posta-kodea, herrialdea, telefonoa) domeinuaren ordainketa-inprimakian
* **Berria:** Erregistratzailearen eremu-balidazioa erregistratzailearen APIra deitu aurretik, errore-mezu argiekin
* **Berria:** Hornitzailearen araberako log kanalak domeinu-erregistroko gertaeretarako (adib. domain-seller-namecheap.log)
* **Berria:** Erregistratzailearen kontaktu-eremuak erregistro/alta nagusiko ordainketa-inprimakian (domeinu bat erregistratzean erakusten da)
* **Hobetua:** Domain Search ordainketa-eremua ordeztu da Domain Selection eremu bateratuarekin, azpidomeinu, erregistratu eta lehendik dagoen domeinu fitxak onartzen dituena
* **Hobetua:** Domeinu-produktuaren ezarpenak lerroan bertan errendatzen dira produktua editatzeko orrian, oinarrizko widget sistemaren bidez
* **Hobetua:** Bezeroaren domeinu-informazioa oinarrizko domeinu-mapatze widgetean integratzen da, metabox independente baten ordez
* **Hobetua:** TLD inportatzeko morroia sinplifikatu da hornitzaile guztietatik klik bakarreko sinkronizazioa egiteko
* **Hobetua:** Namecheap domeinuaren erabilgarritasunak batch API deia erabiltzen du bilaketa azkarragoa egiteko
* **Hobetua:** Namecheap prezioen APIak parametro zuzenak eta erantzunaren parsing-a erabiltzen ditu
* **Hobetua:** TLD biltegiratze zentralizatua sare-aukera bakar batean
* **Hobetua:** Domeinu-jardueraren logging-a DNS aldaketetarako, transferentzietarako eta konfigurazio-aplikaziorako
* **Hobetua:** OpenSRS-rako TLD sinkronizazio osoa, IANA zerrenda nagusia erabiliz batch balidazioarekin
* **Hobetua:** Namecheap-erako TLD sinkronizazio osoa, orridun API eskaerekin
* **Hobetua:** Hornitzaile-klase zaharrak Integration Registry ereduarekin ordeztu dira
* **Hobetua:** Ezarpen-panela DNS eta transferentzia-konfigurazioarekin
* **Hobetua:** Telefono-zenbakiak automatikoki formateatzen dira +CC.NNN erregistratzaile-formatuan
* **Hobetua:** Telefono-eremuaren balidazioak formatu-karaktereak kentzen ditu bidali aurretik
* **Hobetua:** Bertsio-eskakizuna Ultimate Multisite 2.4.12ra igo da, jakinarazpen argiagoarekin
* **Hobetua:** CI lan-fluxuak checkout egokia erabiltzen du bai addon-erako bai oinarrizko pluginerako
* **Hobetua:** prepare_registrant_info() checkout-ean gordetako erabiltzailearen metatik irakurtzen du, fakturazio-helbideko fallback-arekin
* **Konponduta:** Domeinu-bilaketako AJAXek huts egiten zuen saioa hasi gabeko erabiltzaileentzat ordainketan zehar
* **Konponduta:** Domeinu-prezioen AJAXek huts egiten zuen saioa hasi gabeko erabiltzaileentzat ordainketan zehar
* **Konponduta:** Spyc klasearen berradierazpenaren errore larria WP-CLI komandoak exekutatzean
* **Konponduta:** Namecheap sandbox APIaren timeout-a laburregia zen
* **Konponduta:** Domeinu-bilaketako Select botoiaren testua ez zen ikusgai atzeko plano berdean
* **Konponduta:** Domeinu-erregistroak huts egiten zuen "RegistrantFirstName is Missing" errorearekin, kontaktu-informazioa falta zelako
* **Konponduta:** Domeinu-erregistroa blog_id=0-rekin sortzen zen gunea oraindik ez zegoenean ordainketa unean
* **Konponduta:** TLD lehenetsien ezarpena string gisa itzultzen zen parsed array baten ordez
* **Kenduta:** Domain Management administrazio-orri independentea — orain oinarrizko domeinu-orrien bidez kudeatzen da

Bertsioa 1.0.0 - 2025-09-28an argitaratua

**Berridazketa nagusia Ultimate Multisite v2-rako**

* **Berria:** Berridazketa osoa PHP 7.4+ arkitektura modernoarekin
* **Berria:** Integrazio erraza Ultimate Multisite v2 ordainketa-sistemarekin
* **Berria:** Domeinu-produktuen kudeaketa prezio-aukera malguekin
* **Berria:** Domeinu-hornitzaile anitzeko euskarri-arkitektura
* **Berria:** Berritze automatikoa eta harpidetza-integrazioa
* **Berria:** Bezeroentzako domeinu-kudeaketa interfazea
* **Berria:** Administratzaileentzako domeinu-monitorizazioa eta logak
* **Berria:** Kupoien euskarria domeinu-produktuentzat
* **Berria:** Ezarpenen kudeaketa integrala
* **Berria:** Garatzaileentzat erraz hedagarria den kode-oinarria
* **Hobetua:** OpenSRS hornitzailea eguneratu da funtzio guztien euskarriarekin
* **Hobetua:** Ultimate Multisite v2-rekin koherentea den UI modernoa
* **Konponduta:** Zaharkitutako v1 kode guztia v2 estandarretara eguneratu da
* **Kenduta:** v1 bateragarritasun zaharra (aldaketa haustailea)

### Aurreko bertsioak (v1 zaharra) {#previous-versions-v1-legacy}

### Bertsioa 0.0.3 - 20/08/2019 {#version-003---20082019}

* Konponduta: Groundhogg CRM-rekin bateraezintasuna
* Oharra: Hau izan zen v1-rekin bateragarria zen azken bertsioa

### Bertsioa 0.0.2 - 07/12/2018 {#version-002---07122018}

* Konponduta: License Key eremua kendu da
* Konponduta: Plan fitxak falta ziren feature plugin aktibo dagoenean
* Hobetua: Saltatzeko botoi bat gehitu da erregistro-eremuan

### Bertsioa 0.0.1 - Hasierako argitalpena {#version-001---initial-release}

* Oinarrizko OpenSRS integrazioa WP Ultimo v1-rako
* Domeinu-bilaketa eta erregistro sinplea
* Planetan oinarritutako domeinu-baimenak
