---
id: wp_ultimo_render_vars
title: Filter - wp_ultimo_render_vars
sidebar_label: wp_ultimo_render_vars
_i18n_hash: 2f3f60e0a28a26eca6448de7ea29aadd
---
# Filter: wp_ultimo_render_vars

Umožňuje vývojářům pluginů přidat do kontextu renderování další proměnné globálně.

## Parametry

| Název | Typ | Popis |
|------|------|-------------|
| $args | `array` | Pole obsahující proměnné předané voláním renderu. |
| $view | `string` | Název pohledu, který má být vykreslen. |
| $default_view | `string` | Název pohledu, který se použije jako záložní (fallback_view). |

### Od

- 2.0.0
### Zdroj

Definováno v [`inc/functions/template.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/functions/template.php#L31) na řádku 31


## Vrátí
