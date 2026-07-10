---
title: Inyandiko z’abateza imbere porogaramu
sidebar_position: 1
_i18n_hash: 93892019464929842d9a6f4fdfdecbe7
---
# Inyandiko z’Abateza imbere {#developer-documentation}

Uyu muyoboro uha abateza imbere ibikenewe byose kugira ngo bahuze na Ultimate Multisite, bayagure, cyangwa bateze imbere addons zayo. Ultimate Multisite ihindura urusobe rwa WordPress Multisite rukaba urubuga rwa Website-as-a-Service (WaaS).

## Ibiboneka {#whats-available}

- **[REST API](./rest-api/overview)** — Ibikorwa byuzuye bya CRUD ku bice byose (abakiriya, site, ubunyamuryango, ubwishyu, ibicuruzwa, domains) hakoreshejwe kwemeza hakoreshejwe API key
- **[Ishakiro rya Hooks](./hooks/guide)** — action hooks 200+ na filter hooks 280+ ku bikorwa by’ubuzima bw’ikintu na customization
- **[Umuyoboro wo Guhuza](./integration-guide/)** — Ingero zo guhuza na CRM, analytics, custom gateways, na webhooks
- **[Ingero za Code](./code-examples/)** — Uburyo buhanitse bwa pricing ihinduka, gutegura site, custom limitations, no gutunganya multi-gateway
- **[Guteza imbere Addon](./addon-development/getting-started)** — Framework ifite imiterere yo kubaka addon plugins

## Ibisabwa {#requirements}

- Installation ya WordPress Multisite
- PHP 7.4 cyangwa irenga
- Ultimate Multisite plugin yakoreshejwe

## Installation ya Composer / Bedrock {#composer--bedrock-installation}

Ultimate Multisite iboneka kuri [Packagist](https://packagist.org/packages/ultimate-multisite/ultimate-multisite) nka `ultimate-multisite/ultimate-multisite`. Ubu ni bwo buryo busabwa bwo kuyishyiramo ku miterere ya WordPress ishingiye kuri [Bedrock](https://roots.io/bedrock/) n’izindi environments zicungwa na Composer.

```bash
composer require ultimate-multisite/ultimate-multisite
```

:::note Package yahinduriwe izina (v2.6.1+)
Composer package yahinduwe izina iva kuri `devstone/ultimate-multisite` ijya kuri `ultimate-multisite/ultimate-multisite` muri v2.6.1. Niba `composer.json` yawe yerekeza ku izina rya vendor rya kera, vugurura require entry hanyuma ukoreshe `composer update`.
:::

Nyuma yo kuyishyiramo, network-activate plugin uhereye kuri Network Admin:

```bash
wp plugin activate ultimate-multisite --network
```

Cyangwa, niba uri gupakira plugin nka must-use plugin ukoresheje autoloader ya Bedrock, koresha filter ya `wp_ultimo_skip_network_active_check` kugira ngo wirengagize activation guard:

```php
add_filter( 'wp_ultimo_skip_network_active_check', '__return_true' );
```

## Gutangira vuba {#quick-start}

### Koresha REST API {#use-the-rest-api}

```bash
curl -u "api_key:api_secret" https://yoursite.com/wp-json/wu/v2/customers
```

### Huza na Events {#hook-into-events}

```php
add_action('wu_customer_post_create', function($customer) {
    // React to new customer signups
});
```

### Kubaka Addon {#build-an-addon}

```bash
# Generate addon scaffold from the template
bash create-addon.sh
```

Reba buri cyiciro kugira ngo ubone inyandiko n’ingero birambuye.
