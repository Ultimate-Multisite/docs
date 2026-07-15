---
id: wu_handle_customer_meta_fields
title: Kev nqis tes - wu_handle_customer_meta_fields
sidebar_label: wu_handle_customer_meta_fields
_i18n_hash: a93030d6a7965ebed83579b198381fa8
---
# Kev ua: wu_handle_customer_meta_fields

Tso cai rau cov plugin developers khaws meta data rau ntau txoj kev txawv yog tias lawv xav tau.

## Cov parameter {#parameters}

| Npe | Hom | Kev piav qhia |
|------|------|-------------|
| $meta_repository | `array` | Daim ntawv teev cov meta fields, muaj qauv key =&gt; value. |
| $customer | `\Customer` | Ultimate Multisite customer object. |
| $checkout | `\Checkout` | Checkout class. |

### Txij thaum {#since}

- 2.0.0
### Qhov chaw {#source}

Txhais hauv [`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L1211) ntawm kab 1211
