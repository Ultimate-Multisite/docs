---
id: wu_stripe_existing_plan_id
title: Filtër - wu_stripe_existing_plan_id
sidebar_label: wu_stripe_existing_plan_id
_i18n_hash: 153242c21b0a894c554c77872a96d1cd
---
# Filtër: wu_stripe_existing_plan_id

Filtron ID-në e planit për të kontrolluar. Nëse ekziston, abonimi i ri do të përdorë këtë plan.

## Parametrat {#parameters}

| Emri | Lloji | Përshkrimi |
|------|------|-------------|
| $plan_id | `string` | ID-ja e planit Stripe për të kontrolluar. |
| $membership_level | `object` | Objekt i nivelit të anëtarësimit. |

### Burimi {#source}

Përcaktuar në [`inc/gateways/class-base-stripe-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/gateways/class-base-stripe-gateway.php#L2653) në rreshtin 2653
