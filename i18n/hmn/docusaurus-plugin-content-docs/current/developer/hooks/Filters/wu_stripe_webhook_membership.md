---
id: wu_stripe_webhook_membership
title: Lim - wu_stripe_webhook_membership
sidebar_label: wu_stripe_webhook_membership
_i18n_hash: b39da1f6b46f6ac7af6a5674c8b5d261
---
# Filter: wu_stripe_webhook_membership {#filter-wustripewebhookmembership}

Lim cov ntaub ntawv membership uas cuam tshuam nrog webhook no.

Filter no tau muab tsim los vim muaj kev sib tsoo uas tej zaum yuav tshwm sim thaum tib tus Stripe customer raug siv rau ntau lub site sib txawv.

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $membership | `\WP_Ultimo\Models\Membership\|false` | Lub membership object. |
| $event | `\Stripe\Event` | Qhov event uas tau txais. |

### Source {#source}

Tau txhais hauv [`inc/gateways/class-base-stripe-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/gateways/class-base-stripe-gateway.php#L2035) ntawm kab 2035
