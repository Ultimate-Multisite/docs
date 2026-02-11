---
id: wu_stripe_existing_product_id
title: 过滤 - wu_stripe_existing_product_id
sidebar_label: wu_stripe_existing_product_id
_i18n_hash: 92eb984fe341b1ce2d56ea2eccff8100
---
# 过滤器: wu_stripe_existing_product_id

过滤要检查的产品的 ID。如果存在，则新的订阅将使用此产品。

## 参数

| 名称 | 类型 | 描述 |
|------|------|------|
| $product_id | `string` | 要检查的 Stripe 产品的 ID。 |
| $name | `string` | 产品名称。 |

### 源码

在第 2741 行的 [`inc/gateways/class-base-stripe-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/gateways/class-base-stripe-gateway.php#L2741) 中定义。
