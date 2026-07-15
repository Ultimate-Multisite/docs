---
id: mu_migrationimportusercustom_data_after
title: Akcia - mu_migration/import/user/custom_data_after
sidebar_label: mu_migration/import/user/custom_data_after
_i18n_hash: 4775c44fa3c63582f55cfb9f99312646
---
# Action: mu_migration/import/user/custom_data_after

Spustí sa po exportovaní vlastných používateľských údajov.

## Parametre {#parameters}

| Názov | Typ | Popis |
|------|------|-------------|
| $user_data | `array` | Pole údajov používateľa. |
| $user | `\WP_User` | Objekt používateľa. |

### Od verzie {#since}

- 0.1.0
### Zdroj {#source}

Definované v [`inc/mu-migration/includes/commands/class-mu-migration-import.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/mu-migration/includes/commands/class-mu-migration-import.php#L165) na riadku 165
