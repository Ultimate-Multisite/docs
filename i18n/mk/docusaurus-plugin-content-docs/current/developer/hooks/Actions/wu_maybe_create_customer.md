---
id: wu_maybe_create_customer
title: Дејство - wu_maybe_create_customer
sidebar_label: wu_maybe_create_customer
_i18n_hash: 15899be650099dafaf0ec1f5095861a6
---
# Акција: wu_maybe_create_customer {#action-wumaybecreatecustomer}

Им овозможува на развивачите на plugin-и да извршат дополнителни работи кога клиентот е додаден.

Еве каде ги додаваме hook-овите за додавање на customer-&gt;user и на главниот сајт, на пример.

## Параметри {#parameters}

| Име | Тип | Опис |
|------|------|-------------|
| $customer | `\Customer` | Клиентот што можеби беше создаден. |
| $checkout | `\Checkout` | Тековната класа за наплата. |

### Од верзија {#since}

- 2.0.0
### Извор {#source}

Дефинирано во [`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L1156) на линија 1156
