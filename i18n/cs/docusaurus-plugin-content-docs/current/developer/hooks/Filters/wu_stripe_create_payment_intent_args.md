---
id: wu_stripe_create_payment_intent_args
title: Filtrační funkce - wu_stripe_create_payment_intent_args
sidebar_label: wu_stripe_create_payment_intent_args
_i18n_hash: 519a54fb6c4994ea3e7584a952f39239
---
# Filtrační hook: wu_stripe_create_payment_intent_args

Filtruje argumenty pro vytvoření záměru platby (payment intent).

## Parametry {#parameters}

| Název | Typ | Popis |
|------|------|-------------|
| $intent_args | `array` | Seznam argumentů záměru. |
| $stripe_gateway | `\Stripe_Gateway` | . |

### Od verze {#since}

- 2.0
### Zdroj {#source}

Definováno v [`inc/gateways/class-stripe-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/gateways/class-stripe-gateway.php#L377) na řádku 377


## Vrací {#returns}
