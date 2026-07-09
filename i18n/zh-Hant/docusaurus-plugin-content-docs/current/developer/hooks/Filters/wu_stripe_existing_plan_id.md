---
id: wu_stripe_existing_plan_id
title: Filter - wu_stripe_existing_plan_id
sidebar_label: wu_stripe_existing_plan_id
_i18n_hash: 153242c21b0a894c554c77872a96d1cd
---
# 過濾器：wu_stripe_existing_plan_id {#filter-wustripeexistingplanid}

用於過濾要檢查的方案 ID。如果此 ID 存在，新的訂閱將會使用此方案。

## 參數 {#parameters}

| 名稱 | 類型 | 描述 |
|------|------|-------------|
| $plan_id | `string` | 要檢查的 Stripe 方案 ID。 |
| $membership_level | `object` | 會籍等級物件。 |

### 來源 {#source}

定義於 [`inc/gateways/class-base-stripe-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/gateways/class-base-stripe-gateway.php#L2653) 的第 2653 行
