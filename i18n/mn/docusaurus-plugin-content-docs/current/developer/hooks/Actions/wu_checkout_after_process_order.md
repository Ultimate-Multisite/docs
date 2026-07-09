---
id: wu_checkout_after_process_order
title: Үйлдэл - wu_checkout_after_process_order
sidebar_label: wu_checkout_after_process_order
_i18n_hash: 40a5c096f223c5f82a109163c29284d3
---
# Action: wu_checkout_after_process_order

Хөгжүүлэгчдэд нэмэлт hook-уудыг өдөөх боломж олгоно.

## Параметрүүд

| Name | Type | Description |
|------|------|-------------|
| $checkout | `\Checkout` | Checkout объектын instance. |
| $cart | `\Cart` | Checkout cart-ын instance. |

### Хойш

- 2.0.9
### Эх сурвалж

[`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L1013)-д 1013-р мөрөнд тодорхойлсон
