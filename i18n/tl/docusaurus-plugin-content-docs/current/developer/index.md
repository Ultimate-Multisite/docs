---
title: Dokumentasyon para sa Developer
sidebar_position: 1
_i18n_hash: 93892019464929842d9a6f4fdfdecbe7
---
# Dokumentasyon para sa Developer {#developer-documentation}

Ang gabay na ito ay nagbibigay sa mga developer ng lahat ng kailangan upang mag-integrate sa, mag-extend, o gumawa ng mga addon para sa Ultimate Multisite. Binabago ng Ultimate Multisite ang isang WordPress Multisite network upang maging Website-as-a-Service (WaaS) platform.

## Ano ang Available {#whats-available}

- **[REST API](./rest-api/overview)** — Kumpletong mga operasyon ng CRUD para sa lahat ng entity (mga customer, site, membership, pagbabayad, product, domain) na may pagpapatunay gamit ang API key
- **[Sanggunian sa Hooks](./hooks/guide)** — 200+ action hook at 280+ filter hook para sa mga lifecycle event at pagpapasadya
- **[Gabay sa Integration](./integration-guide/)** — Mga halimbawa para sa CRM integration, analytics, custom gateway, at webhook
- **[Mga Halimbawa ng Code](./code-examples/)** — Mga advanced na pattern para sa dynamic pricing, paglalaan ng site, custom na limitasyon, at multi-gateway processing
- **[Pag-develop ng Addon](./addon-development/getting-started)** — Nakabalangkas na framework para sa paggawa ng mga addon plugin

## Mga Kinakailangan {#requirements}

- WordPress Multisite installation
- PHP 7.4 o mas mataas
- Ultimate Multisite plugin na naka-activate

## Composer / Bedrock Installation {#composer--bedrock-installation}

Available ang Ultimate Multisite sa [Packagist](https://packagist.org/packages/ultimate-multisite/ultimate-multisite) bilang `ultimate-multisite/ultimate-multisite`. Ito ang inirerekomendang paraan ng installation para sa mga WordPress setup na batay sa [Bedrock](https://roots.io/bedrock/) at iba pang environment na pinamamahalaan ng Composer.

```bash
composer require ultimate-multisite/ultimate-multisite
```

:::note Pinalitang pangalan ng package (v2.6.1+)
Pinalitan ang pangalan ng Composer package mula `devstone/ultimate-multisite` tungo sa `ultimate-multisite/ultimate-multisite` sa v2.6.1. Kung ang iyong `composer.json` ay tumutukoy sa lumang pangalan ng vendor, i-update ang require entry at patakbuhin ang `composer update`.
:::

Pagkatapos ng installation, i-network-activate ang plugin mula sa Network Admin:

```bash
wp plugin activate ultimate-multisite --network
```

O, kung nilo-load mo ang plugin bilang must-use plugin sa pamamagitan ng autoloader ng Bedrock, gamitin ang `wp_ultimo_skip_network_active_check` filter upang lampasan ang activation guard:

```php
add_filter( 'wp_ultimo_skip_network_active_check', '__return_true' );
```

## Mabilis na Pagsisimula {#quick-start}

### Gamitin ang REST API {#use-the-rest-api}

```bash
curl -u "api_key:api_secret" https://yoursite.com/wp-json/wu/v2/customers
```

### Mag-hook sa mga Event {#hook-into-events}

```php
add_action('wu_customer_post_create', function($customer) {
    // React to new customer signups
});
```

### Gumawa ng Addon {#build-an-addon}

```bash
# Generate addon scaffold from the template
bash create-addon.sh
```

Tingnan ang bawat seksyon para sa detalyadong dokumentasyon at mga halimbawa.
