---
id: wu_stripe_webhook_membership
title: Филтер - wu_stripe_webhook_membership
sidebar_label: wu_stripe_webhook_membership
_i18n_hash: b39da1f6b46f6ac7af6a5674c8b5d261
---
# Filter: wu_stripe_webhook_membership

Филтрира запис чланства повезан са овим webhook-ом.

Овај филтер је уведен због конфликата који могу настати када се исти Stripe купац користи на различитим сајтовима.

## Параметри

| Назив | Тип | Опис |
|------|------|-------------|
| $membership | `\WP_Ultimo\Models\Membership\|false` | Објекат чланства. |
| $event | `\Stripe\Event` | Примљени догађај. |

### Извор

Дефинисано у [`inc/gateways/class-base-stripe-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/gateways/class-base-stripe-gateway.php#L2035) у реду 2035
