---
id: retrieve_password_title
title: فیلتر - retrieve_password_title
sidebar_label: retrieve_password_title
_i18n_hash: 7fcf454c64361885b8f64cc6fbc9ba93
---
# فیلتر: retrieve_password_title

موضوع ایمیل بازنشانی رمز عبور را فیلتر می‌کند.

## پارامترها {#parameters}

| نام | نوع | توضیحات |
|------|------|-------------|
| $title | `string` | عنوان پیش‌فرض ایمیل. |
| $user_login | `string` | نام کاربری کاربر. |
| $user_data | `\WP_User` | شیء WP_User. |

### از نسخه {#since}

- 2.8.0
- 4.4.0: پارامترهای <code>$user_login</code> و <code>$user_data</code> اضافه شدند.
### منبع {#source}

در [`inc/mu-migration/includes/commands/class-mu-migration-users.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/mu-migration/includes/commands/class-mu-migration-users.php#L135) در خط ۱۳۵ تعریف شده است.


## مقدار بازگشتی {#returns}
عنوان پیش‌فرض ایمیل.
