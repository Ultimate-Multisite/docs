---
id: wu_page_added
title: Azzjoni - wu_page_added
sidebar_label: wu_page_added
_i18n_hash: 91c9f283f9b26c81310bdb787db88fec
---
# Azzjoni: wu_page_added

Ħalli lill-iżviluppaturi tal-estensjonijiet iħaddmu affarijiet addizzjonali meta l-paġni jiġu rreġistrati.

B'differenza minn wu_page_load, li jaħdem biss meta tkun qed tidher paġna speċifika, dan il-hook jaħdem waqt ir-reġistrazzjoni għal kull paġna tal-amministrazzjoni li tiżdied bl-użu tal-kodiċi ta' WP Ultimo.

## Parametri {#parameters}

| Isem | Tip | Deskrizzjoni |
|------|------|-------------|
| $page_id | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | L-ID ta' din il-paġna. |
| $page_hook | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | Il-hook iġġenerat għal din il-paġna. |

### Minn {#since}

- 2.0.0
### Sors {#source}

Definit f'[`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/admin-pages/class-base-admin-page.php#L203) fil-linja 203
