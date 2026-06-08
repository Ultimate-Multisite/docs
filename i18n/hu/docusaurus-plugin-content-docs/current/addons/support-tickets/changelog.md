---
title: Támogatási jegyek változtathatatkönyve
sidebar_position: 99
_i18n_hash: 4ef7d3adaed4523e799ec78da9843a3d
---
# Támiratkozási jegyek Módosítási Naplója

### 1.0.4 - 2026-05-05
* Javítás: Eltávolítottam a `vendor/` könyvtárat a Git követéséből (ami már a `.gitignore`-ban szerepel), ezzel csökkentve a repózőrium méretét.
* Javítás: Teszteltem WordPress 7.0-ig.

### 1.0.3 - 2026-05-01
* Javítás: Elfogadja a null értékeket a null-értékkel kezelhető jegy modell-setter-ekben.
* Javítás: Minden jegyet globális, hálózat-szerte táblákban tárol, hogy megfelelően működjön a multisite környezetben.
* Javítás: Elrejtette a személyzet mezőket és javította a vásárló új jegy űrlapján lévő üres oldalra irányító átirányítást.
* Javítás: Felülírja az `undefined add_meta()` hívásokat a megfelelő `update_meta()` használatával a metadátum tárolásához.
* Javítás: Felülírja a regisztráció nélküli capability ellenőrzést a megfelelő `wu_view_all_support_tickets` használatával.
* Javítás: Hozzáadta a hiányzó AJAX kezelőket a jegy státusz-, hozzárendelési és gyors-szerkesztési műveletekhez.
* Javítás: Javította a személyzet válaszfelismerésének metódusnevét a jegy megtekintésénél.
* Javítás: Konszolidálja a duplika válaszkezelőket és egyezteti a nonce akcióneveket.
* Javítás: Hozzáadta a hiányzó frontend megtekintést a `[wu_submit_ticket]` shortcode-hoz.
* Javítás: Hozzáadta a hiányzó `user_id` oszlopot és javította a `Support_Ticket::get_user_id()` metódust.
* Javítás: Eltávolította a felesleges duplaköteget a prioritás szűrő opció tagból.
* Javítás: Hozzáadta a hálózatadmin jegykezelő panelét a super adminok számára.
* Javítás: Konszolidálja az admin CSS-ét egyetlen külső stíluslapba.
* Javítás: Eltávolítja a Beállítások almenüt a subsízes admin menüből.
* Javítás: Feltételezetten tölti be a frontend erőforrásokat csak a támasz jegy oldalain.
* Javítás: Kerüli a plugin autoloader-t, ha a Bedrock root autoloader már betöltötte a függőségeket.

### 1.0.2 - 2025-12-11
* Hozzáadva: Teljes jegy megtekintési funkciót az admin és a frontend számára.
* Hozzáadva: AJAX kezelő a jegy válaszküldésekhez.
* Hozzáadva: Támogatja a jegy válaszfunkciót megfelelő űrlapkezeléssel.
* Hozzáadva: Megfelelő értesítés megjelenítését a jegyküldések és válaszok esetén az admin felületen.
* Hozzáadva: Automatikus jegy társítás a jelenlegi felhasználóhoz a vásárlói önküldések esetén.
* Hozzáadva: Biztonsági fejlesztés, hogy megakadályozza a vásárlóknak a jegy tulajdonjogának átírását.
* Hozzáadva: Hiányzó helper funkciók (pl. `wu_format_date`, `wu_user_can_view_ticket` stb.).
* Hozzáadva: Megfelelő fájleltátaşítás és kezelés.
* Hozzáadva: E-mail értesítési rendszer a jegy válaszok és státuszváltozások esetén.
* Javítás: A jegy válasz űrlapja most tartalmazza a szükséges jegy ID-jét.
* Javítás: Megoldja az értesítés láthatósági problémákat az admin jegy megtekintésénél.
* Javítás: Javítja a támasz jegy funkciók szintaktikai hiba(kat).
* Javítás: Adatbázis szerkezet javítása megfelelő query és schema osztályokkal a válaszok és mellékletek számára.
* Javítás: Migráció a valódi tulajdonságokra (real properties) az attribútumok helyett a jegy modelljeiben.

### 1.0.1 - 2025-09-28
* Frissítve: A prefix-et `ultimate-multisite`-ra neveztetem át konzisztencia érdekében.
* Frissítve: A szövegdomén standardizációja.
* Javítás: Minor hibajavítások és fejlesztések.

### 1.0.0 - 2025-09-01
* Első kiadás
* Teljes jegykezelő rendszer
* Többrányú hozzáférés-kontroll
* Szálazott beszélgetési rendszer
* Fájleltátaşítási támogatás
* E-mail értesítési rendszer
* Admin és vásárlói felületek
* Statisztika és jelentéskészítés
