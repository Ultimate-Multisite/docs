---
id: wu_stripe_checkout_subscription_data
title: Filtre - wu_stripe_checkout_subscription_data
sidebar_label: wu_stripe_checkout_subscription_data
_i18n_hash: 974298c0105287786ac2a8f47914cdfe
---
# Filter: wu_stripe_checkout_subscription_data

Filtrer les données d'abonnement Stripe. Vous pouvez remplacer success_url ou cancel_url.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $subscription_data | `array` | Un tableau de paramètres à transmettre à Stripe. |
| $gateway | `\Base_Gateway` | L'objet actuel du passerelle Stripe. |

### Since

- 2.4.2
### Source

Défini dans [`inc/gateways/class-base-stripe-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/gateways/class-base-stripe-gateway.php#L298) à la ligne 298
