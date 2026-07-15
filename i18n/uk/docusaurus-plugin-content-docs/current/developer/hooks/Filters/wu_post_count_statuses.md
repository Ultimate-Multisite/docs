---
id: wu_post_count_statuses
title: Фільтр - wu_post_count_statuses
sidebar_label: wu_post_count_statuses
_i18n_hash: 663f78e3da3805371e6ab96edef64285
---
# Фільтр: wu_post_count_statuses

Дозволяє розробникам плагінів змінювати, які статуси публікацій мають бути враховані. За замовчуванням рахуються публічні та приватні записи.

## Параметри {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $post_status | `array` | Список статусів публікацій |
| $post_type | `string` | Слаг типу публікації |

### Since {#since}

- 1.9.1
### Source {#source}

Визначено в [`inc/limitations/class-limit-post-types.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/limitations/class-limit-post-types.php#L119) у рядку 119


## Returns {#returns}
Новий масив статусів публікацій
