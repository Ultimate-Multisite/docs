---
id: wp_ultimo_render_vars
title: Filter - wp_ultimo_render_vars
sidebar_label: wp_ultimo_render_vars
_i18n_hash: 2f3f60e0a28a26eca6448de7ea29aadd
---
# Filter: wp_ultimo_render_vars

Umožňuje vývojárom pluginov globálne pridať extra premennú do kontextu vykresľovania.

## Parametre

| Názov | Typ | Popis |
|------|------|-------------|
| $args | `array` | Pole obsahujúce premenné odovzdané volaním vykresľovania. |
| $view | `string` | Názov zobrazenia, ktoré sa má vykresliť. |
| $default_view | `string` | Názov fallback_view |

### Od verzie

- 2.0.0
### Zdroj

Definované v [`inc/functions/template.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/functions/template.php#L31) na riadku 31


## Návratové hodnoty
