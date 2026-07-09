---
id: wu_stripe_webhook_membership
title: Фільтр - wu_stripe_webhook_membership
sidebar_label: wu_stripe_webhook_membership
_i18n_hash: b39da1f6b46f6ac7af6a5674c8b5d261
---
# Фільтр: wu_stripe_webhook_membership {#filter-wustripewebhookmembership}

Фільтрує запис про членство, пов'язаний з цим вебхуком.

Цей фільтр було додано через можливі конфлікти, які можуть виникнути, якщо одного й того ж клієнта Stripe використовують на різних сайтах.

## Параметри {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $membership | `\WP_Ultimo\Models\Membership\|false` | Об'єкт членства. |
| $event | `\Stripe\Event` | Отримання події. |

### Джерело {#source}

Визначено в [`inc/gateways/class-base-stripe-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/gateways/class-base-stripe-gateway.php#L2035) на рядку 2035
