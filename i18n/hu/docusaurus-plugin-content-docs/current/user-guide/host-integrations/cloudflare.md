---
title: Cloudflare-integráció
sidebar_position: 16
_i18n_hash: 36ac9de19b1dc53fefd407fb8d21b563
---
# Cloudflare-integráció {#cloudflare-integration}

## Áttekintés {#overview}
A Cloudflare vezető tartalomszolgáltató hálózat (CDN) és biztonsági szolgáltató, amely segít megvédeni és felgyorsítani a webhelyeket. Ez az integráció automatikus domainkezelést tesz lehetővé az Ultimate Multisite és a Cloudflare között, különösen aldomaines multisite telepítésekhez.

## Funkciók {#features}
- Automatikus aldomain-létrehozás a Cloudflare-ben
- Proxyzott aldomain-támogatás
- DNS-rekordok kezelése
- Továbbfejlesztett DNS-rekord-megjelenítés az Ultimate Multisite adminisztrációs felületén

## Követelmények {#requirements}
A következő konstansokat definiálni kell a `wp-config.php` fájlodban:

```php
define('WU_CLOUDFLARE_API_KEY', 'your_api_key');
define('WU_CLOUDFLARE_ZONE_ID', 'your_zone_id');
```

## Beállítási útmutató {#setup-instructions}

### 1. Szerezd be a Cloudflare API Key-t {#1-get-your-cloudflare-api-key}

1. Jelentkezz be a Cloudflare Dashboardba
2. Lépj a "My Profile" részhez (kattints az e-mail címedre a jobb felső sarokban)
3. Válaszd ki a menüből az "API Tokens" lehetőséget
4. Hozz létre egy új API tokent a következő jogosultságokkal:
   - Zone.Zone: Read
   - Zone.DNS: Edit
5. Másold ki az API tokent

### 2. Szerezd be a Zone ID-t {#2-get-your-zone-id}

1. A Cloudflare Dashboardban válaszd ki a használni kívánt domaint
2. A Zone ID az "Overview" lapon látható, a jobb oldali sávban az "API" alatt
3. Másold ki a Zone ID-t

### 3. Add hozzá a konstansokat a wp-config.php fájlhoz {#3-add-constants-to-wp-configphp}

Add hozzá a következő konstansokat a `wp-config.php` fájlodhoz:

```php
define('WU_CLOUDFLARE_API_KEY', 'your_api_token');
define('WU_CLOUDFLARE_ZONE_ID', 'your_zone_id');
```

### 4. Engedélyezd az integrációt {#4-enable-the-integration}

1. A WordPress adminisztrációs felületén lépj az Ultimate Multisite > Settings részhez
2. Navigálj a "Domain Mapping" lapra
3. Görgess le a "Host Integrations" részhez
4. Engedélyezd a Cloudflare-integrációt
5. Kattints a "Save Changes" gombra

## Hogyan működik {#how-it-works}

### Aldomain-kezelés {#subdomain-management}

Amikor új webhely jön létre egy aldomaines multisite telepítésben:

1. Az integráció kérést küld a Cloudflare API-jának, hogy hozzáadjon egy CNAME rekordot az aldomainhez
2. Az aldomain alapértelmezetten úgy van konfigurálva, hogy a Cloudflare-en keresztül legyen proxyzva (ez filterekkel módosítható)
3. Amikor egy webhelyet törölnek, az integráció eltávolítja az aldomaint a Cloudflare-ből

### DNS-rekordok megjelenítése {#dns-record-display}

Az integráció továbbfejleszti a DNS-rekordok megjelenítését az Ultimate Multisite adminisztrációs felületén azzal, hogy:

1. Közvetlenül a Cloudflare-ből kéri le a DNS-rekordokat
2. Megjeleníti, hogy a rekordok proxyzottak-e vagy sem
3. További információkat mutat a DNS-rekordokról

## Cloudflare Custom Hostnames {#cloudflare-custom-hostnames}

