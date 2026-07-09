---
id: wu_checkout_after_process_order
title: Acció - wu_checkout_after_process_order
sidebar_label: wu_checkout_after_process_order
_i18n_hash: 40a5c096f223c5f82a109163c29284d3
---
# Aquesta acció: wu_checkout_after_process_order {#action-wucheckoutafterprocessorder}

Permet als desenvolupadors activar altres hooks (gancs).

## Paràmetres {#parameters}

| Nom | Tip | Descripció |
|------|------|-------------|
| $checkout | `\Checkout` | L'instància de l'objecte de checkout. |
| $cart | `\Cart` | L'instància del carreret de checkout. |

### Des de {#since}

- 2.0.9
### Font {#source}

Definida en [`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L1013) a la línia 1013
