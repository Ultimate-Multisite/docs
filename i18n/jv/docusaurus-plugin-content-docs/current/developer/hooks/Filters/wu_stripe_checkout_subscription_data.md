---
id: wu_stripe_checkout_subscription_data
title: Saringan - wu_stripe_checkout_subscription_data
sidebar_label: wu_stripe_checkout_subscription_data
_i18n_hash: 974298c0105287786ac2a8f47914cdfe
---
# Filter: wu_stripe_checkout_subscription_data {#filter-wustripecheckoutsubscriptiondata}

Nyaring data Stripe Subscription. Bisa ngganti success_url utawa cancel_url.

## Paramèter {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $subscription_data | `array` | Array paramèter kanggo diterusaké menyang Stripe. |
| $gateway | `\Base_Gateway` | Objek Stripe Gateway sing saiki. |

### Wiwit {#since}

- 2.4.2
### Sumber {#source}

Ditetepaké ing [`inc/gateways/class-base-stripe-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/gateways/class-base-stripe-gateway.php#L298) ing larik 298
