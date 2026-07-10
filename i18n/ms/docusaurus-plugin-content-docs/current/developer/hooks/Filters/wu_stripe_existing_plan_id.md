---
id: wu_stripe_existing_plan_id
title: Penapis - wu_stripe_existing_plan_id
sidebar_label: wu_stripe_existing_plan_id
_i18n_hash: 153242c21b0a894c554c77872a96d1cd
---
# Filter: wu_stripe_existing_plan_id {#filter-wustripeexistingplanid}

Filter ini berfungsi untuk memeriksa ID pelan. Jika ID ini wujud, langganan baharu akan menggunakan pelan tersebut.

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $plan_id | `string` | ID pelan Stripe yang perlu diperiksa. |
| $membership_level | `object` | Objek tahap keahlian. |

### Source {#source}

Didefinisikan dalam [`inc/gateways/class-base-stripe-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/gateways/class-base-stripe-gateway.php#L2653) pada baris 2653
