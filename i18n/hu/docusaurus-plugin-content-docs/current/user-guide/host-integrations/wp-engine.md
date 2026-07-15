---
title: WP Engine integráció
sidebar_position: 2
_i18n_hash: ceeee20432439d8afb3002dd0dd1ff12
---
# WP Engine integráció

## Áttekintés {#overview}
A WP Engine egy prémium kategóriás, felügyelt WordPress tárhelyszolgáltatás, amely optimalizált teljesítményt, biztonságot és skálázhatóságot kínál WordPress oldalak számára. Ez az integráció lehetővé teszi a domain nevek automatikus szinkronizálását az Ultimate Multisite és a WP Engine között.

## Funkciók {#features}
- Automatikus domain szinkronizálás
- Aldomain támogatás multisite telepítésekhez
- Zökkenőmentes integráció a WP Engine meglévő rendszereivel

## Követelmények {#requirements}
Az integráció automatikusan felismeri, ha WP Engine tárhelyen fut az oldal, és a beépített WP Engine API-t használja. Nincs szükség további beállításokra, ha a WP Engine plugin aktív és megfelelően van konfigurálva.

Ha azonban manuálisan szeretnéd beállítani az integrációt, az alábbi konstansok egyikét definiálhatod a `wp-config.php` fájlban:

```php
define('WPE_APIKEY', 'your_api_key'); // Ajánlott módszer
// VAGY
define('WPE_API', 'your_api_key'); // Alternatív módszer
```

## Beállítási útmutató {#setup-instructions}

### 1. WP Engine plugin ellenőrzése {#1-verify-wp-engine-plugin}

Ha WP Engine tárhelyet használsz, a WP Engine pluginnak már telepítve és aktiválva kell lennie. Ellenőrizd a következőket:

1. A WP Engine plugin aktív
2. A `wp-content/mu-plugins/wpengine-common/class-wpeapi.php` fájl létezik

### 2. Az integráció engedélyezése {#2-enable-the-integration}

1. A WordPress adminisztrációs felületen navigálj az Ultimate Multisite > Settings menüpontra
2. Kattints a "Domain Mapping" fülre
3. Görgess le a "Host Integrations" részhez
4. Engedélyezd a WP Engine integrációt
5. Kattints a "Save Changes" gombra

## Hogyan működik {#how-it-works}

### Domain szinkronizálás {#domain-syncing}

Amikor egy domain hozzárendelésre kerül az Ultimate Multisite-ban:

1. Az integráció a WP Engine API-t használja a domain hozzáadásához a WP Engine telepítésedhez
2. A WP Engine kezeli a domain konfigurációját és az SSL tanúsítvány kiállítását
3. Amikor egy domain hozzárendelés törlődik, az integráció eltávolítja a domaint a WP Engine-ből

### Aldomain támogatás {#subdomain-support}

Aldomain alapú multisite telepítések esetén:

1. Az integráció minden aldomaint hozzáad a WP Engine-hez, amikor új oldal jön létre
2. A WP Engine kezeli az aldomain konfigurációját
3. Amikor egy oldal törlődik, az integráció eltávolítja az aldomaint a WP Engine-ből

## Fontos tudnivalók {#important-notes}

### Wildcard domainek {#wildcard-domains}

Aldomain alapú multisite telepítésekhez javasolt felvenni a kapcsolatot a WP Engine ügyfélszolgálatával és wildcard domain konfigurációt kérni. Így minden aldomain automatikusan működni fog anélkül, hogy egyenként hozzá kellene adni őket.

### SSL tanúsítványok {#ssl-certificates}

A WP Engine automatikusan kezeli az SSL tanúsítványok kiállítását és megújítását az ezen az integráción keresztül hozzáadott összes domain esetében. Nincs szükség további beállításokra.

## Hibaelhárítás {#troubleshooting}

### API kapcsolódási problémák {#api-connection-issues}
- Ellenőrizd, hogy a WP Engine plugin aktív és megfelelően van konfigurálva
- Ha manuálisan adtad meg az API kulcsot, győződj meg róla, hogy helyes
- Ha az API-val kapcsolatban problémáid vannak, vedd fel a kapcsolatot a WP Engine ügyfélszolgálatával

### A domain nem kerül hozzáadásra {#domain-not-added}
- Ellenőrizd az Ultimate Multisite naplóit esetleges hibaüzenetek után kutatva
- Győződj meg róla, hogy a domain nincs már hozzáadva a WP Engine-hez
- Ellenőrizd, hogy a WP Engine csomagod támogatja-e a hozzáadni kívánt domainek számát

### Aldomain problémák {#subdomain-issues}
- Ha az aldomainek nem működnek, vedd fel a kapcsolatot a WP Engine ügyfélszolgálatával és kérj wildcard domain konfigurációt
- Ellenőrizd, hogy a DNS beállítások helyesen vannak konfigurálva a fő domainhez és az aldomainekhez
