---
id: wu_apc_process_page_content
title: Φίλτρο - wu_apc_process_page_content
sidebar_label: wu_apc_process_page_content
_i18n_hash: 85631895afd7298462a111b4db356566
---
# Φίλτρο: wu_apc_process_page_content

Επιτρέπει στους developers να τροποποιήσουν το τελικό περιεχόμενο.

## Παράμετροι

| Όνομα | Τύπος | Περιγραφή |
|------|------|-------------|
| $content | `string` | Το περιεχόμενο μετά τις αντικαταστάσεις. |
| $content_before_processing | `string` | Το περιεχόμενο πριν τις αντικαταστάσεις. |
| $to_replace | `array` | Πίστα (Array) που περιέχει τα placeholders. |
| $placeholder_count | `int` | Αριθμός των εντοπισμένων placeholders. |

### Από

- 1.4.0
### Πηγή

Ορίζεται στο [`inc/wu-apc-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-admin-page-creator/blob/main/inc/wu-apc-functions.php#L46) στην γραμμή 46

## Επιστρέφει
Το περιεχόμενο μετά τη τροποποίηση.
