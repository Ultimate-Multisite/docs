---
title: Integracija ServerPilot
sidebar_position: 16
_i18n_hash: fdbdebe91bc1687b519dc0986de244d3
---
# Integracija sa ServerPilotom {#serverpilot-integration}

## Pregled {#overview}
ServerPilot je cloud usluga za hostovanje WordPressa i drugih PHP sajtova na serverima kod DigitalOcean, Amazon, Google-a ili bilo kog drugog provajdera servera. Ova integracija omogućava automatsku sinkronizaciju domena i upravljanje SSL certifikatima između Ultimate Multisite-a i ServerPilot-a.

## Funkcionalnosti {#features}
- Automatska sinkronizacija domena
- Upravljanje SSL certifikatima sa Let's Encrypt-om
- Automatsovno obnavljanje SSL-a

## Zahtjevi {#requirements}
U vašu `wp-config.php` datoteku moraju biti definirane sljedeće konstante:

```php
define('WU_SERVER_PILOT_CLIENT_ID', 'your_client_id');
define('WU_SERVER_PILOT_API_KEY', 'your_api_key');
define('WU_SERVER_PILOT_APP_ID', 'your_app_id');
```

## Upute za postavljanje {#setup-instructions}

### 1. Dohvatite svoje ServerPilot API vjerodajnice {#1-get-your-serverpilot-api-credentials}

1. Prijavite se na svoj ServerPilot dashboard
2. Idite na "Account" > "API"
3. Kreirajte novi API ključ ako ga već nemate
4. Kopirajte svoj Client ID i API Key

### 2. Dohvatite svoj App ID {#2-get-your-app-id}

1. U ServerPilot dashboardu, idite na "Apps"
2. Odaberite aplikaciju gdje je hostovan vaš WordPress multisite
3. App ID je vidljiv u URL-u: `https://manage.serverpilot.io/apps/{APP_ID}`

### 3. Dodajte konstante u wp-config.php {#3-add-constants-to-wp-configphp}

Dodajte sljedeće konstante u vašu `wp-config.php` datoteku:

```php
define('WU_SERVER_PILOT_CLIENT_ID', 'your_client_id');
define('WU_SERVER_PILOT_API_KEY', 'your_api_key');
define('WU_SERVER_PILOT_APP_ID', 'your_app_id');
```

### 4. Omogućite integraciju {#4-enable-the-integration}

1. U WordPress administraciji, idite na Ultimate Multisite > Settings
2. Navigirajte do kartice "Domain Mapping"
3. Skrolujte do "Host Integrations"
4. Omogućite ServerPilot integraciju
5. Kliknite na "Save Changes"

## Kako funkcioniše {#how-it-works}

### Sinkronizacija domena {#domain-syncing}

Kada se domen mapira u Ultimate Multisite-u:

1. Integracija dohvaća trenutnu listu domena sa ServerPilot-a
2. Dodaje novi domen na listu (uz www verziju ako je primjenjivo)
3. Pošalje ažuriranu listu na ServerPilot putem API-ja
4. ServerPilot ažurira listu domena za vašu aplikaciju

### Upravljanje SSL certifikatima {#ssl-certificate-management}

Nakon sinkronizacije domena:

1. Integracija automatski omogućava AutoSSL za vašu aplikaciju
2. ServerPilot upravlja izdajom i instalacijom SSL certifikata koristeći Let's Encrypt
3. ServerPilot takođe upravlja automatskim obnavljanjem SSL certifikata

## Verifikacija SSL certifikata {#ssl-certificate-verification}

Integracija je konfigurisana da poveća broj pokušaja verifikacije SSL certifikata za ServerPilot, jer ServerPilot može vremena potrajati da izdaje i instalira SSL certifikate. Podrazumevano, pokušat će do 5 puta, ali se ovo može prilagoditi pomoću filtera.

## Rješavanje problema {#troubleshooting}

### Problemi sa API konekcijom {#api-connection-issues}
- Provjerite da li su vaš Client ID i API Key ispravni
- Provjerite da li je vaš App ID ispravan
- Osigurajte da vaš ServerPilot račun ima potrebne dozvole

### Problemi sa SSL certifikatima {#ssl-certificate-issues}
- ServerPilot zahtijeva da domeni imaju validne DNS zapise koji ukazuju na vaš server prije izdavanja SSL certifikata
- Ako se SSL certifikati ne izdaju, provjerite da li su vaši domeni pravilno usmjereni na IP adresu vašeg servera
- Može proći neko vrijeme da ServerPilot izdaje i instalira SSL certifikate (obično 5-15 minuta)

### Domen nije dodan {#domain-not-added}
- Provjerite logove Ultimate Multisite-a radi bilo kakvih poruka o greškama
- Potvrdite da domen nije već dodan u ServerPilot
- Osigurajte da vaš ServerPilot plan podržava broj domena koje dodajete

### Uklanjanje domena {#domain-removal}
- Trenutno, ServerPilot API ne nudi način za uklanjanje pojedinačnih domena
- Kada se mapiranje domena ukloni u Ultimate Multisite-u, integracija će ažurirati listu domena u ServerPilot-u kako bi isključila uklonjeni domen
