---
id: wu_stripe_webhook_membership
title: Saringan - wu_stripe_webhook_membership
sidebar_label: wu_stripe_webhook_membership
_i18n_hash: b39da1f6b46f6ac7af6a5674c8b5d261
---
# Saringan: wu_stripe_webhook_membership

Nyaring catetan kaanggotaan anu pakait jeung webhook ieu.

Saringan ieu diwanohkeun alatan konflik anu bisa muncul nalika customer Stripe anu sarua bisa dipaké dina situs anu béda.

## Paraméter {#parameters}

| Ngaran | Tipe | Pedaran |
|------|------|-------------|
| $membership | `\WP_Ultimo\Models\Membership\|false` | Objék kaanggotaan. |
| $event | `\Stripe\Event` | Kajadian anu ditarima. |

### Sumber {#source}

Ditetepkeun dina [`inc/gateways/class-base-stripe-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/gateways/class-base-stripe-gateway.php#L2035) dina garis 2035
