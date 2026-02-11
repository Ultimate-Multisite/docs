---
id: wu_post_count_statuses
title: Фильтр - wu_post_count_statuses
sidebar_label: wu_post_count_statuses
_i18n_hash: 663f78e3da3805371e6ab96edef64285
---
# Filter: wu_post_count_statuses

Позволяет разработчикам плагинов изменить, какие статусы записей должны учитываться. По умолчанию учитываются опубликованные и приватные записи.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $post_status | `array` | Список статусов записей |
| $post_type | `string` | Слаг типа записи |

### Since

- 1.9.1

### Source

Определено в [`inc/limitations/class-limit-post-types.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/limitations/class-limit-post-types.php#L119) на строке 119

## Returns

Новый массив статусов записей
