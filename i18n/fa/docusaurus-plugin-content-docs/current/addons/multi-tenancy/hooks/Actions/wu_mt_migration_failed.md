---
id: wu_mt_migration_failed
title: عملکرد - wu_mt_migration_failed
sidebar_label: wu_mt_migration_failed
_i18n_hash: 81c7e8bef0b593fcc8369a666fa8799a
---
# اکشن: wu_mt_migration_failed

زمانی فراخوانی می‌شود که فرآیند مهاجرت ناموفق باشد.

## پارامترها

| نام | نوع | توضیحات |
|------|------|-------------|
| $job | `\Migration_Job` | وظیفه مهاجرت که ناموفق شده است. |
| $message | `string` | پیام خطا. |

### از نسخه

- 1.0.0
### منبع

در [`inc/migration/class-migration-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-multi-tenancy/blob/main/inc/migration/class-migration-manager.php#L720) در خط ۷۲۰ تعریف شده است.
