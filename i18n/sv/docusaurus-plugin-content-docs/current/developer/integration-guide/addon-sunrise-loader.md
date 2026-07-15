---
title: Addon Sunrise File Loader
sidebar_position: 5
_i18n_hash: 2b24e0c6cf53f4dab0334db99a3b267b
---
# Addon Sunrise File Loader

Ultimate Multisite 2.8.0 lägger till en sunrise extension loader för add-ons och anpassade MU-plugin-integrationer som behöver köras under WordPress sunrise bootstrapping utan att redigera den genererade filen `wp-content/sunrise.php`.

## När du ska använda det {#when-to-use-it}

Använd en sunrise extension när din integration måste köras innan vanliga plugins laddas, till exempel för anpassad domänroutrering, hantering av värdspecifika förfrågningar eller tidiga justeringar av nätverket.

För normala integrationer föredrar vi vanliga WordPress-plugins, MU-plugins och de dokumenterade Ultimate Multisite hooks. Sunrise-kod körs väldigt tidigt och bör därför vara liten, defensiv och fri från beroenden.

## Filnamnskonvention {#file-naming-convention}

Skapa en PHP-fil som heter `sunrise.php` i ett add-on-katalog vars namn börjar med `ultimate-multisite-`:

```text
wp-content/plugins/ultimate-multisite-example-addon/sunrise.php
```

Loadern skannar plugins-katalogen efter detta mönster:

```text
wp-content/plugins/ultimate-multisite-*/sunrise.php
```

Matchande filer laddas i alfabetisk ordning baserat på add-on-sökvägen.

## Var du ska placera filen {#where-to-place-the-file}

Placera filen i rotkatalogen för det add-on som äger sunrise-beteendet:

```text
wp-content/
└── plugins/
    └── ultimate-multisite-example-addon/
        ├── ultimate-multisite-example-addon.php
        └── sunrise.php
```

Skanningen löses relativt till `WP_CONTENT_DIR`, inte det aktuella värdet av `WP_PLUGIN_DIR`. Detta håller upptäckten stabil även om multi-tenancy eller annan tidig bootstrap-kod ändrar plugin-katalogkonstanterna under sunrise.

Redigera inte den genererade filen `wp-content/sunrise.php` direkt. Loadern låter anpassad kod utöka sunrise-beteendet utan att behöva förgrena den kärnfil som Ultimate Multisite installerar och uppdaterar.

## Tillgängliga hooks och filters {#hooks-and-filters-available}

Addon sunrise-filer körs efter att Ultimate Multisite har laddat domänmappningen och före WordPress avfyrar `ms_loaded`. Vid denna tidpunkt kan en sunrise-fil:

- läsa eller åsidosätta `$current_site` och `$current_blog`;
- komma åt `$wpdb` efter att databaskonfigurationen har laddats;
- definiera sunrise-tidskonstanter som `BLOG_ID_CURRENT_SITE` vid behov;
- läsa Ultimate Multisite sunrise helper state, inklusive routing state som används av multi-tenancy-integrationer.

Ultimate Multisite avfyrar `wu_sunrise_loaded` efter att dess sunrise loader är klar. Använd denna action för kod som ska köras efter att sunrise bootstrap är slutfört, men som ändå tillhör sunrise-livscykeln.

Kalla endast funktioner som redan är laddade under sunrise-fasen. Undvik databasintensivt arbete, rendering av templates, HTTP-förfrågningar och kod som antar att normal plugin-laddningsordning är slutförd.

## Minimalt exempel {#minimal-example}

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

Efter att du har implementerat filen, ladda en mappad domän och en o-mappad main-site-URL för att bekräfta att båda vägarna fortfarande bootstrapar korrekt.
