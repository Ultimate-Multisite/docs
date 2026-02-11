---
id: mu_migrationimportusercustom_data_after
title: Action - mu_migration/import/user/custom_data_after
sidebar_label: mu_migration/import/user/custom_data_after
_i18n_hash: 4775c44fa3c63582f55cfb9f99312646
---
# Action: mu_migration/import/user/custom_data_after

Se déclenche après l'exportation des données utilisateur personnalisées.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $user_data | `array` | Le tableau des données utilisateur. |
| $user | `\WP_User` | L'objet utilisateur. |

### Since

- 0.1.0
### Source

Défini dans [`inc/mu-migration/includes/commands/class-mu-migration-import.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/mu-migration/includes/commands/class-mu-migration-import.php#L165) à la ligne 165
