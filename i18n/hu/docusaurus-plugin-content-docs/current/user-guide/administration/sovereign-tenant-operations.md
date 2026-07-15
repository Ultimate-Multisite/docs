---
title: Sovereign Tenant Operációi
sidebar_position: 15
_i18n_hash: bcde2032a685b60e17f1944b5b588f25
---
# Szouverén Tenant Operációk

Ultimate Multisite 1.2.0 verzió beépítette operációs eszközöket szouverén tenant-ek számára: subsítokat, amelyek saját adatbázisát, fájlrendszer gyökérkövetét és átirányítási kontextusát használnak, miközben a hálózati adminnek is láthatóak maradnak.

Ez a oldalt akkor használja, ha kezel egy szigetelt ügyfélhelyet, távoli helyszíton történő átadásokra vagy migrációkra, amelyeket standard subsítoktól szouverén infrastruktúrába történő átállítással végrehajtanak.

## Mit változik az adminisztrátorok számára? {#what-changes-for-administrators}

- **Államtalan tenant autologin** — A hálózati adminnek egy szouverén tenant felé való látogatásához nem kell függenie hosszú távon tartó, megosztott sessió állapotától. Az SSO token célzott körű (purpose-scoped), eredet-megtartószerőt (origin-pinned), visszatérési védelmet (replay-protected) és rövid érvényességű lejárattal rendelkezik.
- **Szouverén tudatos átirányítás** — A régi, szigetelt hálózatok és szouverén tenant-ek ugyanazon a weboldali átirányítási útvonalon oldódnak, csökkentve az régi és új szigetelt telepítések közötti beindítási különbségeket.
- **Ellenőrzött migrációs állapot** — A migráció ellenőrzése felhasználói biztosítását, adatbázis írásjogokat, sorrendelési lecsökkentés (queue drain) állapotát és a régi táblák hiányát ellenőrzi, mielőtt egy tenant-t teljesként kezelnék.
- **Biztonságos lezárás** — A szouverén lezárás most tiszta módon eltávolítja a tenant adatok (credentials), így az törölt tenant-ek nem hagyják maga után régi adatbázis hozzáférést.

## Szouverén tenant felviselése {#visiting-a-sovereign-tenant}

1. Nyissa meg: **Network Admin > Ultimate Multisite > Sites**.
2. Válassza ki a szouverén tenant-et.
3. Ha elérhető, használjon az **Visit (SSO)** funkciót, helyett passzWORD másolását vagy üres admin fiók létrehozását.

A felviselési folyamat rövid ideig érvényes belépési tokenet generál a tenant számára és rögzíti az SSO eseményt a tenant audit trail-on. Ha a gomb nem működik, ellenőrizze, hogy a tenant domain megfelelően oldódik ki a várt telepítésre, és elérheti-e a hálózati oldal SSO végpontját (endpoint).

## Távoli helyszíton történő operációs ellenőrzőlista {#remote-site-operations-checklist}

Mielőtt bármilyen szouverén vagy távoli tenant-t megváltoztatna, ellenőrizze:

A bérlő domain a hostra mutat, amely a bérlő fájlszervezetet adja meg.
A bérlő adatbázis host-a megegyezik az adott telepítés konfigurált host binding-jével.
A migráció ellenőrzési parancsok sikeresen futnak a bérlő számára.
Az aszinkron migrációs sorrendeket lecsövelik el, mielőtt DNS vagy tulajdonjog változásokat hozunk meg.
A bérlő admin felhasználót a migráció során biztosítottuk, és az SSO-n keresztül bejelentkezhet.

## Szober bérlők törlése {#deleting-sovereign-tenants}

Egy szober bérlő törlése pusztító hatású. Ellenőrizze először a biztonsági mentés és export státuszát, majd törölje ki a webhelykezelési felületen. A 1.2.0-as lezárási folyamat eltávolítja az adatbázis hozzáférési adatokot a tisztítás részeként, de adminisztrátoroknak ellenőrizniük kell, hogy külső host panel használata esetén a hostszintű adatbázis felhasználók és könyvtárak eltűntek-e.

:::warning
Ne törölje ki egy szober bérlőt, ha még fut a migráció ellenőrzése vagy aszinkron push feladatok sorban vannak. Várjon, hogy az ellenőrzés lezáruljon, hogy a lezárási folyamat ne távolítsa el azokat a hozzáférési adatokot, amelyek szükségesek a várakozó feladatokhoz.
:::
