---
id: wp_ultimo_render_vars
title: Filter - wp_ultimo_render_vars
sidebar_label: wp_ultimo_render_vars
_i18n_hash: 2f3f60e0a28a26eca6448de7ea29aadd
---
# Filtr: wp_ultimo_render_vars

Pozwala deweloperom wtyczek na dodanie dodatkowych zmiennych do kontekstu renderowania na poziomie globalnym.

## Parametry {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $args | `array` | Tablica zawierająca zmienne przekazane wywołaniem renderowania. |
| $view | `string` | Nazwa widoku, który ma zostać wyrenderowany. |
| $default_view | `string` | Nazwa widoku zapasowego (fallback_view). |

### Od {#since}

- 2.0.0
### Źródło {#source}

Zdefiniowane w [`inc/functions/template.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/functions/template.php#L31) w linii 31


## Zwraca {#returns}
