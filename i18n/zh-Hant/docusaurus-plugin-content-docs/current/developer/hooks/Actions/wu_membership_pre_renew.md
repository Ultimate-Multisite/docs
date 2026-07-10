---
id: wu_membership_pre_renew
title: Action - wu_membership_pre_renew
sidebar_label: wu_membership_pre_renew
_i18n_hash: 404f491e8f2f80099b721e1f475b4668
---
# Action: wu_membership_pre_renew {#action-wumembershipprerenew}

在會員續訂前觸發。

## 參數 {#parameters}

| 名稱 | 類型 | 描述 |
|------|------|-------------|
| $expiration | `string` | 要設定的新到期日期。 |
| $membership_id | `int` | 會員的 ID。 |
| $membership | `\Membership` | 會員物件。 |

### 自 {#since}

- 2.0
### 來源 {#source}

定義於 [`inc/models/class-membership.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-membership.php#L2204) 的第 2204 行
