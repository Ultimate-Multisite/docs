---
title: Mpampiditra Rakitra Sunrise Fanampiny
sidebar_position: 5
_i18n_hash: 2b24e0c6cf53f4dab0334db99a3b267b
---
# Addon Sunrise File Loader

Ultimate Multisite 2.8.0 dia manampy mpamaky fanitarana sunrise ho an’ny add-ons sy fampidirana MU-plugin namboarina manokana izay mila mandeha mandritra ny WordPress sunrise bootstrapping nefa tsy manitsy ny rakitra `wp-content/sunrise.php` novokarina.

## Rahoviana no hampiasana azy

Mampiasà fanitarana sunrise rehefa tsy maintsy mandeha alohan’ny hampidirana ireo plugins mahazatra ny fampidiranao, toy ny fandrindrana domain namboarina manokana, fikirakirana fangatahana miankina amin’ny mpampiantrano, na fanitsiana bootstrap tambajotra aloha.

Ho an’ny fampidirana mahazatra, aleo mampiasa WordPress plugins mahazatra, MU-plugins, ary ireo hook Ultimate Multisite voarakitra. Mandeha tena aloha ny kaody sunrise ka tokony ho kely, miaro tena, ary tsy miankina amin-javatra hafa.

## Fomba fanomezana anarana rakitra

Mamoròna rakitra PHP antsoina hoe `sunrise.php` ao amin’ny lahatahiry addon izay manomboka amin’ny `ultimate-multisite-` ny anarany:

```text
wp-content/plugins/ultimate-multisite-example-addon/sunrise.php
```

Ny loader dia mikaroka ao amin’ny lahatahiry plugins amin’ity lamina ity:

```text
wp-content/plugins/ultimate-multisite-*/sunrise.php
```

Ampidirina araka ny filaharana abidy amin’ny lalan’ny addon ireo rakitra mifanaraka.

## Aiza no hametrahana ny rakitra

Apetraho ao amin’ny lahatahiry fototry ny addon tompon’ilay fitondran-tena sunrise ilay rakitra:

```text
wp-content/
└── plugins/
    └── ultimate-multisite-example-addon/
        ├── ultimate-multisite-example-addon.php
        └── sunrise.php
```

Ny fikarohana dia voavaha mifandray amin’ny `WP_CONTENT_DIR`, fa tsy amin’ny sanda ankehitriny an’ny `WP_PLUGIN_DIR`. Izany dia mitazona ny fahitana ho marin-toerana rehefa manova ireo konstanta lahatahiry plugin mandritra ny sunrise ny multi-tenancy na kaody bootstrap aloha hafa.

Aza manitsy mivantana ny rakitra `wp-content/sunrise.php` novokarina. Ny loader dia mamela ny kaody namboarina manokana hanitatra ny fitondran-tena sunrise nefa tsy manao fork ny rakitra sunrise fototra izay apetraka sy havaozin’ny Ultimate Multisite.

## Hooks sy filters azo ampiasaina

Mandeha aorian’ny nampidiran’ny Ultimate Multisite domain mapping sy alohan’ny handefasan’ny WordPress ny `ms_loaded` ny rakitra sunrise an’ny addon. Amin’ity fotoana ity, ny rakitra sunrise dia afaka:

- read or override `$current_site` and `$current_blog`;
- access `$wpdb` after database configuration has loaded;
- mamaritra konstanta amin’ny fotoanan’ny sunrise toy ny `BLOG_ID_CURRENT_SITE` rehefa ilaina;
- mamaky ny satan’ny mpanampy sunrise an’ny Ultimate Multisite, anisan’izany ny satan’ny fandrindrana lalana ampiasain’ny fampidirana multi-tenancy.

Mandefa `wu_sunrise_loaded` ny Ultimate Multisite rehefa vita ny sunrise loader-ny. Ampiasao io action io ho an’ny kaody tokony handeha rehefa vita ny sunrise bootstrap nefa mbola ao anatin’ny tsingerin’aina sunrise.

Antsoy ihany ireo functions efa voaentana amin’ny dingana sunrise. Sorohy ny asa mavesatra amin’ny database, ny template rendering, ny fangatahana HTTP, ary ny kaody mihevitra fa efa vita ny filaharan’ny fampidirana plugin mahazatra.

## Ohatra faran’izay tsotra

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

Rehefa avy nametraka ilay rakitra, ampidiro domain voamapy sy URL an’ny main-site tsy voamapy mba hanamarinana fa mbola manao bootstrap tsara ireo lalana roa.
