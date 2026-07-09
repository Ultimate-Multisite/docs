---
id: wu_membership_post_cancel
title: アクション - wu_membership_post_cancel
sidebar_label: wu_membership_post_cancel
_i18n_hash: f8d5d59dbde2d29c6006ef82edd7384a
---
# アクション: wu_membership_post_cancel {#action-wumembershippostcancel}

メンバーシップがキャンセルされた後にトリガーされます。

これによりキャンセルメールが送信されます。

## パラメータ {#parameters}

| 名前 | 型 | 説明 |
|------|------|-------------|
| $membership_id | `int` | メンバーシップのID。 |
| $membership | `\WP_Ultimo\Models\Membership` | メンバーシップオブジェクト。 |

### 以降 {#since}

- 2.0
### ソース {#source}

Defined in [`inc/models/class-membership.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-membership.php#L2290) の 2290 行目に定義されています
