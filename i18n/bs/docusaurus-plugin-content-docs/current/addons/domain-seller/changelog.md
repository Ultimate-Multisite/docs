---
title: Dnevnik promjena Domain Seller
sidebar_position: 99
_i18n_hash: 6b9be73c1503d8df8a806bb02b241873
---
# Dnevnik promjena Domain Seller

Verzija 1.3.0 - Objavljeno 2026-06-02
- Novo: Dodano upozorenje u network-adminu kada stanje HostAfrica preprodavača postane prenisko
- Novo: Dodano automatsko mapiranje novoregistrovanih domena na mrežnu stranicu
- Ispravka: Zahtjevi za polja registranta primijenjeni samo pri registraciji nove domene
- Ispravka: Omogućeno odbacivanje obavještenja o praćenju stanja
- Ispravka: Osigurano očuvanje WooCommerce podataka registranta za naplatu
- Ispravka: Provedeni zahtjevi za kontakt registranta tokom registracije
- Ispravka: Spriječeno kreiranje proizvoda za registraciju domena s 0% marže
- Ispravka: Očuvani odabiri domena i cijene kroz tok sesije naplate
- Ispravka: Poboljšan prikaz valute cijena HostAfrica domena
- Ispravka: Poboljšano ponašanje akcije obrasca naplate radi sprečavanja WP-core nepodudarnosti query-var
- Poboljšano: Povezana dokumentacija konfiguracije HostAfrica preprodavača u uputama za postavljanje

Verzija 1.2.0 - Objavljeno 2026-05-25
- Novo: Dodan HostAfrica kao integracija za prodaju domena s podrškom za naplatu, čarobnjak za postavljanje, pretragu, TLD/cijene, registraciju, obnovu, transfer, nameserver, DNS, EPP kod, registrar lock i ID zaštitu
- Novo: Dodan Openprovider kao integracija za prodaju domena s podrškom za cijene za preprodavače, registraciju, obnovu, transfer, nameserver, DNS, EPP kod, registrar lock, WHOIS privatnost i TLD sinhronizaciju
- Novo: Dodan Hostinger kao integracija za prodaju domena koja koristi dijeljeni Hostinger API token iz osnovne integracije za provjere dostupnosti, registraciju, ažuriranja nameservera, registrar lock i WHOIS privatnost
- Poboljšano: Dodani docblockovi za akcije i filtere životnog ciklusa domena za smjernice developerske integracije
- Poboljšano: Ažurirani metapodaci kompatibilnosti plugin-a na WordPress 7.0 u readme datoteci dodatka
- Poboljšano: Ažurirani predlošci planiranja korišteni za koordinaciju nadolazećeg izdanja

Verzija 1.1.0 - Objavljeno 2026-05-08
- Novo: Kreiranje DNS zapisa (add_dns_record) implementirano za ResellerClub, Enom i OpenSRS registrare
- Ispravka: Podrazumijevani parser DNS zapisa sada toleriše {DOMAIN} i {SITE_URL} tokene
- Ispravka: Slugovi polja za odabir domene pri naplati namespacovani su kako bi se spriječio sudar sa site_url

Verzija 1.0.8 - Objavljeno 2026-05-07
- Ispravka: Cijene ResellerClub domena sada dohvaćaju trenutne troškovne cijene s ispravnog API endpointa

