---
id: wu_page_this-id_after_render
title: 'Ação - wu_page_{$this->id}_after_render'
sidebar_label: 'wu_page_{$this->id}_after_render'
_i18n_hash: 2bdd062afe3dbfa7e50dc5162fba9b99
---
# Action: wu_page_\{$this->id\}_after_render

Dispara após renderizar uma página específica.

Uso: A parte dinâmica precisa ser substituída por um id de página válido, por exemplo, add_action('wu_page_events_after_render', 'do_something_callback', 10, 2);

## Parâmetros {#parameters}

| Nome | Tipo | Descrição |
|------|------|-------------|
| $page_id | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | O id da página. |
| $this | `\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | A instância de Base Admin Page. |

### Desde {#since}

- 1.8.2
### Fonte {#source}

Definido em [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/admin-pages/class-base-admin-page.php#L394) na linha 394
