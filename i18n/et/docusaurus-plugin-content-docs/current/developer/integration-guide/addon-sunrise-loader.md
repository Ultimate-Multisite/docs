---
title: Lisamooduli Sunrise-faililaadija
sidebar_position: 5
_i18n_hash: 2b24e0c6cf53f4dab0334db99a3b267b
---
# Addon Sunrise faili laadija

Ultimate Multisite 2.8.0 lisab lisamoodulite ja kohandatud MU-plugin integratsioonide jaoks sunrise-laienduste laadija, mis peavad töötama WordPress sunrise algkäivituse ajal ilma genereeritud `wp-content/sunrise.php` faili muutmata.

## Millal seda kasutada

Kasuta sunrise-laiendust siis, kui sinu integratsioon peab töötama enne tavaliste pluginate laadimist, näiteks kohandatud domeeniruuting, hostipõhine päringute käsitlemine või varased võrgustiku algkäivituse kohandused.

Tavaliste integratsioonide puhul eelista tavalisi WordPress pluginaid, MU-plugin'eid ja dokumenteeritud Ultimate Multisite konkse. Sunrise-kood töötab väga varakult ning peaks jääma väikeseks, kaitsvaks ja sõltuvustevabaks.

## Faili nimetamise tava

Loo PHP-fail nimega `sunrise.php` lisamooduli kataloogis, mille nimi algab tekstiga `ultimate-multisite-`:

```text
wp-content/plugins/ultimate-multisite-example-addon/sunrise.php
```

Laadija skaneerib pluginate kataloogi selle mustri järgi:

```text
wp-content/plugins/ultimate-multisite-*/sunrise.php
```

Sobivad failid laaditakse lisamooduli tee järgi tähestikulises järjekorras.

## Kuhu fail paigutada

Paiguta fail selle lisamooduli juurkataloogi, millele sunrise-käitumine kuulub:

```text
wp-content/
└── plugins/
    └── ultimate-multisite-example-addon/
        ├── ultimate-multisite-example-addon.php
        └── sunrise.php
```

Skaneerimine lahendatakse `WP_CONTENT_DIR` suhtes, mitte `WP_PLUGIN_DIR` praeguse väärtuse suhtes. See hoiab avastamise stabiilsena, kui mitmerentniklus või muu varane algkäivituse kood muudab sunrise ajal pluginate kataloogi konstante.

Ära muuda genereeritud `wp-content/sunrise.php` faili otse. Laadija võimaldab kohandatud koodil laiendada sunrise-käitumist ilma Ultimate Multisite'i paigaldatavat ja uuendatavat põhilist sunrise-faili hargnemata.

## Saadaolevad konksud ja filtrid

Lisamoodulite sunrise-failid käivitatakse pärast seda, kui Ultimate Multisite domeenide kaardistamine on laaditud, ja enne seda, kui WordPress käivitab `ms_loaded`. Selles punktis saab sunrise-fail:

- read or override `$current_site` and `$current_blog`;
- access `$wpdb` after database configuration has loaded;
- määrata vajaduse korral sunrise-aegseid konstante, näiteks `BLOG_ID_CURRENT_SITE`;
- lugeda Ultimate Multisite sunrise-abistaja olekut, sealhulgas ruutimisolekut, mida kasutavad mitmerentnikluse integratsioonid.

Ultimate Multisite käivitab `wu_sunrise_loaded` pärast seda, kui selle sunrise-laadija on lõpetanud. Kasuta seda toimingut koodi jaoks, mis peab käivituma pärast sunrise algkäivituse lõppu, kuid kuulub siiski sunrise-elutsüklisse.

Kutsu ainult funktsioone, mis on sunrise-faasis juba laaditud. Väldi andmebaasimahukat tööd, mallide renderdamist, HTTP-päringuid ja koodi, mis eeldab, et tavaline pluginate laadimisjärjekord on lõpetatud.

## Minimaalne näide

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

Pärast faili juurutamist laadi kaardistatud domeen ja kaardistamata põhisaidi URL, et kinnitada, et mõlemad teed käivituvad endiselt korrektselt.
