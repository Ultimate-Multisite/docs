---
title: Automatikus keresés és csere a webhelysablonokban
sidebar_position: 8
_i18n_hash: 0842f53505d24579010d91568e06ef68
---
# Automatikus keresés és csere a webhely-sablonokban (v2) {#auto-search-and-replace-in-site-templates-v2}

_**Ehhez az útmutatóhoz WP UItimo 2.x verzió szükséges.**_

Az Ultimate Multisite egyik legerősebb funkciója, hogy tetszőleges szöveg-, szín- és kiválasztási mezőket adhatsz hozzá a regisztrációs űrlaphoz. Miután ezeket az adatokat rögzítettük, felhasználhatjuk őket a kiválasztott webhely-sablon bizonyos részeinek előzetes kitöltésére. Ezután, amikor az új webhely közzétételre kerül, az Ultimate Multisite lecseréli a helyőrzőket a regisztráció során megadott tényleges információkra.

Például a sablon-webhelyeidet helyőrzőkkel készítheted el. A helyőrzőket dupla kapcsos zárójelek közé kell tenni - {{placeholder_name}}.

Ezután egyszerűen hozzáadhatsz egy megfelelő regisztrációs mezőt az adott adat rögzítéséhez

Az ügyfeled ezután ki tudja tölteni ezt a mezőt a regisztráció során.

Az Ultimate Multisite ezután automatikusan lecseréli a helyőrzőket az ügyfél által megadott adatokra.

## **A „helyőrzőkkel teli sablon” probléma megoldása** {#solving-the-template-full-of-placeholders-problem}

Mindez nagyszerű, de belefutunk egy csúnya problémába: a webhely-sablonjaink - amelyeket az ügyfeleink meglátogathatnak - tele vannak csúnya helyőrzőkkel, amelyek nem sokat mondanak.

Ennek megoldására lehetőséget kínálunk arra, hogy álértékeket állíts be a helyőrzőkhöz, és ezeket az értékeket használjuk a tartalmuk keresésére és cseréjére a sablon-webhelyeken, miközben az ügyfeleid látogatják őket.

A sablon helyőrző-szerkesztőjéhez úgy férhetsz hozzá, hogy a **Ultimate Multisite > Settings > Sites** menüpontra lépsz, legörgetsz a Webhely-sablon beállításai területhez, majd az **Edit Placeholders** linkre kattintasz.

![Webhely-sablon beállításai terület a Sites beállítási oldalon](/img/config/settings-sites-templates-section.png)

Ez a helyőrzők tartalomszerkesztőjéhez visz, ahol helyőrzőket és azok megfelelő tartalmát adhatod hozzá.

![Sablon helyőrző-szerkesztő belépési pontja](/img/config/settings-sites-templates-section.png)
