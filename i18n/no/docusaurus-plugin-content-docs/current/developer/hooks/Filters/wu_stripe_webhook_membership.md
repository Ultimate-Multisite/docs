---
id: wu_stripe_webhook_membership
title: Filter - wu_stripe_webhook_membership
sidebar_label: wu_stripe_webhook_membership
_i18n_hash: b39da1f6b46f6ac7af6a5674c8b5d261
---
# Filter: wu_stripe_webhook_membership

Filtrerer medlemskapsoppføringen knyttet til denne webhooken.

Dette filteret ble introdusert på grunn av konflikter som kan oppstå når samme Stripe-kunde brukes på forskjellige nettsteder.

## Parametere {#parameters}

| Navn | Type | Beskrivelse |
|------|------|-------------|
| $membership | `\WP_Ultimo\Models\Membership\|false` | Medlemskapsobjektet. |
| $event | `\Stripe\Event` | Hendelsen som ble mottatt. |

### Kilde {#source}

Definert i [`inc/gateways/class-base-stripe-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/gateways/class-base-stripe-gateway.php#L2035) på linje 2035
