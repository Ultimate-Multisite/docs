---
id: wu_checkout_order_created
title: Hành động - wu_checkout_order_created
sidebar_label: wu_checkout_order_created
_i18n_hash: b84a1cefda2300f7fc20b2f069799f00
---
# Action: wu_checkout_order_created {#action-wucheckoutordercreated}

Kích hoạt sau khi đơn hàng thanh toán được hoàn thiện.

Các Addon có thể sử dụng hook này để tạo các quyền thành viên phụ (secondary memberships) cho các sản phẩm có chu kỳ thanh toán độc lập.

## Tham số {#parameters}

| Tên | Kiểu dữ liệu | Mô tả |
|------|------|-------------|
| $order | `\WP_Ultimo\Checkout\Cart` | Đối tượng giỏ hàng/đơn hàng. |
| $customer | `\WP_Ultimo\Models\Customer` | Khách hàng. |
| $membership | `\WP_Ultimo\Models\Membership` | Quyền thành viên chính. |
| $payment | `\WP_Ultimo\Models\Payment` | Thanh toán. |

### Từ phiên bản {#since}

- 2.5.0
### Nguồn {#source}

Được định nghĩa trong [`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L891) tại dòng 891
