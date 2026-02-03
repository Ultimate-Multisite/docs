---
id: wu_admin_notices
title: Filtro - wu_admin_notices
sidebar_label: wu_admin_notices
_i18n_hash: b98d294d75277dfcfd941ca0e573e10c
---
# Filtro: wu_admin_notices

Permite a los desarrolladores filtrar los avisos de administración añadidos por Ultimate Multisite.

## Parámetros

| Nombre | Tipo | Descripción |
|------|------|-------------|
| $notices | `array` | Lista de avisos para ese panel en particular. |
| $all_notices | `array` | Lista de avisos añadidos, segregados por panel. |
| $panel | `string` | Panel para recuperar los avisos. |
| $filter | `string` | Si los avisos descartables han sido filtrados. |
| $dismissed_messages | `array` | Lista de claves de avisos descartados. |

### Desde

- 2.0.0

### Fuente

Definido en [`inc/class-admin-notices.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-admin-notices.php#L121) en la línea 121


## Devuelve
