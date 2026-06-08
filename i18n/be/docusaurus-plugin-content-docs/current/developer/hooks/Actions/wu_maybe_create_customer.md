---
id: wu_maybe_create_customer
title: Дзеянне - wu_maybe_create_customer
sidebar_label: wu_maybe_create_customer
_i18n_hash: 15899be650099dafaf0ec1f5095861a6
---
# Action: wu_maybe_create_customer

Дазваляе раробнікам плагінаў выконваць дадатковыя дзеянні, калі дадаецца кліент.

Тут мы дадаём хукі для дадавання кліента-па---+карыстальніка на галоўны сайт, напрыклад.

## Параметры

| Назва | Тып | Апісан |
|------|------|-------------|
| $customer | `\Customer` | Кліент, які, магчыма, быў створаны. |
| $checkout | `\Checkout` | Aktualны клас выкалівання. |

### З

- 2.0.0
### Выказчык

Вызначаны ў [`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L1156) на 1156-й парэдзе.
