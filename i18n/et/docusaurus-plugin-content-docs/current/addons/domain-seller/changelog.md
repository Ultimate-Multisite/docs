---
title: Domeenimüüja muudatuste logi
sidebar_position: 99
_i18n_hash: 6b9be73c1503d8df8a806bb02b241873
---
# Domain Seller muudatuste logi

Versioon 1.3.0 - avaldatud 2026-06-02
- Uus: lisatud network-admin hoiatus, kui HostAfrica edasimüüja saldo muutub liiga madalaks
- Uus: lisatud äsja registreeritud domeenide automaatne vastendamine võrgusaidiga
- Parandus: registreerija välja nõudeid rakendatakse ainult uue domeeni registreerimisel
- Parandus: saldo jälgimise teavitused muudeti suletavaks
- Parandus: tagatud, et WooCommerce registreerija arveldusandmed säilitatakse
- Parandus: registreerija kontaktinõuded jõustatakse registreerimise ajal
- Parandus: takistatud domeeni registreerimise toodete loomine 0% juurdehindlusega
- Parandus: domeenivalikud ja hinnakujundus säilitatakse kassaseansi voo jooksul
- Parandus: parandatud HostAfrica domeenihindade valuuta kuvamist
- Parandus: parandatud kassa vormi toimingu käitumist, et vältida WP-core päringumuutuja mittevastavusi
- Täiustatud: HostAfrica edasimüüja konfiguratsiooni dokumentatsioon lingiti seadistamisjuhistesse

Versioon 1.2.0 - avaldatud 2026-05-25
- Uus: lisatud HostAfrica domeenimüügi integratsioonina, millel on kassa, seadistusviisardi, otsingu, TLD/hinnakujunduse, registreerimise, uuendamise, ülekande, nimeserveri, DNS-i, EPP koodi, registripidaja lukustuse ja ID-kaitse tugi
- Uus: lisatud Openprovider domeenimüügi integratsioonina, millel on edasimüüja hinnakujunduse, registreerimise, uuendamise, ülekande, nimeserveri, DNS-i, EPP koodi, registripidaja lukustuse, WHOIS-privaatsuse ja TLD sünkroonimise tugi
- Uus: lisatud Hostinger domeenimüügi integratsioonina, kasutades põhituuma integratsioonist jagatud Hostinger API tokenit saadavuse kontrollideks, registreerimiseks, nimeserveri uuendusteks, registripidaja lukustuseks ja WHOIS-privaatsuseks
- Täiustatud: lisatud domeeni elutsükli toimingu ja filtri docblockid arendaja integratsiooni juhisteks
- Täiustatud: uuendatud plugina ühilduvuse metaandmed addon readme failis WordPress 7.0-le
- Täiustatud: uuendatud planeerimismalle tulevase väljalaske koordineerimiseks

Versioon 1.1.0 - avaldatud 2026-05-08
- Uus: DNS-kirje loomine (add_dns_record) rakendatud ResellerClub, Enom ja OpenSRS registripidajatele
- Parandus: vaikimisi DNS Records parser talub nüüd {DOMAIN} ja {SITE_URL} tokeneid
- Parandus: domeenivaliku kassa välja slugid pandi nimeruumi, et vältida kokkupõrget site_url-iga

Versioon 1.0.8 - avaldatud 2026-05-07
- Parandus: ResellerClub domeenihinnad hangivad nüüd reaalajas omahinnad õigest API endpointist

