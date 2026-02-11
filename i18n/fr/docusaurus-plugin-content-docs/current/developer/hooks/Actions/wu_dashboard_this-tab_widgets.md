---
id: wu_dashboard_this-tab_widgets
title: 'Action - wu_dashboard_{$this->tab}_widgets'
sidebar_label: 'wu_dashboard_{$this->tab}_widgets'
_i18n_hash: 375d02727169a29da6237374f0ad979a
---
# Action: wu_dashboard_\{$this->tab\}_widgets

Permet aux développeurs de plugins d’ajouter des widgets au panneau du tableau de bord réseau.

## Paramètres

| Nom | Type | Description |
|------|------|-------------|
| $tab | `string` | L'onglet actuel. |
| $screen | `\WP_Screen` | L'objet d'écran. |
| $page | `\WP_Ultimo\Admin_Pages\Dashboard_Admin_Page` | Instance de page d'administration Ultimate Multisite. |

### Depuis

- 2.0.0

### Source

Défini dans [`inc/admin-pages/class-dashboard-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/admin-pages/class-dashboard-admin-page.php#L214) à la ligne 214
