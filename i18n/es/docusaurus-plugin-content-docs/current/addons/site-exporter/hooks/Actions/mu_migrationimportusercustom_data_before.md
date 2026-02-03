---
id: mu_migrationimportusercustom_data_before
title: ''
sidebar_label: mu_migration/import/user/custom_data_before
_i18n_hash: dd547798f24ac891e6132ce450eac010
---
# Acción: mu_migration/import/user/custom_data_before

Se dispara antes de exportar los datos personalizados del usuario.

## Parámetros

| Nombre | Tipo | Descripción |
|--------|------|-------------|
| $user_data | `array` | El array de datos del usuario. |
| $user | `\WP_User` | El objeto del usuario. |

### Desde

- 0.1.0

### Fuente

Definido en [`inc/mu-migration/includes/commands/class-mu-migration-import.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/mu-migration/includes/commands/class-mu-migration-import.php#L139) en la línea 139
