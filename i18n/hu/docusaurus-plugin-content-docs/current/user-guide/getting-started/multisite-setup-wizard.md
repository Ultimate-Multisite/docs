---
title: Multisite beállítási varázsló
sidebar_position: 3
_i18n_hash: fd09dc94f24b0b37245b847380feea3f
---
# Multisite telepítővarázsló

Az Ultimate Multisite tartalmaz egy beépített varázslót, amely automatikusan átalakítja a hagyományos WordPress telepítést WordPress Multisite hálózattá. Ezzel kiküszöbölheted a `wp-config.php` manuális szerkesztését és az adatbázis-parancsok futtatását.

:::tip
Ha a WordPress telepítésed már Multisite hálózatként fut, ezt a lépést teljes mértékben kihagyhatod. A varázsló csak akkor jelenik meg, ha a Multisite még nincs engedélyezve.
:::

## Mikor jelenik meg a varázsló?

Amikor az Ultimate Multisite plugint egy hagyományos (nem Multisite) WordPress telepítésen aktiválod, a plugin észleli, hogy a Multisite nincs engedélyezve, és automatikusan a Multisite telepítővarázslóhoz irányít át a normál telepítővarázsló helyett.

Közvetlenül is elérheted itt: **WP Admin > Ultimate Multisite > Multisite Setup**.

## Előfeltételek

A varázsló futtatása előtt győződj meg róla, hogy:

- **Rendszergazdai hozzáféréssel** rendelkezel a WordPress telepítésedhez
- A szerver `wp-config.php` fájlja **írható** a webszerver számára
- Van **friss biztonsági mentésed** a fájljaidról és az adatbázisról

:::warning
A varázsló módosítja a `wp-config.php` fájlt és új adatbázistáblákat hoz létre. Mindig készíts biztonsági mentést a folytatás előtt.
:::

## 1. lépés: Üdvözlés

Az első képernyő elmagyarázza, mi az a WordPress Multisite, és mit fog tenni a varázsló:

- Engedélyezi a Multisite funkciót a WordPress konfigurációdban
- Létrehozza a szükséges hálózati adatbázistáblákat
- Hozzáadja a szükséges multisite konstansokat a `wp-config.php` fájlhoz
- Hálózati szinten aktiválja az Ultimate Multisite plugint az egész hálózaton

![Multisite telepítővarázsló - Üdvözlő lépés](/img/installation/multisite-wizard/wizard-welcome.png)

Kattints a **Continue** gombra a folytatáshoz.

## 2. lépés: Hálózat konfigurálása

Ebben a lépésben konfigurálhatod a hálózati beállításokat.

### Oldalstruktúra

Válaszd ki, hogyan legyenek szervezve a hálózatod oldalai:

- **Aldomainek** (Ajánlott) — Az oldalak saját aldomaint kapnak, pl. `site1.yourdomain.com`
- **Alkönyvtárak** — Az oldalak útvonalakként jönnek létre, pl. `yourdomain.com/site1`

:::note
Ha az aldomaineket választod, **wildcard DNS-t** és **wildcard SSL tanúsítványt** kell konfigurálnod a domainedhez. A legtöbb menedzselt WordPress tárhely ezt automatikusan kezeli. Lásd az [Ultimate Multisite 101](./ultimate-multisite-101) oldalt a részletes összehasonlításért.
:::

### Hálózat neve

Add meg a hálózatod nevét. Alapértelmezés szerint a jelenlegi oldal címe jelenik meg, kiegészítve a "Network" szóval. Ezt később módosíthatod a hálózati beállításokban.

### Hálózati adminisztrátor e-mail címe

Az e-mail cím, amelyre a hálózati adminisztrációs értesítések érkeznek. Alapértelmezés szerint a jelenlegi felhasználó e-mail címe.

![Multisite telepítővarázsló - Hálózat konfigurálása](/img/installation/multisite-wizard/wizard-network-configuration.png)

A mezők kitöltése után kattints a **Continue** gombra a folytatáshoz.

## 3. lépés: Telepítés

Kattints az **Install** gombra a kezdéshez. A varázsló öt automatizált lépést hajt végre egymás után, és mindegyik folyamatát valós időben mutatja:

![Multisite telepítővarázsló - Telepítés függőben](/img/installation/multisite-wizard/wizard-installation-pending.png)

