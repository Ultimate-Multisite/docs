---
title: Domenų pardavėjo pakeitimų žurnalas
sidebar_position: 99
_i18n_hash: 6b9be73c1503d8df8a806bb02b241873
---
# Domenų pardavėjo pakeitimų žurnalas

Versija 1.3.0 - Išleista 2026-06-02
- Nauja: Pridėtas network-admin įspėjimas, kai HostAfrica perpardavėjo likutis tampa per mažas
- Nauja: Pridėtas automatinis naujai užregistruotų domenų susiejimas su tinklo svetaine
- Pataisyta: Registranto laukų reikalavimai taikomi tik registruojant naują domeną
- Pataisyta: Balanso stebėjimo pranešimus dabar galima atmesti
- Pataisyta: Užtikrinta, kad WooCommerce registranto atsiskaitymo duomenys būtų išsaugomi
- Pataisyta: Registranto kontaktų reikalavimai privalomai taikomi registracijos metu
- Pataisyta: Neleidžiama kurti domenų registracijos produktų su 0 % antkainiu
- Pataisyta: Domenų pasirinkimai ir kainodara išsaugomi per atsiskaitymo sesijos eigą
- Pataisyta: Patobulintas HostAfrica domenų kainodaros valiutos rodymas
- Pataisyta: Patobulintas atsiskaitymo formos veiksmo elgesys, kad būtų išvengta WP-core query-var neatitikimų
- Patobulinta: Sąrankos gairėse pridėta nuoroda į HostAfrica perpardavėjo konfigūracijos dokumentaciją

Versija 1.2.0 - Išleista 2026-05-25
- Nauja: Pridėta HostAfrica kaip domenų pardavimo integracija su atsiskaitymo, sąrankos vedlio, paieškos, TLD/kainodaros, registracijos, atnaujinimo, perkėlimo, vardų serverių, DNS, EPP kodo, registratoriaus užrakto ir ID apsaugos palaikymu
- Nauja: Pridėta Openprovider kaip domenų pardavimo integracija su perpardavėjo kainodaros, registracijos, atnaujinimo, perkėlimo, vardų serverių, DNS, EPP kodo, registratoriaus užrakto, WHOIS privatumo ir TLD sinchronizavimo palaikymu
- Nauja: Pridėta Hostinger kaip domenų pardavimo integracija, naudojanti bendrinamą Hostinger API token iš pagrindinės integracijos pasiekiamumo patikroms, registracijai, vardų serverių atnaujinimams, registratoriaus užraktui ir WHOIS privatumui
- Patobulinta: Pridėti domeno gyvavimo ciklo veiksmo ir filtro docblockai kūrėjų integracijos gairėms
- Patobulinta: Addon readme atnaujinti plugin suderinamumo metaduomenys iki WordPress 7.0
- Patobulinta: Atnaujinti planavimo šablonai, naudojami būsimų leidimų koordinavimui

Versija 1.1.0 - Išleista 2026-05-08
- Nauja: DNS įrašo kūrimas (add_dns_record) įgyvendintas ResellerClub, Enom ir OpenSRS registratoriams
- Pataisyta: Numatytasis DNS Records analizatorius dabar toleruoja {DOMAIN} ir {SITE_URL} tokenus
- Pataisyta: Domeno pasirinkimo atsiskaitymo laukų slugai įtraukti į vardų erdvę, kad būtų išvengta konflikto su site_url

Versija 1.0.8 - Išleista 2026-05-07
- Pataisyta: ResellerClub domenų kainodara dabar gauna tiesiogines savikainas iš teisingo API endpoint

