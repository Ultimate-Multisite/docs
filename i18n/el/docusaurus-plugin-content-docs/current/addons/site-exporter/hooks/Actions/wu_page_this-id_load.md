---
id: wu_page_this-id_load
title: 'Δράση - wu_page_{$this->id}_load'
sidebar_label: 'wu_page_{$this->id}_load'
_i18n_hash: d34bb63c8517d5bba151d14c83b3bb44
---
# Action: wu_page_{$this->id}_load

Επιτρέπει στους developers των plugins να προσθέτουν επιπλέον hooks σε συγκεκριμένη σελίδα.

Χρήση: Το δυναμικό μέρος πρέπει να αντικατασταθεί με έναν έγκυρο ID σελίδας, π.χ. `add_action('wu_page_events_load', 'callback_with_aditional_hook', 10, 2);`

## Παράμετροι

| Όνομα | Τύπος | Περιγραφή |
|------|------|-------------|
| $page_id | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | Ο ID αυτής της σελίδας. |
| $page_hook | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | Ο hook που δημιουργήθηκε για αυτή τη σελίδα. |

### Since

- 1.8.2
### Source

Ορίζεται στο [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/admin-pages/class-base-admin-page.php#L301) στην γραμμή 301
