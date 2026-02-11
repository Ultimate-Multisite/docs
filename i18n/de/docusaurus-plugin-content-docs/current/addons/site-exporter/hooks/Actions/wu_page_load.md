---
id: wu_page_load
title: Aktion - wu_page_load
sidebar_label: wu_page_load
_i18n_hash: 5033e5832dd8b614f857f0cad7b79fc3
---
# Action: wu_page_load

Ermöglicht Plugin-Entwicklern, zusätzliche Hooks zu unseren Seiten hinzuzufügen.

## Parameter

| Name | Typ | Beschreibung |
|------|------|-------------|
| $page_id | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | Die ID dieser Seite. |
| $page_hook | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | Der Hook, der zu dieser Seite generiert wurde. |

### Seit

- 1.8.2

### Quelle

Definiert in [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/admin-pages/class-base-admin-page.php#L289) in Zeile 289
