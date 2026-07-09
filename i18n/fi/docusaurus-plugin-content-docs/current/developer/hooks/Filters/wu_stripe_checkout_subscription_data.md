---
id: wu_stripe_checkout_subscription_data
title: Suodatin - wu_stripe_checkout_subscription_data
sidebar_label: wu_stripe_checkout_subscription_data
_i18n_hash: 974298c0105287786ac2a8f47914cdfe
---
# Filter: wu_stripe_checkout_subscription_data

Suodata Stripe Subscription -data. Voi ohittaa success_url- tai cancel_url-arvon.

## Parametrit

| Nimi | Tyyppi | Kuvaus |
|------|------|-------------|
| $subscription_data | `array` | Parametrien taulukko Stripeen välitettäväksi. |
| $gateway | `\Base_Gateway` | Nykyinen Stripe Gateway -objekti. |

### Alkaen versiosta

- 2.4.2
### Lähde

Määritelty tiedostossa [`inc/gateways/class-base-stripe-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/gateways/class-base-stripe-gateway.php#L298) rivillä 298
