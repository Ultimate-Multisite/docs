---
title: Podešavanje i konfiguracija dobavljača
sidebar_position: 1
_i18n_hash: 854fd649457edceefde0eb8246446ebe
---
# Prodavac Domen: Podešavanje i Konfiguracija Provedivaoca {#domain-seller-setup-and-provider-configuration}

Dodatak Domain Seller dolazi sa vodičem za podešavanje koji vas vodi kroz svaki potreban korak. Ova stranica objašnjava tok tog vodiča i kako da nakon toga konfigurišete ili ponovo konfigurišete provedioce (provider).

## Zahtevi {#requirements}

- **Multisite Ultimate** v2.4.12 ili noviji, aktiviran na mreži
- **PHP** 7.4+
- API kredencijali za najmanje jedan podržani registrator

## Vodič za prvu upotrebu (First-run setup wizard) {#first-run-setup-wizard}

Vodič za podešavanje se automatski pokreće prvi put kada aktivirate dodatak na mreži. Takođe je dostupan u bilo kom trenutku putem **Network Admin › Ultimate Multisite › Domain Seller Setup**.

### Korak 1 — Izaberite provedca (Choose a provider) {#step-1--choose-a-provider}

Izaberite registrator sa kojim želite da se povežete. Podržane opcije su:

| Provedac | Upravljanje DNS-om | Privatnost WHOIS-a |
|---|---|---|
| OpenSRS | Da | Da |
| Namecheap | Ne | Da (WhoisGuard, besplatno) |
| HostAfrica | Da | Da (ID zaštita) |
| Openprovider | Da | Da |
| Hostinger | Preko mape domena Hostingera za hostovane domene | Da |
| GoDaddy | Ne | Ne |
| ResellerClub | Da | Ne |
| NameSilo | Ne | Ne |
| Enom | Da | Ne |

### Korak 2 — Unesite kredencijale (Enter credentials) {#step-2--enter-credentials}

Svaki provedac ima različita polja za unos podataka:

**OpenSRS** — Korisničko ime i privatni ključ (iz OpenSRS Reseller Control Panel-a)

**Namecheap** — Korisničko ime i API ključ (iz Account › Tools › API Access)

**HostAfrica** — Endpoint API-ja za reseller domena i kredencijali od HostAfrica reseller modula. Trenutno nije dokumentovan zaseban sandbox endpoint; testirajte sa bezbednim provera samo čitanja pre pokretanja stvarnih registracija.

**Openprovider** — Korisničko ime i lozinka sa omogućeno API pristupom. Opcioni sandbox režim koristi Openprovider sandbox API, a opcioni podrazumevani korisnički identifikator (default customer handle) se može ponovo koristiti za registracije.

**Hostinger** — API token za zajednički hPanel Hostinger od osnovne integracije. Taj isti token omogućava mapiranje glavnog domena i operacije registracije prodavaca domena.

**GoDaddy** — API ključ i tajni (iz developer.godaddy.com)

**ResellerClub** — ID reseller-a i API ključ (iz kontrolne tablete ResellerClub)

**NameSilo** — API ključ (iz namesilo.com › Account › API Manager)

**Enom** — ID naloga i API token

Proverite **Sandbox mode** ako je dostupan da testirate u testnom okruženju dobavljača pre nego što počnete sa stvarnim radom.

### Korak 3 — Testiranje konekcije {#step-3--test-the-connection}

Kliknite na **Test Connection**. Wizard će poslati lagani API poziv kako bi proverio kredencijale i konektivnost. Popravite bilo kakve probleme sa kreditima pre nastavka.

### Korak 4 — Uvoz TLD-ova (Top-Level Domain) {#step-4--import-tlds}

Kliknite na **Import TLDs** da biste povukli sve dostupne TLD-ove i veleprodajne cene od povezanog dobavljača. Ovo popunjava listu TLD-ova koju koriste proizvodi domena. Uvoz može potrajati 30–60 sekundi za dobavljače sa velikim katalogom TLD-ova.

