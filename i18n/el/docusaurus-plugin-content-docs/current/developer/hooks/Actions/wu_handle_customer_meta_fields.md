---
id: wu_handle_customer_meta_fields
title: Ενέργεια - wu_handle_customer_meta_fields
sidebar_label: wu_handle_customer_meta_fields
_i18n_hash: a93030d6a7965ebed83579b198381fa8
---
# Action: wu_handle_customer_meta_fields

Επιτρέπει στους developers των plugins να αποθηκεύουν meta δεδομένα με διάφορους τρόπους, αν χρειαστεί.

## Παράμετροι

| Όνομα | Τύπος | Περιγραφή |
|------|------|-------------|
| $meta_repository | `array` | Η λίστα των meta πεδίων, δομημένη ως key => value. |
| $customer | `\Customer` | Το αντικείμενο πελάτη του Ultimate Multisite. |
| $checkout | `\Checkout` | Η κλάση checkout. |

### Από

- 2.0.0
### Πηγή

Ορίζεται στο [`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L1211) στην γραμμή 1211
