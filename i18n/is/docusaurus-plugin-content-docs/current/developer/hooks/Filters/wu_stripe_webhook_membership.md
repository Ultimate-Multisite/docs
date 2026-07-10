---
id: wu_stripe_webhook_membership
title: Sía - wu_stripe_webhook_membership
sidebar_label: wu_stripe_webhook_membership
_i18n_hash: b39da1f6b46f6ac7af6a5674c8b5d261
---
# Filter: wu_stripe_webhook_membership {#filter-wustripewebhookmembership}

Síar aðildarfærsluna sem tengist þessum vefkróki.

Þessi sía var kynnt vegna árekstra sem geta komið upp þegar sami Stripe-viðskiptavinur er notaður á mismunandi vefsvæðum.

## Færibreytur {#parameters}

| Heiti | Tegund | Lýsing |
|------|------|-------------|
| $membership | `\WP_Ultimo\Models\Membership\|false` | Aðildarhluturinn. |
| $event | `\Stripe\Event` | Atburðurinn sem móttekinn var. |

### Uppruni {#source}

Skilgreint í [`inc/gateways/class-base-stripe-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/gateways/class-base-stripe-gateway.php#L2035) í línu 2035
