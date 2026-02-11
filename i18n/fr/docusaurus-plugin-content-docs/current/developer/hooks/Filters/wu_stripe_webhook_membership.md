---
id: wu_stripe_webhook_membership
title: Filtre - wu_stripe_webhook_membership
sidebar_label: wu_stripe_webhook_membership
_i18n_hash: b39da1f6b46f6ac7af6a5674c8b5d261
---
# Filtre : wu_stripe_webhook_membership

Filtre l'enregistrement d'adhésion associé à ce webhook.

Ce filtre a été introduit en raison des conflits pouvant survenir lorsque le même client Stripe est utilisé sur différents sites.

## Paramètres

| Nom | Type | Description |
|------|------|-------------|
| $membership | `\WP_Ultimo\Models\Membership\|false` | L'objet d'adhésion. |
| $event | `\Stripe\Event` | L'événement reçu. |

### Source

Defined in [`inc/gateways/class-base-stripe-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/gateways/class-base-stripe-gateway.php#L2035) at line 2035
