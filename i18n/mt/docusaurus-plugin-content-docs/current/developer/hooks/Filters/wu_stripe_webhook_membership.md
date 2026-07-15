---
id: wu_stripe_webhook_membership
title: Filtru - wu_stripe_webhook_membership
sidebar_label: wu_stripe_webhook_membership
_i18n_hash: b39da1f6b46f6ac7af6a5674c8b5d261
---
# Filter: wu_stripe_webhook_membership

Jiffiltra r-rekord tas-sħubija assoċjat ma' dan il-webhook.

Dan il-filtru ġie introdott minħabba kunflitti li jistgħu jinqalgħu meta l-istess klijent ta' Stripe jista' jintuża fuq siti differenti.

## Parametri {#parameters}

| Isem | Tip | Deskrizzjoni |
|------|------|-------------|
| $membership | `\WP_Ultimo\Models\Membership\|false` | L-oġġett tas-sħubija. |
| $event | `\Stripe\Event` | L-avveniment riċevut. |

### Sors {#source}

Definit f'[`inc/gateways/class-base-stripe-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/gateways/class-base-stripe-gateway.php#L2035) fil-linja 2035
