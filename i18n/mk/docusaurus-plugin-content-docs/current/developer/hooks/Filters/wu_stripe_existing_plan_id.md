---
id: wu_stripe_existing_plan_id
title: Филтер - wu_stripe_existing_plan_id
sidebar_label: wu_stripe_existing_plan_id
_i18n_hash: 153242c21b0a894c554c77872a96d1cd
---
# Филтер: wu_stripe_existing_plan_id

Го филтрира ID-то на планот за кој треба да се провери. Ако ова постои, новата претплата ќе го користи овој план.

## Параметри {#parameters}

| Име | Тип | Опис |
|------|------|-------------|
| $plan_id | `string` | ID на Stripe планот за кој треба да се провери. |
| $membership_level | `object` | Објект на ниво на членство. |

### Извор {#source}

Дефинирано во [`inc/gateways/class-base-stripe-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/gateways/class-base-stripe-gateway.php#L2653) на линија 2653
