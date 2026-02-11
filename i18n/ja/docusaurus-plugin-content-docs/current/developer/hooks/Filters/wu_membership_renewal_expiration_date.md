---
id: wu_membership_renewal_expiration_date
title: フィルタ - wu_membership_renewal_expiration_date
sidebar_label: wu_membership_renewal_expiration_date
_i18n_hash: 607ec1f0ab833a4fd312f7c6b9e0182f
---
# フィルタ: wu_membership_renewal_expiration_date

計算された有効期限を更新後に設定するようにフィルタします。

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $expiration | `string` | 計算された有効期限。 |
| $plan | `\Product` | 会員レベルオブジェクト。 |
| $membership_id | `int` | 会員のID。 |
| $membership | `\Membership` | 会員オブジェクト。 |

### Since

- 2.0.0
### Source

Defined in [`inc/models/class-membership.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-membership.php#L2192) at line 2192
