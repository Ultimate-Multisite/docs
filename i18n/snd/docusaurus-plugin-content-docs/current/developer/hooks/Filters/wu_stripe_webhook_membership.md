---
id: wu_stripe_webhook_membership
title: فلٽر - wu_stripe_webhook_membership
sidebar_label: wu_stripe_webhook_membership
_i18n_hash: b39da1f6b46f6ac7af6a5674c8b5d261
---
# فلٽر: wu_stripe_webhook_membership {#filter-wustripewebhookmembership}

هن webhook سان لاڳاپيل رڪنيت جي رڪارڊ کي فلٽر ڪري ٿو.

هي فلٽر انهن تڪرارن سبب متعارف ڪرايو ويو هو، جيڪي تڏهن پيدا ٿي سگهن ٿا جڏهن ساڳيو Stripe گراهڪ مختلف سائيٽن تي استعمال ٿئي.

## پيراميٽر {#parameters}

| نالو | قسم | وضاحت |
|------|------|-------------|
| $membership | `\WP_Ultimo\Models\Membership\|false` | رڪنيت جو آبجيڪٽ. |
| $event | `\Stripe\Event` | وصول ٿيل ايونٽ. |

### ماخذ {#source}

[`inc/gateways/class-base-stripe-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/gateways/class-base-stripe-gateway.php#L2035) ۾ لائين 2035 تي بيان ٿيل آهي
