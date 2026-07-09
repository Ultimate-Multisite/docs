---
id: wu_page_added
title: Δράση - wu_page_added
sidebar_label: wu_page_added
_i18n_hash: 47cfb26ef6002a24fecf13a0771771ce
---
# Action: wu_page_added {#action-wupageadded}

Επιτρέπει στους developers να εκτελούν επιπλέον κώδικα όταν καταγράφονται (register) σελίδες.

Σε αντίθεση με το `wu_page_load`, το οποίο εκτελείται μόνο όταν εμφανίζεται μια συγκεκριμένη σελίδα, αυτό το hook εκτελείται κατά την καταγραφή κάθε διαχειριστικής σελίδας που προστίθεται χρησιμοποιώντας τον κώδικα του Ultimate Multisite.

## Παράμετροι {#parameters}

| Όνομα | Τύπος | Περιγραφή |
|------|------|-------------|
| $page_id | `string` | Το ID αυτής της σελίδας. |
| $page_hook | `string` | Το όνομα του hook αυτής της σελίδας. |

### Since {#since}

- 2.0.0
### Source {#source}

Ορίζεται στο [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/admin-pages/class-base-admin-page.php#L228) στην γραμμή 228
