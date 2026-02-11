---
id: wu_current_type_get_manage_url
title: 'Filter - wu_current_{$type}_get_manage_url'
sidebar_label: 'wu_current_{$type}_get_manage_url'
_i18n_hash: b3c7180a6e4666d7998ce8a20ba1cfea
---
# 过滤器: wu_current_\{$type\}_get_manage_url

允许开发者修改管理站点 URL 参数。

## Parameters

| 名称 | 类型 | 描述 |
|------|------|------|
| $manage_site_url | `string` | 管理站点 URL。 |
| $id | `int` | 站点 ID。 |
| $site_hash | `string` | 站点哈希。 |

### Since

- 2.0.9

### Source

在 [`inc/class-current.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-current.php#L214) 第 214 行定义

## Returns

修改后的管理 URL。
