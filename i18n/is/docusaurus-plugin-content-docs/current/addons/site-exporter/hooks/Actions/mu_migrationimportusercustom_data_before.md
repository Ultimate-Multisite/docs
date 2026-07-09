---
id: mu_migrationimportusercustom_data_before
title: Aðgerð - mu_migration/import/user/custom_data_before
sidebar_label: mu_migration/import/user/custom_data_before
_i18n_hash: dd547798f24ac891e6132ce450eac010
---
# Action: mu_migration/import/user/custom_data_before {#action-mumigrationimportusercustomdatabefore}

Keyrist áður en sérsniðin notandagögn eru flutt út.

## Færibreytur {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $user_data | `array` | Fylki notandagagna. |
| $user | `\WP_User` | Notandahluturinn. |

### Frá útgáfu {#since}

- 0.1.0
### Uppruni {#source}

Skilgreint í [`inc/mu-migration/includes/commands/class-mu-migration-import.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/mu-migration/includes/commands/class-mu-migration-import.php#L139) í línu 139
