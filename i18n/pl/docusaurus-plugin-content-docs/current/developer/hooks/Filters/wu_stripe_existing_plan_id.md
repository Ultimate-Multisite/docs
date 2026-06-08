---
id: wu_stripe_existing_plan_id
title: Filtr - wu_stripe_existing_plan_id
sidebar_label: wu_stripe_existing_plan_id
_i18n_hash: 153242c21b0a894c554c77872a96d1cd
---
# Filter: wu_stripe_existing_plan_id

Filtruje ID planu, który ma zostać sprawdzony. Jeśli ten ID istnieje, nowe subskrypcje będą używać tego planu.

## Parametry

| Nazwa | Typ | Opis |
|------|------|-------------|
| $plan_id | `string` | ID planu Stripe, który ma zostać sprawdzony. |
| $membership_level | `object` | Obiekt poziomu członkostwa. |

### Źródło

Zdefiniowane w [`inc/gateways/class-base-stripe-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/gateways/class-base-stripe-gateway.php#L2653) w linii 2653
