---
id: wu_stripe_webhook_membership
title: Филтр - wu_stripe_webhook_membership
sidebar_label: wu_stripe_webhook_membership
_i18n_hash: b39da1f6b46f6ac7af6a5674c8b5d261
---
# Филтр: wu_stripe_webhook_membership

Сабти узвиятро, ки бо ин webhook алоқаманд аст, филтр мекунад.

Ин филтр бо сабаби ихтилофҳое ҷорӣ карда шуд, ки метавонанд вақте ба миён оянд, ки ҳамон як муштарии Stripe метавонад дар сайтҳои гуногун истифода шавад.

## Параметрҳо

| Ном | Навъ | Тавсиф |
|------|------|-------------|
| $membership | `\WP_Ultimo\Models\Membership\|false` | Объекти узвият. |
| $event | `\Stripe\Event` | Рӯйдоди қабулшуда. |

### Манбаъ

Дар [`inc/gateways/class-base-stripe-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/gateways/class-base-stripe-gateway.php#L2035) дар сатри 2035 муайян шудааст
