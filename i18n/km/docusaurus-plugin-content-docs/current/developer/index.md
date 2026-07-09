---
title: ឯកសារសម្រាប់អ្នកអភិវឌ្ឍន៍
sidebar_position: 1
_i18n_hash: 93892019464929842d9a6f4fdfdecbe7
---
# ឯកសារសម្រាប់អ្នកអភិវឌ្ឍន៍

មគ្គុទ្ទេសក៍នេះផ្តល់អ្វីៗទាំងអស់ដែលអ្នកអភិវឌ្ឍន៍ត្រូវការ ដើម្បីភ្ជាប់ ប្រើពង្រីក ឬអភិវឌ្ឍ addon សម្រាប់ Ultimate Multisite។ Ultimate Multisite បម្លែង WordPress Multisite network ទៅជាវេទិកា Website-as-a-Service (WaaS)។

## អ្វីដែលមាន

- **[REST API](./rest-api/overview)** — ប្រតិបត្តិការ CRUD ពេញលេញសម្រាប់ធាតុទាំងអស់ (អតិថិជន, site, សមាជិកភាព, ការទូទាត់, ផលិតផល, domain) ជាមួយការផ្ទៀងផ្ទាត់ដោយ API key
- **[ឯកសារយោង Hooks](./hooks/guide)** — action hooks ជាង 200 និង filter hooks ជាង 280 សម្រាប់ព្រឹត្តិការណ៍វដ្តជីវិត និងការកែតម្រូវ
- **[មគ្គុទ្ទេសក៍ការភ្ជាប់](./integration-guide/)** — ឧទាហរណ៍សម្រាប់ការភ្ជាប់ CRM, វិភាគទិន្នន័យ, gateway ផ្ទាល់ខ្លួន និង webhooks
- **[ឧទាហរណ៍កូដ](./code-examples/)** — លំនាំកម្រិតខ្ពស់សម្រាប់តម្លៃបែបថាមវន្ត, ការបង្កើត site, ដែនកំណត់ផ្ទាល់ខ្លួន និងដំណើរការ multi-gateway
- **[ការអភិវឌ្ឍ Addon](./addon-development/getting-started)** — គ្រោងការណ៍មានរចនាសម្ព័ន្ធសម្រាប់បង្កើត addon plugins

## តម្រូវការ

- ការដំឡើង WordPress Multisite
- PHP 7.4 ឬខ្ពស់ជាងនេះ
- Ultimate Multisite plugin បានធ្វើឱ្យសកម្ម

## ការដំឡើង Composer / Bedrock

Ultimate Multisite មាននៅលើ [Packagist](https://packagist.org/packages/ultimate-multisite/ultimate-multisite) ជា `ultimate-multisite/ultimate-multisite`។ នេះគឺជាវិធីដំឡើងដែលបានណែនាំសម្រាប់ការរៀបចំ WordPress ផ្អែកលើ [Bedrock](https://roots.io/bedrock/) និងបរិស្ថានផ្សេងទៀតដែលគ្រប់គ្រងដោយ Composer។

```bash
composer require ultimate-multisite/ultimate-multisite
```

:::note បានប្តូរឈ្មោះ package (v2.6.1+)
Composer package ត្រូវបានប្តូរឈ្មោះពី `devstone/ultimate-multisite` ទៅជា `ultimate-multisite/ultimate-multisite` ក្នុង v2.6.1។ ប្រសិនបើ `composer.json` របស់អ្នកយោងទៅឈ្មោះ vendor ចាស់ សូមធ្វើបច្ចុប្បន្នភាព require entry ហើយដំណើរការ `composer update`។
:::

បន្ទាប់ពីដំឡើងរួច សូមធ្វើឱ្យ plugin សកម្មនៅកម្រិត network ពីផ្នែកគ្រប់គ្រងបណ្តាញ៖

```bash
wp plugin activate ultimate-multisite --network
```

ឬ ប្រសិនបើអ្នកកំពុងផ្ទុក plugin ជា must-use plugin តាមរយៈ autoloader របស់ Bedrock សូមប្រើ filter `wp_ultimo_skip_network_active_check` ដើម្បីរំលង activation guard៖

```php
add_filter( 'wp_ultimo_skip_network_active_check', '__return_true' );
```

## ចាប់ផ្តើមរហ័ស

### ប្រើ REST API

```bash
curl -u "api_key:api_secret" https://yoursite.com/wp-json/wu/v2/customers
```

### ភ្ជាប់ទៅព្រឹត្តិការណ៍

```php
add_action('wu_customer_post_create', function($customer) {
    // React to new customer signups
});
```

### បង្កើត Addon

```bash
# Generate addon scaffold from the template
bash create-addon.sh
```

សូមមើលផ្នែកនីមួយៗសម្រាប់ឯកសារលម្អិត និងឧទាហរណ៍។
