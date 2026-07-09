---
id: wu_stripe_existing_product_id
title: Filtr - wu_stripe_existing_product_id
sidebar_label: wu_stripe_existing_product_id
_i18n_hash: 92eb984fe341b1ce2d56ea2eccff8100
---
# Filter: wu_stripe_existing_product_id {#filter-wustripeexistingproductid}

Filtruje ID produktu, który ma zostać sprawdzony. Jeśli to ID istnieje, nowa subskrypcja będzie używać tego produktu.

## Parametry {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $product_id | `string` | ID produktu Stripe, który ma zostać sprawdzony. |
| $name | `string` | Nazwa produktu. |

### Źródło {#source}

Zdefiniowane w [`inc/gateways/class-base-stripe-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/gateways/class-base-stripe-gateway.php#L2741) w linii 2741
