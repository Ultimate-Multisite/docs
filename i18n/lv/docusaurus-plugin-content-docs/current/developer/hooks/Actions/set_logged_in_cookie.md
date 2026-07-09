---
id: set_logged_in_cookie
title: Darbība - set_logged_in_cookie
sidebar_label: set_logged_in_cookie
_i18n_hash: f26ccae9b12cf56942b7e99a288ea87c
---
# Darbība: set_logged_in_cookie

Tiek izpildīta tieši pirms pieteikušās autentifikācijas sīkdatnes iestatīšanas.

## Parametri

| Name | Type | Description |
|------|------|-------------|
| $logged_in_cookie | `string` | Pieteikušās sīkdatnes vērtība. |
| $expire | `int` | Laiks, kad beidzas pieteikšanās labvēlības periods, kā UNIX laikspiedols. Noklusējums ir 12 stundas pēc sīkdatnes derīguma termiņa beigām. |
| $expiration | `int` | Laiks, kad pieteikušās autentifikācijas sīkdatnei beidzas derīguma termiņš, kā UNIX laikspiedols. Noklusējums ir 14 dienas no šī brīža. |
| $user_id | `int` | Lietotāja ID. |
| $scheme | `string` | Autentifikācijas shēma. Noklusējums 'logged_in'. |
| $token | `string` | Lietotāja sesijas token, ko izmantot šai sīkdatnei. |

### Kopš

- 2.6.0
- 4.9.0: The <code>$token</code> parameter was added.
### Avots

Definēts [`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L141) 141. rindā
