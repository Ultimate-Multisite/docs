---
title: ڈویلپر ڈاکومنٹیشن
sidebar_position: 1
_i18n_hash: 93892019464929842d9a6f4fdfdecbe7
---
# Developer Documentation {#developer-documentation}

یہ گائیڈ ڈویلپرز کو وہ سب کچھ فراہم کرتی ہے جو Ultimate Multisite کے ساتھ انٹیگریٹ کرنے، اسے بڑھانے، یا اس کے لیے ایڈ آنز تیار کرنے کے لیے ضروری ہے۔ Ultimate Multisite ایک WordPress Multisite network کو Website-as-a-Service (WaaS) پلیٹ فارم میں تبدیل کرتا ہے۔

## What's Available {#whats-available}

- **[REST API](./rest-api/overview)** — تمام entities (customers, sites, memberships, payments, products, domains) کے لیے مکمل CRUD آپریشنز، API key authentication کے ساتھ۔
- **[Hooks Reference](./hooks/guide)** — lifecycle events اور customization کے لیے 200+ action hooks اور 280+ filter hooks۔
- **[Integration Guide](./integration-guide/)** — CRM integration، analytics، custom gateways، اور webhooks کے لیے مثالیں۔
- **[Code Examples](./code-examples/)** — dynamic pricing، site provisioning، custom limitations، اور multi-gateway processing کے لیے ایڈوانس پیٹرن۔
- **[Addon Development](./addon-development/getting-started)** — ایڈ آن پلگنز بنانے کے لیے ایک منظم فریم ورک۔

## Requirements {#requirements}

- WordPress Multisite installation
- PHP 7.4 یا اس سے زیادہ
- Ultimate Multisite plugin activated

## Composer / Bedrock Installation {#composer--bedrock-installation}

Ultimate Multisite [Packagist](https://packagist.org/packages/ultimate-multisite/ultimate-multisite) پر `ultimate-multisite/ultimate-multisite` کے طور پر دستیاب ہے۔ یہ [Bedrock](https://roots.io/bedrock/)-based WordPress setups اور دیگر Composer-managed environments کے لیے تجویز کردہ انسٹالیشن طریقہ ہے۔

```bash
composer require ultimate-multisite/ultimate-multisite
```

:::note Renamed package (v2.6.1+)
Composer package کو v2.6.1 میں `devstone/ultimate-multisite` سے تبدیل کر کے `ultimate-multisite/ultimate-multisite` کر دیا گیا تھا۔ اگر آپ کی `composer.json` پرانے vendor name کا حوالہ دیتی ہے، تو require entry کو اپ ڈیٹ کریں اور `composer update` چلائیں۔
:::

انسٹال کرنے کے بعد، Network Admin سے پلگ ان کو network-activate کریں:

```bash
wp plugin activate ultimate-multisite --network
```

یا، اگر آپ Bedrock کے autoloader کے ذریعے پلگ ان کو must-use plugin کے طور پر لوڈ کر رہے ہیں، تو activation guard کو بائی پاس کرنے کے لیے `wp_ultimo_skip_network_active_check` filter استعمال کریں:

```php
add_filter( 'wp_ultimo_skip_network_active_check', '__return_true' );
```

## Quick Start {#quick-start}

### Use the REST API {#use-the-rest-api}

```bash
curl -u "api_key:api_secret" https://yoursite.com/wp-json/wu/v2/customers
```

### Hook into Events {#hook-into-events}

```php
add_action('wu_customer_post_create', function($customer) {
    // React to new customer signups
});
```

### Build an Addon {#build-an-addon}

```bash
# Generate addon scaffold from the template
bash create-addon.sh
```

تفصیلی دستاویزات اور مثالوں کے لیے ہر سیکشن دیکھیں۔
