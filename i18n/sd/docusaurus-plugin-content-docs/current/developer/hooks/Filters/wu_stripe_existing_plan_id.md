---
id: wu_stripe_existing_plan_id
title: فلٽر - wu_stripe_existing_plan_id
sidebar_label: wu_stripe_existing_plan_id
_i18n_hash: 153242c21b0a894c554c77872a96d1cd
---
# فلٽر: wu_stripe_existing_plan_id

ان منصوبي جي ID کي فلٽر ڪري ٿو جنهن جي جانچ ڪرڻي آهي. جيڪڏهن هي موجود هجي، نئين رڪنيت هي منصوبو استعمال ڪندي.

## پيرا ميٽر {#parameters}

| نالو | قسم | وضاحت |
|------|------|-------------|
| $plan_id | `string` | Stripe منصوبي جي ID جنهن جي جانچ ڪرڻي آهي. |
| $membership_level | `object` | رڪنيت جي سطح جي شئي. |

### ذريعو {#source}

[`inc/gateways/class-base-stripe-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/gateways/class-base-stripe-gateway.php#L2653) ۾ لائين 2653 تي بيان ٿيل آهي.