Verzija 1.0.7 - Objavljeno 2026-05-06
* Ispravka: ResellerClub test_connection šalje obavezni parametar tlds (#224)

Verzija 1.0.6 - Objavljeno 2026-05-05
* Ispravka: Registracija ResellerClub domena sada radi ispravno uz poboljšano rukovanje API odgovorima i usmjeravanje provajdera vođeno registrom
* Ispravka: Poboljšanja UX-a administratorske stranice Register Domain
* Uklonjeno: CyberPanel integracija registrara

Verzija 1.0.5 - Objavljeno 2026-04-02
* Novo: GoDaddy integracija registrara za registraciju i upravljanje domenama
* Novo: NameSilo integracija registrara
* Novo: ResellerClub integracija registrara
* Novo: Automatska verifikacija SES domene za slanje pri kupovini i mapiranju domene
* Ispravka: Zaštićene konstante plugin-a od ponovnog definisanja u testnom okruženju
* Ispravka: MySQL zastavice se ispravno razdvajaju po riječima u install-wp-tests.sh

Verzija 1.0.4 - Objavljeno 2026-03-14
* **Ispravka:** Neki nedostajući css resursi
* **Ispravka:** Greška povezana s nedostupnim tlds

Verzija 1.0.3 - Objavljeno 2026-03-09
* **Ispravka:** Greške Vue reaktivnih svojstava (domain_option, selected_domain, domain_provider) pri korištenju naslijeđenog predloška za prijavu s kratkim kodom za naplatu
* **Ispravka:** Neusklađenost polja za unos poddomene i prevelik tekst u polju za odabir domene pri naplati
* **Ispravka:** Sakriven blok pregleda "Vaš URL će biti" kada je prisutno polje za odabir domene

Verzija 1.0.2 - Objavljeno 2026-03-01
* **Poboljšano:** Uklonjene globalne postavke marže sa stranice postavki — cijene su sada isključivo po proizvodu
* **Poboljšano:** Dodan link "Upravljaj proizvodima domena" na stranici postavki za brzu navigaciju
* **Poboljšano:** Jasniji opisi polja i tooltipovi za postavke proizvoda domena (sveobuhvatno naspram specifično za TLD, tipovi marže, uvodne cijene)
* **Poboljšano:** Bolji opisi kroz cijelu stranicu postavki (pretraga TLD-ova, obnove, DNS, obavještenja)

Verzija 1.0.1 - Objavljeno 2026-02-27

* **Novo:** Alat za uvoz TLD-ova za masovno upravljanje cijenama
* **Novo:** Podrška za uvodne cijene za domenske proizvode
* **Novo:** E2E testni paket s Cypress
* **Novo:** Email predlošci za obavještenja o životnom ciklusu domena
* **Novo:** Polja adrese registranta u admin modalu za registraciju domena, unaprijed popunjena iz postavki
* **Novo:** Interfejs za upravljanje DNS-om za korisnike s podrškom za dodavanje, uređivanje i brisanje zapisa
* **Novo:** Opcija naplate "Donesite vlastitu domenu" s automatskim mapiranjem domena
* **Novo:** Automatsko generisanje URL-a sajta iz naziva domene tokom naplate
* **Novo:** Zadana konfiguracija nameservera i DNS zapisa u postavkama
* **Novo:** Detalji registracije domene i upravljanje DNS-om na osnovnoj stranici za uređivanje domene
* **Novo:** Čarobnjak za postavljanje automatski kreira zadani domenski proizvod s razumnim zadanim vrijednostima
* **Novo:** Dnevna automatska sinhronizacija TLD-ova putem crona preko svih konfigurisanih provajdera
* **Novo:** WHOIS zaštita privatnosti s konfiguracijom po proizvodu (uvijek uključena, izbor korisnika ili onemogućena)
* **Novo:** WHOIS privacy polje za potvrdu na naplati s prikazom cijene i podrškom za tamni režim
* **Novo:** Admin stranica Registruj domenu za ručnu registraciju domena
* **Novo:** Automatska ažuriranja plugina putem Ultimate Multisite servera za ažuriranja
* **Novo:** Kartica filtera tipa domenskog proizvoda u tabeli liste proizvoda sa stilizovanjem ljubičaste oznake
* **Novo:** Kontakt polja registranta (ime, adresa, grad, država/pokrajina, poštanski broj, zemlja, telefon) na obrascu za naplatu domene
* **Novo:** Validacija polja registranta prije pozivanja registrar API-ja s jasnim porukama o greškama
* **Novo:** Kanali dnevnika specifični za provajdera za događaje registracije domena (npr. domain-seller-namecheap.log)
* **Novo:** Kontakt polja registranta na glavnom obrascu za registraciju/prijavu i naplatu (prikazuju se pri registraciji domene)
* **Poboljšano:** Zamijenjeno polje za pretragu domena na naplati jedinstvenim poljem za izbor domene koje podržava kartice za poddomenu, registraciju i postojeću domenu
* **Poboljšano:** Postavke domenskog proizvoda prikazuju se inline na stranici za uređivanje proizvoda putem osnovnog sistema widgeta
* **Poboljšano:** Informacije o domeni korisnika povezuju se s osnovnim widgetom za mapiranje domena umjesto samostalnog metaboxa
* **Poboljšano:** Čarobnjak za uvoz TLD-ova pojednostavljen je na sinhronizaciju jednim klikom od svih provajdera
* **Poboljšano:** Namecheap provjera dostupnosti domena koristi batch API poziv za bržu pretragu
* **Poboljšano:** Namecheap API za cijene koristi ispravne parametre i parsiranje odgovora
* **Poboljšano:** Centralizovana pohrana TLD-ova u jednoj mrežnoj opciji
* **Poboljšano:** Evidentiranje aktivnosti domena za DNS promjene, transfere i primjenu konfiguracije
* **Poboljšano:** Puna TLD sinhronizacija za OpenSRS koristeći IANA glavnu listu s batch validacijom
* **Poboljšano:** Puna TLD sinhronizacija za Namecheap s paginiranim API zahtjevima
* **Poboljšano:** Naslijeđene klase provajdera zamijenjene obrascem Integration Registry
* **Poboljšano:** Panel postavki s DNS i konfiguracijom transfera
* **Poboljšano:** Telefonski brojevi se automatski formatiraju u +CC.NNN format registrara
* **Poboljšano:** Validacija polja telefona uklanja znakove formatiranja prije slanja
* **Poboljšano:** Zahtjev za verziju podignut na Ultimate Multisite 2.4.12 s jasnijom obavijesti
* **Poboljšano:** CI tok rada koristi ispravan checkout i za addon i za osnovni plugin
* **Poboljšano:** prepare_registrant_info() čita iz korisničke mete sačuvane tokom naplate, uz rezervnu opciju adrese za naplatu
* **Ispravljeno:** Domain search AJAX nije uspijevao za neprijavljene korisnike tokom naplate
* **Ispravljeno:** Domain pricing AJAX nije uspijevao za neprijavljene korisnike tokom naplate
* **Ispravljeno:** Fatalna greška ponovne deklaracije Spyc klase pri pokretanju WP-CLI komandi
* **Ispravljeno:** Namecheap sandbox API timeout je bio prekratak
* **Ispravljeno:** Tekst dugmeta Select u pretrazi domena nije bio vidljiv na zelenoj pozadini
* **Ispravljeno:** Registracija domene nije uspijevala s greškom "RegistrantFirstName is Missing" zbog nedostajućih kontakt informacija
* **Ispravljeno:** Zapis domene kreiran s blog_id=0 kada sajt još nije postojao u trenutku naplate
* **Ispravljeno:** Zadana postavka TLD-ova vraćala se kao string umjesto parsiranog niza
* **Uklonjeno:** Samostalna admin stranica za upravljanje domenama — sada se obrađuje kroz osnovne stranice domena

Verzija 1.0.0 - Objavljeno 2025-09-28

**Veliko prepisivanje za Ultimate Multisite v2**

* **Novo:** Potpuno prepisivanje s modernom PHP 7.4+ arhitekturom
* **Novo:** Besprijekorna integracija s Ultimate Multisite v2 sistemom naplate
* **Novo:** Upravljanje domenskim proizvodima s fleksibilnim opcijama cijena
* **Novo:** Arhitektura podrške za više provajdera domena
* **Novo:** Integracija automatske obnove i pretplate
* **Novo:** Interfejs za upravljanje domenama za korisnike
* **Novo:** Admin nadzor domena i dnevnici
* **Novo:** Podrška za kupone za domenske proizvode
* **Novo:** Sveobuhvatno upravljanje postavkama
* **Novo:** Proširiva baza koda prilagođena developerima
* **Poboljšano:** Ažuriran OpenSRS provajder s punom podrškom za funkcije
* **Poboljšano:** Moderan UI usklađen s Ultimate Multisite v2
* **Ispravljeno:** Sav zastarjeli v1 kod ažuriran na v2 standarde
* **Uklonjeno:** Naslijeđena v1 kompatibilnost (promjena koja narušava kompatibilnost)

### Prethodne verzije (v1 naslijeđe)

### Verzija 0.0.3 - 20/08/2019

* Ispravljeno: Nekompatibilnost s Groundhogg CRM
* Napomena: Ovo je bilo posljednje izdanje kompatibilno s v1

### Verzija 0.0.2 - 07/12/2018

* Ispravljeno: Uklonjeno polje License Key
* Ispravljeno: Kartice planova nedostaju kada je plugin funkcije aktivan
* Poboljšano: Dodano dugme za preskakanje na registracijskom polju

### Verzija 0.0.1 - Početno izdanje

* Osnovna OpenSRS integracija za WP Ultimo v1
* Jednostavna pretraga i registracija domena
* Dozvole za domene zasnovane na planu
