---
id: wu_stripe_webhook_membership
title: Filtrum - wu_stripe_webhook_membership
sidebar_label: wu_stripe_webhook_membership
_i18n_hash: b39da1f6b46f6ac7af6a5674c8b5d261
---
# Filtrum: wu_stripe_webhook_membership

Colat commentarium sodalitatis huic webhook consociatum.

Hoc filtrum introductum est propter conflictus qui oriri possunt cum idem cliens Stripe in diversis sitibus adhiberi potest.

## Parametri {#parameters}

| Nomen | Typus | Descriptio |
|------|------|-------------|
| $membership | `\WP_Ultimo\Models\Membership\|false` | Obiectum sodalitatis. |
| $event | `\Stripe\Event` | Eventus acceptus. |

### Fons {#source}

Definitum in [`inc/gateways/class-base-stripe-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/gateways/class-base-stripe-gateway.php#L2035) linea 2035
