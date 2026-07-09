---
id: wu_stripe_webhook_membership
title: Tace - wu_stripe_webhook_membership
sidebar_label: wu_stripe_webhook_membership
_i18n_hash: b39da1f6b46f6ac7af6a5674c8b5d261
---
# Filter: wu_stripe_webhook_membership

Yana tace rikodin membobinci da ke da alaƙa da wannan webhook.

An gabatar da wannan filter ne saboda rikice-rikicen da za su iya tasowa idan ana amfani da abokin cinikin Stripe ɗaya a shafuka daban-daban.

## Sigogi

| Suna | Iri | Bayani |
|------|------|-------------|
| $membership | `\WP_Ultimo\Models\Membership\|false` | Abun membobinci. |
| $event | `\Stripe\Event` | Lamarin da aka karɓa. |

### Tushe

An ayyana a cikin [`inc/gateways/class-base-stripe-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/gateways/class-base-stripe-gateway.php#L2035) a layi na 2035
