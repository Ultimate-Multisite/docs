---
title: developer documentation
sidebar_position: 1
_i18n_hash: 93892019464929842d9a6f4fdfdecbe7
---
# Developer Documentation {#developer-documentation}

ဒီလမ်းညွှန်က Ultimate Multisite အတွက် Addons တွေနဲ့ ပေါင်းစပ်ဖို့၊ ချဲ့ထွင်ဖို့ ဒါမှမဟုတ် အသစ်တည်ဆောက်ဖို့ လိုအပ်တဲ့ အရာအားလုံးကို developer တွေအတွက် ပေးထားပါတယ်။ Ultimate Multisite ဟာ WordPress Multisite network တစ်ခုလုံးကို Website-as-a-Service (WaaS) platform တစ်ခုအဖြစ် ပြောင်းလဲပေးပါတယ်။

## What's Available {#whats-available}

- **[REST API](./rest-api/overview)** — API key authentication နဲ့ အသုံးပြုနိုင်တဲ့ customer, site, membership, payment, product, domain စတဲ့ အချက်အလက်အစု (entities) အားလုံးအတွက် CRUD လုပ်ဆောင်ချက် အပြည့်အစုံ။
- **[Hooks Reference](./hooks/guide)** — ဘဝသံသရာ အဖြစ်အပျက်တွေနဲ့ စိတ်ကြိုက်ပြင်ဆင်မှုတွေအတွက် action hooks ၂၀၀ ကျော်နဲ့ filter hooks ၂၈၀ ကျော်။
- **[Integration Guide](./integration-guide/)** — CRM ပေါင်းစပ်မှု၊ analytics၊ custom gateways နဲ့ webhooks တွေအတွက် ဥပမာများ။
- **[Code Examples](./code-examples/)** — dynamic pricing၊ site provisioning၊ custom limitations နဲ့ multi-gateway processing တွေအတွက် အဆင့်မြင့် ပုံစံများ။
- **[Addon Development](./addon-development/getting-started)** — Addon plugin တွေ တည်ဆောက်ဖို့အတွက် စနစ်တကျ စီစဉ်ပေးထားတဲ့ framework။

## Requirements {#requirements}

- WordPress Multisite တပ်ဆင်ထားခြင်း
- PHP 7.4 သို့မဟုတ် အထက်
- Ultimate Multisite plugin ကို activate လုပ်ထားခြင်း

## Composer / Bedrock Installation {#composer--bedrock-installation}

Ultimate Multisite ကို [Packagist](https://packagist.org/packages/ultimate-multisite/ultimate-multisite) မှာ `ultimate-multisite/ultimate-multisite` အနေနဲ့ ရရှိနိုင်ပါတယ်။ ဒါဟာ [Bedrock](https://roots.io/bedrock/)-အခြေခံ WordPress setup တွေနဲ့ Composer စီမံခန့်ခွဲတဲ့ ပတ်ဝန်းကျင်တွေအတွက် အကြံပြုထားတဲ့ တပ်ဆင်နည်းပဲ ဖြစ်ပါတယ်။

```bash
composer require ultimate-multisite/ultimate-multisite
```

:::note Renamed package (v2.6.1+)
Composer package ကို v2.6.1 မှာ `devstone/ultimate-multisite` ကနေ `ultimate-multisite/ultimate-multisite` ကို ပြောင်းလဲထားပါတယ်။ သင့်ရဲ့ `composer.json` မှာ အရင် vendor နာမည်ကို ရည်ညွှန်းထားရင်၊ require entry ကို update လုပ်ပြီး `composer update` ကို run ပေးပါ။
:::

တပ်ဆင်ပြီးတဲ့အခါ Network Admin ကနေ plugin ကို network-activate လုပ်ပေးရပါမယ်။

```bash
wp plugin activate ultimate-multisite --network
```

ဒါမှမဟုတ် Bedrock ရဲ့ autoloader ကနေ must-use plugin အနေနဲ့ load လုပ်နေတယ်ဆိုရင်၊ activation guard ကို ကျော်လွန်ဖို့ `wp_ultimo_skip_network_active_check` filter ကို အသုံးပြုနိုင်ပါတယ်-

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

အသေးစိတ် documentation နဲ့ ဥပမာတွေအတွက် အပိုင်းတစ်ခုချင်းစီကို ကြည့်ရှုနိုင်ပါတယ်။
