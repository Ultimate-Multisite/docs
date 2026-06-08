---
title: Integracija Cloudways
sidebar_position: 3
_i18n_hash: 09425d90def2b755c27a698d78d7d4b0
---
# Integracija sa Cloudways-om

## Pregled
Cloudways je platforma za upravljani cloud hosting koja vam omogućava da pokrenete WordPress sajtove na različitim cloud provajderima, kao što su DigitalOcean, AWS, Google Cloud i mnogi drugi. Ova integracija omogućava automatsko sinhronizovanje domena i upravljanje SSL certifikatima između Ultimate Multisite-a i Cloudways-a.

## Funkcionalnosti
- Automatsko sinhronizovanje domena
- Upravljanje SSL certifikatima
- Podrška za dodatne domene
- DNS validacija za SSL certifikate

## Zahtjevi
U vašu `wp-config.php` datoteku moraju biti definisane sljedeće konstante:

```php
define('WU_CLOUDWAYS_EMAIL', 'your_cloudways_email');
define('WU_CLOUDWAYS_API_KEY', 'your_api_key');
define('WU_CLOUDWAYS_SERVER_ID', 'your_server_id');
define('WU_CLOUDWAYS_APP_ID', 'your_app_id');
```

Opcionalno, možete definisati i:

```php
define('WU_CLOUDWAYS_EXTRA_DOMAINS', 'comma,separated,list,of,domains');
```

## Upute za postavljanje

### 1. Dohvatite Cloudways API vjerodajnice

1. Prijavite se na vaš Cloudways dashboard
2. Idite na "Account" > "API Keys"
3. Generišite API ključ ako ga već nemate
4. Kopirajte vaš email i API ključ

### 2. Dohvatite ID servera i aplikacije

1. U vašem Cloudways dashboardu, idite na "Servers"
2. Izaberite server na kojem je vaš WordPress multisite hostovan
3. Server ID je vidljiv u URL-u: `https://platform.cloudways.com/server/{SERVER_ID}`
4. Idite na "Applications" i izaberite svoju WordPress aplikaciju
5. App ID je vidljiv u URL-u: `https://platform.cloudways.com/server/{SERVER_ID}/application/{APP_ID}`

### 3. Dodajte konstante u wp-config.php

Dodajte sljedeće konstante u vašu `wp-config.php` datoteku:

```php
define('WU_CLOUDWAYS_EMAIL', 'your_cloudways_email');
define('WU_CLOUDWAYS_API_KEY', 'your_api_key');
define('WU_CLOUDWAYS_SERVER_ID', 'your_server_id');
define('WU_CLOUDWAYS_APP_ID', 'your_app_id');
```

Ako imate dodatne **eksterne** domene (izvan vaše multisite mreže) koji uvijek treba da ostanu na listi aliasa Cloudways-a:

```php
define('WU_CLOUDWAYS_EXTRA_DOMAINS', 'extradomain1.com,extradomain2.com');
```

