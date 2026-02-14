---
id: wu_post_count_statuses
title: Filter - wu_post_count_statuses
sidebar_label: wu_post_count_statuses
_i18n_hash: 663f78e3da3805371e6ab96edef64285
---
# Filter: wu_post_count_statuses

Allow plugin developers to change which post status should be counted. By default, published and private posts are counted.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| `$post_status` | `array` | The list of post statuses |
| `$post_type` | `string` | The post type slug |

### Since

- 1.9.1

### Source

Defined in [`inc/limitations/class-limit-post-types.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/limitations/class-limit-post-types.php#L119) at line 119

## Returns

New array of post status.
