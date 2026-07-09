---
id: wu_stripe_webhook_membership
title: Hidlydd - wu_stripe_webhook_membership
sidebar_label: wu_stripe_webhook_membership
_i18n_hash: b39da1f6b46f6ac7af6a5674c8b5d261
---
# Hidlydd: wu_stripe_webhook_membership

Yn hidlo'r cofnod aelodaeth sy'n gysylltiedig â'r webhook hwn.

Cyflwynwyd y hidlydd hwn oherwydd gwrthdaro a allai godi pan ddefnyddir yr un cwsmer Stripe ar wahanol safleoedd.

## Paramedrau

| Enw | Math | Disgrifiad |
|------|------|-------------|
| $membership | `\WP_Ultimo\Models\Membership\|false` | Y gwrthrych aelodaeth. |
| $event | `\Stripe\Event` | Y digwyddiad a dderbyniwyd. |

### Ffynhonnell

Diffiniwyd yn [`inc/gateways/class-base-stripe-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/gateways/class-base-stripe-gateway.php#L2035) ar linell 2035
