---
title: Add-on Sunrise File Loader
sidebar_position: 5
_i18n_hash: 2b24e0c6cf53f4dab0334db99a3b267b
---
# Add-on Sunrise Bestandlaaër {#addon-sunrise-file-loader}

Ultimate Multisite 2.8.0 voeg 'n sunrise-uitbreidingslaaër by vir add-ons en aangepaste MU-plugin-integrasies wat moet loop tydens WordPress sunrise bootstrapping sonder om die gegenereerde `wp-content/sunrise.php` lêer te wysig.

## Wanneer om dit te gebruik {#when-to-use-it}

Gebruik 'n sunrise-uitbreiding wanneer jou integrasie moet loop voordat gewone plugins gelaai word, soos aangepaste domeinroutering, host-spesifieke aanvraaghantering, of vroeë netwerk-bootstrapping aanpassings.

Vir normale integrasies, verkies ons gewone WordPress plugins, MU-plugins, en die gedokumenteerde Ultimate Multisite hooks. Sunrise-kode loop baie vroeg en moet klein, verdedigend en vry van afhanklikhede bly.

## Bestandnaamkonvensie {#file-naming-convention}

Skep 'n PHP-bestand genaamd `sunrise.php` in 'n add-on-direktorie wie se naam begin met `ultimate-multisite-`:

```text
wp-content/plugins/ultimate-multisite-example-addon/sunrise.php
```

Die laaër skandeer die plugins-direktorie vir hierdie patroon:

```text
wp-content/plugins/ultimate-multisite-*/sunrise.php
```

Pasgemaakte lêers word in alfabetiese volgorde volgens die add-on-pad gelaai.

## Waar om die lêer te plaas {#where-to-place-the-file}

Plaas die lêer in die hoofdirektorie van die add-on wat die sunrise-gedrag besit:

```text
wp-content/
└── plugins/
    └── ultimate-multisite-example-addon/
        ├── ultimate-multisite-example-addon.php
        └── sunrise.php
```

Die skandering word opgelos ten opsigte van `WP_CONTENT_DIR`, nie die huidige waarde van `WP_PLUGIN_DIR` nie. Dit hou ontdekking stabiel wanneer multi-tenancy of ander vroeë bootstrap-kode plugin-direktorie-konstantes tydens sunrise verander.

Moenie die gegenereerde `wp-content/sunrise.php` lêer direk wysig nie. Die laaër laat aangepaste kode toe om die sunrise-gedrag uit te brei sonder om die kern sunrise-lêer te fork wat Ultimate Multisite installeer en opdateer.

## Beschikbare Hooks en Filters {#hooks-and-filters-available}

Addon sunrise lêers loop ná Ultimate Multisite domeinmapping gelaai is en voor WordPress `ms_loaded` uitlok. Op hierdie punt kan 'n sunrise-lêer:

- `$current_site` en `$current_blog` lees of oorskry;
- toegang verkry tot `$wpdb` nadat die databasiskonfigurasie gelaai is;
- sunrise-tyd konstantes definieer soos `BLOG_ID_CURRENT_SITE` wanneer nodig;
- Ultimate Multisite sunrise-hulpstaat lees, insluitend routeringstatus wat deur multi-tenancy-integrasies gebruik word.

Ultimate Multisite lok `wu_sunrise_loaded` uit nadat sy sunrise-laaër klaar is. Gebruik daardie aksie vir kode wat moet loop nadat die sunrise-bootstrapping voltooi is, maar wat steeds by die sunrise-lewenstydsel behoort.

Roep slegs funksies aan wat reeds in die sunrise-fase gelaai is. Vermy databasis-intensiewe werk, sjabloonrendering, HTTP-aanvrae, en kode wat aanneem dat die normale plugin-laaiorde voltooi is.

## Minimale voorbeeld {#minimal-example}

```php
<?php
/**
 * Sunrise-uitbreiding vir 'n aangepaste host-integrasie.
 */

if (! defined('ABSPATH')) {
    exit;
}

if (isset($current_blog) && $current_blog instanceof stdClass) {
    // Pas vroeë routering of konstantes aan voordat ms_loaded.
}
```

Nadat die lêer geplaas is, laai 'n gemapte domein en 'n ongemapte hoof-webwerf-URL om te bevestig dat beide paaie steeds korrek bootstrap.
