---
title: Addon Sunrise File Loader
sidebar_position: 5
_i18n_hash: 2b24e0c6cf53f4dab0334db99a3b267b
---
# Carga de Archivos Sunrise de Addon

Ultimate Multisite 2.8.0 añade un cargador de extensiones sunrise para add-ons e integraciones personalizadas de MU-plugin que necesitan ejecutarse durante el arranque (bootstrapping) de WordPress sunrise sin tener que editar el archivo `wp-content/sunrise.php` generado.

## Cuándo usarlo

Utiliza una extensión sunrise cuando tu integración deba ejecutarse antes de que se carguen los plugins regulares, como en el enrutamiento de dominios personalizados, el manejo de peticiones específicas del host o ajustes tempranos del arranque de la red.

Para integraciones normales, prefiere los plugins regulares de WordPress, los MU-plugins y los hooks documentados de Ultimate Multisite. El código sunrise se ejecuta muy temprano y debe mantenerse pequeño, defensivo y sin dependencias.

## Convención de nombres de archivos

Crea un archivo PHP llamado `sunrise.php` en un directorio de addon cuyo nombre comience con `ultimate-multisite-`:

```text
wp-content/plugins/ultimate-multisite-example-addon/sunrise.php
```

El cargador escanea el directorio de plugins buscando este patrón:

```text
wp-content/plugins/ultimate-multisite-*/sunrise.php
```

Los archivos que coinciden se cargan en orden alfabético según la ruta del addon.

## Dónde colocar el archivo

Coloca el archivo en el directorio raíz del addon que posee el comportamiento sunrise:

```text
wp-content/
└── plugins/
    └── ultimate-multisite-example-addon/
        ├── ultimate-multisite-example-addon.php
        └── sunrise.php
```

El escaneo se resuelve con respecto a `WP_CONTENT_DIR`, no al valor actual de `WP_PLUGIN_DIR`. Esto mantiene el descubrimiento estable cuando la multi-tenencia u otro código de arranque temprano cambia las constantes del directorio de plugins durante el sunrise.

No edites directamente el archivo `wp-content/sunrise.php` generado. El cargador permite que el código personalizado extienda el comportamiento sunrise sin tener que modificar el archivo core de sunrise que Ultimate Multisite instala y actualiza.

## Hooks y filtros disponibles

Los archivos sunrise de addon se ejecutan después de que el mapeo de dominios de Ultimate Multisite se ha cargado y antes de que WordPress dispare `ms_loaded`. En este punto, un archivo sunrise puede:

- leer o anular `$current_site` y `$current_blog`;
- acceder a `$wpdb` después de que se haya cargada la configuración de la base de datos;
- definir constantes de tiempo sunrise como `BLOG_ID_CURRENT_SITE` cuando sea necesario;
- leer el estado del helper sunrise de Ultimate Multisite, incluido el estado de enrutamiento utilizado por las integraciones multi-tenancy.

Ultimate Multisite dispara `wu_sunrise_loaded` después de que su cargador sunrise ha finalizado. Utiliza esa acción para el código que debe ejecutarse después de que el arranque sunrise esté completo, pero que aún pertenece al ciclo de vida sunrise.

Solo llama a funciones que ya estén cargadas en la fase sunrise. Evita el trabajo pesado con la base de datos, la renderización de plantillas, las peticiones HTTP y el código que asume que se ha completado el orden normal de carga de plugins.

## Ejemplo mínimo

```php
<?php
/**
 * Extensión sunrise para una integración de host personalizada.
 */

if (! defined('ABSPATH')) {
    exit;
}

if (isset($current_blog) && $current_blog instanceof stdClass) {
    // Ajusta el enrutamiento o las constantes tempranas antes de ms_loaded.
}
```

Después de implementar el archivo, carga un dominio mapeado y una URL de sitio principal no mapeada para confirmar que ambas rutas siguen arrancando correctamente.
