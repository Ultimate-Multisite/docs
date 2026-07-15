---
id: wu_stripe_webhook_membership
title: Filtër - wu_stripe_webhook_membership
sidebar_label: wu_stripe_webhook_membership
_i18n_hash: b39da1f6b46f6ac7af6a5674c8b5d261
---
# Filter: wu_stripe_webhook_membership

Filtron rekordin e anëtarësimit të lidhur me këtë webhook.

Ky filter u prezantua për shkak të konflikteve që mund të lindin kur i njëjti klient Stripe mund të përdoret në site të ndryshme.

## Parametrat {#parameters}

| Emri | Type | Përshkrimi |
|------|------|-------------|
| $membership | `\WP_Ultimo\Models\Membership\|false` | Objekti i anëtarësimit. |
| $event | `\Stripe\Event` | Event-i i marrë. |

### Burimi {#source}

Përcaktuar në [`inc/gateways/class-base-stripe-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/gateways/class-base-stripe-gateway.php#L2035) në rreshtin 2035
