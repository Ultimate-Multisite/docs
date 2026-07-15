---
title: Integracija sa Cloudwaysom
sidebar_position: 3
_i18n_hash: 09425d90def2b755c27a698d78d7d4b0
---
# Integracija sa Cloudways

## Pregled {#overview}
Cloudways je upravljana platforma za cloud hosting koja vam omogućava da uvoznete WordPress saite na različite cloud provajdere kao što su DigitalOcean, AWS, Google Cloud i više. Ova integracija omogućava automatsku sinhronizaciju domena i upravljanje SSL sertifikatima između Ultimate Multisite-a i Cloudways-a.

## Karakteristike {#features}
- Automatska sinhronizacija domena
- Upravljanje SSL sertifikatima
- Podrška dodatnih domena
- DNS validacija za SSL sertifikate

## Zahtevi {#requirements}
Sledeće konstante morate definisati u vašem fajlu `wp-config.php`:

```php
define('WU_CLOUDWAYS_EMAIL', 'vaša_cloudways_email');
define('WU_CLOUDWAYS_API_KEY', 'vaša_api_ključ');
define('WU_CLOUDWAYS_SERVER_ID', 'vaš_server_id');
define('WU_CLOUDWAYS_APP_ID', 'vaš_app_id');
```

Opciono, možete definisati i:

```php
define('WU_CLOUDWAYS_EXTRA_DOMAINS', 'lista_domena_odvojene_zarezom');
```

## Uputstva za podešavanje {#setup-instructions}

### 1. Dobijte svoje Cloudways API kredencijale {#1-get-your-cloudways-api-credentials}

1. Prijavite se na svoj Cloudways dashboard
2. Idite na "Account" > "API Keys" (Račun > API ključevi)
3. Generišite API ključ ako ga još nemate
4. Kopirajte svoju email adresu i API ključ

### 2. Dobijte ID servera i aplikacije {#2-get-your-server-and-application-ids}

1. U svom Cloudways dashboard-u, idite na "Servers" (Serveri)
2. Izaberite server gde je hostovana vaša WordPress multisite
3. Server ID je vidljiv u URL-u: `https://platform.cloudways.com/server/{SERVER_ID}`
4. Idite na "Applications" (Aplikacije) i izaberite vašu WordPress aplikaciju
5. App ID je vidljiv u URL-u: `https://platform.cloudways.com/server/{SERVER_ID}/application/{APP_ID}`

### 3. Dodajte konstante u wp-config.php {#3-add-constants-to-wp-configphp}

Dodajte sledeće konstante u svoj fajl `wp-config.php`:

### 4. Omogućavanje integracije {#4-enable-the-integration}

1. U admin paneli WordPressa, idite na Ultimate Multisite > Settings (Podešavanja)
2. Idite na karticu "Domain Mapping" (Mapiranje domena)
3. Skrolujte do sekcije "Host Integrations" (Integracije hostova)
4. Omogućite integraciju Cloudways-a
5. Kliknite na "Save Changes" (Sačuvaj promene)

## Kako to funkcioniše {#how-it-works}

### Sinhronizacija domena (Domain Syncing) {#domain-syncing}

Kada se domen mapira u Ultimate Multisite:

1. Integracija dohvaća sve trenutno mapirane domene
2. Dodaje novi domen na listu (uz verziju sa `www` ako je primenjivo)
3. Šalje kompletan spisak Cloudways-u putem API-ja
4. Cloudways ažurira alias-ove domena za vašu aplikaciju

Napomena: Cloudways API zahteva slanje kompletnog spiska domena svaki put, a ne samo dodavanje ili uklanjanje pojedinačnih domena.

### Upravljanje SSL sertifikatima (SSL Certificate Management) {#ssl-certificate-management}

Nakon što su domeni sinhronizovani:

1. Integracija proverava koje domene imaju validne DNS zapise koji ukazuju na vaš server
2. Šalje zahtev Cloudways-u da instalira Let's Encrypt SSL sertifikate za te domene
3. Cloudways se brine o izdavanju i instalaciji SSL sertifikata

```php
define('WU_CLOUDWAYS_EXTRA_DOMAINS', 'extradomain1.com,extradomain2.com');
```

:::warning Ne uključujte sopstvenu mrežnu wildcard domenu
Ne dodajte `*.your-network.com` (ili bilo koji obrazac poddomene vaše mreže) u
`WU_CLOUDWAYS_EXTRA_DOMAINS`. Pogledajte [Važna napomena — zamka SSL](important--wildcard-ssl-pitfall) ispod za razlog zašto ovo sprečava izdavanje SSL sertifikata po najmu (per-tenant).
:::

Интеграција увек тражи **standard** (ne-wildcard) Let's Encrypt sertifikate od Cloudways-a. Ако u `WU_CLOUDWAYS_EXTRA_DOMAINS` unesete wildcard šablon (`*.`), početni `*.` se uklanja pre zahteva za SSL — sam wildcard nikada nije instaliran ovom integracijom. Da biste koristili wildcard sertifikat na Cloudways-u, morali biste ga instalirati ručno, ali to blokira izdavač Let's Encrypt za pojedinačne domene koji su mapirani kao prilagođeni domeni (pogledajte zamku ispod).

