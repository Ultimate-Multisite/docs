---
id: wu_get_checkout_variables
title: Bộ lọc - wu_get_checkout_variables
sidebar_label: wu_get_checkout_variables
_i18n_hash: c3821432e54f34547822df3b92ced708
---
# Bộ lọc: wu_get_checkout_variables {#filter-wugetcheckoutvariables}

Cho phép các nhà phát triển plugin lọc các thiết lập biến (variables) của trang thanh toán.

Lưu ý: Nếu thiếu các khóa (keys) cần thiết, chức năng thanh toán trên giao diện người dùng (front-end) có thể bị lỗi hoàn toàn.

## Tham số {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $variables | `array` | Các biến đã được bản địa hóa. |
| $checkout | `\Checkout` | Lớp thanh toán. |

### Since {#since}

- 2.0.0
### Source {#source}

Được định nghĩa trong [`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L1970) tại dòng 1970


## Giá trị trả về {#returns}
Mảng các biến mới.
