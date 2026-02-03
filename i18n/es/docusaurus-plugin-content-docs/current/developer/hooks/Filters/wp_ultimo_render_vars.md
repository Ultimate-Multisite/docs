---
id: wp_ultimo_render_vars
title: Filtro - wp_ultimo_render_vars
sidebar_label: wp_ultimo_render_vars
_i18n_hash: 2f3f60e0a28a26eca6448de7ea29aadd
---
# Filter: wp_ultimo_render_vars

Permite a los desarrolladores de plugins agregar variables extra al contexto de renderizado globalmente.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $args | `array` | Matriz que contiene las variables pasadas por la llamada de renderizado. |
| $view | `string` | Nombre de la vista que se va a renderizar. |
| $default_view | `string` | Nombre de la vista de respaldo |

### Desde

- 2.0.0
### Fuente

Definido en [`inc/functions/template.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/functions/template.php#L31) en la línea 31


## Devuelve
