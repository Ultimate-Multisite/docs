---
id: wu_stripe_webhook_membership
title: Filtrs - wu_stripe_webhook_membership
sidebar_label: wu_stripe_webhook_membership
_i18n_hash: b39da1f6b46f6ac7af6a5674c8b5d261
---
# Filter: wu_stripe_webhook_membership

Filtrē dalības ierakstu, kas saistīts ar šo webhook.

Šis filtrs tika ieviests konfliktu dēļ, kas var rasties, ja viens un tas pats Stripe klients tiek izmantots dažādās vietnēs.

## Parametri {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $membership | `\WP_Ultimo\Models\Membership\|false` | Dalības objekts. |
| $event | `\Stripe\Event` | Saņemtais notikums. |

### Avots {#source}

Definēts [`inc/gateways/class-base-stripe-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/gateways/class-base-stripe-gateway.php#L2035) 2035. rindā
