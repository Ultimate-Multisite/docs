---
id: wu_stripe_existing_plan_id
title: Filter - wu_stripe_existing_plan_id
sidebar_label: wu_stripe_existing_plan_id
_i18n_hash: 153242c21b0a894c554c77872a96d1cd
---
# Filter: wu_stripe_existing_plan_id

Filtrira ID plana koji se provjerava. Ako postoji, nova pretplata će koristiti ovaj plan.

## Parametri

| Ime | Tip | Opis |
|------|------|-------------|
| $plan_id | `string` | ID Stripe plana koji se provjerava. |
| $membership_level | `object` | Objekt nivoa članstva. |

### Izvor

Definisano je u [`inc/gateways/class-base-stripe-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/gateways/class-base-stripe-gateway.php#L2653) na liniji 2653
