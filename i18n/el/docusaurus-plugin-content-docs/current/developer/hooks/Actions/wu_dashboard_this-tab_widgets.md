---
id: wu_dashboard_this-tab_widgets
title: 'Δράση - wu_dashboard_{$this->tab}_widgets'
sidebar_label: 'wu_dashboard_{$this->tab}_widgets'
_i18n_hash: 375d02727169a29da6237374f0ad979a
---
# Action: wu_dashboard_\{$this->tab\}_widgets

Επιτρέπει στους προγραμματιστές plugins να προσθέτουν widgets στο Network Dashboard Panel.

## Παράμετροι {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $tab | `string` | Η τρέχουσα καρτέλα. |
| $screen | `\WP_Screen` | Το αντικείμενο της οθόνης. |
| $page | `\WP_Ultimo\Admin_Pages\Dashboard_Admin_Page` | Αντίγραφο της σελίδας διαχείρισης Ultimate Multisite. |

### Since {#since}

- 2.0.0
### Source {#source}

Ορίζεται στο [`inc/admin-pages/class-dashboard-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/admin-pages/class-dashboard-admin-page.php#L214) στην γραμμή 214
