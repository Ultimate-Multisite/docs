---
id: mu_migrationimportusercustom_data_after
title: Action - mu_migration/import/user/custom_data_after
sidebar_label: mu_migration/import/user/custom_data_after
_i18n_hash: 4775c44fa3c63582f55cfb9f99312646
---
# Akce: mu_migration/import/user/custom_data_after

Spustí se po exportaci uživatelských custom dat.

## Parametry {#parameters}

| Název | Typ | Popis |
|------|------|-------------|
| $user_data | `array` | Pole s uživatelskými daty. |
| $user | `\WP_User` | Objekt uživatele. |

### Od {#since}

- 0.1.0
### Zdroj {#source}

Definováno v [`inc/mu-migration/includes/commands/class-mu-migration-import.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/mu-migration/includes/commands/class-mu-migration-import.php#L165) na řádku 165
