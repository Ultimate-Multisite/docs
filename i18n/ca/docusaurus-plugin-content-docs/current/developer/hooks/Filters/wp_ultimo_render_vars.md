---
id: wp_ultimo_render_vars
title: Filtre - wp_ultimo_render_vars
sidebar_label: wp_ultimo_render_vars
_i18n_hash: 2f3f60e0a28a26eca6448de7ea29aadd
---
# Filtre: wp_ultimo_render_vars

Permet als desenvolupadors de plugins afegir variables addicionals al context de render globalment.

## Paràmetres {#parameters}

| Nom | Tip | Descripció |
|------|------|-------------|
| $args | `array` | Array que conté les variables passades per la llamada a render. |
| $view | `string` | Nom de la vista que s'ha de renderitzar. |
| $default_view | `string` | Nom de la `fallback_view`. |

### Des de {#since}

- 2.0.0
### Font {#source}

Definït en [`inc/functions/template.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/functions/template.php#L31) a la línia 31


## Retorns {#returns}