## Dodatni domeni (Extra Domains) {#extra-domains}

Konstanta `WU_CLOUDWAYS_EXTRA_DOMAINS` vam omogućava da navedete dodatne **eksterne** domene koje treba uvek zadržati na listi alias-a aplikacije Cloudways. Koristite je za:

- Eksterne domene koje Ultimate Multisite ne upravlja (npr. zasebni marketinški sajt koji deli isti Cloudways aplikaciju)
- Parkirane ili staging domene koje želite da ostanu na listi alias-a aplikacije

**Ne koristite** ovu konstantu za wildcard poddomene vaše mreže (npr. `*.your-network.com`). Pogledajte zamku o wildcard SSL ispod.

## Važno — Zamka oko Wildcard SSL-a {#important--wildcard-ssl-pitfall}

Česta greška kada pratite podrazumevanu postavku Cloudways je dodavanje wildcarta kao što je `*.your-network.com` u `WU_CLOUDWAYS_EXTRA_DOMAINS`, ili ručno instaliranje wildcard SSL sertifikata za Cloudways za taj wildcard.

**Ako to uradite, Cloudways će odbiti da izdaje Let's Encrypt sertifikate za prilagođene domene po najmu koje Ultimate Multisite mapira.** Cloudways zamenjuje aktivni SSL sertifikat na aplikaciji svaki put, a već postojeći wildcard sertifikat na aplikaciji blokira izdavač Let's Encrypt za pojedinačne domene na kojima se integracija oslanja.

### Preporučena konfiguracija Cloudways SSL-a za Ultimate Multisite mrežu {#recommended-cloudways-ssl-setup-for-an-ultimate-multisite-network}

1. U tab **SSL Certificate** aplikacije Cloudways, instalirajte **standard Let's Encrypt sertifikat** koji pokriva samo `your-network.com` i `www.your-network.com` — **ne** wildcard.
2. Ne stavljajte `*.your-network.com` (ili bilo koji obrazac poddomena vaše mreže) u `WU_CLOUDWAYS_EXTRA_DOMAINS`. Rezervišite tu konstantu isključivo za **eksterne** domene.
3. Kreirajte wildcard poddomenu po najnižem nivou DNS-a (rezervni zapis `A` za `*.your-network.com` koji pokazuje na IP vašeg Cloudways servera) kako bi poddomene bile dostupne. SSL za pojedinačne mapirane prilagođene domene se zatim automatski izdaje putem integracije preko Let's Encrypt-a.

Ako su prilagođene domene vaših najmilanih korisnika zaglavljene bez SSL sertifikata, proverite tab Cloudways SSL. Ako tamo postoji aktivan wildcard sertifikat, uklonite ga, ponovo izradite standard Let's Encrypt sertifikat samo za glavnu domen mreže i uklonite sve stavke sa wildcard-om iz `WU_CLOUDWAYS_EXTRA_DOMAINS`. Zatim ponovo pokrenite mapiranje domena (ili sačekajte sledeći) i integracija će početi da izdaje sertifikate po domenima ponovo.

## Rešavanje problema {#troubleshooting}

### Problemi sa povezivanjem API-ja {#api-connection-issues}
- Proverite da li su vaša e-mail adresa i API ključ ispravni
- Proverite da li su ID servera i aplikacije ispravni
- Uverite se da vaš Cloudways nalog ima potrebna dozvolama

### Problemi sa SSL sertifikatom {#ssl-certificate-issues}
- Cloudways zahteva da domeni imaju validne DNS zapise koji pokazuju na vaš server pre nego što izda SSL sertifikate.
- Integracija proverava DNS zapise pre nego što traži SSL sertifikate.
- Ako se SSL sertifikati ne izdaju, proverite da li su vaši domeni pravilno usmereni na IP adresu vašeg servera.
- **Per-tenant prilagođeni domeni zaglavljeni bez SSL-a?** Proverite karticu za SSL Certificate u aplikaciji Cloudways. Ako je aktivan wildcard sertifikat (ručno instaliran ili koji pokriva `*.your-network.com`), Cloudways neće izdati Let's Encrypt sertifikate za pojedinačno mapirane prilagođene domene. Zamenite ga standardnim Let's Encrypt sertifikatom koji pokriva samo glavnu mrežnu domen (`your-network.com`, `www.your-network.com`) i uklonite sve wildcard unose iz `WU_CLOUDWAYS_EXTRA_DOMAINS`. Zatim ponovo pokrenite mapiranje domena (ili sačekajte sledeći) i integracija će tražiti sertifikate po domenima.

### Domen nije dodan {#domain-not-added}
- Proverite logove Ultimate Multisite na bilo kakve poruke o greškama.
- Proverite da li je domen već dodan u Cloudways.
- Uverite se da vaš Cloudways plan podržava broj domena koje dodajete.
