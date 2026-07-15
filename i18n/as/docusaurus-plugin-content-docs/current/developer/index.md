---
title: ডেভেলপৰ ডকুমেন্টেশ্বন
sidebar_position: 1
_i18n_hash: 93892019464929842d9a6f4fdfdecbe7
---
# ডেভেলপার ডকুমেন্টেশ্যন

এই গাইডখন Ultimate Multisite-ৰ সৈতে ইন্টিগ্রেট কৰিবলৈ, এক্সটেন্ড কৰিবলৈ বা এডন (addons) ডেভেলপ কৰিবলৈ ডেভেলপাৰসকলৰ বাবে সকলো প্ৰয়োজনীয় তথ্য দিয়ে। Ultimate Multisite-এ এটা WordPress Multisite network-ক Website-as-a-Service (WaaS) প্ল্যাটফৰ্মত পৰিণত কৰে।

## কি কি উপলব্ধ {#whats-available}

- **[REST API](./rest-api/overview)** — সকলো প্ৰকাৰৰ CRUD অপাৰেচন (customers, sites, memberships, payments, products, domains) API key authentication লৈ উপলব্ধ।
- **[Hooks Reference](./hooks/guide)** — লাইফ-চক্ৰ ইভেন্ট (lifecycle events) আৰু কাস্টমাইজেশ্যনৰ বাবে ২০০+ action hooks আৰু ২৮০+ filter hooks।
- **[Integration Guide](./integration-guide/)** — CRM ইন্টিগ্ৰেচন, analytics, কাস্টম গেটৱে আৰু webhooks-ৰ বাবে উদাহৰণ।
- **[Code Examples](./code-examples/)** — dynamic pricing, site provisioning, custom limitations, আৰু multi-gateway processing-ৰ বাবে উন্নত ধৰণৰ উদাহৰণ।
- **[Addon Development](./addon-development/getting-started)** — এডন প্লাগইন নিৰ্মাণ কৰাৰ বাবে এটা সুসংগঠিত framework।

## প্ৰয়োজনীয়তা {#requirements}

- WordPress Multisite ইনষ্টলেচন
- PHP 7.4 বা তাতকৈ অধিক
- Ultimate Multisite প্লাগইন active কৰা

## Composer / Bedrock ইনষ্টলেচন {#composer--bedrock-installation}

Ultimate Multisite [Packagist](https://packagist.org/packages/ultimate-multisite/ultimate-multisite) ত `ultimate-multisite/ultimate-multisite` হিচাপে উপলব্ধ। এইটো [Bedrock](https://roots.io/bedrock/)-ভিত্তিক WordPress setup আৰু আন Composer-managed environment-ৰ বাবে প্ৰেৰ্শমান ইনষ্টলেচন পদ্ধতি।

```bash
composer require ultimate-multisite/ultimate-multisite
```

:::note Renamed package (v2.6.1+)
Composer package-টো v2.6.1 ত `devstone/ultimate-multisite` ৰ পৰা `ultimate-multisite/ultimate-multisite` লৈ নাম সলনি কৰা হৈছিল। যদি আপোনাৰ `composer.json` ত পুৰণি vendor name উল্লেখ আছে, তেন্তে require entry টি আপডেট কৰক আৰু `composer update` চলোৱক।
:::

ইনষ্টলেচনৰ পিছত, Network Adminৰ পৰা প্লাগইনটো network-activate কৰক:

```bash
wp plugin activate ultimate-multisite --network
```

অথবা, যদি আপুনি Bedrock-ৰ autoloader মাজেৰে must-use plugin হিচাপে প্লাগইনটো লোড কৰি আছে, তেন্তে activation guard এ ভ্ৰমণ কৰিবলৈ `wp_ultimo_skip_network_active_check` filter ব্যৱহাৰ কৰক:

```php
add_filter( 'wp_ultimo_skip_network_active_check', '__return_true' );
```

## আৰম্ভণি (Quick Start) {#quick-start}

### REST API ব্যৱহাৰ কৰক {#use-the-rest-api}

```bash
curl -u "api_key:api_secret" https://yoursite.com/wp-json/wu/v2/customers
```

### ইভেন্টত Hook কৰক {#hook-into-events}

```php
add_action('wu_customer_post_create', function($customer) {
    // নতুন customer sign-up লৈ প্ৰতিক্ৰিয়া কৰক
});
```

### এডন এটা নিৰ্মাণ কৰক {#build-an-addon}

```bash
# template ካৰ পৰা addon scaffold generate কৰক
bash create-addon.sh
```

বিস্তারিত ডকুমেন্টেশ্যন আৰু উদাহৰণৰ বাবে প্ৰতিটো অংশ চাওক।
