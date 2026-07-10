---
title: ਡਿਵੈਲਪਰ ਡਾਕੂਮੈਂਟੇਸ਼ਨ
sidebar_position: 1
_i18n_hash: 93892019464929842d9a6f4fdfdecbe7
---
# ਡਿਵੈਲਪਰ ਡਾਕੂਮੈਂਟੇਸ਼ਨ {#developer-documentation}

ਇਹ ਗਾਈਡ ਡਿਵੈਲਪਰਾਂ ਨੂੰ Ultimate Multisite ਨਾਲ ਇੰਟੀਗ੍ਰੇਟ ਕਰਨ, ਇਸਨੂੰ ਐਕਸਟੈਂਡ ਕਰਨ, ਜਾਂ ਇਸ ਲਈ ਐਡਨ (addons) ਬਣਾਉਣ ਲਈ ਲੋੜੀਂਦੀ ਹਰ ਚੀਜ਼ ਪ੍ਰਦਾਨ ਕਰਦੀ ਹੈ। Ultimate Multisite ਇੱਕ WordPress Multisite ਨੈੱਟਵਰਕ ਨੂੰ Website-as-a-Service (WaaS) ਪਲੇਟਫਾਰਮ ਵਿੱਚ ਬਦਲ ਦਿੰਦਾ ਹੈ।

## ਕੀ-ਕੀ ਉਪਲਬਧ ਹੈ {#whats-available}

- **[REST API](./rest-api/overview)** — API key authentication ਨਾਲ ਸਾਰੇ ਐਂਟੀਟੀਆਂ (customers, sites, memberships, payments, products, domains) ਲਈ ਪੂਰੇ CRUD ਆਪਰੇਸ਼ਨ।
- **[Hooks Reference](./hooks/guide)** — ਲਾਈਫਸਾਈਕਲ (lifecycle) ਘਟਨਾਵਾਂ ਅਤੇ ਕਸਟਮਾਈਜ਼ੇਸ਼ਨ ਲਈ 200+ ਐਕਸ਼ਨ ਹੁੱਕਸ ਅਤੇ 280+ ਫਿਲਟਰ ਹੁੱਕਸ।
- **[Integration Guide](./integration-guide/)** — CRM ਇੰਟੀਗ੍ਰੇਸ਼ਨ, ਐਨਾਲਿਟਿਕਸ, ਕਸਟਮ ਗੇਟਵੇਅਜ਼, ਅਤੇ ਵੈਬਹੂਕਸ ਲਈ ਉਦਾਹਰਣਾਂ।
- **[Code Examples](./code-examples/)** — ਡਾਇਨਾਮਿਕ ਪ੍ਰਾਈਸਿੰਗ, ਸਾਈਟ ਪ੍ਰੋਵੀਜ਼ਨਿੰਗ, ਕਸਟਮ ਲਿਮਿਟੇਸ਼ਨ, ਅਤੇ ਮਲਟੀ-ਗੇਟਵੇ ਪ੍ਰੋਸੈਸਿੰਗ ਲਈ ਐਡਵਾਂਸ ਪੈਟਰਨ।
- **[Addon Development](./addon-development/getting-started)** — ਐਡਨ ਪਲੱਗਇਨ ਬਣਾਉਣ ਲਈ ਇੱਕ ਸਟ੍ਰਕਚਰਡ ਫਰੇਮਵਰਕ।

## ਲੋੜਾਂ {#requirements}

- WordPress Multisite ਇੰਸਟਾਲੇਸ਼ਨ
- PHP 7.4 ਜਾਂ ਇਸ ਤੋਂ ਵੱਧ
- Ultimate Multisite ਪਲੱਗਇਨ ਐਕਟੀਵੇਟ ਹੋਣਾ ਚਾਹੀਦਾ ਹੈ

## Composer / Bedrock ਇੰਸਟਾਲੇਸ਼ਨ {#composer--bedrock-installation}

