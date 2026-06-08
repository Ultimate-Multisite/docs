---
id: wu_admin_notices
title: Filter - wu_admin_notices
sidebar_label: wu_admin_notices
_i18n_hash: b98d294d75277dfcfd941ca0e573e10c
---
# Φίλτρο: wu_admin_notices

Επιτρέπει στους developers να φιλτράρουν τις ειδοποιήσεις του admin που προσθέτει το Ultimate Multisite.

## Παράμετροι

| Όνομα | Τύπος | Περιγραφή |
|------|------|-------------|
| $notices | `array` | Λίστα ειδοποιήσεων για το συγκεκριμένο πάνελ. |
| $all_notices | `array` | Λίστα ειδοποιήσεων που προστέθηκαν, χωρισμένες ανά πάνελ. |
| $panel | `string` | Το πάνελ για το οποίο πρέπει να ανακτηθούν οι ειδοποιήσεις. |
| $filter | `string` | Αν οι ειδοποιήσεις που μπορούν να απενεργοποιηθούν έχουν φιλτραριστεί. |
| $dismissed_messages | `array` | Λίστα κλειδιών (keys) των απενεργοποιημένων ειδοποιήσεων. |

### Από

- 2.0.0
### Πηγή

Ορίζεται στο [`inc/class-admin-notices.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-admin-notices.php#L121) στην γραμμή 121


## Επιστρέφει
