---
title: Domēnu pārdevēja izmaiņu žurnāls
sidebar_position: 99
_i18n_hash: 6b9be73c1503d8df8a806bb02b241873
---
# Domēnu pārdevēja izmaiņu žurnāls

Versija 1.3.0 - Izlaista 2026-06-02
- Jauns: Pievienots tīkla administratora brīdinājums, kad HostAfrica tālākpārdevēja atlikums kļūst pārāk zems
- Jauns: Pievienota automātiska tikko reģistrētu domēnu kartēšana uz tīkla vietni
- Labojums: Reģistrētāja lauku prasības piemērotas tikai jauna domēna reģistrēšanas laikā
- Labojums: Bilances uzraudzības paziņojumus padarīja noraidāmus
- Labojums: Nodrošināts, ka WooCommerce reģistrētāja norēķinu informācija tiek saglabāta
- Labojums: Reģistrācijas laikā ieviestas reģistrētāja kontaktinformācijas prasības
- Labojums: Novērsta domēnu reģistrācijas produktu izveide ar 0% uzcenojumu
- Labojums: Saglabātas domēnu atlases un cenas checkout sesijas plūsmā
- Labojums: Uzlabots HostAfrica domēnu cenu valūtas attēlojums
- Labojums: Uzlabota checkout veidlapas darbības uzvedība, lai novērstu WP-core query-var neatbilstības
- Uzlabots: Iestatīšanas norādījumos piesaistīta saite uz HostAfrica tālākpārdevēja konfigurācijas dokumentāciju

Versija 1.2.0 - Izlaista 2026-05-25
- Jauns: Pievienots HostAfrica kā domēnu pārdošanas integrācija ar checkout, iestatīšanas vedņa, meklēšanas, TLD/cenu, reģistrācijas, atjaunošanas, pārsūtīšanas, vārdu serveru, DNS, EPP koda, reģistratora bloķēšanas un ID aizsardzības atbalstu
- Jauns: Pievienots Openprovider kā domēnu pārdošanas integrācija ar tālākpārdevēja cenām, reģistrāciju, atjaunošanu, pārsūtīšanu, vārdu serveriem, DNS, EPP kodu, reģistratora bloķēšanu, WHOIS privātumu un TLD sinhronizācijas atbalstu
- Jauns: Pievienots Hostinger kā domēnu pārdošanas integrācija, izmantojot kopīgoto Hostinger API token no pamata integrācijas pieejamības pārbaudēm, reģistrācijai, vārdu serveru atjauninājumiem, reģistratora bloķēšanai un WHOIS privātumam
- Uzlabots: Pievienoti domēna dzīves cikla darbību un filtru docblocks izstrādātāju integrācijas norādījumiem
- Uzlabots: Addon readme failā atjaunināti plugin saderības metadati uz WordPress 7.0
- Uzlabots: Atjauninātas plānošanas veidnes, kas tiek izmantotas gaidāmās izlaišanas koordinēšanai

Versija 1.1.0 - Izlaista 2026-05-08
- Jauns: DNS ierakstu izveide (add_dns_record) ieviesta ResellerClub, Enom un OpenSRS reģistratoriem
- Labojums: Noklusējuma DNS ierakstu parsētājs tagad pieļauj {DOMAIN} un {SITE_URL} tokenus
- Labojums: Domēna atlases checkout lauku slugi ir namespaced, lai novērstu konfliktu ar site_url

Versija 1.0.8 - Izlaista 2026-05-07
- Labojums: ResellerClub domēnu cenas tagad iegūst aktuālās pašizmaksas cenas no pareizā API galapunkta

