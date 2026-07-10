---
id: wu_stripe_checkout_subscription_data
title: Salain - wu_stripe_checkout_subscription_data
sidebar_label: wu_stripe_checkout_subscription_data
_i18n_hash: 974298c0105287786ac2a8f47914cdfe
---
# Filter: wu_stripe_checkout_subscription_data {#filter-wustripecheckoutsubscriptiondata}

I-filter ang data ng Stripe Subscription. Maaaring i-override ang success_url o cancel_url.

## Mga Parameter {#parameters}

| Pangalan | Uri | Paglalarawan |
|------|------|-------------|
| $subscription_data | `array` | Isang array ng mga parameter na ipapasa sa Stripe. |
| $gateway | `\Base_Gateway` | Ang kasalukuyang object ng Stripe Gateway. |

### Mula noong {#since}

- 2.4.2
### Pinagmulan {#source}

Tinukoy sa [`inc/gateways/class-base-stripe-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/gateways/class-base-stripe-gateway.php#L298) sa linya 298