TLD-ovi se automatski ponovo sinhronizuju jednom dnevno putem zakazanog cron job-a.

### Korak 5 — Kreiranje proizvoda domena {#step-5--create-a-domain-product}

Wizard kreira podrazumevani proizvod domena koji hvata sve (catch-all) sa maržom od 10%. Možete odmah uređivati ovaj proizvod ili preskočiti i ručno kreirati proizvode pod **Ultimate Multisite › Products**.

Pogledajte [Domain Products and Pricing](./domain-products) za kompletan vodič o konfiguraciji proizvoda.

---

## Rekonfigurisanje dobavljača {#reconfiguring-a-provider}

Idite na **Network Admin › Ultimate Multisite › Settings › Domain Seller** (ili kliknite na **Settings** u listi pluginova).

Stranica podešavanja sadrži:

- **Omogućavanje prodaje domena** — uključite ili isključite svu ovu funkciju
- **Podrazmejni provajder** — provajder koji se koristi za pretragu domena i nove proizvode
- **Maksimalno TLD-ova po pretrazi** — koliko TLD-ova da proverite kada kupac traži; veće vrednosti prikazuju više opcija, ali su sporije
- **Trajanje keširanja dostupnosti** — koliko dugo da se keširaju rezultati dostupnosti i cene; niže vrednosti su preciznije, ali povećavaju pozive API-ja
- **Upravljanje domenima proizvodima** — brza veza na listu Proizvoda
- **Konfigurisanje provajdera** — otvara Wizard Integracija da dodate ili ponovo konfigurišete provajdere

### Dodavanje drugog provajdera {#adding-a-second-provider}

Kliknite na **Configure providers** i pokrenite wizard ponovo za novog registratora. Možete imati više provajdera konfigurisanih istovremeno. Dodelite svaki domen proizvod određenom provajderu ili ostavite ga na podrazmejnom.

### Ručno sinhronizovanje TLD-ova {#syncing-tlds-manually}

Na stranici podešavanja, kliknite na **Sync TLDs** pored bilo kog konfigurisanog provajdera da biste povukli najnovije cene. Ovo je korisno nakon što provajder ažurira veleprodajne cene ili doda nove TLD-ove.

---

## Logovi {#logs}

Svaki provajder piše u svoj sopstveni kanal logova. Logovi su vidljivi pod **Network Admin › Ultimate Multisite › Logs**:

| Log channel | Sadržaj |
|---|---|
| `domain-seller-registration` | Svi pokušaji registracije (uspeh i neuspeh) |
| `domain-seller-renewal` | Rezultati zadataka za obnavljanje domen |
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

## Napomene o mogućnostima dobavljača {#provider-capability-notes}

Nije svaki registrator API nudi iste operacije. Dodatak prikazuje podržane, ali ne podržane operacije sa jasnim greškama za administratora umesto da se ti problemi tiho skriju.

- **HostAfrica** podržava najširi radni tok za reseller usluge, uključujući pretragu, sinhronizaciju TLD/cenama, registraciju, obnavljanje, transfer, ažuriranje servernih imena, DNS zapisa, EPP kodove, zaključavanje registratora i zaštitu ID-ja.
- **Openprovider** podržava sinhronizaciju TLD cena za reseller, registraciju, obnavljanje, transfer, ažuriranje servernih imena, DNS zona, EPP kodove, zaključavanje registratora i privatnost WHOIS-a. Autentifikuje se kratkotrajnim bearer tokenom koji dodatak automatski osvežava.
- **Hostinger** podržava pretragu dostupnosti, registraciju, pretragu portfolija, ažuriranje servernih imena, zaključavanje registratora i privatnost WHOIS-a putem zajedničkog hPanel API tokena. Hostingerova javna Domains API ne prikazuje reseller/wholesale cene, ulazne transferi, eksplicitno obnavljanje ili preuzimanje EPP kodova; obnavljanje se radi samo automatski.
