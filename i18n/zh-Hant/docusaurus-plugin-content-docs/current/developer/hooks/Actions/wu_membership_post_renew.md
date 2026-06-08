---
id: wu_membership_post_renew
title: 動作 - wu_membership_post_renew
sidebar_label: wu_membership_post_renew
_i18n_hash: fbad65cce616f38b3b55d48b037365ad
---
# 動作：wu_membership_post_renew

此動作會在會員續訂後觸發。

## 參數

| 名稱 | 類型 | 描述 |
|------|------|-------------|
| $expiration | `string` | 需要設定的新到期日期。 |
| $membership_id | `int` | 會員的 ID。 |
| $membership | `\Membership` | 會員物件。 |

### 可用版本

- 2.0
### 來源

定義於 [`inc/models/class-membership.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-membership.php#L2235) 的第 2235 行
