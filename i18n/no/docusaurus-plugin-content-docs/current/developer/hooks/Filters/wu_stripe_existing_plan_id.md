---
id: wu_stripe_existing_plan_id
title: Filter - wu_stripe_existing_plan_id
sidebar_label: wu_stripe_existing_plan_id
_i18n_hash: 153242c21b0a894c554c77872a96d1cd
---
# Filter: wu_stripe_existing_plan_id

Filtrerer ID-en til planen som skal sjekkes. Hvis denne eksisterer, vil det nye abonnementet bruke denne planen.

## Parametere {#parameters}

| Navn | Type | Beskrivelse |
|------|------|-------------|
| $plan_id | `string` | ID-en til Stripe-planen som skal sjekkes. |
| $membership_level | `object` | Objektet for medlemskapsnivå. |

### Kilde {#source}

Definert i [`inc/gateways/class-base-stripe-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/gateways/class-base-stripe-gateway.php#L2653) på linje 2653
