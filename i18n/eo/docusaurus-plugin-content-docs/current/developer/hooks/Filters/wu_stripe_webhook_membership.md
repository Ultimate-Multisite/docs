---
id: wu_stripe_webhook_membership
title: Filtro - wu_stripe_webhook_membership
sidebar_label: wu_stripe_webhook_membership
_i18n_hash: b39da1f6b46f6ac7af6a5674c8b5d261
---
# Filtrilo: wu_stripe_webhook_membership

Filtras la membrecan rikordon asociitan kun ĉi tiu ret-hoko.

Ĉi tiu filtrilo estis enkondukita pro konfliktoj kiuj povas ekesti kiam la sama Stripe kliento povas esti uzata en malsamaj retejoj.

## Parametroj {#parameters}

| Nomo | Tipo | Priskribo |
|------|------|-------------|
| $membership | `\WP_Ultimo\Models\Membership\|false` | La membreca objekto. |
| $event | `\Stripe\Event` | La ricevita evento. |

### Fonto {#source}

Difinita en [`inc/gateways/class-base-stripe-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/gateways/class-base-stripe-gateway.php#L2035) ĉe linio 2035
