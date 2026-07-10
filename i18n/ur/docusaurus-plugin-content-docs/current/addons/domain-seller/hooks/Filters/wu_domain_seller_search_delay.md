---
id: wu_domain_seller_search_delay
title: فلٹر - wu_domain_seller_search_delay
sidebar_label: wu_domain_seller_search_delay
_i18n_hash: b0871b15059808a847875636d151245f
---
# Filter: wu_domain_seller_search_delay {#filter-wudomainsellersearchdelay}

یہ فیلٹر ڈومین سرچ کے ڈیبونس (debounce) ڈیلی کو ملی سیکنڈز میں سیٹ کرتا ہے۔

اس ویلیو کو بڑھانے سے سست کنکشنز پر API کالز کم ہو جائیں گی۔

## پیرامیٹرز {#parameters}

| نام | قسم | تفصیل |
|------|------|-------------|
| $delay | `int` | ملی سیکنڈز میں ڈیبونس ڈیلی۔ ڈیفالٹ 500 ہے۔ |

### سے {#since}

- 2.1.0
### ماخذ {#source}

[`inc/checkout/signup-fields/class-signup-field-domain-selection.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/checkout/signup-fields/class-signup-field-domain-selection.php#L854) میں لائن 854 پر ڈیفائن کیا گیا ہے۔
