---
id: wu_post_count
title: 过滤器 - wu_post_count
sidebar_label: wu_post_count
_i18n_hash: 435505abb02375a268c71a8cb10b7ac6
---
# 过滤器: wu_post_count {#filter-wupostcount}

允许插件开发者更改总计数

## 参数 {#parameters}

| 名称 | 类型 | 描述 |
|------|------|------|
| $count | `int` | 总文章数 |
| $post_counts | `object` | WordPress 对象，wp_count_posts 函数返回 |
| $post_type | `string` | 文章类型 slug |

### 自 {#since}

- 1.9.1

### 来源 {#source}

在 [`inc/limitations/class-limit-post-types.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/limitations/class-limit-post-types.php#L136) 第 136 行定义

## 返回值 {#returns}

新的总计数
