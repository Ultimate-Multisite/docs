---
title: Oldalt exportálás
sidebar_position: 11
_i18n_hash: d25255aa1b01df64a9008f91e3dcbeb1
---
# Oldalt exportálása

Az **Oldalt exportálás** admin oldala lehetővé teszi a hálózatadminisztrátorok számára, hogy egy oldalt, vagy az egész hálózatot csomagoljanak letöltendő archívumként, migrációra, biztonsági mentésre vagy átadási célra.

## Egy oldal exportálása {#exporting-one-site}

Kattintson az **Ultimate Multisite > Oldalt exportálás** menüpontra, és válassza ki a **Új oldalt exportálás generálása** opciót. Válassza ki azt a altoldalt, amelyet exportálni szeretne, majd döntse el arról, hogy az archívum tartalmazza-e az feltöltéseket, a plugineket és a témákat.

Az exportálás végrehajtása után töltse le a ZIP fájlt az **Létező exportálások** listából. Az export ZIP fájlok most tartalmaznak egy önindító `index.php`-t és egy `readme.txt`-et, így az archívumot friss hostra feltölthető és elindítható anélkül, hogy előtte külön importáló pluginet kellene telepíteni.

## Az egész hálózat exportálása {#exporting-the-whole-network}

Használja az **Hálózat exportálását** az Oldalt exportálás oldalon, ha egyetlen archívumot szeretne, amely az hálózat összes altoldalát tartalmazza. Ez hasznos lehet a host migrációk előtt, katasztrófa-rekonstrukciós gyakorlatok vagy staging újraépítései előtt, ahol az egyes altoldalaknak együtt kell utazniuk.

Mivel egy hálózat exportálása sokkal nagyobb lehet, mint egyetlen oldalt exportálása, futtassa ezt alacsony forgalmú időszakban, és ellenőrizze, hogy a cél tárhely elegendő szabad helyet biztosít-e az feltöltésekre, pluginekre, témákra és generált ZIP fájlokra.

### Hálózat import csomagok {#network-import-bundles}

Az Ultimate Multisite 2.12.0 verziójától kezdve az Site Exporter képes **hálózat import csomagokat** generálni – speciális archívumokat, amelyek optimalizált hálózat-szerte oldalak visszaállításához szolgálnak. Egy hálózat import csomag tartalmazza az összes szükséges fájlt és metadatot, hogy több oldalt visszaállítson egy új hálózat telepítésére.

#### Hálózat import csomag generálása {#generating-a-network-import-bundle}

1. Kattintson az **Ultimate Multisite > Oldalt exportálás** menüpontra
2. Kattintson az **Új hálózat exportálás generálása** gombra
3. Válassza ki a **Hálózat import csomagot** az export típusként
4. Döntse el arról, hogy tartalmazza-e az feltöltéseket, a plugineket és a témákat
5. Kattintson a **Generálás** gombra
6. Töltse le a csomag ZIP fájlt az **Létező exportálások** listából

#### Hálózat import csomagból visszaállítás {#restoring-from-a-network-import-bundle}

Az altoldalak visszaállításához egy hálózat import csomagból:

1. Telepítse az Ultimate Multisite-ot a cél hostra
2. Végezze el a multisite beállítási wizard-t
3. Kattintson az **Ultimate Multisite > Oldalt exportálás** menüpontra az új hálózatokon
4. Kattintson az **Hálózat csomag importálása** gombra
5. Töltse fel a hálózat import csomag ZIP fájlát
6. Kövesse az oldali import utasításokat
7. Az importálás visszaállítja az összes oldalt, tartalmát és konfigurációját

A hálózat import csomagok megőrzik:
- Oldalt tartalmait (bejegyzések, oldalak, festálisztikus tartalmak)
- Oldalt beállításait és opcióit
- Felhasználói szerepeket és engedélyeket
- Plugineket és témákat (ha az csomagban szerepelnek)
- Média feltöltéseket (ha az csomagban szerepelnek)
- Saját adatbázistáblákat és adatokat

## Önindító export ZIP telepítése {#installing-a-self-booting-export-zip}

Egy önindító ZIP fájl visszaállításához egy friss hostra:

1. Töltse fel az exportált ZIP tartalmát a cél web gyökérkönyvtárba.
2. Nyissa meg a feltöltött `index.php`-t egy böngészőben.
3. Kövesse az oldali telepítő utasításokat a csomagolt exportálásból.
4. Nézze át a csomagolt `readme.txt`-et az exportáláshoz kapcsolódó megjegyzésekre, mielőtt eltávolítja a mellőleges fájlokat.

A csomaghoz tartozó telepítési és importációs részletekért lásd az [Site Exporter addon dokumentációt](/addons/site-exporter).

Az Ultimate Multisite 2.9.0 verziójában hozzáadott egyetlen oldalt eszközéhez lásd az [Exportálás és Importálás](/user-guide/administration/export-import) oldalt.
