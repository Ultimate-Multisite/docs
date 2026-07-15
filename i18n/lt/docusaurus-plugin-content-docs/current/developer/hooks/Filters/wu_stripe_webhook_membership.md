---
id: wu_stripe_webhook_membership
title: Filtras - wu_stripe_webhook_membership
sidebar_label: wu_stripe_webhook_membership
_i18n_hash: b39da1f6b46f6ac7af6a5674c8b5d261
---
# Filtras: wu_stripe_webhook_membership

Filtruoja narystės įrašą, susietą su šiuo webhook.

Šis filtras buvo įvestas dėl konfliktų, kurie gali kilti, kai tas pats Stripe klientas gali būti naudojamas skirtingose svetainėse.

## Parametrai {#parameters}

| Pavadinimas | Tipas | Aprašymas |
|------|------|-------------|
| $membership | `\WP_Ultimo\Models\Membership\|false` | Narystės objektas. |
| $event | `\Stripe\Event` | Gautas įvykis. |

### Šaltinis {#source}

Apibrėžta faile [`inc/gateways/class-base-stripe-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/gateways/class-base-stripe-gateway.php#L2035), 2035 eilutėje
