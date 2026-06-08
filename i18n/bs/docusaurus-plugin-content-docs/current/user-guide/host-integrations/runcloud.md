---
title: RunCloud Integracija
sidebar_position: 13
_i18n_hash: 05a61d871e286ae6c87bc7653377dee4
---
# Integracija sa RunCloud-om

## Pregled
RunCloud je platforma za upravljanje serverima u oblaku (cloud-based), koja vam omogućava lako postavljanje i upravljanje web aplikacijama na vašim vlastitim cloud serverima. Ova integracija omogućava automatsko sinhronizovanje domena i upravljanje SSL certifikatima između Ultimate Multisite-a i RunCloud-a.

## Funkcionalnosti
- Automatsko sinhronizovanje domena
- Upravljanje SSL certifikatima
- Brisanje domena kada se mapiranja obrišu

## Zahtjevi
Sledeće konstante moraju biti definirane u vašoj `wp-config.php` datoteci:

```php
define('WU_RUNCLOUD_API_KEY', 'your_api_key');
define('WU_RUNCLOUD_API_SECRET', 'your_api_secret');
define('WU_RUNCLOUD_SERVER_ID', 'your_server_id');
define('WU_RUNCLOUD_APP_ID', 'your_app_id');
```

## Upute za postavljanje

### 1. Dohvatite svoje RunCloud API vjerodajnice

1. Prijavite se na svoj RunCloud dashboard
2. Idite na "User Profile" (kliknite na svoju profilnu sliku u gornjem desnom uglu)
3. Iz menija odaberite "API"
4. Kliknite na "Generate API Key" ako ga već nemate
5. Kopirajte svoj API Key i API Secret

### 2. Dohvatite svoje Server i App ID-ove

1. Na RunCloud dashboardu, idite na "Servers"
2. Odaberite server na kojem je vaš WordPress multisite hostovan
3. Server ID je vidljiv u URL-u: `https://manage.runcloud.io/servers/{SERVER_ID}`
4. Idite na "Web Applications" i odaberite svoju WordPress aplikaciju
5. App ID je vidljiv u URL-u: `https://manage.runcloud.io/servers/{SERVER_ID}/apps/{APP_ID}`

### 3. Dodajte konstante u wp-config.php

Dodajte sljedeće konstante u vašu `wp-config.php` datoteku:

```php
define('WU_RUNCLOUD_API_KEY', 'your_api_key');
define('WU_RUNCLOUD_API_SECRET', 'your_api_secret');
define('WU_RUNCLOUD_SERVER_ID', 'your_server_id');
define('WU_RUNCLOUD_APP_ID', 'your_app_id');
```

### 4. Omogućite integraciju

1. U vašem WordPress adminu, idite na Ultimate Multisite > Settings
2. Navigirajte do kartice "Domain Mapping"
3. Skrolujte do "Host Integrations"
4. Omogućite RunCloud integraciju
5. Kliknite na "Save Changes"

## Kako funkcioniše

Kada je domen mapiran u Ultimate Multisite-u:

1. Integracija šalje zahtjev RunCloud API-ju da doda domen vašoj aplikaciji
2. Ako se domen uspješno doda, integracija će takođe ponovo postaviti SSL certifikate
3. Kada se mapiranje domena ukloni, integracija će ukloniti domen iz RunCloud-a

Za instalacije poddomena, integracija će automatski upravljati kreiranjem poddomena u RunCloud-u kada se dodaju nove sajtove u vašu mrežu.

## Rješavanje problema

### Problemi sa API konekcijom
- Provjerite da li su vaše API vjerodajnice ispravne
- Provjerite da li su vaši Server i App ID-ovi ispravni
- Osigurajte da vaš RunCloud nalog ima potrebne dozvole

### Problemi sa SSL certifikatima
- RunCloud može potrajati s izdajanjem SSL certifikata
- Provjerite da li su vaši domeni pravilno usmjereni na IP adresu vašeg servera
- Provjerite RunCloud SSL postavke za svoju aplikaciju

### Domen nije dodan
- Provjerite Ultimate Multisite logove radi bilo kakvih poruka o greškama
- Provjerite da li domen nije već dodan u RunCloud
- Osigurajte da vaš RunCloud plan podržava više domena
