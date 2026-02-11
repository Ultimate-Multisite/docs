---
id: wu_stripe_checkout_subscription_data
title: Filter - wu_stripe_checkout_subscription_data
sidebar_label: wu_stripe_checkout_subscription_data
_i18n_hash: 974298c0105287786ac2a8f47914cdfe
---
# Filter: wu_stripe_checkout_subscription_data

Stripe 구독 데이터를 필터링합니다. success_url 또는 cancel_url을 재정의할 수 있습니다.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $subscription_data | `array` | Stripe에 전달할 매개변수 배열입니다. |
| $gateway | `\Base_Gateway` | 현재 Stripe Gateway 객체입니다. |

### Since

- 2.4.2
### Source

Defined in [`inc/gateways/class-base-stripe-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/gateways/class-base-stripe-gateway.php#L298) 298번째 줄에 정의되었습니다.
