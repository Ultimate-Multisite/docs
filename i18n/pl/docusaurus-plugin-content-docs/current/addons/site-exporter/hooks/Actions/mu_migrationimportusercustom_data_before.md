---
id: mu_migrationimportusercustom_data_before
title: Action - mu_migration/import/user/custom_data_before
sidebar_label: mu_migration/import/user/custom_data_before
_i18n_hash: dd547798f24ac891e6132ce450eac010
---
# Akcja: mu_migration/import/user/custom_data_before

Wywoływana przed eksportowaniem niestandardowych danych użytkownika.

## Parametry

| Nazwa | Typ | Opis |
|------|------|-------------|
| $user_data | `array` | Tablica danych użytkownika. |
| $user | `\WP_User` | Obiekt użytkownika. |

### Od

- 0.1.0
### Źródło

Zdefiniowane w [`inc/mu-migration/includes/commands/class-mu-migration-import.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/mu-migration/includes/commands/class-mu-migration-import.php#L139) w linii 139
