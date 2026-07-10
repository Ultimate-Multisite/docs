---
id: wp_ultimo_render_vars
title: Филтър - wp_ultimo_render_vars
sidebar_label: wp_ultimo_render_vars
_i18n_hash: 2f3f60e0a28a26eca6448de7ea29aadd
---
# Филтър: wp_ultimo_render_vars {#filter-wpultimorendervars}

Позволява на разработчиците на плагини да добавят допълнителни променливи към контекста на рендиране глобално.

## Параметри {#parameters}

| Име | Тип | Описание |
|------|------|-------------|
| $args | `array` | Масив, съдържащ променливи, предадени от повикването на рендиране. |
| $view | `string` | Име на изгледа (view), който трябва да бъде рендиран. |
| $default_view | `string` | Име на резервния изглед (fallback_view). |

### От версия {#since}

- 2.0.0
### Източник {#source}

Дефиниран в [`inc/functions/template.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/functions/template.php#L31) на линия 31


## Връща {#returns}
