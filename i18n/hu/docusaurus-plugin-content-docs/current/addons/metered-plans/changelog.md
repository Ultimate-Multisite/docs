---
title: Mért alapú Terv(ek) Változatok Naplója
sidebar_position: 99
_i18n_hash: ee036a85eb635b4b503c94798251e839
---
# Mért alapú csomagok Módosítási naplója

Verzió 1.1.0 - Kiadása: 2026-05-05
- Új: AI token alapú számlázás multisite alpontokhoz – nyomon követi és számlázza az AI token használatot a vásárlói oldalakon, konfigurálható token alapú díjakkal
- Új: A kapcsoló (Connector) végrehajtása újraépítve dinamikus limitum felfedezéssel és írás-átvitel (write-through) funkcióval, biztosítva a valós idejű pontosságot minden kapcsolón keresztül
- Javítás: Az adatbázistáblák frissítései most megfelelően igazítva a BerlinDB schema definícióihez, megelőzve az frissítési sikertelenítéseket az új telepítések esetén
- Javítás: Az adatbázis frissítési callback-ek a helyes formátumra kerültek, megoldva a csendes frissítési sikertelenítéseket
- Javítás: A frakcionális értékek (többszörös értékek) most elfogadják az AI Usage Overage Markup beállítási mezőben
- Javítás: Megoldva a végzetes hibaüzeneteket és a kettős inicializációs problémákat a plugin betöltése során
- Javított: Hozzáadva a check-env npm script-et, így a fejlesztői környezetek automatikusan konfigurálódnak az első futtatáskor

### 1.0.3
* Frissítve a Plugin Update Checker v5-re
* Hozzáadva modern WordPress plugin fejléceket
* Javított a kompatibilitást a legújabb WordPress verziókkal
* Javított a használat nyomon követésének teljesítményét

### 1.0.2
* Hibajavítások és teljesítményjavítások
* Javított a használat jelentéskészítést

### 1.0.0
* Első kiadás
* Alap mért számlázási funkciók
* Használat nyomon követése és túllépési számítás
* Automatikus számla generálás
