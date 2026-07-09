---
title: Għodda għat-Tagħbija tal-Fajl Sunrise tal-Estensjoni
sidebar_position: 5
_i18n_hash: 2b24e0c6cf53f4dab0334db99a3b267b
---
# Addon Sunrise File Loader

Ultimate Multisite 2.8.0 iżid loader ta' estensjonijiet sunrise għal add-ons u integrazzjonijiet custom ta' MU-plugin li jeħtieġu jaħdmu waqt il-bootstrapping ta' WordPress sunrise mingħajr ma jiġi editjat il-fajl iġġenerat `wp-content/sunrise.php`.

## Meta tużah

Uża estensjoni sunrise meta l-integrazzjoni tiegħek trid taħdem qabel ma jitgħabbew plugins regolari, bħal routing ta' domain custom, immaniġġjar ta' talbiet speċifiċi għall-host, jew aġġustamenti bikrija tal-bootstrap tan-network.

Għal integrazzjonijiet normali, ippreferi plugins regolari ta' WordPress, MU-plugins, u l-hooks dokumentati ta' Ultimate Multisite. Il-kodiċi sunrise jaħdem kmieni ħafna u għandu jibqa' żgħir, difensiv, u mingħajr dipendenzi.

## Konvenzjoni tal-ismijiet tal-fajls

Oħloq fajl PHP bl-isem `sunrise.php` f'direttorju ta' addon li ismu jibda b'`ultimate-multisite-`:

```text
wp-content/plugins/ultimate-multisite-example-addon/sunrise.php
```

Il-loader jiskennja d-direttorju tal-plugins għal dan il-mudell:

```text
wp-content/plugins/ultimate-multisite-*/sunrise.php
```

Fajls li jaqblu jitgħabbew f'ordni alfabetika skont il-path tal-addon.

## Fejn tqiegħed il-fajl

Qiegħed il-fajl fid-direttorju root tal-addon li għandu l-imġiba sunrise:

```text
wp-content/
└── plugins/
    └── ultimate-multisite-example-addon/
        ├── ultimate-multisite-example-addon.php
        └── sunrise.php
```

L-iskan jiġi riżolt relattivament għal `WP_CONTENT_DIR`, mhux għall-valur attwali ta' `WP_PLUGIN_DIR`. Dan iżomm l-iskoperta stabbli meta multi-tenancy jew kodiċi ieħor ta' bootstrap bikri jibdel il-kostanti tad-direttorju tal-plugin waqt sunrise.

Teditjax il-fajl iġġenerat `wp-content/sunrise.php` direttament. Il-loader iħalli kodiċi custom jestendi l-imġiba sunrise mingħajr ma joħloq fork tal-fajl sunrise ewlieni li Ultimate Multisite jinstalla u jaġġorna.

## Hooks u filters disponibbli

Il-fajls sunrise tal-addon jaħdmu wara li d-domain mapping ta' Ultimate Multisite jkun tgħabba u qabel ma WordPress jixgħel `ms_loaded`. F'dan il-punt fajl sunrise jista':

- read or override `$current_site` and `$current_blog`;
- access `$wpdb` after database configuration has loaded;
- jiddefinixxi kostanti tal-ħin sunrise bħal `BLOG_ID_CURRENT_SITE` meta meħtieġ;
- jaqra l-istat tal-helper sunrise ta' Ultimate Multisite, inkluż l-istat tar-routing użat minn integrazzjonijiet multi-tenancy.

Ultimate Multisite jixgħel `wu_sunrise_loaded` wara li l-loader sunrise tiegħu jispiċċa. Uża dik l-action għal kodiċi li għandu jaħdem wara li l-bootstrap sunrise ikun lest iżda xorta jappartjeni għaċ-ċiklu tal-ħajja sunrise.

Sejjaħ biss funzjonijiet li diġà huma mgħobbija fil-fażi sunrise. Evita xogħol tqil fuq id-database, rendering ta' templates, talbiet HTTP, u kodiċi li jassumi li l-ordni normali tat-tagħbija tal-plugin tkun tlestiet.

## Eżempju minimu

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

Wara li tiddiżplojja l-fajl, itella' domain mapped u URL tal-main-site mhux mapped biex tikkonferma li ż-żewġ paths għadhom jagħmlu bootstrap b'mod korrett.
