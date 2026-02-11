---
id: wu_page_this-id_load
title: 'Ação - wu_page_{$this->id}_load'
sidebar_label: 'wu_page_{$this->id}_load'
_i18n_hash: d34bb63c8517d5bba151d14c83b3bb44
---
# Ação: wu_page_${this->id}_load

Permite que desenvolvedores de plugins adicionem ganchos adicionais a páginas específicas.

Uso: A parte dinâmica precisa ser substituída por um ID de página válido, por exemplo, add_action('wu_page_events_load', 'callback_with_aditional_hook', 10, 2);

## Parâmetros

| Nome | Tipo | Descrição |
|------|------|-------------|
| $page_id | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | O ID desta página. |
| $page_hook | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | O hook gerado para esta página. |

### Desde

- 1.8.2

### Fonte

Definido em [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/admin-pages/class-base-admin-page.php#L301) na linha 301
