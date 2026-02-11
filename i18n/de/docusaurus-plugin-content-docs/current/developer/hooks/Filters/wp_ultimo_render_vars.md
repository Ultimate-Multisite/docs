---
id: wp_ultimo_render_vars
title: Filter - wp_ultimo_render_vars
sidebar_label: wp_ultimo_render_vars
_i18n_hash: 2f3f60e0a28a26eca6448de7ea29aadd
---
# Filter: wp_ultimo_render_vars

Ermöglicht Plugin-Entwicklern, global zusätzliche Variablen zum Renderkontext hinzuzufügen.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $args | `array` | Array, das die vom Renderaufruf übergebenen Variablen enthält. |
| $view | `string` | Name der zu rendernden Ansicht. |
| $default_view | `string` | Name der Fallback-Ansicht |

### Since

- 2.0.0
### Source

Defined in [`inc/functions/template.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/functions/template.php#L31) at line 31


## Returns
