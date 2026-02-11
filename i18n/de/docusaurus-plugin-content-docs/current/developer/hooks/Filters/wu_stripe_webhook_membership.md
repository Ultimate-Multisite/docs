---
id: wu_stripe_webhook_membership
title: Filter - wu_stripe_webhook_membership
sidebar_label: wu_stripe_webhook_membership
_i18n_hash: b39da1f6b46f6ac7af6a5674c8b5d261
---
# Filter: wu_stripe_webhook_membership

Filtert das Mitgliedschaftsdatensatz, das mit diesem Webhook verknüpft ist.

Dieser Filter wurde eingeführt, um Konflikte zu vermeiden, die auftreten können, wenn derselbe Stripe-Kunde auf verschiedenen Websites verwendet wird.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $membership | `\WP_Ultimo\Models\Membership\|false` | Das Mitgliedschaftsobjekt. |
| $event | `\Stripe\Event` | Das empfangene Ereignis. |

### Source

Defined in [`inc/gateways/class-base-stripe-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/gateways/class-base-stripe-gateway.php#L2035) at line 2035
