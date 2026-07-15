---
id: wu_get_checkout_variables
title: Филтер - wu_get_checkout_variables
sidebar_label: wu_get_checkout_variables
_i18n_hash: c3821432e54f34547822df3b92ced708
---
# Филтер: wu_get_checkout_variables

Омогућава plugin програмерима да филтрирају унапред подешене вредности странице за checkout.

Будите опрезни, недостајући кључеви могу потпуно да покваре checkout на front-end-у.

## Параметри {#parameters}

| Назив | Тип | Опис |
|------|------|-------------|
| $variables | `array` | Локализоване променљиве. |
| $checkout | `\Checkout` | Checkout класа. |

### Од {#since}

- 2.0.0
### Извор {#source}

Дефинисано у [`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L1970) у реду 1970


## Враћа {#returns}
Нови низ променљивих.
