---
id: wu_post_count
title: Фільтр - wu_post_count
sidebar_label: wu_post_count
_i18n_hash: 435505abb02375a268c71a8cb10b7ac6
---
# Filter: wu_post_count

Дозволяє розробникам плагінів змінювати загальну кількість підрахунків.

## Параметри {#parameters}

| Ім'я | Тип | Опис |
|------|------|-------------|
| $count | `int` | Загальна кількість записів |
| $post_counts | `object` | Об'єкт WordPress, повернений функцією `wp_count_posts` |
| $post_type | `string` | Слаг типу запису |

### З версії {#since}

- 1.9.1
### Джерело {#source}

Визначено в [`inc/limitations/class-limit-post-types.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/limitations/class-limit-post-types.php#L136) у рядку 136


## Повертає {#returns}
Нову загальну кількість
