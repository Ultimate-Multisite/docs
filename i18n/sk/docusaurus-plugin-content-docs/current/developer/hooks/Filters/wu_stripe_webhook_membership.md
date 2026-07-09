---
id: wu_stripe_webhook_membership
title: Filter - wu_stripe_webhook_membership
sidebar_label: wu_stripe_webhook_membership
_i18n_hash: b39da1f6b46f6ac7af6a5674c8b5d261
---
# Filter: wu_stripe_webhook_membership {#filter-wustripewebhookmembership}

Filtruje záznam členstva spojený s týmto webhookom.

Tento filter bol zavedený z dôvodu konfliktov, ktoré môžu vzniknúť, keď sa ten istý Stripe zákazník používa na rôznych lokalitách.

## Parametre {#parameters}

| Názov | Typ | Popis |
|------|------|-------------|
| $membership | `\WP_Ultimo\Models\Membership\|false` | Objekt členstva. |
| $event | `\Stripe\Event` | Prijatá udalosť. |

### Zdroj {#source}

Definované v [`inc/gateways/class-base-stripe-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/gateways/class-base-stripe-gateway.php#L2035) na riadku 2035
