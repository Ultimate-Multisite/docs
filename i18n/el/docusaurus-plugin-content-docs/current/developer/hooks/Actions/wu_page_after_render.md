---
id: wu_page_after_render
title: Δράση - wu_page_after_render
sidebar_label: wu_page_after_render
_i18n_hash: df5c3e7ef27ab39b167189e082ed729b
---
# Action: wu_page_after_render

Επιτρέπει στους προγραμματιστές plugins να προσθέσουν επιπλέον περιεχόμενο αφού εμφανιστεί η σελίδα.

## Παράμετροι

| Όνομα | Τύπος | Περιγραφή |
|------|------|-------------|
| $page_id | `string` | Ο αναγνωριστικός αριθμός (ID) αυτής της σελίδας |
| $page | `object` | Το αντικείμενο της σελίδας. |

### Από

- 1.8.2
### Πηγή

Ορίζεται στο [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/admin-pages/class-base-admin-page.php#L413) στην γραμμή 413
