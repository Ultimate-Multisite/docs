---
id: wu_bypass_unset_current_user
title: Filtro - wu_bypass_unset_current_user
sidebar_label: wu_bypass_unset_current_user
_i18n_hash: fc4c248df410793da1754944250d8b11
---
## Filtro: wu_bypass_unset_current_user

Permitir a los desarrolladores omitir el código que desactiva el usuario actual.

Al devolver cualquier valor distinto de null, se omite la desactivación del usuario actual conectado. Esto puede ser útil en algunos escenarios, por ejemplo, al tratar con sub-sitios que se utilizan como paneles de administración.

## Parámetros

| Nombre | Tipo | Descripción |
|--------|------|-------------|
| $null_or_bypass | `mixed` | Null para continuar, cualquier otro valor para omitirlo. |
| $current_user | `false|WP_User` | El objeto del usuario actual. |

### Desde

- 2.0.11

### Fuente

Definido en [`inc/compat/class-multiple-accounts-compat.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/compat/class-multiple-accounts-compat.php#L221) en la línea 221


## Devuelve
