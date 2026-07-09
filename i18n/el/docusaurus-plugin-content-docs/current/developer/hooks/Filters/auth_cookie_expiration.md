---
id: auth_cookie_expiration
title: Filter - auth_cookie_expiration
sidebar_label: auth_cookie_expiration
_i18n_hash: abdb61f075bb0c28e31605ab622e26f5
---
# Φίλτρο: auth_cookie_expiration {#filter-authcookieexpiration}

Ελέγχει τη διάρκεια της λήξης της cookie ταυτοποίησης (authentication cookie).

## Παράμετροι {#parameters}

| Όνομα | Τύπος | Περιγραφή |
|------|------|-------------|
| $length | `int` | Η διάρκεια της περιόδου λήξης σε δευτερόλεπτα. |
| $user_id | `int` | Ο αναγνωριστικός αριθμός (ID) του χρήστη. |
| $remember | `bool` | Αν πρέπει να θυμάται το login του χρήστη. Προεπιλεγμένη τιμή: false. |

### Από {#since}

- 2.8.0
### Πηγή {#source}

Ορίζεται στο [`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L52) στην γραμμή 52
