---
id: wu_stripe_existing_plan_id
title: Filtro - wu_stripe_existing_plan_id
sidebar_label: wu_stripe_existing_plan_id
_i18n_hash: 153242c21b0a894c554c77872a96d1cd
---
# Filtro: wu_stripe_existing_plan_id

Filtra o ID do plano a ser verificado. Se existir, a nova assinatura usará este plano.

## Parâmetros

| Nome | Tipo | Descrição |
|------|------|-----------|
| $plan_id | `string` | ID do plano Stripe a ser verificado. |
| $membership_level | `object` | Objeto de nível de associação. |

### Fonte

Definido em [`inc/gateways/class-base-stripe-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/gateways/class-base-stripe-gateway.php#L2653) na linha 2653
