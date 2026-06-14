---
title: Hostinger többszintes szerverrendszer
sidebar_position: 8
_i18n_hash: d7facb9c131877c2c834bd2184d9a073
---
# Hostinger Multi-Tenancy

Ultimate Multisite: Multi-Tenancy 1.2.0 beilleszt egy Hostinger multi-tenancy képességet, amely lehetővé teszi a tárhelyelt domainok számára, hogy az elszigetelt tenent biztosítás mellett részt vehessenek a meglévő Hostinger domain-mapping integrációval együtt.

Használja ezt a képességet akkor, ha a tenent domainokat és az elszigetelt tenent infrastruktúrát Hostinger hPanel segítségével kezelik.

## Beállítási jegyzetek

1. A fő Hostinger integrációt beállítsa meg **Ultimate Multisite > Settings > Host Integrations** menüpont alatt.
2. Ellenőrizze, hogy a Hostinger API token képes-e kezelni az céldomainet vagy aldomainat.
3. Engedélyezze a Multi-Tenancy addon-ot.
4. A tenent közzététel előtt beállítsa meg a tenent szigetelési stratégiáját.
5. A tenyészre való termelési forgalom elküldése előtt futtassa el a migráció ellenőrzési folyamatot.

A Hostinger képesség az eszköz oldali műveletekhez a közös Hostinger kapcsolatot használja. Az DNS továbbra is a megfelelő Hostinger fiókra kell mutatnia, és az hPanel fiókok korlátai továbbra is érvényesek.

## Képességes-specifikus változások

- A szuverén tenent host-tudatos domain műveletekkel lehet létrehozni.
- Az ugyanazon a gépen lévő adatbázis host stringeket normalizálják az engedélyezési ellenőrzés előtt.
- A Hostinger által kezelendő tenent az hPanelben megmutatott adatbázis host értékét kell használnia, kivéve ha a WordPress runtime helyi átirányítást igényel.
- Az SSO (Single Sign-On) látogatások függenek abban, hogy a tenent domain milyen Hostinger-hostot oldja fel.

## A Hostinger tenent problémamegel való megoldása

- Ha egy tenyész telepítése sikertelen, ellenőrizze, hogy az adott domain már csatlakozott-e a Hostinger fiókhoz.
- Ha az adatbázis ellenőrzés sikertelen, hasonlítsa össze a tenent DB felhasználójját, adatbázis nevét és host kötését az hPanel adataihoz.
- Ha **Visit (SSO)** sikertelen, erősítse meg, hogy az SSL és a domain DNS-e aktív a tenent domain számára.
- Ha a lemondás után Hostinger erőforrásokat hagy maga után, távolítsa el az hPanelből minden fennmaradó adatbázist, felhasználót vagy könyvtárat a biztonsági mentések megerősítése után.
