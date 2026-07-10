---
id: wu_stripe_checkout_subscription_data
title: Salain - wu_stripe_checkout_subscription_data
sidebar_label: wu_stripe_checkout_subscription_data
_i18n_hash: 974298c0105287786ac2a8f47914cdfe
---
# Filter: wu_stripe_checkout_subscription_data {#filter-wustripecheckoutsubscriptiondata}

I-filter ang datos sa Stripe Subscription. Makalapas sa success_url o cancel_url.

## Mga Parameter {#parameters}

| Ngalan | Type | Deskripsyon |
|------|------|-------------|
| $subscription_data | `array` | Usa ka array sa mga parameter nga ipasa ngadto sa Stripe. |
| $gateway | `\Base_Gateway` | Ang kasamtangang Stripe Gateway object. |

### Sukad {#since}

- 2.4.2
### Tinubdan {#source}

Gihubit sa [`inc/gateways/class-base-stripe-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/gateways/class-base-stripe-gateway.php#L298) sa linya 298
