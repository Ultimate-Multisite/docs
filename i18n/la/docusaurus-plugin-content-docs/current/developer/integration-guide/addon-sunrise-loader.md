---
title: Additamentum Oneratoris Fasciculi Aurorae
sidebar_position: 5
_i18n_hash: 2b24e0c6cf53f4dab0334db99a3b267b
---
# Addon Sunrise Tabulae Onerator

Ultimate Multisite 2.8.0 addit sunrise extension loader pro additamentis et integrationibus consuetis MU-plugin quae per WordPress sunrise bootstrapping currere debent sine tabula generata `wp-content/sunrise.php` recensenda.

## Quando eo uti

Utere sunrise extension cum integratio tua currere debeat antequam plugina ordinaria onerentur, ut directio dominiorum consueta, tractatio petitionum secundum hospitem, aut primae adaptationes incursus retis.

Pro integrationibus normalibus, praefer plugina ordinaria WordPress, MU-plugins, et hamos Ultimate Multisite documentatos. Codex sunrise valde mature currit atque parvus, cautus, et sine dependentibus manere debet.

## Consuetudo nominandi tabulas

Crea tabulam PHP nomine `sunrise.php` in directorio additamenti cuius nomen incipit a `ultimate-multisite-`:

```text
wp-content/plugins/ultimate-multisite-example-addon/sunrise.php
```

Onerator directorium pluginorum huic exemplari quaerens percurrit:

```text
wp-content/plugins/ultimate-multisite-*/sunrise.php
```

Tabulae congruentes ordine alphabetico secundum viam additamenti onerantur.

## Ubi tabulam ponere

Pone tabulam in directorio radice additamenti quod mores sunrise possidet:

```text
wp-content/
└── plugins/
    └── ultimate-multisite-example-addon/
        ├── ultimate-multisite-example-addon.php
        └── sunrise.php
```

Percursio relative ad `WP_CONTENT_DIR` resolvitur, non ad valorem praesentem `WP_PLUGIN_DIR`. Hoc inventum stabile servat cum multi-tenancy aut alius codex primi incursus constantes directorii pluginorum tempore sunrise mutat.

Noli tabulam generatam `wp-content/sunrise.php` directe recensere. Onerator codici consueto permittit mores sunrise extendere sine tabula sunrise principali, quam Ultimate Multisite instituit et renovat, diffindenda.

## Hami et filtra praesto

Tabulae sunrise additamentorum currunt postquam Ultimate Multisite mapping dominiorum onustum est et antequam WordPress `ms_loaded` emittit. Hoc momento tabula sunrise potest:

- read or override `$current_site` and `$current_blog`;
- access `$wpdb` after database configuration has loaded;
- constantes temporis sunrise definire, ut `BLOG_ID_CURRENT_SITE`, cum opus est;
- statum auxiliarium sunrise Ultimate Multisite legere, inter statum itinerandi a integrationibus multi-tenancy adhibitum.

Ultimate Multisite `wu_sunrise_loaded` emittit postquam onerator sunrise suus finitur. Utere ea actione pro codice qui currere debet postquam incursus sunrise completus est sed adhuc ad vitae cyclum sunrise pertinet.

Voca tantum functiones quae iam in periodo sunrise onustae sunt. Vitanda sunt opera gravia datorum repositorii, redditio exemplorum, petitiones HTTP, et codex qui praesumit ordinem normalem onerandi pluginorum completum esse.

## Exemplum minimum

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

Post tabulam explicatam, onera dominium mappatum et URL paginae principalis non mappatum ut confirmes utramque viam adhuc recte incurrere.
