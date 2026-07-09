---
id: wu_stripe_checkout_subscription_data
title: فیلتر - wu_stripe_checkout_subscription_data
sidebar_label: wu_stripe_checkout_subscription_data
_i18n_hash: 974298c0105287786ac2a8f47914cdfe
---
# فیلتر: wu_stripe_checkout_subscription_data {#filter-wustripecheckoutsubscriptiondata}

داده‌های اشتراک Stripe را فیلتر می‌کند. امکان بازنویسی (override) `success_url` یا `cancel_url` را فراهم می‌کند.

## پارامترها {#parameters}

| نام | نوع | توضیحات |
|------|------|-------------|
| $subscription_data | `array` | آرایه‌ای از پارامترهایی که باید به Stripe ارسال شوند. |
| $gateway | `\Base_Gateway` | شیء (object) گیت‌وی Stripe فعلی. |

### از نسخه {#since}

- 2.4.2
### منبع {#source}

در [`inc/gateways/class-base-stripe-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/gateways/class-base-stripe-gateway.php#L298) در خط ۲۹۸ تعریف شده است.
