---
id: wu_contains_element
title: Filter - wu_contains_element
sidebar_label: wu_contains_element
_i18n_hash: 5254f5cdc4fb5e3992e8987cc4c5d82b
---
# Филтър: wu_contains_element

Позволява на разработчиците да променят резултатите от първоначалното търсене.

Това е полезно за изграждания от трети страни и подобни сценарии.

## Параметри {#parameters}

| Име | Тип | Описание |
|------|------|-------------|
| $contains_elements | `bool` | Проверява дали елементът е съдържащ на съдържанието. |
| $content | `string` | Съдържанието, което се изследва. |
| $element | `self` | Текущият елемент. |
| $post | `null\|\WP_Post` | Пост, който трябва да бъде проверен. |

### От {#since}

- 2.0.0
### Източник {#source}

Дефиниран в [`inc/ui/class-base-element.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/ui/class-base-element.php#L534) на линия 534
