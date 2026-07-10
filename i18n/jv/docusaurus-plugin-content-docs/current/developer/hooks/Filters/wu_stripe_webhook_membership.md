---
id: wu_stripe_webhook_membership
title: Saringan - wu_stripe_webhook_membership
sidebar_label: wu_stripe_webhook_membership
_i18n_hash: b39da1f6b46f6ac7af6a5674c8b5d261
---
# Filter: wu_stripe_webhook_membership {#filter-wustripewebhookmembership}

Nyaring cathetan keanggotaan sing digandhengake karo webhook iki.

Filter iki dienalake amarga ana konflik sing bisa muncul nalika pelanggan Stripe sing padha bisa digunakake ing situs sing beda-beda.

## Paramèter {#parameters}

| Jeneng | Tipe | Katrangan |
|------|------|-------------|
| $membership | `\WP_Ultimo\Models\Membership\|false` | Objek keanggotaan. |
| $event | `\Stripe\Event` | Acara sing ditampa. |

### Sumber {#source}

Ditetepake ing [`inc/gateways/class-base-stripe-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/gateways/class-base-stripe-gateway.php#L2035) ing baris 2035
