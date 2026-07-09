---
title: Zousazmodul Sunrise-Dateilader
sidebar_position: 5
_i18n_hash: 2b24e0c6cf53f4dab0334db99a3b267b
---
# Addon Sunrise-Datei-Loader {#addon-sunrise-file-loader}

Ultimate Multisite 2.8.0 füügt e sunrise-Erweiderungs-Loader fir Add-ons a personaliséiert MU-plugin-Integratiounen dobäi, déi wärend dem WordPress sunrise-Bootstrapping lafe mussen, ouni déi generéiert `wp-content/sunrise.php`-Datei z'änneren.

## Wéini en ze benotzen {#when-to-use-it}

Benotz eng sunrise-Erweiderung, wann deng Integratioun lafe muss, éier regulär Plugine geluede ginn, wéi personaliséiert Domain-Routing, host-spezifesch Ufroveraarbechtung oder fréi Netzwierk-Bootstrap-Upassungen.

Fir normal Integratiounen, benotz léiwer regulär WordPress Plugine, MU-plugins an déi dokumentéiert Ultimate Multisite Hooks. Sunrise-Code leeft ganz fréi a soll kleng, defensiv an ouni Ofhängegkeete bleiwen.

## Dateibenennungs-Konventioun {#file-naming-convention}

Erstell eng PHP-Datei mam Numm `sunrise.php` an engem Add-on-Verzeechnes, deem säin Numm mat `ultimate-multisite-` ufänkt:

```text
wp-content/plugins/ultimate-multisite-example-addon/sunrise.php
```

De Loader sicht am Plugins-Verzeechnes no dësem Muster:

```text
wp-content/plugins/ultimate-multisite-*/sunrise.php
```

Passend Dateie ginn an alphabetescher Reiefolleg nom Add-on-Pad gelueden.

## Wou d'Datei ze placéieren {#where-to-place-the-file}

Placéier d'Datei am Stammverzeechnes vum Add-on, deen d'sunrise-Verhalen besëtzt:

```text
wp-content/
└── plugins/
    └── ultimate-multisite-example-addon/
        ├── ultimate-multisite-example-addon.php
        └── sunrise.php
```

D'Sich gëtt relativ zu `WP_CONTENT_DIR` opgeléist, net zum aktuelle Wäert vu `WP_PLUGIN_DIR`. Dat hält d'Entdeckung stabil, wann Multi-Tenancy oder anere fréie Bootstrap-Code wärend sunrise d'Konstante fir Plugin-Verzeechnesser ännert.

Änner déi generéiert `wp-content/sunrise.php`-Datei net direkt. De Loader erlaabt personaliséiertem Code, d'sunrise-Verhalen z'erweideren, ouni d'Kär-sunrise-Datei ze forken, déi Ultimate Multisite installéiert an aktualiséiert.

## Verfügbar Hooks a Filteren {#hooks-and-filters-available}

Addon-sunrise-Dateie lafen nodeems d'Domain-Mapping vun Ultimate Multisite geluede gouf an éier WordPress `ms_loaded` ausléist. Zu dësem Zäitpunkt kann eng sunrise-Datei:

- read or override `$current_site` and `$current_blog`;
- access `$wpdb` after database configuration has loaded;
- sunrise-Zäit-Konstante wéi `BLOG_ID_CURRENT_SITE` definéieren, wann néideg;
- den Ultimate Multisite sunrise-Hëllefszoustand liesen, inklusiv dem Routing-Zoustand, dee vu Multi-Tenancy-Integratioune benotzt gëtt.

Ultimate Multisite léist `wu_sunrise_loaded` aus, nodeems säi sunrise-Loader fäerdeg ass. Benotz dës Aktioun fir Code, deen nom Ofschloss vum sunrise-Bootstrap lafe soll, awer nach ëmmer zum sunrise-Liewenszyklus gehéiert.

Ruff nëmme Funktiounen op, déi an der sunrise-Phas scho geluede sinn. Vermeid datebank-intensiv Aarbecht, Template-Rendering, HTTP-Ufroen a Code, deen dovun ausgeet, datt déi normal Plugin-Luedereiefolleg ofgeschloss ass.

## Minimal Beispill {#minimal-example}

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

Nodeems d'Datei deployéiert gouf, lued eng gemappt Domain an eng net gemappt Haaptsäit-URL, fir ze confirméieren, datt béid Weeër nach ëmmer korrekt bootstrappen.
