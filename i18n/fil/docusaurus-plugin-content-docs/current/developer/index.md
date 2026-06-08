---
title: Dokumentasyon para sa Developer
sidebar_position: 1
_i18n_hash: 93892019464929842d9a6f4fdfdecbe7
---
# Dokumentasyon para sa mga Developer

Ang gabay na ito ay naglalaman ng lahat ng kailangan ng mga developer para makapag-integrate, makapag-extend, o makagawa ng mga addon para sa Ultimate Multisite. Ginagawang Website-as-a-Service (WaaS) platform ng Ultimate Multisite ang isang WordPress Multisite network.

## Ano ang Available

- **[REST API](./rest-api/overview)** — Kumpletong CRUD operations para sa lahat ng entities (customers, sites, memberships, payments, products, domains) na may API key authentication
- **[Hooks Reference](./hooks/guide)** — Mahigit 200 action hooks at mahigit 280 filter hooks para sa mga lifecycle events at customization
- **[Integration Guide](./integration-guide/)** — Mga halimbawa para sa CRM integration, analytics, custom gateways, at webhooks
- **[Code Examples](./code-examples/)** — Advanced patterns para sa dynamic pricing, site provisioning, custom limitations, at multi-gateway processing
- **[Addon Development](./addon-development/getting-started)** — Structured framework para sa pagbuo ng addon plugins

## Requirements

- WordPress Multisite installation
- PHP 7.4 or higher
- Ultimate Multisite plugin activated

## Composer / Bedrock Installation

Available ang Ultimate Multisite sa [Packagist](https://packagist.org/packages/ultimate-multisite/ultimate-multisite) bilang `ultimate-multisite/ultimate-multisite`. Ito ang inirerekomendang paraan ng pag-install para sa mga setup na gumagamit ng [Bedrock](https://roots.io/bedrock/)-based WordPress at iba pang kapaligirang pinamamahalaan ng Composer.

```bash
composer require ultimate-multisite/ultimate-multisite
```

:::note Renamed package (v2.6.1+)
Ang Composer package ay binago ang pangalan mula sa `devstone/ultimate-multisite` patungong `ultimate-multisite/ultimate-multisite` sa v2.6.1. Kung ang iyong `composer.json` ay tumutukoy sa lumang vendor name, i-update ang require entry at patakbuhin ang `composer update`.
:::

Pagkatapos i-install, i-network-activate ang plugin mula sa Network Admin:

```bash
wp plugin activate ultimate-multisite --network
```

O, kung ikaw ay naglo-load ng plugin bilang must-use plugin sa pamamagitan ng autoloader ng Bedrock, gamitin ang `wp_ultimo_skip_network_active_check` filter para i-bypass ang activation guard:

```php
add_filter( 'wp_ultimo_skip_network_active_check', '__return_true' );
```

## Quick Start

### Gamitin ang REST API

```bash
curl -u "api_key:api_secret" https://yoursite.com/wp-json/wu/v2/customers
```

### Mag-hook sa mga Events

```php
add_action('wu_customer_post_create', function($customer) {
    // React to new customer signups
});
```

Tingnan ang bawat seksyon para sa detalyadong dokumentasyon at mga halimbawa.
