---
id: retrieve_password_message
title: Bộ lọc - retrieve_password_message
sidebar_label: retrieve_password_message
_i18n_hash: c1e9fbd9909dd93e70f291de55ba00e4
---
# Filter: retrieve_password_message

Bộ lọc này dùng để lọc nội dung tin nhắn trong email đặt lại mật khẩu.

## Tham số

| Tên | Kiểu dữ liệu | Mô tả |
|------|------|-------------|
| $message | `string` | Nội dung email mặc định. |
| $key | `string` | Khóa kích hoạt. |
| $user_login | `string` | Tên người dùng. |
| $user_data | `\WP_User` | Đối tượng WP_User. |

### Từ phiên bản

- 2.8.0
- 4.1.0: Đã thêm các tham số <code>$user_login</code> và <code>$user_data</code>.
### Nguồn

Được định nghĩa tại [`inc/mu-migration/includes/commands/class-mu-migration-users.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/mu-migration/includes/commands/class-mu-migration-users.php#L149) ở dòng 149


## Trả về
Nội dung email mặc định.
