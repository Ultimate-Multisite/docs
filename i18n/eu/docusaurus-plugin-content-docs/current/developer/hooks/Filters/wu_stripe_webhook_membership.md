---
id: wu_stripe_webhook_membership
title: Iragazkia - wu_stripe_webhook_membership
sidebar_label: wu_stripe_webhook_membership
_i18n_hash: b39da1f6b46f6ac7af6a5674c8b5d261
---
# Iragazkia: wu_stripe_webhook_membership {#filter-wustripewebhookmembership}

Webhook honekin lotutako membership erregistroa iragazten du.

Iragazki hau Stripe bezero bera gune desberdinetan erabil daitekeenean sor daitezkeen gatazkengatik sartu zen.

## Parametroak {#parameters}

| Izena | Mota | Deskribapena |
|------|------|-------------|
| $membership | `\WP_Ultimo\Models\Membership\|false` | Membership objektua. |
| $event | `\Stripe\Event` | Jasotako event-a. |

### Iturria {#source}

[`inc/gateways/class-base-stripe-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/gateways/class-base-stripe-gateway.php#L2035) fitxategian definitua, 2035. lerroan
