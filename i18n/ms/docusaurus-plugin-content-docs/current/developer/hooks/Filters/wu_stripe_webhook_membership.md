---
id: wu_stripe_webhook_membership
title: Penapis - wu_stripe_webhook_membership
sidebar_label: wu_stripe_webhook_membership
_i18n_hash: b39da1f6b46f6ac7af6a5674c8b5d261
---
# Filter: wu_stripe_webhook_membership

Menapis rekod keahlian yang dikaitkan dengan webhook ini.

Filter ini diperkenalkan kerana konflik yang mungkin timbul apabila pelanggan Stripe yang sama digunakan pada pelbagai tapak (sites) yang berbeza.

## Parameter

| Name | Type | Description |
|------|------|-------------|
| $membership | `\WP_Ultimo\Models\Membership\|false` | Objek keahlian. |
| $event | `\Stripe\Event` | Acara (event) yang diterima. |

### Sumber

Didefinisikan dalam [`inc/gateways/class-base-stripe-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/gateways/class-base-stripe-gateway.php#L2035) pada baris 2035
