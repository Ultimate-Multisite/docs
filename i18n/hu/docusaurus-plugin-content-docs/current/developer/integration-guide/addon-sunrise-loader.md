---
title: Addon Sunrise File Loader
sidebar_position: 5
_i18n_hash: 2b24e0c6cf53f4dab0334db99a3b267b
---
# Addon Sunrise File Loader

Az Ultimate Multisite 2.8.0 egy sunrise bővítményöltőt (extension loader) ad hozzá az add-onokhoz és a benutzerdefini Ultimate Multisite-plugin integrációkhoz, amelyeknek a WordPress sunrise bootrapping alatt kell futniük, anélkül, hogy szerkeszteni kellene a generált `wp-content/sunrise.php` fájlt.

## Mikor kell használni

Sunrise bővítményöltőt akkor kell használni, ha az integrációjának a rendszeres pluginek betöltése előtt kell futnia, például benutzerdefini domain útvonalazás (custom domain routing), host-specifikus kéréskezelés vagy korai hálózat (network) bootrap beállítások.

A normál integrációk esetén előnyben részesíteni kell a rendszeres WordPress plugineket, MU-plugineket és az Ultimate Multisite dokumentált hook-jait. A sunrise kód nagyon korán fut, és kicsi, védelmi és függőségmentesnek kell maradnia.

## A fájl elnevezési konvenció

Létrehoz egy PHP fájlt, nevetve `sunrise.php`, egy add-on könyvtárában, amelynek neve `ultimate-multisite-` karakterekkel kezdődik:

```text
wp-content/plugins/ultimate-multisite-example-addon/sunrise.php
```

Az ööltő a pluginek könyvtárában keresi ezt a mintát:

```text
wp-content/plugins/ultimate-multisite-*/sunrise.php
```

A megeálló fájlokat az add-on útvonalának ABC sorrendjében tölti be.

## Hol helyezzük el a fájlt

Helyezze el a fájlt az add-on gyökérkönyvtárában, amely a sunrise viselkedéséért felelős:

```text
wp-content/
└── plugins/
    └── ultimate-multisite-example-addon/
        ├── ultimate-multisite-example-addon.php
        └── sunrise.php
```

A scan a `WP_CONTENT_DIR` relatív értelméhez viszonyít, nem a `WP_PLUGIN_DIR` aktuális értékéhez. Ez biztosítja a felfedezés stabilitását, amikor a multi-tenancy vagy más korai bootrap kódok a plugin könyvtár konstansait módosítják a sunrise alatt.

Ne szerkeszze közvetlenül a generált `wp-content/sunrise.php` fájlt. Az ööltő lehetővé teszi a benutzerdefini kódról, hogy bővítsen a sunrise viselkedését, anélkül, hogy a core sunrise fájlt forgatna (forking), amit az Ultimate Multisite telepít és frissít.

## Elérhető hook-ok és filterek

Az addon sunrise fájlok az Ultimate Multisite domain mapping betöltése után, és a WordPress által `ms_loaded` kiüsselése előtt futnak. Ebben a pontban egy sunrise fájl:

- elolvassa vagy átírja a `$current_site`-ot és `$current_blog`-ot;
- hozzáférhet a `$wpdb`-hez, miután a adatbázis konfigurációja betöltődött;
- definálhat sunrise-idő konstansokat, mint például a `BLOG_ID_CURRENT_SITE`, szükség esetén;
- elolvassa az Ultimate Multisite sunrise helper állapotát, beleértve a multi-tenancy integrációk által használt útvonalazási állapotot.

Az Ultimate Multisite a `wu_sunrise_loaded` action-t küldi ki, miután az ööltő befejezte a munkáját. Használja ezt az action-t olyan kódhoz, amelynek a sunrise bootrap befejeződését követően kell futnia, de még mindig a sunrise életciklusához tartozik.

Csak olyan függvényeket hívjon meg, amelyek már betöltődtek a sunrise fázisában. Kerülje el a adatbázis-intensive munkát, a template rendering-t, az HTTP kéréseket és azokat a kódot, amelyek feltételezik, hogy a normál plugin betöltési sorrendje befejeződött.

## Minimális példa

```php
<?php
/**
 * Sunrise extension for a custom host integration.
 */

if (! defined('ABSPATH')) {
    exit;
}

if (isset($current_blog) && $current_blog instanceof stdClass) {
    // Adjust early routing or constants before ms_loaded.
}
```

A fájl kihelyezése után töltse be egy mappolt domain-t és egy nem mappolt főoldal (main-site) URL-t, hogy megerősítse, hogy mindkét útvonal megfelelően bootrap-olja.
