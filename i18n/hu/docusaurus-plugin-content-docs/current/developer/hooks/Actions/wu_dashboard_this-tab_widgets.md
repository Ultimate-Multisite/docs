---
id: wu_dashboard_this-tab_widgets
title: 'Akció - wu_dashboard_{$this->tab}_widgets'
sidebar_label: 'wu_dashboard_{$this->tab}_widgets'
_i18n_hash: 375d02727169a29da6237374f0ad979a
---
# Action: wu_dashboard_\{$this->tab\}_widgets

Lehetővé teszi a plugin fejlesztőknek, hogy widgeteket adjanak hozzá a Hálózatütemény (Network Dashboard) paneléhez.

## Paraméterek

| Neve | Típus | Leírás |
|------|------|-------------|
| $tab | `string` | Az aktuális lap (tab). |
| $screen | `\WP_Screen` | A képernyő objektuma. |
| $page | `\WP_Ultimo\Admin_Pages\Dashboard_Admin_Page` | Ultimate Multisite admin oldal példányát. |

### Since

- 2.0.0
### Source

Definálva a [`inc/admin-pages/class-dashboard-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/admin-pages/class-dashboard-admin-page.php#L214) fájlban, 214-sorban
