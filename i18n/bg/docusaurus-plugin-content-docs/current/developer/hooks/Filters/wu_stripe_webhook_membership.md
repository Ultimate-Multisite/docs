---
id: wu_stripe_webhook_membership
title: Филтър - wu_stripe_webhook_membership
sidebar_label: wu_stripe_webhook_membership
_i18n_hash: b39da1f6b46f6ac7af6a5674c8b5d261
---
# Filter: wu_stripe_webhook_membership {#filter-wustripewebhookmembership}

Филтрира записа на членството, свързан с този webhook.

Този филтър беше въведен поради конфликти, които могат да възникнат, когато един и същ Stripe клиент се използва в различни сайтове.

## Параметри {#parameters}

| Име | Тип | Описание |
|------|------|-------------|
| $membership | `\WP_Ultimo\Models\Membership\|false` | Обектът на членството. |
| $event | `\Stripe\Event` | Полученото събитие. |

### Източник {#source}

Дефиниран в [`inc/gateways/class-base-stripe-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/gateways/class-base-stripe-gateway.php#L2035) на линия 2035
