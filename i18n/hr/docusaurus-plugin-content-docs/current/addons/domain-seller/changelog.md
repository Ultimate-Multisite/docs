---
title: Dnevnik promjena prodavača domena
sidebar_position: 99
_i18n_hash: 6b9be73c1503d8df8a806bb02b241873
---
# Dnevnik promjena prodavača domena {#domain-seller-changelog}

Verzija 1.3.0 - Objavljeno 2026-06-02
- Novo: Dodano upozorenje u administraciji mreže kada saldo HostAfrica preprodavača postane prenizak
- Novo: Dodano automatsko mapiranje novoregistriranih domena na mrežno web-mjesto
- Ispravak: Zahtjevi za polja registranta primijenjeni samo pri registraciji nove domene
- Ispravak: Obavijesti o praćenju salda sada se mogu odbaciti
- Ispravak: Osigurano očuvanje podataka za naplatu registranta u WooCommerce
- Ispravak: Nametnuti zahtjevi za kontakt registranta tijekom registracije
- Ispravak: Spriječeno stvaranje proizvoda za registraciju domena s maržom od 0%
- Ispravak: Očuvani odabiri domena i cijene kroz tijek checkout sesije
- Ispravak: Poboljšan prikaz valute cijena HostAfrica domena
- Ispravak: Poboljšano ponašanje radnje obrasca za checkout kako bi se spriječila nepodudaranja WP-core query-var vrijednosti
- Poboljšano: Povezana dokumentacija za konfiguraciju HostAfrica preprodavača u uputama za postavljanje

Verzija 1.2.0 - Objavljeno 2026-05-25
- Novo: Dodan HostAfrica kao integracija za prodaju domena s podrškom za checkout, čarobnjak za postavljanje, pretraživanje, TLD/cijene, registraciju, obnovu, prijenos, nameserver, DNS, EPP kod, registrar lock i ID zaštitu
- Novo: Dodan Openprovider kao integracija za prodaju domena s podrškom za preprodavačke cijene, registraciju, obnovu, prijenos, nameserver, DNS, EPP kod, registrar lock, WHOIS privatnost i TLD sinkronizaciju
- Novo: Dodan Hostinger kao integracija za prodaju domena koja koristi zajednički Hostinger API token iz osnovne integracije za provjere dostupnosti, registraciju, ažuriranja nameservera, registrar lock i WHOIS privatnost
- Poboljšano: Dodani docblockovi za akcije i filtre životnog ciklusa domene kao smjernice za integraciju za razvojne programere
- Poboljšano: Ažurirani metapodaci kompatibilnosti plugina na WordPress 7.0 u readme datoteci dodatka
- Poboljšano: Ažurirani predlošci planiranja koji se koriste za koordinaciju nadolazećeg izdanja

Verzija 1.1.0 - Objavljeno 2026-05-08
- Novo: Stvaranje DNS zapisa (add_dns_record) implementirano za registre ResellerClub, Enom i OpenSRS
- Ispravak: Zadani parser DNS zapisa sada tolerira tokene {DOMAIN} i {SITE_URL}
- Ispravak: Slugovi checkout polja za odabir domene dobili su prostor imena kako bi se spriječio sukob sa site_url

Verzija 1.0.8 - Objavljeno 2026-05-07
- Ispravak: Cijene ResellerClub domena sada dohvaćaju stvarne nabavne cijene s ispravnog API endpointa

