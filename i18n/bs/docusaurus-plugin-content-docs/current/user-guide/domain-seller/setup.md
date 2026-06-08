---
title: Podešavanje i konfiguracija provajdera
sidebar_position: 1
_i18n_hash: 2a9c0d63fc6ee6bad011c099707fb3f3
---
# Prodavac domena: Postavljanje i konfiguracija pružalaca

Dodatak Domain Seller dolazi sa vodičem za postavljanje koji vas vodi kroz svaki potreban korak. Na ovoj stranici ćemo pokriti tok rada vodiča i kako ga nakon toga konfigurirati ili rekonfigurirati za pružalace.

## Zahtjevnici

- **Multisite Ultimate** v2.4.12 ili noviji, aktiviran na mreži (network-activated)
- **PHP** 7.4+
- API akreditivi za barem jednog podržanog registra

## Vodič za prvi rad (First-run setup wizard)

Vodič za postavljanje automatski se pokreće prvi put kada aktivirate dodatak na mreži. Dostupan je u bilo kojem trenutku na **Network Admin › Ultimate Multisite › Domain Seller Setup**.

### Korak 1 — Odaberite pružalaca

Odaberite registrača kojeg želite povezati. Podržane opcije su:

| Provider | DNS upravljanje | WHOIS privatnost |
|---|---|---|
| OpenSRS | Da | Da |
| Namecheap | Ne | Da (WhoisGuard, besplatno) |
| GoDaddy | Ne | Ne |
| ResellerClub | Da | Ne |
| NameSilo | Ne | Ne |
| Enom | Da | Ne |

### Korak 2 — Unesite akreditivima

Svaki pružalac ima različita polja za akreditivima:

**OpenSRS** — Korisničko ime i privatni ključ (iz OpenSRS Reseller Control Panela)

**Namecheap** — Korisničko ime i API ključ (iz Account › Tools › API Access)

**GoDaddy** — API ključ i tajni ključ (iz developer.godaddy.com)

**ResellerClub** — Reseller ID i API ključ (iz ResellerClub kontrolne table)

**NameSilo** — API ključ (iz namesilo.com › Account › API Manager)

**Enom** — ID računa i API token

Provjerite **Sandbox mode** gdje je dostupno kako biste testirali na test okruženju pružalaca prije nego što krenete u rad.

### Korak 3 — Testiranje veze

Kliknite na **Test Connection**. Vodič šalje lagani API poziv radi provjere akreditiva i povezanosti. Ispravite bilo kakve probleme sa akreditivima prije nastavka.

### Korak 4 — Uvoz TLD-ova

Kliknite na **Import TLDs** kako biste preuzeli sve dostupne TLD-ove i veleprodajne cijene od povezanog pružalaca. Ovo popunjava listu TLD-ova koju koriste domenski proizvodi. Uvoz može trajati 30–60 sekundi za pružalace sa velikim katalogima TLD-ova.

TLD-ovi se takođe automatski re-sinkronizuju jednom dnevno putem zakazanog cron posla.

### Korak 5 — Kreiranje domenskog proizvoda

Vodič kreira podrazumijevani "catch-all" domenski proizvod sa maržom od 10%. Možete odmah urediti ovaj proizvod ili preskočiti i kreirati proizvode ručno pod **Ultimate Multisite › Products**.

Pogledajte [Domain Products and Pricing](./domain-products) za kompletan vodič za konfiguraciju proizvoda.

---

## Rekonfigurisanje pružalaca

Idite na **Network Admin › Ultimate Multisite › Settings › Domain Seller** (ili kliknite na **Settings** u listi dodataka).

Stranica postavki sadrži:

- **Enable domain selling** — uključivanje/isključivanje cijele funkcije
- **Default provider** — pružalac koji se koristi za pretragu domena i nove proizvode
- **Max TLDs per search** — koliko TLD-ova će se provjeriti kada klijent pretražuje; veće vrijednosti prikazuju više opcija, ali su sporije
- **Availability cache duration** — koliko dugo se keširaju rezultati dostupnosti i cijena; niže vrijednosti su preciznije, ali povećavaju API pozive
- **Manage domain products** — brza veza do liste proizvoda
- **Configure providers** — otvara Integration Wizard za dodavanje ili rekonfigurisanje pružalaca

### Dodavanje drugog pružalaca

Kliknite na **Configure providers** i ponovo pokrenite vodič za novi registra. Možete imati više pružalaca konfigurisanih istovremeno. Dodijelite svaki domenski proizvod specifičnom pružalacima, ili ga ostavite na podrazumevanoj opciji.

### Ručno sinkronizovanje TLD-ova

Na stranici postavki, kliknite na **Sync TLDs** pored bilo kojeg konfigurisanog pružalaca kako biste preuzeli najnovije cijene. Ovo je korisno nakon što pružalac ažurira veleprodajne cijene ili doda nove TLD-ove.

---

## Logovi

Svaki pružalac piše u svoj log kanal. Logovi su pregledivi pod **Network Admin › Ultimate Multisite › Logs**:

| Log kanal | Sadržaj |
|---|---|
| `domain-seller-registration` | Svi pokušaji registracije (uspješni i neuspješni) |
| `domain-seller-renewal` | Rezultati posla obnove |
| `domain-seller-opensrs` | Sirova OpenSRS API aktivnost |
| `domain-seller-namecheap` | Sirova Namecheap API aktivnost |
| `domain-seller-godaddy` | Sirova GoDaddy API aktivnost |
| `domain-seller-resellerclub` | Sirova ResellerClub API aktivnost |
| `domain-seller-namesilo` | Sirova NameSilo API aktivnost |
| `domain-seller-enom` | Sirova Enom API aktivnost |
