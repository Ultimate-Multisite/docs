---
id: retrieve_password_message
title: فلټر - retrieve_password_message
sidebar_label: retrieve_password_message
_i18n_hash: c1e9fbd9909dd93e70f291de55ba00e4
---
# Filter: retrieve_password_message

د پاسورډ د بیا تنظیمولو برېښنالیک د پیغام متن فلټر کوي.

## پارامیټرونه

| نوم | ډول | تشریح |
|------|------|-------------|
| $message | `string` | د برېښنالیک تلوالیز پیغام. |
| $key | `string` | د فعالولو کیلي. |
| $user_login | `string` | د کارن لپاره کارن‌نوم. |
| $user_data | `\WP_User` | WP_User څیز. |

### له

- 2.8.0
- 4.1.0: Added <code>$user_login</code> and <code>$user_data</code> parameters.
### سرچینه

په [`inc/mu-migration/includes/commands/class-mu-migration-users.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/mu-migration/includes/commands/class-mu-migration-users.php#L149) کې په ۱۴۹ کرښه کې تعریف شوی


## بېرته ورکوي
د برېښنالیک تلوالیز پیغام.
