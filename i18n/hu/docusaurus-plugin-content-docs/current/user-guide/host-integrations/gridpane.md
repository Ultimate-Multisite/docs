---
title: GridPane integráció
sidebar_position: 13
_i18n_hash: b0a6427285411feb767e828911cdd794
---
# GridPane integráció

## Áttekintés
A GridPane egy speciális WordPress hosting vezérlőpult, amelyet profi WordPress szakembereknek fejlesztettek. Ez az integráció automatikus domain szinkronizálást és SSL tanúsítvány kezelést tesz lehetővé az Ultimate Multisite és a GridPane között.

## Funkciók
- Automatikus domain szinkronizálás
- SSL tanúsítvány kezelés
- A SUNRISE konstans automatikus konfigurálása

## Követelmények
A következő konstansokat kell meghatároznod a `wp-config.php` fájlban:

```php
define('WU_GRIDPANE', true);
define('WU_GRIDPANE_API_KEY', 'your_api_key');
define('WU_GRIDPANE_SERVER_ID', 'your_server_id');
define('WU_GRIDPANE_APP_ID', 'your_app_id');
```

## Beállítási útmutató

### 1. GridPane API hitelesítő adatok beszerzése

1. Jelentkezz be a GridPane vezérlőpultba
2. Navigálj a "Settings" > "API" menüpontra
3. Ha még nincs API kulcsod, generálj egyet
4. Másold ki az API kulcsot

### 2. Szerver és oldal azonosítók beszerzése

1. A GridPane vezérlőpultban menj a "Servers" menüpontra
2. Válaszd ki azt a szervert, ahol a WordPress multisite oldalad található
3. Jegyezd fel a Server ID-t (az URL-ben vagy a szerver részletek oldalán látható)
4. Menj a "Sites" menüpontra és válaszd ki a WordPress oldaladat
5. Jegyezd fel a Site ID-t (az URL-ben vagy az oldal részletek oldalán látható)

### 3. Konstansok hozzáadása a wp-config.php fájlhoz

Add hozzá a következő konstansokat a `wp-config.php` fájlodhoz:

```php
define('WU_GRIDPANE', true);
define('WU_GRIDPANE_API_KEY', 'your_api_key');
define('WU_GRIDPANE_SERVER_ID', 'your_server_id');
define('WU_GRIDPANE_APP_ID', 'your_site_id');
```

### 4. Az integráció engedélyezése

1. A WordPress admin felületen menj az Ultimate Multisite > Settings menüpontra
2. Navigálj a "Domain Mapping" fülre
3. Görgess le a "Host Integrations" részhez
4. Engedélyezd a GridPane integrációt
5. Kattints a "Save Changes" gombra

## Hogyan működik

Amikor egy domaint hozzárendelsz az Ultimate Multisite-ban:

1. Az integráció kérést küld a GridPane API-jának, hogy adja hozzá a domaint az oldaladhoz
2. A GridPane automatikusan kezeli az SSL tanúsítvány kiállítását
3. Amikor egy domain hozzárendelést törölsz, az integráció eltávolítja a domaint a GridPane-ből

Az integráció automatikusan kezeli a SUNRISE konstanst a wp-config.php fájlban, ami szükséges a domain mapping megfelelő működéséhez.

## SUNRISE konstans kezelés

A GridPane integráció egyik egyedi funkciója, hogy automatikusan visszaállítja a SUNRISE konstanst a wp-config.php fájlban, hogy elkerülje a konfliktusokat a GridPane saját domain mapping rendszerével. Ez biztosítja, hogy mindkét rendszer zökkenőmentesen működjön együtt.

## Hibaelhárítás

### API kapcsolódási problémák
- Ellenőrizd, hogy az API kulcsod helyes-e
- Győződj meg róla, hogy a szerver és oldal azonosítók helyesek
- Bizonyosodj meg arról, hogy a GridPane fiókod rendelkezik a szükséges jogosultságokkal

### SSL tanúsítvány problémák
- A GridPane-nek időbe telhet az SSL tanúsítványok kiállítása
- Ellenőrizd, hogy a domaineid megfelelően a szervered IP címére mutatnak-e
- Nézd meg a GridPane SSL beállításait az oldaladnál

### A domain nem lett hozzáadva
- Ellenőrizd az Ultimate Multisite naplókat hibaüzenetek után kutatva
- Győződj meg róla, hogy a domain nincs már hozzáadva a GridPane-hez
- Bizonyosodj meg arról, hogy a domain DNS rekordjai megfelelően vannak konfigurálva
