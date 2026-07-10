---
id: wu_stripe_existing_product_id
title: Filter - wu_stripe_existing_product_id
sidebar_label: wu_stripe_existing_product_id
_i18n_hash: 92eb984fe341b1ce2d56ea2eccff8100
---
# Filter: wu_stripe_existing_product_id {#filter-wustripeexistingproductid}

用於過濾要檢查的產品 ID。如果這個 ID 存在，新的訂閱就會使用這個產品。

## 參數 {#parameters}

| Name | Type | 描述 |
|------|------|-------------|
| $product_id | `string` | 用於檢查的 Stripe 產品 ID。 |
| $name | `string` | 產品名稱。 |

### 來源 {#source}

定義於 [`inc/gateways/class-base-stripe-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/gateways/class-base-stripe-gateway.php#L2741) 的第 2741 行。
