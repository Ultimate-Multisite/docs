---
id: wu_stripe_webhook_membership
title: Фильтр - wu_stripe_webhook_membership
sidebar_label: wu_stripe_webhook_membership
_i18n_hash: b39da1f6b46f6ac7af6a5674c8b5d261
---
# Фильтр: wu_stripe_webhook_membership

Бу webhook белән бәйле әгъзалык язмасын фильтрлый.

Бу фильтр бер үк Stripe клиенты төрле сайтларда кулланылганда килеп чыгарга мөмкин булган каршылыклар аркасында кертелде.

## Параметрлар

| Исем | Төр | Тасвирлама |
|------|------|-------------|
| $membership | `\WP_Ultimo\Models\Membership\|false` | Әгъзалык объекты. |
| $event | `\Stripe\Event` | Кабул ителгән вакыйга. |

### Чыганак

[`inc/gateways/class-base-stripe-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/gateways/class-base-stripe-gateway.php#L2035) эчендә 2035 нче юлда билгеләнгән
