---
id: wu_membership_post_cancel
title: 动作 - wu_membership_post_cancel
sidebar_label: wu_membership_post_cancel
_i18n_hash: f8d5d59dbde2d29c6006ef82edd7384a
---
# 动作: wu_membership_post_cancel

在会员取消后触发。

这会触发取消邮件。

## 参数

| 名称 | 类型 | 描述 |
|------|------|------|
| $membership_id | `int` | 会员的 ID。 |
| $membership | `\WP_Ultimo\Models\Membership` | Membership 对象。 |

### 自

- 2.0

### 来源

在 [`inc/models/class-membership.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-membership.php#L2290) 的第 2290 行定义
