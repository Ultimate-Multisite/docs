---
id: wu_stripe_webhook_membership
title: Fyuluta - wu_stripe_webhook_membership
sidebar_label: wu_stripe_webhook_membership
_i18n_hash: b39da1f6b46f6ac7af6a5674c8b5d261
---
# Fyuluta: wu_stripe_webhook_membership {#filter-wustripewebhookmembership}

Imasefa mbiri ya umembala yogwirizana ndi webhook iyi.

Fyuluta iyi inayambitsidwa chifukwa cha mikangano yomwe ingabuke pamene kasitomala yemweyo wa Stripe angagwiritsidwe ntchito pa masaiti osiyanasiyana.

## Ma parameter {#parameters}

| Dzina | Mtundu | Kufotokozera |
|------|------|-------------|
| $membership | `\WP_Ultimo\Models\Membership\|false` | Chinthu cha umembala. |
| $event | `\Stripe\Event` | Chochitika cholandiridwa. |

### Gwero {#source}

Yafotokozedwa mu [`inc/gateways/class-base-stripe-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/gateways/class-base-stripe-gateway.php#L2035) pa mzere 2035
