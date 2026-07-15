---
id: wp_ultimo_render_vars
title: Филтер - wp_ultimo_render_vars
sidebar_label: wp_ultimo_render_vars
_i18n_hash: 2f3f60e0a28a26eca6448de7ea29aadd
---
# Филтер: wp_ultimo_render_vars

Им овозможува на развивачите на приклучоци глобално да додадат дополнителна променлива во контекстот за рендерирање.

## Параметри {#parameters}

| Име | Тип | Опис |
|------|------|-------------|
| $args | `array` | Низа што содржи променливи предадени од повикот за рендерирање. |
| $view | `string` | Име на приказот што треба да се рендерира. |
| $default_view | `string` | Име на fallback_view |

### Од {#since}

- 2.0.0
### Извор {#source}

Дефинирано во [`inc/functions/template.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/functions/template.php#L31) на линија 31


## Враќања {#returns}
