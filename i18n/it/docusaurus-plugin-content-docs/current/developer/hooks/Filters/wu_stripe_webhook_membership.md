---
id: wu_stripe_webhook_membership
title: Filtro - wu_stripe_webhook_membership
sidebar_label: wu_stripe_webhook_membership
_i18n_hash: b39da1f6b46f6ac7af6a5674c8b5d261
---
# Filter: wu_stripe_webhook_membership

Filters the membership record associated with this webhook.

This filter was introduced due to conflicts that may arise when the same Stripe customer may be used on different sites.

## Parameters

| Nome | Tipo | Descrizione |
|------|------|-------------|
| $membership | `\WP_Ultimo\Models\Membership\|false` | L'oggetto membership. |
| $event | `\Stripe\Event` | L'evento ricevuto. |

### Fonte

Definito in [`inc/gateways/class-base-stripe-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/gateways/class-base-stripe-gateway.php#L2035) at line 2035
