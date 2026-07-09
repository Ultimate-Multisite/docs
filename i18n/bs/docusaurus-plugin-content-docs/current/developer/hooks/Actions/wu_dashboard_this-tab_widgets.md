---
id: wu_dashboard_this-tab_widgets
title: 'Akcija - wu_dashboard_{$this->tab}_widgets'
sidebar_label: 'wu_dashboard_{$this->tab}_widgets'
_i18n_hash: 375d02727169a29da6237374f0ad979a
---
# Action: wu_dashboard_{$this->tab}_widgets {#action-wudashboardthis-tabwidgets}

Omogućava programerima pluginova da dodaju widgete na Network Dashboard Panel.

## Parametri {#parameters}

| Ime | Tip | Opis |
|------|------|-------------|
| $tab | `string` | Trenutni tab. |
| $screen | `\WP_Screen` | Objekt ekrana. |
| $page | `\WP_Ultimo\Admin_Pages\Dashboard_Admin_Page` | Instanca Ultimate Multisite admin stranice. |

### Od {#since}

- 2.0.0
### Izvor {#source}

Definisano u [`inc/admin-pages/class-dashboard-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/admin-pages/class-dashboard-admin-page.php#L214) na liniji 214
