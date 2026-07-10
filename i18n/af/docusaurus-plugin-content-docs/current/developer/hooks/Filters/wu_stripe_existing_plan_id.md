---
id: wu_stripe_existing_plan_id
title: Filter - wu_stripe_existing_plan_id
sidebar_label: wu_stripe_existing_plan_id
_i18n_hash: 153242c21b0a894c554c77872a96d1cd
---
# Filter: wu_stripe_existing_plan_id {#filter-wustripeexistingplanid}

Filter die ID van die plan wat nagegaan moet word. As hierdie bestaan, sal die nuwe subskripsie hierdie plan gebruik.

## Parameters {#parameters}

| Naam | Tipe | Beskrywing |
|------|------|-------------|
| $plan_id | `string` | Die ID van die Stripe-plan wat nagegaan moet word. |
| $membership_level | `object` | Die lidmaatskapvlak-objek. |

### Bron {#source}

Gedefinieer in [`inc/gateways/class-base-stripe-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/gateways/class-base-stripe-gateway.php#L2653) op lyn 2653
