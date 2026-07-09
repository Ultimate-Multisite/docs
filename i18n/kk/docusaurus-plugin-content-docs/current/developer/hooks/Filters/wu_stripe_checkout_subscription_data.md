---
id: wu_stripe_checkout_subscription_data
title: Сүзгі - wu_stripe_checkout_subscription_data
sidebar_label: wu_stripe_checkout_subscription_data
_i18n_hash: 974298c0105287786ac2a8f47914cdfe
---
# Сүзгі: wu_stripe_checkout_subscription_data {#filter-wustripecheckoutsubscriptiondata}

Stripe жазылым деректерін сүзу. success_url немесе cancel_url мәнін қайта анықтай алады.

## Параметрлер {#parameters}

| Атауы | Түрі | Сипаттамасы |
|------|------|-------------|
| $subscription_data | `array` | Stripe-қа жіберілетін параметрлер массиві. |
| $gateway | `\Base_Gateway` | Ағымдағы Stripe Gateway нысаны. |

### Бастап {#since}

- 2.4.2
### Дереккөзі {#source}

[`inc/gateways/class-base-stripe-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/gateways/class-base-stripe-gateway.php#L298) ішінде 298-жолда анықталған
