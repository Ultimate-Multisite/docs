---
id: wu_handle_user_meta_fields
title: Harakat - wu_handle_user_meta_fields
sidebar_label: wu_handle_user_meta_fields
_i18n_hash: 6baac0d78046fb58a79bc35865d91372
---
# Amal: wu_handle_user_meta_fields

Plugin dasturchilariga, agar kerak bo‘lsa, foydalanuvchi meta ma’lumotlarini turli usullarda saqlashga ruxsat beradi.

## Parametrlar

| Nomi | Turi | Tavsif |
|------|------|-------------|
| $meta_repository | `array` | meta maydonlar ro‘yxati, key =&gt; value tuzilmasida. |
| $user | `\WP_User` | WordPress foydalanuvchi obyekti. |
| $customer | `\Customer` | Ultimate Multisite mijoz obyekti. |
| $checkout | `\Checkout` | To‘lov klassi. |

### Versiyadan boshlab

- 2.0.4
### Manba

[`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L1244) ichida 1244-qatorda aniqlangan.
