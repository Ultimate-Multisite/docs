---
title: WooCommerce integráció változásnapló
sidebar_position: 99
_i18n_hash: 54658c4a8d52e85998183f523437d5a3
---
# WooCommerce Integration változásnapló

2.2.0 verzió - Megjelent: 2026-07-01
* Új: Az Ultimate Multisite adóösszegei mostantól külön WooCommerce díjtételként jelennek meg a checkout során, így az adóösszesítések fizetés előtt áttekinthetőbbek.
* Új: Hozzáadva egy választható "Suspend Memberships Immediately on Failed Renewals" beállítás és a `wu_woo_suspend_on_payment_failure` filter azokhoz az oldalakhoz, amelyek sikertelen megújítás esetén felfüggesztést szeretnének a WooCommerce Subscriptions újrapróbálkozási időablaka alatt.
* Javítás: Összehangoltuk azokat a WooCommerce Subscription állapotokat, amelyek sikertelen vagy helyreállított megújítások után eltérhettek az Ultimate Multisite tagságoktól.
* Javítás: Hozzáadtuk a WooCommerce áruház pénznemét az Ultimate Multisite pénznemlistához, amikor hiányzott.
* Javítás: Megőriztük az ügyfél számlázási adatait, amikor az előfizetőket a WooCommerce checkout oldalra irányítottuk.
* Fejlesztés: Kompatibilitás hozzáadva a Jetpack Autoloader 5-tel.
* Fejlesztés: Megtisztítottuk a kiadási csomag generálását, hogy a GitHub és marketplace zip fájlok elkerüljék a beágyazott előkészítő könyvtárakat és fejlesztési fájlokat.

2.0.6 verzió - Megjelent: 2026-01-16
* Fejlesztés: Az alap előfizetések bekerültek a kiegészítőbe. Már nincs szükség a Woocommerce Subscriptinos bővítményre.

2.0.5 verzió - Megjelent: 2026-01-09
* Fejlesztés: Fordítások betöltése a glotpress API-ból.
* Javítás: Végzetes hiba bizonyos oldalépítőkben.
* javítás: Végtelen átirányítás, amikor az ügyfél a fő oldal tagja.

2.0.4 verzió - Megjelent: 2025-11-14
* Hozzáadva: Fordítások sok további nyelvhez.
* Módosítva: Átnevezve erre: Ultimate Multisite: Woocommerce Integration.
* Hozzáadva: Kompatibilitás a Woocommerce 10.2.1-gyel.
* Hozzáadva: Kompatibilitás a Woocommerce Subscriptions 7.7.0-val.
* Javítás: Kompatibilitás a PHP 8.4-gyel
* Javítás: Átirányítási hiba, amikor nem létezik WC Account oldal.

2.0.3 verzió - Megjelent: 2025-08-13
* Módosítva: Automatikus frissítések engedélyezve az új marketplace-szel.

2.0.2 verzió - Megjelent: 2025-07-05
* Módosítva: Átnevezve erre: Multisite Ultimate: Woocommerce Integration.
* Hozzáadva: Kompatibilitás a Woocommerce 9.8.1-gyel.
* Hozzáadva: Kompatibilitás a Woocommerce Subscriptions 7.3.0-val.
* Javítás: Előfizetés lemondása az ügyfél által.
* Javítás: Végzetes hiba checkout block használatakor.
* Fejlesztés: Mostantól kompatibilis a Woocommerce nagy teljesítményű egyedi rendelési tábláival.
* Javítás: A WooCommerce checkout során történő lemondás továbbra is frissíthet egy tagságot.

2.0.1 verzió - Megjelent: 2023-08-09

* Hozzáadva: Kompatibilitás a Woocommerce 7.9.0-val.
* Hozzáadva: Kompatibilitás a Woocommerce Subscriptions 5.3.0-val.
* Hozzáadva: Tagságfrissítések támogatása.
* Hozzáadva: Értesítések a próbaidőszakokról és beállítási díjakról a Woocommerce-ben.
* Hozzáadva: Ultimate Multisite Woocommerce termékek azonosítása metaértékkel.
* Hozzáadva: Egyszeri javítás beillesztve az összes Ultimate Multisite-hoz kapcsolódó Woocommerce termék megjelölésére.
* Hozzáadva: Az Ultimate Multisite által létrehozott termékek eltávolítva a Woocommerce listából.
* Fejlesztés: Nem ismétlődő Woocommerce kedvezmény létrehozva a kosárra való alkalmazáshoz.
* Fejlesztés: Az ismétlődő kedvezmény visszaállítva a Woocommerce termékre.
* Fejlesztés: Ismétlődő kedvezménycímke hozzáadva a Woocommerce termékhez.
* Fejlesztés: Terméktípus biztosítása checkout során.
* Javítás: A tagsági állapot megőrizve a visszaminősítési folyamat során.
* Javítás: Ellenőrizve, hogy létezik-e előfizetés, a lemondási folyamat közbeni hibák elkerülése érdekében.
* Javítás: Hozzáadva az előfizetés kezdődátuma a Woocommerce subscriptions használatához.
* Belső: Új PHP 8.1 build folyamat megvalósítva.

