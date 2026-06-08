---
id: wu_stripe_webhook_membership
title: Filter - wu_stripe_webhook_membership
sidebar_label: wu_stripe_webhook_membership
_i18n_hash: b39da1f6b46f6ac7af6a5674c8b5d261
---
# Filter: wu_stripe_webhook_membership

Filtrerar medlemskapsregistret som är kopplat till denna webhook.

Detta filter introducerades på grund av konflikter som kan uppstå när samma Stripe-kund används på olika webbplatser.

## Parametrar

| Namn | Typ | Beskrivning |
|------|------|-------------|
| $membership | `\WP_Ultimo\Models\Membership\|false` | Medlemskapsobjektet. |
| $event | `\Stripe\Event` | Händelsen som mottagits. |

### Källa

Definieras i [`inc/gateways/class-base-stripe-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/gateways/class-base-stripe-gateway.php#L2035) på rad 2035
