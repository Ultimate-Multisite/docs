---
id: wu_stripe_webhook_membership
title: Filtre - wu_stripe_webhook_membership
sidebar_label: wu_stripe_webhook_membership
_i18n_hash: b39da1f6b46f6ac7af6a5674c8b5d261
---
# Filtre: wu_stripe_webhook_membership

Filtra el registre de membresia associat a aquest webhook.

Aquest filtre es va introduir a causa de conflictes que poden sorgir quan el mateix client de Stripe es pot utilitzar en diferents llocs web (sites).

## Paràmetres {#parameters}

| Nom | Tipus | Descripció |
|------|------|-------------|
| $membership | `\WP_Ultimo\Models\Membership\|false` | L'objecte de membresia. |
| $event | `\Stripe\Event` | L'esdeveniment rebret. |

### Font {#source}

Definid a [`inc/gateways/class-base-stripe-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/gateways/class-base-stripe-gateway.php#L2035) a la línia 2035
