---
id: retrieve_password_title
title: فلټر - retrieve_password_title
sidebar_label: retrieve_password_title
_i18n_hash: 7fcf454c64361885b8f64cc6fbc9ba93
---
# Filter: retrieve_password_title

د پټنوم د بیا تنظیم برېښنالیک موضوع فلټر کوي.

## پارامترونه {#parameters}

| نوم | ډول | تشریح |
|------|------|-------------|
| $title | `string` | د برېښنالیک اصلي سرلیک. |
| $user_login | `string` | د کاروونکي لپاره کارن‌نوم. |
| $user_data | `\WP_User` | WP_User څیز. |

### له نسخې راهیسې {#since}

- 2.8.0
- 4.4.0: Added the <code>$user_login</code> and <code>$user_data</code> parameters.
### سرچینه {#source}

په [`inc/mu-migration/includes/commands/class-mu-migration-users.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/mu-migration/includes/commands/class-mu-migration-users.php#L135) کې په ۱۳۵ کرښه تعریف شوی


## ستنېدنې {#returns}
د برېښنالیک اصلي سرلیک.
