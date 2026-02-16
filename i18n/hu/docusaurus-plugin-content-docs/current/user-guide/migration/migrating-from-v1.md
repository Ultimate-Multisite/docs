---
title: Migrálás a V1-ről
sidebar_position: 17
_i18n_hash: 1deefaf09206b741c89be6666fe2143c
---
# Átállás az 1.x verzióról

## Az Ultimate Multisite az eredeti 1.x verziócsaládról átállt a 2.x verziócsaládra.

Az Ultimate Multisite 2.0 és újabb verziói a kódbázis teljes újraírását jelentik, ami azt jelenti, hogy nagyon kevés közös elem van a régi és az új verzió között. Emiatt az 1.x verzióról a 2.x verzióra való frissítéskor az adatokat át kell alakítani egy olyan formátumra, amelyet az új verziók értelmezni tudnak.

Szerencsére az Ultimate Multisite 2.0+ **beépített migrálóval rendelkezik**, amely képes felismerni a régi verzió adatait és átalakítani azokat az új formátumra. Ez az átállás a 2.0+ verzió **Telepítő varázslója** során történik.

Ebben a leckében bemutatjuk, hogyan működik a migráló, mit tegyél hiba esetén, és hogyan hárítsd el a folyamat során esetlegesen felmerülő problémákat.

_**FONTOS: Mielőtt elkezdenéd a frissítést az 1.x verzióról a 2.0 verzióra, mindenképpen készíts biztonsági mentést a webhelyed adatbázisáról.**_

## Első lépések

Az első lépés a bővítmény .zip fájljának letöltése és a 2.0 verzió telepítése a hálózati admin vezérlőpulton.

Miután [telepítetted és aktiváltad a 2.0 verziót](../getting-started/installing-ultimate-multisite.md), a rendszer automatikusan felismeri, hogy a Multisite-od a korábbi verzión fut, és a bővítmény oldalának tetején ez az üzenet jelenik meg.

_**MEGJEGYZÉS:** Ha az Ultimate Multisite 1.x telepítve van a Multisite-odon, lehetőséged lesz lecserélni a bővítményt az imént letöltött verzióra. Kattints a **Replace current with uploaded** gombra._

<!-- Screenshot unavailable: Plugin page showing option to replace v1 with uploaded v2 version -->

A következő oldalon láthatod, hogy milyen korábbi kiegészítők vannak telepítve az 1.x verzió mellett. Az oldal tartalmazza azt is, hogy a használt verzió kompatibilis-e a 2.0 verzióval, vagy az átállás után telepítened kell-e a kiegészítő frissített verzióját.

<!-- Screenshot unavailable: Message on the top of the plugins page about updating to v2.0, with list of add-ons that need updating -->

Ha készen állsz a folytatásra, kattints a **Visit the Installer to finish the upgrade** gombra.

<!-- Screenshot unavailable: Button saying Visit the Installer to finish the upgrade -->

Ezután a telepítő varázsló oldalára jutsz, ahol üdvözlő üzeneteket láthatsz. Csak kattints a **Get Started** gombra a következő oldalra lépéshez.

<!-- Screenshot unavailable: Setup Wizard welcoming page with Get Started button -->

A **Get Started** gombra kattintás után a Telepítés előtti ellenőrzések oldalra kerülsz. Itt láthatod a Rendszerinformációkat és a WordPress telepítést, valamint azt, hogy megfelel-e az **Ultimate Multisite követelményeinek**.

<!-- Screenshot unavailable: Pre-install Checks page showing system requirements confirmation -->

A következő lépés az Ultimate Multisite licenckulcs megadása és a bővítmény aktiválása. Ez biztosítja, hogy minden funkció, beleértve a kiegészítőket is, elérhető legyen a webhelyeden.

<!-- Screenshot unavailable: License activation page with license key input and Agree and Activate button -->

A kulcs megadása után kattints az **Agree & Activate** gombra.

A licenc aktiválása után a következő oldalon az **Install** gombra kattintva megkezdheted a tényleges telepítést. Ez automatikusan létrehozza a 2.0 verzió működéséhez szükséges fájlokat és adatbázist.

<!-- Screenshot unavailable: Installation page showing what will be updated with Install button -->

## Most jön az átállás

A migrálónak van egy beépített biztonsági funkciója, amely átvizsgálja a teljes multisite-ot, hogy megbizonyosodjon arról, hogy az összes Ultimate Multisite adatod problémamentesen átállítható. Kattints a **Run Check** gombra a folyamat elindításához.

<!-- Screenshot unavailable: Migration page with Run Check button to verify data can be converted -->

Az ellenőrzés futtatása után két lehetséges eredmény van: **hibával** vagy **hiba nélkül**.

### Hibával

Ha hibaüzenetet kapsz, fel kell venned a kapcsolatot az ügyfélszolgálatunkkal, hogy segítsenek a hiba kijavításában. Amikor jegyet nyitsz, mindenképpen **mellékeld a hibanaplót**. Letöltheted a naplót, vagy kattinthatsz a „contact our support team" linkre. Ez megnyitja a súgó widgetet az oldal jobb oldalán, ahol a mezők már előre ki vannak töltve, és a leírás alatt megtalálhatók a hibanaplók.

_**Mivel a rendszer hibát talált, nem tudsz továbblépni a 2.0 verzióra való átállással. Visszaállhatsz az 1.x verzióra, hogy a hálózatod tovább működjön, amíg a hibát ki nem javítják.**_

### Hiba nélkül

Ha a rendszer nem talál hibát, egy sikeres üzenetet látsz, és az oldal alján megjelenik egy **Migrate** gomb, amellyel folytathatod az átállást. Ezen az oldalon emlékeztetünk, hogy a továbblépés előtt készíts biztonsági mentést az adatbázisodról, amit erősen ajánlunk. Ha már van biztonsági mentésed, kattints a **Migrate** gombra.

<!-- Screenshot unavailable: Migration page showing success message and backup recommendation -->

<!-- Screenshot unavailable: Migrate button on the bottom-right corner -->

Ennyi az egész!

Folytathatod a Varázsló beállítását a logó és egyéb dolgok frissítéséhez a hálózatodon, vagy elkezdheted felfedezni az Ultimate Multisite 2.0 verzió menüjét és új felületét. Fedezd fel bátran és érezd jól magad!
