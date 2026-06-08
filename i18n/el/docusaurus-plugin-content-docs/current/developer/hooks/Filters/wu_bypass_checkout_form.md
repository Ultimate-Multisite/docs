---
id: wu_bypass_checkout_form
title: Φίλτρο - wu_bypass_checkout_form
sidebar_label: wu_bypass_checkout_form
_i18n_hash: ad57eddbc5463e999d4896a31ed368a3
---
# Filter: wu_bypass_checkout_form

Επιτρέπει στους developers να παρακάμψουν την προεπιλεγμένη έξοδο και να ορίσουν αντίθετα ένα νέο περιεχόμενο.

## Παράμετροι

| Όνομα | Τύπος | Περιγραφή |
|------|------|-------------|
| $bypass | `string\|bool` | Αν πρέπει να παρακαμφθεί το checkout form, ή μια συμβολοσειρά που θα επιστραφεί αντί του ίδιου του form. |
| $atts | `array` | Οι παράμετροι του checkout block/shortcode. |

### Πηγή

Ορίζεται στο [`inc/ui/class-checkout-element.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/ui/class-checkout-element.php#L327) στην γραμμή 327.
