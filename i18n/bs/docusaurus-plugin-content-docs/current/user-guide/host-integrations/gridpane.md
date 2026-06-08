---
title: Integracija GridPane
sidebar_position: 13
_i18n_hash: b0a6427285411feb767e828911cdd794
---
# Integracija sa GridPane-om

## Pregled
GridPane je specijalizovani kontrolni panel za hosting WordPressa, napravljen za ozbiljne WordPress profesionalce. Ova integracija omogućava automatsku sinhronizaciju domena i upravljanje SSL certifikatima između Ultimate Multisite-a i GridPane-a.

## Funkcionalnosti
- Automatska sinhronizacija domena
- Upravljanje SSL certifikatima
- Automatska konfiguracija SUNRISE konstante

## Zahtjevi
U vašu `wp-config.php` datoteku moraju biti definirane sljedeće konstante:

```php
define('WU_GRIDPANE', true);
define('WU_GRIDPANE_API_KEY', 'your_api_key');
define('WU_GRIDPANE_SERVER_ID', 'your_server_id');
define('WU_GRIDPANE_APP_ID', 'your_app_id');
```

## Upute za postavljanje

### 1. Dohvatite GridPane API vjerodajnice

1. Prijavite se na vaš GridPane dashboard
2. Idite na "Settings" > "API"
3. Generišite API ključ ako ga već nemate
4. Kopirajte svoj API ključ

### 2. Dohvatite ID servera i ID lokacije (Site ID)

1. U vašem GridPane dashboard-u, idite na "Servers"
2. Odaberite server na kojem je vaš WordPress multisite hostovan
3. Zapišite Server ID (vidljiv u URL-u ili na stranici detalja o serveru)
4. Idite na "Sites" i odaberite svoju WordPress lokaciju
5. Zapišite Site ID (vidljiv u URL-u ili na stranici detalja o lokaciji)

### 3. Dodajte konstante u wp-config.php

Dodajte sljedeće konstante u vašu `wp-config.php` datoteku:

```php
define('WU_GRIDPANE', true);
define('WU_GRIDPANE_API_KEY', 'your_api_key');
define('WU_GRIDPANE_SERVER_ID', 'your_server_id');
define('WU_GRIDPANE_APP_ID', 'your_site_id');
```

### 4. Omogućite integraciju

1. U vašem WordPress adminu, idite na Ultimate Multisite > Settings
2. Navigirajte do kartice "Domain Mapping"
3. Skrolujte do "Host Integrations"
4. Omogućite integraciju GridPane
5. Pritisnite "Save Changes"

## Kako funkcioniše

Kada se domen mapira u Ultimate Multisite-u:

1. Integracija šalje zahtjev GridPane API-ju da doda domen vašoj lokaciji
2. GridPane automatski upravlja dodjeljivanjem SSL certifikata
3. Kada se mapiranje domena ukloni, integracija će ukloniti domen iz GridPane-a

Integracija takođe automatski upravlja konstantom SUNRISE u vašoj `wp-config.php` datoteci, što je neophodno da bi mapiranje domena pravilno funkcionisalo.

## Upravljanje SUNRISE konstantom

Jedna jedinstvena značajka GridPane integracije je što automatski vraća SUNRISE konstantu u `wp-config.php` kako bi spriječila sukobe sa vlastitim sistemom mapiranja domena GridPane-a. Ovo osigurava da oba sistema mogu raditi zajedno bez problema.

## Rješavanje problema

### Problemi sa API vezom
- Provjerite da li je vaš API ključ ispravan
- Provjerite da li su vaši ID servera i ID lokacije ispravni
- Osigurajte da vaš GridPane račun ima potrebne dozvole

### Problemi sa SSL certifikatima
- GridPane može potrajati s dodjeljivanjem SSL certifikata
- Provjerite da li su vaši domeni pravilno usmjereni na IP adresu vašeg servera
- Provjerite SSL postavke GridPane-a za vašu lokaciju

### Domen nije dodan
- Provjerite logove Ultimate Multisite-a radi bilo kakvih poruka o greškama
- Provjerite da li domen već nije dodan u GridPane
- Osigurajte da su DNS zapisi vašeg domena pravilno konfigurisani
