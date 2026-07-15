---
id: wu_checkout_after_process_order
title: Action - wu_checkout_after_process_order
sidebar_label: wu_checkout_after_process_order
_i18n_hash: 40a5c096f223c5f82a109163c29284d3
---
# Action: wu_checkout_after_process_order

Umožňuje vývojářům spouštět další hooky.

## Parametry {#parameters}

| Název | Typ | Popis |
|------|------|-------------|
| $checkout | `\Checkout` | Instanci objektu pokladny. |
| $cart | `\Cart` | Instanci košíku pokladny. |

### Od {#since}

- 2.0.9
### Zdroj {#source}

Definováno v [`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L1013) na řádku 1013
