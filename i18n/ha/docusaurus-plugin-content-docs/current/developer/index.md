---
title: Takardun Masu Haɓakawa
sidebar_position: 1
_i18n_hash: 93892019464929842d9a6f4fdfdecbe7
---
# Takardun Masu Ci gaba

Wannan jagora yana ba masu ci gaba duk abin da ake bukata don haɗawa da, faɗaɗa, ko haɓaka addons don Ultimate Multisite. Ultimate Multisite yana sauya WordPress Multisite network zuwa dandalin Website-as-a-Service (WaaS).

## Abin da Akwai

- **[REST API](./rest-api/overview)** — Cikakkun ayyukan CRUD ga dukkan entities (abokan ciniki, sites, memberships, biyan kuɗi, products, domains) tare da tantancewar API key
- **[Hooks Reference](./hooks/guide)** — Fiye da action hooks 200 da fiye da filter hooks 280 don abubuwan lifecycle da keɓancewa
- **[Integration Guide](./integration-guide/)** — Misalai don haɗakar CRM, nazari, custom gateways, da webhooks
- **[Code Examples](./code-examples/)** — Tsare-tsare na gaba don dynamic pricing, samar da site, custom limitations, da sarrafa multi-gateway
- **[Addon Development](./addon-development/getting-started)** — Tsararren framework don gina addon plugins

## Bukatu

- Shigarwar WordPress Multisite
- PHP 7.4 ko sama da haka
- An kunna Ultimate Multisite plugin

## Shigarwar Composer / Bedrock

Ana samun Ultimate Multisite a [Packagist](https://packagist.org/packages/ultimate-multisite/ultimate-multisite) a matsayin `ultimate-multisite/ultimate-multisite`. Wannan ita ce hanyar shigarwa da ake ba da shawara ga saitunan WordPress masu tushe a kan [Bedrock](https://roots.io/bedrock/) da sauran mahallai da Composer ke sarrafawa.

```bash
composer require ultimate-multisite/ultimate-multisite
```

:::note An sake sunan package (v2.6.1+)
An sake sunan Composer package daga `devstone/ultimate-multisite` zuwa `ultimate-multisite/ultimate-multisite` a v2.6.1. Idan `composer.json` ɗinka yana nuni da tsohon sunan vendor, sabunta shigarwar require sannan ka gudana da `composer update`.
:::

Bayan shigarwa, kunna plugin a matakin network daga Network Admin:

```bash
wp plugin activate ultimate-multisite --network
```

Ko, idan kana ɗora plugin a matsayin must-use plugin ta autoloader na Bedrock, yi amfani da filter `wp_ultimo_skip_network_active_check` don kauce wa activation guard:

```php
add_filter( 'wp_ultimo_skip_network_active_check', '__return_true' );
```

## Farawa Cikin Sauri

### Yi amfani da REST API

```bash
curl -u "api_key:api_secret" https://yoursite.com/wp-json/wu/v2/customers
```

### Shiga cikin Abubuwan Da Ke Faruwa

```php
add_action('wu_customer_post_create', function($customer) {
    // React to new customer signups
});
```

### Gina Addon

```bash
# Generate addon scaffold from the template
bash create-addon.sh
```

Duba kowanne sashe don cikakkun takardu da misalai.
