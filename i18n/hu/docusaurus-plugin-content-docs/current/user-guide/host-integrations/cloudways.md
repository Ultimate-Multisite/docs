---
title: Cloudways integráció
sidebar_position: 3
_i18n_hash: 931ac98efe704dc50c74537ea2676529
---
# Cloudways integráció

## Áttekintés
A Cloudways egy menedzselt felhőalapú tárhelyszolgáltatás, amellyel WordPress oldalakat telepíthetsz különböző felhőszolgáltatókra, például DigitalOcean-re, AWS-re, Google Cloud-ra és másokra. Ez az integráció automatikus domain szinkronizálást és SSL tanúsítvány kezelést tesz lehetővé az Ultimate Multisite és a Cloudways között.

## Funkciók
- Automatikus domain szinkronizálás
- SSL tanúsítvány kezelés
- Extra domainek támogatása
- DNS validáció SSL tanúsítványokhoz

## Követelmények
A következő konstansokat kell definiálnod a `wp-config.php` fájlban:

```php
define('WU_CLOUDWAYS_EMAIL', 'your_cloudways_email');
define('WU_CLOUDWAYS_API_KEY', 'your_api_key');
define('WU_CLOUDWAYS_SERVER_ID', 'your_server_id');
define('WU_CLOUDWAYS_APP_ID', 'your_app_id');
```

Opcionálisan megadhatod a következőt is:

```php
define('WU_CLOUDWAYS_EXTRA_DOMAINS', 'comma,separated,list,of,domains');
```

## Beállítási útmutató

### 1. Cloudways API hitelesítő adatok beszerzése

1. Jelentkezz be a Cloudways vezérlőpultba
2. Navigálj az "Account" > "API Keys" menüpontra
3. Ha még nincs API kulcsod, generálj egyet
4. Másold ki az email címed és az API kulcsot

### 2. Szerver és alkalmazás azonosítók beszerzése

1. A Cloudways vezérlőpultban menj a "Servers" menüpontra
2. Válaszd ki azt a szervert, ahol a WordPress multisite oldal található
3. A szerver azonosító (Server ID) az URL-ben látható: `https://platform.cloudways.com/server/{SERVER_ID}`
4. Menj az "Applications" menüpontra és válaszd ki a WordPress alkalmazásodat
5. Az alkalmazás azonosító (App ID) az URL-ben látható: `https://platform.cloudways.com/server/{SERVER_ID}/application/{APP_ID}`

### 3. Konstansok hozzáadása a wp-config.php fájlhoz

Add hozzá a következő konstansokat a `wp-config.php` fájlhoz:

```php
define('WU_CLOUDWAYS_EMAIL', 'your_cloudways_email');
define('WU_CLOUDWAYS_API_KEY', 'your_api_key');
define('WU_CLOUDWAYS_SERVER_ID', 'your_server_id');
define('WU_CLOUDWAYS_APP_ID', 'your_app_id');
```

Ha további domaineket szeretnél mindig szerepeltetni:

```php
define('WU_CLOUDWAYS_EXTRA_DOMAINS', 'domain1.com,domain2.com,*.wildcard.com');
```

### 4. Az integráció engedélyezése

1. A WordPress adminisztrációs felületen menj az Ultimate Multisite > Settings menüpontra
2. Navigálj a "Domain Mapping" fülre
3. Görgess le a "Host Integrations" szakaszhoz
4. Engedélyezd a Cloudways integrációt
5. Kattints a "Save Changes" gombra

## Hogyan működik

### Domain szinkronizálás

Amikor egy domain hozzárendelésre kerül az Ultimate Multisite-ban:

1. Az integráció lekéri az összes jelenleg hozzárendelt domaint
2. Hozzáadja az új domaint a listához (valamint a www verziót, ha szükséges)
3. Elküldi a teljes listát a Cloudways API-nak
4. A Cloudways frissíti a domain aliasokat az alkalmazásodhoz

Megjegyzés: A Cloudways API minden alkalommal a teljes domain listát igényli, nem csak az egyes domainek hozzáadását vagy eltávolítását.

### SSL tanúsítvány kezelés

A domainek szinkronizálása után:

1. Az integráció ellenőrzi, hogy mely domaineknek van érvényes DNS rekordja a szerveredre mutatva
2. Kérést küld a Cloudways-nek Let's Encrypt SSL tanúsítványok telepítésére ezekhez a domainekhez
3. A Cloudways kezeli az SSL tanúsítványok kiállítását és telepítését

## Extra domainek

A `WU_CLOUDWAYS_EXTRA_DOMAINS` konstanssal további domaineket adhatsz meg, amelyeket mindig tartalmaznia kell a Cloudways szinkronizációnak. Ez hasznos a következő esetekben:

- Domainek, amelyeket nem az Ultimate Multisite kezel
- Wildcard domainek (pl. `*.example.com`)
- Fejlesztői vagy staging domainek

## Hibaelhárítás

### API kapcsolati problémák
- Ellenőrizd, hogy az email címed és az API kulcsod helyes-e
- Győződj meg róla, hogy a szerver és alkalmazás azonosítók helyesek
- Bizonyosodj meg arról, hogy a Cloudways fiókod rendelkezik a szükséges jogosultságokkal

### SSL tanúsítvány problémák
- A Cloudways megköveteli, hogy a domainek érvényes DNS rekordokkal rendelkezzenek a szerveredre mutatva, mielőtt SSL tanúsítványokat állítana ki
- Az integráció ellenőrzi a DNS rekordokat, mielőtt SSL tanúsítványokat kérne
- Ha az SSL tanúsítványok nem kerülnek kiállításra, ellenőrizd, hogy a domaineid megfelelően a szervered IP címére mutatnak-e

### A domain nem került hozzáadásra
- Ellenőrizd az Ultimate Multisite naplókat esetleges hibaüzenetekért
- Győződj meg róla, hogy a domain még nincs hozzáadva a Cloudways-hez
- Bizonyosodj meg arról, hogy a Cloudways csomagod támogatja a hozzáadni kívánt domainek számát
