---
id: wu_stripe_webhook_membership
title: Filtè - wu_stripe_webhook_membership
sidebar_label: wu_stripe_webhook_membership
_i18n_hash: b39da1f6b46f6ac7af6a5674c8b5d261
---
# Filtè: wu_stripe_webhook_membership {#filter-wustripewebhookmembership}

Filtre dosye membership ki asosye ak webhook sa a.

Filtè sa a te prezante akoz konfli ki ka parèt lè menm kliyan Stripe la ka itilize sou diferan sit.

## Paramèt {#parameters}

| Non | Tip | Deskripsyon |
|------|------|-------------|
| $membership | `\WP_Ultimo\Models\Membership\|false` | Objè membership lan. |
| $event | `\Stripe\Event` | Evènman ki resevwa a. |

### Sous {#source}

Defini nan [`inc/gateways/class-base-stripe-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/gateways/class-base-stripe-gateway.php#L2035) nan liy 2035
