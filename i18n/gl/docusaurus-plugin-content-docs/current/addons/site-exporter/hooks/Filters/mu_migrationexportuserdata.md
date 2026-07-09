---
id: mu_migrationexportuserdata
title: Filtro - mu_migration/export/user/data
sidebar_label: mu_migration/export/user/data
_i18n_hash: bf562e5125d4978c6267a96274f581ef
---
# Filtro: mu_migration/export/user/data {#filter-mumigrationexportuserdata}

Filtra o conxunto predeterminado de datos de usuario que se exportarán/importarán.

## Parámetros {#parameters}

| Nome | Tipo | Descrición |
|------|------|-------------|
| $custom_user_data | `array` | O array de datos de usuario personalizado. |
| $user | `\WP_User` | O obxecto de usuario. |

### Desde {#since}

- 0.1.0
### Fonte {#source}

- Definido en [`inc/mu-migration/includes/commands/class-mu-migration-export.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/mu-migration/includes/commands/class-mu-migration-export.php#L335) na liña 335
- Definido en [`inc/mu-migration/includes/commands/class-mu-migration-import.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/mu-migration/includes/commands/class-mu-migration-import.php#L147) na liña 147
## Devolve {#returns}
Datos de usuario en array.
