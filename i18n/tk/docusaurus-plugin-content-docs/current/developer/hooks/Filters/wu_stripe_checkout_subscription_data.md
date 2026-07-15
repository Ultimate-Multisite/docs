---
id: wu_stripe_checkout_subscription_data
title: Filtr - wu_stripe_checkout_subscription_data
sidebar_label: wu_stripe_checkout_subscription_data
_i18n_hash: 974298c0105287786ac2a8f47914cdfe
---
# Filter: wu_stripe_checkout_subscription_data

Stripe Subscription maglumatlaryny süzýär. success_url ýa-da cancel_url bahalaryny täzeden kesgitläp biler.

## Parametrler {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $subscription_data | `array` | Stripe-a geçirmek üçin parametrleriň massiwi. |
| $gateway | `\Base_Gateway` | Häzirki Stripe Gateway obýekti. |

### Şondan bäri {#since}

- 2.4.2
### Çeşme {#source}

[`inc/gateways/class-base-stripe-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/gateways/class-base-stripe-gateway.php#L298) içinde 298-nji setirde kesgitlenen
