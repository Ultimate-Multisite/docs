---
id: wu_stripe_existing_product_id
title: Филтер - wu_stripe_existing_product_id
sidebar_label: wu_stripe_existing_product_id
_i18n_hash: 92eb984fe341b1ce2d56ea2eccff8100
---
# Филтер: wu_stripe_existing_product_id

Филтрира ID производа који треба проверити. Ако постоји, нова претплата ће користити овај производ.

## Параметри {#parameters}

| Име | Тип | Опис |
|------|------|-------------|
| $product_id | `string` | ID Stripe производа који треба проверити. |
| $name | `string` | Назив производа. |

### Извор {#source}

Дефинисано у [`inc/gateways/class-base-stripe-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/gateways/class-base-stripe-gateway.php#L2741) у реду 2741
