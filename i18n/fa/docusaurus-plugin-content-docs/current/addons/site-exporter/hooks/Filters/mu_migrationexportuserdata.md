---
id: mu_migrationexportuserdata
title: فیلتر - mu_migration/export/user/data
sidebar_label: mu_migration/export/user/data
_i18n_hash: bf562e5125d4978c6267a96274f581ef
---
# Filter: mu_migration/export/user/data

مجموعه پیش‌فرض داده‌های کاربری که قرار است خروجی گرفته (export) یا وارد شوند (import) را فیلتر می‌کند.

## پارامترها

| Name | Type | Description |
|------|------|-------------|
| $custom_user_data | `array` | آرایه داده‌های کاربری سفارشی. |
| $user | `\WP_User` | آبجکت کاربر. |

### از نسخه

- 0.1.0
### منبع

- در [`inc/mu-migration/includes/commands/class-mu-migration-export.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/mu-migration/includes/commands/class-mu-migration-export.php#L335) در خط ۳۳۵ تعریف شده است
- در [`inc/mu-migration/includes/commands/class-mu-migration-import.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/mu-migration/includes/commands/class-mu-migration-import.php#L147) در خط ۱۴۷ تعریف شده است
## مقدار بازگشتی
داده‌های کاربری به صورت آرایه.
