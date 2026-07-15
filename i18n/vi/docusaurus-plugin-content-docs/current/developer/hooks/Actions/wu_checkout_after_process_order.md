---
id: wu_checkout_after_process_order
title: Action - wu_checkout_after_process_order
sidebar_label: wu_checkout_after_process_order
_i18n_hash: 40a5c096f223c5f82a109163c29284d3
---
# Action: wu_checkout_after_process_order

Cho phép các nhà phát triển kích hoạt các hook bổ sung.

## Tham số {#parameters}

| Name | Type | Mô tả |
|------|------|-------------|
| $checkout | `\Checkout` | Đối tượng checkout đã được khởi tạo. |
| $cart | `\Cart` | Đối tượng giỏ hàng checkout. |

### Từ phiên bản {#since}

- 2.0.9
### Nguồn {#source}

Được định nghĩa trong [`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L1013) tại dòng 1013
