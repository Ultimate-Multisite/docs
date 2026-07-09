---
id: set_auth_cookie
title: Amal - set_auth_cookie
sidebar_label: set_auth_cookie
_i18n_hash: 30ea64dc01d9f9805c09717f5113e4fd
---
# Action: set_auth_cookie

Autentifikatsiya cookie o‘rnatilishidan darhol oldin ishga tushadi.

## Parametrlar

| Name | Type | Tavsif |
|------|------|-------------|
| $auth_cookie | `string` | Autentifikatsiya cookie qiymati. |
| $expire | `int` | Kirish imtiyozli muddati tugaydigan vaqt, UNIX vaqt belgisi sifatida. Standart qiymat cookie amal qilish muddati tugaganidan 12 soat keyin. |
| $expiration | `int` | Autentifikatsiya cookie amal qilish muddati tugaydigan vaqt, UNIX vaqt belgisi sifatida. Standart qiymat hozirdan 14 kun keyin. |
| $user_id | `int` | Foydalanuvchi ID. |
| $scheme | `string` | Autentifikatsiya sxemasi. Qiymatlar 'auth' yoki 'secure_auth' ni o‘z ichiga oladi. |
| $token | `string` | Ushbu cookie uchun ishlatiladigan foydalanuvchi sessiya tokeni. |

### Versiyadan boshlab

- 2.5.0
- 4.9.0: The <code>$token</code> parameter was added.
### Manba

[`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L124) faylida, 124-qatorda aniqlangan
