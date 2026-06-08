---
id: wu_page_after_render
title: Δράση - wu_page_after_render
sidebar_label: wu_page_after_render
_i18n_hash: 77cf47ec19b13c20beb0aa2d61dcf857
---
# Action: wu_page_after_render

Εκτελείται αφού γίνει το rendering μιας σελίδας.

## Παράμετροι

| Όνομα | Τύπος | Περιγραφή |
|------|------|-------------|
| $page_id | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | Ο αναγνωριστικός αριθμός (ID) της σελίδας. |
| $this | `\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | Η εντολή (instance) της Βασικής Διαχειριστικής Σελίδας. |

### Από

- 1.8.2
### Πηγή

Ορίζεται στο [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/admin-pages/class-base-admin-page.php#L382) στην γραμμή 382
