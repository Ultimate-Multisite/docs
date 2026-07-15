---
id: wu_stripe_existing_plan_id
title: Filter - wu_stripe_existing_plan_id
sidebar_label: wu_stripe_existing_plan_id
_i18n_hash: 153242c21b0a894c554c77872a96d1cd
---
# Filter: wu_stripe_existing_plan_id

Filtrira ID paketa, ki ga je treba preveriti. Če ta obstaja, bo nova naročnina uporabila ta paket.

## Parametri {#parameters}

| Ime | Vrsta | Opis |
|------|------|-------------|
| $plan_id | `string` | ID Stripe paketa, ki ga je treba preveriti. |
| $membership_level | `object` | Objekt ravni članstva. |

### Vir {#source}

Določeno v [`inc/gateways/class-base-stripe-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/gateways/class-base-stripe-gateway.php#L2653) v vrstici 2653
