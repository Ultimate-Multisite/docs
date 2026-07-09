---
id: auth_cookie_expiration
title: Filtrs - auth_cookie_expiration
sidebar_label: auth_cookie_expiration
_i18n_hash: abdb61f075bb0c28e31605ab622e26f5
---
# Filtrs: auth_cookie_expiration

Filtrē autentifikācijas sīkfaila derīguma termiņa perioda ilgumu.

## Parametri

| Nosaukums | Tips | Apraksts |
|------|------|-------------|
| $length | `int` | Derīguma termiņa perioda ilgums sekundēs. |
| $user_id | `int` | Lietotāja ID. |
| $remember | `bool` | Vai atcerēties lietotāja pieteikšanos. Noklusējums ir false. |

### Kopš

- 2.8.0
### Avots

Definēts [`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L52) 52. rindā
