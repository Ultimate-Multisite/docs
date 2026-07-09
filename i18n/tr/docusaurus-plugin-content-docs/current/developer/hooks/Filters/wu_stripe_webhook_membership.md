---
id: wu_stripe_webhook_membership
title: Filtre - wu_stripe_webhook_membership
sidebar_label: wu_stripe_webhook_membership
_i18n_hash: b39da1f6b46f6ac7af6a5674c8b5d261
---
# Filter: wu_stripe_webhook_membership {#filter-wustripewebhookmembership}

Bu webhook ile ilişkili üyelik kaydını filtreler.

Bu filtre, aynı Stripe müşterisinin farklı sitelerde kullanılması durumunda ortaya çıkabilecek çakışmalardan dolayı eklenmiştir.

## Parametreler {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $membership | `\WP_Ultimo\Models\Membership\|false` | Üyelik nesnesi. |
| $event | `\Stripe\Event` | Alınan etkinlik (event). |

### Kaynak {#source}

[`inc/gateways/class-base-stripe-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/gateways/class-base-stripe-gateway.php#L2035) adresinde 2035. satırda tanımlanmıştır.
