---
id: wu_stripe_existing_plan_id
title: Фільтр - wu_stripe_existing_plan_id
sidebar_label: wu_stripe_existing_plan_id
_i18n_hash: 153242c21b0a894c554c77872a96d1cd
---
# Фільтр: wu_stripe_existing_plan_id

Фільтруе ID плана, які трэба праверыць. Калі ён існуюць, новая падпіска будзе выкарыстоўваць гэты план.

## Паметры

| Назва | Тып | Апісан |
|------|------|-------------|
| $plan_id | `string` | ID плана Stripe, які трэба праверыць. |
| $membership_level | `object` | Объект ўзроўню ўступства. |

### Паходжанне

Вызначаны ў [`inc/gateways/class-base-stripe-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/gateways/class-base-stripe-gateway.php#L2653) на 2653-й кропцы
