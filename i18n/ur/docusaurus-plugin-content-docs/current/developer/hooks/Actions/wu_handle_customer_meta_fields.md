---
id: wu_handle_customer_meta_fields
title: Action - wu_handle_customer_meta_fields
sidebar_label: wu_handle_customer_meta_fields
_i18n_hash: a93030d6a7965ebed83579b198381fa8
---
# Action: wu_handle_customer_meta_fields

یہ پلگ ان بنانے والوں کو اجازت دیتا ہے کہ اگر انہیں ضرورت ہو تو وہ میٹا ڈیٹا کو مختلف طریقوں سے محفوظ کر سکیں۔

## پیرامیٹرز {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $meta_repository | `array` | میٹا فیلڈز کی فہرست، جو key => value کی ساخت میں ہو۔ |
| $customer | `\Customer` | Ultimate Multisite کسٹمر آبجیکٹ۔ |
| $checkout | `\Checkout` | چیک آؤٹ کلاس۔ |

### سے {#since}

- 2.0.0
### ماخذ {#source}

Defined in [`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L1211) at line 1211
