---
id: wu_stripe_checkout_subscription_data
title: Kifilta - wu_stripe_checkout_subscription_data
sidebar_label: wu_stripe_checkout_subscription_data
_i18n_hash: 974298c0105287786ac2a8f47914cdfe
---
# Filter: wu_stripe_checkout_subscription_data

Hii ni filter ya data ya usajili (subscription) ya Stripe. Unaweza kubadilisha (override) URL za mafanikio (`success_url`) au kufuta (`cancel_url`).

## Viparametrika (Parameters) {#parameters}

| Jina (Name) | Aina (Type) | Maelezo (Description) |
|------|------|-------------|
| $subscription_data | `array` | Ni array ya viparametrika ambavyo unapaswa kuvipeleka kwa Stripe. |
| $gateway | `\Base_Gateway` | Object ya Stripe Gateway ya sasa. |

### Tangu (Since) {#since}

- 2.4.2
### Chanzo (Source) {#source}

Imefafanuliwa katika [`inc/gateways/class-base-stripe-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/gateways/class-base-stripe-gateway.php#L298) kwenye mstari wa 298
