---
id: set_logged_in_cookie
title: Action - set_logged_in_cookie
sidebar_label: set_logged_in_cookie
_i18n_hash: f26ccae9b12cf56942b7e99a288ea87c
---
# Aksiyon: set_logged_in_cookie

Giriş yapmış kullanıcı kimlik çerezi ayarlanmadan hemen önce çalışır.

## Parametreler {#parameters}

| Ad | Tip | Açıklama |
|------|------|-------------|
| $logged_in_cookie | `string` | Giriş yapmış kullanıcı çerezi değeri. |
| $expire | `int` | Giriş süresinin ne zaman dolacağını UNIX zaman damgası olarak belirtir. Varsayılan olarak çerezin süresinin dolmasından 12 saat sonrasıdır. |
| $expiration | `int` | Giriş yapmış kullanıcı kimlik çerezi ne zaman sona erecek, UNIX zaman damgası olarak belirtir. Varsayılan olarak bugünden 14 gün sonrasıdır. |
| $user_id | `int` | Kullanıcı Kimliği. |
| $scheme | `string` | Kimlik doğrulama şeması. Varsayılan 'logged_in'dir. |
| $token | `string` | Bu çerez için kullanılacak kullanıcının oturum token'ı. |

### Versiyon {#since}

- 2.6.0
- 4.9.0: <code>$token</code> parametresi eklendi.
### Kaynak {#source}

[`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L141) dosyasının 141. satırında tanımlanmıştır.
