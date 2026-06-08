---
title: Vázkozási jegyzetek
sidebar_position: 9
_i18n_hash: e9f9d20e55608b81945ab7dfcf495fcb
---
# Kiadási jegyzetek

## Verzió 2.12.0 — Kiadás dátuma: 2026-05-15

*   **Új:** Hostinger (hPanel) támogatott tárhelyként kapható, tartomány mappolási integrációval együtt.
*   **Új:** A Site Exporter most hálózatimport csomagokat is fog kezelni, így a hálózat teljes méretű oldal helyreállítása egyszerűbb.
*   **Javítás:** A BCC (Blind Carbon Copy) hírlevélküldések most egy nem feltárt-fogadó-cím (undisclosed-recipients) fejlécet használnak, hogy megakadályozzák a küldemények címzéseinek feltárását.
*   **Javítás:** A tagság lejárat dátuma nem sérül többé, amikor nem dátum értékkel történő mentéskor.
*   **Javítás:** A Stripe tagságfrissítések most megfelelően törlik a kedvezményeket, anélkül, hogy hívják a már elavult deleteDiscount API-t.
*   **Javítás:** A tartomány mappolt oldalakon történő SSO (Single Sign-On) átirányítások most limitáltak, hogy elkerüljék az végtelen átirányítási ciklusokat.
*   **Javítás:** A beállítási varázsló képválasztása most megfelelően frissíti az alapsóból származó adatmodellt.
*   **Javítás:** A Site Exporter CLI most megőrzi a helyes alapértelmezett hálózatoldal kiválasztását.
*   **Optimalizálás:** A plugin csomagból eltávolítottuk a csomagolt wp-cli-t, ezzel csökkentve a plugin méretét.

## Verzió 2.11.0 — Kiadás dátuma: 2026-05-11

*   **Új:** Az oldalexportok most egy magstartható `index.php`-t tartalmaznak, így a ZIP fájlt friss tárhelyre telepíthetik anélkül, hogy külön plugin telepítésre lenne szükség.
*   **Új:** A hálózatexport lehetővé teszi az adminisztrátorok számára, hogy az összes aloldalt egyetlen archívumban exportálják a Site Export admin oldalon keresztül.
*   **Új:** Az „Allow Site Templates” (Oldaltematok engedélyezése) tervválasztó kapcsolójának használatát most egy fallback lánc biztosítja, így a tervkorlátok alapján megfelelően korlátozza a sablonok elérhetőségét.
*   **Új:** A checkout űrlap szerkesztő figyelmeztet, ha egy terméket hozzáadnak, de nem állították be a kötelező mezőket.
*   **Új:** Az Import/Export beállítások fülének most egyértelműen leírja a hatályát, és közvetlenül a Site Export eszközre linkel.

## Verzió 2.10.0 — Kiadás dátuma: 2026-05-05

*   **Új:** PayPal útmutató beállítási varázsló manuális hitelesítőadatok beviteléhez, OAuth kapcsolóval, hogy zökkenőmentes gateway konfigurációt biztosítson.
*   **Új:** A Template switch (Sablonváltás) ügyfélpanel újra lett kialakítva, és tartalmazza a jelenlegi sablon kártyáját, a tartós rácsot és a **Reset current template** (Jelenlegi sablon visszaállítása) gombot.
*   **Javítás:** A sablonváltás már nem függeszteti a felhasználói felületet (UI) az AJAX hiba esetén.
*   **Javítás:** A sablonváltás engedélyezési állapotai biztonságosak az illetéktelen hozzáférés ellen.
*   **Javítás:** Az oldalátírás (Site override) bemeneti adatai validálva kerülnek mentésre.
*   **Javítás:** A számlázási cím kérdése most megjelenik, ha az cím üres.
*   **Javítás:** Megoldva a PHP 8.1 null-to-string elavult értesítéseket.
*   **Javítás:** A Currents lazy-load (lényeges) hook-ja az init előtt fut, ezzel elkerülve az időzítési problémákat.
*   **Javítás:** A szűrő által meghatározott SSO útvonalát minden bejelentkezési folyamaton keresztül tartja be.
*   **Javítás:** Az üres oldal azonosító opciói megőrződnek mentéskor.

## Verzió 2.9.0 — Kiadás dátuma: 2026-04-30

