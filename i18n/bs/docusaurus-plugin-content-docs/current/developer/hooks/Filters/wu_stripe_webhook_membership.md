---
id: wu_stripe_webhook_membership
title: Filter - wu_stripe_webhook_membership
sidebar_label: wu_stripe_webhook_membership
_i18n_hash: b39da1f6b46f6ac7af6a5674c8b5d261
---
# Filter: wu_stripe_webhook_membership

Filtrira članstvo (membership) povezano s ovim webhookom.

Ovaj filter je uveden zbog potencijalnih sukoba koji mogu nastati kada se isti Stripe korisnik koristi na različitim sajtovima.

## Parametri {#parameters}

| Ime | Tip | Opis |
|------|------|-------------|
| $membership | `\WP_Ultimo\Models\Membership\|false` | Objekt članstva. |
| $event | `\Stripe\Event` | Primljeni događaj (event). |

### Izvor {#source}

Definisan je u [`inc/gateways/class-base-stripe-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/gateways/class-base-stripe-gateway.php#L2035) na liniji 2035
