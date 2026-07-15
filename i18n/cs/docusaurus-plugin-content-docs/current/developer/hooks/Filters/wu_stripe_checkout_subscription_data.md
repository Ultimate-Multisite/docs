---
id: wu_stripe_checkout_subscription_data
title: Filtrační funkce - wu_stripe_checkout_subscription_data
sidebar_label: wu_stripe_checkout_subscription_data
_i18n_hash: 974298c0105287786ac2a8f47914cdfe
---
# Filtrační hook: wu_stripe_checkout_subscription_data

Filtruje data předplatného Stripe. Můžete přepsat (override) URL pro úspěšné dokončení nebo pro zrušení.

## Parametry {#parameters}

| Název | Typ | Popis |
|------|------|-------------|
| $subscription_data | `array` | Pole parametrů, které se předají do Stripe. |
| $gateway | `\Base_Gateway` | Aktuální objekt brány Stripe. |

### Od {#since}

- 2.4.2
### Zdroj {#source}

Definováno v [`inc/gateways/class-base-stripe-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/gateways/class-base-stripe-gateway.php#L298) na řádku 298
