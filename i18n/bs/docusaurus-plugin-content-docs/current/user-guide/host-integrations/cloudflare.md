---
title: Integracija sa Cloudflare-om
sidebar_position: 16
_i18n_hash: 36ac9de19b1dc53fefd407fb8d21b563
---
# Cloudflare Integracija

## Pregled
Cloudflare je vodeći pružatelj usluga za dostavu sadržaja (CDN) i sigurnosti koji pomaže u zaštiti i ubrzavanju web stranica. Ova integracija omogućava automatsko upravljanje domenama između Ultimate Multisite-a i Cloudflare-a, posebno za instalacije multisite-a sa poddomenama.

## Funkcionalnosti
- Automatsko kreiranje poddomena u Cloudflare-u
- Podrška za proxying poddomena
- Upravljanje DNS zapisima
- Poboljšani prikaz DNS zapisa u Ultimate Multisite adminu

## Zahtjevi
Moraju biti definirane sljedeće konstante u vašoj `wp-config.php` datoteci:

```php
define('WU_CLOUDFLARE_API_KEY', 'your_api_key');
define('WU_CLOUDFLARE_ZONE_ID', 'your_zone_id');
```

## Upute za postavljanje

### 1. Dohvaćanje Cloudflare API ključa

1. Prijavite se na svoj Cloudflare dashboard
2. Idite na "My Profile" (kliknite na svoju e-mail adresu u gornjem desnom kutu)
3. Odaberite "API Tokens" iz izbornika
4. Kreirajte novi API token s sljedećim dozvolama:
   - Zone.Zone: Read
   - Zone.DNS: Edit
5. Kopirajte svoj API token

### 2. Dohvaćanje Zone ID-a

1. U Cloudflare dashboardu, odaberite domen koji želite koristiti
2. Zone ID je vidljiv na kartici "Overview", u desnoj bočnoj traci pod "API"
3. Kopirajte Zone ID

### 3. Dodavanje konstanti u wp-config.php

Dodajte sljedeće konstante u vašu `wp-config.php` datoteku:

```php
define('WU_CLOUDFLARE_API_KEY', 'your_api_token');
define('WU_CLOUDFLARE_ZONE_ID', 'your_zone_id');
```

### 4. Omogućavanje integracije

1. U WordPress adminu, idite na Ultimate Multisite > Settings
2. Navigirajte do kartice "Domain Mapping"
3. Skrolujte do "Host Integrations"
4. Omogućite Cloudflare integraciju
5. Kliknite na "Save Changes"

## Kako to funkcionira

### Upravljanje poddomenama

Kada se kreira nova stranica u instalaciji multisite-a sa poddomenama:

1. Integracija šalje zahtjev Cloudflare API-ju kako bi dodala CNAME zapis za poddomenu
2. Poddomena je po defaultu konfigurisana da se proxyira kroz Cloudflare (ovo se može promijeniti filterima)
3. Kada se stranica obriše, integracija će ukloniti poddomenu iz Cloudflare-a

### Prikaz DNS zapisa

Integracija poboljšava prikaz DNS zapisa u Ultimate Multisite adminu na sljedeći način:

1. Dohvaćanjem DNS zapisa direktno iz Cloudflare-a
2. Prikazom je li zapis proxyiran ili ne
3. Prikazom dodatnih informacija o DNS zapisima

## Cloudflare Custom Hostnames

**Cloudflare Custom Hostnames** (ranije nazivan "Cloudflare for SaaS") je Cloudflare značajka koja omogućava vašim klijentima da koriste vlastite domene sa SSL-om na vašoj multisite mreži. To je preporučeni pristup za instalacije multisite-a mapirane na domene koje koriste Cloudflare, jer Cloudflare automatski upravlja izdajom i obnovom SSL certifikata za svaki custom domen.

### Kako se razlikuje od standardne Cloudflare integracije

| | Standardna integracija | Cloudflare Custom Hostnames |
|---|---|---|
| **Svrha** | Automatski kreira DNS zapise za poddomene | Omogućava custom (mapirane) domene sa SSL-om koji upravlja Cloudflare |
| **Najbolje za** | Multisite sa poddomenama | Multisite mapirane na domene |
| **SSL** | Upravlja se odvojeno | Upravlja ga Cloudflare automatski |

### Postavljanje Cloudflare Custom Hostnames

1. U Cloudflare dashboardu, otvorite zonu za vaš glavni domen.
2. Idite na **SSL/TLS > Custom Hostnames**.
3. Dodajte fallback origin koji ukazuje na IP ili hostname vašeg servera.
4. Za svaki klijentski domen mapiran u Ultimate Multisite-u, dodajte Custom Hostname unos u Cloudflare-u. Ovaj korak možete automatizirati pomoću Cloudflare API-ja.
5. Cloudflare izdaje i obnavlja TLS certifikate za svaki custom hostname automatski čim je klijentov DNS usmjeren na vašu mrežu.

Za potpunu API referencu, pogledajte [Cloudflare Custom Hostnames dokumentaciju](https://developers.cloudflare.com/cloudflare-for-platforms/cloudflare-for-saas/domain-support/).

:::note Ažuriranje terminologije
Od Ultimate Multisite v2.6.1, ova značajka se naziva **Cloudflare Custom Hostnames** u svim postavkama i oznakama plugin-a. Ranije verzije koristile naziv "Cloudflare for SaaS", što je osnovno ime proizvoda Cloudflare-a.
:::

## Važne napomene

S obzirom na nedavne ažuriranja Cloudflare-a, wildcard proxying je sada dostupan za sve klijente. To znači da standardna Cloudflare DNS integracija nije toliko kritična za instalacije multisite-a sa poddomenama kao što je bila, jer jednostavno možete postaviti wildcard DNS zapis u Cloudflare-u.

## Rješavanje problema

### Problemi sa API vezom
- Provjerite je li vaš API token ispravan i ima li potrebne dozvole
- Provjerite je li vaš Zone ID ispravan
- Osigurajte da vaš Cloudflare račun ima potrebne dozvole

### Podomena nije dodana
- Provjerite Ultimate Multisite logove radi bilo kakvih poruka o greškama
- Provjerite je li podomena već dodana u Cloudflare
- Osigurajte da vaš Cloudflare plan podržava broj DNS zapisa koje kreirate

### Problemi sa proxyingom
- Ako ne želite da poddomene budu proxyirani, možete koristiti filter `wu_cloudflare_should_proxy`
- Neke značajke možda neće raditi ispravno kada su proxyirane (npr. određene funkcije WordPress admina)
- Razmislite o korištenju Page Rules-a Cloudflare-a za zaobilaženje cache-a za admin stranice
