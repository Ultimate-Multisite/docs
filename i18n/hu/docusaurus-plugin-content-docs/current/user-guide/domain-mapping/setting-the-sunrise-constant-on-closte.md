---
title: A Sunrise konstans beállítása Closte-on
sidebar_position: 16
_i18n_hash: ce55527b126282d167eec4e3a8f824ea
---
# A Sunrise konstans beállítása true értékre Closte tárhelyen

Egyes tárhelyszolgáltatók biztonsági okokból zárolják a wp-config.php fájlt. Ez azt jelenti, hogy az Ultimate Multisite nem tudja automatikusan szerkeszteni a fájlt, hogy hozzáadja a domain mapping és egyéb funkciók működéséhez szükséges konstansokat. A Closte is ilyen szolgáltató.

A Closte azonban lehetőséget biztosít arra, hogy biztonságos módon adj hozzá konstansokat a wp-config.php fájlhoz. Csak kövesd az alábbi lépéseket:

## A Closte vezérlőpulton

Először [jelentkezz be a Closte fiókodba](https://app.closte.com/), kattints a Sites menüpontra, majd kattints a Dashboard linkre annál az oldalnál, amelyiken éppen dolgozol:

<!-- Screenshot unavailable: Closte dashboard showing Sites menu and Dashboard link -->

A képernyő bal oldalán számos új menüpont jelenik meg. Navigálj a **Settings** oldalra ennek a menünek a segítségével:

<!-- Screenshot unavailable: Closte left sidebar menu showing Settings option -->

Ezután a **Settings** oldalon keresd meg a WP-Config fület, majd az "Additional wp-config.php content" mezőt ezen a fülön:

<!-- Screenshot unavailable: Closte Settings page with WP-Config tab showing Additional wp-config.php content field -->

Az Ultimate Multisite telepítéséhez hozzá kell adnod a sunrise konstanst ehhez a mezőhöz. Egyszerűen írj egy új sort, és illeszd be az alábbi kódot. Ezután kattints a **Save All** gombra.

define('SUNRISE', true);

Ennyi az egész, minden készen áll. Térj vissza az Ultimate Multisite telepítővarázslóhoz, és frissítsd az oldalt a folyamat folytatásához.
