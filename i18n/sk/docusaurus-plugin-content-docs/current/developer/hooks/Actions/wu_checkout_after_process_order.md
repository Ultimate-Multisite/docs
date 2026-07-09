---
id: wu_checkout_after_process_order
title: Akcia - wu_checkout_after_process_order
sidebar_label: wu_checkout_after_process_order
_i18n_hash: 40a5c096f223c5f82a109163c29284d3
---
# Action: wu_checkout_after_process_order {#action-wucheckoutafterprocessorder}

Umožňuje vývojárom spúšťať ďalšie hooky.

## Parametre {#parameters}

| Názov | Typ | Popis |
|------|------|-------------|
| $checkout | `\Checkout` | Inštancia objektu pokladne. |
| $cart | `\Cart` | Inštancia košíka pokladne. |

### Od verzie {#since}

- 2.0.9
### Zdroj {#source}

Definované v [`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L1013) na riadku 1013
