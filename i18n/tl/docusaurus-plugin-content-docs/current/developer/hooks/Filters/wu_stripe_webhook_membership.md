---
id: wu_stripe_webhook_membership
title: Salain - wu_stripe_webhook_membership
sidebar_label: wu_stripe_webhook_membership
_i18n_hash: b39da1f6b46f6ac7af6a5674c8b5d261
---
# Filter: wu_stripe_webhook_membership

Sinasala ang tala ng pagiging miyembro na nauugnay sa webhook na ito.

Ipinakilala ang filter na ito dahil sa mga salungatang maaaring lumitaw kapag ang parehong Stripe kustomer ay maaaring gamitin sa iba't ibang sityo.

## Mga Parameter

| Pangalan | Uri | Paglalarawan |
|------|------|-------------|
| $membership | `\WP_Ultimo\Models\Membership\|false` | Ang object ng pagiging miyembro. |
| $event | `\Stripe\Event` | Ang event na natanggap. |

### Pinagmulan

Tinukoy sa [`inc/gateways/class-base-stripe-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/gateways/class-base-stripe-gateway.php#L2035) sa linya 2035
