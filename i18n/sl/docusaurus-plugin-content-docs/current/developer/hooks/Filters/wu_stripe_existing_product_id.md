---
id: wu_stripe_existing_product_id
title: Filter - wu_stripe_existing_product_id
sidebar_label: wu_stripe_existing_product_id
_i18n_hash: 92eb984fe341b1ce2d56ea2eccff8100
---
# Filter: wu_stripe_existing_product_id

Filtrira ID izdelka, ki ga je treba preveriti. Če ta obstaja, bo nova naročnina uporabila ta izdelek.

## Parametri

| Name | Type | Description |
|------|------|-------------|
| $product_id | `string` | ID Stripe izdelka, ki ga je treba preveriti. |
| $name | `string` | Ime izdelka. |

### Vir

Določeno v [`inc/gateways/class-base-stripe-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/gateways/class-base-stripe-gateway.php#L2741) v vrstici 2741
