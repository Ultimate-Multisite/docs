---
title: Addon Sunrise File Loader
sidebar_position: 5
_i18n_hash: 2b24e0c6cf53f4dab0334db99a3b267b
---
# Addon Sunrise File Loader

Ultimate Multisite 2.8.0 legger til en sunrise extension loader for add-ons og tilpassede MU-plugin-integrasjoner som må kjøre under WordPress sunrise bootstrapping uten at du trenger å redigere den genererte `wp-content/sunrise.php` filen.

## Når du skal bruke det {#when-to-use-it}

Bruk en sunrise extension når integrasjonen din må kjøre før vanlige plugins lastes inn. Dette gjelder for eksempel tilpasset domenerutting, håndtering av forespørsler spesifikke for verten, eller tidlige justeringer av nettverket.

For vanlige integrasjoner, foretrekker vi vanlige WordPress plugins, MU-plugins og de dokumenterte Ultimate Multisite hooks. Sunrise-kode kjører veldig tidlig og bør derfor forbli liten, defensiv og uten avhengigheter.

## Filnavnkonvensjon {#file-naming-convention}

Opprett en PHP-fil kalt `sunrise.php` i en addon-mappe hvis navn starter med `ultimate-multisite-`:

```text
wp-content/plugins/ultimate-multisite-example-addon/sunrise.php
```

Loaderen skanner plugins-mappen etter dette mønsteret:

```text
wp-content/plugins/ultimate-multisite-*/sunrise.php
```

Filene som matcher lastes inn i alfabetisk rekkefølge basert på addon-stien.

## Hvor du skal plassere filen {#where-to-place-the-file}

Plasser filen i rotmappen til addon-en som eier sunrise-atferden:

```text
wp-content/
└── plugins/
    └── ultimate-multisite-example-addon/
        ├── ultimate-multisite-example-addon.php
        └── sunrise.php
```

Skanningen løses relativt til `WP_CONTENT_DIR`, ikke den nåværende verdien av `WP_PLUGIN_DIR`. Dette holder oppdagelsen stabil selv om multi-tenancy eller annen tidlig bootstrap-kode endrer plugin-mappe-konstanter under sunrise.

Ikke rediger den genererte `wp-content/sunrise.php` filen direkte. Loaderen lar deg utvide sunrise-atferden med tilpasset kode uten å måtte forke kjerne-sunrise-filen som Ultimate Multisite installerer og oppdaterer.

## Tilgjengelige hooks og filters {#hooks-and-filters-available}

Addon sunrise-filer kjører etter at Ultimate Multisite domain mapping er lastet, og før WordPress utløser `ms_loaded`. På dette tidspunktet kan en sunrise-fil:

- lese eller overstyre `$current_site` og `$current_blog`;
- få tilgang til `$wpdb` etter at databasekonfigurasjonen er lastet;
- definere sunrise-tids konstanter som `BLOG_ID_CURRENT_SITE` ved behov;
- lese Ultimate Multisite sunrise helper state, inkludert ruting-state brukt av multi-tenancy-integrasjoner.

Ultimate Multisite utløser `wu_sunrise_loaded` etter at sunrise-loaderen er ferdig. Bruk denne actionen for kode som skal kjøre etter at sunrise bootstrap er fullført, men som fortsatt tilhører sunrise-livssyklusen.

Kall kun funksjoner som allerede er lastet i sunrise-fasen. Unngå database-tungt arbeid, template rendering, HTTP-forespørsler og kode som antar at normal plugin-lastrekkefølge er fullført.

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

Etter at du har deployert filen, last inn et mappet domene og en umappet main-site URL for å bekrefte at begge stiene fortsatt bootstrappes korrekt.
