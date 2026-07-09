---
id: wu_stripe_existing_plan_id
title: Suodatin - wu_stripe_existing_plan_id
sidebar_label: wu_stripe_existing_plan_id
_i18n_hash: 153242c21b0a894c554c77872a96d1cd
---
# Suodatin: wu_stripe_existing_plan_id

Suodattaa planin ID:n, jota tarkistetaan. Jos tämä on olemassa, uusi tilaus käyttää tätä plania.

## Parametrit

| Nimi | Tyyppi | Kuvaus |
|------|------|-------------|
| $plan_id | `string` | Tarkistettavan Stripe planin ID. |
| $membership_level | `object` | Jäsenyystason objekti. |

### Lähde

Määritelty tiedostossa [`inc/gateways/class-base-stripe-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/gateways/class-base-stripe-gateway.php#L2653) rivillä 2653