Versioon 1.0.7 - avaldatud 2026-05-06
* Parandus: ResellerClub test_connection saadab nõutud tlds parameetri (#224)

Versioon 1.0.6 - avaldatud 2026-05-05
* Parandus: ResellerClub domeeni registreerimine töötab nüüd korrektselt täiustatud API vastuse käsitlemise ja registripõhise teenusepakkuja marsruutimisega
* Parandus: Register Domain administraatori lehe UX-i täiustused
* Eemaldatud: CyberPanel registripidaja integratsioon

Versioon 1.0.5 - avaldatud 2026-04-02
* Uus: GoDaddy registripidaja integratsioon domeeni registreerimiseks ja haldamiseks
* Uus: NameSilo registripidaja integratsioon
* Uus: ResellerClub registripidaja integratsioon
* Uus: SES-i saatmisdomeeni automaatne kinnitamine domeeni ostmisel ja vastendamisel
* Parandus: plugina konstandid kaitstud testkeskkonnas uuesti defineerimise eest
* Parandus: MySQL lipud jagunevad install-wp-tests.sh-is õigesti sõnadeks

Versioon 1.0.4 - avaldatud 2026-03-14
* **Parandus:** mõned puuduvad css varad
* **Parandus:** viga, mis on seotud kättesaamatute tld-dega

Versioon 1.0.3 - avaldatud 2026-03-09
* **Parandus:** Vue reaktiivsete omaduste vead (domain_option, selected_domain, domain_provider), kui kasutatakse pärandregistreerimise malli koos kassa shortcode’iga
* **Parandus:** alamdomeeni sisestusvälja vale joondus ja liiga suur tekst domeenivaliku kassa väljal
* **Parandus:** peidetakse eelvaateplokk "Sinu URL saab olema", kui domeenivaliku väli on olemas

Versioon 1.0.2 - avaldatud 2026-03-01
* **Täiustatud:** eemaldatud globaalsed juurdehindluse seaded seadete lehelt — hinnakujundus on nüüd eranditult tootepõhine
* **Täiustatud:** lisatud seadete lehele kiireks navigeerimiseks link "Halda domeenitooteid"
* **Täiustatud:** selgemad väljade kirjeldused ja kohtspikrid domeenitoote seadete jaoks (kõikehõlmav vs TLD-spetsiifiline, juurdehindluse tüübid, sissejuhatav hinnakujundus)
* **Täiustatud:** paremad kirjeldused kogu seadete lehel (TLD-de otsing, uuendamised, DNS, teavitused)

Versioon 1.0.1 - avaldatud 2026-02-27

* **Uus:** TLD importimistööriist hulgi hinnakujunduse haldamiseks
* **Uus:** Sissejuhatava hinnakujunduse tugi domeenitoodetele
* **Uus:** E2E testikomplekt Cypressiga
* **Uus:** E-posti mallid domeeni elutsükli teavituste jaoks
* **Uus:** Registreerija aadressiväljad administraatori domeeni registreerimise modaalaknas, eeltäidetud seadetest
* **Uus:** Kliendi DNS-i haldusliides kirjete lisamise, muutmise ja kustutamise toega
* **Uus:** „Too oma domeen kaasa” kassavalik automaatse domeenikaardistusega
* **Uus:** Saidi URL-i automaatne genereerimine domeeninimest kassas
* **Uus:** Vaikimisi nimeserveri ja DNS-kirjete konfiguratsioon seadetes
* **Uus:** Domeeni registreerimise üksikasjad ja DNS-i haldus põhidomeeni muutmise lehel
* **Uus:** Seadistusviisard loob automaatselt vaikimisi domeenitoote mõistlike vaikeväärtustega
* **Uus:** Igapäevane automaatne TLD sünkroonimine cron’i kaudu kõigi seadistatud teenusepakkujate lõikes
* **Uus:** WHOIS privaatsuskaitse tootepõhise konfiguratsiooniga (alati sees, kliendi valik või keelatud)
* **Uus:** WHOIS privaatsuse kassamärkeruut hinnakuvamise ja tumeda režiimi toega
* **Uus:** Registreeri domeen administraatori leht käsitsi domeeni registreerimiseks
* **Uus:** Automaatsed plugina uuendused Ultimate Multisite uuendusserveri kaudu
* **Uus:** Domeenitoote tüübi filtrisakk tooteloendi tabelis lilla märgi stiiliga
* **Uus:** Registreerija kontaktiväljad (nimi, aadress, linn, osariik/maakond, postiindeks, riik, telefon) domeeni kassavormil
* **Uus:** Registreerija väljade valideerimine enne registripidaja API kutsumist selgete veateadetega
* **Uus:** Teenusepakkujaspetsiifilised logikanalid domeeni registreerimise sündmuste jaoks (nt domain-seller-namecheap.log)
* **Uus:** Registreerija kontaktiväljad peamisel registreerumise/liitumise kassavormil (kuvatakse domeeni registreerimisel)
* **Täiustatud:** Domeeniotsingu kassaväli asendatud ühtse domeenivaliku väljaga, mis toetab alamdomeeni, registreerimise ja olemasoleva domeeni sakke
* **Täiustatud:** Domeenitoote seaded renderdatakse toote muutmise lehel reasiseselt põhi-vidinasüsteemi kaudu
* **Täiustatud:** Kliendi domeeniinfo haakub eraldiseisva metakasti asemel põhidomeeni kaardistamise vidinasse
* **Täiustatud:** TLD importimisviisard lihtsustatud ühe klõpsuga sünkroonimiseks kõigilt teenusepakkujatelt
* **Täiustatud:** Namecheap domeeni saadavus kasutab kiiremaks otsinguks batch API kutset
* **Täiustatud:** Namecheap hinnakujunduse API kasutab õigeid parameetreid ja vastuse parsimist
* **Täiustatud:** Tsentraliseeritud TLD salvestus ühes võrguvalikus
* **Täiustatud:** Domeenitegevuse logimine DNS-i muudatuste, ülekannete ja konfiguratsiooni rakendamise jaoks
* **Täiustatud:** Täielik TLD sünkroonimine OpenSRS-i jaoks IANA põhinimekirja ja batch-valideerimisega
* **Täiustatud:** Täielik TLD sünkroonimine Namecheap jaoks lehekülgede kaupa API-päringutega
* **Täiustatud:** Pärand-teenusepakkuja klassid asendatud Integration Registry mustriga
* **Täiustatud:** Seadete paneel DNS-i ja ülekande konfiguratsiooniga
* **Täiustatud:** Telefoninumbrid vormindatakse automaatselt registripidaja vormingusse +CC.NNN
* **Täiustatud:** Telefonivälja valideerimine eemaldab enne esitamist vormindusmärgid
* **Täiustatud:** Versiooninõue tõstetud Ultimate Multisite 2.4.12 peale koos selgema teavitusega
* **Täiustatud:** CI töövoog kasutab korrektset checkout’i nii addoni kui ka põhiplugina jaoks
* **Täiustatud:** prepare_registrant_info() loeb checkout’is salvestatud kasutaja metadest, kasutades arveldusaadressi varuvariandina
* **Parandatud:** Domeeniotsingu AJAX ebaõnnestus sisselogimata kasutajatel kassas
* **Parandatud:** Domeeni hinnakujunduse AJAX ebaõnnestus sisselogimata kasutajatel kassas
* **Parandatud:** Spyc klassi uuesti deklareerimise fataalne viga WP-CLI käskude käivitamisel
* **Parandatud:** Namecheap sandbox API ajalõpp oli liiga lühike
* **Parandatud:** Domeeniotsingu nupu Select tekst ei olnud rohelisel taustal nähtav
* **Parandatud:** Domeeni registreerimine ebaõnnestus veaga „RegistrantFirstName is Missing” puuduva kontaktinfo tõttu
* **Parandatud:** Domeenikirje loodi väärtusega blog_id=0, kui saiti kassas veel ei eksisteerinud
* **Parandatud:** Vaikimisi TLD-de seade tagastati parsitud massiivi asemel stringina
* **Eemaldatud:** Eraldiseisev Domeenihalduse administraatori leht — nüüd hallatakse põhidomeenilehtede kaudu

Versioon 1.0.0 - Välja antud 2025-09-28

**Suur ümberkirjutus Ultimate Multisite v2 jaoks**

* **Uus:** Täielik ümberkirjutus modernse PHP 7.4+ arhitektuuriga
* **Uus:** Sujuv integratsioon Ultimate Multisite v2 kassasüsteemiga
* **Uus:** Domeenitoodete haldus paindlike hinnakujunduse valikutega
* **Uus:** Mitme domeeniteenusepakkuja toe arhitektuur
* **Uus:** Automaatse uuendamise ja tellimuste integratsioon
* **Uus:** Kliendi domeenihalduse liides
* **Uus:** Administraatori domeenide jälgimine ja logid
* **Uus:** Kupongi tugi domeenitoodetele
* **Uus:** Põhjalik seadete haldus
* **Uus:** Arendajasõbralik laiendatav koodibaas
* **Täiustatud:** Uuendatud OpenSRS teenusepakkuja täieliku funktsioonitoega
* **Täiustatud:** Modernne UI, mis on kooskõlas Ultimate Multisite v2-ga
* **Parandatud:** Kogu aegunud v1 kood uuendatud v2 standarditele
* **Eemaldatud:** Pärand v1 ühilduvus (ühilduvust murdev muudatus)

### Eelmised versioonid (v1 pärand) {#previous-versions-v1-legacy}

### Versioon 0.0.3 - 20/08/2019 {#version-003---20082019}

* Parandatud: Ühildumatus Groundhogg CRM-iga
* Märkus: See oli viimane v1-ga ühilduv väljalase

### Versioon 0.0.2 - 07/12/2018 {#version-002---07122018}

* Parandatud: License Key väli eemaldatud
* Parandatud: Paketi sakid puudusid, kui funktsiooniplugin oli aktiivne
* Täiustatud: Registreerimisväljale lisatud vahelejätmise nupp

### Versioon 0.0.1 - Esmane väljalase {#version-001---initial-release}

* Põhiline OpenSRS integratsioon WP Ultimo v1 jaoks
* Lihtne domeeniotsing ja registreerimine
* Paketipõhised domeeniõigused
