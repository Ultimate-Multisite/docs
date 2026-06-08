---
id: wu_stripe_existing_plan_id
title: Filtrační parametr - wu_stripe_existing_plan_id
sidebar_label: wu_stripe_existing_plan_id
_i18n_hash: 153242c21b0a894c554c77872a96d1cd
---
# Filter: wu_stripe_existing_plan_id

Filtruje ID plánu, které má být zkontrolováno. Pokud toto ID existuje, nové předplatné bude používat tento plán.

## Parametry

| Název | Typ | Popis |
|------|------|-------------|
| $plan_id | `string` | ID plánu Stripe, které má být zkontrolováno. |
| $membership_level | `object` | Objekt úrovně členství. |

### Zdroj

Definováno v [`inc/gateways/class-base-stripe-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/gateways/class-base-stripe-gateway.php#L2653) na řádku 2653
