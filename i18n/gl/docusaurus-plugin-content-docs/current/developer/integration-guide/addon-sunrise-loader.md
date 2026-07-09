---
title: Cargador do ficheiro Sunrise do complemento
sidebar_position: 5
_i18n_hash: 2b24e0c6cf53f4dab0334db99a3b267b
---
# Cargador de ficheiro Sunrise de addon {#addon-sunrise-file-loader}

Ultimate Multisite 2.8.0 engade un cargador de extensións sunrise para add-ons e integracións personalizadas de MU plugin que necesitan executarse durante o arranque sunrise de WordPress sen editar o ficheiro `wp-content/sunrise.php` xerado.

## Cando usalo {#when-to-use-it}

Usa unha extensión sunrise cando a túa integración deba executarse antes de que se carguen os plugins habituais, como o enrutamento de dominios personalizados, a xestión de solicitudes específicas do host ou axustes temperáns do arranque da rede.

Para integracións normais, prefire plugins habituais de WordPress, MU-plugins e os hooks documentados de Ultimate Multisite. O código sunrise execútase moi cedo e debe manterse pequeno, defensivo e sen dependencias.

## Convención de nomes de ficheiros {#file-naming-convention}

Crea un ficheiro PHP chamado `sunrise.php` nun directorio de addon cuxo nome comece por `ultimate-multisite-`:

```text
wp-content/plugins/ultimate-multisite-example-addon/sunrise.php
```

O cargador analiza o directorio de plugins para este patrón:

```text
wp-content/plugins/ultimate-multisite-*/sunrise.php
```

Os ficheiros coincidentes cárganse en orde alfabética segundo a ruta do addon.

## Onde colocar o ficheiro {#where-to-place-the-file}

Coloca o ficheiro no directorio raíz do addon que posúe o comportamento sunrise:

```text
wp-content/
└── plugins/
    └── ultimate-multisite-example-addon/
        ├── ultimate-multisite-example-addon.php
        └── sunrise.php
```

A análise resólvese en relación con `WP_CONTENT_DIR`, non co valor actual de `WP_PLUGIN_DIR`. Isto mantén estable a descuberta cando a multitenencia ou outro código de arranque temperán cambia as constantes do directorio de plugins durante sunrise.

Non edites directamente o ficheiro `wp-content/sunrise.php` xerado. O cargador permite que o código personalizado estenda o comportamento sunrise sen facer un fork do ficheiro sunrise principal que Ultimate Multisite instala e actualiza.

## Hooks e filtros dispoñibles {#hooks-and-filters-available}

Os ficheiros sunrise de addon execútanse despois de que a asignación de dominios de Ultimate Multisite se cargase e antes de que WordPress dispare `ms_loaded`. Neste punto, un ficheiro sunrise pode:

- read or override `$current_site` and `$current_blog`;
- access `$wpdb` after database configuration has loaded;
- definir constantes en tempo de sunrise como `BLOG_ID_CURRENT_SITE` cando sexa necesario;
- ler o estado dos axudantes sunrise de Ultimate Multisite, incluído o estado de enrutamento usado polas integracións de multitenencia.

Ultimate Multisite dispara `wu_sunrise_loaded` despois de que remate o seu cargador sunrise. Usa esa acción para código que debe executarse despois de que o arranque sunrise estea completo pero que aínda pertence ao ciclo de vida sunrise.

Chama só funcións que xa estean cargadas na fase sunrise. Evita traballos intensivos de base de datos, renderizado de modelos, solicitudes HTTP e código que asuma que a orde normal de carga de plugins xa se completou.

## Exemplo mínimo {#minimal-example}

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

Despois de despregar o ficheiro, carga un dominio asignado e unha URL do sitio principal sen asignar para confirmar que ambos os camiños seguen arrancando correctamente.
