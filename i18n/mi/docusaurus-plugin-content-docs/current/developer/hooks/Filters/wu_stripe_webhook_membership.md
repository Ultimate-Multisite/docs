---
id: wu_stripe_webhook_membership
title: Tātari - wu_stripe_webhook_membership
sidebar_label: wu_stripe_webhook_membership
_i18n_hash: b39da1f6b46f6ac7af6a5674c8b5d261
---
# Tātari: wu_stripe_webhook_membership

Ka tātari i te pūkete mematanga e pā ana ki tēnei webhook.

I whakaurua tēnei tātari nā ngā papā ka ara ake ina whakamahia pea taua kiritaki Stripe kotahi ki ngā pae rerekē.

## Ngā Tawhā {#parameters}

| Ingoa | Momo | Whakaahuatanga |
|------|------|-------------|
| $membership | `\WP_Ultimo\Models\Membership\|false` | Te ahanoa mematanga. |
| $event | `\Stripe\Event` | Te takahanga kua tae mai. |

### Pūtake {#source}

Kua tautuhia ki [`inc/gateways/class-base-stripe-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/gateways/class-base-stripe-gateway.php#L2035) i te rārangi 2035
