---
id: wp_ultimo_render_vars
title: Filter - wp_ultimo_render_vars
sidebar_label: wp_ultimo_render_vars
_i18n_hash: 2f3f60e0a28a26eca6448de7ea29aadd
---
# Filter: wp_ultimo_render_vars

Дазваляе раработнікам плагінаў дадаваць адпаведныя (extra) кампаненты ў кантэкст рэндэрынгу ў глобальным масштабе.

## Параметры

| Назва | Тып | Апісан |
|------|------|-------------|
| $args | `array` | Массив, які ўтваржае кампаненты, перададзеныя выклікам рэндэрынгу. |
| $view | `string` | Назва тэматычнага блоку (view), які трэба рэндэрыць. |
| $default_view | `string` | Назва тэматычнага блоку, які выкарыстоўваецца ў выпадку невыкарыстання (fallback_view). |

### З

- 2.0.0
### Выказчык

Вызначаны ў [`inc/functions/template.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/functions/template.php#L31) у 31-й пасылцы.


## Павяртае
