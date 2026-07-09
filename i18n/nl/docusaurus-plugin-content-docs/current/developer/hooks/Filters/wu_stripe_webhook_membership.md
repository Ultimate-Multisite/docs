---
id: wu_stripe_webhook_membership
title: Filter - wu_stripe_webhook_membership
sidebar_label: wu_stripe_webhook_membership
_i18n_hash: b39da1f6b46f6ac7af6a5674c8b5d261
---
# Filter: wu_stripe_webhook_membership {#filter-wustripewebhookmembership}

Filtert het lidmaatschaprecord dat aan deze webhook is gekoppeld.

Deze filter is geïntroduceerd vanwege conflicten die kunnen ontstaan wanneer dezelfde Stripe-klant op verschillende sites wordt gebruikt.

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $membership | `\WP_Ultimo\Models\Membership\|false` | Het lidmaatschapobject. |
| $event | `\Stripe\Event` | Het ontvangen evenement. |

### Source {#source}

Gedefinieerd in [`inc/gateways/class-base-stripe-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/gateways/class-base-stripe-gateway.php#L2035) op regel 2035
