---
id: wu_membership_calculated_date_expiration
title: 過濾器 - wu_membership_calculated_date_expiration
sidebar_label: wu_membership_calculated_date_expiration
_i18n_hash: 92e1113e33a3b69e4fc3d07d6dcd8d69
---
# 過濾器：wu_membership_calculated_date_expiration

用於過濾計算後的到期日期。

## 參數

| 名稱 | 類型 | 說明 |
|------|------|-------------|
| $expiration | `string` | 以 MySQL 格式計算出的到期日期。 |
| $membership_id | `int` | 會員的 ID。 |
| $membership | `\WP_Ultimo\Models\Membership` | 會員物件。 |

### 可用版本

- 2.0
### 來源

定義於 [`inc/models/class-membership.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-membership.php#L1309) 的第 1309 行
