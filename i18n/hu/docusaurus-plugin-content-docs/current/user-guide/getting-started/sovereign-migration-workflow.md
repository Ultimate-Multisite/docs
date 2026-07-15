---
title: Sovereign Migration Workflow
sidebar_position: 8
_i18n_hash: f8aebdd695ed2f5b3f074c7aa7d52175
---
# Szouverén migráci folyamat

Ultimate Multisite: Multi-Tenancy 1.2.0 beilleszi a migráció ellenőrzési beavatkozásokat egy standard alszítást szouverén tenyész infrastruktúrába való átmenethez.

## Előkészületek {#before-you-start}

Ellenőrizze, hogy rendelkezik-e:

- A forrás weboldalának aktuális biztonsági mentése (backup).
- Az Multi-Tenancy addon aktív állapotban van.
- A céltenyész adatbázis, fájlrendszer gyökér és a domain készen áll.
- Egy adatbázis host kötés, amely megegyezik a célkörnyezet környezetével.
-Hozzáférés az WP-CLI parancsok futtatásához a hálózatra.

## Ajánlott folyamat {#recommended-workflow}

1. Készítsen fel a céltenyész adatbázist és fájlrendszert.
2. Rögzítse vagy frissítse a tenyész szigetelési beállításokat (tenant isolation settings).
3. Futassa el a tenyészi migrációt.
4. Készítse fel vagy ellenőrizze a tenyész felhasználókat.
5. Leletesse ki az aszinkr migrációs feladatokat (async migration jobs).
6. Futassa el a szouverén migráció ellenőrzését.
7. Látogasson el a tenyészen SSO-val.
8. Válassza meg a DNS vagy a ruttorozást csak akkor, ha az ellenőrzés sikeresen sikerül.

## Ellenőrzési beavatkozások (Verification gates) {#verification-gates}

Az ellenőrzési folyamat több szélről ellenőrzi a migrációt:

- A tenyész skémája létezik és írható a tenyész adatbázis írójával.
- Az beállított adatbázis host valid hozzáféréseket (grants) rendelkezik.
- A tenyészi felhasználók jelen vannak, és megegyeznek az elvártt tenyész telepítési felhasználói számokkal.
- Az aszinkr push sorok sikeresen leletesse ki.
- A szouverén tenyész számára a régi hálózati adathozsorok (data paths) már nem szükségesek.

Treatedtenő ellenőrzési hibákat előzetes akadályokkal tekintsen az elindítás előtt. Javítsa a jelentett adatbázisi, felhasználói, sor vagy ruttorozási problémát, majd futtassa újra az ellenőrzést, mielőtt a tenyészetet ügyfeleknek kitakarja.

## Első termék látogatás (First production visit) {#first-production-visit}

Az ellenőrzés sikeres befejezése után használjon a weboldal kezelő képernyőjön lévő **Visit (SSO)** funkciót az első admin látogatáshoz. Ez egy kontrollált lépésben megerősíti a tenyész ruttorozását, az SSO token kezelését, a forrás pontosítását és a tenyész oldalán történő felhasználói beállítást.
