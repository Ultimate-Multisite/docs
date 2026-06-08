---
id: wu_stripe_checkout_subscription_data
title: Filter - wu_stripe_checkout_subscription_data
sidebar_label: wu_stripe_checkout_subscription_data
_i18n_hash: 974298c0105287786ac2a8f47914cdfe
---
# Filter: wu_stripe_checkout_subscription_data

Stripe Abunəlik məlumatlarını filtrləyir. `success_url` və ya `cancel_url` dəyərlərini yeniləmək mümkündür.

## Parametrlər

| Name | Type | Təsvir |
|------|------|-------------|
| $subscription_data | `array` | Stripe-ə ötürüləcək parametrlərdən ibarət bir massiv. |
| $gateway | `\Base_Gateway` | Hazırkı Stripe Gateway obyektidir. |

### Nə vaqtdən

- 2.4.2
### Mənbə

[`inc/gateways/class-base-stripe-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/gateways/class-base-stripe-gateway.php#L298) faylında 298-ci sətirdə təyin edilmişdir.
