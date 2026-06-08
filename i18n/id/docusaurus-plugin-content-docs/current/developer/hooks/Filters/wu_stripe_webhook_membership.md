---
id: wu_stripe_webhook_membership
title: Filter - wu_stripe_webhook_membership
sidebar_label: wu_stripe_webhook_membership
_i18n_hash: b39da1f6b46f6ac7af6a5674c8b5d261
---
# Filter: wu_stripe_webhook_membership

Memfilter catatan keanggotaan yang terkait dengan webhook ini.

Filter ini diperkenalkan karena potensi konflik yang mungkin muncul ketika pelanggan Stripe yang sama digunakan di situs yang berbeda.

## Parameter

| Nama | Tipe | Deskripsi |
|------|------|-------------|
| $membership | `\WP_Ultimo\Models\Membership\|false` | Objek keanggotaan. |
| $event | `\Stripe\Event` | Event yang diterima. |

### Sumber

Didefinisikan di [`inc/gateways/class-base-stripe-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/gateways/class-base-stripe-gateway.php#L2035) pada baris 2035
