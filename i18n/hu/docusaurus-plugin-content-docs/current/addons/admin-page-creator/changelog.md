---
title: Admin Oldalt Létáló Changelogja
sidebar_position: 99
_i18n_hash: 60442b433a1fe73d3624b115e3d153a5
---
# Admin Page Creator Módosítási Napló

### Version 1.9.0 - Kiadása 2026-01-18

* Javítva: Halosító hibaüzenetek az aktiválás során.
* Átalakítva: A tartalomforrás osztályai Singleton trait használatára, megfelelő szülőkonstruktor inicializációval.
* Javítva: Vue.js sablonösszetíthatási hibaüzenetek, amelyek megakadályozzák a tartalomtípus-választó megjelenítését.
* Javítva: Hiányzó Vue adat tulajdonságok (template_id, external_link_url_embedable, external_link_url_checking).
* Javítva: A TinyMCE szerkesztő nem inicializálódott megfelelően az oldal betöltésekor.
* Javítva: A Divi támogatási fájl nem töltődik automatikusan be a Composer segítségével.
* Javítva: Sérült PHP szintaxis a Divi támogatási osztályban.
* Jobbított: JavaScript eszközrendszer (asset) szervezése és minifikációja.
* Jobbított: Kompatibilitás a legújabb WordPress és oldaltíró verziókkal.

= Version: 1.8.8 - Kiadása 2025-09-28

* A prefix nevének megváltoztatása ultimate-multisite-re; a szövegdomén (text domain) frissítése; verziószám növelése.

### Version 1.8.7 - 2023. áprilisa 10-e

* Javítva: Halosító hiba az új admin oldal hozzáadásának kísérleténél;
* Javítva: Konfliktus az Oxygen stíluslap prefix-ével;

### Version 1.8.6 - 2023. szeptember 8-a

* Hozzáadva: Opció hozzáadása a fő oldal vagy az aktuális aloldal adatai megjelenítéséhez.
* Hozzáadva: Támogatás hozzáadása a WordPress Block Editor-nek (Gutenberg).
* Javítva: Javította a Brizy oldaltíró eszközök (assets) nem töltődésének problémáját.

### Version 1.8.5 - 2020. december 12-e

* Javítva: Probléma az „Oldal opciók” (Screen Options) beállításával, amikor a menü elrejtése nem távolítható el;

### Version 1.8.4 - 2020. november 11-e

* Javítva: Támogatás a Multisite Ultimate v2-nek;

### Version 1.8.3 - 2020. október 1-je

* Javítva: Inkompatibilitások az előző verziójú Beaver Builder-rel;
* Javítva: Margin (szélsőség) eltérések a WP 5.5-el;

### Version 1.8.2 - 2020. szeptember 21-e

* Javítva: Kis inkompatibilitások a WP 5.5-el;

### Version 1.8.1 - 2020. augusztus 5-e

* Javítva: Inkompatibilitás a Brizy 2.0-rel;
* Javítva: Kis teljesítménybeli problémák a menülisták létrehozásakor;

### Version 1.8.0 - 2020. április 27-e

* Javítva: Értesítések, amelyek elrejtve maradnak a felső sáv alatt, ha nincs margin mód kiválasztva;
* Hozzáadva: A testresoldal (custom pages) most több WordPress admin felső és aloldalt is helyettesíthet egyszerre;
* Hozzáadva: Az adminok most elrejtik az admin oldalt a WP Admin Pages PRO segítségével;

### Version 1.7.9 - 2020. április 1-je

* Javítva: A Brizy 1.10.118 és eminger verziója megszakítja az SVG támogatást az admin oldalakon;

### Version 1.7.8 - 2020. március 26-sője

* Javítva: Elkerülni hiba (Escaping error) megszakítja a szerkesztő oldalt a francia nyelven használva;

### Version 1.7.7 - 2020. március 4-e

* Javítva: Kis inkompatibilitás a Brizy Builder-rel;
* Jobbított: Frissítve a Freemius SDK-t 2.3.2-re;

### Version 1.7.6 - 2020. február 10-e

