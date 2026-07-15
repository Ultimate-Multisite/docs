---
id: wu_page_this-id_load
title: 'Δράση - wu_page_{$this->id}_load'
sidebar_label: 'wu_page_{$this->id}_load'
_i18n_hash: d386046d2a23406f0fed8400e9aefa6e
---
# Action: wu_page_{$this->id}_load

Επιτρέπει στους developers plugins να προσθέτουν επιπλέον hooks στις σελίδες μας.

## Παράμετροι {#parameters}

| Όνομα | Τύπος | Περιγραφή |
|------|------|-------------|
| $id | `string` | Το ID αυτής της σελίδας. |
| $page_hook | `string` | Το page hook αυτής της σελίδας. |
| $admin_page | `self` | Το instance της σελίδας. |

### Από {#since}

- 1.8.2
- 2.0.4: Προστέθηκε η τρίτη παράμετρος: το instance της σελίδας.
### Πηγή {#source}

Ορίζεται στο [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/admin-pages/class-base-admin-page.php#L332) στην γραμμή 332
