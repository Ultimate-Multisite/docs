---
id: wu_stripe_existing_product_id
title: Фільтр - wu_stripe_existing_product_id
sidebar_label: wu_stripe_existing_product_id
_i18n_hash: 92eb984fe341b1ce2d56ea2eccff8100
---
# Filter: wu_stripe_existing_product_id {#filter-wustripeexistingproductid}

Фільтрує ID продукту, який потрібно перевірити. Якщо він існує, нова підписка використає цей продукт.

## Параметри {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $product_id | `string` | ID продукту Stripe, який потрібно перевірити. |
| $name | `string` | Назва продукту. |

### Source {#source}

Визначено в [`inc/gateways/class-base-stripe-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/gateways/class-base-stripe-gateway.php#L2741) на рядку 2741
