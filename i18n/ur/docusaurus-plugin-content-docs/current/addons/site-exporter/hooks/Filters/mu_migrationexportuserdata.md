---
id: mu_migrationexportuserdata
title: فلٹر - mu_migration/export/user/data
sidebar_label: mu_migration/export/user/data
_i18n_hash: bf562e5125d4978c6267a96274f581ef
---
# Filter: mu_migration/export/user/data

یہ فلٹر صارف کے ڈیٹا کے ڈیفالٹ سیٹ کو فلٹر کرتا ہے جو ایکسپورٹ یا امپورٹ کیا جانا ہے۔

## پیرامیٹرز

| Name | Type | Description |
|------|------|-------------|
| $custom_user_data | `array` | صارف کا کسٹم ڈیٹا جو ایک array کی شکل میں ہو۔ |
| $user | `\WP_User` | صارف کا آبجیکٹ (object)۔ |

### Since

- 0.1.0
### Source

- Defined in [`inc/mu-migration/includes/commands/class-mu-migration-export.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/mu-migration/includes/commands/class-mu-migration-export.php#L335) at line 335
- Defined in [`inc/mu-migration/includes/commands/class-mu-migration-import.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/mu-migration/includes/commands/class-mu-migration-import.php#L147) at line 147
## Returns
صارف کا ڈیٹا ایک array کی شکل میں۔
