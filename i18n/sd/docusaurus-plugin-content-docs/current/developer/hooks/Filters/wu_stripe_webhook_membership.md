---
id: wu_stripe_webhook_membership
title: فلٽر - wu_stripe_webhook_membership
sidebar_label: wu_stripe_webhook_membership
_i18n_hash: b39da1f6b46f6ac7af6a5674c8b5d261
---
# فلٽر: wu_stripe_webhook_membership

هن webhook سان لاڳاپيل membership رڪارڊ کي فلٽر ڪري ٿو.

هي فلٽر انهن ٽڪراءُ جي ڪري متعارف ڪرايو ويو، جيڪي تڏهن پيدا ٿي سگهن ٿا جڏهن ساڳيو Stripe گراهڪ مختلف سائيٽن تي استعمال ٿئي.

## پيرا ميٽر {#parameters}

| نالو | قسم | وضاحت |
|------|------|-------------|
| $membership | `\WP_Ultimo\Models\Membership\|false` | membership آبجيڪٽ. |
| $event | `\Stripe\Event` | وصول ڪيل event. |

### ذريعو {#source}

[`inc/gateways/class-base-stripe-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/gateways/class-base-stripe-gateway.php#L2035) ۾ line 2035 تي بيان ڪيل
