---
title: Dokumentasyon sa Developer
sidebar_position: 1
_i18n_hash: 93892019464929842d9a6f4fdfdecbe7
---
# Dokumentasyon para sa Developer {#developer-documentation}

Kining giya naghatag sa mga developer og tanan nga kinahanglan aron makakonekta, makapalapad, o makamugna og mga addon alang sa Ultimate Multisite. Ang Ultimate Multisite nagbag-o sa usa ka WordPress Multisite network ngadto sa usa ka Website-as-a-Service (WaaS) platform.

## Unsa ang Available {#whats-available}

- **[REST API](./rest-api/overview)** — Kumpleto nga CRUD operations alang sa tanang entities (customers, sites, memberships, payments, products, domains) uban ang API key authentication
- **[Hooks Reference](./hooks/guide)** — 200+ action hooks ug 280+ filter hooks para sa mga lifecycle events ug customization
- **[Integration Guide](./integration-guide/)** — Mga ehemplo alang sa CRM integration, analytics, custom gateways, ug webhooks
- **[Code Examples](./code-examples/)** — Advanced patterns para sa dynamic pricing, site provisioning, custom limitations, ug multi-gateway processing
- **[Addon Development](./addon-development/getting-started)** — Structured framework para paghimo og addon plugins

## Requirements {#requirements}

- WordPress Multisite installation
- PHP 7.4 or higher
- Ultimate Multisite plugin activated

## Composer / Bedrock Installation {#composer--bedrock-installation}

Ang Ultimate Multisite makita sa [Packagist](https://packagist.org/packages/ultimate-multisite/ultimate-multisite) isip `ultimate-multisite/ultimate-multisite`. Kini ang girekomendar nga paagi sa pag-instalar alang sa mga Bedrock-based WordPress setups ug uban pang Composer-managed environments.

```bash
composer require ultimate-multisite/ultimate-multisite
```

:::note Renamed package (v2.6.1+)
Ang Composer package giusab ang ngalan gikan sa `devstone/ultimate-multisite` ngadto sa `ultimate-multisite/ultimate-multisite` sa v2.6.1. Kung ang imong `composer.json` naghisgot pa sa daan nga vendor name, i-update ang require entry ug pagpadagan og `composer update`.
:::

Pagkahuman sa pag-instalar, network-activate ang plugin gikan sa Network Admin:

```bash
wp plugin activate ultimate-multisite --network
```

O, kung ikaw nagloada sa plugin isip must-use plugin pinaagi sa Bedrock's autoloader, gamita ang `wp_ultimo_skip_network_active_check` filter aron malikayan ang activation guard:

```php
add_filter( 'wp_ultimo_skip_network_active_check', '__return_true' );
```

## Quick Start {#quick-start}

### Gamit ang REST API {#use-the-rest-api}

```bash
curl -u "api_key:api_secret" https://yoursite.com/wp-json/wu/v2/customers
```

### Pagkonekta sa Events (Hooking) {#hook-into-events}

```php
add_action('wu_customer_post_create', function($customer) {
    // React to new customer signups
});
```

### Paggama og Addon {#build-an-addon}

```bash
# Generate addon scaffold from the template
bash create-addon.sh
```

Tan-awa ang matag seksyon alang sa detalyado nga dokumentasyon ug mga ehemplo.
