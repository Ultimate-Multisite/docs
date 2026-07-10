---
id: wu_stripe_webhook_membership
title: Filter - wu_stripe_webhook_membership
sidebar_label: wu_stripe_webhook_membership
_i18n_hash: b39da1f6b46f6ac7af6a5674c8b5d261
---
# Filter: wu_stripe_webhook_membership {#filter-wustripewebhookmembership}

Sinusuri (filters) nito ang record ng membership na nauugnay sa webhook na ito.

Ipinakilala ang filter na ito dahil sa mga posibleng pagkakasalungatan (conflicts) na maaaring mangyari kapag ang iisang Stripe customer ay ginagamit sa iba't ibang site.

## Mga Parameter {#parameters}

| Name | Type | Deskripsyon |
|------|------|-------------|
| $membership | `\WP_Ultimo\Models\Membership\|false` | Ang membership object. |
| $event | `\Stripe\Event` | Ang event na natanggap. |

### Pinagmulan {#source}

Tinukoy sa [`inc/gateways/class-base-stripe-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/gateways/class-base-stripe-gateway.php#L2035) sa linya 2035
