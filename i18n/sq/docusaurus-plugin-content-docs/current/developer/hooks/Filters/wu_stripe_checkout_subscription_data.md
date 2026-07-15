---
id: wu_stripe_checkout_subscription_data
title: Filtër - wu_stripe_checkout_subscription_data
sidebar_label: wu_stripe_checkout_subscription_data
_i18n_hash: 974298c0105287786ac2a8f47914cdfe
---
# Filter: wu_stripe_checkout_subscription_data

Filtron të dhënat e Stripe Subscription. Mund të mbishkruajë success_url ose cancel_url.

## Parametrat {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $subscription_data | `array` | Një varg parametrash për t'ia kaluar Stripe. |
| $gateway | `\Base_Gateway` | Objekti aktual Stripe Gateway. |

### Që nga {#since}

- 2.4.2
### Burimi {#source}

Përcaktuar në [`inc/gateways/class-base-stripe-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/gateways/class-base-stripe-gateway.php#L298) në rreshtin 298
