---
id: wu_stripe_existing_product_id
title: フィルタ - wu_stripe_existing_product_id
sidebar_label: wu_stripe_existing_product_id
_i18n_hash: 92eb984fe341b1ce2d56ea2eccff8100
---
# Filter: wu_stripe_existing_product_id

チェック対象となる商品のIDをフィルタリングします。存在する場合、新しいサブスクリプションはこの商品を使用します。

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $product_id | `string` | チェック対象となるStripe商品のID。 |
| $name | `string` | 商品名。 |

### Source

以下で定義されています：[`inc/gateways/class-base-stripe-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/gateways/class-base-stripe-gateway.php#L2741) 行2741で
