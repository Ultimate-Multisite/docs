---
id: wu_generated_username_from_email
title: Bộ lọc - wu_generated_username_from_email
sidebar_label: wu_generated_username_from_email
_i18n_hash: ad708562b0c2c9c80d1d5845ef1e67b7
---
# Filter: wu_generated_username_from_email

Lọc tên người dùng khách hàng được tạo tự động.

## Tham số

| Name | Type | Description |
|------|------|-------------|
| $username | `string` | Tên người dùng được tạo tự động. |
| $email | `string` | Địa chỉ email mới của khách hàng. |
| $new_user_args | `array` | Mảng các tham số người dùng mới, có thể bao gồm tên và họ. |
| $suffix | `string` | Chuỗi được nối vào tên người dùng để đảm bảo tính duy nhất. |

### Từ phiên bản

- 3.7.0
### Nguồn

Được định nghĩa trong [`inc/functions/customer.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/functions/customer.php#L488) tại dòng 488
