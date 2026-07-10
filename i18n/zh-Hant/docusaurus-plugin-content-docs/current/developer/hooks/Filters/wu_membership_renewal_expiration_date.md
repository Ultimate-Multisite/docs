---
id: wu_membership_renewal_expiration_date
title: 篩選器 - wu_membership_renewal_expiration_date
sidebar_label: wu_membership_renewal_expiration_date
_i18n_hash: 607ec1f0ab833a4fd312f7c6b9e0182f
---
# 過濾器：wu_membership_renewal_expiration_date {#filter-wumembershiprenewalexpirationdate}

用來過濾計算出的到期日期，確保其設定在續訂日期之後。

## 參數 {#parameters}

| 名稱 | 類型 | 描述 |
|------|------|-------------|
| $expiration | `string` | 計算出的到期日期。 |
| $plan | `\Product` | 會籍等級物件。 |
| $membership_id | `int` | 會籍的 ID。 |
| $membership | `\Membership` | 會籍物件。 |

### 可用版本 {#since}

- 2.0.0
### 來源 {#source}

定義於 [`inc/models/class-membership.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-membership.php#L2192) 的第 2192 行
