---
id: wu_stripe_webhook_membership
title: Filtar - wu_stripe_webhook_membership
sidebar_label: wu_stripe_webhook_membership
_i18n_hash: b39da1f6b46f6ac7af6a5674c8b5d261
---
# Filter: wu_stripe_webhook_membership {#filter-wustripewebhookmembership}

Filtrira zapis članstva povezan s ovim webhookom.

Ovaj filter uveden je zbog sukoba koji mogu nastati kada se isti Stripe kupac može koristiti na različitim siteovima.

## Parametri {#parameters}

| Naziv | Tip | Opis |
|------|------|-------------|
| $membership | `\WP_Ultimo\Models\Membership\|false` | Objekt članstva. |
| $event | `\Stripe\Event` | Primljeni događaj. |

### Izvor {#source}

Definirano u [`inc/gateways/class-base-stripe-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/gateways/class-base-stripe-gateway.php#L2035) u retku 2035
