---
id: wu_membership_renewal_expiration_date
title: 过滤器 - wu_membership_renewal_expiration_date
sidebar_label: wu_membership_renewal_expiration_date
_i18n_hash: 607ec1f0ab833a4fd312f7c6b9e0182f
---
# 过滤器: wu_membership_renewal_expiration_date

过滤已计算的到期日期，使其在续订后设置。

## 参数

| 名称 | 类型 | 描述 |
|------|------|------|
| $expiration | `string` | 已计算的到期日期 |
| $plan | `\Product` | 会员级别对象 |
| $membership_id | `int` | 会员的 ID |
| $membership | `\Membership` | 会员对象 |

### 自

- 2.0.0

### 来源

定义在 [`inc/models/class-membership.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-membership.php#L2192) 在第 2192 行
