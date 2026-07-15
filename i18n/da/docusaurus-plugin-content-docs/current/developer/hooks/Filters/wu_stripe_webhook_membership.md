---
id: wu_stripe_webhook_membership
title: Filter - wu_stripe_webhook_membership
sidebar_label: wu_stripe_webhook_membership
_i18n_hash: b39da1f6b46f6ac7af6a5674c8b5d261
---
# Filter: wu_stripe_webhook_membership

Filtrerer medlemskabsregistreringen, der er knyttet til denne webhook.

Dette filter blev introduceret på grund af konflikter, der kan opstå, når den samme Stripe-kunde kan bruges på forskellige websteder.

## Parametre {#parameters}

| Navn | Type | Beskrivelse |
|------|------|-------------|
| $membership | `\WP_Ultimo\Models\Membership\|false` | Medlemskabsobjektet. |
| $event | `\Stripe\Event` | Den modtagne hændelse. |

### Kilde {#source}

Defineret i [`inc/gateways/class-base-stripe-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/gateways/class-base-stripe-gateway.php#L2035) på linje 2035
