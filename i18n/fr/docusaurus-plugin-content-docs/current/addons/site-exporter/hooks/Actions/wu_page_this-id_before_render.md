---
id: wu_page_this-id_before_render
title: 'Action - wu_page_{$this->id}_before_render'
sidebar_label: 'wu_page_{$this->id}_before_render'
_i18n_hash: c2622b55e1ff656ba579f3ee25646584
---
# Action: wu_page_\{$this->id\}_before_render

S'exécute avant le rendu d'une page spécifique.

Utilisation : la partie dynamique doit être remplacée par un identifiant de page valide, par ex. add_action('wu_page_events_before_render', 'do_something_callback', 10, 2);

## Paramètres

| Nom | Type | Description |
|------|------|-------------|
| $page_id | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | L'identifiant de la page. |
| $this | `\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | L'instance Base Admin Page. |

### Depuis

- 1.8.2

### Source

Défini dans [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/admin-pages/class-base-admin-page.php#L368) à la ligne 368
