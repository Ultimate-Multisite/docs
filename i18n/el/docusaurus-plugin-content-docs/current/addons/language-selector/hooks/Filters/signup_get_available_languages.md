---
id: signup_get_available_languages
title: Φίλτρο - signup_get_available_languages
sidebar_label: signup_get_available_languages
_i18n_hash: 8e47c618635cf9564c3c2d2864b47529
---
# Filter: signup_get_available_languages

Φιλτράρει τη λίστα των διαθέσιμων γλωσσών για τις διαδικασίες εγγραφής σε ιστοσελίδες στο front-end.

Το να περάσετε ένα κενό array σε αυτόν τον hook απενεργοποιεί την εμφάνιση της ρύθμισης στο φόρμα εγγραφής, και η γλώσσα προεπιλεγμένης χρήσης θα χρησιμοποιηθεί κατά τη δημιουργία της ιστοσελίδας. Οι γλώσσες που δεν είναι ήδη εγκατεστημένες θα αφαιρούνται.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $available_languages | `array` | Διαθέσιμες γλώσσες. |

### Since

- 4.4.0
### Source

Ορίζεται στο [`ultimate-multisite-language-selector.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-language-selector/blob/main/ultimate-multisite-language-selector.php#L117) στην γραμμή 117
