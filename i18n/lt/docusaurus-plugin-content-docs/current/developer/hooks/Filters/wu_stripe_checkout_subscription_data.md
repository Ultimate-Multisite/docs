---
id: wu_stripe_checkout_subscription_data
title: Filtras - wu_stripe_checkout_subscription_data
sidebar_label: wu_stripe_checkout_subscription_data
_i18n_hash: 974298c0105287786ac2a8f47914cdfe
---
# Filtras: wu_stripe_checkout_subscription_data {#filter-wustripecheckoutsubscriptiondata}

Filtruoja Stripe prenumeratos duomenis. Gali perrašyti success_url arba cancel_url.

## Parametrai {#parameters}

| Pavadinimas | Tipas | Aprašymas |
|------|------|-------------|
| $subscription_data | `array` | Parametrų masyvas, perduodamas Stripe. |
| $gateway | `\Base_Gateway` | Dabartinis Stripe Gateway objektas. |

### Nuo {#since}

- 2.4.2
### Šaltinis {#source}

Apibrėžta [`inc/gateways/class-base-stripe-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/gateways/class-base-stripe-gateway.php#L298) 298 eilutėje
