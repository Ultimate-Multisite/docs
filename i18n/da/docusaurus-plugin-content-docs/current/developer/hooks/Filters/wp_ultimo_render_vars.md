---
id: wp_ultimo_render_vars
title: Filter - wp_ultimo_render_vars
sidebar_label: wp_ultimo_render_vars
_i18n_hash: 2f3f60e0a28a26eca6448de7ea29aadd
---
# Filter: wp_ultimo_render_vars {#filter-wpultimorendervars}

Tillad pluginudviklere at tilføje en ekstra variabel til renderingskonteksten globalt.

## Parametre {#parameters}

| Navn | Type | Beskrivelse |
|------|------|-------------|
| $args | `array` | Array, der indeholder variabler, som sendes af renderingskaldet. |
| $view | `string` | Navnet på den visning, der skal renderes. |
| $default_view | `string` | Navnet på fallback_view |

### Siden {#since}

- 2.0.0
### Kilde {#source}

Defineret i [`inc/functions/template.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/functions/template.php#L31) på linje 31


## Returnerer {#returns}
