---
id: wp_ultimo_render_vars
title: Suodatin - wp_ultimo_render_vars
sidebar_label: wp_ultimo_render_vars
_i18n_hash: 2f3f60e0a28a26eca6448de7ea29aadd
---
# Filter: wp_ultimo_render_vars {#filter-wpultimorendervars}

Salli lisäosien kehittäjien lisätä ylimääräinen muuttuja renderöintikontekstiin globaalisti.

## Parametrit {#parameters}

| Nimi | Tyyppi | Kuvaus |
|------|------|-------------|
| $args | `array` | Taulukko, joka sisältää renderöintikutsun välittämät muuttujat. |
| $view | `string` | Renderöitävän näkymän nimi. |
| $default_view | `string` | fallback_view-näkymän nimi |

### Alkaen {#since}

- 2.0.0
### Lähde {#source}

Määritelty tiedostossa [`inc/functions/template.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/functions/template.php#L31) rivillä 31


## Palauttaa {#returns}
