---
id: wu_handle_user_meta_fields
title: Hành động - wu_handle_user_meta_fields
sidebar_label: wu_handle_user_meta_fields
_i18n_hash: 6baac0d78046fb58a79bc35865d91372
---
# Action: wu_handle_user_meta_fields

Cho phép các nhà phát triển plugin lưu trữ dữ liệu meta người dùng theo nhiều cách khác nhau nếu họ cần.

## Tham số

| Tên | Kiểu | Mô tả |
|------|------|-------------|
| $meta_repository | `array` | Danh sách các trường meta, được cấu trúc theo dạng key => value. |
| $user | `\WP_User` | Đối tượng người dùng WordPress. |
| $customer | `\Customer` | Đối tượng khách hàng Ultimate Multisite. |
| $checkout | `\Checkout` | Lớp checkout. |

### Từ phiên bản

- 2.0.4
### Nguồn

Được định nghĩa trong [`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L1244) tại dòng 1244
