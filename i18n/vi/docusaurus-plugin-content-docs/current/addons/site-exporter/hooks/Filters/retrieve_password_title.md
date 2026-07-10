---
id: retrieve_password_title
title: Bộ lọc - retrieve_password_title
sidebar_label: retrieve_password_title
_i18n_hash: 7fcf454c64361885b8f64cc6fbc9ba93
---
# Filter: retrieve_password_title {#filter-retrievepasswordtitle}

Bộ lọc này dùng để tùy chỉnh tiêu đề (subject) của email đặt lại mật khẩu.

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $title | `string` | Tiêu đề email mặc định. |
| $user_login | `string` | Tên người dùng (username) của người dùng. |
| $user_data | `\WP_User` | Đối tượng WP_User. |

### Since {#since}

- 2.8.0
- 4.4.0: Đã thêm các tham số <code>$user_login</code> và <code>$user_data</code>.
### Source {#source}

Được định nghĩa trong [`inc/mu-migration/includes/commands/class-mu-migration-users.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/mu-migration/includes/commands/class-mu-migration-users.php#L135) tại dòng 135


## Returns {#returns}
Tiêu đề email mặc định.
