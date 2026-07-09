---
id: wu_stripe_webhook_membership
title: Филтер - wu_stripe_webhook_membership
sidebar_label: wu_stripe_webhook_membership
_i18n_hash: b39da1f6b46f6ac7af6a5674c8b5d261
---
# Филтер: wu_stripe_webhook_membership {#filter-wustripewebhookmembership}

Го филтрира записот за членство поврзан со овој webhook.

Овој филтер беше воведен поради конфликти што може да настанат кога истиот Stripe клиент може да се користи на различни сајтови.

## Параметри {#parameters}

| Име | Тип | Опис |
|------|------|-------------|
| $membership | `\WP_Ultimo\Models\Membership\|false` | Објектот за членство. |
| $event | `\Stripe\Event` | Примениот настан. |

### Извор {#source}

Дефинирано во [`inc/gateways/class-base-stripe-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/gateways/class-base-stripe-gateway.php#L2035) на линија 2035
