---
id: wu_stripe_existing_product_id
title: Филтър - wu_stripe_existing_product_id
sidebar_label: wu_stripe_existing_product_id
_i18n_hash: 92eb984fe341b1ce2d56ea2eccff8100
---
# Filter: wu_stripe_existing_product_id

Филтрира ID-то на продукта, който се проверява. Ако този ID съществува, новият абонамент ще използва този продукт.

## Параметри

| Name | Type | Description |
|------|------|-------------|
| $product_id | `string` | ID на Stripe продукта, който се проверява. |
| $name | `string` | Име на продукта. |

### Източник

Дефиниран в [`inc/gateways/class-base-stripe-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/gateways/class-base-stripe-gateway.php#L2741) на линия 2741
