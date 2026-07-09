---
id: wu_checkout_after_process_order
title: Action - wu_checkout_after_process_order
sidebar_label: wu_checkout_after_process_order
_i18n_hash: 40a5c096f223c5f82a109163c29284d3
---
# Action: wu_checkout_after_process_order {#action-wucheckoutafterprocessorder}

Permite dezvoltatorilor să activeze hook-uri suplimentare.

## Parametri {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $checkout | `\Checkout` | Instanța obiectului de checkout. |
| $cart | `\Cart` | Instanța coșului de checkout. |

### De la {#since}

- 2.0.9
### Sursă {#source}

Definit în [`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L1013) la linia 1013
