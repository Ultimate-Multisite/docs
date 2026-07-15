---
id: wu_stripe_webhook_membership
title: Filtrační - wu_stripe_webhook_membership
sidebar_label: wu_stripe_webhook_membership
_i18n_hash: b39da1f6b46f6ac7af6a5674c8b5d261
---
# Filter: wu_stripe_webhook_membership

Filtruje záznam členství spojený s tímto webhookem.

Tento filtr byl zaveden kvůli potenciálním konfliktům, které mohou nastat, když je stejný zákazník ze Stripe použit na různých webech.

## Parametry {#parameters}

| Název | Typ | Popis |
|------|------|-------------|
| $membership | `\WP_Ultimo\Models\Membership\|false` | Objekt členství. |
| $event | `\Stripe\Event` | Přijatý událost (event). |

### Zdroj {#source}

Definováno v [`inc/gateways/class-base-stripe-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/gateways/class-base-stripe-gateway.php#L2035) na řádku 2035
