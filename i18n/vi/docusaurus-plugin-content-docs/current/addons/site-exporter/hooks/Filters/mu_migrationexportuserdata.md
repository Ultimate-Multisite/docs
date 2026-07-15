---
id: mu_migrationexportuserdata
title: Bộ lọc - mu_migration/export/user/data
sidebar_label: mu_migration/export/user/data
_i18n_hash: bf562e5125d4978c6267a96274f581ef
---
# Filter: mu_migration/export/user/data

Lọc bộ dữ liệu người dùng mặc định được sử dụng khi xuất hoặc nhập dữ liệu.

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $custom_user_data | `array` | Mảng dữ liệu người dùng tùy chỉnh. |
| $user | `\WP_User` | Đối tượng người dùng. |

### Since {#since}

- 0.1.0
### Source {#source}

- Được định nghĩa trong [`inc/mu-migration/includes/commands/class-mu-migration-export.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/mu-migration/includes/commands/class-mu-migration-export.php#L335) tại dòng 335
- Được định nghĩa trong [`inc/mu-migration/includes/commands/class-mu-migration-import.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/mu-migration/includes/commands/class-mu-migration-import.php#L147) tại dòng 147
## Returns {#returns}
Mảng dữ liệu người dùng.