* Javítva: Az Admin Oldal szerkesztő gombja nem működik a Dashboard Widget-ekön;
* Javítva: Kis inkompatibilitás az Astra-val;
* Javítva: A Brizy új verziója megszakítja a kompatibilitást;

### Version 1.7.5 - 2019. december 14-e

* Javítva: Hozzáadva egy új „szélvédő” (edge-case) kezelőt a menüelemek kitöltéséhez a „Helyettes Oldal” (Replace Page) opcióban;
* Javítva: Az Elementor betűtípusai nem működnek;
* Jobbított: Frissítve a Freemius SDK-t a sensitive információk elrejtésére az Account oldalon;

### Version 1.7.4 - 2019. november 29-e

* Javítva: Inkompatibilitás a WooCommerce Memberships-szel;
* Javítva: Az Oxygen Builder tab komponensének nem működése;
* Javítva: A Beaver Themer nem működik;

### Version 1.7.3 - 2019. július 12-e

* Javítva: Az oldalak eltűnnek, ha az anyaoldalt más admin oldaltípusra alakítjuk;
* Jobbított: Jobb listatáblázó elválasztók az Admin Oldaltípusok között;
* Jobbított: Biztonsági áttekintés az egész plugin kódalapján;
* Jobbított: Megjegyzés a Separator tab figyelmeztetéséről, ha a funkció nem elérhető egy adott menü/tartalomforrás típus számára;

### Version 1.7.2 - 2019. július 1-je

* Javítva: Frissítve a Freemius SDK verzióját 2.3.0-ra;
* Javítva: Inkompatibilitási probléma a Flywheel-rel;

### Version 1.7.1 - 2019. június 27-e

* Javítva: A Welcome Widget most minden szerepkörnek (role) jelenik meg;
* Javítva: Az „Oldal opciók” (Screen Option) elrejtése/megjelenítése nem adódik hozzá, ha a menüet a https://docs.wpadminpagespro.com/knowledge-base/hiding-wp-admin-pages-pro-from-your-users/ dokumentált szűrővel rejtik el.
* Jobbított: Az Admin Oldal menüjének elrejtése most elrejti a Beaver Builder mentett sablonlistájából létrehozott sablonokat is a builder UI-n;
* Hozzáadva: Opciók a bulk (tömeges) aktiválásra és deaktiválásra az admin oldalak esetén;
* Hozzáadva: Opció az oldalak megjelenítésére a fő oldalon is;
* Hozzáadva: Opció a felső és almenü címkéinek átnevezésére a „Helyettes mód” (Replace mode) esetén;

### Version 1.7.0 - 2019. június 4-e

* Javítás: Problémák az Oxygen sablonokkal kapcsolatban, amelyek nem jelennek meg;
* Hozzáadva: Támogatás a Widget létrehozásához!

### Version 1.6.1 - 2019. május 22-e

* Javítva: Tippogási hibák;
* Javítva: Az almenü oldalak átírása az előző almenü elemekre ugyanazon az rendszám értékkel;
* Javítva: A duplikáció most visszaállítja a duplikált oldal slug-ját;
* Jobbított: Frissítve a pt_BR és es_ES po fájlokat;
* Jobbított: A listatábla most a benutzer oldaltípusainak nevét is listázza az anyaoldalakként;

### Version 1.6.0 - 2019. május 21-e

* Hozzáadva: Az külső linkek most iframe betöltést is támogatnak;

### Version 1.5.5 - 2019. május 17-e

* Javítva: Figyelmeztetésüzenet, amely kiemelkedik, ha egy oldalt törölték vagy duplikálták;
* Javítva: Az engedélyezési beállítások nem alkalmazhatók az Adminokra;

### Version 1.5.4 - 2019. május 8-a

* Javítva: Inkompatibilitások a Sliced Invoices-szel;
* Javítva: Kis probléma az Oxygen-nel;
* Javítva: A „Helyettes admin oldaltípus” (Placeholder) mezője nem távolítható el a key-up eseményen;

### Version 1.5.3 - 2019. május 3-a

* Javítva: Inkompatibilitás az Advanced Custom Field opciós oldallal;
* Hozzáadva: Opció a konkrét felhasználók meghatározásához mint a custom admin oldalak célpontjai;

