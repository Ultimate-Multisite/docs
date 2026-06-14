---
title: Integracija s Cloudwaysom
sidebar_position: 3
_i18n_hash: 09425d90def2b755c27a698d78d7d4b0
---
# Integracija s Cloudways

## Pregled
Cloudways je upravljiva platforma za hosting u oblaku koja vam omogućuje da razvijete WordPress site na različitim cloud provajderima kao što su DigitalOcean, AWS, Google Cloud i više. Ova integracija omogućuje automatsku sinhronizaciju domena i upravljanje SSL sertifikatima između Ultimate Multisite i Cloudways.

## Svojstva
- Automatska sinhronizacija domena
- Upravljanje SSL sertifikatima
- Podrška dodatnih domena
- DNS validacija za SSL sertifikate

## Zahtjevi
Slede konstante moraju biti definirane u vašem datoteci `wp-config.php`:

```php
define('WU_CLOUDWAYS_EMAIL', 'vaša_cloudways_email');
define('WU_CLOUDWAYS_API_KEY', 'vaša_api_ključ');
define('WU_CLOUDWAYS_SERVER_ID', 'vaš_server_id');
define('WU_CLOUDWAYS_APP_ID', 'vaš_app_id');
```

Opcionalno, možete definirati i:

```php
define('WU_CLOUDWAYS_EXTRA_DOMAINS', 'lista_domena_odvojene_zarezom');
```

## Upute za postavljanje

### 1. Dobavite svoje Cloudways API podatke
1. Prijavite se na svoj Cloudways dashboard
2. Idite na "Account" > "API Keys" (Račun > API ključevi)
3. Generirajte API ključ ako ga još nemate
4. Kopirajte svoju email adresu i API ključ

### 2. Dobavite svoje Server i Application ID-ove
1. U svom Cloudways dashboardu, idite na "Servers" (Serveri)
2. Odaberite server na kojem je hostiran vaš WordPress multisite
3. Server ID je vidljiv u URL-u: `https://platform.cloudways.com/server/{SERVER_ID}`
4. Idite na "Applications" (Aplikacije) i odaberite svoju WordPress aplikaciju
5. App ID je vidljiv u URL-u: `https://platform.cloudways.com/server/{SERVER_ID}/application/{APP_ID}`

### 3. Dodajte konstante u wp-config.php
Dodajte sljedeće konstante u vaš datoteku `wp-config.php`:

```php
define('WU_CLOUDWAYS_EMAIL', 'vaša_cloudways_email');
define('WU_CLOUDWAYS_API_KEY', 'tvoja_api_ključ');
define('WU_CLOUDWAYS_SERVER_ID', 'tvoj_server_id');
define('WU_CLOUDWAYS_APP_ID', 'tvoj_app_id');
```

Ako imate dodatne **vanjske** domene (izvan vaše multisite mreže) koje treba uvijek ostati na listi alias-a Cloudways:

```php
define('WU_CLOUDWAYS_EXTRA_DOMAINS', 'extradomain1.com,extradomain2.com');
```

:::warning Ne uključujte svoju vlastitu wildcard domenu
Ne dodaj `*.vaša-mreža.com` (ili bilo koji obrazac poddomene vaše mreže) u
`WU_CLOUDWAYS_EXTRA_DOMAINS`. Pogledajte [Važno — zamka s wildcard SSL](important--wildcard-ssl-pitfall)
ispod kako biste vidjeli zašto to sprječava izdavanje SSL certifikata po najdajlovima.
:::

### 4. Omogućite integraciju

1. U svom WordPress adminu, idite na Ultimate Multisite > Settings (Postavke)
2. Idite na karticu "Domain Mapping" (Mapeiranje domena)
3. Skrolajte do "Host Integrations" (Integracije hosta)
4. Omogućite integraciju Cloudways
5. Kliknite na "Save Changes" (Spremi promjene)

## Kako to radi

### Sinkronizacija domena

Kada se domena mapiraju u Ultimate Multisite:

1. Integracija dohvaća sve trenutno mapirane domene
2. Dodaje novu domenu na listu (uz verziju s www ako je primjenjivo)
3. Šalje kompletnu listu Cloudways putem API-ja
4. Cloudways ažurira alias-e domena za vašu aplikaciju

Napomena: Cloudways API zahtijeva slanje kompletne liste domena svaki put, a ne samo dodavanje ili uklanjanje pojedinačnih domena.

### Upravljanje SSL certifikatima

Nakon što se domene sinkroniziraju:

1. Integracija provjerava koje domene imaju važeće DNS zapise koji pokazuju na vaš server
2. Šalje zahtjev Cloudways-u za instalaciju Let's Encrypt SSL certifikata za te domene
3. Cloudways se brine o izdavanju i instalaciji SSL certifikata

