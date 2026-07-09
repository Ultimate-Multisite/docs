---
title: Integracija GridPane
sidebar_position: 13
_i18n_hash: b0a6427285411feb767e828911cdd794
---
# Integracija s GridPane-om {#gridpane-integration}

## Pregled {#overview}
GridPane je specijalizirani kontrolni panel za hosting WordPress koji je napravljen za ozbiljne profesionale u svijetu WordPressa. Ova integracija omogućuje automatsku sinhronizaciju domena i upravljanje SSL certifikatima između Ultimate Multisite i GridPane-a.

## Svojstva {#features}
- Automatska sinhronizacija domena
- Upravljanje SSL certifikatima
- Automatska konfiguracija konstante SUNRISE

## Zahtjevi {#requirements}
Slijedne konstante moraju biti definirane u vašem datoteci `wp-config.php`:

```php
define('WU_GRIDPANE', true);
define('WU_GRIDPANE_API_KEY', 'vaša_api_ključ');
define('WU_GRIDPANE_SERVER_ID', 'vaš_server_id');
define('WU_GRIDPANE_APP_ID', 'vaš_site_id');
```

## Upute za postavljanje {#setup-instructions}

### 1. Dobavite svoje GridPane API podatke {#1-get-your-gridpane-api-credentials}

1. Prijavite se na svoj GridPane dashboard
2. Idite na "Settings" (Postavke) > "API"
3. Generirajte API ključ ako ga još nemate
4. Kopirajte svoj API ključ

### 2. Dobavite svoje Server i Site ID-ove {#2-get-your-server-and-site-ids}

1. U svom GridPane dashboardu, idite na "Servers" (Serveri)
2. Odaberite server na kojem je hostiran vaš WordPress multisite
3. Zapišite Server ID (vidljiv u URL-u ili na stranici s detaljima servera)
4. Idite na "Sites" (Sajtovi) i odaberite svoj WordPress site
5. Zapišite Site ID (vidljiv u URL-u ili na stranici s detaljima sajta)

### 3. Dodajte konstante u wp-config.php {#3-add-constants-to-wp-configphp}

Dodajte sljedeće konstante u vaš datoteku `wp-config.php`:

```php
define('WU_GRIDPANE', true);
define('WU_GRIDPANE_API_KEY', 'vaša_api_ključ');
define('WU_GRIDPANE_SERVER_ID', 'vaš_server_id');
define('WU_GRIDPANE_APP_ID', 'vaš_site_id');
```

### 4. Omogućite integraciju {#4-enable-the-integration}

1. U svom WordPress adminu, idite na Ultimate Multisite > Settings (Postavke)
2. Navigirajte do tab "Domain Mapping" (Mapiranje domena)
3. Skrolajte do "Host Integrations" (Integracije hosta)
4. Omogućite integraciju GridPane-a
5. Kliknite na "Save Changes" (Spremi promjene)

## Kako to radi {#how-it-works}

Kada se domen mapira u Ultimate Multisite:

1. Integracija šalje zahtjev API-ju GridPaneu kako bi dodala domen na vašu stranicu.
2. GridPane automatski obrađuje proviziju SSL certifikata.
3. Kada se ukloni mape domena, integracija će tu domen izbrisati iz GridPanea.

Integracija također automatski upravlja konstantom SUNRISE u vašem wp-config.php datoteci, koja je potrebna za ispravno funkcioniranje mape domena.

## Upravljanje konstantom SUNRISE {#sunrise-constant-management}

Jedna jedinstvena značajka integracije GridPane je da ona automatski vraća konstantu SUNRISE u wp-config.php datoteci kako bi se spriječile sukobi s vlastitim sustavom mape domena GridPanee. To osigurava da oba sustava mogu raditi zajedno bez problema.

## Rješavanje problema (Troubleshooting) {#troubleshooting}

### Problemi s povezivanjem API-ja {#api-connection-issues}
- Provjerite je li vaš API ključ ispravan
- Provjerite je li su vaši server i site ID-ji ispravni
- Osigurajte da vaš račun u GridPaneu ima potrebne dozvole

### Problemi s SSL certifikatima {#ssl-certificate-issues}
- GridPane može potrajati malo vremena za izdavanje SSL certifikata
- Provjerite je li vaši domeni pravilno usmjereni na IP adresu vašeg servera
- Provjerite postavke SSL u GridPaneu za vašu stranicu

### Domen nije dodan {#domain-not-added}
- Provjerite logove Ultimate Multisite na bilo kakve poruke o greškama
- Provjerite je li domen već dodan u GridPane
- Osigurajte da su DNS podaci domena pravilno konfigurirani
