---
id: wu_handle_user_meta_fields
title: Action - wu_handle_user_meta_fields
sidebar_label: wu_handle_user_meta_fields
_i18n_hash: 6baac0d78046fb58a79bc35865d91372
---
# Aksiyon: wu_handle_user_meta_fields

Plugin geliştiricilerinin, ihtiyaç duydukları takdirde kullanıcı meta verilerini farklı şekillerde kaydetmelerine olanak tanır.

## Parametreler

| Name | Type | Description |
|------|------|-------------|
| $meta_repository | `array` | Meta alanlarının listesi, anahtar => değer yapısında. |
| $user | `\WP_User` | WordPress kullanıcı nesnesi. |
| $customer | `\Customer` | Ultimate Multisite müşteri nesnesi. |
| $checkout | `\Checkout` | Ödeme (checkout) sınıfı. |

### Versiyon

- 2.0.4
### Kaynak

[`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L1244) dosyasında 1244. satırda tanımlanmıştır.
