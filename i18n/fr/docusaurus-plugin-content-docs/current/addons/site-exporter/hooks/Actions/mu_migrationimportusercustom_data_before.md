---
id: mu_migrationimportusercustom_data_before
title: Action - mu_migration/import/user/custom_data_before
sidebar_label: mu_migration/import/user/custom_data_before
_i18n_hash: dd547798f24ac891e6132ce450eac010
---
# Action: mu_migration/import/user/custom_data_before

Fires before exporting the custom user data.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $user_data | `array` | Le tableau des données utilisateur. |
| $user | `\WP_User` | L'objet utilisateur. |

### Since

- 0.1.0
### Source

Defined in [`inc/mu-migration/includes/commands/class-mu-migration-import.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/mu-migration/includes/commands/class-mu-migration-import.php#L139) at line 139
