---
id: wu_page_this-id_before_render
title: 'Action - wu_page_{$this->id}_before_render'
sidebar_label: 'wu_page_{$this->id}_before_render'
_i18n_hash: c2622b55e1ff656ba579f3ee25646584
---
# Ação: wu_page_\{$this->id\}_before_render

Dispara antes de renderizar uma página específica.

Uso: A parte dinâmica precisa ser substituída por um ID de página válido, por exemplo add_action('wu_page_events_before_render', 'do_something_callback', 10, 2);

## Parâmetros

| Nome | Tipo | Descrição |
|------|------|-----------|
| $page_id | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | O id da página. |
| $this | `\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | A instância da Base Admin Page. |

### Desde

- 1.8.2

### Fonte

Definido em [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/admin-pages/class-base-admin-page.php#L368) na linha 368
