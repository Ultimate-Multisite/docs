---
id: wu_stripe_existing_plan_id
title: Фільтр - wu_stripe_existing_plan_id
sidebar_label: wu_stripe_existing_plan_id
_i18n_hash: 153242c21b0a894c554c77872a96d1cd
---
# Filter: wu_stripe_existing_plan_id

Фільтрує ID плану, який потрібно перевірити. Якщо він існує, нова підписка використає цей план.

## Параметри {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $plan_id | `string` | ID плану Stripe, який потрібно перевірити. |
| $membership_level | `object` | Об'єкт рівня членства. |

### Source {#source}

Визначено в [`inc/gateways/class-base-stripe-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/gateways/class-base-stripe-gateway.php#L2653) на рядку 2653
