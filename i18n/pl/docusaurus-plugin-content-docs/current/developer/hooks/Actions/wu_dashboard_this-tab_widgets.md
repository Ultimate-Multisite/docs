---
id: wu_dashboard_this-tab_widgets
title: 'Akcja - wu_dashboard_{$this->tab}_widgets'
sidebar_label: 'wu_dashboard_{$this->tab}_widgets'
_i18n_hash: 375d02727169a29da6237374f0ad979a
---
# Action: wu_dashboard_\{$this->tab\}_widgets

Pozwala deweloperom pluginów na dodawanie widżetów do Panelu Dashboardu Sieci.

## Parametry {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $tab | `string` | Aktualna zakładka. |
| $screen | `\WP_Screen` | Obiekt ekranu. |
| $page | `\WP_Ultimo\Admin_Pages\Dashboard_Admin_Page` | Instancja strony administracyjnej Ultimate Multisite. |

### Since {#since}

- 2.0.0
### Source {#source}

Zdefiniowane w [`inc/admin-pages/class-dashboard-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/admin-pages/class-dashboard-admin-page.php#L214) w linii 214
