---
id: wu_stripe_existing_plan_id
title: فلٽر - wu_stripe_existing_plan_id
sidebar_label: wu_stripe_existing_plan_id
_i18n_hash: 153242c21b0a894c554c77872a96d1cd
---
# Filter: wu_stripe_existing_plan_id

چڪاس ڪرڻ لاءِ منصوبي جي ID کي فلٽر ڪري ٿو. جيڪڏهن هي موجود هجي، ته نئين رڪنيت هي منصوبو استعمال ڪندي.

## پيرا ميٽر

| نالو | قسم | وضاحت |
|------|------|-------------|
| $plan_id | `string` | چڪاس ڪرڻ لاءِ Stripe منصوبي جي ID. |
| $membership_level | `object` | رڪنيت جي سطح جو آبجيڪٽ. |

### ذريعو

[`inc/gateways/class-base-stripe-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/gateways/class-base-stripe-gateway.php#L2653) ۾ لڪير 2653 تي بيان ٿيل.
