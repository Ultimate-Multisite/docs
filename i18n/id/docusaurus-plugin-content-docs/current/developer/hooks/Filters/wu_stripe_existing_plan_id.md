---
id: wu_stripe_existing_plan_id
title: Filter - wu_stripe_existing_plan_id
sidebar_label: wu_stripe_existing_plan_id
_i18n_hash: 153242c21b0a894c554c77872a96d1cd
---
# Filter: wu_stripe_existing_plan_id {#filter-wustripeexistingplanid}

Memfilter ID rencana yang akan diperiksa. Jika ID ini ditemukan, langganan baru akan menggunakan rencana tersebut.

## Parameter {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $plan_id | `string` | ID rencana Stripe yang akan diperiksa. |
| $membership_level | `object` | Objek tingkat keanggotaan. |

### Sumber {#source}

Didefinisikan di [`inc/gateways/class-base-stripe-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/gateways/class-base-stripe-gateway.php#L2653) pada baris 2653
