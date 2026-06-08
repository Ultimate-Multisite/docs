---
id: wu_post_count
title: Фільтр - wu_post_count
sidebar_label: wu_post_count
_i18n_hash: 435505abb02375a268c71a8cb10b7ac6
---
# Filter: wu_post_count

Дазваляе раробнікам плагінаў змяніць загальны лік пасты.

## Параметры

| Назва | Тып | Апісан |
|------|------|-------------|
| $count | `int` | Загальны лік пасты |
| $post_counts | `object` | Объект WordPress, які вяртаецца функцыяй `wp_count_posts` |
| $post_type | `string` | Слог тыпу паста |

### З

- 1.9.1
### Вынік

Вызначаны ў [`inc/limitations/class-limit-post-types.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/limitations/class-limit-post-types.php#L136) у 136-й кропцы


## Вяртае
Новы загальны лік
