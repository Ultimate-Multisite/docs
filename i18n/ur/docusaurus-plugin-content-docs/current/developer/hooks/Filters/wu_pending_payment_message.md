---
id: wu_pending_payment_message
title: فلٹر - wu_pending_payment_message
sidebar_label: wu_pending_payment_message
_i18n_hash: 94115f867afff4cc7741fd5b2ef45bd2
---
# Filter: wu_pending_payment_message

صارف کو زیر التواء ادائیگیوں (pending payments) کے بارے میں دکھائے جانے والے پیغام کو تبدیل کرنے کی سہولت فراہم کرتا ہے۔

## پیرامیٹرز

| Name | Type | Description |
|------|------|-------------|
| $message | `string` | وہ پیغام جو دکھایا جائے گا۔ |
| $customer | `\WP_Ultimo\Models\Customer` | موجودہ صارف (current customer)۔ |
| $pending_payments | `array` | زیر التواء ادائیگیوں کی ایک فہرست۔ |

### Since

- 2.0.19
### Source

[`inc/managers/class-payment-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/managers/class-payment-manager.php#L244) میں لائن 244 پر تعریف کیا گیا ہے۔