Versija 1.0.7 - Izlaista 2026-05-06
* Labojums: ResellerClub test_connection nosūta nepieciešamo tlds parametru (#224)

Versija 1.0.6 - Izlaista 2026-05-05
* Labojums: ResellerClub domēnu reģistrācija tagad darbojas pareizi ar uzlabotu API atbildes apstrādi un reģistra vadītu pakalpojumu sniedzēja maršrutēšanu
* Labojums: Register Domain administratora lapas UX uzlabojumi
* Noņemts: CyberPanel reģistratora integrācija

Versija 1.0.5 - Izlaista 2026-04-02
* Jauns: GoDaddy reģistratora integrācija domēnu reģistrācijai un pārvaldībai
* Jauns: NameSilo reģistratora integrācija
* Jauns: ResellerClub reģistratora integrācija
* Jauns: Automātiski verificēt SES sūtīšanas domēnu pēc domēna iegādes un kartēšanas
* Labojums: Plugin konstantes aizsargātas pret atkārtotu definēšanu testa vidē
* Labojums: MySQL karodziņi pareizi sadalīti pa vārdiem install-wp-tests.sh

Versija 1.0.4 - Izlaista 2026-03-14
* **Labojums:** Daži trūkstoši css resursi
* **Labojums:** Kļūda, kas saistīta ar nepieejamiem tld

Versija 1.0.3 - Izlaista 2026-03-09
* **Labojums:** Vue reaktīvo īpašību kļūdas (domain_option, selected_domain, domain_provider), izmantojot mantoto reģistrēšanās veidni ar checkout shortcode
* **Labojums:** Apakšdomēna ievades lauka nepareizs līdzinājums un pārāk liels teksts domēna atlases checkout laukā
* **Labojums:** Paslēpt priekšskatījuma bloku "Jūsu URL būs", kad ir pieejams domēna atlases lauks

Versija 1.0.2 - Izlaista 2026-03-01
* **Uzlabots:** No iestatījumu lapas noņemti globālie uzcenojuma iestatījumi — cenas tagad ir tikai katram produktam atsevišķi
* **Uzlabots:** Iestatījumu lapā pievienota saite "Pārvaldīt domēnu produktus" ātrai navigācijai
* **Uzlabots:** Skaidrāki lauku apraksti un paskaidres domēnu produktu iestatījumiem (catch-all pret TLD specifiskiem, uzcenojuma veidi, ievadcenas)
* **Uzlabots:** Labāki apraksti visā iestatījumu lapā (meklēt TLD, atjaunošanas, DNS, paziņojumi)

Versija 1.0.1 - Izlaista 2026-02-27

* **Jauns:** TLD importēšanas rīks masveida cenu pārvaldībai
* **Jauns:** Ievadcenu atbalsts domēna produktiem
* **Jauns:** E2E testu komplekts ar Cypress
* **Jauns:** E-pasta veidnes domēna dzīves cikla paziņojumiem
* **Jauns:** Reģistrētāja adreses lauki administrēšanas domēna reģistrācijas modālajā logā, iepriekš aizpildīti no iestatījumiem
* **Jauns:** Klienta DNS pārvaldības saskarne ar ierakstu pievienošanas, rediģēšanas un dzēšanas atbalstu
* **Jauns:** "Bring your own domain" norēķinu opcija ar automātisku domēna kartēšanu
* **Jauns:** Automātiski ģenerēt vietnes URL no domēna nosaukuma norēķinu laikā
* **Jauns:** Noklusējuma nameserver un DNS ierakstu konfigurācija iestatījumos
* **Jauns:** Domēna reģistrācijas informācija un DNS pārvaldība galvenajā domēna rediģēšanas lapā
* **Jauns:** Iestatīšanas vednis automātiski izveido noklusējuma domēna produktu ar saprātīgiem noklusējumiem
* **Jauns:** Ikdienas automātiska TLD sinhronizācija, izmantojot cron, visiem konfigurētajiem pakalpojumu sniedzējiem
* **Jauns:** WHOIS privātuma aizsardzība ar konfigurāciju katram produktam (vienmēr ieslēgta, klienta izvēle vai atspējota)
* **Jauns:** WHOIS privātuma izvēles rūtiņa norēķinos ar cenu attēlošanu un tumšā režīma atbalstu
* **Jauns:** Register Domain administrēšanas lapa manuālai domēna reģistrācijai
* **Jauns:** Automātiski plugin atjauninājumi, izmantojot Ultimate Multisite atjauninājumu serveri
* **Jauns:** Domēna produkta veida filtra cilne produktu saraksta tabulā ar violetas emblēmas stilu
* **Jauns:** Reģistrētāja kontaktinformācijas lauki (vārds, adrese, pilsēta, štats, pasta indekss, valsts, tālrunis) domēna norēķinu veidlapā
* **Jauns:** Reģistrētāja lauku validācija pirms reģistratora API izsaukšanas ar skaidriem kļūdu ziņojumiem
* **Jauns:** Pakalpojumu sniedzējam specifiski žurnāla kanāli domēna reģistrācijas notikumiem (piem., domain-seller-namecheap.log)
* **Jauns:** Reģistrētāja kontaktinformācijas lauki galvenajā reģistrācijas/pieteikšanās norēķinu veidlapā (redzami, reģistrējot domēnu)
* **Uzlabots:** Domain Search norēķinu lauks aizstāts ar vienotu Domain Selection lauku, kas atbalsta apakšdomēna, reģistrācijas un esoša domēna cilnes
* **Uzlabots:** Domēna produkta iestatījumi tiek attēloti iekļauti produkta rediģēšanas lapā, izmantojot pamata widget sistēmu
* **Uzlabots:** Klienta domēna informācija pieslēdzas pamata domēna kartēšanas widget, nevis atsevišķam metabox
* **Uzlabots:** TLD importēšanas vednis vienkāršots līdz viena klikšķa sinhronizācijai no visiem pakalpojumu sniedzējiem
* **Uzlabots:** Namecheap domēna pieejamība izmanto pakešu API izsaukumu ātrākai meklēšanai
* **Uzlabots:** Namecheap cenu API izmanto pareizus parametrus un atbildes parsēšanu
* **Uzlabots:** Centralizēta TLD glabāšana vienā tīkla opcijā
* **Uzlabots:** Domēna aktivitāšu žurnalēšana DNS izmaiņām, pārsūtījumiem un konfigurācijas piemērošanai
* **Uzlabots:** Pilna TLD sinhronizācija OpenSRS, izmantojot IANA galveno sarakstu ar pakešu validāciju
* **Uzlabots:** Pilna TLD sinhronizācija Namecheap ar lappusēs sadalītiem API pieprasījumiem
* **Uzlabots:** Mantotās pakalpojumu sniedzēju klases aizstātas ar Integration Registry modeli
* **Uzlabots:** Iestatījumu panelis ar DNS un pārsūtīšanas konfigurāciju
* **Uzlabots:** Tālruņa numuri automātiski formatēti +CC.NNN reģistratora formātā
* **Uzlabots:** Tālruņa lauka validācija pirms iesniegšanas noņem formatēšanas rakstzīmes
* **Uzlabots:** Versijas prasība paaugstināta līdz Ultimate Multisite 2.4.12 ar skaidrāku paziņojumu
* **Uzlabots:** CI darbplūsma izmanto pareizu checkout gan addon, gan pamata plugin
* **Uzlabots:** prepare_registrant_info() lasa no norēķinos saglabātas lietotāja meta ar norēķinu adreses rezerves variantu
* **Labots:** Domēna meklēšanas AJAX norēķinu laikā neizdevās lietotājiem, kuri nav pieteikušies
* **Labots:** Domēna cenu AJAX norēķinu laikā neizdevās lietotājiem, kuri nav pieteikušies
* **Labots:** Spyc klases atkārtotas deklarēšanas fatāla kļūda, palaižot WP-CLI komandas
* **Labots:** Namecheap sandbox API noildze bija pārāk īsa
* **Labots:** Domēna meklēšanas Select pogas teksts nebija redzams uz zaļa fona
* **Labots:** Domēna reģistrācija neizdevās ar kļūdu "RegistrantFirstName is Missing" trūkstošas kontaktinformācijas dēļ
* **Labots:** Domēna ieraksts izveidots ar blog_id=0, kad vietne norēķinu brīdī vēl nepastāvēja
* **Labots:** Noklusējuma TLDs iestatījums tika atgriezts kā virkne, nevis parsēts masīvs
* **Noņemts:** Atsevišķa Domain Management administrēšanas lapa — tagad apstrādāta caur pamata domēna lapām

Versija 1.0.0 - Izlaista 2025-09-28

**Liela pārrakstīšana Ultimate Multisite v2**

* **Jauns:** Pilnīga pārrakstīšana ar modernu PHP 7.4+ arhitektūru
* **Jauns:** Nevainojama integrācija ar Ultimate Multisite v2 norēķinu sistēmu
* **Jauns:** Domēna produktu pārvaldība ar elastīgām cenu opcijām
* **Jauns:** Vairāku domēna pakalpojumu sniedzēju atbalsta arhitektūra
* **Jauns:** Automātiskā atjaunošana un abonementu integrācija
* **Jauns:** Klienta domēna pārvaldības saskarne
* **Jauns:** Administrēšanas domēnu uzraudzība un žurnāli
* **Jauns:** Kuponu atbalsts domēna produktiem
* **Jauns:** Visaptveroša iestatījumu pārvaldība
* **Jauns:** Izstrādātājiem draudzīga paplašināma kodu bāze
* **Uzlabots:** Atjaunināts OpenSRS pakalpojumu sniedzējs ar pilnu funkciju atbalstu
* **Uzlabots:** Moderna UI, kas atbilst Ultimate Multisite v2
* **Labots:** Viss novecojušais v1 kods atjaunināts atbilstoši v2 standartiem
* **Noņemts:** Mantotā v1 saderība (lauzošas izmaiņas)

### Iepriekšējās versijas (v1 mantojums)

### Versija 0.0.3 - 20/08/2019

* Labots: Nesaderība ar Groundhogg CRM
* Piezīme: Šis bija pēdējais ar v1 saderīgais laidiens

### Versija 0.0.2 - 07/12/2018

* Labots: Noņemts License Key lauks
* Labots: Plānu cilnes trūka, kad funkcijas plugin ir aktīvs
* Uzlabots: Reģistrācijas laukam pievienota izlaišanas poga

### Versija 0.0.1 - Sākotnējais laidiens

* Pamata OpenSRS integrācija WP Ultimo v1
* Vienkārša domēna meklēšana un reģistrācija
* Uz plāniem balstītas domēna atļaujas
