---
id: wu_stripe_webhook_membership
title: Filter - wu_stripe_webhook_membership
sidebar_label: wu_stripe_webhook_membership
_i18n_hash: b39da1f6b46f6ac7af6a5674c8b5d261
---
# Filter: wu_stripe_webhook_membership {#filter-wustripewebhookmembership}

Filtrira zapis članstva, povezan s tem webhookom.

Ta filter je bil uveden zaradi konfliktov, ki lahko nastanejo, ko se isti Stripe kupec uporablja na različnih spletiščih.

## Parametri {#parameters}

| Ime | Vrsta | Opis |
|------|------|-------------|
| $membership | `\WP_Ultimo\Models\Membership\|false` | Objekt članstva. |
| $event | `\Stripe\Event` | Prejeti dogodek. |

### Vir {#source}

Določeno v [`inc/gateways/class-base-stripe-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/gateways/class-base-stripe-gateway.php#L2035) v vrstici 2035
