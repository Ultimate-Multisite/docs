---
id: wu_stripe_existing_product_id
title: Filter - wu_stripe_existing_product_id
sidebar_label: wu_stripe_existing_product_id
_i18n_hash: 92eb984fe341b1ce2d56ea2eccff8100
---
# Filter: wu_stripe_existing_product_id

Filtruje ID produktu, ktorý sa má skontrolovať. Ak existuje, nové predplatné použije tento produkt.

## Parametre {#parameters}

| Názov | Typ | Popis |
|------|------|-------------|
| $product_id | `string` | ID Stripe produktu, ktorý sa má skontrolovať. |
| $name | `string` | Názov produktu. |

### Zdroj {#source}

Definované v [`inc/gateways/class-base-stripe-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/gateways/class-base-stripe-gateway.php#L2741) na riadku 2741
