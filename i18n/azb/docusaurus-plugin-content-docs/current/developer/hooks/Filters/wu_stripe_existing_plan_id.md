---
id: wu_stripe_existing_plan_id
title: Filter - wu_stripe_existing_plan_id
sidebar_label: wu_stripe_existing_plan_id
_i18n_hash: 153242c21b0a894c554c77872a96d1cd
---
# Filter: wu_stripe_existing_plan_id {#filter-wustripeexistingplanid}

Bu filter, kontrol edilecek planın ID'sini filtreler. Eğer bu ID mevcutsa, yeni abonelik bu planı kullanacaktır.

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $plan_id | `string` | Kontrol edilecek Stripe planının ID'si. |
| $membership_level | `object` | Üyelik seviyesi nesnesi. |

### Source {#source}

Defined in [`inc/gateways/class-base-stripe-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/gateways/class-base-stripe-gateway.php#L2653) at line 2653
