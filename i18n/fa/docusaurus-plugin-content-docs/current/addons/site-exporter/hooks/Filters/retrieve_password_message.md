---
id: retrieve_password_message
title: فیلتر - retrieve_password_message
sidebar_label: retrieve_password_message
_i18n_hash: c1e9fbd9909dd93e70f291de55ba00e4
---
# فیلتر: retrieve_password_message

بدنه ایمیل ریست کردن رمز عبور را فیلتر می‌کند.

## پارامترها

| نام | نوع | توضیحات |
|------|------|-------------|
| $message | `string` | پیام پیش‌فرض ایمیل. |
| $key | `string` | کلید فعال‌سازی. |
| $user_login | `string` | نام کاربری کاربر. |
| $user_data | `\WP_User` | آبجکت WP_User. |

### از

- 2.8.0
- 4.1.0: پارامترهای <code>$user_login</code> و <code>$user_data</code> اضافه شد.
### منبع

در [`inc/mu-migration/includes/commands/class-mu-migration-users.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/mu-migration/includes/commands/class-mu-migration-users.php#L149) در خط ۱۴۹ تعریف شده است.


## بازگشت
پیام پیش‌فرض ایمیل.
