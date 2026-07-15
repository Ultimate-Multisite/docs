---
id: wu_handle_user_meta_fields
title: Ενέργεια - wu_handle_user_meta_fields
sidebar_label: wu_handle_user_meta_fields
_i18n_hash: 6baac0d78046fb58a79bc35865d91372
---
# Action: wu_handle_user_meta_fields

Επιτρέπει στους developers plugins να αποθηκεύουν τα δεδομένα meta των χρηστών με διάφορους τρόπους, αν χρειαστεί.

## Παράμετροι {#parameters}

| Όνομα | Τύπος | Περιγραφή |
|------|------|-------------|
| $meta_repository | `array` | Η λίστα των meta πεδίων, δομημένη ως κλειδί => τιμή. |
| $user | `\WP_User` | Το αντικείμενο χρήστη του WordPress. |
| $customer | `\Customer` | Το αντικείμενο πελάτη του Ultimate Multisite. |
| $checkout | `\Checkout` | Η κλάση checkout. |

### Από {#since}

- 2.0.4
### Πηγή {#source}

Ορίζεται στο [`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L1244) στην γραμμή 1244
