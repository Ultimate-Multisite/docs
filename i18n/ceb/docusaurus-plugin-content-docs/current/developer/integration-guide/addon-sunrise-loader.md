---
title: Addon Sunrise File Loader
sidebar_position: 5
_i18n_hash: 2b24e0c6cf53f4dab0334db99a3b267b
---
# Addon Sunrise File Loader {#addon-sunrise-file-loader}

Ang Ultimate Multisite 2.8.0 nagdadagdag og usa ka sunrise extension loader para sa mga add-ons ug custom MU-plugin integrations nga kinahanglan magpadagan panahon sa WordPress sunrise bootstrapping nga dili na kinahanglan i-edit ang generated `wp-content/sunrise.php` file.

## Kanus-a kini gamiton {#when-to-use-it}

Gamita ang sunrise extension kung ang imong integration kinahanglan magpadayon sa dili pa ma-load ang regular plugins, sama sa custom domain routing, host-specific request handling, o mga sayon nga adjustments sa network bootstrap.

Para sa normal nga integrations, mas gusto nimo ang regular WordPress plugins, MU-plugins, ug ang mga documented Ultimate Multisite hooks. Ang sunrise code magpadagan og maayo kaayo sa sinugdanan (very early) ug kinahanglan gamay ra, defensive, ug walay dependency.

## Paagi sa pagpangalan sa file (File naming convention) {#file-naming-convention}

Pagmugna og PHP file nga nagnganap `sunrise.php` sa usa ka addon directory nga nagsugod sa `ultimate-multisite-`:

```text
wp-content/plugins/ultimate-multisite-example-addon/sunrise.php
```

Ang loader mag-scan sa plugins directory alang niining pattern:

```text
wp-content/plugins/ultimate-multisite-*/sunrise.php
```

Ang mga file nga nag-match mahimong i-load sa alpabetikal nga kahimtang base sa addon path.

## Asa pagbutang sa file (Where to place the file) {#where-to-place-the-file}

Butangi ang file sa root directory sa addon nga naghupot sa sunrise behavior:

```text
wp-content/
└── plugins/
    └── ultimate-multisite-example-addon/
        ├── ultimate-multisite-example-addon.php
        └── sunrise.php
```

Ang scan kay resolbahon kini base sa `WP_CONTENT_DIR`, dili sa kasamtang value sa `WP_PLUGIN_DIR`. Nagpabilin ni nga stable ang pag-discover kung nagbag-o ang mga constant sa plugin directory ang early bootstrap code panahon sa sunrise o uban pang multi-tenancy.

Ayaw i-edit direkta ang gi-generate nga file nga `wp-content/sunrise.php`. Ang loader nagtugot sa custom code nga magpalapad (extend) sa behavior sa sunrise nga dili kinahanglan nimo i-fork ang core sunrise file nga gi-install ug gi-update sa Ultimate Multisite.

## Mga Hook ug filter nga available {#hooks-and-filters-available}

Ang mga addon sunrise files molihok human ma-load ang domain mapping sa Ultimate Multisite ug sa dili pa mag-fire ang WordPress og `ms_loaded`. Sa punto nga kini mahitabo, ang usa ka sunrise file pwede:

- magbasa o mag-override sa `$current_site` ug `$current_blog`;
- mag-access sa `$wpdb` human ma-load ang database configuration;
- mag-define og mga constant sa oras sa sunrise sama sa `BLOG_ID_CURRENT_SITE` kung gikinahanglan;
- magbasa sa state sa Ultimate Multisite sunrise helper, lakip na sa routing state nga gigamit sa multi-tenancy integrations.

Ang Ultimate Multisite mag-fire og `wu_sunrise_loaded` human matapos ang iyang sunrise loader. Gamita kana nga action para sa code nga kinahanglan ma-run human mahuman ang sunrise bootstrap pero nagpabilin pa sa lifecycle sa sunrise.

Tawaga lang ang mga function nga gi-load na sa phase sa sunrise. Iwasan ang trabaho nga daghan og database, template rendering, HTTP requests, ug code nga naghunahuna nga nahuman na ang normal nga load order sa plugin.

## Minimal example {#minimal-example}

```php
<?php
/**
 * Sunrise extension para sa custom host integration.
 */

if (! defined('ABSPATH')) {
    exit;
}

if (isset($current_blog) && $current_blog instanceof stdClass) {
    // Ayusin ang early routing o constants sa dili pa ma-load ang ms_loaded.
}
```

Pagkahuman i-deploy ang file, i-load ang usa ka mapped domain ug usa ka unmapped nga main-site URL aron masiguro nga tama gihapon ang pag-bootstrap sa duha ka mga path.
