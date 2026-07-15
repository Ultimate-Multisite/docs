---
id: wu_stripe_webhook_membership
title: Filtro - wu_stripe_webhook_membership
sidebar_label: wu_stripe_webhook_membership
_i18n_hash: b39da1f6b46f6ac7af6a5674c8b5d261
---
# Filtro: wu_stripe_webhook_membership

Filtra o registo de adesão associado a este webhook.

Este filtro foi introduzido devido a conflitos que podem surgir quando o mesmo cliente Stripe pode ser usado em diferentes sites.

## Parâmetros {#parameters}

| Nome | Tipo | Descrição |
|------|------|-------------|
| $membership | `\WP_Ultimo\Models\Membership\|false` | O objeto de adesão. |
| $event | `\Stripe\Event` | O evento recebido. |

### Origem {#source}

Definido em [`inc/gateways/class-base-stripe-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/gateways/class-base-stripe-gateway.php#L2035) na linha 2035
