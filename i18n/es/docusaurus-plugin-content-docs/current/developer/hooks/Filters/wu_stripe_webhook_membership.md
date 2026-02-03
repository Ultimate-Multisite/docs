---
id: wu_stripe_webhook_membership
title: Filtro - wu_stripe_webhook_membership
sidebar_label: wu_stripe_webhook_membership
_i18n_hash: b39da1f6b46f6ac7af6a5674c8b5d261
---
# Filtro: wu_stripe_webhook_membership

Filtra el registro de membresía asociado con este webhook.

Este filtro se introdujo debido a los conflictos que pueden surgir cuando el mismo cliente de Stripe se utiliza en diferentes sitios.

## Parameters

| Nombre | Tipo | Descripción |
|------|------|-------------|
| $membership | `\WP_Ultimo\Models\Membership\|false` | El objeto de membresía. |
| $event | `\Stripe\Event` | El evento recibido. |

### Source

Definido en [`inc/gateways/class-base-stripe-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/gateways/class-base-stripe-gateway.php#L2035) en la línea 2035