A **Cloudflare Custom Hostnames** (korábbi nevén "Cloudflare for SaaS") egy Cloudflare-funkció, amely lehetővé teszi, hogy az ügyfeleid saját domainjeiket SSL-lel használják a multisite hálózatodon. Ez az ajánlott megközelítés a Cloudflare-t használó, domainleképezett multisite telepítésekhez, mert a Cloudflare automatikusan kezeli az SSL-tanúsítványok kiadását és megújítását minden egyedi domainhez.

### Miben különbözik a szabványos Cloudflare-integrációtól {#how-it-differs-from-the-standard-cloudflare-integration}

| | Szabványos integráció | Cloudflare Custom Hostnames |
|---|---|---|
| **Cél** | Automatikusan létrehoz DNS-rekordokat aldomainekhez | Egyedi (leképezett) domaineket tesz lehetővé Cloudflare által kezelt SSL-lel |
| **Legjobb ehhez** | Aldomaines multisite | Domainleképezett multisite |
| **SSL** | Külön kezelendő | A Cloudflare automatikusan kezeli |

### Cloudflare Custom Hostnames beállítása {#setting-up-cloudflare-custom-hostnames}

1. A Cloudflare Dashboardban nyisd meg a fő domained zónáját.
2. Lépj az **SSL/TLS > Custom Hostnames** részhez.
3. Adj hozzá egy fallback origint, amely a szervered IP-címére vagy hostnevére mutat.
4. Minden, az Ultimate Multisite-ban leképezett ügyféldomainhez adj hozzá egy Custom Hostname bejegyzést a Cloudflare-ben. Ezt a lépést automatizálhatod a Cloudflare API használatával.
5. A Cloudflare automatikusan kiadja és megújítja a TLS-tanúsítványokat minden egyedi hostnévhez, amint az ügyfél DNS-e a hálózatodra mutat.

A teljes API-referenciáért lásd a [Cloudflare Custom Hostnames dokumentációját](https://developers.cloudflare.com/cloudflare-for-platforms/cloudflare-for-saas/domain-support/).

:::note Terminológiai frissítés
Az Ultimate Multisite v2.6.1 óta erre a funkcióra minden pluginbeállításban és címkében **Cloudflare Custom Hostnames** néven hivatkozunk. A korábbi verziók a "Cloudflare for SaaS" nevet használták, amely az alapul szolgáló Cloudflare-terméknév.
:::

## Fontos megjegyzések {#important-notes}

A Cloudflare legutóbbi frissítései óta a wildcard proxyzás már minden ügyfél számára elérhető. Ez azt jelenti, hogy a szabványos Cloudflare DNS-integráció kevésbé kritikus az aldomaines multisite telepítésekhez, mint korábban, mivel egyszerűen beállíthatsz egy wildcard DNS-rekordot a Cloudflare-ben.

## Hibaelhárítás {#troubleshooting}

### API-kapcsolati problémák {#api-connection-issues}
- Ellenőrizd, hogy az API tokened helyes-e, és rendelkezik-e a szükséges jogosultságokkal
- Ellenőrizd, hogy a Zone ID helyes-e
- Győződj meg róla, hogy a Cloudflare Accountod rendelkezik a szükséges jogosultságokkal

### Az aldomain nincs hozzáadva {#subdomain-not-added}
- Ellenőrizd az Ultimate Multisite naplóit esetleges hibaüzenetekért
- Ellenőrizd, hogy az aldomain nincs-e már hozzáadva a Cloudflare-hez
- Győződj meg róla, hogy a Cloudflare csomagod támogatja a létrehozott DNS-rekordok számát

### Proxyzási problémák {#proxying-issues}
- Ha nem szeretnéd, hogy az aldomainek proxyzva legyenek, használhatod a `wu_cloudflare_should_proxy` filtert
- Egyes funkciók proxyzás esetén nem működhetnek megfelelően (pl. bizonyos WordPress adminisztrációs funkciók)
- Fontold meg a Cloudflare Page Rules használatát a gyorsítótár megkerülésére az adminisztrációs oldalaknál
