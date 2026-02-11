---
id: wu_page_added
title: ''
sidebar_label: wu_page_added
_i18n_hash: 91c9f283f9b26c81310bdb787db88fec
---
# Aktion: wu_page_added

Erlaubt Plugin-Entwicklern, zusätzliche Aktionen auszuführen, wenn Seiten registriert werden.

Im Gegensatz zum wu_page_load, der nur ausgeführt wird, wenn eine bestimmte Seite angezeigt wird, wird dieser Hook bei der Registrierung für jede Admin-Seite ausgeführt, die mit WP Ultimo-Code hinzugefügt wird.

## Parameter

| Name | Typ | Beschreibung |
|------|------|-------------|
| $page_id | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | Die ID dieser Seite. |
| $page_hook | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | Der Hook, der für diese Seite generiert wurde. |

### Seit

- 2.0.0

### Quelle

Defined in [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/admin-pages/class-base-admin-page.php#L203) at line 203
