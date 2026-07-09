---
id: retrieve_password_message
title: Filtr - retrieve_password_message
sidebar_label: retrieve_password_message
_i18n_hash: c1e9fbd9909dd93e70f291de55ba00e4
---
# Filtr: retrieve_password_message

Parolni tiklash xatining xabar matnini filtrlaydi.

## Parametrlar

| Nomi | Turi | Tavsif |
|------|------|-------------|
| $message | `string` | Standart xat xabari. |
| $key | `string` | Faollashtirish kaliti. |
| $user_login | `string` | Foydalanuvchi uchun foydalanuvchi nomi. |
| $user_data | `\WP_User` | WP_User obyekti. |

### Dan beri

- 2.8.0
- 4.1.0: Added <code>$user_login</code> and <code>$user_data</code> parameters.
### Manba

[`inc/mu-migration/includes/commands/class-mu-migration-users.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/mu-migration/includes/commands/class-mu-migration-users.php#L149) faylida 149-qatorda aniqlangan


## Qaytaradi
Standart xat xabari.
