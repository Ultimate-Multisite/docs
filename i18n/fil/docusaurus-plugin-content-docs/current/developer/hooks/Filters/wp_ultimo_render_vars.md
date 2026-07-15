---
id: wp_ultimo_render_vars
title: Filter - wp_ultimo_render_vars
sidebar_label: wp_ultimo_render_vars
_i18n_hash: 2f3f60e0a28a26eca6448de7ea29aadd
---
# Filter: wp_ultimo_render_vars

Pinapayagan nito ang mga developer ng plugin na magdagdag ng karagdagang variable sa render context sa buong sistema (globally).

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $args | `array` | Array na naglalaman ng mga variable na ipinasa ng tawag sa render. |
| $view | `string` | Pangalan ng view na ipi-render. |
| $default_view | `string` | Pangalan ng view na gagamitin bilang kapalit (fallback view). |

### Since {#since}

- 2.0.0
### Source {#source}

Tinukoy sa [`inc/functions/template.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/functions/template.php#L31) sa linya 31


## Returns {#returns}
