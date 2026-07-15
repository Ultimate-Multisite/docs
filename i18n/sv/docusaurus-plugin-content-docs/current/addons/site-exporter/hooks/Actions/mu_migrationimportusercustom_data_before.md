---
id: mu_migrationimportusercustom_data_before
title: Action - mu_migration/import/user/custom_data_before
sidebar_label: mu_migration/import/user/custom_data_before
_i18n_hash: dd547798f24ac891e6132ce450eac010
---
# Action: mu_migration/import/user/custom_data_before

Körs innan export av anpassad användardata.

## Parametrar {#parameters}

| Namn | Typ | Beskrivning |
|------|------|-------------|
| $user_data | `array` | Arrayn med användardata. |
| $user | `\WP_User` | Användarobjektet. |

### Sedan {#since}

- 0.1.0
### Källa {#source}

Definieras i [`inc/mu-migration/includes/commands/class-mu-migration-import.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/mu-migration/includes/commands/class-mu-migration-import.php#L139) på rad 139
