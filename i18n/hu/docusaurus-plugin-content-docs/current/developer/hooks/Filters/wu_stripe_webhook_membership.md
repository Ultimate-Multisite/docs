---
id: wu_stripe_webhook_membership
title: Szűrő - wu_stripe_webhook_membership
sidebar_label: wu_stripe_webhook_membership
_i18n_hash: b39da1f6b46f6ac7af6a5674c8b5d261
---
# Filter: wu_stripe_webhook_membership

Szűrőzi a webhook-hoz kapcsolódó tagsági adatot.

Ezt a szűrőt azért hozták létre, mert konfliktusok léphetnek fel, ha ugyanaz a Stripe ügyfél használatos más weboldalakon.

## Paraméterek {#parameters}

| Neve | Típus | Leírás |
|------|------|-------------|
| $membership | `\WP_Ultimo\Models\Membership\|false` | A tagsági objektum. |
| $event | `\Stripe\Event` | A megkapott esemény. |

### Forrás {#source}

Definíciója található [`inc/gateways/class-base-stripe-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/gateways/class-base-stripe-gateway.php#L2035) fájlban, 2035-ös soron.
