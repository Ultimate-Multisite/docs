---
title: Cloudflare integráció
sidebar_position: 16
_i18n_hash: 41bd975db7c89a129f5f880b439a8f2f
---
# Cloudflare integráció

## Áttekintés
A Cloudflare egy vezető tartalomszolgáltató hálózat (CDN) és biztonsági szolgáltató, amely segít megvédeni és felgyorsítani a weboldalakat. Ez az integráció lehetővé teszi az automatikus domain-kezelést az Ultimate Multisite és a Cloudflare között, különösen az aldomain alapú multisite telepítések esetén.

## Funkciók
- Automatikus aldomain létrehozás a Cloudflare-ben
- Proxyzott aldomain támogatás
- DNS rekord kezelés
- Bővített DNS rekord megjelenítés az Ultimate Multisite adminban

## Követelmények
A következő konstansokat kell definiálni a `wp-config.php` fájlban:

```php
define('WU_CLOUDFLARE_API_KEY', 'your_api_key');
define('WU_CLOUDFLARE_ZONE_ID', 'your_zone_id');
```

## Beállítási útmutató

### 1. Cloudflare API kulcs beszerzése

1. Jelentkezz be a Cloudflare vezérlőpultba
2. Kattints a „My Profile" menüpontra (a jobb felső sarokban az email címedre kattintva)
3. Válaszd az „API Tokens" menüpontot
4. Hozz létre egy új API tokent a következő jogosultságokkal:
   - Zone.Zone: Read
   - Zone.DNS: Edit
5. Másold ki az API tokent

### 2. Zone ID beszerzése

1. A Cloudflare vezérlőpulton válaszd ki a használni kívánt domaint
2. A Zone ID az „Overview" fülön látható, a jobb oldali sávban az „API" alatt
3. Másold ki a Zone ID-t

### 3. Konstansok hozzáadása a wp-config.php fájlhoz

Add hozzá a következő konstansokat a `wp-config.php` fájlhoz:

```php
define('WU_CLOUDFLARE_API_KEY', 'your_api_token');
define('WU_CLOUDFLARE_ZONE_ID', 'your_zone_id');
```

### 4. Az integráció engedélyezése

1. A WordPress adminban navigálj az Ultimate Multisite > Settings menüpontra
2. Kattints a „Domain Mapping" fülre
3. Görgess le a „Host Integrations" részhez
4. Engedélyezd a Cloudflare integrációt
5. Kattints a „Save Changes" gombra

## Hogyan működik

### Aldomain kezelés

Amikor egy új oldal jön létre egy aldomain alapú multisite telepítésben:

1. Az integráció kérést küld a Cloudflare API-jának, hogy hozzon létre egy CNAME rekordot az aldomainhez
2. Az aldomain alapértelmezés szerint a Cloudflare-en keresztül proxyzottan van beállítva (ez filterekkel módosítható)
3. Amikor egy oldal törlésre kerül, az integráció eltávolítja az aldomaint a Cloudflare-ből

### DNS rekord megjelenítés

Az integráció bővíti a DNS rekordok megjelenítését az Ultimate Multisite adminban:

1. Közvetlenül a Cloudflare-ből kéri le a DNS rekordokat
2. Megjeleníti, hogy a rekordok proxyzottak-e vagy sem
3. További információkat jelenít meg a DNS rekordokról

## Fontos tudnivalók

A Cloudflare legújabb frissítéseinek köszönhetően a wildcard proxyzás már minden ügyfél számára elérhető. Ez azt jelenti, hogy a Cloudflare integráció kevésbé kritikus az aldomain alapú multisite telepítéseknél, mint korábban volt, hiszen egyszerűen beállíthatsz egy wildcard DNS rekordot a Cloudflare-ben.

## Hibaelhárítás

### API kapcsolódási problémák
- Ellenőrizd, hogy az API tokened helyes és rendelkezik a szükséges jogosultságokkal
- Ellenőrizd, hogy a Zone ID helyes
- Győződj meg róla, hogy a Cloudflare fiókod rendelkezik a szükséges jogosultságokkal

### Az aldomain nem lett hozzáadva
- Ellenőrizd az Ultimate Multisite naplókat hibaüzenetek után kutatva
- Győződj meg róla, hogy az aldomain még nincs hozzáadva a Cloudflare-hez
- Ellenőrizd, hogy a Cloudflare csomagod támogatja-e a létrehozni kívánt DNS rekordok számát

### Proxyzási problémák
- Ha nem szeretnéd, hogy az aldomainek proxyzva legyenek, használhatod a `wu_cloudflare_should_proxy` filtert
- Egyes funkciók nem működnek megfelelően proxyzás esetén (pl. bizonyos WordPress admin funkciók)
- Fontold meg a Cloudflare Page Rules használatát az admin oldalak gyorsítótárazásának megkerülésére
