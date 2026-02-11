---
id: wp_ultimo_render_vars
title: Фильтр - wp_ultimo_render_vars
sidebar_label: wp_ultimo_render_vars
_i18n_hash: 2f3f60e0a28a26eca6448de7ea29aadd
---
# Фильтр: wp_ultimo_render_vars

Позволяет разработчикам плагинов добавлять дополнительные переменные в глобальный контекст рендеринга.

## Параметры

| Имя | Тип | Описание |
|------|------|-------------|
| $args | `array` | Массив, содержащий переменные, переданные при вызове рендеринга. |
| $view | `string` | Имя представления, которое будет отрисовано. |
| $default_view | `string` | Имя fallback_view |

### С версии

- 2.0.0

### Источник

Определено в [`inc/functions/template.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/functions/template.php#L31) на строке 31

## Возвращает
