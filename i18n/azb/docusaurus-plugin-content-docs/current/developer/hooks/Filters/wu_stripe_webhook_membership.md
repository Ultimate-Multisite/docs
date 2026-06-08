---
id: wu_stripe_webhook_membership
title: Saringan - wu_stripe_webhook_membership
sidebar_label: wu_stripe_webhook_membership
_i18n_hash: b39da1f6b46f6ac7af6a5674c8b5d261
---
# Filter: wu_stripe_webhook_membership

Bu webhook ile ilişkili üyelik kaydını filtreler.

Bu filtre, aynı Stripe müşterisinin farklı sitelerde kullanılması durumunda ortaya çıkabilecek çatışmaları gidermek için eklenmiştir.

## Parametreler

| Name | Type | Description |
|------|------|-------------|
| $membership | `\WP_Ultimo\Models\Membership\|false` | Üyelik nesnesi. |
| $event | `\Stripe\Event` | Alınan olay (event). |

### Kaynak

[`inc/gateways/class-base-stripe-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/gateways/class-base-stripe-gateway.php#L2035) dosyasının 2035. satırında tanımlanmıştır.
