---
title: RunCloud integráció
sidebar_position: 13
_i18n_hash: 05a61d871e286ae6c87bc7653377dee4
---
# RunCloud integráció

## Áttekintés
A RunCloud egy felhőalapú szerverkezelő platform, amellyel egyszerűen telepíthetsz és kezelhetsz webalkalmazásokat a saját felhőszervereiden. Ez az integráció lehetővé teszi az automatikus domain szinkronizálást és SSL tanúsítványkezelést az Ultimate Multisite és a RunCloud között.

## Funkciók
- Automatikus domain szinkronizálás
- SSL tanúsítványkezelés
- Domain eltávolítása a hozzárendelések törlésekor

## Követelmények
A következő konstansokat kell definiálnod a `wp-config.php` fájlban:

```php
define('WU_RUNCLOUD_API_KEY', 'your_api_key');
define('WU_RUNCLOUD_API_SECRET', 'your_api_secret');
define('WU_RUNCLOUD_SERVER_ID', 'your_server_id');
define('WU_RUNCLOUD_APP_ID', 'your_app_id');
```

## Beállítási útmutató

### 1. RunCloud API hitelesítő adatok beszerzése

1. Jelentkezz be a RunCloud vezérlőpultba
2. Menj a "User Profile" menüpontra (kattints a profilképedre a jobb felső sarokban)
3. Válaszd ki az "API" menüpontot
4. Kattints a "Generate API Key" gombra, ha még nincs API kulcsod
5. Másold ki az API Key és API Secret értékeket

### 2. Szerver és alkalmazás azonosítók beszerzése

1. A RunCloud vezérlőpulton menj a "Servers" menüpontra
2. Válaszd ki azt a szervert, ahol a WordPress multisite-od fut
3. A Server ID látható az URL-ben: `https://manage.runcloud.io/servers/{SERVER_ID}`
4. Menj a "Web Applications" menüpontra, és válaszd ki a WordPress alkalmazásodat
5. Az App ID látható az URL-ben: `https://manage.runcloud.io/servers/{SERVER_ID}/apps/{APP_ID}`

### 3. Konstansok hozzáadása a wp-config.php fájlhoz

Add hozzá a következő konstansokat a `wp-config.php` fájlodhoz:

```php
define('WU_RUNCLOUD_API_KEY', 'your_api_key');
define('WU_RUNCLOUD_API_SECRET', 'your_api_secret');
define('WU_RUNCLOUD_SERVER_ID', 'your_server_id');
define('WU_RUNCLOUD_APP_ID', 'your_app_id');
```

### 4. Az integráció engedélyezése

1. A WordPress admin felületen menj az Ultimate Multisite > Settings menüpontra
2. Navigálj a "Domain Mapping" fülre
3. Görgess le a "Host Integrations" részhez
4. Engedélyezd a RunCloud integrációt
5. Kattints a "Save Changes" gombra

## Hogyan működik

Amikor egy domaint hozzárendelsz az Ultimate Multisite-ban:

1. Az integráció küld egy kérést a RunCloud API-jának, hogy hozzáadja a domaint az alkalmazásodhoz
2. Ha a domain sikeresen hozzá lett adva, az integráció újra kiállítja az SSL tanúsítványokat
3. Amikor egy domain hozzárendelést törölsz, az integráció eltávolítja a domaint a RunCloud-ból

Aldomain telepítések esetén az integráció automatikusan kezeli az aldomainek létrehozását a RunCloud-ban, amikor új oldalakat adsz hozzá a hálózatodhoz.

## Hibaelhárítás

### API kapcsolódási problémák
- Ellenőrizd, hogy az API hitelesítő adataid helyesek-e
- Győződj meg róla, hogy a szerver és alkalmazás azonosítók megfelelőek
- Ellenőrizd, hogy a RunCloud fiókod rendelkezik-e a szükséges jogosultságokkal

### SSL tanúsítvány problémák
- A RunCloud-nak időre lehet szüksége az SSL tanúsítványok kiállításához
- Ellenőrizd, hogy a domainjeid megfelelően a szervered IP-címére mutatnak-e
- Nézd át az alkalmazásod RunCloud SSL beállításait

### A domain nem lett hozzáadva
- Ellenőrizd az Ultimate Multisite naplókat az esetleges hibaüzenetekért
- Győződj meg róla, hogy a domain nincs már hozzáadva a RunCloud-hoz
- Ellenőrizd, hogy a RunCloud csomagod támogatja-e a több domaint
