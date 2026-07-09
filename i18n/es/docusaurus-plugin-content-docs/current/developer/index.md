---
title: Documentación para desarrolladores
sidebar_position: 1
_i18n_hash: 93892019464929842d9a6f4fdfdecbe7
---
# Documentación para desarrolladores {#developer-documentation}

Esta guía proporciona a los desarrolladores todo lo necesario para integrarse con Ultimate Multisite, ampliarlo o desarrollar addons para él. Ultimate Multisite transforma una red WordPress Multisite en una plataforma Website-as-a-Service (WaaS).

## Qué hay disponible {#whats-available}

- **[REST API](./rest-api/overview)** — Operaciones CRUD completas para todas las entidades (clientes, sitios, membresías, pagos, productos, dominios) con autenticación mediante clave API
- **[Referencia de hooks](./hooks/guide)** — Más de 200 hooks de acción y más de 280 hooks de filtro para eventos del ciclo de vida y personalización
- **[Guía de integración](./integration-guide/)** — Ejemplos de integración con CRM, analíticas, pasarelas personalizadas y webhooks
- **[Ejemplos de código](./code-examples/)** — Patrones avanzados para precios dinámicos, aprovisionamiento de sitios, limitaciones personalizadas y procesamiento multipasarela
- **[Desarrollo de addons](./addon-development/getting-started)** — Framework estructurado para crear plugins addon

## Requisitos {#requirements}

- Instalación de WordPress Multisite
- PHP 7.4 o superior
- Plugin Ultimate Multisite activado

## Instalación con Composer / Bedrock {#composer--bedrock-installation}

Ultimate Multisite está disponible en [Packagist](https://packagist.org/packages/ultimate-multisite/ultimate-multisite) como `ultimate-multisite/ultimate-multisite`. Este es el método de instalación recomendado para configuraciones de WordPress basadas en [Bedrock](https://roots.io/bedrock/) y otros entornos gestionados con Composer.

```bash
composer require ultimate-multisite/ultimate-multisite
```

:::note Paquete renombrado (v2.6.1+)
El paquete de Composer fue renombrado de `devstone/ultimate-multisite` a `ultimate-multisite/ultimate-multisite` en v2.6.1. Si tu `composer.json` hace referencia al nombre de proveedor antiguo, actualiza la entrada require y ejecuta `composer update`.
:::

Después de la instalación, activa el plugin en la red desde el Administrador de red:

```bash
wp plugin activate ultimate-multisite --network
```

O, si estás cargando el plugin como un plugin must-use mediante el autoloader de Bedrock, usa el filtro `wp_ultimo_skip_network_active_check` para omitir la protección de activación:

```php
add_filter( 'wp_ultimo_skip_network_active_check', '__return_true' );
```

## Inicio rápido {#quick-start}

### Usa la REST API {#use-the-rest-api}

```bash
curl -u "api_key:api_secret" https://yoursite.com/wp-json/wu/v2/customers
```

### Conéctate a eventos {#hook-into-events}

```php
add_action('wu_customer_post_create', function($customer) {
    // React to new customer signups
});
```

### Crea un addon {#build-an-addon}

```bash
# Generate addon scaffold from the template
bash create-addon.sh
```

Consulta cada sección para ver documentación detallada y ejemplos.
