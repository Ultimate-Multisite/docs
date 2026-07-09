---
id: wu_page_load
title: Ação - wu_page_load
sidebar_label: wu_page_load
_i18n_hash: 5033e5832dd8b614f857f0cad7b79fc3
---
# Action: wu_page_load {#action-wupageload}

Permite que os programadores de plugin adicionem hooks adicionais às nossas páginas.

## Parâmetros {#parameters}

| Nome | Tipo | Descrição |
|------|------|-------------|
| $page_id | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | O ID desta página. |
| $page_hook | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | O hook gerado para esta página. |

### Desde {#since}

- 1.8.2
### Fonte {#source}

Definido em [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/admin-pages/class-base-admin-page.php#L289) na linha 289
