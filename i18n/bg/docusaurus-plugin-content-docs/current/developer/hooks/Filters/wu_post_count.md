---
id: wu_post_count
title: Филтър - wu_post_count
sidebar_label: wu_post_count
_i18n_hash: 435505abb02375a268c71a8cb10b7ac6
---
# Филтър: wu_post_count {#filter-wupostcount}

Позволява на разработчиците на плагини да променят общия брой публикации

## Параметри {#parameters}

| Име | Тип | Описание |
|------|------|-------------|
| $count | `int` | Общият брой публикации |
| $post_counts | `object` | WordPress обект, върнат от функцията `wp_count_posts` |
| $post_type | `string` | Слаг на типа съдържание (post type) |

### От {#since}

- 1.9.1
### Източник {#source}

Дефиниран в [`inc/limitations/class-limit-post-types.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/limitations/class-limit-post-types.php#L136) на линия 136


## Връща {#returns}
Нов общ брой
