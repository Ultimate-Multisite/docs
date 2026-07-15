---
id: wu_maybe_create_customer
title: Акција - wu_maybe_create_customer
sidebar_label: wu_maybe_create_customer
_i18n_hash: 15899be650099dafaf0ec1f5095861a6
---
# Радња: wu_maybe_create_customer

Омогућава програмерима додатака да ураде додатне ствари када се клијент дода.

Ево где додајемо hook-ове и за додавање customer-&gt;user на главни сајт, на пример.

## Параметри {#parameters}

| Назив | Тип | Опис |
|------|------|-------------|
| $customer | `\Customer` | Клијент који је можда креиран. |
| $checkout | `\Checkout` | Тренутна класа наплате. |

### Од верзије {#since}

- 2.0.0
### Извор {#source}

Дефинисано у [`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L1156) у реду 1156
