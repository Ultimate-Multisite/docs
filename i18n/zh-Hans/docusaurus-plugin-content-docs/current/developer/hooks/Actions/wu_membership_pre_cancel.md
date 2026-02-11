---
id: wu_membership_pre_cancel
title: 动作 - wu_membership_pre_cancel
sidebar_label: wu_membership_pre_cancel
_i18n_hash: 0a9e6270824bf3aeac93b4ad8909f4d3
---
# 动作: wu_membership_pre_cancel

在会员被取消之前触发。

## 参数

| 名称 | 类型 | 描述 |
|------|------|------|
| `$membership_id` | `int` | 会员的 ID。 |
| `$membership` | `\WP_Ultimo\Models\Membership` | 会员对象。 |

### 自

- 2.0

### 来源

在 [`inc/models/class-membership.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-membership.php#L2267) 的第 2267 行定义
