---
id: wu_maybe_create_customer
title: Hành động - wu_maybe_create_customer
sidebar_label: wu_maybe_create_customer
_i18n_hash: 15899be650099dafaf0ec1f5095861a6
---
# Hành động: wu_maybe_create_customer

Cho phép các nhà phát triển plugin thực hiện các chức năng bổ sung khi khách hàng được thêm vào.

Đây là nơi chúng ta thêm các hooks để thêm khách hàng thành người dùng vào trang web chính, ví dụ.

## Tham số {#parameters}

| Tên | Kiểu | Mô tả |
|------|------|-------------|
| $customer | `\Customer` | Khách hàng đã được tạo (hoặc có thể được tạo). |
| $checkout | `\Checkout` | Lớp checkout hiện tại. |

### Từ phiên bản {#since}

- 2.0.0
### Nguồn {#source}

Được định nghĩa trong [`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L1156) tại dòng 1156
