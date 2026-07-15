---
id: mu_migrationimportusercustom_data_before
title: Akcia - mu_migration/import/user/custom_data_before
sidebar_label: mu_migration/import/user/custom_data_before
_i18n_hash: dd547798f24ac891e6132ce450eac010
---
# Action: mu_migration/import/user/custom_data_before

Spustí sa pred exportovaním vlastných používateľských údajov.

## Parametre {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $user_data | `array` | Pole údajov používateľa. |
| $user | `\WP_User` | Objekt používateľa. |

### Od verzie {#since}

- 0.1.0
### Zdroj {#source}

Definované v [`inc/mu-migration/includes/commands/class-mu-migration-import.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/mu-migration/includes/commands/class-mu-migration-import.php#L139) na riadku 139
