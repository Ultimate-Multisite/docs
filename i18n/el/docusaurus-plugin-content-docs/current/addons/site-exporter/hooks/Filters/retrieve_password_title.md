---
id: retrieve_password_title
title: Φίλτρο - retrieve_password_title
sidebar_label: retrieve_password_title
_i18n_hash: 7fcf454c64361885b8f64cc6fbc9ba93
---
# Filter: retrieve_password_title

Επεξεργάζεται το θέμα του email επαναφοράς κωδικού πρόσβασης.

## Παράμετροι {#parameters}

| Όνομα | Τύπος | Περιγραφή |
|------|------|-------------|
| $title | `string` | Το προεπιλεγμένο θέμα email. |
| $user_login | `string` | Το όνομα χρήστη του χρήστη. |
| $user_data | `\WP_User` | Αντικείμενο WP_User. |

### Από {#since}

- 2.8.0
- 4.4.0: Προστέθηκαν οι παράμετροι <code>$user_login</code> και <code>$user_data</code>.
### Πηγή {#source}

Ορίζεται στο [`inc/mu-migration/includes/commands/class-mu-migration-users.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/mu-migration/includes/commands/class-mu-migration-users.php#L135) στην γραμμή 135.


## Επιστρέφει {#returns}
Το προεπιλεγμένο θέμα email.