Ultimate Multisite [Packagist](https://packagist.org/packages/ultimate-multisite/ultimate-multisite) 'ਤੇ `ultimate-multisite/ultimate-multisite` ਵਜੋਂ ਉਪਲਬਧ ਹੈ। ਇਹ [Bedrock](https://roots.io/bedrock/)-ਆਧਾਰਿਤ WordPress ਸੈਟਅੱਪਾਂ ਅਤੇ ਹੋਰ Composer-ਮੈਨੇਜਡ ਐਨਵਾਇਰਨਮੈਂਟਾਂ ਲਈ ਸਿਫਾਰਸ਼ ਕੀਤਾ ਗਿਆ ਇੰਸਟਾਲੇਸ਼ਨ ਤਰੀਕਾ ਹੈ।

```bash
composer require ultimate-multisite/ultimate-multisite
```

:::note ਨਾਮ ਬਦਲਿਆ ਪੈਕੇਜ (Renamed package) (v2.6.1+)
Composer ਪੈਕੇਜ v2.6.1 ਵਿੱਚ `devstone/ultimate-multisite` ਤੋਂ `ultimate-multisite/ultimate-multisite` ਵਜੋਂ ਨਾਮ ਬਦਲਿਆ ਗਿਆ ਸੀ। ਜੇਕਰ ਤੁਹਾਡਾ `composer.json` ਪੁਰਾਣੇ ਵੈਂਡਰ ਨਾਮ ਦਾ ਹਵਾਲਾ ਦਿੰਦਾ ਹੈ, ਤਾਂ ਕਿਰਪਾ ਕਰਕੇ require ਐਂਟਰੀ ਨੂੰ ਅਪਡੇਟ ਕਰੋ ਅਤੇ `composer update` ਚਲਾਓ।
:::

ਇੰਸਟਾਲ ਕਰਨ ਤੋਂ ਬਾਅਦ, ਨੈੱਟਵਰਕ ਐਡਮਿਨ (Network Admin) ਤੋਂ ਪਲੱਗਇਨ ਨੂੰ network-activate ਕਰੋ:

```bash
wp plugin activate ultimate-multisite --network
```

ਜਾਂ, ਜੇ ਤੁਸੀਂ Bedrock ਦੇ autoloader ਰਾਹੀਂ ਇਸ ਪਲੱਗਇਨ ਨੂੰ must-use ਪਲੱਗਇਨ ਵਜੋਂ ਲੋਡ ਕਰ ਰਹੇ ਹੋ, ਤਾਂ ਐਕਟੀਵੇਸ਼ਨ ਗਾਰਡ ਨੂੰ ਬਾਈਪਾਸ ਕਰਨ ਲਈ `wp_ultimo_skip_network_active_check` ਫਿਲਟਰ ਦੀ ਵਰਤੋਂ ਕਰੋ:

```php
add_filter( 'wp_ultimo_skip_network_active_check', '__return_true' );
```

## ਜਲਦੀ ਸ਼ੁਰੂਆਤ (Quick Start) {#quick-start}

### REST API ਦੀ ਵਰਤੋਂ ਕਰੋ {#use-the-rest-api}

```bash
curl -u "api_key:api_secret" https://yoursite.com/wp-json/wu/v2/customers
```

### ਘਟਨਾਵਾਂ ਨਾਲ ਜੁੜੋ (Hook into Events) {#hook-into-events}

```php
add_action('wu_customer_post_create', function($customer) {
    // React to new customer signups
});
```

### ਇੱਕ ਐਡਨ ਬਣਾਓ (Build an Addon) {#build-an-addon}

```bash
# Generate addon scaffold from the template
bash create-addon.sh
```

ਵਧੇਰੇ ਵੇਰਵੇ ਅਤੇ ਉਦਾਹਰਣਾਂ ਲਈ ਹਰੇਕ ਸੈਕਸ਼ਨ ਵੇਖੋ।
