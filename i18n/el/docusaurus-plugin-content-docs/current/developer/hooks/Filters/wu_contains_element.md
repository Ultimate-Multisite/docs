---
id: wu_contains_element
title: Φίλτρο - wu_contains_element
sidebar_label: wu_contains_element
_i18n_hash: 5254f5cdc4fb5e3992e8987cc4c5d82b
---
# Filter: wu_contains_element

Επιτρέπει στους developers να αλλάξουν τα αποτελέσματα της αρχικής αναζήτησης.

Αυτό είναι χρήσιμο για εξωτερικούς (third-party) builders και παρόμοια συστήματα.

## Παράμετροι {#parameters}

| Όνομα | Τύπος | Περιγραφή |
|------|------|-------------|
| $contains_elements | `bool` | Αν το στοιχείο περιέχεται στο περιεχόμενο. |
| $content | `string` | Το περιεχόμενο που εξετάζεται. |
| $element | `self` | Το τρέχον στοιχείο. |
| $post | `null\|\WP_Post` | Το post που πρέπει να ελεγχθεί. |

### Από {#since}

- 2.0.0
### Πηγή {#source}

Ορίζεται στο [`inc/ui/class-base-element.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/ui/class-base-element.php#L534) στην γραμμή 534
