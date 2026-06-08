---
id: wu_page_added
title: Δράση - wu_page_added
sidebar_label: wu_page_added
_i18n_hash: 91c9f283f9b26c81310bdb787db88fec
---
# Action: wu_page_added

Επιτρέπει στους developers plugins να εκτελούν επιπλέον κώδικα όταν καταγράφονται σελίδες.

Σε αντίθεση με το `wu_page_load`, το οποίο εκτελείται μόνο όταν εμφανίζεται μια συγκεκριμένη σελίδα, αυτό το hook εκτελείται κατά την καταγραφή για κάθε σελίδα διαχείρισης που προστίθεται χρησιμοποιώντας τον κώδικα του WP Ultimo.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $page_id | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | Ο αναγνωριστικός αριθμός (ID) αυτής της σελίδας. |
| $page_hook | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | Το hook που δημιουργήθηκε για αυτή τη σελίδα. |

### Since

- 2.0.0
### Source

Ορίζεται στο [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/admin-pages/class-base-admin-page.php#L203) στην γραμμή 203
