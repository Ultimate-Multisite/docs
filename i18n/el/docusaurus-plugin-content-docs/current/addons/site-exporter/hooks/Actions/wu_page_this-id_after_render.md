---
id: wu_page_this-id_after_render
title: 'Action - wu_page_{$this->id}_after_render'
sidebar_label: 'wu_page_{$this->id}_after_render'
_i18n_hash: 2bdd062afe3dbfa7e50dc5162fba9b99
---
# Action: wu_page_\{$this->id\}_after_render

Εκτελείται μετά την εμφάνιση μιας συγκεκριμένης σελίδας.

Χρήση: Το δυναμικό μέρος πρέπει να αντικατασταθεί με έναν έγκυρο αναγνωριστικό σελίδας, π.χ. `add_action('wu_page_events_after_render', 'do_something_callback', 10, 2);`

## Παράμετροι

| Name | Type | Description |
|------|------|-------------|
| $page_id | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | Ο αναγνωριστικός αριθμός της σελίδας. |
| $this | `\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | Το αντίγραφο της Βασικής Σελίδας Διαχειριστή (Base Admin Page). |

### Από

- 1.8.2
### Πηγή

Ορίζεται στο [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/admin-pages/class-base-admin-page.php#L394) στην γραμμή 394
