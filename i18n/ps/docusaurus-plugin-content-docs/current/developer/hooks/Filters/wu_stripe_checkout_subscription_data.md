---
id: wu_stripe_checkout_subscription_data
title: فلټر - wu_stripe_checkout_subscription_data
sidebar_label: wu_stripe_checkout_subscription_data
_i18n_hash: 974298c0105287786ac2a8f47914cdfe
---
# فلټر: wu_stripe_checkout_subscription_data {#filter-wustripecheckoutsubscriptiondata}

د Stripe ګډون ډاټا فلټر کړئ. کولای شي success_url یا cancel_url بدل کړي.

## پارامیټرونه {#parameters}

| نوم | ډول | تشریح |
|------|------|-------------|
| $subscription_data | `array` | Stripe ته د لېږلو لپاره د پارامیټرونو یو ارې. |
| $gateway | `\Base_Gateway` | د Stripe اوسنی Gateway څیز. |

### له نسخې راهیسې {#since}

- 2.4.2
### سرچینه {#source}

په [`inc/gateways/class-base-stripe-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/gateways/class-base-stripe-gateway.php#L298) کې په 298 کرښه تعریف شوی.
