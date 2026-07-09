---
id: wu_page_load
title: Action - wu_page_load
sidebar_label: wu_page_load
_i18n_hash: 5033e5832dd8b614f857f0cad7b79fc3
---
# Handling: wu_page_load {#action-wupageload}

Lar plugin-utviklere legge til ekstra hooks på våre sider.

## Parametere {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $page_id | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | ID-en til denne siden. |
| $page_hook | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | Hooken som genereres for denne siden. |

### Tilgjengelig fra {#since}

- 1.8.2
### Kilde {#source}

Definert i [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/admin-pages/class-base-admin-page.php#L289) på linje 289
