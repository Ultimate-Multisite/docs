---
id: wu_stripe_checkout_subscription_data
title: Sía - wu_stripe_checkout_subscription_data
sidebar_label: wu_stripe_checkout_subscription_data
_i18n_hash: 974298c0105287786ac2a8f47914cdfe
---
# Filter: wu_stripe_checkout_subscription_data {#filter-wustripecheckoutsubscriptiondata}

Síar Stripe Subscription gögn. Getur hnekkt success_url eða cancel_url.

## Færibreytur {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $subscription_data | `array` | Fylki af færibreytum til að senda til Stripe. |
| $gateway | `\Base_Gateway` | Núverandi Stripe Gateway hlutur. |

### Frá útgáfu {#since}

- 2.4.2
### Uppruni {#source}

Skilgreint í [`inc/gateways/class-base-stripe-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/gateways/class-base-stripe-gateway.php#L298) í línu 298
