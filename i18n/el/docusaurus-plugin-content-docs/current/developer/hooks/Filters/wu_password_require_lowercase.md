---
id: wu_password_require_lowercase
title: Φίλτρο - wu_password_require_lowercase
sidebar_label: wu_password_require_lowercase
_i18n_hash: 5afaa63a8b318dc2167edd1bba3e0b27
---
# Φίλτρο: wu_password_require_lowercase

Ελέγχει αν απαιτείται η χρήση πεζών χαρακτήρων (lowercase) στις κωδικούς πρόσβασης.

## Παράμετροι

| Όνομα | Τύπος | Περιγραφή |
|------|------|-------------|
| $require | `bool` | Αν απαιτείται η χρήση πεζών χαρακτήρων. Η προεπιλεγμένη τιμή είναι `true` όταν επιβάλλονται κανόνες. |
| $defender_active | `bool` | Αν είναι ενεργό το Defender Pro Strong Password. |

### Από

- 2.4.0
### Πηγή

Ορίζεται στο [`inc/class-scripts.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-scripts.php#L563) στην γραμμή 563
