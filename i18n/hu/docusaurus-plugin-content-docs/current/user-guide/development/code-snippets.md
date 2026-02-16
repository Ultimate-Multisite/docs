---
title: Kódrészletek
sidebar_position: 1
_i18n_hash: 2284b14474d86f665fa7c84cc305553e
---
# Kódrészletek a v2-höz

A **WordPress** kódrészletei alapvetően olyan műveletek végrehajtására szolgálnak, amelyekhez egyébként egy kisebb, dedikált bővítményre lenne szükség. Az ilyen kódrészleteket a WordPress egyik alapfájljába vagy sablonfájljába helyezzük el (általában a sablon functions.php fájljába), de használhatók MU pluginként is.

Ebben a cikkben három olyan kódrészletet mutatunk be, amelyek az **Ultimate Multisite v2**-vel használhatók:

  * [**A Fiók menüpont pozíciójának módosítása**](#changing-the-position-of-the-account-menu-item)

  * [**Hogyan ellenőrizd, hogy a felhasználó adott csomaghoz tartozik-e és/vagy aktív előfizetéssel rendelkezik-e**](#how-to-check-if-the-user-is-under-a-given-plan-andor-has-an-active-subscription)

  * [**CORS-problémák megoldása betűikonoknál leképezett domainek esetén**](#fixing-cors-issues-with-font-icons-in-mapped-domains)

## A Fiók menüpont pozíciójának módosítása

A Fiók menüpont pozíciójának módosításához az ügyfeled Vezérlőpultján egyszerűen add hozzá az alábbi kódrészletet a fő oldalad aktív sablonjának functions.php fájljához. A kódrészletet elhelyezheted valamelyik mu-plugin vagy egyedi plugin fájlban is.

add_filter('wu_my_account_menu_position', function() { return 10; // Módosítsd ezt az értéket a menü kívánt pozíciójának beállításához.

## Hogyan ellenőrizd, hogy a felhasználó adott csomaghoz tartozik-e és/vagy aktív előfizetéssel rendelkezik-e

Hálózati adminisztrátorként szükséged lehet olyan egyedi függvények létrehozására, amelyek alapvető műveleteket hajtanak végre, vagy szolgáltatásokat/funkciókat tesznek elérhetővé az előfizetők vagy végfelhasználók egy kiválasztott csoportja számára az előfizetésük állapota és a választott csomag alapján.

Ezek az Ultimate Multisite beépített függvényei segítenek ebben.

Annak ellenőrzésére, hogy a felhasználó egy adott csomag tagja-e, használd ezt a függvényt:

wu_has_plan($user_id, $plan_id)

Az előfizetés aktív állapotának ellenőrzéséhez használd ezt a függvényt:

wu_is_active_subscriber($user_id)

Az alábbi példakód ellenőrzi, hogy az aktuális felhasználó egy adott csomaghoz tartozik-e (_Plan ID 50_), és hogy az előfizetése aktív-e.

$user_id = get_current_user_id();$plan_id = 50;if (wu_has_plan($user_id, $plan_id) && wu_is_active_subscriber($user_id)) { // A FELHASZNÁLÓ A CSOMAG TAGJA ÉS AZ ELŐFIZETÉSE AKTÍV, VÉGREHAJTANDÓ MŰVELETEK} else { // A FELHASZNÁLÓ NEM TAGJA A CSOMAGNAK -- VAGY -- AZ ELŐFIZETÉSE NEM AKTÍV, EGYÉB MŰVELETEK} // end if;

Vedd figyelembe, hogy a _**wu_has_plan**_ függvényhez szükség van egy "Plan ID"-ra a működéshez.

A csomag azonosítójának megtalálásához menj az **Ultimate Multisite > Products** menüpontra. Az egyes termékek azonosítója a táblázat jobb oldalán látható.

Fontos tudni, hogy a felhasználók csak **Csomagra** fizethetnek elő, Package-re vagy Service-re nem, mivel ezek csak kiegészítők a **Csomaghoz**.

![Terméklista a csomag azonosítókkal](/img/admin/products-list.png)

## CORS-problémák megoldása betűikonoknál leképezett domainek esetén
## CORS-problémák megoldása betűikonoknál leképezett domainek esetén

Egy domain aloldalhoz való leképezése után előfordulhat, hogy az oldal nem tudja betölteni az egyedi betűtípusokat. Ezt a szerver beállításaiban lévő cross-origin blokkolás okozza.

Mivel a betűtípus-fájlok szinte mindig közvetlenül a CSS-ből töltődnek be, a domain mapping bővítményünk nem tudja átírni az URL-eket a leképezett domain használatára az eredeti helyett, ezért a probléma megoldásához módosítanod kell a szerver konfigurációs fájljait.

Az alábbiakban találod az Apache és NGINX szerverekhez szükséges kódrészleteket. Ezek a módosítások a szerver konfigurációs fájlok (.htaccess fájlok és NGINX config fájlok) haladó szintű ismeretét igénylik. Ha nem érzed magabiztosnak magad ezeknek a módosításoknak az elvégzésében, küldd el ezt az oldalt a tárhelyszolgáltatód ügyfélszolgálatának, amikor segítséget kérsz.

### Apache

A .htaccess fájlodba add hozzá:

<FilesMatch ".(ttf|ttc|otf|eot|woff|font.css|css)$"> Header set Access-Control-Allow-Origin "*" 

### NGINX

A szerver konfigurációs fájlodban (a helye szerverenként változó) add hozzá:

location ~ .(ttf|ttc|otf|eot|woff|font.css|css)$ { add_header Access-Control-Allow-Origin "*";}
