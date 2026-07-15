---
id: wu_stripe_existing_plan_id
title: Filtrs - wu_stripe_existing_plan_id
sidebar_label: wu_stripe_existing_plan_id
_i18n_hash: 153242c21b0a894c554c77872a96d1cd
---
# Filtrs: wu_stripe_existing_plan_id

Filtrē plāna ID, kuru pārbaudīt. Ja tas pastāv, jaunais abonements izmantos šo plānu.

## Parametri {#parameters}

| Nosaukums | Tips | Apraksts |
|------|------|-------------|
| $plan_id | `string` | Stripe plāna ID, kuru pārbaudīt. |
| $membership_level | `object` | Dalības līmeņa objekts. |

### Avots {#source}

Definēts [`inc/gateways/class-base-stripe-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/gateways/class-base-stripe-gateway.php#L2653) 2653. rindā
