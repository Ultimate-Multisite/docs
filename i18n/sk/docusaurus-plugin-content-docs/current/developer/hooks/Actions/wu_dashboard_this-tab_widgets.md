---
id: wu_dashboard_this-tab_widgets
title: 'Akcia - wu_dashboard_{$this->tab}_widgets'
sidebar_label: 'wu_dashboard_{$this->tab}_widgets'
_i18n_hash: 375d02727169a29da6237374f0ad979a
---
# Action: wu_dashboard_\{$this->tab\}_widgets {#action-wudashboardthis-tabwidgets}

Umožňuje vývojárom pluginov pridávať widgety do panela Network Dashboard.

## Parametre {#parameters}

| Názov | Typ | Popis |
|------|------|-------------|
| $tab | `string` | Aktuálna karta. |
| $screen | `\WP_Screen` | Objekt obrazovky. |
| $page | `\WP_Ultimo\Admin_Pages\Dashboard_Admin_Page` | Inštancia admin stránky Ultimate Multisite. |

### Od verzie {#since}

- 2.0.0
### Zdroj {#source}

Definované v [`inc/admin-pages/class-dashboard-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/admin-pages/class-dashboard-admin-page.php#L214) na riadku 214
