---
title: Dnevnik promjena za prodavce domena
sidebar_position: 99
_i18n_hash: bc3ab4e3f0076e80e8c38ed313f4430d
---
# Dnevnik promjena za Domain Seller

Verzija 1.1.0 - Obraćeno 2026-05-08
- Novo: Implementirano kreiranje DNS zapisa (add_dns_record) za registrere ResellerClub, Enom i OpenSRS
- Popravak: Parser podrazum DNS zapisa sada toleriše tokene {DOMAIN} i {SITE_URL}
- Popravak: Slugi za polje izbora domena na checkout stranici namespaced su kako bi se spriječio sukob sa site_url

Verzija 1.0.8 - Obraćeno 2026-05-07
- Popravak: Cjenovna politika za domene ResellerClub sada dohvaća trenutne troškove sa ispravnog API endpoint-a

Verzija 1.0.7 - Obraćeno 2026-05-06
* Popravak: Test_connection za ResellerClub šalje potreban parametar tlds (#224)

Verzija 1.0.6 - Obraćeno 2026-05-05
* Popravak: Registracija domena za ResellerClub sada radi ispravno uz poboljšano rukovanje odgovorima API-ja i rutiranje provajdera bazirano na registru
* Popravak: Poboljšanja korisničkog iskustva (UX) na stranici za administraciju domena
* Uklonjeno: Integracija registra CyberPanel

Verzija 1.0.5 - Obraćeno 2026-04-02
* Novo: Integracija registra GoDaddy za registraciju i upravljanje domenima
* Novo: Integracija registra NameSilo
* Novo: Integracija registra ResellerClub
* Novo: Automatska provjera domena za slanje SES prilikom kupovine i mapiranja domena
* Popravak: Konstante plugin-a Guard za zaštitu od ponovne definicije u test okruženju
* Popravak: MySQL zastavice pravilno razdvajaju riječi u install-wp-tests.sh

Verzija 1.0.4 - Obraćeno 2026-03-14
* **Popravak:** Neki nedostajući CSS resursi
* **Popravak:** Greška vezana za nedostupne TLD-ove

Verzija 1.0.3 - Obraćeno 2026-03-09
* **Popravak:** Greške Vue reaktivnih svojstava (domain_option, selected_domain, domain_provider) prilikom korištenja starog signup šablona sa checkout shortcode-om
* **Popravak:** Neusklađenost polja za unos poddomena i prevelik tekst u polju za izbor domena na checkout stranici
* **Popravak:** Sakrivanje bloka pregleda "Vaš URL će biti" kada je polje za izbor domena prisutno

Verzija 1.0.2 - Obraćeno 2026-03-01
* **Poboljšano:** Uklonjene globalne postavke markupa sa stranice postavki — cjenovna politika je sada isključivo po proizvodu
* **Poboljšano:** Dodana veza "Upravljanje domenima proizvoda" na stranici postavki za brzu navigaciju
* **Poboljšano:** Jasnije opisi polja i alati za napredne informacije (tooltips) za postavke domena proizvoda (catch-all naspram TLD-specifičnih, tipovi markupa, početna cjena)
* **Poboljšano:** Bolji opisi širom stranice postavki (pretraživanje TLD-ova, obnove, DNS, obavještenja)

Verzija 1.0.1 - Obraćeno 2026-02-27

* **Novo:** Alat za uvoz TLD-ova za masovno upravljanje cijenama
* **Novo:** Podrška za početne cjenovne pakete za domene proizvode
* **Novo:** E2E test suite sa Cypress-om
* **Novo:** Email šabloni za obavještenja o životnom ciklusu domena
* **Novo:** Polja adrese registratora na modalu za administraciju domena, popunjena podacima iz postavki
* **Novo:** Interfejs za upravljanje DNS-om klijenta sa podrškom za dodavanje, uređivanje i brisanje zapisa
* **Novo:** Opcija "Nosite svoj domen" na checkout stranici sa automatskim mapiranjem domena
* **Novo:** Automatsko generisanje URL-a sajta iz imena domena tokom checkout procesa
* **Novo:** Podrazumevani nameserver i konfiguracija DNS zapisa u postavkama
* **Novo:** Detalji o registraciji domena i upravljanje DNS-om na osnovnoj stranici uređivanja domena
* **Novo:** Setup wizard automatski kreira podrazumevani domen proizvod sa razumnim podrazumevanim vrijednostima
* **Novo:** Dnevni automatski sink TLD-ova putem cron-a za sve konfigurirane provajdere
* **Novo:** WHOIS privatnost zaštita sa konfiguracijom po proizvodu (uvijek uključeno, izbor klijenta ili onemogućeno)
* **Novo:** Polje za čekiranje WHOIS privatnosti na checkout stranici sa prikazom cijene i podrškom za tamni režim
* **Novo:** Administracija za registraciju domena na stranici za administraciju domena za ručnu registraciju
* **Novo:** Automatsko ažuriranje plugin-a putem Ultimate Multisite update server-a
* **Novo:** Filter tab za tip domena proizvoda u tabeli sa listom proizvoda sa ljubičastim badge stiliziranjem
* **Novo:** Polja kontakta registratora (ime, adresa, grad, država, poštanski broj, zemlja, telefon) na checkout formi za domene
* **Novo:** Validacija polja registratora prije pozivanja API-ja registra sa jasnim porukama o greškama
* **Novo:** Specifični kanali logova provajdera za događaje registracije domena (npr. domain-seller-namecheap.log)
* **Novo:** Polja kontakta registratora na glavnoj checkout formi za registraciju/signup (prikazana prilikom registracije domena)
* **Poboljšano:** Polje za pretragu domena na checkout stranici zamijenjeno jedinstvenim poljem za izbor domena koje podržava tabove za poddomenu, registraciju i postojeći domen
* **Poboljšano:** Postavke domena proizvoda prikazuju se inline na stranici uređivanja proizvoda putem osnovnog widget sistema
* **Poboljšano:** Informacije o klijentskom domenu se spajaju u osnovni widget za mapiranje domena umjesto u samostalnog metaboksa
* **Poboljšano:** Wizard za uvoz TLD-ova pojednostavljen na sink jednim klikom sa svih provajdera
* **Poboljšano:** Dostupnost domena Namecheap koristi batch API poziv za brže pretraživanje
* **Poboljšano:** API za cjenovna paketa Namecheap koristi ispravne parametre i parsiranje odgovora
* **Poboljšano:** Centralizovano skladištenje TLD-ova u jednom network option-u
* **Poboljšano:** Logovanje aktivnosti domena za promjene DNS-a, transfere i primjenu konfiguracije
* **Poboljšano:** Potpun sink TLD-ova za OpenSRS koristeći IANA master list sa batch validacijom
* **Poboljšano:** Potpun sink TLD-ova za Namecheap sa paginiranim API zahtjevima
* **Poboljšano:** Zamijenjene su stare provajderske klase sa Integration Registry pattern-a
* **Poboljšano:** Panel postavki sa konfiguracijom DNS-a i transfere
* **Poboljšano:** Brojevi telefona automatski formatirani u +CC.NNN format registra
* **Poboljšano:** Validacija polja telefona uklanja formatirajuće znakove prije slanja
* **Poboljšano:** Zahtjev za verziju povećan na Ultimate Multisite 2.4.12 sa jasnijim upozorenjem
* **Poboljšano:** CI workflow koristi odgovarajući checkout za dodatak i osnovni plugin
* **Poboljšano:** prepare_registrant_info() čita iz korisničke meta podataka sačuvanih na checkout-u sa fallback-om na adresu za naplatu
* **Popravljeno:** AJAX pretraga domena ne radi za korisnike koji nisu prijavljeni tokom checkout-a
* **Popravljeno:** AJAX cjenovna politika domena ne radi za korisnike koji nisu prijavljeni tokom checkout-a
* **Popravljeno:** Fatalna greška ponovne deklaracije klase Spyc prilikom pokretanja WP-CLI komandi
* **Popravljeno:** Timeout API-ja sandboksa Namecheap je previše kratak
* **Popravljeno:** Tekst dugmeta za izbor domena nije vidljiv na zelenom pozadinjama
* **Popravljeno:** Registracija domena ne uspijeva sa greškom "RegistrantFirstName is Missing" zbog nedostajućih podataka o kontaktima
* **Popravljeno:** Domen je kreiran sa blog_id=0 kada sajt nije postojao na vrijeme checkout-a
* **Popravljeno:** Postavke podrazumevanih TLD-ova vraćene kao string umjesto parsiranog niza
* **Uklonjeno:** Samostalna stranica za upravljanje domenima — sada se obrađuje putem osnovnih stranica domena

Verzija 1.0.0 - Obraćeno 2025-09-28

**Velika preprava za Ultimate Multisite v2**

* **Novo:** Potpuna preprava sa modernom PHP 7.4+ arhitekturom
* **Novo:** Besprekorna integracija sa Ultimate Multisite v2 checkout sistemom
* **Novo:** Upravljanje domenima proizvoda sa fleksibilnim opcijama cjenovnika
* **Novo:** Arhitektura podrške za više provajdera domena
* **Novo:** Integracija automatskog obnove i pretplate
* **Novo:** Interfejs za upravljanje domenima klijenta
* **Novo:** Nadzor i logovi administracije domena
* **Novo:** Podrška za kuponi za domene proizvode
* **Novo:** Sveobuhvatno upravljanje postavkama
* **Novo:** Kod baza koji je prilagođen za razvoj i proširiv
* **Poboljšano:** Ažurirana podrška za OpenSRS provajdera sa punom podrškom funkcija
* **Poboljšano:** Moderni UI konzistentan sa Ultimate Multisite v2
* **Popravljeno:** Sve deprecirane v1 kodove ažurirano na v2 standarde
* **Uklonjeno:** Kompatibilnost sa starom v1 (prekoračena promjena)

### Prethodne verzije (v1 Legacy)

### Verzija 0.0.3 - 20/08/2019

* Popravak: Nepodudarnost sa Groundhogg CRM
* Napomena: Ovo je bila posljednja v1 kompatibilna verzija

### Verzija 0.0.2 - 07/12/2018

* Popravak: Uklonjeno polje za ključ licenciranja
* Popravak: Tabovi planova nedostaju kada je plugin sa funkcijom aktivan
* Poboljšano: Dodano dugme za preskakanje na polje za registraciju

### Verzija 0.0.1 - Početna izdanje

* Osnovna integracija OpenSRS za WP Ultimo v1
* Jednostavna pretraga i registracija domena
* Dopuštenja domena bazirana na planu
