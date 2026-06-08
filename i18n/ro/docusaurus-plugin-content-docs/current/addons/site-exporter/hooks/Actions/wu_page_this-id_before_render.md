---
id: wu_page_this-id_before_render
title: 'Acțiune - wu_page_{$this->id}_before_render'
sidebar_label: 'wu_page_{$this->id}_before_render'
_i18n_hash: c2622b55e1ff656ba579f3ee25646584
---
# Action: wu_page_\{$this->id\}_before_render

Se declanșează înainte de a randa o pagină specifică.

Utilizare: Partea dinamică trebuie înlocuită cu un ID de pagină valid, de exemplu: `add_action('wu_page_events_before_render', 'do_something_callback', 10, 2);`

## Parametri

| Name | Type | Description |
|------|------|-------------|
| $page_id | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | ID-ul paginii. |
| $this | `\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | Instanța Paginii de Administrare de Bază. |

### De la

- 1.8.2
### Sursă

Definit în [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/admin-pages/class-base-admin-page.php#L368) la linia 368
