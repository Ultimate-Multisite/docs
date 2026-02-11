---
id: wu_bypass_unset_current_user
title: 过滤器 - wu_bypass_unset_current_user
sidebar_label: wu_bypass_unset_current_user
_i18n_hash: fc4c248df410793da1754944250d8b11
---
# Filter: wu_bypass_unset_current_user

允许开发者绕过清除当前用户的代码。

返回除 null 之外的任何值将绕过已登录用户的清除。这在某些场景中可能有用，例如处理被用作管理面板的子站点。

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $null_or_bypass | `mixed` | Null 时继续，其他任何值则绕过。 |
| $current_user | `false\|\WP_User` | 当前用户对象。 |

### Since

- 2.0.11

### Source

定义于 [`inc/compat/class-multiple-accounts-compat.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/compat/class-multiple-accounts-compat.php#L221) 在第 221 行

## Returns
