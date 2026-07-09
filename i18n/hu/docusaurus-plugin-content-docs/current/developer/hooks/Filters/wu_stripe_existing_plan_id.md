---
id: wu_stripe_existing_plan_id
title: Szűrő - wu_stripe_existing_plan_id
sidebar_label: wu_stripe_existing_plan_id
_i18n_hash: 153242c21b0a894c554c77872a96d1cd
---
# Filter: wu_stripe_existing_plan_id {#filter-wustripeexistingplanid}

Szűrőzi az azonosító tárvat, amit ellenőrizni kell. Ha az értéke megvan, az új előfizetés ezt a tervet fogja használni.

## Paraméterek {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $plan_id | `string` | Az ellenőrizendő Stripe terv azonosítója. |
| $membership_level | `object` | Tagság szint objektum. |

### Forrás {#source}

Definíciója található [`inc/gateways/class-base-stripe-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/gateways/class-base-stripe-gateway.php#L2653) fájlban, 2653-sorban.
