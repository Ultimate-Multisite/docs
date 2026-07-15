---
id: wu_apply_signup_fee
title: فلٹر - wu_apply_signup_fee
sidebar_label: wu_apply_signup_fee
_i18n_hash: b6a5ac9b0ef2d459003fa02766ad6f81
---
# Filter: wu_apply_signup_fee

یہ فلٹر طے کرتا ہے کہ سائن اپ فیس (signup fee) شامل کی جانی چاہیے یا نہیں۔

## پیرامیٹرز (Parameters) {#parameters}

| Name | Type | تفصیل (Description) |
|------|------|-------------|
| $add_signup_fee | `bool` | سائن اپ فیس شامل کرنی ہے یا نہیں۔ |
| $product | `object` | ممبرشپ لیول آبجیکٹ (Membership level object)۔ |
| $this | `\WP_Ultimo\Checkout\Cart` | رجسٹریشن آبجیکٹ (Registration object)۔ |

### سے (Since) {#since}

- 3.1
### ماخذ (Source) {#source}

[`inc/checkout/class-cart.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-cart.php#L1769) میں لائن 1769 پر ڈیفائن کیا گیا ہے۔
