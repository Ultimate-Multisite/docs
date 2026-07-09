---
id: wu_handle_customer_meta_fields
title: Aksyon - wu_handle_customer_meta_fields
sidebar_label: wu_handle_customer_meta_fields
_i18n_hash: a93030d6a7965ebed83579b198381fa8
---
# Aksyon: wu_handle_customer_meta_fields

Pahintulutan ang mga developer ng pandagdag na mag-imbak ng metadata sa iba't ibang paraan kung kailangan nila.

## Mga Parameter

| Pangalan | Uri | Paglalarawan |
|------|------|-------------|
| $meta_repository | `array` | Ang listahan ng mga meta field, nakaayos bilang key =&gt; value. |
| $customer | `\Customer` | Ang object ng kostumer ng Ultimate Multisite. |
| $checkout | `\Checkout` | Ang klase ng pag-checkout. |

### Mula noong

- 2.0.0
### Pinagmulan

Tinukoy sa [`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L1211) sa linya 1211
