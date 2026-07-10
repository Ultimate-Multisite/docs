---
id: wu_contains_element
title: Фільтр - wu_contains_element
sidebar_label: wu_contains_element
_i18n_hash: 5254f5cdc4fb5e3992e8987cc4c5d82b
---
# Фільтр: wu_contains_element {#filter-wucontainselement}

Дозволяє розробникам змінювати результати початкового пошуку.

Це корисно для сторонніх конструкторів та подібних інструментів.

## Параметри {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $contains_elements | `bool` | Чи міститься елемент у вмісті. |
| $content | `string` | Вміст, який перевіряється. |
| $element | `self` | Поточний елемент. |
| $post | `null\|\WP_Post` | Пост для перевірки. |

### Since {#since}

- 2.0.0
### Source {#source}

Визначено в [`inc/ui/class-base-element.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/ui/class-base-element.php#L534) на рядку 534
