---
id: wu_apply_signup_fee
title: Филтер - wu_apply_signup_fee
sidebar_label: wu_apply_signup_fee
_i18n_hash: b6a5ac9b0ef2d459003fa02766ad6f81
---
# Филтер: wu_apply_signup_fee {#filter-wuapplysignupfee}

Филтрира дали да се примени таксата за регистрација или не.

## Параметри {#parameters}

| Име | Тип | Опис |
|------|------|-------------|
| $add_signup_fee | `bool` | Дали да се додаде таксата за регистрација или не. |
| $product | `object` | Објект за ниво на членство. |
| $this | `\WP_Ultimo\Checkout\Cart` | Објект за регистрација. |

### Од {#since}

- 3.1
### Извор {#source}

Дефинирано во [`inc/checkout/class-cart.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-cart.php#L1769) на линија 1769
