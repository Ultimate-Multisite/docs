---
id: mu_migrationimportusercustom_data_after
title: Action - mu_migration/import/user/custom_data_after
sidebar_label: mu_migration/import/user/custom_data_after
_i18n_hash: 4775c44fa3c63582f55cfb9f99312646
---
# Action: mu_migration/import/user/custom_data_after

Wywoływane po wyeksportowaniu niestandardowych danych użytkownika.

## Parametry

| Name | Type | Description |
|------|------|-------------|
| $user_data | `array` | Tablica danych użytkownika. |
| $user | `\WP_User` | Obiekt użytkownika. |

### Since

- 0.1.0
### Source

Zdefiniowane w [`inc/mu-migration/includes/commands/class-mu-migration-import.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/mu-migration/includes/commands/class-mu-migration-import.php#L165) w linii 165
