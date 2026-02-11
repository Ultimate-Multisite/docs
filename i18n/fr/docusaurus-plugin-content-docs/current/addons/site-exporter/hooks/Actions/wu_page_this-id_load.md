---
id: wu_page_this-id_load
title: 'Action - wu_page_{$this->id}_load'
sidebar_label: 'wu_page_{$this->id}_load'
_i18n_hash: d34bb63c8517d5bba151d14c83b3bb44
---
# Action: wu_page_\{$this->id\}_load

Permet aux développeurs de plugins d'ajouter des hooks supplémentaires à une page spécifique.

Usage : La partie dynamique doit être remplacée par un ID de page valide, par ex. add_action('wu_page_events_load', 'callback_with_aditional_hook', 10, 2);

## Paramètres

| Nom | Type | Description |
|------|------|-------------|
| $page_id | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | L'ID de cette page. |
| $page_hook | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | Le hook généré pour cette page. |

### Depuis

- 1.8.2

### Source

Défini dans [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/admin-pages/class-base-admin-page.php#L301) à la ligne 301
