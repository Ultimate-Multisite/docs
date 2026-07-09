---
title: Tus Thauj Ntaub Ntawv Sunrise Rau Khoom Ntxiv
sidebar_position: 5
_i18n_hash: 2b24e0c6cf53f4dab0334db99a3b267b
---
# Addon Sunrise File Loader

Ultimate Multisite 2.8.0 ntxiv ib lub sunrise extension loader rau cov add-ons thiab cov kev txuas custom MU-plugin uas yuav tsum khiav thaum WordPress sunrise bootstrapping yam tsis tas kho cov ntaub ntawv `wp-content/sunrise.php` uas tsim tawm lawm.

## Thaum twg siv nws

Siv ib qho sunrise extension thaum koj txoj kev txuas yuav tsum khiav ua ntej cov plugins li niaj zaus raug load, xws li kev faib kev mus rau custom domain, kev tswj request raws host tshwj xeeb, lossis kev kho network bootstrap thaum ntxov.

Rau cov kev txuas li niaj zaus, xav kom siv WordPress plugins, MU-plugins, thiab cov hooks Ultimate Multisite uas tau sau tseg. Sunrise code khiav ntxov heev thiab yuav tsum nyob kom me, tiv thaiv tau zoo, thiab tsis vam khom dependency.

## Txoj cai npe ntaub ntawv

Tsim ib daim ntaub ntawv PHP hu ua `sunrise.php` hauv ib phau ntawv addon uas nws lub npe pib nrog `ultimate-multisite-`:

```text
wp-content/plugins/ultimate-multisite-example-addon/sunrise.php
```

Lub loader tshuaj xyuas lub plugins directory rau tus qauv no:

```text
wp-content/plugins/ultimate-multisite-*/sunrise.php
```

Cov ntaub ntawv uas phim yuav raug load raws alphabetical order ntawm addon path.

## Qhov chaw tso daim ntaub ntawv

Tso daim ntaub ntawv rau hauv root directory ntawm addon uas muaj tus cwj pwm sunrise ntawd:

```text
wp-content/
└── plugins/
    └── ultimate-multisite-example-addon/
        ├── ultimate-multisite-example-addon.php
        └── sunrise.php
```

Kev scan raug daws raws li `WP_CONTENT_DIR`, tsis yog tus nqi tam sim no ntawm `WP_PLUGIN_DIR`. Qhov no ua rau kev nrhiav pom ruaj khov thaum multi-tenancy lossis lwm yam code bootstrap thaum ntxov hloov cov constants plugin directory thaum sunrise.

Tsis txhob kho daim ntaub ntawv `wp-content/sunrise.php` uas tsim tawm lawm ncaj qha. Lub loader cia custom code txuas ntxiv tus cwj pwm sunrise yam tsis tas fork daim core sunrise file uas Ultimate Multisite nruab thiab hloov tshiab.

## Cov hooks thiab filters muaj

Cov addon sunrise files khiav tom qab Ultimate Multisite domain mapping tau load lawm thiab ua ntej WordPress tua `ms_loaded`. Thaum lub sijhawm no ib daim sunrise file muaj peev xwm:

- read or override `$current_site` and `$current_blog`;
- access `$wpdb` after database configuration has loaded;
- txhais cov constants rau lub sijhawm sunrise xws li `BLOG_ID_CURRENT_SITE` thaum xav tau;
- nyeem Ultimate Multisite sunrise helper state, suav nrog routing state uas cov kev txuas multi-tenancy siv.

Ultimate Multisite tua `wu_sunrise_loaded` tom qab nws lub sunrise loader ua tiav. Siv action ntawd rau code uas yuav tsum khiav tom qab sunrise bootstrap tiav lawm tab sis tseem yog ib feem ntawm sunrise lifecycle.

Tsuas hu cov functions uas twb load lawm hauv theem sunrise xwb. Zam kev ua haujlwm hnyav nrog database, kev render template, HTTP requests, thiab code uas xav tias order load plugin li niaj zaus twb tiav lawm.

## Piv txwv tsawg kawg

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

Tom qab deploy daim ntaub ntawv, load ib lub mapped domain thiab ib lub URL main-site uas tsis tau map kom paub tseeb tias ob txoj kev tseem bootstrap tau raug.
