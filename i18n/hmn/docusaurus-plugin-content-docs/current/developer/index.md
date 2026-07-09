---
title: Cov ntaub ntawv rau cov neeg tsim kho
sidebar_position: 1
_i18n_hash: 93892019464929842d9a6f4fdfdecbe7
---
# Ntaub Ntawv Qhia Rau Developer

Phau ntawv qhia no muab txhua yam uas cov developer xav tau los txuas nrog, nthuav ntxiv, lossis tsim addon rau Ultimate Multisite. Ultimate Multisite hloov ib lub WordPress Multisite network mus ua ib lub Website-as-a-Service (WaaS) platform.

## Yam Muaj Rau Siv

- **[REST API](./rest-api/overview)** — CRUD operations tiav rau txhua entity (cov neeg yuav khoom, cov site, cov membership, cov kev them nyiaj, cov khoom, cov domain) nrog API key authentication
- **[Hooks Reference](./hooks/guide)** — 200+ action hooks thiab 280+ filter hooks rau lifecycle events thiab kev kho raws xav tau
- **[Integration Guide](./integration-guide/)** — Cov piv txwv rau CRM integration, analytics, custom gateways, thiab webhooks
- **[Code Examples](./code-examples/)** — Cov qauv siab dua rau dynamic pricing, site provisioning, custom limitations, thiab multi-gateway processing
- **[Addon Development](./addon-development/getting-started)** — Lub framework muaj qauv rau tsim addon plugins

## Yam Yuav Tsum Muaj

- WordPress Multisite installation
- PHP 7.4 lossis siab dua
- Ultimate Multisite plugin tau qhib lawm

## Composer / Bedrock Installation

Ultimate Multisite muaj nyob rau [Packagist](https://packagist.org/packages/ultimate-multisite/ultimate-multisite) li `ultimate-multisite/ultimate-multisite`. Nov yog txoj kev installation uas pom zoo rau WordPress setups raws [Bedrock](https://roots.io/bedrock/) thiab lwm cov environment uas tswj los ntawm Composer.

```bash
composer require ultimate-multisite/ultimate-multisite
```

:::note Tau hloov npe package (v2.6.1+)
Composer package tau hloov npe los ntawm `devstone/ultimate-multisite` mus rau `ultimate-multisite/ultimate-multisite` hauv v2.6.1. Yog tias koj `composer.json` tseem siv vendor name qub, hloov require entry thiab khiav `composer update`.
:::

Tom qab installation, network-activate lub plugin ntawm Network Admin:

```bash
wp plugin activate ultimate-multisite --network
```

Los yog, yog tias koj tab tom load lub plugin ua ib must-use plugin los ntawm Bedrock's autoloader, siv `wp_ultimo_skip_network_active_check` filter kom hla activation guard:

```php
add_filter( 'wp_ultimo_skip_network_active_check', '__return_true' );
```

## Pib Sai

### Siv REST API

```bash
curl -u "api_key:api_secret" https://yoursite.com/wp-json/wu/v2/customers
```

### Hook rau hauv Events

```php
add_action('wu_customer_post_create', function($customer) {
    // React to new customer signups
});
```

### Tsim ib Addon

```bash
# Generate addon scaffold from the template
bash create-addon.sh
```

Saib txhua ntu rau ntaub ntawv qhia ntxaws thiab cov piv txwv.
