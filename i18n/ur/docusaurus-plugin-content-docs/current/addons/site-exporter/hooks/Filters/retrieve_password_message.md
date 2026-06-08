---
id: retrieve_password_message
title: Filter - retrieve_password_message
sidebar_label: retrieve_password_message
_i18n_hash: c1e9fbd9909dd93e70f291de55ba00e4
---
# Filter: retrieve_password_message

یہ پاسورڈ ری سیٹ میل کے پیغام کے متن (message body) کو فلٹر کرتا ہے۔

## پیرامیٹرز

| Name | Type | Description |
|------|------|-------------|
| $message | `string` | ڈیفالٹ میل پیغام۔ |
| $key | `string` | ایکٹیویشن کی (activation key)۔ |
| $user_login | `string` | صارف کا یوزر نیم (username)۔ |
| $user_data | `\WP_User` | WP_User آبجیکٹ۔ |

### کب سے دستیاب

- 2.8.0
- 4.1.0: <code>$user_login</code> اور <code>$user_data</code> پیرامیٹرز شامل کیے گئے۔
### ماخذ

یہ [`inc/mu-migration/includes/commands/class-mu-migration-users.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/mu-migration/includes/commands/class-mu-migration-users.php#L149) میں لائن 149 پر ڈیفائن کیا گیا ہے۔


## واپسی
ڈیفالٹ میل پیغام۔
