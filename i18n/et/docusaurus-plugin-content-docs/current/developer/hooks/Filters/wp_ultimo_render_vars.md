---
id: wp_ultimo_render_vars
title: Filter - wp_ultimo_render_vars
sidebar_label: wp_ultimo_render_vars
_i18n_hash: 2f3f60e0a28a26eca6448de7ea29aadd
---
# Filter: wp_ultimo_render_vars

Võimaldab plugin arendajatel lisada globaalselt renderdamiskonteksti täiendava muutuja.

## Parameetrid {#parameters}

| Nimi | Tüüp | Kirjeldus |
|------|------|-------------|
| $args | `array` | Massiiv, mis sisaldab renderduskutsega edastatud muutujaid. |
| $view | `string` | Renderdatava vaate nimi. |
| $default_view | `string` | fallback_view nimi |

### Alates {#since}

- 2.0.0
### Allikas {#source}

Määratletud failis [`inc/functions/template.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/functions/template.php#L31) real 31


## Tagastab {#returns}
