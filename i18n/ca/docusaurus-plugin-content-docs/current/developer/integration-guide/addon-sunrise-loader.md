---
title: Addon Sunrise File Loader
sidebar_position: 5
_i18n_hash: 2b24e0c6cf53f4dab0334db99a3b267b
---
# Addon Sunrise File Loader

Ultimate Multisite 2.8.0 afegeix un carregador (loader) d'extensió sunrise per als add-ons i les integracions MU-plugin personalitzades que necessiten executar-se durant el *bootstrapping* de WordPress sunrise sense modificar el fitxer `wp-content/sunrise.php` generat.

## Quan utilitzar-lo {#when-to-use-it}

Utilitza una extensió sunrise quan la teva integració ha de funcionar abans que es carreguin els plugins regulars, com ara el *routing* de domini personalitzat, el tractament de sol·licitades específiques de l'host, o ajustaments precoces del *network bootstrap*.

Per a les integracions normals, prefereix els plugins regulars de WordPress, els MU-plugins i els *hooks* documentats d'Ultimate Multisite. El codi sunrise s'executa molt aviat i ha de ser petit, defensiu i sense dependències.

## Convenció de nom de fitxer {#file-naming-convention}

Crea un fitxer PHP anomenat `sunrise.php` en un directori d'add-on que comenci per `ultimate-multisite-`:

```text
wp-content/plugins/ultimate-multisite-example-addon/sunrise.php
```

El carregador escaneja el directori de plugins per aquest patró:

```text
wp-content/plugins/ultimate-multisite-*/sunrise.php
```

Els fitxers que coincideixen es carreguen en ordre alfabètic segons la ruta de l'add-on.

## On col·locar el fitxer {#where-to-place-the-file}

Col·loca el fitxer a la carpeta principal de l'add-on que té el comportament sunrise:

```text
wp-content/
└── plugins/
    └── ultimate-multisite-example-addon/
        ├── ultimate-multisite-example-addon.php
        └── sunrise.php
```

L'escaneig es resol relativament a `WP_CONTENT_DIR`, no al valor actual de `WP_PLUGIN_DIR`. Això manté el descobriment estable quan la multi-tenancy o altre codi de *bootstrap* precoc canvien les constantes del directori de plugins durant sunrise.

No edites directament el fitxer `wp-content/sunrise.php` generat. El carregador permet que el codi personalitzat extengui el comportament sunrise sense crear una derivació (forking) del fitxer core sunrise que Ultimate Multisite instal·la i actualitza.

## Hooks i filtres disponibles {#hooks-and-filters-available}

Els fitxers sunrise d'add-on s'executen després que la assignació de domini d'Ultimate Multisite ha carregat i abans que WordPress emeti `ms_loaded`. En aquest punt, un fitxer sunrise pot:

- llegir o sobreescriure `$current_site` i `$current_blog`;
- accedir a `$wpdb` després que hagi carregat la configuració de la base de dades;
- definir constants de temps sunrise com `BLOG_ID_CURRENT_SITE` quan és necessari;
- llegir l'estat de l'ajudant sunrise d'Ultimate Multisite, incloent l'estat de *routing* utilitzat per les integracions multi-tenancy.

Ultimate Multisite emet `wu_sunrise_loaded` després que el seu carregador sunrise ha acabat. Utilitza aquest *action* per al codi que hauria de funcionar després que el *bootstrap* sunrise estigui complet però que encara pertga al cicle vital de sunrise.

Només crida funcions que ja estan carregades durant la fase sunrise. Evita el treball pesadament dependent de la base de dades, el renderitzat de *templates*, les sol·licitades HTTP i el codi que pressuposa que ha acabat el carregament normal de plugins.

## Exemple mínim {#minimal-example}

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

Després de desplegar el fitxer, carrega un domini assignat i una URL de site principal no assignat per confirmar que ambdós camins encara es *bootstrapen* correctament.
