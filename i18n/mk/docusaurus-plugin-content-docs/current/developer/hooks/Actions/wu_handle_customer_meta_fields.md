---
id: wu_handle_customer_meta_fields
title: Акција - wu_handle_customer_meta_fields
sidebar_label: wu_handle_customer_meta_fields
_i18n_hash: a93030d6a7965ebed83579b198381fa8
---
# Action: wu_handle_customer_meta_fields

Дозволете им на развивачите на додатоци да зачувуваат метаподатоци на различни начини ако им е потребно.

## Параметри {#parameters}

| Име | Тип | Опис |
|------|------|-------------|
| $meta_repository | `array` | Листата на метаполиња, структурирана како key =&gt; value. |
| $customer | `\Customer` | Објектот на клиентот на Ultimate Multisite. |
| $checkout | `\Checkout` | Класата за наплата. |

### Од верзија {#since}

- 2.0.0
### Извор {#source}

Дефинирано во [`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L1211) на линија 1211
