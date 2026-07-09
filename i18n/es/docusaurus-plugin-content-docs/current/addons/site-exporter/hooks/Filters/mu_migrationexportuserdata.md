---
id: mu_migrationexportuserdata
title: Filtro - mu_migration/export/user/data
sidebar_label: mu_migration/export/user/data
_i18n_hash: bf562e5125d4978c6267a96274f581ef
---
# Filtro: mu_migration/export/user/data {#filter-mumigrationexportuserdata}

Filtra el conjunto predeterminado de datos de usuario que se van a exportar/importar.

## Parámetros {#parameters}

| Nombre | Tipo | Descripción |
|------|------|-------------|
| $custom_user_data | `array` | El array de datos de usuario personalizados. |
| $user | `\WP_User` | El objeto de usuario. |

### Desde {#since}

- 0.1.0
### Fuente {#source}

- Definido en [`inc/mu-migration/includes/commands/class-mu-migration-export.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/mu-migration/includes/commands/class-mu-migration-export.php#L335) en la línea 335
- Definido en [`inc/mu-migration/includes/commands/class-mu-migration-import.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/mu-migration/includes/commands/class-mu-migration-import.php#L147) en la línea 147
## Devuelve {#returns}
Datos de usuario en array.
