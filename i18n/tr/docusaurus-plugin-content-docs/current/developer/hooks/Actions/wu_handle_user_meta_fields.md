---
id: wu_handle_user_meta_fields
title: Eylem - wu_handle_user_meta_fields
sidebar_label: wu_handle_user_meta_fields
_i18n_hash: 6baac0d78046fb58a79bc35865d91372
---
# Aksiyon: wu_handle_user_meta_fields

İhtiyaç duyarlarsa, eklenti geliştiricilerinin kullanıcı meta verilerini farklı şekillerde kaydetmesine olanak tanır.

## Parametreler

| Name | Type | Description |
|------|------|-------------|
| $meta_repository | `array` | Anahtar => değer yapısında meta alanlarının listesi. |
| $user | `\WP_User` | WordPress kullanıcı nesnesi. |
| $customer | `\Customer` | Ultimate Multisite müşteri nesnesi. |
| $checkout | `\Checkout` | Ödeme (checkout) sınıfı. |

### Versiyon

- 2.0.4
### Kaynak

[`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L1244) dosyasının 1244. satırında tanımlanmıştır.
