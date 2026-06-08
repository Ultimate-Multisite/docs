---
id: retrieve_password_message
title: Φίλτρο - retrieve_password_message
sidebar_label: retrieve_password_message
_i18n_hash: c1e9fbd9909dd93e70f291de55ba00e4
---
# Filter: retrieve_password_message

Φιλτράρει το σώμα του μηνύματος του email επαναφοράς κωδικού πρόσβασης.

## Παράμετροι

| Όνομα | Τύπος | Περιγραφή |
|------|------|-------------|
| $message | `string` | Το προεπιλεγμένο μήνυμα email. |
| $key | `string` | Το κλειδί ενεργοποίησης. |
| $user_login | `string` | Το όνομα χρήστη του χρήστη. |
| $user_data | `\WP_User` | Αντικείμενο WP_User. |

### Από

- 2.8.0
- 4.1.0: Προστέθηκαν οι παράμετροι <code>$user_login</code> και <code>$user_data</code>.
### Πηγή

Ορίζεται στο [`inc/mu-migration/includes/commands/class-mu-migration-users.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/mu-migration/includes/commands/class-mu-migration-users.php#L149) στην γραμμή 149.


## Επιστρέφει
Το προεπιλεγμένο μήνυμα email.
