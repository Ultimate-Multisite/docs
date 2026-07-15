---
id: wp_ultimo_render_vars
title: Filter - wp_ultimo_render_vars
sidebar_label: wp_ultimo_render_vars
_i18n_hash: 2f3f60e0a28a26eca6448de7ea29aadd
---
# Filter: wp_ultimo_render_vars

Lar plugin-utviklere legge til ekstra variabler i render-konteksten globalt.

## Parametere {#parameters}

| Navn | Type | Beskrivelse |
|------|------|-------------|
| $args | `array` | Array som inneholder variablene som ble sendt inn av render-kallingen. |
| $view | `string` | Navnet på visningen som skal renderes. |
| $default_view | `string` | Navnet på standardvisningen (fallback_view). |

### Siden {#since}

- 2.0.0
### Kilde {#source}

Definert i [`inc/functions/template.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/functions/template.php#L31) på linje 31


## Returnerer {#returns}
