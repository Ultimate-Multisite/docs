---
id: wu_stripe_existing_product_id
title: Фильтр - wu_stripe_existing_product_id
sidebar_label: wu_stripe_existing_product_id
_i18n_hash: 92eb984fe341b1ce2d56ea2eccff8100
---
# Фильтр: wu_stripe_existing_product_id

Фильтрует ID продукта, который нужно проверить. Если он существует, новая подписка будет использовать этот продукт.

## Параметры

| Имя | Тип | Описание |
|------|------|-------------|
| $product_id | `string` | ID продукта Stripe, который нужно проверить. |
| $name | `string` | Название продукта. |

### Источник

Определено в [`inc/gateways/class-base-stripe-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/gateways/class-base-stripe-gateway.php#L2741) на строке 2741
