---
id: wu_stripe_webhook_membership
title: Criathrag - wu_stripe_webhook_membership
sidebar_label: wu_stripe_webhook_membership
_i18n_hash: b39da1f6b46f6ac7af6a5674c8b5d261
---
# Filter: wu_stripe_webhook_membership

Sìolaidh e an clàr ballrachd co-cheangailte ris a’ webhook seo.

Chaidh an filter seo a thoirt a-steach air sgàth chòmhstri a dh’fhaodadh èirigh nuair a dh’fhaodadh an aon neach-ceannach Stripe a bhith air a chleachdadh air làraichean eadar-dhealaichte.

## Paramadairean

| Ainm | Seòrsa | Tuairisgeul |
|------|------|-------------|
| $membership | `\WP_Ultimo\Models\Membership\|false` | An nì ballrachd. |
| $event | `\Stripe\Event` | An tachartas a fhuaireadh. |

### Tùs

Air a mhìneachadh ann an [`inc/gateways/class-base-stripe-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/gateways/class-base-stripe-gateway.php#L2035) aig loidhne 2035
