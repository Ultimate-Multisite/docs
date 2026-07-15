---
title: ڊولپر دستاويز
sidebar_position: 1
_i18n_hash: 93892019464929842d9a6f4fdfdecbe7
---
# Developer دستاويز

هي رهنمائي ڊولپرز کي Ultimate Multisite سان ضم ٿيڻ، ان کي وڌائڻ، يا ان لاءِ addon ٺاهڻ لاءِ گهربل هر شيءِ فراهم ڪري ٿي. Ultimate Multisite هڪ WordPress Multisite نيٽ ورڪ کي Website-as-a-Service (WaaS) پليٽفارم ۾ تبديل ڪري ٿو.

## ڇا موجود آهي {#whats-available}

- **[REST API](./rest-api/overview)** — سڀني ادارن (گراهڪن، سائيٽن، رڪنيتن، ادائگين، پراڊڪٽس، ڊومينز) لاءِ API key تصديق سان مڪمل CRUD عمل
- **[Hooks Reference](./hooks/guide)** — حياتي چڪر جي واقعن ۽ حسب ضرورت لاءِ 200+ action hooks ۽ 280+ filter hooks
- **[Integration Guide](./integration-guide/)** — CRM انضمام، ايناليٽڪس، حسب ضرورت گيٽ ويز، ۽ webhooks لاءِ مثال
- **[Code Examples](./code-examples/)** — متحرڪ قيمت بندي، سائيٽ فراهمي، حسب ضرورت حدبندين، ۽ گهڻ-گيٽ وي پروسيسنگ لاءِ ترقي يافته نمونا
- **[Addon Development](./addon-development/getting-started)** — addon پلگ انز ٺاهڻ لاءِ منظم فريم ورڪ

## گهرجون {#requirements}

- WordPress Multisite انسٽاليشن
- PHP 7.4 يا وڌيڪ
- Ultimate Multisite پلگ ان فعال ٿيل

## Composer / Bedrock انسٽاليشن {#composer--bedrock-installation}

Ultimate Multisite [Packagist](https://packagist.org/packages/ultimate-multisite/ultimate-multisite) تي `ultimate-multisite/ultimate-multisite` طور موجود آهي. هي [Bedrock](https://roots.io/bedrock/) تي ٻڌل WordPress سيٽ اپس ۽ ٻين Composer-منظم ماحولن لاءِ سفارش ڪيل انسٽاليشن طريقو آهي.

```bash
composer require ultimate-multisite/ultimate-multisite
```

:::note نالو تبديل ٿيل پيڪيج (v2.6.1+)
Composer پيڪيج جو نالو v2.6.1 ۾ `devstone/ultimate-multisite` کان `ultimate-multisite/ultimate-multisite` ۾ تبديل ڪيو ويو. جيڪڏهن توهان جو `composer.json` پراڻي وينڊر نالي جو حوالو ڏئي ٿو، ته require داخلا اپڊيٽ ڪريو ۽ `composer update` هلايو.
:::

انسٽاليشن کان پوءِ، Network Admin مان پلگ ان کي نيٽ ورڪ-فعال ڪريو:

```bash
wp plugin activate ultimate-multisite --network
```

يا، جيڪڏهن توهان Bedrock جي autoloader ذريعي پلگ ان کي must-use plugin طور لوڊ ڪري رهيا آهيو، ته activation guard کي پاس ڪرڻ لاءِ `wp_ultimo_skip_network_active_check` filter استعمال ڪريو:

```php
add_filter( 'wp_ultimo_skip_network_active_check', '__return_true' );
```

## جلدي شروعات {#quick-start}

### REST API استعمال ڪريو {#use-the-rest-api}

```bash
curl -u "api_key:api_secret" https://yoursite.com/wp-json/wu/v2/customers
```

### واقعن ۾ Hook ڪريو {#hook-into-events}

```php
add_action('wu_customer_post_create', function($customer) {
    // React to new customer signups
});
```

### هڪ Addon ٺاهيو {#build-an-addon}

```bash
# Generate addon scaffold from the template
bash create-addon.sh
```

تفصيلي دستاويز ۽ مثالن لاءِ هر حصو ڏسو.
