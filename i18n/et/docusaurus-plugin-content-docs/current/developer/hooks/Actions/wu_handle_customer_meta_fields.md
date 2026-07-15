---
id: wu_handle_customer_meta_fields
title: Tegevus - wu_handle_customer_meta_fields
sidebar_label: wu_handle_customer_meta_fields
_i18n_hash: a93030d6a7965ebed83579b198381fa8
---
# Tegevus: wu_handle_customer_meta_fields

Võimaldab plugin arendajatel salvestada metaandmeid eri viisidel, kui neil seda vaja on.

## Parameetrid {#parameters}

| Nimi | Tüüp | Kirjeldus |
|------|------|-------------|
| $meta_repository | `array` | The list of meta fields, key =&gt; value structured. |
| $customer | `\Customer` | The Ultimate Multisite customer object. |
| $checkout | `\Checkout` | The checkout class. |

### Alates {#since}

- 2.0.0
### Allikas {#source}

Määratletud failis [`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L1211) real 1211
