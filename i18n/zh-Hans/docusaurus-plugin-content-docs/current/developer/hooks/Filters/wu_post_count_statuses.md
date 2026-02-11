---
id: wu_post_count_statuses
title: 过滤 - wu_post_count_statuses
sidebar_label: wu_post_count_statuses
_i18n_hash: 663f78e3da3805371e6ab96edef64285
---
# 过滤器: wu_post_count_statuses

允许插件开发者更改应计数的文章状态。默认情况下，已发布和私有文章会被计数。

## 参数

| 名称 | 类型 | 描述 |
|------|------|------|
| $post_status | `array` | 文章状态列表 |
| $post_type | `string` | 文章类型 slug |

### 自

- 1.9.1

### 来源

定义于 [`inc/limitations/class-limit-post-types.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/limitations/class-limit-post-types.php#L119) 的第 119 行

## 返回值

新的文章状态数组