Versija 1.0.7 - Išleista 2026-05-06
* Pataisyta: ResellerClub test_connection siunčia privalomą tlds parametrą (#224)

Versija 1.0.6 - Išleista 2026-05-05
* Pataisyta: ResellerClub domenų registracija dabar veikia teisingai su patobulintu API atsakymų apdorojimu ir registro valdoma teikėjo maršrutizacija
* Pataisyta: Register Domain administratoriaus puslapio UX patobulinimai
* Pašalinta: CyberPanel registratoriaus integracija

Versija 1.0.5 - Išleista 2026-04-02
* Nauja: GoDaddy registratoriaus integracija domenų registracijai ir valdymui
* Nauja: NameSilo registratoriaus integracija
* Nauja: ResellerClub registratoriaus integracija
* Nauja: Automatiškai patvirtinamas SES siuntimo domenas įsigijus ir susiejus domeną
* Pataisyta: Plugin konstantos apsaugotos nuo pakartotinio apibrėžimo testavimo aplinkoje
* Pataisyta: MySQL vėliavėlės teisingai skaidomos pagal žodžius install-wp-tests.sh

Versija 1.0.4 - Išleista 2026-03-14
* **Pataisyta:** Kai kurie trūkstami css ištekliai
* **Pataisyta:** Klaida, susijusi su nepasiekiamais tld

Versija 1.0.3 - Išleista 2026-03-09
* **Pataisyta:** Vue reaktyviųjų savybių klaidos (domain_option, selected_domain, domain_provider), kai naudojamas senasis registracijos šablonas su atsiskaitymo shortcode
* **Pataisyta:** Subdomeno įvesties lauko nesulygiavimas ir per didelis tekstas domeno pasirinkimo atsiskaitymo lauke
* **Pataisyta:** Paslepiamas „Your URL will be“ peržiūros blokas, kai yra domeno pasirinkimo laukas

Versija 1.0.2 - Išleista 2026-03-01
* **Patobulinta:** Iš nustatymų puslapio pašalinti globalūs antkainio nustatymai — kainodara dabar taikoma tik kiekvienam produktui atskirai
* **Patobulinta:** Nustatymų puslapyje pridėta nuoroda „Tvarkyti domenų produktus“ greitai navigacijai
* **Patobulinta:** Aiškesni laukų aprašymai ir paaiškinimai domeno produkto nustatymams (bendrasis vs konkretaus TLD, antkainio tipai, įvadinė kainodara)
* **Patobulinta:** Geresni aprašymai visame nustatymų puslapyje (TLD paieška, atnaujinimai, DNS, pranešimai)

Versija 1.0.1 - Išleista 2026-02-27

* **Nauja:** TLD importavimo įrankis masinio kainodaros valdymui
* **Nauja:** Įvadinės kainodaros palaikymas domenų produktams
* **Nauja:** E2E testų rinkinys su Cypress
* **Nauja:** El. laiškų šablonai domeno gyvavimo ciklo pranešimams
* **Nauja:** Registruotojo adreso laukai administratoriaus domeno registravimo modaliniame lange, iš anksto užpildyti iš nustatymų
* **Nauja:** Kliento DNS valdymo sąsaja su įrašų pridėjimo, redagavimo ir ištrynimo palaikymu
* **Nauja:** „Atsineškite savo domeną“ checkout parinktis su automatiniu domeno susiejimu
* **Nauja:** Automatiškai sugeneruoti svetainės URL iš domeno pavadinimo checkout metu
* **Nauja:** Numatytųjų vardų serverių ir DNS įrašų konfigūracija nustatymuose
* **Nauja:** Domeno registravimo informacija ir DNS valdymas pagrindiniame domeno redagavimo puslapyje
* **Nauja:** Sąrankos vedlys automatiškai sukuria numatytąjį domeno produktą su protingais numatytaisiais nustatymais
* **Nauja:** Kasdienis automatinis TLD sinchronizavimas per cron visuose sukonfigūruotuose teikėjuose
* **Nauja:** WHOIS privatumo apsauga su kiekvieno produkto konfigūracija (visada įjungta, kliento pasirinkimas arba išjungta)
* **Nauja:** WHOIS privatumo checkout žymimasis langelis su kainos rodymu ir tamsaus režimo palaikymu
* **Nauja:** Registruoti domeną administratoriaus puslapis rankiniam domeno registravimui
* **Nauja:** Automatiniai plugin atnaujinimai per Ultimate Multisite atnaujinimų serverį
* **Nauja:** Domeno produkto tipo filtro skirtukas produktų sąrašo lentelėje su violetinio ženklelio stiliumi
* **Nauja:** Registruotojo kontaktiniai laukai (vardas, adresas, miestas, valstija, pašto kodas, šalis, telefonas) domeno checkout formoje
* **Nauja:** Registruotojo laukų validavimas prieš kviečiant registratoriaus API su aiškiais klaidų pranešimais
* **Nauja:** Teikėjui specifiniai žurnalų kanalai domeno registravimo įvykiams (pvz., domain-seller-namecheap.log)
* **Nauja:** Registruotojo kontaktiniai laukai pagrindinėje registracijos / prisijungimo checkout formoje (rodomi registruojant domeną)
* **Patobulinta:** Domain Search checkout laukas pakeistas suvienodintu Domain Selection lauku, palaikančiu subdomeno, registravimo ir esamo domeno skirtukus
* **Patobulinta:** Domeno produkto nustatymai rodomi įterptai produkto redagavimo puslapyje per pagrindinę valdiklių sistemą
* **Patobulinta:** Kliento domeno informacija integruojama į pagrindinį domenų susiejimo valdiklį vietoj atskiro metabox
* **Patobulinta:** TLD importavimo vedlys supaprastintas iki vieno paspaudimo sinchronizavimo iš visų teikėjų
* **Patobulinta:** Namecheap domeno prieinamumas naudoja paketinio API užklausą greitesnei paieškai
* **Patobulinta:** Namecheap kainodaros API naudoja teisingus parametrus ir atsakymo analizavimą
* **Patobulinta:** Centralizuota TLD saugykla vienoje tinklo parinktyje
* **Patobulinta:** Domeno veiklos registravimas DNS pakeitimams, perkėlimams ir konfigūracijos pritaikymui
* **Patobulinta:** Visas TLD sinchronizavimas OpenSRS naudojant IANA pagrindinį sąrašą su paketiniu validavimu
* **Patobulinta:** Visas TLD sinchronizavimas Namecheap su puslapiuojamomis API užklausomis
* **Patobulinta:** Senosios teikėjų klasės pakeistos Integration Registry šablonu
* **Patobulinta:** Nustatymų skydelis su DNS ir perkėlimo konfigūracija
* **Patobulinta:** Telefono numeriai automatiškai formatuojami į +CC.NNN registratoriaus formatą
* **Patobulinta:** Telefono lauko validavimas pašalina formatavimo simbolius prieš pateikimą
* **Patobulinta:** Versijos reikalavimas padidintas iki Ultimate Multisite 2.4.12 su aiškesniu pranešimu
* **Patobulinta:** CI darbo eiga naudoja tinkamą checkout tiek addon, tiek pagrindiniam plugin
* **Patobulinta:** prepare_registrant_info() skaito iš checkout metu išsaugotos naudotojo meta informacijos su atsarginiu atsiskaitymo adreso variantu
* **Ištaisyta:** Domeno paieškos AJAX neveikė neprisijungusiems naudotojams checkout metu
* **Ištaisyta:** Domeno kainodaros AJAX neveikė neprisijungusiems naudotojams checkout metu
* **Ištaisyta:** Spyc klasės pakartotinio deklaravimo kritinė klaida vykdant WP-CLI komandas
* **Ištaisyta:** Namecheap sandbox API skirtasis laikas buvo per trumpas
* **Ištaisyta:** Domeno paieškos Select mygtuko tekstas nebuvo matomas žaliame fone
* **Ištaisyta:** Domeno registravimas nepavykdavo su klaida „RegistrantFirstName is Missing“ dėl trūkstamos kontaktinės informacijos
* **Ištaisyta:** Domeno įrašas sukurtas su blog_id=0, kai svetainė checkout metu dar neegzistavo
* **Ištaisyta:** Numatytųjų TLD nustatymas grąžintas kaip eilutė vietoj išanalizuoto masyvo
* **Pašalinta:** Atskiras Domain Management administratoriaus puslapis — dabar tvarkoma per pagrindinius domenų puslapius

Versija 1.0.0 - Išleista 2025-09-28

**Didelis perrašymas Ultimate Multisite v2**

* **Nauja:** Visiškas perrašymas su modernia PHP 7.4+ architektūra
* **Nauja:** Sklandi integracija su Ultimate Multisite v2 checkout sistema
* **Nauja:** Domeno produktų valdymas su lanksčiomis kainodaros parinktimis
* **Nauja:** Kelių domenų teikėjų palaikymo architektūra
* **Nauja:** Automatinio atnaujinimo ir prenumeratų integracija
* **Nauja:** Kliento domeno valdymo sąsaja
* **Nauja:** Administratoriaus domenų stebėjimas ir žurnalai
* **Nauja:** Kuponų palaikymas domenų produktams
* **Nauja:** Išsamus nustatymų valdymas
* **Nauja:** Kūrėjams patogi išplečiama kodo bazė
* **Patobulinta:** Atnaujintas OpenSRS teikėjas su pilnu funkcijų palaikymu
* **Patobulinta:** Moderni UI, suderinta su Ultimate Multisite v2
* **Ištaisyta:** Visas pasenęs v1 kodas atnaujintas pagal v2 standartus
* **Pašalinta:** Senasis v1 suderinamumas (nesuderinamas pakeitimas)

### Ankstesnės versijos (v1 Legacy) {#previous-versions-v1-legacy}

### Versija 0.0.3 - 20/08/2019 {#version-003---20082019}

* Ištaisyta: Nesuderinamumas su Groundhogg CRM
* Pastaba: Tai buvo paskutinė su v1 suderinama laida

### Versija 0.0.2 - 07/12/2018 {#version-002---07122018}

* Ištaisyta: Pašalintas License Key laukas
* Ištaisyta: Trūksta plano skirtukų, kai funkcijos plugin yra aktyvus
* Patobulinta: Registracijos lauke pridėtas praleidimo mygtukas

### Versija 0.0.1 - Pradinė laida {#version-001---initial-release}

* Bazinė OpenSRS integracija WP Ultimo v1
* Paprasta domeno paieška ir registracija
* Planu pagrįsti domeno leidimai
