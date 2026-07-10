---
id: wu_stripe_existing_plan_id
title: Филтер - wu_stripe_existing_plan_id
sidebar_label: wu_stripe_existing_plan_id
_i18n_hash: 153242c21b0a894c554c77872a96d1cd
---
# Филтер: wu_stripe_existing_plan_id {#filter-wustripeexistingplanid}

Филтрира ID плана који треба проверити. Ако ово постоји, нова претплата ће користити овај план.

## Параметри {#parameters}

| Назив | Тип | Опис |
|------|------|-------------|
| $plan_id | `string` | ID Stripe плана који треба проверити. |
| $membership_level | `object` | Објекат нивоа чланства. |

### Извор {#source}

Дефинисано у [`inc/gateways/class-base-stripe-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/gateways/class-base-stripe-gateway.php#L2653) у реду 2653
