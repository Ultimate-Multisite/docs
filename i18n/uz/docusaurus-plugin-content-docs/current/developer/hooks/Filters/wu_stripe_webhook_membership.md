---
id: wu_stripe_webhook_membership
title: Filtr - wu_stripe_webhook_membership
sidebar_label: wu_stripe_webhook_membership
_i18n_hash: b39da1f6b46f6ac7af6a5674c8b5d261
---
# Filtr: wu_stripe_webhook_membership

Ushbu webhook bilan bog‘liq a’zolik yozuvini filtrlaydi.

Bu filtr bir xil Stripe mijozi turli saytlarda ishlatilganda yuzaga kelishi mumkin bo‘lgan ziddiyatlar sabab joriy qilingan.

## Parametrlar {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $membership | `\WP_Ultimo\Models\Membership\|false` | A’zolik obyekti. |
| $event | `\Stripe\Event` | Qabul qilingan voqea. |

### Manba {#source}

2035-qatorda [`inc/gateways/class-base-stripe-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/gateways/class-base-stripe-gateway.php#L2035) da belgilangan
