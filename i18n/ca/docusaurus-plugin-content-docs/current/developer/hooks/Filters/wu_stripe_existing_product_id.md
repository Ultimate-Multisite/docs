---
id: wu_stripe_existing_product_id
title: Filtre - wu_stripe_existing_product_id
sidebar_label: wu_stripe_existing_product_id
_i18n_hash: 92eb984fe341b1ce2d56ea2eccff8100
---
# Filter: wu_stripe_existing_product_id

Filtra l'ID del producte que s'ha de comprovar. Si aquest ID existeix, la nova subscripció utilitzarà aquest producte.

## Paràmetres {#parameters}

| Nom | Tipus | Descripció |
|------|------|-------------|
| $product_id | `string` | ID del producte de Stripe a comprovar. |
| $name | `string` | Nom del producte. |

### Font {#source}

Definit a [`inc/gateways/class-base-stripe-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/gateways/class-base-stripe-gateway.php#L2741) a la línia 2741
