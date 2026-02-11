---
id: wu_stripe_checkout_subscription_data
title: Filter - wu_stripe_checkout_subscription_data
sidebar_label: wu_stripe_checkout_subscription_data
_i18n_hash: 974298c0105287786ac2a8f47914cdfe
---
# Filter: wu_stripe_checkout_subscription_data

Stripe-Abonnementdaten filtern. Kann success_url oder cancel_url überschreiben.

## Parameters

| Name | Typ | Beschreibung |
|------|------|-------------|
| $subscription_data | `array` | Ein Array von Parametern, die an Stripe übergeben werden sollen. |
| $gateway | `\Base_Gateway` | Das aktuelle Stripe Gateway-Objekt. |

### Seit

- 2.4.2

### Quelle

Definiert in [`inc/gateways/class-base-stripe-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/gateways/class-base-stripe-gateway.php#L298) in Zeile 298
