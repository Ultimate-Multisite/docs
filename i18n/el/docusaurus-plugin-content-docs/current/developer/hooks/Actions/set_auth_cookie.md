---
id: set_auth_cookie
title: Action - set_auth_cookie
sidebar_label: set_auth_cookie
_i18n_hash: 30ea64dc01d9f9805c09717f5113e4fd
---
# Ενέργεια: set_auth_cookie {#action-setauthcookie}

Εκτελείται αμέσως πριν από τη ρύθμιση του cookie αυθεντικοποίησης.

## Παράμετροι {#parameters}

| Name | Type | Περιγραφή |
|------|------|-------------|
| $auth_cookie | `string` | Τιμή του cookie αυθεντικοποίησης. |
| $expire | `int` | Η ώρα που λήγει η περίοδος χάριτος σύνδεσης ως UNIX timestamp. Η προεπιλογή είναι 12 ώρες μετά την λήξη του cookie. |
| $expiration | `int` | Η ώρα που λήγει το cookie αυθεντικοποίησης ως UNIX timestamp. Η προεπιλογή είναι σε 14 ημέρες από τώρα. |
| $user_id | `int` | ID χρήστη. |
| $scheme | `string` | Σχήμα αυθεντικοποίησης. Οι τιμές περιλαμβάνουν 'auth' ή 'secure_auth'. |
| $token | `string` | Το session token του χρήστη που θα χρησιμοποιηθεί για αυτό το cookie. |

### Από {#since}

- 2.5.0
- 4.9.0: Προστέθηκε η παράμετρος <code>$token</code>.
### Πηγή {#source}

Ορίζεται στο [`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L124) στην γραμμή 124
