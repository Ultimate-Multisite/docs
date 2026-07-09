---
id: wu_stripe_existing_plan_id
title: Filter - wu_stripe_existing_plan_id
sidebar_label: wu_stripe_existing_plan_id
_i18n_hash: 153242c21b0a894c554c77872a96d1cd
---
# Filter: wu_stripe_existing_plan_id

Filtrerer ID'et for den plan, der skal kontrolleres for. Hvis den findes, vil det nye abonnement bruge denne plan.

## Parametre

| Navn | Type | Beskrivelse |
|------|------|-------------|
| $plan_id | `string` | ID'et for den Stripe-plan, der skal kontrolleres for. |
| $membership_level | `object` | Objekt for medlemskabsniveau. |

### Kilde

Defineret i [`inc/gateways/class-base-stripe-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/gateways/class-base-stripe-gateway.php#L2653) på linje 2653
