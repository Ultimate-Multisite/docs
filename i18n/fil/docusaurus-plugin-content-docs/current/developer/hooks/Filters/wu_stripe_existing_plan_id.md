---
id: wu_stripe_existing_plan_id
title: Filter - wu_stripe_existing_plan_id
sidebar_label: wu_stripe_existing_plan_id
_i18n_hash: 153242c21b0a894c554c77872a96d1cd
---
# Filter: wu_stripe_existing_plan_id {#filter-wustripeexistingplanid}

Sinusuri nito ang ID ng plan na titingnan. Kung umiiral ang ID na ito, gagamitin ng bagong subscription ang plan na ito.

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $plan_id | `string` | ID ng Stripe plan na titingnan. |
| $membership_level | `object` | Object ng membership level. |

### Source {#source}

Tinutukoy sa [`inc/gateways/class-base-stripe-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/gateways/class-base-stripe-gateway.php#L2653) sa linya 2653
