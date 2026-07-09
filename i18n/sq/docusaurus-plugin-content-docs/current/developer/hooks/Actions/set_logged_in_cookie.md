---
id: set_logged_in_cookie
title: Veprim - set_logged_in_cookie
sidebar_label: set_logged_in_cookie
_i18n_hash: f26ccae9b12cf56942b7e99a288ea87c
---
# Veprim: set_logged_in_cookie {#action-setloggedincookie}

Ekzekutohet menjëherë përpara se të vendoset cookie i autentikimit për përdoruesin e identifikuar.

## Parametrat {#parameters}

| Emri | Tipi | Përshkrimi |
|------|------|-------------|
| $logged_in_cookie | `string` | Vlera e cookie-t për përdoruesin e identifikuar. |
| $expire | `int` | Koha kur skadon periudha e faljes së hyrjes si UNIX timestamp. Parazgjedhja është 12 orë pas kohës së skadimit të cookie-t. |
| $expiration | `int` | Koha kur skadon cookie i autentikimit për përdoruesin e identifikuar si UNIX timestamp. Parazgjedhja është 14 ditë nga tani. |
| $user_id | `int` | ID-ja e përdoruesit. |
| $scheme | `string` | Skema e autentikimit. Parazgjedhja 'logged_in'. |
| $token | `string` | Tokeni i sesionit të përdoruesit për t’u përdorur për këtë cookie. |

### Që prej {#since}

- 2.6.0
- 4.9.0: The <code>$token</code> parameter was added.
### Burimi {#source}

Përcaktuar në [`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L141) në rreshtin 141
