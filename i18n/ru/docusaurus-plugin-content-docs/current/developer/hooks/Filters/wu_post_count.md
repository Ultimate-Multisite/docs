---
id: wu_post_count
title: Фильтр - wu_post_count
sidebar_label: wu_post_count
_i18n_hash: 435505abb02375a268c71a8cb10b7ac6
---
# Фильтр: wu_post_count

Позволяет разработчикам плагинов изменить общее количество

## Параметры

| Имя | Тип | Описание |
|------|------|-------------|
| $count | `int` | Общее количество записей |
| $post_counts | `object` | Объект WordPress, возвращаемый функцией wp_count_posts |
| $post_type | `string` | Слаг типа записи |

### С версии

- 1.9.1

### Источник

Определено в [`inc/limitations/class-limit-post-types.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/limitations/class-limit-post-types.php#L136) на строке 136

## Возвращает
Новое общее количество
