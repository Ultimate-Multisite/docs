---
id: wu_mt_migration_failed
title: Acción - wu_mt_migration_failed
sidebar_label: wu_mt_migration_failed
_i18n_hash: 81c7e8bef0b593fcc8369a666fa8799a
---
# Acción: wu_mt_migration_failed

Se dispara cuando una migración falla.

## Parámetros

| Nombre | Tipo | Descripción |
|------|------|-------------|
| $job | `\Migration_Job` | El trabajo de migración fallido. |
| $message | `string` | Mensaje de error. |

### Desde

- 1.0.0

### Fuente

Definido en [`inc/migration/class-migration-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-multi-tenancy/blob/main/inc/migration/class-migration-manager.php#L720) en la línea 720
