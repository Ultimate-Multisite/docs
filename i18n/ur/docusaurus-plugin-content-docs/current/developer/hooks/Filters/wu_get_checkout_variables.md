---
id: wu_get_checkout_variables
title: Filter - wu_get_checkout_variables
sidebar_label: wu_get_checkout_variables
_i18n_hash: c3821432e54f34547822df3b92ced708
---
# Filter: wu_get_checkout_variables

یہ پلاگ ان ڈویلپرز کو چیک آؤٹ پیج کے پری سیٹس (pre-sets) کو فلٹر کرنے کی اجازت دیتا ہے۔

احتیاط کریں، اگر آپ کی طرف سے کوئی کی (key) غائب رہ جاتی ہے تو یہ فرنٹ-اینڈ پر چیک آؤٹ کو مکمل طور پر خراب کر سکتی ہے۔

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $variables | `array` | مقامی تبدیلیاں (Localized variables)۔ |
| $checkout | `\Checkout` | چیک آؤٹ کلاس (The checkout class)۔ |

### Since {#since}

- 2.0.0
### Source {#source}

Defined in [`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L1970) at line 1970


## Returns {#returns}
نئی ویری ایبلز کی ایکری (array)۔
