---
title: Több-bérlős integráció
sidebar_position: 6
_i18n_hash: 3cf63ea3f0dba9dcf2a8fc74478aedbb
---
# Több-bérlős integráció

Ultimate Multisite: Multi-Tenancy 1.2.0 több integrációs kapcsolódási pontot módosít a szuverén bérlők, a migráció-ellenőrzés és a bérlői életciklus automatizálása számára.

## Bérlői bootstrap folyamat

Azoknak az integrációknak, amelyek bérlőket hoznak létre vagy módosítanak, ezt a sorrendet kell követniük:

1. Oldják fel a bérlői nyilvántartási rekordot és az izolációs modellt.
2. Hozzák létre vagy ellenőrizzék a bérlői adatbázis írót.
3. Indítsák el a bérlői sémát.
4. Biztosítsák a bérlői felhasználókat.
5. Regisztrálják a bérlői útválasztást és fájlrendszer-útvonalakat.
6. Futtassák a migráció-ellenőrzést, mielőtt elérhetővé teszik a bérlőt.

Ne feltételezd, hogy egy szuverén bérlő újrahasználhatja a hálózati adatbázis-kapcsolatot. Használd a kiegészítő által biztosított bérlői nyilvántartást és íróabsztrakciókat.

## SSO és REST hookok

Az állapotmentes bérlői automatikus bejelentkezés rövid élettartamú tokeneket használ célmegjelöléssel, JTI visszajátszás elleni védelemmel, lejárati korláttal és eredethez rögzítéssel. Azoknak az integrációknak, amelyek bejelentkezési gombokat vagy távoli kezelési linkeket adnak hozzá, a támogatott SSO folyamaton keresztül kell bérlői látogatásokat generálniuk ahelyett, hogy közvetlenül bérlői bejelentkezési URL-eket állítanának össze.

A hálózati oldali API audit események és napi összegzések elérhetők a szuverén bérlői átjárókhoz. Használd ezeket a naplókat, amikor olyan külső rendszereket hibakeresel, amelyek bérlői életciklus endpointokat hívnak.

## Szuverén ügyfélműveleti URL-ek

Az Ultimate Multisite v2.13.0 a szuverén bérlői ügyfélműveleteket visszairányítja a fő oldalra az Account, fizetés, számlázás, számla, oldal, sablonváltás és domain-leképezési folyamatokhoz. Azoknak az integrációknak, amelyek bérlői oldali kezelési linkeket jelenítenek meg, ezeket a műveleteket a fő oldali ügyfélpanelre kell irányítaniuk, és validált visszatérési célt kell tartalmazniuk, amikor a felhasználónak a művelet befejezése után vissza kell tudnia navigálni a bérlőhöz.

Használd az alap SSO burkolót a domainek közötti kezelési linkekhez:

```php
$url = wu_with_sso($main_site_customer_url);
```

A generált URL továbbra is szűrhető a `wu_sso_url` segítségével, amely megkapja az SSO URL-t, az aktuális felhasználót, a cél oldal azonosítóját és az átirányítási kontextust. A kiegészítők ezt a szűrőt használhatják szolgáltatóspecifikus kontextus hozzáfűzésére vagy a broker URL lecserélésére, miközben megőrzik az Ultimate Multisite tokenvalidálását.

Ne duplikáld a tagsági, számla-, számlázási cím-, sablon- vagy domainkezelési állapotot a szuverén bérlőn belül. A bérlői Dashboardot kezeld indítóként, a fő oldali ügyfélpanelt pedig a kezelt műveletek hiteles nyilvántartási rendszerének.

## Migráció-ellenőrzés

Miután egy migráció vagy életciklus-integráció módosítja a bérlői adatokat, futtasd az ellenőrzési kapukat:

- `wp tenant verify-no-legacy --site=<site-id>` megerősíti, hogy a bérlő már nem függ az örökölt hálózati oldali útvonalaktól.
- `wp tenant verify-sovereign-push --site=<site-id>` megerősíti, hogy a szuverén push feladatok feldolgozhatók és kiüríthetők.

Az integrációknak a sikertelen ellenőrzést telepítési blokkolóként kell kezelniük, és kerülniük kell a bérlő élesként való megjelölését, amíg a hiba meg nem oldódik.

## Bérlő törlése

A törlési folyamatoknak a kiegészítő lebontási útvonalát kell hívniuk, hogy a bérlői adatbázis hitelesítő adatai megtisztításra kerüljenek. A külső integrációk eltávolíthatják a szolgáltatói erőforrásokat, miután a lebontás sikeres, de nem szabad törölniük a hoszt adatbázisait vagy mappáit, amíg az ellenőrzés vagy az aszinkron push feladatok még futnak.

## Elavult adatbázis-router

Az örökölt `Database_Router` helyét egy elavulási stub vette át. Az új integrációknak a bérlőket az aktuális oldalrouteren és bérlői nyilvántartási API-kon keresztül kell feloldaniuk, ahelyett, hogy a régi router osztálytól függenének.
