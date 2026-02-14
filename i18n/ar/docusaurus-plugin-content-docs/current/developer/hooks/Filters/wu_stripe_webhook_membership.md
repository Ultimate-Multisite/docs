---
id: wu_stripe_webhook_membership
title: فلتر - wu_stripe_webhook_membership
sidebar_label: wu_stripe_webhook_membership
_i18n_hash: b39da1f6b46f6ac7af6a5674c8b5d261
---
# الفلتر: wu_stripe_webhook_membership

يُرشّح سجل العضوية المرتبط بهذا الويب هوك.

تم تقديم هذا الفلتر بسبب التعارضات التي قد تنشأ عندما يُستخدم نفس عميل Stripe على مواقع مختلفة.

## المعلمات

| الاسم | النوع | الوصف |
|------|------|-------------|
| $membership | `\WP_Ultimo\Models\Membership\|false` | كائن العضوية. |
| $event | `\Stripe\Event` | الحدث المستلم. |

### المصدر

مُعرّف في [`inc/gateways/class-base-stripe-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/gateways/class-base-stripe-gateway.php#L2035) في السطر 2035
