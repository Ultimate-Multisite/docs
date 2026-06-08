---
id: wu_post_count_statuses
title: Filter - wu_post_count_statuses
sidebar_label: wu_post_count_statuses
_i18n_hash: 663f78e3da3805371e6ab96edef64285
---
# Filter: wu_post_count_statuses

Plugin geliştiricilərinə hansı məqalə statusunun sayılacağını dəyişməyə imkan verir. Varsayılan olaraq, yayınlanmış və şəxsi məqalələr sayılır.

## Parametrlər

| Name | Type | Description |
|------|------|-------------|
| $post_status | `array` | Məqalə statuslarının siyahısı |
| $post_type | `string` | Məqalə növü (slug) |

### Nə vaxtdan

- 1.9.1
### Mənbə

[`inc/limitations/class-limit-post-types.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/limitations/class-limit-post-types.php#L119) faylında 119-cu sətirində təyin edilmişdir.

## Nə qaytarır
Məqalə statuslarının yeni massivi
