---
id: wu_contains_element
title: Филтер - wu_contains_element
sidebar_label: wu_contains_element
_i18n_hash: 5254f5cdc4fb5e3992e8987cc4c5d82b
---
# Филтер: wu_contains_element {#filter-wucontainselement}

Омогућава програмерима да промене резултате почетне претраге.

Ово је корисно за градитеље трећих страна и слично.

## Параметри {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $contains_elements | `bool` | Да ли је елемент садржан у садржају. |
| $content | `string` | Садржај који се испитује. |
| $element | `self` | Тренутни елемент. |
| $post | `null\|\WP_Post` | објава за проверу. |

### Од верзије {#since}

- 2.0.0
### Извор {#source}

Дефинисано у [`inc/ui/class-base-element.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/ui/class-base-element.php#L534) у линији 534
