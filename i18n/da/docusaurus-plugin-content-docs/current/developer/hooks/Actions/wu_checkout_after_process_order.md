---
id: wu_checkout_after_process_order
title: Handling - wu_checkout_after_process_order
sidebar_label: wu_checkout_after_process_order
_i18n_hash: 40a5c096f223c5f82a109163c29284d3
---
# Handling: wu_checkout_after_process_order

Giver udviklere mulighed for at udløse yderligere hooks.

## Parametre {#parameters}

| Navn | Type | Beskrivelse |
|------|------|-------------|
| $checkout | `\Checkout` | Objektinstansen for betalingsprocessen. |
| $cart | `\Cart` | Kurvinstansen for betalingsprocessen. |

### Siden {#since}

- 2.0.9
### Kilde {#source}

Defineret i [`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L1013) på linje 1013
