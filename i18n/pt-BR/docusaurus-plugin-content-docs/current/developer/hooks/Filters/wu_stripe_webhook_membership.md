---
id: wu_stripe_webhook_membership
title: Filtro - wu_stripe_webhook_membership
sidebar_label: wu_stripe_webhook_membership
_i18n_hash: b39da1f6b46f6ac7af6a5674c8b5d261
---
# Filtro: wu_stripe_webhook_membership

Filtra o registro de associação associado a este webhook.

Este filtro foi introduzido devido a conflitos que podem surgir quando o mesmo cliente Stripe pode ser usado em diferentes sites.

## Parâmetros

| Name | Type | Description |
|------|------|-------------|
| $membership | `\WP_Ultimo\Models\Membership\|false` | O objeto de associação. |
| $event | `\Stripe\Event` | O evento recebido. |

### Fonte

Definido em [`inc/gateways/class-base-stripe-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/gateways/class-base-stripe-gateway.php#L2035) na linha 2035
