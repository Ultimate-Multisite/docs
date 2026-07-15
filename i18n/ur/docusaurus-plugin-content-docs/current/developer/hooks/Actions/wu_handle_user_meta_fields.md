---
id: wu_handle_user_meta_fields
title: Action - wu_handle_user_meta_fields
sidebar_label: wu_handle_user_meta_fields
_i18n_hash: 6baac0d78046fb58a79bc35865d91372
---
# Action: wu_handle_user_meta_fields

پلاگ ان ڈویلپرز کو یہ سہولت دیتا ہے کہ اگر انہیں ضرورت ہو تو وہ صارف کا میٹا ڈیٹا مختلف طریقوں سے محفوظ کر سکیں۔

## پیرامیٹرز {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $meta_repository | `array` | میٹا فیلڈز کی فہرست، جو key => value کی شکل میں ترتیب دی گئی ہو۔ |
| $user | `\WP_User` | ورڈپریس صارف آبجیکٹ۔ |
| $customer | `\Customer` | الٹیمیٹ ملٹی سائٹ کا کسٹمر آبجیکٹ۔ |
| $checkout | `\Checkout` | چیک آؤٹ کلاس۔ |

### Since {#since}

- 2.0.4
### Source {#source}

Defined in [`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L1244) at line 1244
