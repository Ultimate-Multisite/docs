---
id: wu_handle_customer_meta_fields
title: Aksyon - wu_handle_customer_meta_fields
sidebar_label: wu_handle_customer_meta_fields
_i18n_hash: a93030d6a7965ebed83579b198381fa8
---
# Aksyon: wu_handle_customer_meta_fields {#action-wuhandlecustomermetafields}

Tugoti ang mga plugin developer nga motipig og meta data sa lain-laing paagi kung kinahanglan nila.

## Mga Parameter {#parameters}

| Ngalan | Matang | Deskripsyon |
|------|------|-------------|
| $meta_repository | `array` | Ang lista sa mga meta field, nakabalangkas nga key =&gt; value. |
| $customer | `\Customer` | Ang Ultimate Multisite customer object. |
| $checkout | `\Checkout` | Ang klase sa pag-checkout. |

### Sukad {#since}

- 2.0.0
### Tinubdan {#source}

Gihubit sa [`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L1211) sa linya 1211
