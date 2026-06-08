---
id: wu_return_url
title: Bộ lọc - wu_return_url
sidebar_label: wu_return_url
_i18n_hash: 73bff0c05bc9b1dad029b7438b1a4f7c
---
# Filter: wu_return_url

Cho phép các nhà phát triển thay đổi URL trả về của cổng thanh toán (gateway) được sử dụng sau khi hoàn tất quy trình thanh toán.

## Tham số

| Tên | Kiểu | Mô tả |
|------|------|-------------|
| $return_url | `string` | URL để chuyển hướng sau khi hoàn tất quy trình. |
| $gateway | `self` | thể hiện (instance) của cổng thanh toán (gateway). |
| $payment | `\WP_Ultimo\Models\Payment` | thể hiện thanh toán của Ultimate Multisite. |
| $cart | `\WP_Ultimo\Checkout\Cart` | đơn hàng giỏ hàng (cart order) hiện tại của Ultimate Multisite. |

### Từ phiên bản

- 2.0.20
### Nguồn

Được định nghĩa trong [`inc/gateways/class-base-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/gateways/class-base-gateway.php#L683) tại dòng 683


## Giá trị trả về
