---
id: wu_membership_post_renew
title: アクション - wu_membership_post_renew
sidebar_label: wu_membership_post_renew
_i18n_hash: fbad65cce616f38b3b55d48b037365ad
---
# アクション: wu_membership_post_renew

会員の更新後にトリガーされます。

## パラメータ

| 名前 | タイプ | 説明 |
|------|------|-------------|
| $expiration | `string` | 設定される新しい有効期限の日付です。 |
| $membership_id | `int` | 会員のIDです。 |
| $membership | `\Membership` | Membership オブジェクトです。 |

### 以降

- 2.0

### ソース

以下で定義されています [`inc/models/class-membership.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-membership.php#L2235) 行 2235
