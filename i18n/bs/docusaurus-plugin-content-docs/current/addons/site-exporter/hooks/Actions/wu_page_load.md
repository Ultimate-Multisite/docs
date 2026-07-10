---
id: wu_page_load
title: Akcija - wu_page_load
sidebar_label: wu_page_load
_i18n_hash: 5033e5832dd8b614f857f0cad7b79fc3
---
# Akcija: wu_page_load {#action-wupageload}

Omogućava programerima pluginova da dodaju dodatne hook-ove na naše stranice.

## Parametri {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $page_id | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | ID ove stranice. |
| $page_hook | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | Hook generisan za ovu stranicu. |

### Od {#since}

- 1.8.2
### Izvor {#source}

Definisano u [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/admin-pages/class-base-admin-page.php#L289) na liniji 289
