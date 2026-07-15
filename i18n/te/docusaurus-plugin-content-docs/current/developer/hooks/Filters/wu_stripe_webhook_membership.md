---
id: wu_stripe_webhook_membership
title: Filter - wu_stripe_webhook_membership
sidebar_label: wu_stripe_webhook_membership
_i18n_hash: b39da1f6b46f6ac7af6a5674c8b5d261
---
# Filter: wu_stripe_webhook_membership

ఈ వెబ్‌హుక్ తో అనుబంధంగా ఉన్న సభ్యత్వ రికార్డ్‌ను ఫిల్టర్ చేస్తుంది.

ఒకే Stripe కస్టమర్‌ను వేర్వేరు సైట్‌లలో ఉపయోగించినప్పుడు వచ్చే సంఘర్షణల (conflicts) కారణంగా ఈ ఫిల్టర్‌ను జోడించాము.

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $membership | `\WP_Ultimo\Models\Membership\|false` | సభ్యత్వ ఆబ్జెక్ట్. |
| $event | `\Stripe\Event` | అందుకున్న ఈవెంట్. |

### Source {#source}

Defined in [`inc/gateways/class-base-stripe-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/gateways/class-base-stripe-gateway.php#L2035) at line 2035
