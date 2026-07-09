---
id: wu_checkout_after_process_order
title: Action - wu_checkout_after_process_order
sidebar_label: wu_checkout_after_process_order
_i18n_hash: 40a5c096f223c5f82a109163c29284d3
---
# Akció: wu_checkout_after_process_order {#action-wucheckoutafterprocessorder}

Lehetővé teszi a fejlesztőknek, hogy további hook-okat aktiváljanak.

## Paraméterek {#parameters}

| Név | Típus | Leírás |
|------|------|-------------|
| $checkout | `\Checkout` | A checkout objektum példányát. |
| $cart | `\Cart` | A checkout kosár példányát. |

### Desde {#since}

- 2.0.9
### Forrás {#source}

Definálva a [`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L1013) fájlban, 1013-sorban.