Integracija uvijek traži **standardne** (newildcard) Let's Encrypt certifikate s Cloudwaysom. Ako se u `WU_CLOUDWAYS_EXTRA_DOMAINS` navede wildcard obrazac, početni `*.` se uklanja prije zahtjeva za SSL — sam wildcard nikada nije instaliran ovom integracijom. Da biste koristili wildcard certifikat na Cloudwaysu, morali biste ga instalirati ručno, ali to blokira izdavanja Let's Encrypt certifikata za pojedinačne domene koji su mapirani kao prilagođeni domeni (pogledajte zamku u nastavku).

## Dodatni domeni

Konstanta `WU_CLOUDWAYS_EXTRA_DOMAINS` omogućuje vam da navedete dodatne **eksterne** domene koje treba uvijek zadržati na listi alias-a aplikacije Cloudways. Koristite je za:

- Eksterne domene koje Ultimate Multisite ne upravlja (npr. zasebni marketing sustav koji koristi isti Cloudways podaci).
- Parkirane ili staging domene koje želite zadržati na listi alias-a aplikacije.

**Ne koristite** ovu konstantu za wildcard poddomene vaše vlastite mreže (npr. `*.your-network.com`). Pogledajte zamku o wildcard SSL certifikatima u nastavku.

## Važno — Zamka o Wildcard SSL certifikatima

Često pogreška pri praćenju podrazumijevane postavke Cloudways je dodavanje wildcarta poput `*.your-network.com` u `WU_CLOUDWAYS_EXTRA_DOMAINS`, ili ručno instaliranje wildcard SSL certifikata za Cloudways za taj wildcard.

**Ako to učinite, Cloudways će odbiti izdavati Let's Encrypt certifikate za prilagođene domene po najmu koje Ultimate Multisite mapira.** Cloudways zamjenjuje aktivni SSL certifikat na aplikaciji svaki put, a već postojeći wildcard certifikat na aplikaciji blokira izdavanja Let's Encrypt certifikata za pojedinačne domene na kojima se integracija oslanja.

### Preporučena postavka Cloudwaysa za Ultimate Multisite mrežu

1. U tab **SSL Certificate** aplikaciji u Cloudwaysu, instalirajte **standardni Let's Encrypt certifikat** koji pokriva samo `your-network.com` i `www.your-network.com` — **ne** wildcard.
2. Ne stavljajte `*.your-network.com` (ili bilo koji obrazac poddomena vaše mreže) u polje `WU_CLOUDWAYS_EXTRA_DOMAINS`. Rezervirajte tu konstantu isključivo za **eksterne** domene.
3. Kreirajte wildcard poddomenu po najnižem nivou **DNS-a** (A zapis za `*.your-network.com` koji pokazuje na IP vašeg Cloudways servera) kako bi poddomene bile dostupne. SSL za pojedinačne mapirane prilagođene domene automatski će biti izdat putem integracije preko Let's Encrypta.

Ako su prilagođene domene vaših najmilanih korisnika zaglavljene bez SSL-a, provjerite tab Cloudways SSL. Ako tamo postoji aktivni wildcard certifikat, uklonite ga, izdajte novi standardni Let's Encrypt certifikat samo za glavnu mrežnu temu i uklonite sve unose wildcard u `WU_CLOUDWAYS_EXTRA_DOMAINS`. Zatim ponovno pokrenite mapiranje domena (ili počnite čekati sljedeći) i integracija će početi izdavati certifikate po domeni.

## Rješavanje problema

### Problemi s povezivanjem API-ja
- Provjerite da li su vaša e-mail adresa i API ključ ispravni
- Provjerite da li su ID servera i aplikacije ispravni
- Osigurajte da vaš Cloudways račun ima potrebna dozvolama

### Problemi s SSL certifikatima
- Cloudways zahtijeva da domene imaju validne DNS zapise koji pokazuju na vaš server prije izdavanja SSL certifikata.
- Integracija provjerava DNS zapise prije nego što traži SSL certifikate.
- Ako se SSL certifikati ne izdaju, provjerite jesu li vaši domeni pravilno usmjereni na IP adresu vašeg servera.
- **Per-tenant prilagođeni domeni zaglavljeni bez SSL?** Provjerite karticu za SSL Certifikate u aplikaciji Cloudways. Ako je aktivno wild card certifikat (ručno instaliran ili koji pokriva `*.your-network.com`), Cloudways neće izdavati Let's Encrypt certifikate za pojedinačno mapirane prilagođene domene. Zamijenite ga standardnim Let's Encrypt certifikatom koji pokriva samo glavnu mrežnu domenę (`your-network.com`, `www.your-network.com`) i uklonite sve wild card unose iz `WU_CLOUDWAYS_EXTRA_DOMAINS`. Zatim ponovno pokrenite mapiranje domena (ili sačekajte sljedeće) i integracija će tražiti certifikate za pojedinačne domene.

### Domen nije dodan
- Provjerite logove Ultimate Multisite na bilo kakve poruke o greškama.
- Potvrdite da domen još uvijek nije dodan u Cloudways.
- Osigurajte da vaš Cloudways plan podržava broj domena koje dodajete.
