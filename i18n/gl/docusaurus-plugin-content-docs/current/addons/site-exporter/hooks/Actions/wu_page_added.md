---
id: wu_page_added
title: Acción - wu_page_added
sidebar_label: wu_page_added
_i18n_hash: 91c9f283f9b26c81310bdb787db88fec
---
# Acción: wu_page_added

Permite aos desenvolvedores de plugins executar cousas adicionais cando se rexistran páxinas.

A diferenza de wu_page_load, que só se executa cando se está a ver unha páxina específica, este hook execútase no rexistro para cada páxina de administración que se engade usando código de WP Ultimo.

## Parámetros

| Nome | Tipo | Descrición |
|------|------|-------------|
| $page_id | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | O ID desta páxina. |
| $page_hook | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | O hook xerado para esta páxina. |

### Desde

- 2.0.0
### Fonte

Definido en [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/admin-pages/class-base-admin-page.php#L203) na liña 203
