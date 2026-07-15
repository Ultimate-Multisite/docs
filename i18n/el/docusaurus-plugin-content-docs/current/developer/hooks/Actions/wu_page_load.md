---
id: wu_page_load
title: Ενέργεια - wu_page_load
sidebar_label: wu_page_load
_i18n_hash: ad34b2f5095d3cd6f3c54172f800e3fd
---
# Action: wu_page_load

Επιτρέπει στους developers των plugins να προσθέσουν επιπλέον hooks στις σελίδες μας.

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $id | `string` | Ο αναγνωριστικός αριθμός (ID) αυτής της σελίδας. |
| $page_hook | `string` | Ο hook της σελίδας αυτής. |
| $admin_page | `self` | Το instance της σελίδας. |

### Since {#since}

- 1.8.2
- 2.0.4: Προστέθηκε η τρίτη παράμετρος: το instance της σελίδας.
### Source {#source}

Ορίζεται στο [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/admin-pages/class-base-admin-page.php#L318) στην γραμμή 318
