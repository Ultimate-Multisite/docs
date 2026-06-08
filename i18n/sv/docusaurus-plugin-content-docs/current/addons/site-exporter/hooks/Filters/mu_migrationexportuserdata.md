---
id: mu_migrationexportuserdata
title: Filter - mu_migration/export/user/data
sidebar_label: mu_migration/export/user/data
_i18n_hash: bf562e5125d4978c6267a96274f581ef
---
# Filter: mu_migration/export/user/data

Filtrerar standarduppsättningen av användardata som ska exporteras eller importeras.

## Parametrar

| Namn | Typ | Beskrivning |
|------|------|-------------|
| $custom_user_data | `array` | Array med anpassad användardata. |
| $user | `\WP_User` | Användarobjektet. |

### Sedan

- 0.1.0
### Källa

- Definierat i [`inc/mu-migration/includes/commands/class-mu-migration-export.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/mu-migration/includes/commands/class-mu-migration-export.php#L335) på rad 335
- Definierat i [`inc/mu-migration/includes/commands/class-mu-migration-import.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/mu-migration/includes/commands/class-mu-migration-import.php#L147) på rad 147
## Returnerar
En array med användardata.
