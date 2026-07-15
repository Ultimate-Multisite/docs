---
id: wu_stripe_checkout_subscription_data
title: 過濾器 - wu_stripe_checkout_subscription_data
sidebar_label: wu_stripe_checkout_subscription_data
_i18n_hash: 974298c0105287786ac2a8f47914cdfe
---
# Filter: wu_stripe_checkout_subscription_data

用來過濾 Stripe 訂閱資料。此過濾器可以覆寫 `success_url` 或 `cancel_url`。

## 參數 {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $subscription_data | `array` | 傳遞給 Stripe 的參數陣列。 |
| $gateway | `\Base_Gateway` | 當前的 Stripe 閘道（Gateway）物件。 |

### Since {#since}

- 2.4.2
### Source {#source}

定義於 [`inc/gateways/class-base-stripe-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/gateways/class-base-stripe-gateway.php#L298) 的第 298 行
