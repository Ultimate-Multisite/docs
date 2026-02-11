---
id: wu_membership_pre_cancel
title: アクション - wu_membership_pre_cancel
sidebar_label: wu_membership_pre_cancel
_i18n_hash: 0a9e6270824bf3aeac93b4ad8909f4d3
---
# アクション: wu_membership_pre_cancel

メンバーシップがキャンセルされる前にトリガーされます。

## パラメータ

| 名前 | 型 | 説明 |
|------|------|-------------|
| $membership_id | `int` | メンバーシップのIDです。 |
| $membership | `\WP_Ultimo\Models\Membership` | メンバーシップオブジェクトです。 |

### 導入

- 2.0

### ソース

定義は [`inc/models/class-membership.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-membership.php#L2267) の 2267 行目にあります。
