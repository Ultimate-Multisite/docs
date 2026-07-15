---
id: wu_stripe_webhook_membership
title: Filtro - wu_stripe_webhook_membership
sidebar_label: wu_stripe_webhook_membership
_i18n_hash: b39da1f6b46f6ac7af6a5674c8b5d261
---
# Filtro: wu_stripe_webhook_membership

Filtra o rexistro de subscrición asociado con este webhook.

Este filtro introduciuse debido a conflitos que poden xurdir cando o mesmo cliente de Stripe pode usarse en diferentes sitios.

## Parámetros {#parameters}

| Nome | Tipo | Descrición |
|------|------|-------------|
| $membership | `\WP_Ultimo\Models\Membership\|false` | O obxecto de subscrición. |
| $event | `\Stripe\Event` | O evento recibido. |

### Fonte {#source}

Definido en [`inc/gateways/class-base-stripe-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/gateways/class-base-stripe-gateway.php#L2035) na liña 2035
