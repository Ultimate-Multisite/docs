---
id: wu_stripe_webhook_membership
title: Filter - wu_stripe_webhook_membership
sidebar_label: wu_stripe_webhook_membership
_i18n_hash: b39da1f6b46f6ac7af6a5674c8b5d261
---
# Filter: wu_stripe_webhook_membership

Dit filter die lidmaatskaprekord wat geassosieer is met hierdie webhook.

Hierdie filter is ingevoer weens potensiële konflikte wat kan ontstaan wanneer dieselfde Stripe-klant op verskillende webwerwe gebruik word.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $membership | `\WP_Ultimo\Models\Membership\|false` | Die lidmaatskap-objek. |
| $event | `\Stripe\Event` | Die ontvangde gebeurtenis. |

### Source

Defined in [`inc/gateways/class-base-stripe-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/gateways/class-base-stripe-gateway.php#L2035) at line 2035
