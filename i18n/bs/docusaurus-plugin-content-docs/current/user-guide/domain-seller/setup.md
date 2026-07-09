---
title: Postavljanje i konfiguracija pružaoca usluga
sidebar_position: 1
_i18n_hash: 854fd649457edceefde0eb8246446ebe
---
# Prodavač domena: Postavljanje i konfiguracija provajdera

Dodatak Prodavač domena dolazi s vođenim čarobnjakom za postavljanje koji vas vodi kroz svaki obavezni korak. Ova stranica pokriva tok čarobnjaka i kako naknadno konfigurirati ili ponovno konfigurirati provajdere.

## Zahtjevi

- **Multisite Ultimate** v2.4.12 ili noviji, aktiviran na mreži
- **PHP** 7.4+
- API pristupni podaci za najmanje jednog podržanog registrara

## Čarobnjak za prvo pokretanje

Čarobnjak za postavljanje pokreće se automatski prvi put kada mrežno aktivirate plugin. Također je dostupan u bilo kojem trenutku iz **Mrežni administrator › Ultimate Multisite › Postavljanje Prodavača domena**.

### Korak 1 — Odaberite provajdera

Odaberite registrara kojeg želite povezati. Podržane opcije:

| Provajder | Upravljanje DNS-om | WHOIS privatnost |
|---|---|---|
| OpenSRS | Da | Da |
| Namecheap | Ne | Da (WhoisGuard, besplatno) |
| HostAfrica | Da | Da (zaštita ID-a) |
| Openprovider | Da | Da |
| Hostinger | Putem osnovnog Hostinger mapiranja domena za hostovane domene | Da |
| GoDaddy | Ne | Ne |
| ResellerClub | Da | Ne |
| NameSilo | Ne | Ne |
| Enom | Da | Ne |

### Korak 2 — Unesite pristupne podatke

Svaki provajder ima različita polja za pristupne podatke:

**OpenSRS** — Korisničko ime i privatni ključ (iz OpenSRS Reseller Control Panel)

**Namecheap** — Korisničko ime i API ključ (iz Account › Alati › API pristup)

**HostAfrica** — Domains Reseller API endpoint i pristupni podaci iz HostAfrica reseller modula. Trenutno nije dokumentovan zaseban sandbox endpoint; testirajte sigurnim provjerama samo za čitanje prije pokretanja živih registracija.

**Openprovider** — Korisničko ime i lozinka s omogućenim API pristupom. Opcionalni sandbox način koristi Openprovider sandbox API, a opcionalni zadani korisnički handle može se ponovno koristiti za registracije.

**Hostinger** — Dijeljeni Hostinger hPanel API token iz osnovne Hostinger integracije. Isti token pokreće osnovno mapiranje domena i operacije registracije Prodavača domena.

**GoDaddy** — API ključ i secret (iz developer.godaddy.com)

**ResellerClub** — Reseller ID i API ključ (iz ResellerClub kontrolne ploče)

**NameSilo** — API ključ (iz namesilo.com › Account › API Manager)

**Enom** — Account ID i API token

Označite **Sandbox način** gdje je dostupno kako biste testirali u testnom okruženju provajdera prije prelaska uživo.

### Korak 3 — Testirajte vezu

Kliknite **Testiraj vezu**. Čarobnjak šalje lagani API poziv kako bi provjerio pristupne podatke i povezivost. Ispravite sve probleme s pristupnim podacima prije nastavka.

### Korak 4 — Uvezite TLD-ove

Kliknite **Uvezi TLD-ove** da povučete sve dostupne TLD-ove i veleprodajne cijene od povezanog provajdera. Ovo popunjava listu TLD-ova koju koriste domenski proizvodi. Uvoz može trajati 30–60 sekundi za provajdere s velikim katalozima TLD-ova.

TLD-ovi se također automatski ponovno sinhronizuju jednom dnevno putem zakazanog cron zadatka.

### Korak 5 — Kreirajte domenski proizvod

Čarobnjak kreira zadani univerzalni domenski proizvod s maržom od 10%. Možete odmah urediti ovaj proizvod ili preskočiti i ručno kreirati proizvode pod **Ultimate Multisite › Proizvodi**.