:::warning Ne uključujte wildcard vaše sopstvene mreže
**Nemojte** dodavati `*.your-network.com` (ili bilo koji obrazac poddomena vaše sopstvene mreže) u
`WU_CLOUDWAYS_EXTRA_DOMAINS`. Pogledajte [Važno — problem sa wildcard SSL-om](#important--wildcard-ssl-pitfall)
ispod kako ovo sprječava izdavanje SSL certifikata po tenantu.
:::

### 4. Omogućite integraciju

1. U vašem WordPress admin panelu, idite na Ultimate Multisite > Settings
2. Navigirajte do kartice "Domain Mapping"
3. Skrolujte do "Host Integrations"
4. Omogućite Cloudways integraciju
5. Kliknite na "Save Changes"

## Kako funkcioniše

### Sinhronizacija domena

Kada se domen mapira u Ultimate Multisite-u:

1. Integracija dohvaća sve trenutno mapirane domene
2. Dodaje novi domen na listu (uz www verziju ako je primjenjivo)
3. Šalje kompletnu listu na Cloudways putem API-ja
4. Cloudways ažurira aliase domena za vašu aplikaciju

Napomena: Cloudways API zahtijeva slanje kompletne liste domena svaki put, a ne samo dodavanje ili uklanjanje pojedinačnih domena.

### Upravljanje SSL certifikatima

Nakon sinhronizacije domena:

1. Integracija provjerava koji domeni imaju validne DNS rekorde koji ukazuju na vaš server
2. Šalje zahtjev Cloudways-u za instalaciju Let's Encrypt SSL certifikata za te domene
3. Cloudways upravlja izdajom i instalacijom SSL certifikata

Integracija uvijek traži **standardne** (ne-wildcard) Let's Encrypt certifikate od Cloudways-a. Ako se wildcard obrazac navede u `WU_CLOUDWAYS_EXTRA_DOMAINS`, vodeća
`*.` se uklanja prije zahtjeva za SSL — sam wildcard se nikada ne instalira ovom
integracijom. Da biste koristili wildcard certifikat na Cloudways-u, morali biste ga
instalirati ručno, ali to blokira izdajanje Let's Encrypt certifikata po domenu za mapirane custom domene
(pogledajte problem ispod).

## Dodatni domeni

Konstanta `WU_CLOUDWAYS_EXTRA_DOMAINS` omogućava vam da navedete dodatne **eksterne**
domene koji uvijek treba da ostanu na listi aliasa Cloudways aplikacije. Koristite je za:

- Eksterne domene koji nisu upravljani od strane Ultimate Multisite-a (npr. zasebni marketinški sajt koji dijeli istu Cloudways aplikaciju)
- Parkirane ili staging domene koje želite zadržati na listi aliasa aplikacije

**Nemojte** koristiti ovu konstantu za wildcard poddomenu vaše sopstvene mreže
(npr. `*.your-network.com`). Pogledajte problem sa wildcard SSL-om ispod.

## Važno — Problem sa wildcard SSL-om

Uobičajena greška prilikom praćenja podrazumevanog podešavanja Cloudways-a je dodavanje wildarca poput
`*.your-network.com` u `WU_CLOUDWAYS_EXTRA_DOMAINS`, ili ručno instaliranje Cloudways
wildcard SSL certifikata za taj wildcard.

**Ako to učinite, Cloudways će odbiti da izdaje Let's Encrypt certifikate za
custom domene po tenantu koje Ultimate Multisite mapira.** Cloudways zamjenjuje aktivni
SSL certifikat na aplikaciji svaki put, a prepostojele wildcard certifikat na
aplikaciji blokira izdajanje Let's Encrypt certifikata po domenu na koji se integracija oslanja.

### Preporučeno Cloudways SSL podešavanje za Ultimate Multisite mrežu

1. Na kartici **SSL Certificate** Cloudways aplikacije, instalirajte **standardni
   Let's Encrypt certifikat** koji pokriva samo `your-network.com` i `www.your-network.com`
   — **ne** wildcard.
2. **Nemojte** stavljati `*.your-network.com` (ili bilo koji obrazac poddomena vaše sopstvene mreže) u
   `WU_CLOUDWAYS_EXTRA_DOMAINS`. Sačuvajte tu konstantu samo za **eksterne** domene.
3. Kreirajte wildcard poddomenu po tenantu samo na nivou **DNS** (A zapis za
   `*.your-network.com` koji ukazuje na IP adresu vašeg Cloudways servera) kako bi pod-sajtovi funkcionisali. SSL
   za pojedinačne mapirane custom domene tada se automatski izdaje od strane integracije
   preko Let's Encrypt-a.

Ako su custom domeni vaših tenant-a zaglavljeni bez SSL-a, provjerite Cloudways SSL karticu. Ako je wildcard certifikat aktivan, uklonite ga, ponovo izdajte standardni Let's Encrypt certifikat samo za glavni domen mreže (`your-network.com`, `www.your-network.com`) i uklonite sve wildcard unose iz `WU_CLOUDWAYS_EXTRA_DOMAINS`. Zatim ponovo pokrenite mapiranje domena (ili sačekajte sljedeće) i integracija će ponovo tražiti certifikate po domenu.

## Rješavanje problema

### Problemi sa API konekcijom
- Provjerite da li su vaš email i API ključ ispravni
- Provjerite da li su vaš server ID i aplikacija ID ispravni
- Osigurajte da vaš Cloudways račun ima potrebne dozvole

### Problemi sa SSL certifikatima
- Cloudways zahtijeva da domeni imaju validne DNS rekorde koji ukazuju na vaš server prije izdavanja SSL certifikata
- Integracija validira DNS rekorde prije zahtijevanja SSL certifikata
- Ako se SSL certifikati ne izdaju, provjerite da li su vaši domeni pravilno usmjereni na IP adresu vašeg servera
- **Custom domeni po tenantu zaglavljeni bez SSL-a?** Provjerite Cloudways SSL Certificate karticu. Ako je aktivan wildcard certifikat (ručno instaliran, ili koji pokriva `*.your-network.com`), Cloudways neće izdati Let's Encrypt certifikate za pojedinačno mapirane custom domene. Zamijenite ga standardnim Let's Encrypt certifikatom koji pokriva samo glavni domen mreže (`your-network.com`, `www.your-network.com`) i uklonite sve wildcard unose iz `WU_CLOUDWAYS_EXTRA_DOMAINS`. Zatim ponovo pokrenite mapiranje domena (ili sačekajte sljedeće) i integracija će tražiti certifikate po domenu.

### Domen nije dodan
- Provjerite Ultimate Multisite logove radi bilo kakvih poruka o greškama
- Potvrdite da domen nije već dodan u Cloudways
- Osigurajte da vaš Cloudways plan podržava broj domena koje dodajete
