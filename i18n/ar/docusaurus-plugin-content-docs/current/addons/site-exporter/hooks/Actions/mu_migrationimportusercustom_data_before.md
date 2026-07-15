---
id: mu_migrationimportusercustom_data_before
title: الإجراء - mu_migration/import/user/custom_data_before
sidebar_label: mu_migration/import/user/custom_data_before
_i18n_hash: dd547798f24ac891e6132ce450eac010
---
# Action: mu_migration/import/user/custom_data_before

Fires before exporting the custom user data.

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $user_data | `array` | The user data array. |
| $user | `\WP_User` | The user object. |

### Since {#since}

- 0.1.0
### Source {#source}

Defined in [`inc/mu-migration/includes/commands/class-mu-migration-import.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/mu-migration/includes/commands/class-mu-migration-import.php#L139) at line 139
