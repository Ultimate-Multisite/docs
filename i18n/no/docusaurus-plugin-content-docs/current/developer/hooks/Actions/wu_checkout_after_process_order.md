---
id: wu_checkout_after_process_order
title: Action - wu_checkout_after_process_order
sidebar_label: wu_checkout_after_process_order
_i18n_hash: 40a5c096f223c5f82a109163c29284d3
---
# Action: wu_checkout_after_process_order {#action-wucheckoutafterprocessorder}

Gjør det mulig for utviklere å utløse ekstra hooks.

## Parametere {#parameters}

| Navn | Type | Beskrivelse |
|------|------|-------------|
| $checkout | `\Checkout` | Instansen av checkout-objektet. |
| $cart | `\Cart` | Instansen av handlekurv-objektet for checkout. |

### Siden {#since}

- 2.0.9
### Kilde {#source}

Definert i [`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L1013) på linje 1013
