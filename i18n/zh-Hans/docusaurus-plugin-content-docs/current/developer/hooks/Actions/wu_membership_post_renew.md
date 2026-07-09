---
id: wu_membership_post_renew
title: 动作 - wu_membership_post_renew
sidebar_label: wu_membership_post_renew
_i18n_hash: fbad65cce616f38b3b55d48b037365ad
---
# Action: wu_membership_post_renew {#action-wumembershippostrenew}

在会员续费后触发。

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $expiration | `string` | 要设置的新到期日期。 |
| $membership_id | `int` | 会员的 ID。 |
| $membership | `\Membership` | 会员对象。 |

### Since {#since}

- 2.0

### Source {#source}

定义于 [`inc/models/class-membership.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-membership.php#L2235) 在第 2235 行
