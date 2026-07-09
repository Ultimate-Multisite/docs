---
title: Rarayaasha Faylka Sunrise ee Dheeraadka
sidebar_position: 5
_i18n_hash: 2b24e0c6cf53f4dab0334db99a3b267b
---
# Addon Sunrise File Loader

Ultimate Multisite 2.8.0 wuxuu ku darayaa rareeye sunrise extension ah oo loogu talagalay add-ons iyo isdhexgelinno MU-plugin gaar ah oo u baahan inay socdaan inta lagu jiro WordPress sunrise bootstrapping iyada oo aan la tafatirin faylka `wp-content/sunrise.php` ee la abuuray.

## Goorta la isticmaalo

Isticmaal sunrise extension marka isdhexgelintaadu ay khasab tahay inay socoto ka hor inta aan plugin-yada caadiga ah la rarinin, sida hagidda domain gaar ah, maaraynta codsiyada u gaarka ah host, ama hagaajinnada hore ee network bootstrap.

Isdhexgelinnada caadiga ah, dooro WordPress plugins caadi ah, MU-plugins, iyo hooks-ka Ultimate Multisite ee la diiwaangeliyey. Koodhka Sunrise wuxuu socdaalaa aad u hore, waana inuu ahaadaa mid yar, is-difaac leh, oo aan ku tiirsanayn waxyaabo kale.

## Xeerka magacaabista faylka

Ku samee fayl PHP ah oo lagu magacaabo `sunrise.php` gudaha tusaha addon-ka oo magaciisu ku bilaabmo `ultimate-multisite-`:

```text
wp-content/plugins/ultimate-multisite-example-addon/sunrise.php
```

Rareeyuhu wuxuu iskaanka ku baaraa tusaha plugins-ka qaabkan:

```text
wp-content/plugins/ultimate-multisite-*/sunrise.php
```

Faylasha iswaafaqa waxaa loo raraa kala horreyn alifbeeti ah iyadoo lagu salaynayo dariiqa addon-ka.

## Meesha faylka la dhigo

Ku dhig faylka tusaha xididka ah ee addon-ka leh habdhaqanka sunrise:

```text
wp-content/
└── plugins/
    └── ultimate-multisite-example-addon/
        ├── ultimate-multisite-example-addon.php
        └── sunrise.php
```

Iskaanka waxaa loo xalliyaa marka loo eego `WP_CONTENT_DIR`, ee looma eego qiimaha hadda ee `WP_PLUGIN_DIR`. Tani waxay ka dhigtaa helitaanka mid deggan marka multi-tenancy ama koodh kale oo bootstrap hore ah uu beddelo constants-ka tusaha plugin inta lagu jiro sunrise.

Si toos ah ha u tafatirin faylka `wp-content/sunrise.php` ee la abuuray. Rareeyuhu wuxuu u oggolaanayaa koodh gaar ah inuu ballaariyo habdhaqanka sunrise iyada oo aan la farcin faylka sunrise core ee Ultimate Multisite rakibto oo cusboonaysiiso.

## Hooks iyo filters la heli karo

Faylasha addon sunrise waxay socdaan ka dib marka domain mapping-ka Ultimate Multisite la raro iyo ka hor inta WordPress uusan kicin `ms_loaded`. Marxaladdan fayl sunrise ah wuu awoodaa inuu:

- read or override `$current_site` and `$current_blog`;
- access `$wpdb` after database configuration has loaded;
- qeexo constants-ka waqtiga sunrise sida `BLOG_ID_CURRENT_SITE` marka loo baahdo;
- akhriyo xaaladda caawiyaha sunrise ee Ultimate Multisite, oo ay ku jirto xaaladda hagidda ee ay isticmaalaan isdhexgelinnada multi-tenancy.

Ultimate Multisite wuxuu kiciyaa `wu_sunrise_loaded` ka dib marka rareeyihiisa sunrise dhammeeyo. U isticmaal action-kaas koodhka ay tahay inuu socdo ka dib marka sunrise bootstrap dhammaado laakiin weli ka tirsan wareegga-nolosha sunrise.

Keliya wac functions horey loogu raray marxaladda sunrise. Ka fogow shaqo culus oo database ah, soo-bandhigga template, codsiyada HTTP, iyo koodhka u qaata in kala horreynta rarka plugin-ka caadiga ahi dhammaatay.

## Tusaale ugu yar

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

Ka dib markaad faylka geliso, rar domain la mapped gareeyay iyo URL main-site aan la mapped gareyn si aad u xaqiijiso in labada dariiqba weli si sax ah u bootstrap gareeyaan.
