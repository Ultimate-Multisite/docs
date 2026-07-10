---
id: wp_ultimo_render_vars
title: Фільтр - wp_ultimo_render_vars
sidebar_label: wp_ultimo_render_vars
_i18n_hash: 2f3f60e0a28a26eca6448de7ea29aadd
---
# Фільтр: wp_ultimo_render_vars {#filter-wpultimorendervars}

Дозволяє розробникам плагінів додавати додаткові змінні до контексту рендерингу глобально.

## Параметри {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $args | `array` | Масив, що містить змінні, передані викликом рендерингу. |
| $view | `string` | Ім'я представлення (view), яке потрібно відрендерити. |
| $default_view | `string` | Ім'я представлення за замовчуванням (fallback_view). |

### Since {#since}

- 2.0.0
### Source {#source}

Визначено в [`inc/functions/template.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/functions/template.php#L31) на рядку 31


## Returns {#returns}
