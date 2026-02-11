---
id: wu_stripe_webhook_membership
title: Фильтр - wu_stripe_webhook_membership
sidebar_label: wu_stripe_webhook_membership
_i18n_hash: b39da1f6b46f6ac7af6a5674c8b5d261
---
# Фильтр: wu_stripe_webhook_membership

Фильтрует запись членства, связанную с этим вебхуком.

Этот фильтр был введен из-за конфликтов, которые могут возникнуть, если один и тот же клиент Stripe используется на разных сайтах.

## Параметры

| Имя | Тип | Описание |
|------|------|-------------|
| $membership | `\WP_Ultimo\Models\Membership\|false` | Объект членства. |
| $event | `\Stripe\Event` | Полученное событие. |

### Источник

Определено в [`inc/gateways/class-base-stripe-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/gateways/class-base-stripe-gateway.php#L2035) на строке 2035