*   **Új:** Egyoldalú export és import funkció hozzáadva a **Tools > Export & Import** alatt.
*   **Javítás:** Az Export ZIP fájlok most egy hitelesített letöltési végponten keresztül érkeznek.
*   **Javítás:** Javítottuk az függő export/import kérdésekben található SQL injekció kockázatot és query problémákat.
*   **Javítás:** A függő oldal nem publikálódik, ha az adminisztrátor kézzel ellenőrzi az ügyfél e-mail címét.
*   **Javítás:** Az itetlen `pending_site` rekordok megtisztítása, ha hiányzik a tagság.
*   **Javítás:** Javítottuk a beállítások navigációs zőslékét (padding) és a kereső anchor navigációját.
*   **Javítás:** A függő oldalak most az „All Sites” (Összes oldal) nézetben először jelennek meg.
*   **Javítás:** A képernyőkapás szolgáltató (mShots) User-Agent fejléce hozzáadása, hogy elkerülje a 403 hibaüzeneteket.
*   **Javítás:** Megoldva az import cron ütemrendi függőség-ciklusot.
*   **Javítás:** A tur ID-k (Túra azonosítók) standardizáltak az alpontokkal (underscore) az felhasználói beállítások kulcain.
*   **Optimalizálás:** A jobb kompatibilitás érdekében a ZipArchive-ot használjuk, helyette Alchemy/Zippy-t.

## Verzió 2.8.0 — Kiadás dátuma: 2026-04-29

*   **Új:** Az „Enable Jumper” (Ugró engedélyezése) kapcsoló hozzáadva az „Other Options” (Egyéb opciók) beállítási felülethez.
*   **Új:** A checkout űrlapok listázó táblázatához hozzáadva a státusz oszlop.
*   **Új:** Addon sunrise fájlöltő a felhasználói MU-plugin sunrise bővítményekhez.
*   **Optimalizálás:** Eltávolítottuk a hibaüzenet-jelentés opt-in beállítását a beállítások oldalról.
*   **Javítás:** A „Thank-you page” (Köszönetoldal) oldali kártyája — a kép most korlátozva és megfelelően stílusított linkekkel rendelkezik.
*   **Javítás:** A képernyőkapás szolgáltató thum.io-tól WordPress.com mShots-ra váltott.
*   **Javítás:** Az „Enable Registration” (Regisztráció engedélyezése) és „Default Role” (Alapértelmezett szerep) most helyes alapértelmezett értékeket állítanak be friss telepítéskor.
*   **Javítás:** A `get_site_url()` nem ad vissza üres értéket, még akkor sem, ha a tartomány egy port tartalmaz.
*   **Javítás:** A média fájlok klónozása most megfelelően másolódik, még akkor sem, ha az `copy_media` beállítás üres volt.
*   **Javítás:** Az objektum cache most megfelelően invalídálódik a hálózat-aktiválás sitemeta írása után.
*   **Javítás:** A tartomány automatikusan elsődlegesre emelkedik a DNS ellenőrzés során, ha 3 részes tartományról van szó.
*   **Javítás:** A függő tagság lemondása, ha lejárt fizetés tisztítása során történik.
*   **Javítás:** A jelszóerő ellenőző újraépül, ha a beágyazott bejelentkezési felületet bezárják.
*   **Javítás:** A végtelen oldalfrissítés megállt a köszönetoldalon, ha az oldal már létrehozva van.
*   **Javítás:** A WP core regisztrációs opció szinkronizálódik a plugin aktiválásakor és a beállítások mentésekor.
*   **Javítás:** Null lejáratvédő (Null expiration guard) hozzáadva a `calculate_expiration` funkcióhoz a PHP 8.4 kompatibilitás érdekében.
*   **Javítás:** A duplás regisztrációk blokkolva kerülnek, ha az ügyfél már aktív tagsággal rendelkezik.
*   **Javítás:** Null ellenőrzés hozzáadva a `date_expiration` értékhez a checkout folyamatban.
*   **Javítás:** A site provisioning (oldal biztosítás) megerősítve — korlátok, tagság-feltételezés, tartomány előemelkedése.
*   **Javítás:** A pre-install check (elő-telepítési ellenőrzés) státuszetikete most „NOT Activated” (Nem aktivált) mutat, ha a ellenőrzés sikertelen.
*   **Javítás:** A checkout tartományát használják az e-mail ellenőrzési URL-ekhez.
*   **Javítás:** Az automatikus bejelentkezés megáll, ha nincs jelszómező.
*   **Javítás:** Az ingyogi tagságok nem lejáratnak — életre szólóként kezeltek.
*   **Javítás:** Az e-mail ellenőrzési gát (gate) megőrzi az oldal publikálását, amíg az ügyfél nem ellenőrzi az e-mail címét.
*   **Javítás:** A SES v2 API végpont alapútja és azonosító útvonala javítva.
*   **Javítás:** A `wu_inline_login_error` hook-ot kiemittedük a pre-submit catch blokkban.
