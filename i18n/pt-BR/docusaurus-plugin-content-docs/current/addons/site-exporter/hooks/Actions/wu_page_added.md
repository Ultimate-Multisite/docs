---
id: wu_page_added
title: Action - wu_page_added
sidebar_label: wu_page_added
_i18n_hash: 91c9f283f9b26c81310bdb787db88fec
---
# Ação: wu_page_added

Permite que desenvolvedores de plugins executem coisas adicionais quando páginas são registradas.

Ao contrário do wu_page_load, que só é executado quando uma página específica está sendo visualizada, este hook é executado no registro de cada página administrativa que está sendo adicionada usando código do WP Ultimo.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $page_id | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | O ID desta página. |
| $page_hook | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | O hook gerado para esta página. |

### Since

- 2.0.0

### Source

Definido em [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/admin-pages/class-base-admin-page.php#L203) na linha 203
