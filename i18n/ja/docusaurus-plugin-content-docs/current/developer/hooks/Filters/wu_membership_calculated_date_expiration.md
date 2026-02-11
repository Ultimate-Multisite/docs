---
id: wu_membership_calculated_date_expiration
title: フィルタ - wu_membership_calculated_date_expiration
sidebar_label: wu_membership_calculated_date_expiration
_i18n_hash: 92e1113e33a3b69e4fc3d07d6dcd8d69
---
# Filter: wu_membership_calculated_date_expiration

計算された有効期限をフィルタします。

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $expiration | `string` | MySQL形式の計算済み有効期限。 |
| $membership_id | `int` | メンバーシップのID。 |
| $membership | `\WP_Ultimo\Models\Membership` | メンバーシップオブジェクト。 |

### Since

- 2.0
### Source

定義は [`inc/models/class-membership.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-membership.php#L1309) の1309行目にあります。
