---
id: wu_stripe_checkout_subscription_data
title: Φίλτρο - wu_stripe_checkout_subscription_data
sidebar_label: wu_stripe_checkout_subscription_data
_i18n_hash: 974298c0105287786ac2a8f47914cdfe
---
# Filter: wu_stripe_checkout_subscription_data

Φιλτράρει τα δεδομένα συνδρομής Stripe. Επιτρέπει την αντικατάσταση των success_url ή των cancel_url.

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $subscription_data | `array` | Ένα array με παραμέτρους που περνούν στο Stripe. |
| $gateway | `\Base_Gateway` | Το τρέχον αντικείμενο (object) του Stripe Gateway. |

### Since {#since}

- 2.4.2
### Source {#source}

Ορίζεται στο [`inc/gateways/class-base-stripe-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/gateways/class-base-stripe-gateway.php#L298) στην γραμμή 298
