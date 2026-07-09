---
title: Onye na-ebunye Faịlụ Sunrise Mgbakwunye
sidebar_position: 5
_i18n_hash: 2b24e0c6cf53f4dab0334db99a3b267b
---
# Addon Sunrise File Loader

Ultimate Multisite 2.8.0 na-agbakwunye sunrise extension loader maka add-ons na custom MU-plugin integrations ndị kwesịrị ịrụ ọrụ n'oge WordPress sunrise bootstrapping na-enweghị idezi faịlụ `wp-content/sunrise.php` emepụtara.

## Mgbe eji ya

Jiri sunrise extension mgbe integration gị ga-arụrịrị ọrụ tupu ebugo plugins nkịtị, dịka custom domain routing, host-specific request handling, ma ọ bụ early network bootstrap adjustments.

Maka integrations nkịtị, họrọ WordPress plugins nkịtị, MU-plugins, na Ultimate Multisite hooks edepụtara n'akwụkwọ. Sunrise code na-arụ ọrụ n'oge dị nnọọ mbido ma kwesị ịdị obere, na-echebe onwe ya, na-enweghị dependencies.

## Usoro ịkpọ faịlụ aha

Mepụta faịlụ PHP aha ya bụ `sunrise.php` n'ime ndekọ addon nke aha ya na-amalite na `ultimate-multisite-`:

```text
wp-content/plugins/ultimate-multisite-example-addon/sunrise.php
```

Loader na-enyocha plugins directory maka pattern a:

```text
wp-content/plugins/ultimate-multisite-*/sunrise.php
```

A na-ebugo faịlụ ndị dakọtara n'usoro mkpụrụedemede site na addon path.

## Ebe ị ga-etinye faịlụ ahụ

Tinye faịlụ ahụ n'ime root directory nke addon nwere sunrise behaviour ahụ:

```text
wp-content/
└── plugins/
    └── ultimate-multisite-example-addon/
        ├── ultimate-multisite-example-addon.php
        └── sunrise.php
```

A na-edozi nyocha ahụ n'ihe metụtara `WP_CONTENT_DIR`, ọ bụghị uru dị ugbu a nke `WP_PLUGIN_DIR`. Nke a na-eme ka nchọpụta kwụsie ike mgbe multi-tenancy ma ọ bụ code bootstrap ọzọ nke mbido gbanwere plugin directory constants n'oge sunrise.

Edeziela faịlụ `wp-content/sunrise.php` emepụtara ozugbo. Loader na-ekwe ka custom code gbasaa sunrise behaviour na-enweghị forking core sunrise file nke Ultimate Multisite na-etinye ma na-emelite.

## Hooks na filters dị

Faịlụ sunrise nke addon na-arụ ọrụ mgbe Ultimate Multisite domain mapping ebubala ma tupu WordPress gbaa `ms_loaded`. N'oge a, faịlụ sunrise nwere ike:

- read or override `$current_site` and `$current_blog`;
- access `$wpdb` after database configuration has loaded;
- kọwaa sunrise-time constants dịka `BLOG_ID_CURRENT_SITE` mgbe achọrọ;
- gụọ Ultimate Multisite sunrise helper state, gụnyere routing state nke multi-tenancy integrations ji.

Ultimate Multisite na-agba `wu_sunrise_loaded` mgbe sunrise loader ya mechara. Jiri action ahụ maka code kwesịrị ịrụ ọrụ mgbe sunrise bootstrap zuru ezu mana ka bụ akụkụ nke sunrise lifecycle.

Kpọọ naanị functions ndị ebubalarị na sunrise phase. Zere ọrụ na-eji database nke ukwuu, template rendering, HTTP requests, na code nke na-eche na usoro ibugo plugin nkịtị agwụla.

## Ihe atụ kacha nta

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

Mgbe ị tinyere faịlụ ahụ n'ọrụ, bugo mapped domain na unmapped main-site URL iji kwado na ụzọ abụọ ahụ ka na-eme bootstrap nke ọma.
