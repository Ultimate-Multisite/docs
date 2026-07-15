---
id: wu_stripe_checkout_subscription_data
title: Զտիչ - wu_stripe_checkout_subscription_data
sidebar_label: wu_stripe_checkout_subscription_data
_i18n_hash: 974298c0105287786ac2a8f47914cdfe
---
# Ֆիլտր՝ wu_stripe_checkout_subscription_data

Ֆիլտրում է Stripe բաժանորդագրության տվյալները։ Կարող է վերագրել success_url կամ cancel_url։

## Պարամետրեր {#parameters}

| Անուն | Տեսակ | Նկարագրություն |
|------|------|-------------|
| $subscription_data | `array` | Stripe-ին փոխանցվող պարամետրերի զանգված։ |
| $gateway | `\Base_Gateway` | Ընթացիկ Stripe Gateway օբյեկտը։ |

### Սկսած {#since}

- 2.4.2
### Աղբյուր {#source}

Սահմանված է [`inc/gateways/class-base-stripe-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/gateways/class-base-stripe-gateway.php#L298)-ում՝ 298-րդ տողում։
