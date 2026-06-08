---
title: WooCommerce Integráció Mű változtathatatkönyve
sidebar_position: 99
_i18n_hash: b34d062c52ab13dbab02f7162f01e641
---
# WooCommerce Integrációs Újraírólapja

Version 2.0.6 - Kiadás dátuma: 2026-01-16
* Javítás: Az addonba fogadta a temel előfizetéseket. Nem igényel többé a Woocommerce Subscriptions extension-et.

Version 2.0.5 - Kiadás dátuma: 2026-01-09
* Javítás: A fordításokat a glotpress API-ről tölti be.
* Javítás: Halos hiba egyes page builder-ekben.
* Javítás: Tartalmazó felhasználó esetén végtelen átirányítás.

Version 2.0.4 - Kiadás dátuma: 2025-11-14
* Hozzáadva: Sok sok más nyelvhez való fordítások.
* Megváltoztatva: Ultimate Multisite: Woocommerce Integration néven.
* Hozzáadva: Kompatibilitás a Woocommerce 10.2.1-lel.
* Hozzáadva: Kompatibilitás a Woocommerce Subscriptions 7.7.0-lel.
* Javítás: Kompatibilitás a PHP 8.4-el.
* Javítás: Átirányítás, de akkor, ha nincs WC fiókoldal.

Version 2.0.3 - Kiadás dátuma: 2025-08-13
* Megváltoztatva: Automatikus frissítést engedélyezett új piacon keresztül.

Version 2.0.2 - Kiadás dátuma: 2025-07-05
* Megváltoztatva: Multisite Ultimate: Woocommerce Integration néven.
* Hozzáadva: Kompatibilitás a Woocommerce 9.8.1-lel.
* Hozzáadva: Kompatibilitás a Woocommerce Subscriptions 7.3.0-lel.
* Javítás: Előfizetés leiratkozása a felhasználó által.
* Javítás: Halos hiba a checkout blokk használatakor.
* Javítás: Most kompatibilis a Woocommerce magas teljesítményű, egyedi rendelési táblággal.
* Javítás: A WooCommerce checkout-on történő leiratkozás még előfizetés szint emelésére is alkalmas.

Version 2.0.1 - Kiadás dátuma: 2023-08-09

* Hozzáadva: Kompatibilitás a Woocommerce 7.9.0-lel.
* Hozzáadva: Kompatibilitás a Woocommerce Subscriptions 5.3.0-lel.
* Hozzáadva: Támogatás a tagság frissítéséhez.
* Hozzáadva: Felügyeleti üzenetek a próba és beállítási díjakról a Woocommerce-ban.
* Hozzáadva: Az Ultimate Multisite Woocommerce termékek azonosítása meta értékkel.
* Hozzáadva: Egy egyszeri javítás került beépítésre az Ultimate Multisite kapcsolatos összes Woocommerce termékére.
* Hozzáadva: Az Ultimate Multisite által létrehozott termékek eltávolítása a Woocommerce listából.
* Javítás: Nem ismétlődő Woocommerce kedvezmény létrehozása a kosárba alkalmazandóként.
* Javítás: Az ismétlődő kedvezmény visszaállítása a Woocommerce termékre.
* Javítás: Az ismétlődő kedvezmény címkéje hozzáadása a Woocommerce termékhez.
* Javítás: Biztosítja a termék típust a checkout során.
* Javítás: Megtartja a tagsági státuszt a szint csökkentési folyamat során.
* Javítás: Ellenőrizte, hogy létezik-e előfizetés a leiratkozási folyamat során hiba elkerülése érdekében.
* Javítás: Hozzáadta az előfizetés kezdő dátumát a Woocommerce előfizetésekhez használhatóként.
* Belső: Bevezett egy új PHP 8.1 build folyamatot.

Version 2.0.0 - Teljes átírás.

