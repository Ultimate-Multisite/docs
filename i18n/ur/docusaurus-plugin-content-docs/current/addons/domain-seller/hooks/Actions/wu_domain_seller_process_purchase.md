---
id: wu_domain_seller_process_purchase
title: Action - wu_domain_seller_process_purchase
sidebar_label: wu_domain_seller_process_purchase
_i18n_hash: af00bd289685ee01ed7a15275fa410c6
---
# Action: wu_domain_seller_process_purchase {#action-wudomainsellerprocesspurchase}

یہ عمل (Action) اس وقت چلتا ہے جب چیک آؤٹ مکمل ہونے کے بعد ڈومین کی خریداری پروسیس کی جا رہی ہوتی ہے۔

## پیرامیٹرز (Parameters) {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | ادائیگی کا آبجیکٹ (payment object)۔ |
| $checkout_data | `array&lt;string,mixed&gt;` | سائن اپ فارم سے مکمل چیک آؤٹ ڈیٹا۔ |

### Since {#since}

- 2.0.0
### Source {#source}

[`inc/class-domain-seller.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-domain-seller.php#L246) میں لائن 246 پر ڈیفائن کیا گیا ہے۔
