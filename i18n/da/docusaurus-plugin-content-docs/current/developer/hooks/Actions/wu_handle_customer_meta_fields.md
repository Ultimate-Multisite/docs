---
id: wu_handle_customer_meta_fields
title: Handling - wu_handle_customer_meta_fields
sidebar_label: wu_handle_customer_meta_fields
_i18n_hash: a93030d6a7965ebed83579b198381fa8
---
# Action: wu_handle_customer_meta_fields

Giver plugin-udviklere mulighed for at gemme metadata på forskellige måder, hvis de har brug for det.

## Parametre {#parameters}

| Navn | Type | Beskrivelse |
|------|------|-------------|
| $meta_repository | `array` | Listen over meta fields, struktureret som key =&gt; value. |
| $customer | `\Customer` | Ultimate Multisite customer-objektet. |
| $checkout | `\Checkout` | checkout-klassen. |

### Siden {#since}

- 2.0.0
### Kilde {#source}

Defineret i [`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L1211) på linje 1211
