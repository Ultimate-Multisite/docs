---
id: retrieve_password_title
title: فلتر - retrieve_password_title
sidebar_label: retrieve_password_title
_i18n_hash: 7fcf454c64361885b8f64cc6fbc9ba93
---
# مرشح: retrieve_password_title

يُفلتر موضوع بريد إعادة تعيين كلمة المرور.

## المعاملات

| الاسم | النوع | الوصف |
|------|------|-------------|
| $title | `string` | عنوان البريد الإلكتروني الافتراضي. |
| $user_login | `string` | اسم المستخدم للمستخدم. |
| $user_data | `\WP_User` | كائن WP_User. |

### منذ

- 2.8.0
- 4.4.0: أضيفت معلمات <code>$user_login</code> و <code>$user_data</code>.

### المصدر

تم تعريفه في [`inc/mu-migration/includes/commands/class-mu-migration-users.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/mu-migration/includes/commands/class-mu-migration-users.php#L135) في السطر 135


## العائد
عنوان البريد الإلكتروني الافتراضي.
