---
id: wu_pending_payment_message
title: Bộ lọc - wu_pending_payment_message
sidebar_label: wu_pending_payment_message
_i18n_hash: 94115f867afff4cc7741fd5b2ef45bd2
---
# Filter: wu_pending_payment_message

Cho phép người dùng thay đổi thông báo về các khoản thanh toán đang chờ xử lý.

## Tham số {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $message | `string` | Thông báo cần in ra. |
| $customer | `\WP_Ultimo\Models\Customer` | Khách hàng hiện tại. |
| $pending_payments | `array` | Một danh sách các khoản thanh toán đang chờ xử lý. |

### Từ phiên bản {#since}

- 2.0.19
### Nguồn {#source}

Được định nghĩa trong [`inc/managers/class-payment-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/managers/class-payment-manager.php#L244) tại dòng 244
