---
id: wu_checkout_after_process_order
title: Акција - wu_checkout_after_process_order
sidebar_label: wu_checkout_after_process_order
_i18n_hash: 40a5c096f223c5f82a109163c29284d3
---
# Action: wu_checkout_after_process_order {#action-wucheckoutafterprocessorder}

Дозволува програмерите да активираат дополнителни hooks.

## Параметри {#parameters}

| Име | Тип | Опис |
|------|------|-------------|
| $checkout | `\Checkout` | Инстанцата на објектот за checkout. |
| $cart | `\Cart` | Инстанцата на кошничката за checkout. |

### Од {#since}

- 2.0.9
### Извор {#source}

Дефинирано во [`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L1013) на линија 1013
