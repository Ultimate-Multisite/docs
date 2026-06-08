---
id: wu_maybe_create_customer
title: Action - wu_maybe_create_customer
sidebar_label: wu_maybe_create_customer
_i18n_hash: 15899be650099dafaf0ec1f5095861a6
---
# Action: wu_maybe_create_customer

Plugin geliştiricilerinin, müşteri eklendiğinde ek işlemler yapmasına olanak tanır.

Örneğin, müşteriyi ana siteye kullanıcı olarak eklemek için hook'lar buraya eklenir.

## Parametreler

| Name | Type | Description |
|------|------|-------------|
| $customer | `\Customer` | Oluşturulmuş olan müşteri. |
| $checkout | `\Checkout` | Mevcut checkout sınıfı. |

### Since

- 2.0.0
### Source

[`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L1156) dosyasında 1156. satırda tanımlanmıştır.
