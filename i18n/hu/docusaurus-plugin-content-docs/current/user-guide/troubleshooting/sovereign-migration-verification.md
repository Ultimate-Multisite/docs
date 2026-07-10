---
title: Souveréns migráció ellenőrzése
sidebar_position: 16
_i18n_hash: a19bc6263b278573f09cbba17581f632
---
# Szouverén migráció ellenőrzése {#sovereign-migration-verification}

Az Ultimate Multisite: Multi-Tenancy 1.2.0 tartalmaz WP-CLI ellenőrzési parancsokat szouverén (sovereign) tenyészmigrációkhoz. Ha egy tenyészmigráció, SSO látogatás vagy izolált telepítés nem viselkedik úgy, ahogy várható, használja ezeket a parancsokat.

## Kiválasztandó parancsok {#commands-to-run}

Ha hálózati WordPress telepítésről futtatja a validációt:

```bash
wp tenant verify-no-legacy --site=<site-id>
wp tenant verify-sovereign-push --site=<site-id>
```

Használja az adott tenyész ID-t. A két parancs elsődlegesen ellenőrzi, hogy a tenyész már nem függ a régi hálózati adatoktól. A második parancs megerősíti, hogy a szouverén push feladatokat feldolgozhatják és lecsöszhetik (drain).

## Gyakori hibák {#common-failures}

### A adatbázis hozzáférések nem felel meg a hostnak {#database-grants-do-not-match-the-host}

Ha a validáció hibaüzenetként jelzi hozzáférést vagy írási felhasználóhiba, ellenőrizze a beállított adatbázis hostot. `localhost`, `127.0.0.1` és egy konténer szolgáltatási neve különböző MySQL hozzáférési hostok lehetnek. Frissítson fel a tenyész host kötöttségeit vagy az adatbázis hozzáféréseit, majd futtassa újra a validációt.

### A Bedrock vagy helyi soktok nem tudnak kapcsolódni {#bedrock-or-local-installs-cannot-connect}

A Bedrock és helyi socket telepítések az adatbázist `localhost`-ként jelölhetik meg, miközben a runtime egy normalizált címre kap hozzáférést. A 1.2.0 verzió normalizálja ugyanazon gép host sztringeket, de a custom host túlsúlyai még mindig konfliktusra hozhatják a kapcsolatot az adatbázis hozzáférésekkel.

### Az aszinkron push sor nem lecsöszik (drain) {#async-push-queue-does-not-drain}

Ha a `verify-sovereign-push` nem ér véget, ellenőrizze az Action Scheduler-t vagy a beállított aszinkron futtatót. Csak azt tisztítsa ki a hibás feladatokat, ha megerősíti, hogy biztonságos újrapróbálható vagy elhagyható.

### A tenyész felhasználói száma helytelen {#tenant-user-count-is-wrong}

A migráció során a szouverén tenyész számára kell felhasználókat biztosítani. Ha hiányzik az várható telepítési felhasználó, futtassa újra a felhasználói biztosítás lépést SSO-s újrapróbálása előtt.

### Az SSO látogatás elutasítása {#sso-visit-is-rejected}

A statusszállító (stateless) tartó egységi autogolaghoz a domain, origin pin, token célja, nonce-e és lejárattartása össze kell férnie. Kövesse meg, hogy az adott tenant URL helyes legyen, és próbálja be egy rövid idő múlva a SSO látogatás generálásakor.

## Mikor próbálja újra? {#when-to-retry}

Újra ellenőrizze a verifikációt minden infrastruktúra változás után. Ne váltson át a termék forgalomát (production traffic), ne törölje az eredeti adatokat, és ne távolítsa el a migrációs adatokigényeket, amíg az összes ellenőrzési ellenőrzés sikeresen nem fut.
