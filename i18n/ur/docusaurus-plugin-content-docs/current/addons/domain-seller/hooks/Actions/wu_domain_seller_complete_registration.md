---
id: wu_domain_seller_complete_registration
title: Action - wu_domain_seller_complete_registration
sidebar_label: wu_domain_seller_complete_registration
_i18n_hash: 0bd00822989aa5b0dbda498ef5e69848
---
# Action: wu_domain_seller_complete_registration

یہ تب چلتا ہے جب کوئی ادائیگی (payment) ایک ایسی حالت (status) میں تبدیل ہوتی ہے جو ڈومین رجسٹریشن کو شروع کرنے کا سبب بنتی ہے۔

## پیرامیٹرز {#parameters}

| نام | قسم | وضاحت |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | ادائیگی کا آبجیکٹ (object)۔ |
| $old_status | `string` | تبدیلی سے پہلے کی پچھلی ادائیگی کی حالت۔ |

### سے {#since}

- 2.0.0
### ماخذ {#source}

Defined in [`inc/class-domain-seller.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-domain-seller.php#L266) at line 266
