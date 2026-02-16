---
title: Automatikus keresés és csere a webhelysablonokban
sidebar_position: 8
_i18n_hash: ae72baba9155f43f2ca762880ece1e5c
---
# Automatikus keresés és csere a sablonoldalakon (v2)

_**Ez az útmutató a WP Ultimo 2.x verziójához készült.**_

Az Ultimate Multisite egyik legerősebb funkciója, hogy tetszőleges szöveges, szín- és legördülő mezőket adhatsz a regisztrációs űrlaphoz. Az így rögzített adatokat felhasználhatod a kiválasztott sablonoldal bizonyos részeinek előre kitöltésére. Amikor az új oldal létrejön, az Ultimate Multisite automatikusan lecseréli a helyőrzőket a regisztráció során megadott valódi adatokra.

Például a sablonjaidat helyőrzőkkel készítheted el. A helyőrzőket dupla kapcsos zárójelek közé kell tenni – {{placeholder_neve}}.

Ezután egyszerűen hozzáadhatsz egy megfelelő regisztrációs mezőt az adat bekéréséhez.

Az ügyfeled ezt a mezőt a regisztráció során kitöltheti.

Az Ultimate Multisite ezután automatikusan lecseréli a helyőrzőket az ügyfél által megadott adatokra.

## **A „helyőrzőkkel teli sablon" probléma megoldása**

Mindez remek, de felmerül egy csúnya probléma: a sablon oldalaid – amelyeket az ügyfeleid is meglátogathatnak – tele vannak csúnya, semmitmondó helyőrzőkkel.

Ennek megoldására lehetőséget kínálunk arra, hogy a helyőrzőkhöz ideiglenes értékeket állíts be. Ezeket az értékeket használjuk a sablon oldalakon a helyőrzők tartalmának kereséséhez és cseréjéhez, miközben az ügyfeleid böngészik az oldalt.

A sablon helyőrzők szerkesztőjét az **Ultimate Multisite > Beállítások > Oldalak** menüpont alatt éred el. Az oldalsávban kattints a Helyőrzők szerkesztése linkre.

![A Helyőrzők szerkesztése link az Oldalak beállítások oldalsávjában](/img/config/settings-sites.png)

Ez a helyőrzők tartalomszerkesztőjéhez visz, ahol hozzáadhatod a helyőrzőket és a hozzájuk tartozó tartalmakat.

![Helyőrzők tartalomszerkesztő a helyőrzők neveivel és értékeivel](/img/config/settings-sites.png)
