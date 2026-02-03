---
id: wu_stripe_existing_plan_id
title: Filtro - wu_stripe_existing_plan_id
sidebar_label: wu_stripe_existing_plan_id
_i18n_hash: 153242c21b0a894c554c77872a96d1cd
---
# Filtro: wu_stripe_existing_plan_id

Filtra el ID del plan a verificar. Si existe, la nueva suscripción utilizará este plan.

## Parámetros

| Nombre | Tipo | Descripción |
|------|------|-------------|
| $plan_id | `string` | ID del plan de Stripe a verificar. |
| $membership_level | `object` | Objeto de nivel de membresía. |

### Fuente

Definido en [`inc/gateways/class-base-stripe-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/gateways/class-base-stripe-gateway.php#L2653) en la línea 2653