### Version 1.5.2 - 2019. április 30-a

* Javítva: Inkompatibilitások a Brizy újabb verzióival;
* Hozzáadva: Spanyolul szövegtöltés – John Rozzo kedjének. Köszönjük, John!
* Hozzáadva: Beta támogatás az Oxygen Builder-rel;

### Version 1.5.1 - 2019. április 15-e

* Javítva: Probléma a placeholder-ekkel a Normal és HTML szerkesztőben;
* Javítva: Az Admin Oldalak nem jelennek meg a Tools -> Export menüpont alatt;
* Javítva: A szkriptek és stílusok csak saját oldalakon töltődnek be;
* Hozzáadva: Super Adminok most duplikálhatnak Admin Oldaltípusokat;

### Version 1.5.0 - 2019. március 29-e

* Javítva: Kis hibák, amelyeket a Sentry fogadott;
* Javítva: A törlő gomb nem működik a „Szerkesztés Admin oldal” képernyőjén;
* Jobbított: Megváltoztattuk a BeaverBuilder gombját, hogy világos legyen, hogy a Standard BB licenziát is támogatjuk;
* Hozzáadva: Az adminok most beállíthatják az almenüek rendjét is;
* Hozzáadva: A „Helyettes oldal” módja most minden elérhető menüelemet támogat;

### Version 1.4.0 - 2019. február 14-e (független) & 2019. február 27-e (add-on)

* Hozzáadva: Indításként független pluginként a https://wpadminpagespro.com oldalon
* Hozzáadva: Opció az Admin Oldal menüpont eltávolítására a menüből a létrehozási folyamat végén;
* Hozzáadva: Opció az admin értesítések eltávolítására az admin oldalakról;
* Hozzáadva: Tartalomfeldolgozás, így olyan placeholder-eket helyezhetnek el, mint {{user:first_name}}, és automatikusan cserélhetőek a felhasználó first_name meta mezővel;
* Hozzáadva: Inline Szerkesztő;
* Hozzáadva: Konszolidált tartalomforrás anyaosztálya, hogy a jövőben könnyű legyen új Page Builder/Tartalomforrást adni hozzá;
* Hozzáadva: Támogatás külső URL-ekhez;

### Version 1.3.0 - 2019. január 15-e

* Javítva: Az Admin Oldalak nem jelennek meg a főoldalon a multisite környezetekben;
* Jobbított: Eltávolítottuk a Multisite Ultimate custom post type-okat az aloldalak export képernyőjéről;
* Hozzáadva: Felső sáv gyors műveletekkel a hálózat adminok számára a létrehozási oldalakon;
* Hozzáadva: NAGY! Elementor támogatás!
* Hozzáadva: NAGY! Brizy támogatás!

### Version 1.2.1 - 2018. november 17-e

* Javítva: A plugin kompatibilizálása a Multisite Ultimate 1.9.0-l;

### Version 1.2.0 - 2018. szeptember 10-e

* Hozzáadva: PHP támogatás hozzáadva, ha a WU_APC_ALLOW_PHP_PROCESSING beállítása true-ra van a wp-config.php fájlban. Ez nem használja PHP eval-et, de még így is biztonsági résekhez vezethet. Használja óvatosan;
* Jobbított: Add-on plugin frissítője;
* Jobbított: Új URL az frissítő szerverhez;

### Version 1.1.2 - 2018. augusztus 16-sője

* Javítva: Kis probléma a WP Engine-nel;

### Version 1.1.1 - 2018. augusztus 16-sője

* Javítva: Az engedélyek nem alkalmazhatók megfelelően a helyettes oldalakra;

### Version 1.1.0 - 2018. augusztus 15-e

* Hozzáadva: A Beaver Builder sablonok most támogatottak! Kedvenc oldaltíróját használhatja a custom admin oldalak létrehozásához;
* Hozzáadva: Most lehetséges a WordPress alapértelmezett admin oldala tartalmának helyettesítése is;
* Hozzáadva: Most lehetséges a létrehozott tartalom hozzáadása a WordPress alapértelmezett admin oldala tetejére vagy aljára is;

### 0.0.1
- Első kiadás
