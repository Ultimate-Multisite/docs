---
id: wu_stripe_existing_plan_id
title: Filter - wu_stripe_existing_plan_id
sidebar_label: wu_stripe_existing_plan_id
_i18n_hash: 153242c21b0a894c554c77872a96d1cd
---
# Filter: wu_stripe_existing_plan_id

Filtert die ID des Plans, nach dem gesucht werden soll. Falls dieser existiert, wird das neue Abonnement diesen Plan verwenden.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $plan_id | `string` | ID des Stripe-Plans, nach dem gesucht werden soll. |
| $membership_level | `object` | Mitgliedschaftslevel-Objekt. |

### Source

Definiert in [`inc/gateways/class-base-stripe-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/gateways/class-base-stripe-gateway.php#L2653) in Zeile 2653
