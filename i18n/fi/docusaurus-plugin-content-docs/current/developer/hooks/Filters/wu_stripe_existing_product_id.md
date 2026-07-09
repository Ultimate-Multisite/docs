---
id: wu_stripe_existing_product_id
title: Suodatin – wu_stripe_existing_product_id
sidebar_label: wu_stripe_existing_product_id
_i18n_hash: 92eb984fe341b1ce2d56ea2eccff8100
---
# Filter: wu_stripe_existing_product_id

Suodattaa tuotteen ID:n, jota tarkistetaan. Jos tämä on olemassa, uusi tilaus käyttää tätä tuotetta.

## Parametrit

| Name | Type | Description |
|------|------|-------------|
| $product_id | `string` | Tarkistettavan Stripe-tuotteen ID. |
| $name | `string` | Tuotteen nimi. |

### Lähde

Määritelty tiedostossa [`inc/gateways/class-base-stripe-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/gateways/class-base-stripe-gateway.php#L2741) rivillä 2741
