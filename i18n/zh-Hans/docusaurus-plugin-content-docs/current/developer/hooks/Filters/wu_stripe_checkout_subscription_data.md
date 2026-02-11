---
id: wu_stripe_checkout_subscription_data
title: 过滤器 - wu_stripe_checkout_subscription_data
sidebar_label: wu_stripe_checkout_subscription_data
_i18n_hash: 974298c0105287786ac2a8f47914cdfe
---
# Filter: wu_stripe_checkout_subscription_data

过滤 Stripe 订阅数据。可以覆盖 success_url 或 cancel_url。

## 参数

| 名称 | 类型 | 描述 |
|------|------|------|
| $subscription_data | `array` | 传递给 Stripe 的参数数组。 |
| $gateway | `\Base_Gateway` | 当前的 Stripe Gateway 对象。 |

### 自 2.4.2 起

### 来源

在 [`inc/gateways/class-base-stripe-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/gateways/class-base-stripe-gateway.php#L298) 第 298 行定义
