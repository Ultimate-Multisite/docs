---
id: wu_stripe_existing_plan_id
title: Filtru - wu_stripe_existing_plan_id
sidebar_label: wu_stripe_existing_plan_id
_i18n_hash: 153242c21b0a894c554c77872a96d1cd
---
# Filtru: wu_stripe_existing_plan_id

Acest filtru setează ID-ul planului care trebuie verificat. Dacă acesta există, abonamentul nou va folosi acest plan.

## Parametri

| Nume | Tip | Descriere |
|------|------|-------------|
| $plan_id | `string` | ID-ul planului Stripe pe care trebuie verificat. |
| $membership_level | `object` | Obiectul nivelului de membru. |

### Sursă

Definit în [`inc/gateways/class-base-stripe-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/gateways/class-base-stripe-gateway.php#L2653) la linia 2653
