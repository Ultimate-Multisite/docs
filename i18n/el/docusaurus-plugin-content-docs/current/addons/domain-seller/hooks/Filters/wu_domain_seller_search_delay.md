---
id: wu_domain_seller_search_delay
title: Φίλτρο - wu_domain_seller_search_delay
sidebar_label: wu_domain_seller_search_delay
_i18n_hash: b0871b15059808a847875636d151245f
---
# Filter: wu_domain_seller_search_delay {#filter-wudomainsellersearchdelay}

Φιλτράρει την καθυστέρηση debounce της αναζήτησης πεδίου σε χιλιοστά του δευτερολέπτου.

Αυξήστε αυτή την τιμή για να μειώσετε τις κλήσεις API σε αργές συνδέσεις.

## Παράμετροι {#parameters}

| Όνομα | Τύπος | Περιγραφή |
|------|------|-------------|
| $delay | `int` | Καθυστέρηση debounce σε χιλιοστά του δευτερολέπτου. Η προεπιλεγμένη τιμή είναι 500. |

### Από {#since}

- 2.1.0
### Πηγή {#source}

- Ορίζεται στο [`inc/checkout/signup-fields/class-signup-field-domain-selection.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/checkout/signup-fields/class-signup-field-domain-selection.php#L854) στην γραμμή 854
