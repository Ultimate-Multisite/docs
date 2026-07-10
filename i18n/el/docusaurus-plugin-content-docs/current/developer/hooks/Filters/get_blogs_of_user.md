---
id: get_blogs_of_user
title: Φίλτρο - get_blogs_of_user
sidebar_label: get_blogs_of_user
_i18n_hash: 77871d3651eb7f3ab1d055fdb89c061e
---
# Φίλτρο: get_blogs_of_user {#filter-getblogsofuser}

Αναπαράγει το αρχικό φίλτρο του WP εδώ, για πλήρη κάλυψη.

Φιλτράρει τη λίστα των ιστοσελίδων στις οποίες ανήκει ένας χρήστης.

## Παράμετροι {#parameters}

| Όνομα | Τύπος | Περιγραφή |
|------|------|-------------|
| $sites | `object[]` | Ένα array αντικειμένων ιστοσελίδων που ανήκουν στον χρήστη. |
| $user_id | `int` | ID του χρήστη. |
| $all | `bool` | Αν το array των επιστρεφόμενων ιστοσελίδων πρέπει να περιέχει όλες τις ιστοσελίδες, συμπεριλαμβανομένων εκείνων που έχουν σημειωθεί ως 'deleted', 'archived', ή 'spam'. Προεπιλεγμένη τιμή: false. |

### Από {#since}

- 2.0.11
### Πηγή {#source}

Ορίζεται στο [`inc/managers/class-site-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/managers/class-site-manager.php#L851) στην γραμμή 851
