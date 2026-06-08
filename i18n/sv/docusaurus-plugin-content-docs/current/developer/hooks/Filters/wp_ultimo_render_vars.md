---
id: wp_ultimo_render_vars
title: Filter - wp_ultimo_render_vars
sidebar_label: wp_ultimo_render_vars
_i18n_hash: 2f3f60e0a28a26eca6448de7ea29aadd
---
# Filter: wp_ultimo_render_vars

Låter till pluginutvecklare att lägga till extra variabler i render-kontexten globalt.

## Parametrar

| Namn | Typ | Beskrivning |
|------|------|-------------|
| $args | `array` | Array som innehåller variabler som skickas i render-anropet. |
| $view | `string` | Namnet på vy som ska renderas. |
| $default_view | `string` | Namnet på standardvyn (fallback_view). |

### Sedan

- 2.0.0
### Källa

Definieras i [`inc/functions/template.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/functions/template.php#L31) på rad 31


## Returnerar
