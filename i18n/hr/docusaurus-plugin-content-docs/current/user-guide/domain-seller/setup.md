---
title: Postavka i konfiguracija provajdera
sidebar_position: 1
_i18n_hash: 854fd649457edceefde0eb8246446ebe
---
# Prodavatel domena: Postavka i konfiguracija provajdera

Dodatak Domain Seller dolazi s vodičem za postavljanje koji vas vodi kroz svaki potreban korak. Ova stranica objašnjava tok tog vodiča te kako postaviti ili ponovo konfigurisati provajdere nakon toga.

## Zahtjevi {#requirements}

- **Multisite Ultimate** v2.4.12 ili noviji, aktiviran na mreži
- **PHP** 7.4+
- API kredencijali za barem jedan podržani registrator

## Vodič za postavljanje prvi put {#first-run-setup-wizard}

Vodič za postavljanje se automatski pokreće prvi put kada aktivirate plugin na mreži. Također je dostupan u bilo kojem trenutku putem **Network Admin › Ultimate Multisite › Domain Seller Setup**.

### Korak 1 — Odaberite provajdera {#step-1--choose-a-provider}

Odaberite registrator s kojim želite povezati svoj domena. Podržane opcije:

| Providner | Upravljanje DNS-om | Privatnost WHOIS-a |
|---|---|---|
| OpenSRS | Da | Da |
| Namecheap | Ne | Da (WhoisGuard, besplatno) |
| HostAfrica | Da | Da (ID zaštita) |
| Openprovider | Da | Da |
| Hostinger | Kroz mapiranje domena na hostiranih domenama za core Hostinger | Da |
| GoDaddy | Ne | Ne |
| ResellerClub | Da | Ne |
| NameSilo | Ne | Ne |
| Enom | Da | Ne |

### Korak 2 — Unesite kredencijale {#step-2--enter-credentials}

Svaki providner ima različita polja za unos podataka:

**OpenSRS** — Korisničko ime i privatni ključ (iz OpenSRS Reseller Control Panel-a)

**Namecheap** — Korisničko ime i API ključ (iz Account › Tools › API Access)

**HostAfrica** — Endpoint API-ja za reselar domena i kredencijali iz HostAfrica reseller modula. Trenutno nije dokumentiran zaseban sandbox endpoint; testirajte s sigurnim čitanjem samo podataka prije pokretanja stvarnih registracija.

**Openprovider** — Korisničko ime i lozinka s omogućeno API pristupom. Opcioni sandbox način koristi Openprovider sandbox API, a opcionalni podrazumijevani korisnički identifikator se može ponovno koristiti za registracije.

**Hostinger** — API token za zajednički Hostinger hPanel integraciju. Taj isti token omogućuje mapiranje osnovnih domena i operacije registracije prodavatelja domena.

**GoDaddy** — API ključ i tajni ključ (iz developer.godaddy.com)

**ResellerClub** — Reseller ID i API ključ (iz kontrolne ploče ResellerClub-a)

**NameSilo** — API ključ (iz namesilo.com › Account › API Manager)

**Enom** — Account ID i API token

Provjerite **Sandbox mode** ako je dostupan kako biste testirali u testnom okruženju dobavljača prije live pretplate.

### Korak 3 — Testirajte vezu {#step-3--test-the-connection}

Kliknite na **Test Connection**. Wizard šalje lagani API poziv kako bi provjrio podatke za prijave i povezanost. Popravite bilo kakve probleme s podacima za prijavu prije nastavka.

### Korak 4 — Uvoz TLD-ova {#step-4--import-tlds}

Kliknite na **Import TLDs** kako biste povukli sve dostupne TLD-ove (Top-Level Domain) i veleprodajne cijene od povezanog dobavljača. Ovo popunjava listu TLD-ova koja se koristi za domenske proizvode. Uvoz može potrajati 30–60 sekundi za dobavljače s velikim katalogom TLD-ova.

TLD-ovi se automatski ponovno sinhroniziraju jednom dnevno putem raspoređenog cron joba.

### Korak 5 — Kreiranje domenskog proizvoda {#step-5--create-a-domain-product}

Wizard kreira podrazumjenu domensku proizvodnu stavku (catch-all) s maržom od 10%. Možete je odmah uređivati ili preskočiti i ručno kreirati proizvode putem **Ultimate Multisite › Products**.