2.0.0 verzió - Teljes újraírás.

* Hozzáadva: Lemondási módszer feldolgozása a woo előfizetés eltávolításához a gateway módosításakor vagy a tagság lemondásakor;
* Hozzáadva: Kezelő a tagságok visszaminősítéséhez és frissítéséhez;
* Fejlesztés: Woocommerce függőségek betöltése az ügyfélfrissítési űrlapon aloldalakon, az Account frissítésének lehetővé tételéhez;
* Fejlesztés: A Woocommerce kosár helyes betöltése, ha nem létezik;
* Fejlesztés: Annak biztosítása, hogy checkout feldolgozásakor a fő oldal tábláin legyünk;
* Fejlesztés: Az Ultimo megújítási rendelés a Woocommerce előfizetési rendelés értékén alapuljon, ne az utolsó fizetésen;
* Javítás: Ugrás a WU Membership gomb hivatkozására;
* Javítás: Ultimo rendelés fizetettként beállítása, amikor a Woocommerce subscriptions megújítása ki lett fizetve;
* Build: MPB hozzáadása builderként;

2.0.0-beta-5 verzió - Megjelent: 2022-01-21

* Belső: Hookok és filterek generátora hozzáadva;
* Belső: Ultimate Multisite stubs hozzáadva a fejlesztői életminőség javításához;
* Javítva: Több termék létrehozásának megakadályozása, amikor nem szükséges;

2.0.0-beta.4 verzió - 2021-09-23

* Javítás: annak megkövetelése, hogy a WooCommerce hálózati szinten legyen aktív, ne csak a fő oldalon;
* Fejlesztés: filter hozzáadva, hogy a kiegészítő mu-plugin-ként is használható legyen;

2.0.0-beta.3 verzió - 2021-05-28

* Javítás: a Dashboard hozzáférés-vezérlése túl agresszív volt;
* Fejlesztés: WooCommerce súgóhivatkozások hozzáadva az Ultimate Multisite felső menüjéhez;

2.0.0-beta.2 verzió - 2021-05-04

* Fejlesztés: függőben lévő fizetéseket hoz létre az Ultimo-ban WCS megújítási rendelés létrehozásakor;
* Fejlesztés: előre kitölti a számlázási mezőket az Ultimate Multisite ügyféladataival;
* Fejlesztés: visszahozza a számlázási mezőket a gateway-ekhez;

2.0.0-beta.1 verzió - 2021-05-04

* Kezdeti béta kiadás

-- Régi verziók --

1.2.6 verzió - 26/03/2020

* Javítva: Kisebb inkompatibilitás a WooCommerce Subscriptions újabb verzióival;

1.2.5 verzió - 26/08/2019

* Javítva: Hiba az előző kiadásban;

1.2.4 verzió - 22/08/2019

* Fejlesztve: Opció hozzáadva az azonnali átirányításhoz a WooCommerce checkout képernyőre az integráció után;

1.2.3 verzió - 26/05/2019

* Javítva: A WooCommerce fizetési e-mailje eltűnt bizonyos szélsőséges esetekben;

1.2.2 verzió - 27/02/2019

* Hozzáadva: Beállítási díjak támogatása a WooCommerce Subscription integrációban;

1.2.1 verzió - 17/11/2018

* Javítva: Kompatibilitási problémák az Ultimate Multisite 1.9.0 verzióval;

1.2.0 verzió - 10/09/2018

* Fejlesztve: Új frissítési URL a kiegészítőkhöz;
* Hozzáadva: Béta támogatás a WooCommerce Subscription-höz;

1.1.2 verzió - 11/02/2018

* Javítva: A fizetési hivatkozás dinamikusan generálódik, hogy reagáljon a WooCommerce endpointok változásaira;
* Fejlesztve: Mostantól kikényszerítjük a completed állapotot a rendeléseinknél, amikor a payment_completed meghívásra kerül, hogy biztosítsuk: a megújítási hookjaink akkor fussanak le, amikor kell;

Version 1.1.1 - 24/01/2018

* Javítva: Most azt is ellenőrzi, hogy a WooCommerce éppen aktiválva van-e a fő site-on;
* Javítva: Túlterhelések beépítve, hogy a rendeléslétrehozás tartalmazhassa az adókat;

Version 1.1.0 - 04/11/2017

* Javítva: Most az integrációs gomb címkéje ténylegesen a beállításoknak megfelelően változik. Ultimate Multisite 1.5.0 szükséges;
* Javítva: A WooCommerce Integration most akkor is működik, ha a WooCommerce nem hálózati szinten aktív, és csak a fő site-on van aktiválva;

1.0.0 - Első kiadás
