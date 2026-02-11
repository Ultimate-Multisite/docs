---
id: wu_membership_calculated_date_expiration
title: 过滤器 - wu_membership_calculated_date_expiration
sidebar_label: wu_membership_calculated_date_expiration
_i18n_hash: 92e1113e33a3b69e4fc3d07d6dcd8d69
---
# 过滤器: wu_membership_calculated_date_expiration

过滤已计算的到期日期。

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $expiration | `string` | 已计算的到期日期（MySQL 格式）。 |
| $membership_id | `int` | 会员的 ID。 |
| $membership | `\WP_Ultimo\Models\Membership` | 会员对象。 |

### 版本

- 2.0

### 源码

定义于 [`inc/models/class-membership.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-membership.php#L1309) 在第 1309 行
