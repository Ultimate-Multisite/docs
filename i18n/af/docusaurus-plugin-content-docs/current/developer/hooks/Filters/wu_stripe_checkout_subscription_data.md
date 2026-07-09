---
id: wu_stripe_checkout_subscription_data
title: Filter - wu_stripe_checkout_subscription_data
sidebar_label: wu_stripe_checkout_subscription_data
_i18n_hash: 974298c0105287786ac2a8f47914cdfe
---
# Filter: wu_stripe_checkout_subscription_data {#filter-wustripecheckoutsubscriptiondata}

Filter Stripe-abonnementdata. Kan `success_url` of `cancel_url` oorskry.

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $subscription_data | `array` | ’n Array van parameters wat aan Stripe oorgedra moet word. |
| $gateway | `\Base_Gateway` | Die huidige Stripe Gateway-objek. |

### Sedert {#since}

- 2.4.2
### Bron {#source}

Benoem in [`inc/gateways/class-base-stripe-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/gateways/class-base-stripe-gateway.php#L298) op lyn 298
