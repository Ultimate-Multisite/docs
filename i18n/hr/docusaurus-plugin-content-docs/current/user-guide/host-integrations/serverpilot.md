---
title: Integracija ServerPilota
sidebar_position: 16
_i18n_hash: fdbdebe91bc1687b519dc0986de244d3
---
# Integracija s ServerPilotom {#serverpilot-integration}

## Pregled {#overview}
ServerPilot je cloud usluga za hostanje WordPress i drugih PHP web stranica na serverima DigitalOceanu, Amazona, Google ili bilo kojem drugom dobavljaču. Ova integracija omogućuje automatsku sinhronizaciju domena i upravljanje SSL certifikatima između Ultimate Multisite i ServerPilot-a.

## Svojstva {#features}
- Automatska sinhronizacija domena
- Upravljanje SSL certifikatima s Let's Encryptom
- Automatsko obnavljanje SSL certifikata

## Zahtjevi {#requirements}
Slede konstante moraju biti definirane u vašem datoteci `wp-config.php`:

```php
define('WU_SERVER_PILOT_CLIENT_ID', 'vaš_client_id');
define('WU_SERVER_PILOT_API_KEY', 'vaša_api_key');
define('WU_SERVER_PILOT_APP_ID', 'vaš_app_id');
```

## Upute za postavljanje {#setup-instructions}

### 1. Dobavite ServerPilot API podatke (Credentials) {#1-get-your-serverpilot-api-credentials}

1. Prijavite se na svoj ServerPilot dashboard
2. Idite na "Account" > "API"
3. Kreirajte novi API ključ ako ga još nemate
4. Kopirajte svoj Client ID i API Key

### 2. Dobavite App ID {#2-get-your-app-id}

1. U svom ServerPilot dashboardu, idite na "Apps"
2. Odaberite aplikaciju gdje je hostiran vaš WordPress multisite
3. App ID je vidljiv u URL-u: `https://manage.serverpilot.io/apps/{APP_ID}`

### 3. Dodajte konstante u wp-config.php {#3-add-constants-to-wp-configphp}

Dodajte sljedeće konstante u datoteku `wp-config.php`:

```php
define('WU_SERVER_PILOT_CLIENT_ID', 'vaš_client_id');
define('WU_SERVER_PILOT_API_KEY', 'vaša_api_key');
define('WU_SERVER_PILOT_APP_ID', 'vaš_app_id');
```

### 4. Omogućite integraciju {#4-enable-the-integration}

1. U svom WordPress adminu, idite na Ultimate Multisite > Settings
2. Navigirajte na karticu "Domain Mapping" (Mapiranje domena)
3. Skrolajte do "Host Integrations" (Integracije hosta)
4. Omogućite ServerPilot integraciju
5. Kliknite na "Save Changes" (Spremi promjene)

## Kako to radi {#how-it-works}

### Sinhronizacija domena {#domain-syncing}

Kada se domen mapira u Ultimate Multisite:

1. Integracija dohvaća trenutnu listu domena s ServerPilotom
2. Dodaje novi domen na listu (uz verziju s www ako je primjenjivo)
3. Slanje ažurirane liste ServerPilotu putem API-ja
4. ServerPilot ažurira listu domena za vaše aplikacije

### Upravljanje SSL Certifikatima {#ssl-certificate-management}

Nakon što se domeni sinhroniziraju:

1. Integracija automatski omogućuje AutoSSL za vašu aplikaciju
2. ServerPilot upravlja izdavanjem i instalacijom SSL certifikata pomoću Let's Encrypta
3. ServerPilot također obrađuje automatsko obnavljanje SSL certifikata

## Provjera SSL Certifikata {#ssl-certificate-verification}

Integracija je konfigurirana da povećava broj pokušaja provjere SSL certifikata za ServerPilot, jer može proći neko vrijeme prije nego što ServerPilot izdaje i instalira SSL certifikate. Po podrazumevanom, pokušat će do 5 puta, ali se ovo može prilagoditi pomoću filtera.

## Rješavanje problema (Troubleshooting) {#troubleshooting}

### Problemi s povezivanjem putem API-ja {#api-connection-issues}
- Provjerite da li su vaš Client ID i API Key ispravni
- Provjerite da li je vaš App ID ispravan
- Osigurajte da vaš ServerPilot račun ima potrebne dozvole

### Problemi s SSL certifikatima {#ssl-certificate-issues}
- ServerPilot zahtijeva da domeni imaju važeće DNS zapise koji ukazuju na vaš server prije izdavanja SSL certifikata
- Ako se SSL certifikati ne izdaju, provjerite da li su vaši domeni pravilno usmjereni na IP adresu vašeg servera
- Može proći neko vrijeme prije nego što ServerPilot izdaje i instalira SSL certifikate (obično 5-15 minuta)

### Domen nije dodan {#domain-not-added}
- Provjerite logove Ultimate Multisite za bilo kakve poruke o greškama
- Provjerite da li domen već postoji u ServerPilotu
- Osigurajte da vaš plan ServerPilot podržava broj domena koje dodajete

### Uključenje domena {#domain-removal}
- Trenutno, ServerPilot API ne nudi način za uklanjanje pojedinačnih domena.
- Kada se mapiranje domena ukloni u Ultimate Multisite, integracija ažurira listu domena u ServerPilot kako bi isključila uklonjeni domen.
