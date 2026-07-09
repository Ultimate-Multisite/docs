---
id: wu_maybe_create_customer
title: Action - wu_maybe_create_customer
sidebar_label: wu_maybe_create_customer
_i18n_hash: 15899be650099dafaf0ec1f5095861a6
---
# Action: wu_maybe_create_customer {#action-wumaybecreatecustomer}

Müşteri eklendiğinde eklenti geliştiricilerinin ek işlemler yapmasına olanak tanır.

Örneğin, müşteriyi ana siteye kullanıcı olarak eklemek için kancaları (hooks) buraya ekliyoruz.

## Parametreler {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $customer | `\Customer` | Belki oluşturulan müşteri. |
| $checkout | `\Checkout` | Mevcut ödeme (checkout) sınıfı. |

### Since {#since}

- 2.0.0
### Source {#source}

Defined in [`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L1156) at line 1156
