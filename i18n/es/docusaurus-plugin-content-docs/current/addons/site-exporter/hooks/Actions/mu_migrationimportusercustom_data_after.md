---
id: mu_migrationimportusercustom_data_after
title: Action - mu_migration/import/user/custom_data_after
sidebar_label: mu_migration/import/user/custom_data_after
_i18n_hash: 4775c44fa3c63582f55cfb9f99312646
---
# Acción: mu_migration/import/user/custom_data_after

Se dispara después de exportar los datos personalizados del usuario.

## Parámetros

| Nombre | Tipo | Descripción |
|------|------|-------------|
| $user_data | `array` | El array de datos del usuario. |
| $user | `\WP_User` | El objeto del usuario. |

### Desde

- 0.1.0

### Fuente

Definido en [`inc/mu-migration/includes/commands/class-mu-migration-import.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/mu-migration/includes/commands/class-mu-migration-import.php#L165) en la línea 165
