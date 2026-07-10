---
id: wu_handle_customer_meta_fields
title: Aktioun - wu_handle_customer_meta_fields
sidebar_label: wu_handle_customer_meta_fields
_i18n_hash: a93030d6a7965ebed83579b198381fa8
---
# Action: wu_handle_customer_meta_fields {#action-wuhandlecustomermetafields}

Erlaabt Erweiderungsentwéckler, Meta-Daten op verschidde Manéieren ze späicheren, wann se dat brauchen.

## Parameteren {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $meta_repository | `array` | D'Lëscht vun de Meta-Felder, strukturéiert als Schlëssel =&gt; Wäert. |
| $customer | `\Customer` | D'Ultimate Multisite Client-Objet. |
| $checkout | `\Checkout` | D'Checkout-Klass. |

### Zënter {#since}

- 2.0.0
### Quell {#source}

Definéiert an [`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L1211) an der Zeil 1211
