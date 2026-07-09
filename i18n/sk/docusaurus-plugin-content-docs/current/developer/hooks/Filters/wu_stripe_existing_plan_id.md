---
id: wu_stripe_existing_plan_id
title: Filter - wu_stripe_existing_plan_id
sidebar_label: wu_stripe_existing_plan_id
_i18n_hash: 153242c21b0a894c554c77872a96d1cd
---
# Filter: wu_stripe_existing_plan_id

Filtruje ID plánu, ktorý sa má skontrolovať. Ak existuje, nové predplatné použije tento plán.

## Parametre

| Názov | Typ | Popis |
|------|------|-------------|
| $plan_id | `string` | ID Stripe plánu, ktorý sa má skontrolovať. |
| $membership_level | `object` | Objekt úrovne členstva. |

### Zdroj

Definované v [`inc/gateways/class-base-stripe-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/gateways/class-base-stripe-gateway.php#L2653) na riadku 2653
