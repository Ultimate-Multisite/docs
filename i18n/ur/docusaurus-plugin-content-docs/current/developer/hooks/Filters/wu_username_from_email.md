---
id: wu_username_from_email
title: فلٹر - wu_username_from_email
sidebar_label: wu_username_from_email
_i18n_hash: ab432839e318d008d082383ff5a18467
---
# Filter: wu_username_from_email {#filter-wuusernamefromemail}

نئے گاہک کے صارف نام کو فلٹر کریں۔

## پیرامیٹرز {#parameters}

| Name | Type | تفصیل |
|------|------|-------------|
| $username | `string` | گاہک کا صارف نام۔ |
| $email | `string` | نئے گاہک کا ای میل پتہ۔ |
| $new_user_args | `array` | نئے صارف کے آرگومنٹ کا ایک سیٹ، جس میں پہلے اور آخری نام شامل ہو سکتے ہیں۔ |
| $suffix | `string` | صارف نام میں ایک سٹرنگ شامل کرنا تاکہ وہ منفرد (unique) بن جائے۔ |

### سے {#since}

- 2.0.0
### ماخذ {#source}

[`inc/functions/customer.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/functions/customer.php#L516) میں لائن 516 پر بیان کیا گیا ہے۔
