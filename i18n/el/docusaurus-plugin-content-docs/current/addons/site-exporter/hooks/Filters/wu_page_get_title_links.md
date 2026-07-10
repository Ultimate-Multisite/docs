---
id: wu_page_get_title_links
title: Φίλτρο - wu_page_get_title_links
sidebar_label: wu_page_get_title_links
_i18n_hash: c0ede349078aea8e4fe06e53a12b1c38
---
# Φίλτρο: wu_page_get_title_links {#filter-wupagegettitlelinks}

Επιτρέπει στους developers plugins, και και σε εμάς, να προσθέτουν συνδέσμους δράσης στις σελίδες επεξεργασίας μας.

## Παράμετροι {#parameters}

| Όνομα | Τύπος | Περιγραφή |
|------|------|-------------|
| $action_links | `array\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | Οι συνδέσμοι δράσης. |
| $base_admin_page | `\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | Αυτή η ενσωμάτωση. |

### Από {#since}

- 1.8.2
### Πηγή {#source}

Ορίζεται στο [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/admin-pages/class-base-admin-page.php#L646) στην γραμμή 646


## Επιστρέφει {#returns}
Το array των συνδέσμων δράσης.
