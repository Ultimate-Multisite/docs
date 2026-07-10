---
id: set_logged_in_cookie
title: Action - set_logged_in_cookie
sidebar_label: set_logged_in_cookie
_i18n_hash: f26ccae9b12cf56942b7e99a288ea87c
---
# Action: set_logged_in_cookie {#action-setloggedincookie}

Εκτελείται αμέσως πριν από το να ρυθμιστεί το cookie πιστοποίησης για συνδεμένο χρήστη.

## Παράμετροι {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $logged_in_cookie | `string` | Η τιμή του cookie του συνδεμένου χρήστη. |
| $expire | `int` | Η ώρα που λήγει η περίοδος χάριτος σύνδεσης, ως σήμα (timestamp) UNIX. Η προεπιλεγμένη τιμή είναι 12 ώρες μετά τη λήξη του cookie. |
| $expiration | `int` | Η ώρα που λήγει το cookie πιστοποίησης για συνδεμένο χρήστη, ως σήμα (timestamp) UNIX. Η προεπιλεγμένη τιμή είναι σε 14 ημέρες από σήμερα. |
| $user_id | `int` | Αναγνωριστικό χρήστη (User ID). |
| $scheme | `string` | Σχέδιο πιστοποίησης (Authentication scheme). Η προεπιλεγμένη τιμή είναι 'logged_in'. |
| $token | `string` | Το token συνεδρίας του χρήστη που θα χρησιμοποιηθεί για αυτό το cookie. |

### Από {#since}

- 2.6.0
- 4.9.0: Προστέθηκε η παράμετρος <code>$token</code>.
### Πηγή {#source}

Ορίζεται στο [`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L141) στην γραμμή 141
