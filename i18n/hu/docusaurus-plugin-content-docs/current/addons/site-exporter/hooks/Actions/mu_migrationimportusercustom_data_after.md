---
id: mu_migrationimportusercustom_data_after
title: Action - mu_migration/import/user/custom_data_after
sidebar_label: mu_migration/import/user/custom_data_after
_i18n_hash: 4775c44fa3c63582f55cfb9f99312646
---
# Action: mu_migration/import/user/custom_data_after

Kivitelezőként fut a felhasználói adat exportálása után.

## Paraméterek {#parameters}

| Neve | Típus | Leírás |
|------|------|-------------|
| $user_data | `array` | Az felhasználói adatok tömbje. |
| $user | `\WP_User` | Az felhasználó objektum. |

### Since {#since}

- 0.1.0
### Source {#source}

Definálva a [`inc/mu-migration/includes/commands/class-mu-migration-import.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/mu-migration/includes/commands/class-mu-migration-import.php#L165) fájlban, 165-sorban
