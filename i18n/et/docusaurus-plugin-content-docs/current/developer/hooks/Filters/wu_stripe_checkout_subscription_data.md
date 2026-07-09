---
id: wu_stripe_checkout_subscription_data
title: Filter - wu_stripe_checkout_subscription_data
sidebar_label: wu_stripe_checkout_subscription_data
_i18n_hash: 974298c0105287786ac2a8f47914cdfe
---
# Filter: wu_stripe_checkout_subscription_data {#filter-wustripecheckoutsubscriptiondata}

Filtreerib Stripe Subscription andmeid. Võib alistada success_url või cancel_url.

## Parameetrid {#parameters}

| Nimi | Tüüp | Kirjeldus |
|------|------|-------------|
| $subscription_data | `array` | Parameetrite massiiv, mis edastatakse Stripe’ile. |
| $gateway | `\Base_Gateway` | Praegune Stripe Gateway objekt. |

### Alates versioonist {#since}

- 2.4.2
### Allikas {#source}

Määratletud failis [`inc/gateways/class-base-stripe-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/gateways/class-base-stripe-gateway.php#L298) real 298
