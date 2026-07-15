---
id: wu_page_before_render
title: Δράση - wu_page_before_render
sidebar_label: wu_page_before_render
_i18n_hash: fc447057ea50e758d4cf83bef375f7e6
---
# Action: wu_page_before_render

Εκτελείται πριν από την εμφάνιση (rendering) μιας σελίδας.

## Παράμετροι {#parameters}

| Όνομα | Τύπος | Περιγραφή |
|------|------|-------------|
| $page_id | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | Ο αναγνωριστικός αριθμός (ID) της σελίδας. |
| $this | `\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | Η εντολή (instance) της Βασικής Διαχειριστικής Σελίδας. |

### Από {#since}

- 1.8.2
### Πηγή {#source}

Ορίζεται στο [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/admin-pages/class-base-admin-page.php#L356) στην γραμμή 356
