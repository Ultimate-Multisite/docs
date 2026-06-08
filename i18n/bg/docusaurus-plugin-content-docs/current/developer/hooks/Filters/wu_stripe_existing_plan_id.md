---
id: wu_stripe_existing_plan_id
title: Филтър - wu_stripe_existing_plan_id
sidebar_label: wu_stripe_existing_plan_id
_i18n_hash: 153242c21b0a894c554c77872a96d1cd
---
# Filter: wu_stripe_existing_plan_id

Филтрира ID-то на плана, който се проверява. Ако този ID съществува, новият абонамент ще използва този план.

## Параметри

| Name | Type | Описание |
|------|------|-------------|
| $plan_id | `string` | ID на плана на Stripe, който се проверява. |
| $membership_level | `object` | Обект на ниво на членство. |

### Източник

Дефиниран в [`inc/gateways/class-base-stripe-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/gateways/class-base-stripe-gateway.php#L2653) на ред 2653
