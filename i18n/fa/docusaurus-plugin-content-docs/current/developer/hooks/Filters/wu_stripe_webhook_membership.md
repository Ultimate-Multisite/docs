---
id: wu_stripe_webhook_membership
title: فیلتر - wu_stripe_webhook_membership
sidebar_label: wu_stripe_webhook_membership
_i18n_hash: b39da1f6b46f6ac7af6a5674c8b5d261
---
# فیلتر: wu_stripe_webhook_membership

رکورد عضویت مرتبط با این وب‌هوک را فیلتر می‌کند.

این فیلتر به دلیل تضادهایی که ممکن است زمانی پیش بیاید که یک مشتری Stripe یکسان در سایت‌های مختلف استفاده شود، معرفی شده است.

## پارامترها

| نام | نوع | توضیحات |
|------|------|-------------|
| $membership | `\WP_Ultimo\Models\Membership\|false` | آبجکت عضویت. |
| $event | `\Stripe\Event` | رویداد دریافتی. |

### منبع

در [`inc/gateways/class-base-stripe-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/gateways/class-base-stripe-gateway.php#L2035) در خط ۲۰۳۵ تعریف شده است.
