---
id: wu_page_added
title: Ação - wu_page_added
sidebar_label: wu_page_added
_i18n_hash: 91c9f283f9b26c81310bdb787db88fec
---
# Ação: wu_page_added

Permite que programadores de plugins executem ações adicionais quando páginas são registadas.

Ao contrário de wu_page_load, que só é executado quando uma página específica está a ser visualizada, este hook é executado no registo de cada página de administração adicionada usando código do WP Ultimo.

## Parâmetros

| Nome | Tipo | Descrição |
|------|------|-------------|
| $page_id | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | O ID desta página. |
| $page_hook | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | O hook gerado para esta página. |

### Desde

- 2.0.0
### Fonte

Definido em [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/admin-pages/class-base-admin-page.php#L203) na linha 203
