---
title: Documentación para desenvolvedores
sidebar_position: 1
_i18n_hash: 93892019464929842d9a6f4fdfdecbe7
---
# Documentación para desenvolvedores {#developer-documentation}

Esta guía proporciona aos desenvolvedores todo o necesario para integrarse con Ultimate Multisite, estendelo ou desenvolver complementos para el. Ultimate Multisite transforma unha rede WordPress Multisite nunha plataforma Website-as-a-Service (WaaS).

## Que está dispoñible {#whats-available}

- **[REST API](./rest-api/overview)** — Operacións CRUD completas para todas as entidades (clientes, sitios, adhesións, pagamentos, produtos, dominios) con autenticación mediante clave de API
- **[Referencia de hooks](./hooks/guide)** — Máis de 200 hooks de acción e máis de 280 hooks de filtro para eventos do ciclo de vida e personalización
- **[Guía de integración](./integration-guide/)** — Exemplos para integración con CRM, analítica, pasarelas personalizadas e webhooks
- **[Exemplos de código](./code-examples/)** — Patróns avanzados para prezos dinámicos, aprovisionamento de sitios, limitacións personalizadas e procesamento con varias pasarelas
- **[Desenvolvemento de complementos](./addon-development/getting-started)** — Marco estruturado para crear plugins de complemento

## Requisitos {#requirements}

- Instalación de WordPress Multisite
- PHP 7.4 ou superior
- Plugin Ultimate Multisite activado

## Instalación con Composer / Bedrock {#composer--bedrock-installation}

Ultimate Multisite está dispoñible en [Packagist](https://packagist.org/packages/ultimate-multisite/ultimate-multisite) como `ultimate-multisite/ultimate-multisite`. Este é o método de instalación recomendado para configuracións de WordPress baseadas en [Bedrock](https://roots.io/bedrock/) e outros contornos xestionados con Composer.

```bash
composer require ultimate-multisite/ultimate-multisite
```

:::note Paquete renomeado (v2.6.1+)
O paquete de Composer renomeouse de `devstone/ultimate-multisite` a `ultimate-multisite/ultimate-multisite` na v2.6.1. Se o teu `composer.json` fai referencia ao nome antigo do provedor, actualiza a entrada require e executa `composer update`.
:::

Despois da instalación, activa o plugin na rede desde o Network Admin:

```bash
wp plugin activate ultimate-multisite --network
```

Ou, se estás cargando o plugin como un plugin de uso obrigatorio a través do autoloader de Bedrock, usa o filtro `wp_ultimo_skip_network_active_check` para omitir a protección de activación:

```php
add_filter( 'wp_ultimo_skip_network_active_check', '__return_true' );
```

## Inicio rápido {#quick-start}

### Usa a REST API {#use-the-rest-api}

```bash
curl -u "api_key:api_secret" https://yoursite.com/wp-json/wu/v2/customers
```

### Conéctate aos eventos {#hook-into-events}

```php
add_action('wu_customer_post_create', function($customer) {
    // React to new customer signups
});
```

### Crea un complemento {#build-an-addon}

```bash
# Generate addon scaffold from the template
bash create-addon.sh
```

Consulta cada sección para obter documentación detallada e exemplos.
