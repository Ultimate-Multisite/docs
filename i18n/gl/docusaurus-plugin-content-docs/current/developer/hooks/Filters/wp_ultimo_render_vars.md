---
id: wp_ultimo_render_vars
title: Filtro - wp_ultimo_render_vars
sidebar_label: wp_ultimo_render_vars
_i18n_hash: 2f3f60e0a28a26eca6448de7ea29aadd
---
# Filtro: wp_ultimo_render_vars

Permite aos desenvolvedores de complementos engadir unha variable extra ao contexto de renderización de forma global.

## Parámetros {#parameters}

| Nome | Tipo | Descrición |
|------|------|-------------|
| $args | `array` | Array que contén variables pasadas pola chamada de renderización. |
| $view | `string` | Nome da vista que se vai renderizar. |
| $default_view | `string` | Nome da fallback_view |

### Desde {#since}

- 2.0.0
### Fonte {#source}

Definido en [`inc/functions/template.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/functions/template.php#L31) na liña 31


## Devolve {#returns}