| Lépés | Leírás |
|-------|--------|
| **Enable Multisite** | Hozzáadja a `WP_ALLOW_MULTISITE` konstanst a `wp-config.php` fájlhoz |
| **Create Network** | Létrehozza a multisite adatbázistáblákat (`wp_site`, `wp_sitemeta`, `wp_blogs` stb.), és feltölti őket a hálózati konfigurációddal |
| **Update Configuration** | Hozzáadja a végső multisite konstansokat a `wp-config.php` fájlhoz (`MULTISITE`, `SUBDOMAIN_INSTALL`, `DOMAIN_CURRENT_SITE` stb.) |
| **Fix Cookies** | Biztosítja, hogy az oldal URL-je helyes legyen a hálózati metaadatokban, megelőzve az aktiválás utáni hitelesítési problémákat |
| **Network Activate Plugin** | Hálózati szinten aktiválja az Ultimate Multisite plugint, hogy az egész hálózaton fusson |

Minden lépés az alábbi állapotok egyikét jeleníti meg:

- **Pending** — Feldolgozásra vár
- **Installing...** — Éppen fut
- **Success!** — Sikeresen befejeződött
- **Hibaüzenet** — Hiba történt (az üzenet leírja a problémát)

Amikor minden lépés sikeresen befejeződött, minden elemnél zöld "Success!" állapotot fogsz látni:

![Multisite telepítővarázsló - Telepítés befejezve](/img/installation/multisite-wizard/wizard-installation-complete.png)

A varázsló ezután automatikusan továbblép a befejező képernyőre.

## 4. lépés: Befejezés

A telepítés befejezése után egy sikeres üzenetet fogsz látni, amely megerősíti, hogy a WordPress Multisite engedélyezve lett.

![Multisite telepítővarázsló - Telepítés befejezve](/img/installation/multisite-wizard/wizard-complete.png)

Most már folytathatod az Ultimate Multisite telepítővarázslóval a WaaS platformod konfigurálását (céges adatok, alapértelmezett tartalom, fizetési átjárók stb.).

:::note
A multisite telepítés befejezése után a böngésződ átirányít az újonnan engedélyezett hálózati adminon keresztül. Előfordulhat, hogy újra be kell jelentkezned, mivel a hitelesítési cookie-k frissülnek a multisite környezethez.
:::

## Manuális telepítés alternatívaként

Ha a varázsló nem tudja írni a `wp-config.php` fájlt (fájljogosultságok vagy szerverkorlátozások miatt), megjeleníti a pontos kódot, amit manuálisan kell hozzáadnod:

1. A **wp-config.php konstansok**, amelyeket a `/* That's all, stop editing! */` sor fölé kell beszúrni
2. A **.htaccess átírási szabályok** a választott oldalstruktúrának megfelelően (aldomain vagy alkönyvtár)

A manuális módosítások elvégzése után frissítsd az oldalt, és a varázsló észlelni fogja, hogy a multisite most már aktív.

## Hibaelhárítás

### A varázsló azt jelzi, hogy a wp-config.php nem írható

A webszerver folyamatnak írási jogosultságra van szüksége a `wp-config.php` fájlhoz. A következőket teheted:

- Ideiglenesen módosítsd a fájljogosultságokat `644`-re vagy `666`-ra
- Használd a varázsló által megadott manuális telepítési utasításokat
- Kérj segítséget a tárhelyszolgáltatódtól

### Az oldalak nem érhetők el a telepítés után (aldomainek)

Ha az aldomain struktúrát választottad, **wildcard DNS-t** kell konfigurálnod a domainedhez. Adj hozzá egy DNS rekordot:

```
Type: A (or CNAME)
Host: *
Value: [a szervered IP-címe]
```

Kérdezd meg a tárhelyszolgáltatódat, ha nem vagy biztos benne, hogyan kell ezt beállítani.

### Hitelesítési problémák a telepítés után

Ha kijelentkeztetett a rendszer, vagy cookie-hibákat tapasztalsz a multisite telepítés után:

1. Töröld a böngésződ cookie-jait az oldalhoz
2. Jelentkezz be újra itt: `yourdomain.com/wp-login.php`
3. Ha a probléma továbbra is fennáll, ellenőrizd, hogy a `wp-config.php` fájlban nincs-e a `COOKIE_DOMAIN` `false`-ra állítva — ez egy ismert probléma az aldomain multisite telepítéseknél

### Egy lépés meghiúsult a telepítés során

Ha az egyik telepítési lépés hibát jelez:

1. Jegyezd fel a megjelenített hibaüzenetet
2. Menj vissza a konfigurációs lépéshez, és próbáld újra
3. Ha a hiba továbbra is fennáll, ellenőrizd a szervered PHP hibanaplóját további részletekért
4. A már befejezett lépések kimaradnak a következő futtatásoknál (a telepítő idempotens)
