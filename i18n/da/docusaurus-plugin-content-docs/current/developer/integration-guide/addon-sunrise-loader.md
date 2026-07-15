---
title: Tilføjelsesmodul til Sunrise-filindlæser
sidebar_position: 5
_i18n_hash: 2b24e0c6cf53f4dab0334db99a3b267b
---
# Loader til sunrise-filer for tilføjelser

Ultimate Multisite 2.8.0 tilføjer en sunrise-udvidelsesloader til tilføjelser og brugerdefinerede MU-plugin-integrationer, der skal køre under WordPress sunrise-bootstrapping uden at redigere den genererede `wp-content/sunrise.php`-fil.

## Hvornår du skal bruge den {#when-to-use-it}

Brug en sunrise-udvidelse, når din integration skal køre, før almindelige plugins indlæses, såsom brugerdefineret domænerouting, værtsspecifik håndtering af forespørgsler eller tidlige justeringer af netværksbootstrap.

Til normale integrationer bør du foretrække almindelige WordPress-plugins, MU-plugins og de dokumenterede Ultimate Multisite-hooks. Sunrise-kode kører meget tidligt og bør holdes lille, defensiv og uden afhængigheder.

## Konvention for filnavngivning {#file-naming-convention}

Opret en PHP-fil med navnet `sunrise.php` i en tilføjelsesmappe, hvis navn starter med `ultimate-multisite-`:

```text
wp-content/plugins/ultimate-multisite-example-addon/sunrise.php
```

Loaderen scanner plugin-mappen efter dette mønster:

```text
wp-content/plugins/ultimate-multisite-*/sunrise.php
```

Matchende filer indlæses i alfabetisk rækkefølge efter tilføjelsessti.

## Hvor filen skal placeres {#where-to-place-the-file}

Placer filen i rodmappen for den tilføjelse, der ejer sunrise-adfærden:

```text
wp-content/
└── plugins/
    └── ultimate-multisite-example-addon/
        ├── ultimate-multisite-example-addon.php
        └── sunrise.php
```

Scanningen bestemmes relativt til `WP_CONTENT_DIR`, ikke den aktuelle værdi af `WP_PLUGIN_DIR`. Dette holder registreringen stabil, når multi-tenancy eller anden tidlig bootstrap-kode ændrer plugin-mappekonstanter under sunrise.

Rediger ikke den genererede `wp-content/sunrise.php`-fil direkte. Loaderen lader brugerdefineret kode udvide sunrise-adfærd uden at forke den centrale sunrise-fil, som Ultimate Multisite installerer og opdaterer.

## Tilgængelige hooks og filtre {#hooks-and-filters-available}

Sunrise-filer for tilføjelser kører, efter Ultimate Multisite-domænemapping er indlæst, og før WordPress udløser `ms_loaded`. På dette tidspunkt kan en sunrise-fil:

- read or override `$current_site` and `$current_blog`;
- access `$wpdb` after database configuration has loaded;
- definere sunrise-tidskonstanter såsom `BLOG_ID_CURRENT_SITE`, når det er nødvendigt;
- læse Ultimate Multisite sunrise-hjælpetilstand, inklusive routingtilstand, der bruges af multi-tenancy-integrationer.

Ultimate Multisite udløser `wu_sunrise_loaded`, efter dens sunrise-loader er færdig. Brug denne action til kode, der skal køre, efter sunrise-bootstrap er fuldført, men stadig hører til i sunrise-livscyklussen.

Kald kun funktioner, der allerede er indlæst i sunrise-fasen. Undgå databasetungt arbejde, skabelonrendering, HTTP-forespørgsler og kode, der antager, at den normale indlæsningsrækkefølge for plugins er fuldført.

## Minimalt eksempel {#minimal-example}

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

Efter udrulning af filen skal du indlæse et mappet domæne og en ikke-mappet URL til hovedsitet for at bekræfte, at begge stier stadig bootstrapper korrekt.
