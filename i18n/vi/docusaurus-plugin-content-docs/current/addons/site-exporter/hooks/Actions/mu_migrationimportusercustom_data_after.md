---
id: mu_migrationimportusercustom_data_after
title: Action - mu_migration/import/user/custom_data_after
sidebar_label: mu_migration/import/user/custom_data_after
_i18n_hash: 4775c44fa3c63582f55cfb9f99312646
---
# Action: mu_migration/import/user/custom_data_after

Kích hoạt sau khi xuất dữ liệu tùy chỉnh của người dùng.

## Tham số {#parameters}

| Tên | Kiểu | Mô tả |
|------|------|-------------|
| $user_data | `array` | Mảng chứa dữ liệu người dùng. |
| $user | `\WP_User` | Đối tượng người dùng. |

### Từ phiên bản {#since}

- 0.1.0
### Nguồn {#source}

Được định nghĩa trong [`inc/mu-migration/includes/commands/class-mu-migration-import.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/mu-migration/includes/commands/class-mu-migration-import.php#L165) tại dòng 165
