---
id: wp_ultimo_render_vars
title: Filter - wp_ultimo_render_vars
sidebar_label: wp_ultimo_render_vars
_i18n_hash: 2f3f60e0a28a26eca6448de7ea29aadd
---
# Filter: wp_ultimo_render_vars

Omogoča razvijalcem pluginov, da globalno dodajo dodatno spremenljivko v kontekst izrisa.

## Parametri {#parameters}

| Ime | Vrsta | Opis |
|------|------|-------------|
| $args | `array` | Array, ki vsebuje spremenljivke, posredovane s klicem izrisa. |
| $view | `string` | Ime pogleda, ki naj bo izrisan. |
| $default_view | `string` | Ime fallback_view |

### Od različice {#since}

- 2.0.0
### Vir {#source}

Določeno v [`inc/functions/template.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/functions/template.php#L31) v vrstici 31


## Vrne {#returns}
