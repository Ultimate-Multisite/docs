---
id: wu_dashboard_this-tab_widgets
title: 'Action - wu_dashboard_{$this->tab}_widgets'
sidebar_label: 'wu_dashboard_{$this->tab}_widgets'
_i18n_hash: 375d02727169a29da6237374f0ad979a
---
# Action: wu_dashboard_\{$this->tab\}_widgets

Umožňuje vývojářům pluginů přidat widgety na panel Network Dashboard.

## Parametry {#parameters}

| Název | Typ | Popis |
|------|------|-------------|
| $tab | `string` | Aktuální záložka. |
| $screen | `\WP_Screen` | Objekt obrazovky. |
| $page | `\WP_Ultimo\Admin_Pages\Dashboard_Admin_Page` | Instancí administrální stránky Ultimate Multisite. |

### Od {#since}

- 2.0.0
### Zdroj {#source}

Definováno v [`inc/admin-pages/class-dashboard-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/admin-pages/class-dashboard-admin-page.php#L214) na řádku 214
