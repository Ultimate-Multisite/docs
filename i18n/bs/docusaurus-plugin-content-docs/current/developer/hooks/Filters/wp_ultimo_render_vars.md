---
id: wp_ultimo_render_vars
title: Filter - wp_ultimo_render_vars
sidebar_label: wp_ultimo_render_vars
_i18n_hash: 2f3f60e0a28a26eca6448de7ea29aadd
---
# Filter: wp_ultimo_render_vars

Omogućava razvojnim programerima plugin-a da globalno dodaju dodatne varijable u kontekst za renderovanje.

## Parametri

| Ime | Tip | Opis |
|------|------|-------------|
| $args | `array` | Niz koji sadrži varijable koje je poziv za renderovanje proslijedio. |
| $view | `string` | Ime prikaza (view) koji treba da se renderuje. |
| $default_view | `string` | Ime prikaza koji služi kao rezervna opcija (fallback_view). |

### Od

- 2.0.0
### Izvor

Definisano u [`inc/functions/template.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/functions/template.php#L31) na liniji 31


## Vraća
