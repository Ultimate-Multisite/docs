---
id: wu_stripe_checkout_subscription_data
title: Filtre - wu_stripe_checkout_subscription_data
sidebar_label: wu_stripe_checkout_subscription_data
_i18n_hash: 974298c0105287786ac2a8f47914cdfe
---
# Filter: wu_stripe_checkout_subscription_data

Filtra les dades de subscripció de Stripe. Pot sobreescriure `success_url` o `cancel_url`.

## Paràmetres {#parameters}

| Nom | Tipus | Descripció |
|------|------|-------------|
| $subscription_data | `array` | Un array de paràmetres per passar a Stripe. |
| $gateway | `\Base_Gateway` | L'objecte actual del *Gateway* de Stripe. |

### Since {#since}

- 2.4.2
### Source {#source}

Defined in [`inc/gateways/class-base-stripe-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/gateways/class-base-stripe-gateway.php#L298) at line 298
