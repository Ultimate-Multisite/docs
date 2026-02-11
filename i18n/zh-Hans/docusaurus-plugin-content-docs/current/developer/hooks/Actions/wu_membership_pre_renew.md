---
id: wu_membership_pre_renew
title: 动作 - wu_membership_pre_renew
sidebar_label: wu_membership_pre_renew
_i18n_hash: 404f491e8f2f80099b721e1f475b4668
---
# Action: wu_membership_pre_renew

在会员续费之前触发。

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $expiration | `string` | 要设置的新到期日期。 |
| $membership_id | `int` | 会员的 ID。 |
| $membership | `\Membership` | 会员对象。 |

### Since

- 2.0

### Source

Defined in [`inc/models/class-membership.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-membership.php#L2204) at line 2204
