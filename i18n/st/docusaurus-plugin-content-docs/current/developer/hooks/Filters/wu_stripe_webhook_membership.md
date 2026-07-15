---
id: wu_stripe_webhook_membership
title: Sefe - wu_stripe_webhook_membership
sidebar_label: wu_stripe_webhook_membership
_i18n_hash: b39da1f6b46f6ac7af6a5674c8b5d261
---
# Sefe: wu_stripe_webhook_membership

E sefa rekoto ya ho ba setho e amanang le webhook ena.

Sefe ena e ile ya hlahiswa ka lebaka la dikgohlano tse ka hlahang ha moreki a le mong wa Stripe a ka sebediswa ditsheng tse fapaneng.

## Dipharamitha {#parameters}

| Lebitso | Mofuta | Tlhaloso |
|------|------|-------------|
| $membership | `\WP_Ultimo\Models\Membership\|false` | Ntho ya ho ba setho. |
| $event | `\Stripe\Event` | Ketsahalo e amohetsweng. |

### Mohlodi {#source}

E hlalositswe ho [`inc/gateways/class-base-stripe-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/gateways/class-base-stripe-gateway.php#L2035) moleng wa 2035
