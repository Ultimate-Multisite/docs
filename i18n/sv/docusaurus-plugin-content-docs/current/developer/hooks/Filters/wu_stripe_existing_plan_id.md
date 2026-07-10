---
id: wu_stripe_existing_plan_id
title: Filter - wu_stripe_existing_plan_id
sidebar_label: wu_stripe_existing_plan_id
_i18n_hash: 153242c21b0a894c554c77872a96d1cd
---
# Filter: wu_stripe_existing_plan_id {#filter-wustripeexistingplanid}

Filtrerar ID:t för den plan som ska kontrolleras. Om detta ID finns, kommer det nya abonnemanget att använda denna plan.

## Parametrar {#parameters}

| Namn | Typ | Beskrivning |
|------|------|-------------|
| $plan_id | `string` | ID för Stripe-planen som ska kontrolleras. |
| $membership_level | `object` | Objekt för medlemskapsnivån. |

### Källa {#source}

Definieras i [`inc/gateways/class-base-stripe-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/gateways/class-base-stripe-gateway.php#L2653) på rad 2653
