---
id: set_logged_in_cookie
title: Harakat - set_logged_in_cookie
sidebar_label: set_logged_in_cookie
_i18n_hash: f26ccae9b12cf56942b7e99a288ea87c
---
# Harakat: set_logged_in_cookie {#action-setloggedincookie}

Tizimga kirgan autentifikatsiya cookie fayli o‘rnatilishidan darhol oldin ishga tushadi.

## Parametrlar {#parameters}

| Nom | Tur | Tavsif |
|------|------|-------------|
| $logged_in_cookie | `string` | Tizimga kirgan cookie qiymati. |
| $expire | `int` | Kirish imtiyoz davri tugaydigan vaqt UNIX vaqt tamg‘asi sifatida. Standart qiymat cookie tugash vaqtidan 12 soat keyin. |
| $expiration | `int` | Tizimga kirgan autentifikatsiya cookie fayli tugaydigan vaqt UNIX vaqt tamg‘asi sifatida. Standart qiymat hozirdan 14 kun keyin. |
| $user_id | `int` | Foydalanuvchi IDsi. |
| $scheme | `string` | Autentifikatsiya sxemasi. Standart 'logged_in'. |
| $token | `string` | Ushbu cookie uchun ishlatiladigan foydalanuvchining sessiya tokeni. |

### Berilgan versiyadan boshlab {#since}

- 2.6.0
- 4.9.0: The <code>$token</code> parameter was added.
### Manba {#source}

[`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L141) faylida 141-qatorda aniqlangan
