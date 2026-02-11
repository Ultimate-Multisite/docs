---
id: wu_membership_pre_renew
title: アクション - wu_membership_pre_renew
sidebar_label: wu_membership_pre_renew
_i18n_hash: 404f491e8f2f80099b721e1f475b4668
---
# アクション: wu_membership_pre_renew

会員更新前にトリガーされます。

## パラメータ

| 名前 | 型 | 説明 |
|------|------|-------------|
| $expiration | `string` | 設定される新しい有効期限日です。 |
| $membership_id | `int` | 会員のIDです。 |
| $membership | `\Membership` | 会員オブジェクトです。 |

### 導入

- 2.0

### ソース

定義場所: [`inc/models/class-membership.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-membership.php#L2204) の 2204 行目
