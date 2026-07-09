---
id: wu_handle_customer_meta_fields
title: Veprim - wu_handle_customer_meta_fields
sidebar_label: wu_handle_customer_meta_fields
_i18n_hash: a93030d6a7965ebed83579b198381fa8
---
# Action: wu_handle_customer_meta_fields {#action-wuhandlecustomermetafields}

Lejo zhvilluesit e plugin-eve të ruajnë meta të dhëna në mënyra të ndryshme nëse u nevojitet.

## Parametrat {#parameters}

| Emri | Lloji | Përshkrimi |
|------|------|-------------|
| $meta_repository | `array` | Lista e fushave meta, e strukturuar si key =&gt; value. |
| $customer | `\Customer` | Objekti i klientit Ultimate Multisite. |
| $checkout | `\Checkout` | Klasa e përfundimit të blerjes. |

### Që nga {#since}

- 2.0.0
### Burimi {#source}

Përcaktuar në [`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L1211) në rreshtin 1211
