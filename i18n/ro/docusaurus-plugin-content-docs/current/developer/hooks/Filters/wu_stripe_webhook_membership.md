---
id: wu_stripe_webhook_membership
title: Filtru - wu_stripe_webhook_membership
sidebar_label: wu_stripe_webhook_membership
_i18n_hash: b39da1f6b46f6ac7af6a5674c8b5d261
---
# Filter: wu_stripe_webhook_membership {#filter-wustripewebhookmembership}

Filtrează înregistrarea de membru asociată cu acest webhook.

Acest filtru a fost introdus din cauza conflictelor care pot apărea atunci când același client Stripe este utilizat pe diferite site-uri.

## Parametri {#parameters}

| Nume | Tip | Descriere |
|------|------|-------------|
| $membership | `\WP_Ultimo\Models\Membership\|false` | Obiectul de membru. |
| $event | `\Stripe\Event` | Evenimentul primit. |

### Sursă {#source}

Definit în [`inc/gateways/class-base-stripe-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/gateways/class-base-stripe-gateway.php#L2035) la linia 2035