Verzija 1.0.7 - Objavljeno 2026-05-06
* Ispravak: ResellerClub test_connection šalje obavezni parametar tlds (#224)

Verzija 1.0.6 - Objavljeno 2026-05-05
* Ispravak: Registracija ResellerClub domena sada ispravno radi uz poboljšanu obradu API odgovora i usmjeravanje pružatelja na temelju registra
* Ispravak: Poboljšanja korisničkog iskustva administratorske stranice za registraciju domene
* Uklonjeno: Integracija CyberPanel registra

Verzija 1.0.5 - Objavljeno 2026-04-02
* Novo: Integracija GoDaddy registra za registraciju i upravljanje domenama
* Novo: Integracija NameSilo registra
* Novo: Integracija ResellerClub registra
* Novo: Automatska provjera SES domene za slanje pri kupnji i mapiranju domene
* Ispravak: Zaštita konstanti plugina od ponovne definicije u testnom okruženju
* Ispravak: MySQL zastavice ispravno se razdvajaju po riječima u install-wp-tests.sh

Verzija 1.0.4 - Objavljeno 2026-03-14
* **Ispravak:** Neki nedostajući css resursi
* **Ispravak:** Pogreška povezana s nedostupnim tld-ovima

Verzija 1.0.3 - Objavljeno 2026-03-09
* **Ispravak:** Pogreške Vue reaktivnih svojstava (domain_option, selected_domain, domain_provider) pri upotrebi naslijeđenog predloška za prijavu s checkout shortcodeom
* **Ispravak:** Neusklađenost polja za unos poddomene i prevelik tekst u checkout polju za odabir domene
* **Ispravak:** Sakrij blok pregleda "Vaš URL bit će" kada je prisutno polje za odabir domene

Verzija 1.0.2 - Objavljeno 2026-03-01
* **Poboljšano:** Uklonjene globalne postavke marže sa stranice postavki — cijene su sada isključivo po proizvodu
* **Poboljšano:** Dodana poveznica "Upravljanje proizvodima domena" na stranici postavki za brzu navigaciju
* **Poboljšano:** Jasniji opisi polja i opisi alata za postavke proizvoda domena (catch-all naspram specifičnih za TLD, vrste marži, uvodne cijene)
* **Poboljšano:** Bolji opisi na cijeloj stranici postavki (pretraživanje TLD-ova, obnove, DNS, obavijesti)

Verzija 1.0.1 - Objavljeno 2026-02-27

* **Novo:** Alat za uvoz TLD-ova za masovno upravljanje cijenama
* **Novo:** Podrška za uvodne cijene za domenske proizvode
* **Novo:** E2E testni paket s Cypress
* **Novo:** Predlošci e-pošte za obavijesti o životnom ciklusu domene
* **Novo:** Polja adrese registranta u admin modalu za registraciju domene, unaprijed popunjena iz postavki
* **Novo:** Sučelje za korisničko upravljanje DNS-om s podrškom za dodavanje, uređivanje i brisanje zapisa
* **Novo:** Opcija naplate "Donesite vlastitu domenu" s automatskim mapiranjem domene
* **Novo:** Automatsko generiranje URL-a sitea iz naziva domene tijekom naplate
* **Novo:** Konfiguracija zadanog nameservera i DNS zapisa u postavkama
* **Novo:** Detalji registracije domene i upravljanje DNS-om na osnovnoj stranici za uređivanje domene
* **Novo:** Čarobnjak za postavljanje automatski stvara zadani domenski proizvod s razumnim zadanim vrijednostima
* **Novo:** Dnevna automatska TLD sinkronizacija putem cron-a za sve konfigurirane pružatelje
* **Novo:** WHOIS zaštita privatnosti s konfiguracijom po proizvodu (uvijek uključeno, izbor korisnika ili onemogućeno)
* **Novo:** WHOIS potvrdni okvir za privatnost pri naplati s prikazom cijene i podrškom za tamni način
* **Novo:** Admin stranica Register Domain za ručnu registraciju domene
* **Novo:** Automatska ažuriranja plugina putem Ultimate Multisite poslužitelja za ažuriranja
* **Novo:** Kartica filtra vrste domenskog proizvoda u tablici popisa proizvoda s ljubičastim stilom značke
* **Novo:** Polja kontakta registranta (ime, adresa, grad, savezna država, poštanski broj, zemlja, telefon) na obrascu za naplatu domene
* **Novo:** Provjera valjanosti polja registranta prije pozivanja registrar API-ja s jasnim porukama pogrešaka
* **Novo:** Dnevnički kanali specifični za pružatelja za događaje registracije domene (npr. domain-seller-namecheap.log)
* **Novo:** Polja kontakta registranta na glavnom obrascu za registraciju/prijavu i naplatu (prikazano pri registraciji domene)
* **Poboljšano:** Polje Domain Search pri naplati zamijenjeno je objedinjenim poljem Domain Selection koje podržava kartice za poddomenu, registraciju i postojeću domenu
* **Poboljšano:** Postavke domenskog proizvoda prikazuju se inline na stranici za uređivanje proizvoda putem osnovnog widget sustava
* **Poboljšano:** Podaci o korisničkoj domeni priključuju se na osnovni widget za mapiranje domene umjesto na samostalni metabox
* **Poboljšano:** Čarobnjak za uvoz TLD-ova pojednostavljen je na sinkronizaciju jednim klikom od svih pružatelja
* **Poboljšano:** Namecheap dostupnost domene koristi batch API poziv za brže pretraživanje
* **Poboljšano:** Namecheap pricing API koristi ispravne parametre i raščlanjivanje odgovora
* **Poboljšano:** Centralizirana pohrana TLD-ova u jednoj mrežnoj opciji
* **Poboljšano:** Bilježenje aktivnosti domene za DNS promjene, prijenose i primjenu konfiguracije
* **Poboljšano:** Puna TLD sinkronizacija za OpenSRS koristeći IANA master listu s batch provjerom valjanosti
* **Poboljšano:** Puna TLD sinkronizacija za Namecheap s paginiranim API zahtjevima
* **Poboljšano:** Zastarjele klase pružatelja zamijenjene su obrascem Integration Registry
* **Poboljšano:** Ploča postavki s DNS i konfiguracijom prijenosa
* **Poboljšano:** Telefonski brojevi automatski se formatiraju u +CC.NNN format registrara
* **Poboljšano:** Provjera valjanosti telefonskog polja uklanja znakove oblikovanja prije slanja
* **Poboljšano:** Zahtjev za verziju povećan na Ultimate Multisite 2.4.12 s jasnijom obavijesti
* **Poboljšano:** CI workflow koristi ispravan checkout i za addon i za osnovni plugin
* **Poboljšano:** prepare_registrant_info() čita iz korisničkih meta podataka spremljenih pri naplati uz fallback na adresu za naplatu
* **Ispravljeno:** Domain search AJAX nije radio za neprijavljene korisnike tijekom naplate
* **Ispravljeno:** Domain pricing AJAX nije radio za neprijavljene korisnike tijekom naplate
* **Ispravljeno:** Fatalna pogreška ponovne deklaracije klase Spyc pri pokretanju WP-CLI naredbi
* **Ispravljeno:** Namecheap sandbox API timeout bio je prekratak
* **Ispravljeno:** Tekst gumba Select za pretraživanje domene nije bio vidljiv na zelenoj pozadini
* **Ispravljeno:** Registracija domene nije uspijevala uz pogrešku "RegistrantFirstName is Missing" zbog nedostajućih kontaktnih podataka
* **Ispravljeno:** Zapis domene stvoren je s blog_id=0 kada site još nije postojao u trenutku naplate
* **Ispravljeno:** Zadana postavka TLD-ova vraćala se kao string umjesto raščlanjenog niza
* **Uklonjeno:** Samostalna admin stranica Domain Management — sada se obrađuje kroz osnovne stranice domena

Verzija 1.0.0 - Objavljeno 2025-09-28

**Veliko prepisivanje za Ultimate Multisite v2**

* **Novo:** Potpuno prepisivanje s modernom PHP 7.4+ arhitekturom
* **Novo:** Besprijekorna integracija s Ultimate Multisite v2 sustavom naplate
* **Novo:** Upravljanje domenskim proizvodima s fleksibilnim opcijama cijena
* **Novo:** Arhitektura podrške za više pružatelja domena
* **Novo:** Integracija automatske obnove i pretplate
* **Novo:** Sučelje za korisničko upravljanje domenama
* **Novo:** Admin nadzor domena i dnevnici
* **Novo:** Podrška za kupone za domenske proizvode
* **Novo:** Sveobuhvatno upravljanje postavkama
* **Novo:** Proširiva baza koda prilagođena developerima
* **Poboljšano:** Ažuriran OpenSRS pružatelj s potpunom podrškom za značajke
* **Poboljšano:** Moderni UI usklađen s Ultimate Multisite v2
* **Ispravljeno:** Sav zastarjeli v1 kod ažuriran na v2 standarde
* **Uklonjeno:** Zastarjela v1 kompatibilnost (prijelomna promjena)

### Prethodne verzije (v1 Legacy) {#previous-versions-v1-legacy}

### Verzija 0.0.3 - 20/08/2019 {#version-003---20082019}

* Ispravljeno: Nekompatibilnost s Groundhogg CRM
* Napomena: Ovo je bilo posljednje izdanje kompatibilno s v1

### Verzija 0.0.2 - 07/12/2018 {#version-002---07122018}

* Ispravljeno: Uklonjeno polje License Key
* Ispravljeno: Kartice plana nedostaju kada je plugin značajke aktivan
* Poboljšano: Dodan je gumb za preskakanje na registracijskom polju

### Verzija 0.0.1 - Početno izdanje {#version-001---initial-release}

* Osnovna OpenSRS integracija za WP Ultimo v1
* Jednostavno pretraživanje i registracija domena
* Dozvole za domene temeljene na planu
