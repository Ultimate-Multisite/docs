---
id: wu_stripe_existing_plan_id
title: Filtre - wu_stripe_existing_plan_id
sidebar_label: wu_stripe_existing_plan_id
_i18n_hash: 153242c21b0a894c554c77872a96d1cd
---
# Filter: wu_stripe_existing_plan_id

Filtre l'ID du plan à vérifier. Si celui-ci existe, le nouvel abonnement utilisera ce plan.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $plan_id | `string` | ID du plan Stripe à vérifier. |
| $membership_level | `object` | Objet du niveau d'adhésion. |

### Source

Défini dans [`inc/gateways/class-base-stripe-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/gateways/class-base-stripe-gateway.php#L2653) à la ligne 2653
