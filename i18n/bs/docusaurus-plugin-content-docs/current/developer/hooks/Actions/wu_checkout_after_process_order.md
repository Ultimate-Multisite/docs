---
id: wu_checkout_after_process_order
title: Akcija - wu_checkout_after_process_order
sidebar_label: wu_checkout_after_process_order
_i18n_hash: 40a5c096f223c5f82a109163c29284d3
---
# Akcija: wu_checkout_after_process_order

Omogućava programerima da pokrenu dodatne hook-ove.

## Parametri {#parameters}

| Name | Type | Opis |
|------|------|-------------|
| $checkout | `\Checkout` | Instanca objekta za naplatu (checkout). |
| $cart | `\Cart` | Instanca korpe za naplatu (checkout cart). |

### Od {#since}

- 2.0.9
### Izvor {#source}

Definisano u [`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L1013) na liniji 1013
