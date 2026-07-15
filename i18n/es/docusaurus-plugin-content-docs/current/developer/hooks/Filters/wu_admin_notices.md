---
id: wu_admin_notices
title: Filtro - wu_admin_notices
sidebar_label: wu_admin_notices
_i18n_hash: b98d294d75277dfcfd941ca0e573e10c
---
# Filtro: wu_admin_notices

Permite a los desarrolladores filtrar los avisos de administración añadidos por Ultimate Multisite.

## Parámetros {#parameters}

| Nombre | Tipo | Descripción |
|------|------|-------------|
| $notices | `array` | List of notices for that particular panel. |
| $all_notices | `array` | List of notices added, segregated by panel. |
| $panel | `string` | Panel to retrieve the notices. |
| $filter | `string` | If the dismissable notices have been filtered out. |
| $dismissed_messages | `array` | List of dismissed notice keys. |

### Desde {#since}

- 2.0.0
### Fuente {#source}

Definido en [`inc/class-admin-notices.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-admin-notices.php#L121) en la línea 121


## Devuelve {#returns}
