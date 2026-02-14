---
id: wu_stripe_existing_plan_id
title: مرشح - wu_stripe_existing_plan_id
sidebar_label: wu_stripe_existing_plan_id
_i18n_hash: 153242c21b0a894c554c77872a96d1cd
---
# المرشح: wu_stripe_existing_plan_id

يُرشح معرّف الخطة للتحقق منها. إذا كان موجودًا، ستستخدم الاشتراك الجديد هذه الخطة.

## المعلمات

| الاسم | النوع | الوصف |
|------|------|-------------|
| $plan_id | `string` | معرّف خطة Stripe للتحقق منها. |
| $membership_level | `object` | كائن مستوى العضوية. |

### المصدر

تم تعريفه في [`inc/gateways/class-base-stripe-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/gateways/class-base-stripe-gateway.php#L2653) في السطر 2653
