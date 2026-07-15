---
id: wu_username_from_email
title: Bộ lọc - wu_username_from_email
sidebar_label: wu_username_from_email
_i18n_hash: ab432839e318d008d082383ff5a18467
---
# Bộ lọc: wu_username_from_email

Bộ lọc này dùng để xác định tên người dùng (username) cho khách hàng mới.

## Tham số {#parameters}

| Tên | Kiểu | Mô tả |
|------|------|-------------|
| $username | `string` | Tên người dùng hiện tại của khách hàng. |
| $email | `string` | Địa chỉ email của khách hàng mới. |
| $new_user_args | `array` | Mảng chứa các tham số người dùng mới, có thể bao gồm tên và họ. |
| $suffix | `string` | Chuỗi ký tự được thêm vào tên người dùng để đảm bảo tính duy nhất. |

### Từ phiên bản {#since}

- 2.0.0
### Nguồn {#source}

Được định nghĩa trong [`inc/functions/customer.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/functions/customer.php#L516) tại dòng 516
