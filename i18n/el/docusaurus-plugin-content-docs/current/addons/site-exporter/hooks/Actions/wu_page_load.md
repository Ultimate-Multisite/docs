---
id: wu_page_load
title: Ενέργεια - wu_page_load
sidebar_label: wu_page_load
_i18n_hash: 5033e5832dd8b614f857f0cad7b79fc3
---
# Δράση: wu_page_load

Επιτρέπει στους developers των plugins να προσθέσουν επιπλέον hooks στις σελίδες μας.

## Παράμετροι

| Όνομα | Τύπος | Περιγραφή |
|------|------|-------------|
| $page_id | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | Ο αναγνωριστικός κωδικός (ID) αυτής της σελίδας. |
| $page_hook | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | Ο hook που δημιουργείται για αυτή τη σελίδα. |

### Από την έκδοση

- 1.8.2
### Πηγή

Ορίζεται στο [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/admin-pages/class-base-admin-page.php#L289) στην γραμμή 289