* Hozzáadva: A leiratkozási folyamat módszere a woo előfizetés eltávolítására, ha a gateway-et vagy a tagságot változtatják/leiratkoznak;
* Hozzáadva: Kezelő funkció a tagság szint csökkentéséhez és emeléséhez;
* Javítás: Tölti be a woocommerce függőségeket a felhasználó frissítő űrlapon a subsite-okon fiókfrissítéshez;
* Javítás: Javítja a Woocommerce kosár töltését, ha nem létezik;
* Javítás: Biztosítja, hogy a checkout folyamat során a főoldal táblággal dolgozzunk;
* Javítás: A Ultimo megújítási rendelését a Woocommerce előfizetési rendelési érték alapján, nem az utolsó fizetéstől függően kell képezni;
* Javítás: A WU Membership gomb linkére irányítás;
* Javítás: Beállítja az Ultimo rendelést alsztható státuszra, ha a Woocommerce előfizetés megújítása fizetős volt;
* Build: Hozzáadva az MPB-t buildernek.

Version 2.0.0-beta-5 - Kiadás dátuma: 2022-01-21

* Belső: Hozzáadva a hooks és filter generátort;
* Belső: Hozzáadva az Ultimate Multisite stubsét a fejlesztői életminőség javítására;
* Javítás: Megakadályozza a több termék létrehozását, ha nem szükséges;

Version 2.0.0-beta.4 - 2021-09-23

* Javítás: A WooCommerce-hoz kötelező lett a hálózat aktív állapotának ellenőrzése, nem csak a főoldal aktív állapotának;
* Javítás: Hozzáadva egy filtert, amely lehetővé teszi az addon használatát mu-pluginként.

Version 2.0.0-beta.3 - 2021-05-28

* Javítás: A dashboard hozzáférésének ellenőrzése túl agresszív volt;
* Javítás: Hozzáadva WooCommerce segítségnyújtási linkeket az Ultimate Multisite felső menüjéhez;

Version 2.0.0-beta.2 - 2021-05-04

* Javítás: Létrehoz pending fizetéseket az Ultimo-on a WCS megújítási rendelés létrehozásakor;
* Javítás: Elő-tölti a számlázási mezőket az Ultimate Multisite felhasználói adatai alapján;
* Javítás: Visszaadja a számlázási mezőket a gateway-ekhez;

Version 2.0.0-beta.1 - 2021-05-04

* Kezdeti beta kiadás

-- Örökségi verziók --

Version 1.2.6 - 2020/03/26

* Javítás: Kis kompatibilitási probléma a WooCommerce Subscriptions újabb verzióival;

Version 1.2.5 - 2019/08/26

* Javítás: Hiba az előző kiadásban;

Version 1.2.4 - 2019/08/22

* Javítás: Hozzáadva az opciót, hogy az integráció után azonnal átirányítsa a WooCommerce checkout képernyőre;

Version 1.2.3 - 2019/05/26

* Javítás: A WooCommerce fizetési e-mailje egyes speciális esetekben eltűnt;

Version 1.2.2 - 2019/02/27

* Hozzáadva: Támogatás a beállítási díjak kezelésére az WooCommerce Subscription integrációban;

Version 1.2.1 - 2018/11/17

* Javítás: Kompatibilitási problémák az Ultimate Multisite 1.9.0 verziójával;

Version 1.2.0 - 2018/09/10

* Javítás: Új frissítési URL az addonokhoz;
* Hozzáadva: Beta támogatás a WooCommerce Subscription-hoz;

Version 1.1.2 - 2018/02/11

* Javítás: A Pay link dinamikusan generálódik, hogy reagáljon a WooCommerce endpoint-ek változásaira;
* Javítás: Most kötelezővé válik a completed státuszunk a payment_completed híváskor, hogy biztosítsuk, hogy a megújítási hooksunk akkor futjanak, amikor kell;

Version 1.1.1 - 2018/01/24

* Javítás: Most ellenőrzi, hogy a WooCommerce csak aktiválódott-e a főoldalon;
* Javítás: Beágyazott over-loading, hogy lehetővé tegye a rendelés létrehozását adókkal együtt;

Version 1.1.0 - 2017/11/04

* Javítás: Most az integrációs gomb címkéje ténylegesen változik, hogy tükrözze a beállításokat. Követelmény: Ultimate Multisite 1.5.0;
* Javítás: A WooCommerce Integration most működik, még akkor is, ha a WooCommerce nem hálózaton aktív, és csak a főoldalon van aktiválva;

1.0.0 - Kezdeti kiadás