Pogledajte [Domain Products and Pricing](./domain-products) za kompletan vodič o konfiguraciji proizvoda.

---

## Ponovno konfiguriranje dobavljača {#reconfiguring-a-provider}

Idite na **Network Admin › Ultimate Multisite › Settings › Domain Seller** (ili kliknite na **Settings** u listi pluginova).

Stranica s postavkama sadrži:

- **Omogućite prodaju domena** — uključite ili isključite cijelu značajku
- **Podrazmjeni pružatelj** — pružatelj koji se koristi za pretraživanje domena i nove proizvode
- **Maksimalno TLD-ova po pretrazi** — koliko TLD-ova provjeriti kada klijent traži; veće vrijednosti prikazuju više opcija, ali su sporije
- **Trajanje keša dostupnosti** — koliko dugo se kešira dostupnost i cijene rezultati; niže vrijednosti su točnije, ali povećavaju API pozive
- **Upravljanje domenskim proizvodima** — brzi link na listu Proizvode
- **Konfigurirajte pružatelje** — otvara Wizard integracija za dodavanje ili ponovno konfiguriranje pružatelja

### Dodavanje drugog pružatelja {#adding-a-second-provider}

Kliknite na **Konfiguriraj pružatelje** i pokrenite wizard ponovno za novog registratora. Možete imati više konfiguriranih pružatelja istovremeno. Dodijelite svaki domenski proizvod specifičnom pružatelju ili ga ostavite na podrazmjeni.

### Ručno sinkroniziranje TLD-ova {#syncing-tlds-manually}

Na stranici postavki, kliknite na **Sinkroniziraj TLD-ove** pored bilo kojeg konfiguriranog pružatelja kako biste povukli najnovije cijene. Ovo je korisno nakon što pružatelj ažurira veleprodajne cijene ili doda nove TLD-ove.

---

## Logovi {#logs}

Svaki pružatelj piše u svoj zasebni log kanal. Logove možete pregledati pod **Network Admin › Ultimate Multisite › Logs**:

| Kanal zapisa | Sadržaj |
|---|---|
| `domain-seller-registration` | Svi pokušaji registracije (uspješni i neuspješni) |
| `domain-seller-renewal` | Rezultati zadatka obnove |
| `domain-seller-opensrs` | Sirova aktivnost OpenSRS API-ja |
| `domain-seller-namecheap` | Sirova aktivnost Namecheap API-ja |
| `domain-seller-hostafrica` | Sirova aktivnost HostAfrica API-ja |
| `domain-seller-openprovider` | Sirova aktivnost Openprovider API-ja |
| `domain-seller-hostinger` | Sirova aktivnost Hostinger API-ja |
| `domain-seller-godaddy` | Sirova aktivnost GoDaddy API-ja |
| `domain-seller-resellerclub` | Sirova aktivnost ResellerClub API-ja |
| `domain-seller-namesilo` | Sirova aktivnost NameSilo API-ja |
| `domain-seller-enom` | Sirova aktivnost Enom API-ja |

---

## Napomene o mogućnostima provajdera {#provider-capability-notes}

Nije svaki registrator API nudi iste operacije. Dodatak prikazuje ne podržane operacije s jasnim greškama koje se pojavljuju korisniku, umjesto da tiho propadne.

- **HostAfrica** podržava najširi radni tok za prodaju ponovnih usluga (reseller workflow), uključujući pretraživanje, sinhronizaciju TLD/cijena, registraciju, obnavljanje, transfer, ažuriranje servera imena, DNS zapise, EPP kodove, zaključavanje registratora i zaštitu ID-ja.
- **Openprovider** podržava sinhronizaciju TLD s prodajnim cijenama ponovnih usluga, registraciju, obnavljanje, transfer, ažuriranje servera imena, DNS zone, EPP kodove, zaključavanje registratora i privatnost WHOIS-a. Autentifikira se kratkotrajnim bearer tokenom koji dodatak automatski osvežava.
- **Hostinger** podržava pretraživanje dostupnosti, registraciju, pretragu portfolija, ažuriranje servera imena, zaključavanje registratora i privatnost WHOIS-a putem zajedničkog API tokena hPanel-a. Hostingerov javni Domains API ne prikazuje prodajna/uvozna cijena za ponovne usluge, uvoz transfer ili eksplicitno obnavljanje, niti dohvaćanje EPP kodova; obnove se automatski obnavljuju samo.