Pogledajte [Domenski proizvodi i cijene](./domain-products) za potpuni vodič za konfiguraciju proizvoda.

---

## Ponovna konfiguracija provajdera

Idite na **Mrežni administrator › Ultimate Multisite › Postavke › Prodavač domena** (ili kliknite **Postavke** na listi plugina).

Stranica postavki sadrži:

- **Omogući prodaju domena** — uključite/isključite cijelu funkciju
- **Zadani provajder** — provajder koji se koristi za pretrage domena i nove proizvode
- **Maksimalan broj TLD-ova po pretrazi** — koliko TLD-ova provjeriti kada kupac pretražuje; veće vrijednosti prikazuju više opcija, ali su sporije
- **Trajanje keša dostupnosti** — koliko dugo keširati rezultate dostupnosti i cijena; niže vrijednosti su preciznije, ali povećavaju API pozive
- **Upravljaj domenskim proizvodima** — brza veza do liste Proizvoda
- **Konfiguriraj provajdere** — otvara Čarobnjak za integraciju za dodavanje ili ponovnu konfiguraciju provajdera

### Dodavanje drugog provajdera

Kliknite **Konfiguriraj provajdere** i ponovno pokrenite čarobnjak za novog registrara. Možete imati više provajdera konfiguriranih istovremeno. Dodijelite svaki domenski proizvod određenom provajderu ili ga ostavite na zadanom.

### Ručna sinhronizacija TLD-ova

Na stranici postavki kliknite **Sinhronizuj TLD-ove** pored bilo kojeg konfiguriranog provajdera kako biste povukli najnovije cijene. Ovo je korisno nakon što provajder ažurira veleprodajne cijene ili doda nove TLD-ove.

---

## Logovi

Svaki provajder piše u vlastiti kanal logova. Logovi se mogu pregledati pod **Mrežni administrator › Ultimate Multisite › Logovi**:

| Kanal loga | Sadržaj |
|---|---|
| `domain-seller-registration` | Svi pokušaji registracije (uspješni i neuspješni) |
| `domain-seller-renewal` | Rezultati zadatka obnove |
| `domain-seller-opensrs` | Sirova OpenSRS API aktivnost |
| `domain-seller-namecheap` | Sirova Namecheap API aktivnost |
| `domain-seller-hostafrica` | Sirova HostAfrica API aktivnost |
| `domain-seller-openprovider` | Sirova Openprovider API aktivnost |
| `domain-seller-hostinger` | Sirova Hostinger API aktivnost |
| `domain-seller-godaddy` | Sirova GoDaddy API aktivnost |
| `domain-seller-resellerclub` | Sirova ResellerClub API aktivnost |
| `domain-seller-namesilo` | Sirova NameSilo API aktivnost |
| `domain-seller-enom` | Sirova Enom API aktivnost |

---

## Napomene o mogućnostima provajdera

Ne izlaže svaki registrar API iste operacije. Dodatak prikazuje nepodržane operacije jasnim greškama namijenjenim administratorima umjesto da neprimjetno zakaže.

- **HostAfrica** podržava najširi aktivni preprodajni tok rada, uključujući pretragu, sinhronizaciju TLD/cijena, registraciju, obnovu, transfer, ažuriranja nameservera, DNS zapise, EPP kodove, zaključavanje kod registrara i zaštitu ID-a.
- **Openprovider** podržava sinhronizaciju TLD-ova po preprodajnim cijenama, registraciju, obnovu, transfere, ažuriranja nameservera, DNS zone, EPP kodove, zaključavanje kod registrara i WHOIS privatnost. Autentificira se kratkotrajnim bearer tokenom koji dodatak automatski osvježava.
- **Hostinger** podržava pretragu dostupnosti, registraciju, pretragu portfelja, ažuriranja nameservera, zaključavanje kod registrara i WHOIS privatnost putem zajedničkog hPanel API tokena. Hostingerov javni Domains API ne izlaže preprodajne/veleprodajne cijene, dolazni transfer, eksplicitnu obnovu ili dohvaćanje EPP koda; obnove su samo automatske.
