---
id: wu_stripe_checkout_subscription_data
title: Filtar - wu_stripe_checkout_subscription_data
sidebar_label: wu_stripe_checkout_subscription_data
_i18n_hash: 974298c0105287786ac2a8f47914cdfe
---
# Filtar: wu_stripe_checkout_subscription_data

Filtrira podatke Stripe Subscription. Može nadjačati success_url ili cancel_url.

## Parametri {#parameters}

| Naziv | Vrsta | Opis |
|------|------|-------------|
| $subscription_data | `array` | Niz parametara za prosljeđivanje u Stripe. |
| $gateway | `\Base_Gateway` | Trenutačni objekt Stripe Gateway. |

### Od verzije {#since}

- 2.4.2
### Izvor {#source}

Definirano u [`inc/gateways/class-base-stripe-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/gateways/class-base-stripe-gateway.php#L298) u retku 298
