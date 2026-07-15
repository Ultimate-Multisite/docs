---
id: retrieve_password_title
title: Filter - retrieve_password_title
sidebar_label: retrieve_password_title
_i18n_hash: 7fcf454c64361885b8f64cc6fbc9ba93
---
# Filter: retrieve_password_title

یہ فلٹر پاسورڈ ری سیٹ ای میل کے موضوع (subject) کو تبدیل کرنے کے لیے استعمال ہوتا ہے۔

## پیرامیٹرز (Parameters) {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $title | `string` | ڈیفالٹ ای میل کا عنوان۔ |
| $user_login | `string` | صارف کا یوزر نیم (username)۔ |
| $user_data | `\WP_User` | WP_User آبجیکٹ۔ |

### سے موجود (Since) {#since}

- 2.8.0
- 4.4.0: <code>$user_login</code> اور <code>$user_data</code> پیرامیٹرز شامل کیے گئے۔
### ماخذ (Source) {#source}

یہ [`inc/mu-migration/includes/commands/class-mu-migration-users.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/mu-migration/includes/commands/class-mu-migration-users.php#L135) میں لائن 135 پر ڈیفائن کیا گیا ہے۔


## واپسی (Returns) {#returns}
ڈیفالٹ ای میل کا عنوان۔
