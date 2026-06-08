---
id: wu_apply_signup_fee
title: Филтър - wu_apply_signup_fee
sidebar_label: wu_apply_signup_fee
_i18n_hash: b6a5ac9b0ef2d459003fa02766ad6f81
---
# Filter: wu_apply_signup_fee

Филтрира дали таксата за регистрация трябва да бъде приложена.

## Параметри

| Name | Type | Описание |
|------|------|-------------|
| $add_signup_fee | `bool` | Дали да се добави таксата за регистрация. |
| $product | `object` | Обект на ниво на членство. |
| $this | `\WP_Ultimo\Checkout\Cart` | Обект на регистрация. |

### От версия

- 3.1
### Източник

Дефиниран в [`inc/checkout/class-cart.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-cart.php#L1769) на линия 1769
