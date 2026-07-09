---
id: wp_ultimo_render_vars
title: Филтер - wp_ultimo_render_vars
sidebar_label: wp_ultimo_render_vars
_i18n_hash: 2f3f60e0a28a26eca6448de7ea29aadd
---
# Филтер: wp_ultimo_render_vars

Омогућава програмерима plugin-а да глобално додају додатну променљиву у контекст рендеровања.

## Параметри

| Име | Тип | Опис |
|------|------|-------------|
| $args | `array` | Низ који садржи променљиве прослеђене позивом за рендеровање. |
| $view | `string` | Име приказа који треба рендеровати. |
| $default_view | `string` | Име fallback_view |

### Од верзије

- 2.0.0
### Извор

Дефинисано у [`inc/functions/template.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/functions/template.php#L31) у реду 31


## Враћа
