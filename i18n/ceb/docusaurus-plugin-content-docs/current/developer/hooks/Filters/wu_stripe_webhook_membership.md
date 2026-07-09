---
id: wu_stripe_webhook_membership
title: Salain - wu_stripe_webhook_membership
sidebar_label: wu_stripe_webhook_membership
_i18n_hash: b39da1f6b46f6ac7af6a5674c8b5d261
---
# Filter: wu_stripe_webhook_membership

Gisala ang rekord sa membership nga nalangkit niini nga webhook.

Kini nga filter gipaila tungod sa mga panagbangi nga mahimong motumaw kung ang parehas nga Stripe customer mahimong gamiton sa lain-laing mga site.

## Mga Parameter

| Name | Type | Description |
|------|------|-------------|
| $membership | `\WP_Ultimo\Models\Membership\|false` | Ang membership object. |
| $event | `\Stripe\Event` | Ang event nga nadawat. |

### Tinubdan

Gihubit sa [`inc/gateways/class-base-stripe-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/gateways/class-base-stripe-gateway.php#L2035) sa linya 2035
