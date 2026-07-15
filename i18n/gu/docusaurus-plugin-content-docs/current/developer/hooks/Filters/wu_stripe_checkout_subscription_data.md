---
id: wu_stripe_checkout_subscription_data
title: ફિલ્ટર - wu_stripe_checkout_subscription_data
sidebar_label: wu_stripe_checkout_subscription_data
_i18n_hash: 974298c0105287786ac2a8f47914cdfe
---
# Filter: wu_stripe_checkout_subscription_data

Stripe સબ્સ્ક્રિપ્શન ડેટા ફિલ્ટર કરો. આ ફિલ્ટરનો ઉપયોગ કરીને તમે `success_url` અથવા `cancel_url` ને ઓવરરાઇડ કરી શકો છો.

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $subscription_data | `array` | Stripe ને આપવાના પેરામીટર્સનો એક એરે. |
| $gateway | `\Base_Gateway` | વર્તમાન Stripe ગેટવે ઓબ્જેક્ટ. |

### Since {#since}

- 2.4.2
### Source {#source}

Defined in [`inc/gateways/class-base-stripe-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/gateways/class-base-stripe-gateway.php#L298) at line 298
