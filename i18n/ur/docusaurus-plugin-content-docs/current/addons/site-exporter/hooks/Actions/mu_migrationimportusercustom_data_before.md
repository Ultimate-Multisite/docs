---
id: mu_migrationimportusercustom_data_before
title: Action - mu_migration/import/user/custom_data_before
sidebar_label: mu_migration/import/user/custom_data_before
_i18n_hash: dd547798f24ac891e6132ce450eac010
---
# Action: mu_migration/import/user/custom_data_before {#action-mumigrationimportusercustomdatabefore}

یہ کسٹم یوزر ڈیٹا کو ایکسپورٹ کرنے سے پہلے چلتا ہے۔

## پیرا میٹرز {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $user_data | `array` | یوزر ڈیٹا کا array۔ |
| $user | `\WP_User` | یوزر کا آبجیکٹ۔ |

### Since {#since}

- 0.1.0
### Source {#source}

[`inc/mu-migration/includes/commands/class-mu-migration-import.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/mu-migration/includes/commands/class-mu-migration-import.php#L139) میں لائن 139 پر ڈیفائن کیا گیا ہے۔
