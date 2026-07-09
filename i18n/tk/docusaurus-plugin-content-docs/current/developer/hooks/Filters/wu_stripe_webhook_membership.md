---
id: wu_stripe_webhook_membership
title: Süzgüç - wu_stripe_webhook_membership
sidebar_label: wu_stripe_webhook_membership
_i18n_hash: b39da1f6b46f6ac7af6a5674c8b5d261
---
# Filter: wu_stripe_webhook_membership {#filter-wustripewebhookmembership}

Bu webhook bilen baglanyşykly agzalyk ýazgysyny süzýär.

Bu filter, şol bir Stripe müşderisi dürli saýtlarda ulanylanda ýüze çykyp biljek gapma-garşylyklar sebäpli girizildi.

## Parametrler {#parameters}

| Ady | Görnüşi | Beýany |
|------|------|-------------|
| $membership | `\WP_Ultimo\Models\Membership\|false` | Agzalyk obýekti. |
| $event | `\Stripe\Event` | Alnan waka. |

### Çeşme {#source}

[`inc/gateways/class-base-stripe-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/gateways/class-base-stripe-gateway.php#L2035) içinde 2035-nji setirde kesgitlenen.
