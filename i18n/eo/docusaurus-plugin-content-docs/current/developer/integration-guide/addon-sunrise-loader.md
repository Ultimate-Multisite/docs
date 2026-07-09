---
title: Ŝargilo de Sunrise-dosiero por aldonaĵo
sidebar_position: 5
_i18n_hash: 2b24e0c6cf53f4dab0334db99a3b267b
---
# Aldonaĵa Sunrise-dosierŝargilo {#addon-sunrise-file-loader}

Ultimate Multisite 2.8.0 aldonas sunrise-etendaĵan ŝargilon por aldonaĵoj kaj propraj MU-plugin integriĝoj, kiuj devas ruliĝi dum WordPress sunrise-praŝargado sen redakti la generitan dosieron `wp-content/sunrise.php`.

## Kiam uzi ĝin {#when-to-use-it}

Uzu sunrise-etendaĵon kiam via integriĝo devas ruliĝi antaŭ ol ordinaraj kromprogramoj estas ŝargitaj, kiel propra domajna vojigo, gastigantospecifa pritraktado de petoj, aŭ fruaj retaj praŝargaj ĝustigoj.

Por normalaj integriĝoj, preferu ordinarajn WordPress kromprogramojn, MU-plugin-ojn, kaj la dokumentitajn Ultimate Multisite hokojn. Sunrise-kodo ruliĝas tre frue kaj devus resti malgranda, defensiva, kaj sendependa de dependecoj.

## Dosiernoma konvencio {#file-naming-convention}

Kreu PHP-dosieron nomitan `sunrise.php` en aldonaĵa dosierujo kies nomo komenciĝas per `ultimate-multisite-`:

```text
wp-content/plugins/ultimate-multisite-example-addon/sunrise.php
```

La ŝargilo skanas la kromprograman dosierujon por ĉi tiu ŝablono:

```text
wp-content/plugins/ultimate-multisite-*/sunrise.php
```

Kongruaj dosieroj estas ŝargitaj laŭ alfabeta ordo laŭ aldonaĵa vojo.

## Kie meti la dosieron {#where-to-place-the-file}

Metu la dosieron en la radikan dosierujon de la aldonaĵo, kiu posedas la sunrise-konduton:

```text
wp-content/
└── plugins/
    └── ultimate-multisite-example-addon/
        ├── ultimate-multisite-example-addon.php
        └── sunrise.php
```

La skanado estas solvita relative al `WP_CONTENT_DIR`, ne al la aktuala valoro de `WP_PLUGIN_DIR`. Tio tenas malkovradon stabila kiam plur-luanteco aŭ alia frua praŝarga kodo ŝanĝas kromprogramajn dosierujajn konstantojn dum sunrise.

Ne redaktu la generitan dosieron `wp-content/sunrise.php` rekte. La ŝargilo permesas al propra kodo etendi sunrise-konduton sen forki la kernan sunrise-dosieron, kiun Ultimate Multisite instalas kaj ĝisdatigas.

## Disponeblaj hokoj kaj filtriloj {#hooks-and-filters-available}

Aldonaĵaj sunrise-dosieroj ruliĝas post kiam Ultimate Multisite domajna mapado ŝargiĝis kaj antaŭ ol WordPress ekigas `ms_loaded`. Je ĉi tiu punkto sunrise-dosiero povas:

- read or override `$current_site` and `$current_blog`;
- access `$wpdb` after database configuration has loaded;
- difini sunrise-tempajn konstantojn kiel `BLOG_ID_CURRENT_SITE` kiam necese;
- legi la staton de sunrise-helpiloj de Ultimate Multisite, inkluzive de vojiga stato uzata de plur-luantecaj integriĝoj.

Ultimate Multisite ekigas `wu_sunrise_loaded` post kiam ĝia sunrise-ŝargilo finiĝas. Uzu tiun agon por kodo, kiu devus ruliĝi post kiam sunrise-praŝargado estas kompleta sed ankoraŭ apartenas al la sunrise-vivociklo.

Voku nur funkciojn, kiuj jam estas ŝargitaj en la sunrise-fazo. Evitu datumbaz-pezan laboron, ŝablonan bildigon, HTTP-petojn, kaj kodon, kiu supozas ke normala kromprograma ŝargordo finiĝis.

## Minimuma ekzemplo {#minimal-example}

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

Post deplojo de la dosiero, ŝargu mapitan domajnon kaj nemapitan ĉefretejan URL por konfirmi ke ambaŭ vojoj ankoraŭ praŝargiĝas ĝuste.
