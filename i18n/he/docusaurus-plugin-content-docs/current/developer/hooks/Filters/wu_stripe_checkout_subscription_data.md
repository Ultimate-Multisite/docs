---
id: wu_stripe_checkout_subscription_data
title: פילטר - wu_stripe_checkout_subscription_data
sidebar_label: wu_stripe_checkout_subscription_data
_i18n_hash: 974298c0105287786ac2a8f47914cdfe
---
# מסנן: wu_stripe_checkout_subscription_data

מסנן את נתוני המנוי של Stripe. ניתן לדרוס את `success_url` או `cancel_url`.

## פרמטרים

| שם | סוג | תיאור |
|------|------|-------------|
| $subscription_data | `array` | מערך של פרמטרים שיעברו ל-Stripe. |
| $gateway | `\Base_Gateway` | אובייקט ה-Gateway הנוכחי של Stripe. |

### מאז

- 2.4.2
### מקור

מוגדר ב[`inc/gateways/class-base-stripe-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/gateways/class-base-stripe-gateway.php#L298) בשורה 298
