---
id: wu_stripe_existing_product_id
title: Филтер - wu_stripe_existing_product_id
sidebar_label: wu_stripe_existing_product_id
_i18n_hash: 92eb984fe341b1ce2d56ea2eccff8100
---
# Филтер: wu_stripe_existing_product_id

Го филтрира ID на производот што треба да се провери. Ако постои, новата претплата ќе го користи овој производ.

## Параметри {#parameters}

| Име | Тип | Опис |
|------|------|-------------|
| $product_id | `string` | ID на Stripe производот што треба да се провери. |
| $name | `string` | Име на производот. |

### Извор {#source}

Дефинирано во [`inc/gateways/class-base-stripe-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/gateways/class-base-stripe-gateway.php#L2741) на линија 2741
