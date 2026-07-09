---
id: wp_ultimo_render_vars
title: Filtru - wp_ultimo_render_vars
sidebar_label: wp_ultimo_render_vars
_i18n_hash: 2f3f60e0a28a26eca6448de7ea29aadd
---
# Filtru: wp_ultimo_render_vars {#filter-wpultimorendervars}

Permite dezvoltatorilor de plugin-uri să adauge variabile suplimentare în contextul de renderare la nivel global.

## Parametri {#parameters}

| Nume | Tip | Descriere |
|------|------|-------------|
| $args | `array` | Un array care conține variabilele transmise de apelul de renderare. |
| $view | `string` | Numele vizualizării (view) care urmează a fi renderată. |
| $default_view | `string` | Numele vizualizării de rezervă (fallback_view). |

### De la {#since}

- 2.0.0
### Sursă {#source}

Definit în [`inc/functions/template.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/functions/template.php#L31) la linia 31


## Returnează {#returns}
