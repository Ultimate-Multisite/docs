---
id: wu_stripe_checkout_subscription_data
title: フィルタ - wu_stripe_checkout_subscription_data
sidebar_label: wu_stripe_checkout_subscription_data
_i18n_hash: 974298c0105287786ac2a8f47914cdfe
---
# Filter: wu_stripe_checkout_subscription_data

Stripe サブスクリプションデータをフィルタリングします。success_url または cancel_url を上書きできます。

## パラメータ

| 名前 | タイプ | 説明 |
|------|------|------|
| $subscription_data | `array` | Stripe に渡すパラメータの配列。 |
| $gateway | `\Base_Gateway` | 現在の Stripe Gateway オブジェクト。 |

### 以降

- 2.4.2

### ソース

定義は [`inc/gateways/class-base-stripe-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/gateways/class-base-stripe-gateway.php#L298) の 298 行目にあります
