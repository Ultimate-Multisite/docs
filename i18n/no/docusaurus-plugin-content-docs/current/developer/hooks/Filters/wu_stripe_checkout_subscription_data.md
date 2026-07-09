---
id: wu_stripe_checkout_subscription_data
title: Filter - wu_stripe_checkout_subscription_data
sidebar_label: wu_stripe_checkout_subscription_data
_i18n_hash: 974298c0105287786ac2a8f47914cdfe
---
# Filter: wu_stripe_checkout_subscription_data {#filter-wustripecheckoutsubscriptiondata}

Filtrerer abonnementsdata fra Stripe. Kan overstyre `success_url` eller `cancel_url`.

## Parametere {#parameters}

| Navn | Type | Beskrivelse |
|------|------|-------------|
| $subscription_data | `array` | Et array av parametere som skal sendes til Stripe. |
| $gateway | `\Base_Gateway` | Det nåværende Stripe Gateway-objektet. |

### Siden {#since}

- 2.4.2
### Kilde {#source}

Definert i [`inc/gateways/class-base-stripe-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/gateways/class-base-stripe-gateway.php#L298) på linje 298
