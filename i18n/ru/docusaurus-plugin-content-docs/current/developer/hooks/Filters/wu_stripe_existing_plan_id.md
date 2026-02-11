---
id: wu_stripe_existing_plan_id
title: Фильтр - wu_stripe_existing_plan_id
sidebar_label: wu_stripe_existing_plan_id
_i18n_hash: 153242c21b0a894c554c77872a96d1cd
---
# Фильтр: wu_stripe_existing_plan_id

Фильтрует ID плана, который нужно проверить. Если он существует, новая подписка будет использовать этот план.

## Параметры

| Имя | Тип | Описание |
|------|------|-------------|
| $plan_id | `string` | ID плана Stripe, который нужно проверить. |
| $membership_level | `object` | Объект уровня членства. |

### Источник

Определено в [`inc/gateways/class-base-stripe-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/gateways/class-base-stripe-gateway.php#L2653) на строке 2653
