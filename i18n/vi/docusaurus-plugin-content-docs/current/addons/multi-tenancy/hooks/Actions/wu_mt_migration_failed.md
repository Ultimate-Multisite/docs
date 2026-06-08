---
id: wu_mt_migration_failed
title: Action - wu_mt_migration_failed
sidebar_label: wu_mt_migration_failed
_i18n_hash: 81c7e8bef0b593fcc8369a666fa8799a
---
# Action: wu_mt_migration_failed

Kích hoạt khi quá trình di chuyển (migration) thất bại.

## Tham số

| Tên | Kiểu dữ liệu | Mô tả |
|------|------|-------------|
| $job | `\Migration_Job` | Công việc di chuyển bị lỗi. |
| $message | `string` | Thông báo lỗi. |

### Từ phiên bản

- 1.0.0
### Nguồn

Được định nghĩa trong [`inc/migration/class-migration-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-multi-tenancy/blob/main/inc/migration/class-migration-manager.php#L720) tại dòng 720
