---
id: wu_stripe_checkout_subscription_data
title: Filtre - wu_stripe_checkout_subscription_data
sidebar_label: wu_stripe_checkout_subscription_data
_i18n_hash: 974298c0105287786ac2a8f47914cdfe
---
# Filter: wu_stripe_checkout_subscription_data

Stripe Abonelik verisini filtreler. `success_url` veya `cancel_url` değerlerini geçersiz kılabilir.

## Parametreler

| Name | Type | Description |
|------|------|-------------|
| $subscription_data | `array` | Stripe'a iletilecek parametreler dizisi. |
| $gateway | `\Base_Gateway` | Mevcut Stripe Ağ Geçidi (Gateway) nesnesi. |

### Since

- 2.4.2
### Source

Defined in [`inc/gateways/class-base-stripe-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/gateways/class-base-stripe-gateway.php#L298) at line 298
