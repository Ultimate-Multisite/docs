---
id: wu_stripe_existing_product_id
title: Filter - wu_stripe_existing_product_id
sidebar_label: wu_stripe_existing_product_id
_i18n_hash: 92eb984fe341b1ce2d56ea2eccff8100
---
# Filter: wu_stripe_existing_product_id {#filter-wustripeexistingproductid}

Filtruje ID produktu, které má být zkontrolováno. Pokud toto ID existuje, nové předplatné bude používat tento produkt.

## Parametry {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $product_id | `string` | ID produktu Stripe, které má být zkontrolováno. |
| $name | `string` | Název produktu. |

### Zdroj {#source}

Definováno v [`inc/gateways/class-base-stripe-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/gateways/class-base-stripe-gateway.php#L2741) na řádku 2741
