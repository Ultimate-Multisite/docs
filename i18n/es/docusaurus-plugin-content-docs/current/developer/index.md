---
title: Documentación para desarrolladores
sidebar_position: 1
_i18n_hash: 6443e353aea8cf7592387aa5d9658951
---
# Documentación para Desarrolladores

Esta guía proporciona a los desarrolladores todo lo necesario para integrar, ampliar o desarrollar complementos para Ultimate Multisite. Ultimate Multisite transforma una red WordPress Multisite en una plataforma Website-as-a-Service (WaaS).

## Lo que está disponible

- **[REST API](./rest-api/overview)** — Operaciones CRUD completas para todas las entidades (clientes, sitios, membresías, pagos, productos, dominios) con autenticación por clave API
- **[Hooks Reference](./hooks/guide)** — Más de 200 ganchos de acción y más de 280 ganchos de filtro para eventos de ciclo de vida y personalización
- **[Integration Guide](./integration-guide/)** — Ejemplos para integración con CRM, análisis, pasarelas personalizadas y webhooks
- **[Code Examples](./code-examples/)** — Patrones avanzados para precios dinámicos, aprovisionamiento de sitios, limitaciones personalizadas y procesamiento multi-pasarela
- **[Addon Development](./addon-development/getting-started)** — Marco estructurado para construir complementos

## Requisitos

- Instalación de WordPress Multisite
- PHP 7.4 o superior
- Plugin Ultimate Multisite activado

## Inicio rápido

### Usar la REST API

```bash
curl -u "api_key:api_secret" https://yoursite.com/wp-json/wu/v2/customers
```

### Conectar con eventos

```php
add_action('wu_customer_post_create', function($customer) {
    // React to new customer signups
});
```

### Crear un complemento

```bash
# Generate addon scaffold from the template
bash create-addon.sh
```

Consulta cada sección para documentación detallada y ejemplos.
