---
id: mu_migrationimportusercustom_data_before
title: Action - mu_migration/import/user/custom_data_before
sidebar_label: mu_migration/import/user/custom_data_before
_i18n_hash: dd547798f24ac891e6132ce450eac010
---
# Action: mu_migration/import/user/custom_data_before

Hành động này được kích hoạt trước khi xuất dữ liệu tùy chỉnh của người dùng.

## Tham số {#parameters}

| Tên | Kiểu | Mô tả |
|------|------|-------------|
| $user_data | `array` | Mảng chứa dữ liệu người dùng. |
| $user | `\WP_User` | Đối tượng người dùng. |

### Từ phiên bản {#since}

- 0.1.0
### Nguồn {#source}

Được định nghĩa trong [`inc/mu-migration/includes/commands/class-mu-migration-import.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/mu-migration/includes/commands/class-mu-migration-import.php#L139) tại dòng 139
