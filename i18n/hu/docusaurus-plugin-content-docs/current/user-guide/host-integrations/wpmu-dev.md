---
title: WPMU DEV integráció
sidebar_position: 4
_i18n_hash: 01cdaa5cf8aece1ca5c269d943e8a9e9
---
# WPMU DEV integráció

## Áttekintés
A WPMU DEV egy átfogó WordPress platform, amely tárhelyszolgáltatást, bővítményeket és egyéb szolgáltatásokat kínál WordPress oldalakhoz. Ez az integráció lehetővé teszi az automatikus domain szinkronizálást és SSL tanúsítványkezelést az Ultimate Multisite és a WPMU DEV tárhely között.

## Funkciók
- Automatikus domain szinkronizálás
- SSL tanúsítványkezelés
- Kibővített SSL tanúsítvány-ellenőrzési kísérletek

## Követelmények
Az integráció automatikusan felismeri, ha WPMU DEV tárhelyen fut az oldal, és a beépített API-t használja. Ha WPMU DEV tárhelyen vagy, nincs szükség további beállításokra.

Az integráció a `WPMUDEV_HOSTING_SITE_ID` konstans meglétét ellenőrzi, amely automatikusan definiálva van WPMU DEV tárhelyen.

## Beállítási útmutató

### 1. WPMU DEV tárhely ellenőrzése

Ha WPMU DEV tárhelyen van az oldalad, a szükséges konstansoknak már definiálva kell lenniük. Ellenőrizd, hogy:

1. A `WPMUDEV_HOSTING_SITE_ID` konstans definiálva van a környezetedben
2. Aktív WPMU DEV tagságod van API hozzáféréssel

### 2. Az integráció engedélyezése

1. A WordPress adminisztrációs felületen navigálj az Ultimate Multisite > Settings menüpontra
2. Kattints a "Domain Mapping" fülre
3. Görgess le a "Host Integrations" részhez
4. Engedélyezd a WPMU DEV integrációt
5. Kattints a "Save Changes" gombra

## Hogyan működik

### Domain szinkronizálás

Amikor egy domaint hozzárendelsz az Ultimate Multisite-ban:

1. Az integráció a WPMU DEV API-t használja a domain hozzáadásához a tárhelyfiókodhoz
2. Automatikusan hozzáadja a domain www-s verzióját is
3. A WPMU DEV kezeli a domain konfigurációját és az SSL tanúsítvány kiállítását

### SSL tanúsítványkezelés

Az integráció úgy van beállítva, hogy több SSL tanúsítvány-ellenőrzési kísérletet végezzen WPMU DEV tárhely esetén, mivel az SSL tanúsítványok kiállítása és telepítése időbe telhet. Alapértelmezetten legfeljebb 10 alkalommal próbálkozik az SSL tanúsítvány ellenőrzésével, szemben a szokásos 5 kísérlettel.

## Fontos tudnivalók

### Domain eltávolítása

Jelenleg a WPMU DEV API nem biztosít lehetőséget domainek eltávolítására. Amikor egy domain hozzárendelést törölsz az Ultimate Multisite-ban, a domain megmarad a WPMU DEV tárhelyfiókodban. Ha szükséges, manuálisan kell eltávolítanod a WPMU DEV tárhely kezelőfelületéről.

### API hitelesítés

Az integráció a WordPress adatbázisban tárolt WPMU DEV API kulcsot használja, amely a `wpmudev_apikey` opcióként van elmentve. Ez automatikusan beállításra kerül, amikor összekapcsolod az oldaladat a WPMU DEV-vel.

## Hibaelhárítás

### API kapcsolódási problémák
- Ellenőrizd, hogy az oldalad megfelelően kapcsolódik a WPMU DEV-hez
- Győződj meg róla, hogy a `wpmudev_apikey` opció be van állítva a WordPress adatbázisban
- Bizonyosodj meg arról, hogy a WPMU DEV tagságod aktív

### SSL tanúsítvány problémák
- A WPMU DEV-nek időre lehet szüksége az SSL tanúsítványok kiállításához (általában 5-15 perc)
- Az integráció legfeljebb 10 alkalommal ellenőrzi az SSL tanúsítványokat
- Ha több próbálkozás után sem kerülnek kiállításra az SSL tanúsítványok, vedd fel a kapcsolatot a WPMU DEV ügyfélszolgálatával

### A domain nem lett hozzáadva
- Ellenőrizd az Ultimate Multisite naplókat esetleges hibaüzenetek után kutatva
- Győződj meg róla, hogy a domain nincs már hozzáadva a WPMU DEV-hez
- Ellenőrizd, hogy a WPMU DEV tárhelycsomagod támogatja-e a hozzáadni kívánt domainek számát
