---
id: wu_admin_notices
title: 过滤器 - wu_admin_notices
sidebar_label: wu_admin_notices
_i18n_hash: b98d294d75277dfcfd941ca0e573e10c
---
# Filter: wu_admin_notices

允许开发者过滤 Ultimate Multisite 添加的管理员通知。

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $notices | `array` | 该特定面板的通知列表。 |
| $all_notices | `array` | 按面板分隔的已添加通知列表。 |
| $panel | `string` | 用于检索通知的面板。 |
| $filter | `string` | 如果已过滤可关闭的通知。 |
| $dismissed_messages | `array` | 已关闭通知键的列表。 |

### Since

- 2.0.0

### Source

在 inc/class-admin-notices.php 第 121 行定义

## Returns
