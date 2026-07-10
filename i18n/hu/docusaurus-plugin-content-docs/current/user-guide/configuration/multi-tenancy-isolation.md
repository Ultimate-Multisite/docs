---
title: Multi-tenancy izoláció
sidebar_position: 12
_i18n_hash: 5aaf1504c3022f94b9aec9faaa4eda22
---
# Multi-Tenancy Isoláció {#multi-tenancy-isolation}

Ultimate Multisite: Multi-Tenancy 1.2.0 támogatja az autonóm (sovereign) kedvezményezett számára per-subsite adatbázis és fájlszervezés izolációt. Ez tartja a kedvezményezett adatokat külön, miközben megőrzi a hálózati szintű biztosítást, számlázást és kezelést.

## Izolációs stratégia {#isolation-strategy}

Használjon autonóm izolációt az olyan ügyfelek számára, akik erősebb adatkülönbséget, dedikált fájlrendszer tárolást vagy külön host határolt környezetet igényelnek.

Minden autonóm kedvezményezettnek kell rendelkeznie:

- Egy dedikált kedvezményezett adatbázisra vagy adatbázis előrétségi stratégiára, amelyet a host számára jóváhagyott.
- Egy dedikált kedvezett fájlrendszer gyökérpontra (filesystem root).
- Egy kedvezményezett regisztrációs bejegyzésre, amely a webhelyet adatbázisához, gyökérútához, hostnévhez és izolációs modellhez kapcsolja.
- Egy migráció ellenőrzési eredményre, mielőtt az kedvezményezett élőként tekinthető.

## Adatbázis host kötés (Database host binding) {#database-host-binding}

A 1.2.0 verzió módosítja a autonóm telepítések esetében a háttérben lévő beállításokat a megbízható (same-machine) host kötésre vonatkozóan. A megbízható értékek, mint például `localhost`, normalizálva kezelendők, így Bedrock, FrankenPHP és konténerbe csomagolt WordPress telepítések is képesek engedélyezni és ellenőrizni a hozzáférést az adott host string-hez való MySQL által látott jogok.

Az autonóm kedvezményezett konfigurowásakor:

1. A adatbázis hostot beállítsa arra a értékre, amely a kedvezményezett futási környezet (runtime) számára szükséges.
2. Használjon `localhost`-t helyi szivattyú telepítésekhez, ha a host lokális kapcsolatokat várja.
3. Használjon `127.0.0.1`-t vagy csak egy szolgáltatási hostnév-et akkor, ha az adatbázis szerver engedélyezi azt a hostot.
4. A host kötés megváltoztatásakor futtassa el a migráció ellenőrzést.

Ha az ellenőrzési eredmények hozzáférést hibaügyet jelentnek, hasonlítsa össze a kedvezményezett adatbázis felhasználói jogokat a beállított host kötéshez. Az `user@localhost`-nak engedélyezett felhasználó eltér az `user@127.0.0.1`-től vagy `user@%`-től.

## Fájlrendszer gyökérpont (Filesystem root) {#filesystem-root}

A tartó (tenant root) stabilnak az újraindítások és telepítések során. Kerülni kell a temporáris mount path-okat. Bedrock-stílusú telepítések esetén ellenőrizze, hogy a tartó gyökér valóban a WordPress webgyökérre utaljon, amit a tenant bootstrap vár el, nem csak a projekt gyökérre.

## A szolgáltatás (Provisioning) sorrendje {#provisioning-order}

Új szuverén tartók számára ezt az ordont használja:

1. Hozza létre a tenant registry entry-t.
2. Hozza létre a tenant adatbázist és adatbázis felhasználóját.
3. Bootstrap-elje a tenant skémát.
4. Szerezze be a tenant felhasználókat.
5. Konfigurálja a tenant fájlszintű útvonalait.
6. Vezesse el a migráció ellenőrzését.
7. Váltassa át az utanalytik vagy DNS-t a validáció sikeres átadása után.

Ez az ordonrend megakadályozza, hogy részben szigetelt tartók kapjanak forrást anélkül, hogy a adatbázis írója, felhasználói adatok és fájlszintű rendszer készen állna.

## A szuverén ügyfélkezelési folyamatok (Sovereign customer management flows) {#sovereign-customer-management-flows}

Az Ultimate Multisite v2.13.0 verzióban az aktuális módban a fő webhelyen maradnak az ügyfélkezelési műveletek, amikor a szuverén mód be van kapcsolva. Egy tenant még mindig szigetelt WordPress telepítéssel futhat, de a hálózati számlázással, tagolással vagy közös fiók adatokkal függő ügyfélfelületű műveleteknek az ügyfelet a fő webhelyre kell visszavisnie, hogy ne próbálja végrehajtani a műveletet a tenant runtime-ban.

A fő webhelyi folyamat vonatkozik a következőkre:

- A fizetéshez és tervváltozásokhoz kapcsolódó műveletek.
- Az fiók áttekintése és az ügyfélprofil műveletek.
- A számlázási cím módosításai és a fizetési kezelő képernyők.
- A számla- és fizetési előzmények nézetei.
- A webhelykezelési műveletek, mint például webhelyek hozzáadása vagy törlése.
- A temapt váltás.
- A domain mappázása és a fődomain változtatása.

Amikor a vásárló egy ilyen akciót elindít egy szuverén tenyészből (sovereign tenant), az Ultimate Multisite létrehozza a megfelelő főhelyi URL-t és megőrzi a forrás tenyészetet visszatérő célként, ha biztonságos. Ez lehetővé teszi, hogy a vásárlók végzik a kezelhető akciót a hálózati adatokkal szemben, majd visszatérjenek a tenyész kontextusába anélkül, hogy duplázódna a számlázási vagy tagolási állapot szuverén adatbázisban.

Az operátorok számára gyakorlati szabály: tartsa elérhetően az főhelyi oldalon a számlázási, fiók, checkout, faktúra, template és domain-kezelési oldalakat a szuverén hálózatok számára. A tenyész dashboard-ok linkelhetnek ezekre az oldalakhoz, de az főhelyi oldal marad a művelet forrásának (source of truth).
