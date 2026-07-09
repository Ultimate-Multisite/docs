---
id: wu_stripe_checkout_subscription_data
title: Szűrő - wu_stripe_checkout_subscription_data
sidebar_label: wu_stripe_checkout_subscription_data
_i18n_hash: 974298c0105287786ac2a8f47914cdfe
---
# Szűrő: wu_stripe_checkout_subscription_data {#filter-wustripecheckoutsubscriptiondata}

Szűrőként fogadja el a Stripe előfizetési adatokat. Ezzel lehet átírni (override) a success_url vagy a cancel_url értékét.

## Paraméterek {#parameters}

| Neve | Típus | Leírás |
|------|------|-------------|
| $subscription_data | `array` | Paraméterek tömbje, amelyet Stripe-nak kell átadni. |
| $gateway | `\Base_Gateway` | Az aktuális Stripe Gateway objektuma. |

### Since {#since}

- 2.4.2
### Source {#source}

Definálva van a [`inc/gateways/class-base-stripe-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/gateways/class-base-stripe-gateway.php#L298) fájlban, 298-sorban.
